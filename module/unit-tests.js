export const runUnitTests = async function () {
  const actorName = "Testy";
  const actor = game.actors.entities.find((o) => o.name === actorName);
  if (!actor) {
    const msg = game.i18n.localize("PF1.ErrorCouldNotFindActorByName").format(actorName);
    console.error(msg);
    return ui.notifications.error(msg);
  }

  console.log("Running unit tests...");
  let tests = [];

  tests.push(...(await runSkillTests(actor)));
  tests.push(...(await runAttackTests(actor)));
  tests.push(...(await runMiscActorTests(actor)));

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
