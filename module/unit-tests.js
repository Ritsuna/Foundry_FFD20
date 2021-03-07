export const runUnitTests = async function () {
  const actorName = "Testy";
  const actor = game.actors.entities.find((o) => o.name === actorName);
  if (!actor) {
    const msg = game.i18n.localize("FFD20.ErrorCouldNotFindActorByName").format(actorName);
    console.error(msg);
    return ui.notifications.error(msg);
  }

  console.log("Running unit tests...");
  let tests = [];

  // tests.push(...(await runSkillTests(actor)));
  // tests.push(...(await runAttackTests(actor)));
  // tests.push(...(await runMiscActorTests(actor)));
  tests.push(...(await runSizeRollTests()));

  // Finish unit tests
  const successes = tests.filter((o) => !o.failure);
  const failures = tests.filter((o) => o.failure);
  console.log(`Unit tests done. ${successes.length}/${tests.length} succeeded.`);
  if (failures.length) {
    console.log("Failures:", failures);
  }
};

class UnitTestResult {
  constructor(name) {
    this.name = name;
    this.failure = false;
    this.error = null;
    this.chatMessages = [];
  }

  fail(error) {
    this.failure = true;
    if (error) this.error = error;
    console.log(`${this.name} failed!`, this.error);
  }

  succeed() {
    this.failure = false;
    this.error = null;
    console.log(`${this.name} succeeded!`);
  }
}

const runSizeRollTests = async function () {
  let result = [];

  await _addSizeRollTest("1d6", "1d6", result);
  await _addSizeRollTest("1d4", "1d6", result, { targetSize: 5 });
  await _addSizeRollTest("1d6", "1d8", result, { targetSize: 5 });
  await _addSizeRollTest("1d8", "1d6", result, { targetSize: 3 });
  await _addSizeRollTest("1d6", "1d4", result, { targetSize: 3 });
  await _addSizeRollTest("2d4", "2d6", result, { targetSize: 5 });
  await _addSizeRollTest("2d6", "6d6", result, { targetSize: 7 });
  await _addSizeRollTest("6d8", "2d8", result, { targetSize: 4, initialSize: 7 });
  await _addSizeRollTest("6d8", "3d8", result, { targetSize: 2, initialSize: 5 });
  await _addSizeRollTest("2d10", "4d8", result, { targetSize: 5 });
  await _addSizeRollTest("2d10", "2d8", result, { targetSize: 3 });
  await _addSizeRollTest("4d10", "8d8", result, { targetSize: 5 });

  return result;
};

const _addSizeRollTest = async function (
  formula,
  expectedFormula,
  resultArr,
  options = { targetSize: 4, initialSize: 4 }
) {
  options = mergeObject({ targetSize: 4, initialSize: 4 }, options);
  const label = `Size roll: ${formula}, going from size ${options.initialSize} to ${options.targetSize}`;
  const test = new UnitTestResult(label);

  const re = /^([0-9]+)d([0-9]+)$/;
  if (!formula.match(re)) {
    throw new Error(`Unit test (size roll): incorrect input formula: '${formula}'`);
  }
  const baseDie = [parseInt(RegExp.$1), parseInt(RegExp.$2)];
  if (!expectedFormula.match(re)) {
    throw new Error(`Unit test (size roll): incorrect expected formula: '${expectedFormula}'`);
  }
  const expectedDie = [parseInt(RegExp.$1), parseInt(RegExp.$2)];
  resultArr.push(test);

  try {
    const roll = new Roll(
      `sizeRoll(${baseDie[0]}, ${baseDie[1]}, ${options.targetSize}, ${options.initialSize})`
    ).roll();
    const term = roll.terms[0];
    if (term.number !== expectedDie[0] || term.faces !== expectedDie[1])
      throw new Error(
        `Incorrect result die. Expected: ${expectedDie[0]}d${expectedDie[1]}, got: ${term.number}d${term.faces}`
      );
    test.succeed();
  } catch (err) {
    test.fail(err);
  }
};

const runSkillTests = async function (actor) {
  let result = [];

  // Run base skill
  {
    let test = new UnitTestResult("Normal skill check");
    try {
      await actor.rollSkill("acr", { skipDialog: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run sub-skill
  {
    let test = new UnitTestResult("Sub-skill check");
    try {
      await actor.rollSkill("prf.subSkills.prf1", { skipDialog: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run custom skill
  {
    let test = new UnitTestResult("Custom skill check");
    try {
      await actor.rollSkill("test", { skipDialog: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  return result;
};

const runAttackTests = async function (actor) {
  let result = [];

  // Run Longsword attack
  {
    let test = new UnitTestResult("Longsword attack");
    try {
      const item = actor.items.find((o) => o.name === "Longsword" && o.type === "attack");
      item.useAttack({ skipDialog: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run Fireball attack
  {
    let test = new UnitTestResult("Fireball spell");
    try {
      const item = actor.items.find((o) => o.name === "Fireball" && o.type === "spell");
      item.useAttack({ skipDialog: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  return result;
};

const runMiscActorTests = async function (actor) {
  let result = [];

  // Run BAB test
  {
    let test = new UnitTestResult("BAB");
    try {
      await actor.rollBAB();
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run CMB test
  {
    let test = new UnitTestResult("CMB");
    try {
      await actor.rollCMB();
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run Fortitude test
  {
    let test = new UnitTestResult("Fortitude Saving Throw");
    try {
      await actor.rollSavingThrow("fort", { skipPrompt: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run Reflex test
  {
    let test = new UnitTestResult("Reflex Saving Throw");
    try {
      await actor.rollSavingThrow("ref", { skipPrompt: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run Will test
  {
    let test = new UnitTestResult("Will Saving Throw");
    try {
      await actor.rollSavingThrow("will", { skipPrompt: true });
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  // Run Initiative test
  {
    let test = new UnitTestResult("Initiative");
    try {
      await actor.rollInitiative();
      test.succeed();
    } catch (e) {
      test.fail(e);
    }
    result.push(test);
  }

  return result;
};
