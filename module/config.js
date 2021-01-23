// Namespace ffd20lnrw Configuration Values
export const ffd20lnrw = {};

ffd20lnrw.re = {
  traitSeparator: /\s*[;]\s*/g,
};

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
ffd20lnrw.abilities = {
  str: "ffd20lnrw.AbilityStr",
  dex: "ffd20lnrw.AbilityDex",
  con: "ffd20lnrw.AbilityCon",
  int: "ffd20lnrw.AbilityInt",
  wis: "ffd20lnrw.AbilityWis",
  cha: "ffd20lnrw.AbilityCha",
};

ffd20lnrw.abilitiesShort = {
  str: "ffd20lnrw.AbilityShortStr",
  dex: "ffd20lnrw.AbilityShortDex",
  con: "ffd20lnrw.AbilityShortCon",
  int: "ffd20lnrw.AbilityShortInt",
  wis: "ffd20lnrw.AbilityShortWis",
  cha: "ffd20lnrw.AbilityShortCha",
};

ffd20lnrw.abilityCost = {
  7: -4,
  8: -2,
  9: -1,
  10: 0,
  11: 1,
  12: 2,
  13: 3,
  14: 5,
  15: 7,
  16: 10,
  17: 13,
  18: 17,
};

/**
 * The set of Saving Throws
 * @type {Object}
 */
ffd20lnrw.savingThrows = {
  fort: "ffd20lnrw.SavingThrowFort",
  ref: "ffd20lnrw.SavingThrowRef",
  will: "ffd20lnrw.SavingThrowWill",
};

ffd20lnrw.classTypes = {
  base: "ffd20lnrw.ClassTypeBase",
  prestige: "ffd20lnrw.ClassTypePrestige",
  npc: "ffd20lnrw.ClassTypeNPC",
  racial: "ffd20lnrw.ClassTypeRacial",
};

ffd20lnrw.classSubTypes = {
  core: "ffd20lnrw.ClassSubTypeCore",
  coreArc: "ffd20lnrw.ClassSubTypeCoreArc",
  base: "ffd20lnrw.ClassSubTypeBase",
  baseArc: "ffd20lnrw.ClassSubTypeBaseArc",
  hybrid: "ffd20lnrw.ClassSubTypeHybrid",
  hybridArc: "ffd20lnrw.ClassSubTypeHybridArc",
};

ffd20lnrw.countforexp = {
  exp: "ffd20lnrw.ClassExp",
  noExp: "ffd20lnrw.ClassNoExp",
};

ffd20lnrw.classCastingStats = {
  noncaster: "ffd20lnrw.NonCaster",
  int: "ffd20lnrw.AbilityShortInt",
  wis: "ffd20lnrw.AbilityShortWis",
  cha: "ffd20lnrw.AbilityShortCha",
}; 

ffd20lnrw.classBaseMPTypes = {
  noncaster: "ffd20lnrw.NonCaster",
  halfCaster: "ffd20lnrw.HalfCaster",
  pacman: "ffd20lnrw.Pacman",
  fullCaster: "ffd20lnrw.FullCaster",
}; 

// Max Spell Level
ffd20lnrw.ClassSpellProgression = {
  noncaster: 0,
  halfCaster: 4,
  pacman: 6,
  fullCaster: 9,
};

// Character MP from levels
ffd20lnrw.classMPlevels = {
// level          1   2   3   4   5   6   7   8   9   10   11    12    13    14    15    16    17    18    19    20
noncaster:     [0],
halfCaster:    [0,  0,  0,  1,  2,  3,  4,  5,  6,   7,   8,   10,   12,   14,   16,   19,   22,   25,   29,   33,],
pacman:        [2,  3,  4,  5,  6,  8, 10, 13, 16,  20,  24,   29,   34,   39,   45,   51,   57,   64,   71,   79,],
fullCaster:    [3,  4,  5,  6,  8, 11, 15, 20, 26,  32,  39,   47,   56,   65,   75,   86,   98,  110,  122,  135,],
};

// Character MP from stat
ffd20lnrw.classMPStatsBonus = {
// stat mod 0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17
  1:       [0,   1,   1,   1,   1,   2,   2,   2,   2,   3,   3,   3,   3,   4,   4,   4,   4,   5,],
  2:       [0,   1,   3,   3,   3,   4,   6,   6,   6,   7,   9,   9,   9,  10,  12,  12,  12,  13,],
  3:       [0,   1,   3,   6,   6,   7,   9,  12,  12,  13,  15,  18,  18,  19,  21,  24,  24,  25,],
  4:       [0,   1,   3,   6,  10,  11,  13,  16,  20,  21,  23,  26,  30,  31,  33,  36,  40,  41,],
  5:       [0,   1,   3,   6,  10,  16,  18,  21,  25,  31,  33,  36,  40,  46,  48,  51,  55,  61,],
  6:       [0,   1,   3,   6,  10,  16,  24,  27,  31,  37,  45,  48,  52,  58,  66,  69,  73,  79,],
  7:       [0,   1,   3,   6,  10,  16,  24,  34,  38,  44,  52,  62,  66,  72,  80,  90,  94, 100,],
  8:       [0,   1,   3,   6,  10,  16,  24,  34,  46,  52,  60,  70,  82,  88,  96, 106, 118, 124,],
  9:       [0,   1,   3,   6,  10,  16,  24,  34,  46,  61,  69,  79,  91, 106, 114, 124, 136, 151,],
};

// to calculate auto mp
ffd20lnrw.classBaseMPauto = {
no: "ffd20lnrw.No",
yes: "ffd20lnrw.Yes",
};

ffd20lnrw.classBAB = {
  low: "ffd20lnrw.Low",
  med: "ffd20lnrw.Medium",
  high: "ffd20lnrw.High",
};

ffd20lnrw.classSavingThrows = {
  low: "ffd20lnrw.Poor",
  high: "ffd20lnrw.Good",
};

ffd20lnrw.classBABFormulas = {
  low: "floor(@level * 0.5)",
  med: "floor(@level * 0.75)",
  high: "@level",
};

ffd20lnrw.classSavingThrowFormulas = {
  base: {
    low: "floor(@level / 3)",
    high: "2 + floor(@level / 2)",
  },
  prestige: {
    low: "floor((1 + @level) / 3)",
    high: "floor((1 + @level) / 2)",
  },
  npc: {
    low: "floor(@level / 3)",
    high: "2 + floor(@level / 2)",
  },
  racial: {
    low: "floor(@level / 3)",
    high: "2 + floor(@level / 2)",
  },
};

ffd20lnrw.favouredClassBonuses = {
  hp: "ffd20lnrw.FavouredClassHP",
  skill: "ffd20lnrw.FavouredClassSkill",
  alt: "ffd20lnrw.FavouredClassAlt",
};

/**
 * The set of Armor Classes
 * @type {Object}
 */
ffd20lnrw.ac = {
  normal: "ffd20lnrw.ACNormal",
  touch: "ffd20lnrw.ACTouch",
  flatFooted: "ffd20lnrw.ACFlatFooted",
};

/**
 * The set of Armor Class modifier types
 * @type {Object}
 */
ffd20lnrw.acValueLabels = {
  normal: "ffd20lnrw.ACTypeNormal",
  touch: "ffd20lnrw.ACTypeTouch",
  flatFooted: "ffd20lnrw.ACTypeFlatFooted",
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
ffd20lnrw.alignments = {
  lg: "ffd20lnrw.AlignmentLG",
  ng: "ffd20lnrw.AlignmentNG",
  cg: "ffd20lnrw.AlignmentCG",
  ln: "ffd20lnrw.AlignmentLN",
  tn: "ffd20lnrw.AlignmentTN",
  cn: "ffd20lnrw.AlignmentCN",
  le: "ffd20lnrw.AlignmentLE",
  ne: "ffd20lnrw.AlignmentNE",
  ce: "ffd20lnrw.AlignmentCE",
};

ffd20lnrw.alignmentsShort = {
  lg: "ffd20lnrw.AlignmentShortLG",
  ng: "ffd20lnrw.AlignmentShortNG",
  cg: "ffd20lnrw.AlignmentShortCG",
  ln: "ffd20lnrw.AlignmentShortLN",
  tn: "ffd20lnrw.AlignmentShortTN",
  cn: "ffd20lnrw.AlignmentShortCN",
  le: "ffd20lnrw.AlignmentShortLE",
  ne: "ffd20lnrw.AlignmentShortNE",
  ce: "ffd20lnrw.AlignmentShortCE",
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
ffd20lnrw.armorProficiencies = {
  lgt: "ffd20lnrw.ArmorProfLight",
  med: "ffd20lnrw.ArmorProfMedium",
  hvy: "ffd20lnrw.ArmorProfHeavy",
  shl: "ffd20lnrw.ArmorProfShield",
  twr: "ffd20lnrw.ArmorProfTowerShield",
};

ffd20lnrw.weaponProficiencies = {
  sim: "ffd20lnrw.WeaponProfSimple",
  mar: "ffd20lnrw.WeaponProfMartial",
  exo: "ffd20lnrw.WeaponProfExotic",
  che: "ffd20lnrw.WeaponProfChef",
  pow: "ffd20lnrw.WeaponProfPower",
};

/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
ffd20lnrw.abilityActivationTypes = {
  passive: "ffd20lnrw.ActivationTypePassive",
  free: "ffd20lnrw.ActivationTypeFree",
  swift: "ffd20lnrw.ActivationTypeSwift",
  immediate: "ffd20lnrw.ActivationTypeImmediate",
  move: "ffd20lnrw.ActivationTypeMove",
  standard: "ffd20lnrw.ActivationTypeStandard",
  full: "ffd20lnrw.ActivationTypeFullround",
  attack: "ffd20lnrw.ActivationTypeAttack",
  round: "ffd20lnrw.ActivationTypeRound",
  minute: "ffd20lnrw.ActivationTypeMinute",
  hour: "ffd20lnrw.ActivationTypeHour",
  special: "ffd20lnrw.ActivationTypeSpecial",
};

/**
 * This describes plurals for activation types.
 */
ffd20lnrw.abilityActivationTypesPlurals = {
  free: "ffd20lnrw.ActivationTypeFreePlural",
  swift: "ffd20lnrw.ActivationTypeSwiftPlural",
  immediate: "ffd20lnrw.ActivationTypeImmediatePlural",
  move: "ffd20lnrw.ActivationTypeMovePlural",
  standard: "ffd20lnrw.ActivationTypeStandardPlural",
  full: "ffd20lnrw.ActivationTypeFullroundPlural",
  attack: "ffd20lnrw.ActivationTypeAttackPlural",
  round: "ffd20lnrw.ActivationTypeRoundPlural",
  minute: "ffd20lnrw.ActivationTypeMinutePlural",
  hour: "ffd20lnrw.ActivationTypeHourPlural",
};

ffd20lnrw.abilityActivationTypes_unchained = {
  passive: "ffd20lnrw.ActivationTypePassive",
  free: "ffd20lnrw.ActivationTypeFree",
  reaction: "ffd20lnrw.ActivationTypeReaction",
  action: "ffd20lnrw.ActivationTypeAction",
  minute: "ffd20lnrw.ActivationTypeMinute",
  hour: "ffd20lnrw.ActivationTypeHour",
  special: "ffd20lnrw.ActivationTypeSpecial",
};

ffd20lnrw.abilityActivationTypesPlurals_unchained = {
  passive: "ffd20lnrw.ActivationTypePassive",
  free: "ffd20lnrw.ActivationTypeFreePlural",
  reaction: "ffd20lnrw.ActivationTypeReactionPlural",
  action: "ffd20lnrw.ActivationTypeActionPlural",
  minute: "ffd20lnrw.ActivationTypeMinutePlural",
  hour: "ffd20lnrw.ActivationTypeHourPlural",
  special: "ffd20lnrw.ActivationTypeSpecial",
};

ffd20lnrw.woundThresholdConditions = {
  0: "ffd20lnrw.WoundLevelHealthy",
  1: "ffd20lnrw.WoundLevelGrazed",
  2: "ffd20lnrw.WoundLevelWounded",
  3: "ffd20lnrw.WoundLevelCritical",
};

ffd20lnrw.divineFocus = {
  0: "",
  1: "ffd20lnrw.SpellComponentDivineFocusAlone",
  2: "ffd20lnrw.SpellComponentDivineFocusMaterial",
  3: "ffd20lnrw.SpellComponentDivineFocusFocus",
};

ffd20lnrw.measureTemplateTypes = {
  cone: "ffd20lnrw.MeasureTemplateCone",
  circle: "ffd20lnrw.MeasureTemplateCircle",
  ray: "ffd20lnrw.MeasureTemplateRay",
  rect: "ffd20lnrw.MeasureTemplateRectangle",
};

/* -------------------------------------------- */

// Creature Sizes
ffd20lnrw.actorSizes = {
  fine: "ffd20lnrw.ActorSizeFine",
  dim: "ffd20lnrw.ActorSizeDiminutive",
  tiny: "ffd20lnrw.ActorSizeTiny",
  sm: "ffd20lnrw.ActorSizeSmall",
  med: "ffd20lnrw.ActorSizeMedium",
  lg: "ffd20lnrw.ActorSizeLarge",
  huge: "ffd20lnrw.ActorSizeHuge",
  grg: "ffd20lnrw.ActorSizeGargantuan",
  col: "ffd20lnrw.ActorSizeColossal",
};

ffd20lnrw.sizeChart = {
  fine: "F",
  dim: "D",
  tiny: "T",
  sm: "S",
  med: "M",
  lg: "L",
  huge: "H",
  grg: "G",
  col: "C",
};

ffd20lnrw.tokenSizes = {
  fine: { w: 1, h: 1, scale: 0.2 },
  dim: { w: 1, h: 1, scale: 0.4 },
  tiny: { w: 1, h: 1, scale: 0.6 },
  sm: { w: 1, h: 1, scale: 0.8 },
  med: { w: 1, h: 1, scale: 1 },
  lg: { w: 2, h: 2, scale: 1 },
  huge: { w: 3, h: 3, scale: 1 },
  grg: { w: 4, h: 4, scale: 1 },
  col: { w: 6, h: 6, scale: 1 },
};

ffd20lnrw.sizeMods = {
  fine: 8,
  dim: 4,
  tiny: 2,
  sm: 1,
  med: 0,
  lg: -1,
  huge: -2,
  grg: -4,
  col: -8,
};

ffd20lnrw.sizeSpecialMods = {
  fine: -8,
  dim: -4,
  tiny: -2,
  sm: -1,
  med: 0,
  lg: 1,
  huge: 2,
  grg: 4,
  col: 8,
};

ffd20lnrw.sizeFlyMods = {
  fine: 8,
  dim: 6,
  tiny: 4,
  sm: 2,
  med: 0,
  lg: -2,
  huge: -4,
  grg: -6,
  col: -8,
};

ffd20lnrw.sizeStealthMods = {
  fine: 16,
  dim: 12,
  tiny: 8,
  sm: 4,
  med: 0,
  lg: -4,
  huge: -8,
  grg: -12,
  col: -16,
};

ffd20lnrw.flyManeuverabilities = {
  clumsy: "ffd20lnrw.FlyManeuverabilityClumsy",
  poor: "ffd20lnrw.FlyManeuverabilityPoor",
  average: "ffd20lnrw.FlyManeuverabilityAverage",
  good: "ffd20lnrw.FlyManeuverabilityGood",
  perfect: "ffd20lnrw.FlyManeuverabilityPerfect",
};

ffd20lnrw.flyManeuverabilityValues = {
  clumsy: -8,
  poor: -4,
  average: 0,
  good: 4,
  perfect: 8,
};

ffd20lnrw.speedReduction = {
  5: 5,
  15: 10,
  20: 15,
  30: 20,
  35: 25,
  45: 30,
  50: 35,
  60: 40,
  65: 45,
  75: 50,
  80: 55,
  90: 60,
  95: 65,
  105: 70,
  110: 75,
  120: 80,
};

/* -------------------------------------------- */

ffd20lnrw.encumbranceLoads = [
  0,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  115,
  130,
  150,
  175,
  200,
  230,
  260,
  300,
  350,
  400,
  460,
  520,
  600,
  700,
  800,
  920,
  1040,
  1200,
  1400,
  1600,
];

ffd20lnrw.encumbranceMultipliers = {
  normal: {
    fine: 0.125,
    dim: 0.25,
    tiny: 0.5,
    sm: 0.75,
    med: 1,
    lg: 2,
    huge: 4,
    grg: 8,
    col: 16,
  },
  quadruped: {
    fine: 0.25,
    dim: 0.5,
    tiny: 0.75,
    sm: 1,
    med: 1.5,
    lg: 3,
    huge: 6,
    grg: 12,
    col: 24,
  },
};

/* -------------------------------------------- */

ffd20lnrw.itemTypes = {
  equipment: "ffd20lnrw.ItemTypeEquipment",
  weapon: "ffd20lnrw.ItemTypeWeapon",
  loot: "ffd20lnrw.ItemTypeLoot",
  consumable: "ffd20lnrw.ItemTypeConsumable",
  class: "ffd20lnrw.ItemTypeClass",
  buff: "ffd20lnrw.ItemTypeBuff",
  spell: "ffd20lnrw.ItemTypeSpell",
  feat: "ffd20lnrw.ItemTypeFeat",
  attack: "ffd20lnrw.ItemTypeAttack",
};

/**
 * Classification types for item action types
 * @type {Object}
 */
ffd20lnrw.itemActionTypes = {
  mwak: "ffd20lnrw.ActionMWAK",
  rwak: "ffd20lnrw.ActionRWAK",
  msak: "ffd20lnrw.ActionMSAK",
  rsak: "ffd20lnrw.ActionRSAK",
  mcman: "ffd20lnrw.ActionMCMan",
  rcman: "ffd20lnrw.ActionRCMan",
  spellsave: "ffd20lnrw.ActionSpellSave",
  save: "ffd20lnrw.ActionSave",
  heal: "ffd20lnrw.ActionHeal",
  other: "ffd20lnrw.ActionOther",
};

/* -------------------------------------------- */

ffd20lnrw.itemCapacityTypes = {
  items: "ffd20lnrw.ItemContainerCapacityItems",
  weight: "ffd20lnrw.ItemContainerCapacityWeight",
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
ffd20lnrw.limitedUsePeriods = {
  single: "ffd20lnrw.LimitedUseSingle",
  unlimited: "ffd20lnrw.Unlimited",
  day: "ffd20lnrw.LimitedUseDay",
  week: "ffd20lnrw.LimitedUseWeek",
  charges: "ffd20lnrw.LimitedUseCharges",
};

/* -------------------------------------------- */

// Equipment Types
ffd20lnrw.equipmentTypes = {
  armor: {
    _label: "ffd20lnrw.EquipTypeArmor",
    lightArmor: "ffd20lnrw.EquipTypeLight",
    mediumArmor: "ffd20lnrw.EquipTypeMedium",
    heavyArmor: "ffd20lnrw.EquipTypeHeavy",
  },
  shield: {
    _label: "ffd20lnrw.EquipTypeShield",
    lightShield: "ffd20lnrw.EquipTypeLightShield",
    heavyShield: "ffd20lnrw.EquipTypeHeavyShield",
    towerShield: "ffd20lnrw.EquipTypeTowerShield",
    other: "ffd20lnrw.EquipTypeOtherShield",
  },
  misc: {
    _label: "ffd20lnrw.Misc",
    wondrous: "ffd20lnrw.EquipTypeWondrousItem",
    clothing: "ffd20lnrw.EquipTypeClothing",
    other: "ffd20lnrw.Other",
  },
};

ffd20lnrw.equipmentSlots = {
  armor: {
    armor: "ffd20lnrw.EquipSlotArmor",
  },
  shield: {
    shield: "ffd20lnrw.EquipSlotShield",
  },
  misc: {
    slotless: "ffd20lnrw.EquipSlotSlotless",
    head: "ffd20lnrw.EquipSlotHead",
    headband: "ffd20lnrw.EquipSlotHeadband",
    eyes: "ffd20lnrw.EquipSlotEyes",
    shoulders: "ffd20lnrw.EquipSlotShoulders",
    neck: "ffd20lnrw.EquipSlotNeck",
    chest: "ffd20lnrw.EquipSlotChest",
    body: "ffd20lnrw.EquipSlotBody",
    belt: "ffd20lnrw.EquipSlotBelt",
    wrists: "ffd20lnrw.EquipSlotWrists",
    hands: "ffd20lnrw.EquipSlotHands",
    ring: "ffd20lnrw.EquipSlotRing",
    feet: "ffd20lnrw.EquipSlotFeet",
  },
};

ffd20lnrw.lootTypes = {
  gear: "ffd20lnrw.LootTypeGear",
  ammo: "ffd20lnrw.LootTypeAmmo",
  tradeGoods: "ffd20lnrw.LootTypeTradeGoods",
  misc: "ffd20lnrw.Misc",
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
ffd20lnrw.consumableTypes = {
  potion: "ffd20lnrw.ConsumableTypePotion",
  poison: "ffd20lnrw.ConsumableTypePoison",
  drug: "ffd20lnrw.ConsumableTypeDrug",
  scroll: "ffd20lnrw.ConsumableTypeScroll",
  wand: "ffd20lnrw.ConsumableTypeWand",
  staff: "ffd20lnrw.ConsumableTypeStaff",
  misc: "ffd20lnrw.Misc",
};

ffd20lnrw.attackTypes = {
  weapon: "ffd20lnrw.AttackTypeWeapon",
  natural: "ffd20lnrw.AttackTypeNatural",
  ability: "ffd20lnrw.AttackTypeAbility",
  racialAbility: "ffd20lnrw.AttackTypeRacial",
  item: "ffd20lnrw.Item",
  misc: "ffd20lnrw.Misc",
};

ffd20lnrw.featTypes = {
  feat: "ffd20lnrw.FeatTypeFeat",
  classFeat: "ffd20lnrw.FeatTypeClassFeat",
  trait: "ffd20lnrw.FeatTypeTraits",
  racial: "ffd20lnrw.FeatTypeRacial",
  misc: "ffd20lnrw.Misc",
  template: "ffd20lnrw.FeatTypeTemplate",
};

ffd20lnrw.abilityTypes = {
  ex: {
    short: "ffd20lnrw.AbilityTypeShortExtraordinary",
    long: "ffd20lnrw.AbilityTypeExtraordinary",
  },
  su: {
    short: "ffd20lnrw.AbilityTypeShortSupernatural",
    long: "ffd20lnrw.AbilityTypeSupernatural",
  },
  sp: {
    short: "ffd20lnrw.AbilityTypeShortSpell-Like",
    long: "ffd20lnrw.AbilityTypeSpell-Like",
  },
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
ffd20lnrw.currencies = {
  gil: "ffd20lnrw.CurrencyGil",
};

ffd20lnrw.acTypes = {
  armor: "Armor",
  shield: "Shield",
  natural: "Natural Armor",
};

ffd20lnrw.bonusModifiers = {
  untyped: "ffd20lnrw.BonusModifierUntyped",
  untypedPerm: "ffd20lnrw.BonusModifierUntypedPerm",
  base: "ffd20lnrw.BonusModifierBase",
  enh: "ffd20lnrw.BonusModifierEnhancement",
  dodge: "ffd20lnrw.BonusModifierDodge",
  inherent: "ffd20lnrw.BonusModifierInherent",
  deflection: "ffd20lnrw.BonusModifierDeflection",
  morale: "ffd20lnrw.BonusModifierMorale",
  luck: "ffd20lnrw.BonusModifierLuck",
  sacred: "ffd20lnrw.BonusModifierSacred",
  insight: "ffd20lnrw.BonusModifierInsight",
  resist: "ffd20lnrw.BonusModifierResistance",
  profane: "ffd20lnrw.BonusModifierProfane",
  trait: "ffd20lnrw.BonusModifierTrait",
  racial: "ffd20lnrw.BonusModifierRacial",
  size: "ffd20lnrw.BonusModifierSize",
  competence: "ffd20lnrw.BonusModifierCompetence",
  circumstance: "ffd20lnrw.BonusModifierCircumstance",
  alchemical: "ffd20lnrw.BonusModifierAlchemical",
  penalty: "ffd20lnrw.BonusModifierPenalty",
};

/* -------------------------------------------- */

// Damage Types
ffd20lnrw.damageTypes = {
  bludgeoning: "ffd20lnrw.DamageTypeBludgeoning",
  piercing: "ffd20lnrw.DamageTypePiercing",
  slashing: "ffd20lnrw.DamageTypeSlashing",
  fire: "ffd20lnrw.DamageTypeFire",
  ice: "ffd20lnrw.DamageTypeIce",
  wind: "ffd20lnrw.DamageTypeWind",
  earth: "ffd20lnrw.DamageTypeEarth",
  lightning: "ffd20lnrw.DamageTypeLightning",
  water: "ffd20lnrw.DamageTypeWater",
  light: "ffd20lnrw.DamageTypeLight",
  dark: "ffd20lnrw.DamageTypeDark",
  nonelemental: "ffd20lnrw.DamageTypeNonElemental",
};

/* -------------------------------------------- */

ffd20lnrw.distanceUnits = {
  none: "ffd20lnrw.None",
  personal: "ffd20lnrw.DistPersonal",
  touch: "ffd20lnrw.DistTouch",
  melee: "ffd20lnrw.DistMelee",
  reach: "ffd20lnrw.DistReach",
  close: "ffd20lnrw.DistClose",
  medium: "ffd20lnrw.DistMedium",
  long: "ffd20lnrw.DistLong",
  ft: "ffd20lnrw.DistFt",
  mi: "ffd20lnrw.DistMi",
  spec: "ffd20lnrw.Special",
  seeText: "ffd20lnrw.SeeText",
  unlimited: "ffd20lnrw.Unlimited",
};

ffd20lnrw.measureUnits = {
  ft: "ffd20lnrw.DistFt",
  mi: "ffd20lnrw.DistMi",
  m: "ffd20lnrw.DistM",
  km: "ffd20lnrw.DistKM",
};

ffd20lnrw.measureUnitsShort = {
  ft: "ffd20lnrw.DistFtShort",
  mi: "ffd20lnrw.DistMiShort",
  m: "ffd20lnrw.DistMShort",
  km: "ffd20lnrw.DistKMShort",
};

ffd20lnrw.actorStatures = {
  tall: "ffd20lnrw.StatureTall",
  long: "ffd20lnrw.StatureLong",
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
ffd20lnrw.targetTypes = {
  none: "ffd20lnrw.None",
  self: "ffd20lnrw.TargetSelf",
  creature: "ffd20lnrw.TargetCreature",
  ally: "ffd20lnrw.TargetAlly",
  enemy: "ffd20lnrw.TargetEnemy",
  object: "ffd20lnrw.TargetObject",
  space: "ffd20lnrw.TargetSpace",
  radius: "ffd20lnrw.TargetRadius",
  sphere: "ffd20lnrw.TargetSphere",
  cylinder: "ffd20lnrw.TargetCylinder",
  cone: "ffd20lnrw.TargetCone",
  square: "ffd20lnrw.TargetSquare",
  cube: "ffd20lnrw.TargetCube",
  line: "ffd20lnrw.TargetLine",
  wall: "ffd20lnrw.TargetWall",
};

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in ffd20lnrw
 * @type {Object}
 */
ffd20lnrw.timePeriods = {
  inst: "ffd20lnrw.TimeInst",
  turn: "ffd20lnrw.TimeTurn",
  round: "ffd20lnrw.TimeRound",
  minute: "ffd20lnrw.TimeMinute",
  hour: "ffd20lnrw.TimeHour",
  day: "ffd20lnrw.TimeDay",
  month: "ffd20lnrw.TimeMonth",
  year: "ffd20lnrw.TimeYear",
  perm: "ffd20lnrw.TimePerm",
  seeText: "ffd20lnrw.SeeText",
  spec: "ffd20lnrw.Special",
};

/* -------------------------------------------- */

// Healing Types
ffd20lnrw.healingTypes = {
  healing: "ffd20lnrw.Healing",
  temphp: "ffd20lnrw.HealingTemp",
};

/* -------------------------------------------- */

/**
 * Character senses options
 blindsight
 blindsense
 darkvision
 lowlightvision
 scent
 allaroundvision
 greensight
 lifesense
 mistsight
 seeindarkness
 thoughtsense
 tremorsense
 * @type {Object}
 */
ffd20lnrw.senses = {
  bs: "ffd20lnrw.SenseBS",/* Blindsight */
  dv: "ffd20lnrw.SenseDV",/* Darkvision */
  ts: "ffd20lnrw.SenseTS",/* Tremorsense */
  tr: "ffd20lnrw.SenseTR",/* truesight */
  ll: "ffd20lnrw.SenseLL",/* Lowlight */
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained in ffd20lnrw
 
Craft (Electronic)
Craft (Explosive)
Craft (Mechanical)
Craft (Structural)
 * @type {Object}
 */
ffd20lnrw.skills = {
  acr: "ffd20lnrw.SkillAcr",/* Acrobatics */
  apr: "ffd20lnrw.SkillApr",/* Appraise */
  blf: "ffd20lnrw.SkillBlf",/* Bluff */
  clm: "ffd20lnrw.SkillClm",/* Climb */
  crf: "ffd20lnrw.SkillCrf",/* craft skills */
  dip: "ffd20lnrw.SkillDip",/* Diplomacy */
  dev: "ffd20lnrw.SkillDev",/* Disable Device */
  dis: "ffd20lnrw.SkillDis",/* Disguise */
  dri: "ffd20lnrw.SkillDri",/* Drive */
  esc: "ffd20lnrw.SkillEsc",/* Escape Artist */
  fly: "ffd20lnrw.SkillFly",/* Fly */
  han: "ffd20lnrw.SkillHan",/* Handle Animal */
  hea: "ffd20lnrw.SkillHea",/* Heal */
  int: "ffd20lnrw.SkillInt",/* Intimidate */
  kar: "ffd20lnrw.SkillKAr",/* Knowledge (arcana) */
  kdu: "ffd20lnrw.SkillKDu",/* Knowledge (dungeoneering) */
  ken: "ffd20lnrw.SkillKEn",/* Knowledge (engineering) */
  kge: "ffd20lnrw.SkillKGe",/* Knowledge (geography) */
  khi: "ffd20lnrw.SkillKHi",/* Knowledge (history) */
  klo: "ffd20lnrw.SkillKLo",/* Knowledge (local) */
  kna: "ffd20lnrw.SkillKNa",/* Knowledge (nature) */
  kno: "ffd20lnrw.SkillKNo",/* Knowledge (nobility) */
  kpl: "ffd20lnrw.SkillKPl",/* Knowledge (planes) */
  kre: "ffd20lnrw.SkillKRe",/* Knowledge (religion) */
  kte: "ffd20lnrw.SkillKTe",/* Knowledge (technology) */
  lin: "ffd20lnrw.SkillLin",/* Linguistics */
  nav: "ffd20lnrw.SkillNav",/* Navigate */
  per: "ffd20lnrw.SkillPer",/* Perception */
  prf: "ffd20lnrw.SkillPrf",/* Perform */
  pil: "ffd20lnrw.SkillPil",/* Pilot */
  pro: "ffd20lnrw.SkillPro",/* Profession */
  rep: "ffd20lnrw.SkillRep",/* Repair */
  rid: "ffd20lnrw.SkillRid",/* Ride */
  sen: "ffd20lnrw.SkillSen",/* Sense Motive */
  slt: "ffd20lnrw.SkillSlt",/* Sleight of Hand */
  spl: "ffd20lnrw.SkillSpl",/* Spellcraft */
  ste: "ffd20lnrw.SkillSte",/* Stealth */
  sur: "ffd20lnrw.SkillSur",/* Survival */
  swm: "ffd20lnrw.SkillSwm",/* Swim */
  umd: "ffd20lnrw.SkillUMD",/* Use Magic Device */
};

ffd20lnrw.skillCompendiumEntries = {
  acr: "ffd20lnrw.skills.HPsdXjjRtKNGFGRc",
  apr: "ffd20lnrw.skills.W5GT9F3euC4aG9zP",
  blf: "ffd20lnrw.skills.pAB2PYkZO3lsmeaC",
  clm: "ffd20lnrw.skills.xvua9V5Zggkc77Gt",
  crf: "ffd20lnrw.skills.L6LEhHRrn53cMuhE",
  dip: "ffd20lnrw.skills.OtfbHJhIQsNzmiTN",
  dev: "ffd20lnrw.skills.CCy1fajKKU3K02iQ",
  dis: "ffd20lnrw.skills.lP3L1RXi9q4ha9Gu",
  esc: "ffd20lnrw.skills.AOQsMtvLY4V3wFEL",
  fly: "ffd20lnrw.skills.rR877UB1xVd3Z7z1",
  han: "ffd20lnrw.skills.fXauAodbOBHBi7Mj",
  hea: "ffd20lnrw.skills.RtBGttkocvTbySjd",
  int: "ffd20lnrw.skills.ImjhcPmm02QSCbPg",
  kar: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kdu: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  ken: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kge: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  khi: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  klo: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kna: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kno: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kpl: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  kre: "ffd20lnrw.skills.ki0QvL0K7u4YuK0O",
  lin: "ffd20lnrw.skills.QXIYXqy6ivNHrDrW",
  per: "ffd20lnrw.skills.YYmmxDgp0g3ltSUG",
  prf: "ffd20lnrw.skills.HhV5UmaRLTjtB3Xh",
  pro: "ffd20lnrw.skills.O7Utk8xKbHYDP7Ot",
  rid: "ffd20lnrw.skills.mKO8Q4uMiqpMySOZ",
  sen: "ffd20lnrw.skills.R8HGxGCKayOl15AO",
  slt: "ffd20lnrw.skills.zK0CbvpYLZhTN5Wn",
  spl: "ffd20lnrw.skills.uLZI2uWz0uB8UgBc",
  ste: "ffd20lnrw.skills.T6nefKotIb5vKE9h",
  sur: "ffd20lnrw.skills.TXrxgrB2sQjppZFY",
  swm: "ffd20lnrw.skills.weCPHUuXi9sF5r4E",
  umd: "ffd20lnrw.skills.WR5lekzyLT6T2CFH",
};

ffd20lnrw.arbitrarySkills = ["crf", "prf", "pro"];

/* -------------------------------------------- */

ffd20lnrw.spellPreparationModes = {
  atwill: "ffd20lnrw.SpellPrepAtWill",
  prepared: "ffd20lnrw.SpellPrepPrepared",
  spontaneous: "ffd20lnrw.SpellPrepSpontaneous",
};

ffd20lnrw.classCasterType = {
  astrologian: "high",
  blackmage: "high",
  bluemage: "high",
  geomancer: "high",
  illusionist: "high",
  necromancer: "high",
  summoner: "high",
  timemage: "high",
  whitemage: "high",
  bard: "med",
  cleric: "med",
  redmage: "med",
  scholar: "med",
  summoner: "med",
  darkpaladin: "low",
  holyknight: "low",
};

ffd20lnrw.magicAuraByLevel = {
  spell: [
    { power: "faint", level: 1 },
    { power: "moderate", level: 4 },
    { power: "strong", level: 7 },
    { power: "overwhelming", level: 10 },
  ],
  item: [
    { power: "faint", level: 1 },
    { power: "moderate", level: 6 },
    { power: "strong", level: 12 },
    { power: "overwhelming", level: 21 },
  ],
};

ffd20lnrw.auraStrengths = {
  1: "ffd20lnrw.AuraStrength_Faint",
  2: "ffd20lnrw.AuraStrength_Moderate",
  3: "ffd20lnrw.AuraStrength_Strong",
  4: "ffd20lnrw.AuraStrength_Overwhelming",
};

/* -------------------------------------------- */

/* -------------------------------------------- */

// Weapon Types
ffd20lnrw.weaponTypes = {
  simple: {
    _label: "ffd20lnrw.WeaponTypeSimple",
    light: "ffd20lnrw.WeaponPropLight",
    "1h": "ffd20lnrw.WeaponPropOneHanded",
    "2h": "ffd20lnrw.WeaponPropTwoHanded",
    ranged: "ffd20lnrw.WeaponSubtypeRanged",
  },
  martial: {
    _label: "ffd20lnrw.WeaponTypeMartial",
    light: "ffd20lnrw.WeaponPropLight",
    "1h": "ffd20lnrw.WeaponPropOneHanded",
    "2h": "ffd20lnrw.WeaponPropTwoHanded",
    ranged: "ffd20lnrw.WeaponSubtypeRanged",
  },
  exotic: {
    _label: "ffd20lnrw.WeaponTypeExotic",
    light: "ffd20lnrw.WeaponPropLight",
    "1h": "ffd20lnrw.WeaponPropOneHanded",
    "2h": "ffd20lnrw.WeaponPropTwoHanded",
    ranged: "ffd20lnrw.WeaponSubtypeRanged",
  },
  chef: {
    _label: "ffd20lnrw.WeaponTypeChef",
    light: "ffd20lnrw.WeaponPropLight",
    "1h": "ffd20lnrw.WeaponPropOneHanded",
    "2h": "ffd20lnrw.WeaponPropTwoHanded",
    ranged: "ffd20lnrw.WeaponSubtypeRanged",
  },
  power: {
    _label: "ffd20lnrw.WeaponTypePower",
    light: "ffd20lnrw.WeaponPropLight",
    "1h": "ffd20lnrw.WeaponPropOneHanded",
    "2h": "ffd20lnrw.WeaponPropTwoHanded",
    ranged: "ffd20lnrw.WeaponSubtypeRanged",
  },
  misc: {
    _label: "ffd20lnrw.Misc",
    splash: "ffd20lnrw.WeaponTypeSplash",
    other: "ffd20lnrw.Other",
  },
};

// Weapon hold types
ffd20lnrw.weaponHoldTypes = {
  normal: "ffd20lnrw.WeaponHoldTypeNormal",
  "2h": "ffd20lnrw.WeaponHoldTypeTwoHanded",
  oh: "ffd20lnrw.WeaponHoldTypeOffhand",
};

/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
ffd20lnrw.weaponProperties = {
  blc: "ffd20lnrw.WeaponPropBlocking",
  brc: "ffd20lnrw.WeaponPropBrace",
  dea: "ffd20lnrw.WeaponPropDeadly",
  dst: "ffd20lnrw.WeaponPropDistracting",
  dbl: "ffd20lnrw.WeaponPropDouble",
  dis: "ffd20lnrw.WeaponPropDisarm",
  fin: "ffd20lnrw.WeaponPropFinesse",
  frg: "ffd20lnrw.WeaponPropFragile",
  grp: "ffd20lnrw.WeaponPropGrapple",
  imp: "ffd20lnrw.WeaponPropImprovised",
  mnk: "ffd20lnrw.WeaponPropMonk",
  nnl: "ffd20lnrw.WeaponPropNonLethal",
  prf: "ffd20lnrw.WeaponPropPerformance",
  rch: "ffd20lnrw.WeaponPropReach",
  snd: "ffd20lnrw.WeaponPropSunder",
  thr: "ffd20lnrw.WeaponPropThrown",
  trp: "ffd20lnrw.WeaponPropTrip",
};

// Spell Components
ffd20lnrw.spellComponents = {
  V: "ffd20lnrw.SpellComponentVerbal",
  S: "ffd20lnrw.SpellComponentSomatic",
  M: "ffd20lnrw.SpellComponentMaterial",
  F: "ffd20lnrw.SpellComponentFocus",
  DF: "ffd20lnrw.SpellComponentDivineFocus",
};

// Spell Schools
ffd20lnrw.spellSchools = {
  crn: "ffd20lnrw.SpellSchoolChronomancy",
  drk: "ffd20lnrw.SpellSchoolDark",
  ele: "ffd20lnrw.SpellSchoolElemental",
  enc: "ffd20lnrw.SpellSchoolEnhancing",
  enf: "ffd20lnrw.SpellSchoolEnfeebling",
  heal: "ffd20lnrw.SpellSchoolHealing",
  ill: "ffd20lnrw.SpellSchoolIllusion",
  lit: "ffd20lnrw.SpellSchoolLight",
  misc: "ffd20lnrw.SpellSchoolMisc",
  nec: "ffd20lnrw.SpellSchoolNecromancy",
  nel: "ffd20lnrw.SpellSchoolNonElemental",
  sum: "ffd20lnrw.SpellSchoolSummoning",
  uni: "ffd20lnrw.SpellSchoolUniversal",
};

// Spell Levels
ffd20lnrw.spellLevels = {
  0: "ffd20lnrw.SpellLevel0",
  1: "ffd20lnrw.SpellLevel1",
  2: "ffd20lnrw.SpellLevel2",
  3: "ffd20lnrw.SpellLevel3",
  4: "ffd20lnrw.SpellLevel4",
  5: "ffd20lnrw.SpellLevel5",
  6: "ffd20lnrw.SpellLevel6",
  7: "ffd20lnrw.SpellLevel7",
  8: "ffd20lnrw.SpellLevel8",
  9: "ffd20lnrw.SpellLevel9",
};

/* -------------------------------------------- */

/**
 * Weapon proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
ffd20lnrw.proficiencyLevels = {
  "-4": "Not Proficient",
  0: "Proficient",
};

/* -------------------------------------------- */

ffd20lnrw.conditionTypes = {
  antagonized: "ffd20lnrw.CondTypeAntagonized",
  berserk: "ffd20lnrw.CondTypeBerserk",
  bleed: "ffd20lnrw.CondTypeBleed",
  blinded: "ffd20lnrw.CondTypeBlinded",
  burning: "ffd20lnrw.CondTypeBurning",
  charmed: "ffd20lnrw.CondTypeCharmed",
  confused: "ffd20lnrw.CondTypeConfused",
  cowering: "ffd20lnrw.CondTypeCowering",
  cursed: "ffd20lnrw.CondTypeCursed",
  dazed: "ffd20lnrw.CondTypeDazed",
  dazzled: "ffd20lnrw.CondTypeDazzled",
  deafened: "ffd20lnrw.CondTypeDeafened",
  deprotect: "ffd20lnrw.CondTypeDeprotect",
  deshell: "ffd20lnrw.CondTypeDeshell",
  dimmed: "ffd20lnrw.CondTypeDimmed",
  disabled: "ffd20lnrw.CondTypeDisabled",
  diseased: "ffd20lnrw.CondTypeDiseased",
  doom: "ffd20lnrw.CondTypeDoom",
  drenched: "ffd20lnrw.CondTypeDrenched",
  energyDrained: "ffd20lnrw.CondTypeEnergyDrained",
  entangled: "ffd20lnrw.CondTypeEntangled",
  exhausted: "ffd20lnrw.CondTypeExhausted",
  fascinated: "ffd20lnrw.CondTypeFascinated",
  fatigued: "ffd20lnrw.CondTypeFatigued", 
  float: "ffd20lnrw.CondTypeFloat",
  frightened: "ffd20lnrw.CondTypeFrightened",
  frog: "ffd20lnrw.CondTypeFrog",
  frozen: "ffd20lnrw.CondTypeFrozen",
  hasted: "ffd20lnrw.CondTypeHasted",
  immobilized: "ffd20lnrw.CondTypeImmobilized",
  imperil: "ffd20lnrw.CondTypeImperil",
  invisible: "ffd20lnrw.CondTypeInvisible",
  mini: "ffd20lnrw.CondTypeMini",
  nauseated: "ffd20lnrw.CondTypeNauseated",
  panicked: "ffd20lnrw.CondTypePanicked",
  paralyzed: "ffd20lnrw.CondTypeParalyzed",
  petrified: "ffd20lnrw.CondTypePetrified",
  poisoned: "ffd20lnrw.CondTypePoisoned",
  protect: "ffd20lnrw.CondTypeProtect",
  reflect: "ffd20lnrw.CondTypeReflect",
  regen: "ffd20lnrw.CondTypeRegen",
  reraise: "ffd20lnrw.CondTypeReraise",
  sapped: "ffd20lnrw.CondTypeSapped",
  shaken: "ffd20lnrw.CondTypeShaken",
  shell: "ffd20lnrw.CondTypeShell",
  sickened: "ffd20lnrw.CondTypeSickened",
  silenced: "ffd20lnrw.CondTypeSilenced",
  sleep: "ffd20lnrw.CondTypeSleep",
  slow: "ffd20lnrw.CondTypeSlow",
  squalled: "ffd20lnrw.CondTypeSqualled",
  staggered: "ffd20lnrw.CondTypeStaggered",
  static: "ffd20lnrw.CondTypeStatic",
  stop: "ffd20lnrw.CondTypeStop",
  stunned: "ffd20lnrw.CondTypeStunned",
  weighted: "ffd20lnrw.CondTypeWeighted",
  zombie: "ffd20lnrw.CondTypeZombie",
};

ffd20lnrw.conditions = {
  antagonized: "ffd20lnrw.CondAntagonized",
  berserk: "ffd20lnrw.CondBerserk",
  bleed: "ffd20lnrw.CondBleed",
  blinded: "ffd20lnrw.CondBlinded",
  burning: "ffd20lnrw.CondBurning",
  charmed: "ffd20lnrw.CondCharmed",
  confused: "ffd20lnrw.CondConfused",
  cowering: "ffd20lnrw.CondCowering",
  cursed: "ffd20lnrw.CondCursed",
  dazed: "ffd20lnrw.CondDazed",
  dazzled: "ffd20lnrw.CondDazzled",
  deafened: "ffd20lnrw.CondDeafened",
  deprotect: "ffd20lnrw.CondDeprotect",
  deshell: "ffd20lnrw.CondDeshell",
  dimmed: "ffd20lnrw.CondDimmed",
  disabled: "ffd20lnrw.CondDisabled",
  diseased: "ffd20lnrw.CondDiseased",
  doom: "ffd20lnrw.CondDoom",
  drenched: "ffd20lnrw.CondDrenched",
  energyDrained: "ffd20lnrw.CondEnergyDrained",
  entangled: "ffd20lnrw.CondEntangled",
  exhausted: "ffd20lnrw.CondExhausted",
  fascinated: "ffd20lnrw.CondFascinated",
  fatigued: "ffd20lnrw.CondFatigued", 
  float: "ffd20lnrw.CondFloat",
  frightened: "ffd20lnrw.CondFrightened",
  frog: "ffd20lnrw.CondFrog",
  frozen: "ffd20lnrw.CondFrozen",
  grappled: "ffd20lnrw.CondGrappled",
  hasted: "ffd20lnrw.CondHasted",
  helpless: "ffd20lnrw.CondHelpless",
  immobilized: "ffd20lnrw.CondImmobilized",
  imperil: "ffd20lnrw.CondImperil",
  incorporeal: "ffd20lnrw.CondIncorporeal",
  invisible: "ffd20lnrw.CondInvisible",
  mini: "ffd20lnrw.CondMini",
  nauseated: "ffd20lnrw.CondNauseated",
  panicked: "ffd20lnrw.CondPanicked",
  paralyzed: "ffd20lnrw.CondParalyzed",
  petrified: "ffd20lnrw.CondPetrified",
  pinned: "ffd20lnrw.CondPinned",
  poisoned: "ffd20lnrw.CondPoisoned",
  prone: "ffd20lnrw.CondProne",
  protect: "ffd20lnrw.CondProtect",
  reflect: "ffd20lnrw.CondReflect",
  regen: "ffd20lnrw.CondRegen",
  reraise: "ffd20lnrw.CondReraise",
  sapped: "ffd20lnrw.CondSapped",
  shaken: "ffd20lnrw.CondShaken",
  shell: "ffd20lnrw.CondShell",
  sickened: "ffd20lnrw.CondSickened",
  silenced: "ffd20lnrw.CondSilenced",
  sleep: "ffd20lnrw.CondSleep",
  slow: "ffd20lnrw.CondSlow",
  squalled: "ffd20lnrw.CondSqualled",
  staggered: "ffd20lnrw.CondStaggered",
  static: "ffd20lnrw.CondStatic",
  stop: "ffd20lnrw.CondStop",
  stunned: "ffd20lnrw.CondStunned",
  weighted: "ffd20lnrw.CondWeighted",
  zombie: "ffd20lnrw.CondZombie",
};

ffd20lnrw.conditionTextures = {
  bleed: "systems/ffd20lnrw/icons/conditions/bleed.png",
  blind: "systems/ffd20lnrw/icons/conditions/blind.png",
  confused: "systems/ffd20lnrw/icons/conditions/confused.png",
  dazzled: "systems/ffd20lnrw/icons/conditions/dazzled.png",
  deaf: "systems/ffd20lnrw/icons/conditions/deaf.png",
  entangled: "systems/ffd20lnrw/icons/conditions/entangled.png",
  fatigued: "systems/ffd20lnrw/icons/conditions/fatigued.png",
  exhausted: "systems/ffd20lnrw/icons/conditions/exhausted.png",
  grappled: "systems/ffd20lnrw/icons/conditions/grappled.png",
  helpless: "systems/ffd20lnrw/icons/conditions/helpless.png",
  incorporeal: "systems/ffd20lnrw/icons/conditions/incorporeal.png",
  invisible: "systems/ffd20lnrw/icons/conditions/invisible.png",
  paralyzed: "systems/ffd20lnrw/icons/conditions/paralyzed.png",
  pinned: "systems/ffd20lnrw/icons/conditions/pinned.png",
  prone: "systems/ffd20lnrw/icons/conditions/prone.png",
  fear: "systems/ffd20lnrw/icons/conditions/fear.png",
  sickened: "systems/ffd20lnrw/icons/conditions/sickened.png",
  staggered: "systems/ffd20lnrw/icons/conditions/staggered.png",
  stunned: "systems/ffd20lnrw/icons/conditions/stunned.png",
};

ffd20lnrw.buffTypes = {
  temp: "ffd20lnrw.Temporary",
  perm: "ffd20lnrw.Permanent",
  item: "ffd20lnrw.Item",
  misc: "ffd20lnrw.Misc",
};

// Static conditional modifier targets
ffd20lnrw.conditionalTargets = {
  attack: {
    _label: "ffd20lnrw.AttackRollPlural",
    allAttack: "ffd20lnrw.All",
    rapidShotAttack: "ffd20lnrw.RapidShot",
  },
  damage: {
    _label: "ffd20lnrw.Damage",
    allDamage: "ffd20lnrw.All",
    rapidShotDamage: "ffd20lnrw.RapidShot",
  },
  effect: {
    _label: "ffd20lnrw.Effects",
  },
  misc: {
    _label: "ffd20lnrw.MiscShort",
  },
};

ffd20lnrw.buffTargets = {
  ac: {
    _label: "ffd20lnrw.BuffTarAC",
    ac: "ffd20lnrw.BuffTarACGeneric",
    aac: "ffd20lnrw.BuffTarACArmor",
    sac: "ffd20lnrw.BuffTarACShield",
    nac: "ffd20lnrw.BuffTarACNatural",
  },
  attack: {
    _label: "ffd20lnrw.AttackRollPlural",
    attack: "ffd20lnrw.All",
    mattack: "ffd20lnrw.Melee",
    rattack: "ffd20lnrw.Ranged",
  },
  damage: {
    _label: "ffd20lnrw.Damage",
    damage: "ffd20lnrw.All",
    wdamage: "ffd20lnrw.WeaponDamage",
    sdamage: "ffd20lnrw.SpellDamage",
  },
  ability: {
    _label: "ffd20lnrw.AbilityScore",
    str: "ffd20lnrw.AbilityStr",
    dex: "ffd20lnrw.AbilityDex",
    con: "ffd20lnrw.AbilityCon",
    int: "ffd20lnrw.AbilityInt",
    wis: "ffd20lnrw.AbilityWis",
    cha: "ffd20lnrw.AbilityCha",
  },
  savingThrows: {
    _label: "ffd20lnrw.SavingThrowPlural",
    allSavingThrows: "ffd20lnrw.All",
    fort: "ffd20lnrw.SavingThrowFort",
    ref: "ffd20lnrw.SavingThrowRef",
    will: "ffd20lnrw.SavingThrowWill",
  },
  skills: {
    _label: "ffd20lnrw.Skills",
    skills: "ffd20lnrw.All",
    strSkills: "ffd20lnrw.BuffTarStrSkills",
    dexSkills: "ffd20lnrw.BuffTarDexSkills",
    conSkills: "ffd20lnrw.BuffTarConSkills",
    intSkills: "ffd20lnrw.BuffTarIntSkills",
    wisSkills: "ffd20lnrw.BuffTarWisSkills",
    chaSkills: "ffd20lnrw.BuffTarChaSkills",
  },
  skill: {
    _label: "ffd20lnrw.BuffTarSpecificSkill",
  },
  abilityChecks: {
    _label: "ffd20lnrw.BuffTarAbilityChecks",
    allChecks: "ffd20lnrw.All",
    strChecks: "ffd20lnrw.BuffTarStrChecks",
    dexChecks: "ffd20lnrw.BuffTarDexChecks",
    conChecks: "ffd20lnrw.BuffTarConChecks",
    intChecks: "ffd20lnrw.BuffTarIntChecks",
    wisChecks: "ffd20lnrw.BuffTarWisChecks",
    chaChecks: "ffd20lnrw.BuffTarChaChecks",
  },
  speed: {
    _label: "ffd20lnrw.Speed",
    allSpeeds: "ffd20lnrw.All",
    landSpeed: "ffd20lnrw.SpeedLand",
    climbSpeed: "ffd20lnrw.SpeedClimb",
    swimSpeed: "ffd20lnrw.SpeedSwim",
    burrowSpeed: "ffd20lnrw.SpeedBurrow",
    flySpeed: "ffd20lnrw.SpeedFly",
  },
  misc: {
    _label: "ffd20lnrw.MiscShort",
    cmb: "ffd20lnrw.CMBAbbr",
    cmd: "ffd20lnrw.CMDAbbr",
    init: "ffd20lnrw.Initiative",
    mhp: "ffd20lnrw.HitPoints",
    mmp: "ffd20lnrw.ManaPoints",
    limit: "ffd20lnrw.LimitBreak",
    acpA: "ffd20lnrw.ACPArmor",
    acpS: "ffd20lnrw.ACPShield",
    mDexA: "ffd20lnrw.MaxDexArmor",
    mDexS: "ffd20lnrw.MaxDexShield",
  },
};

ffd20lnrw.contextNoteTargets = {
  attacks: {
    _label: "ffd20lnrw.Attacks",
    attack: "ffd20lnrw.AttackRollPlural",
    effect: "ffd20lnrw.Effects",
    melee: "ffd20lnrw.Melee",
    meleeWeapon: "ffd20lnrw.MeleeWeapon",
    meleeSpell: "ffd20lnrw.MeleeSpell",
    ranged: "ffd20lnrw.Ranged",
    rangedWeapon: "ffd20lnrw.RangedWeapon",
    rangedSpell: "ffd20lnrw.RangedSpell",
  },
  savingThrows: {
    _label: "ffd20lnrw.SavingThrowPlural",
    allSavingThrows: "ffd20lnrw.All",
    fort: "ffd20lnrw.SavingThrowFort",
    ref: "ffd20lnrw.SavingThrowRef",
    will: "ffd20lnrw.SavingThrowWill",
  },
  skills: {
    _label: "ffd20lnrw.Skills",
    skills: "ffd20lnrw.All",
    strSkills: "ffd20lnrw.BuffTarStrSkills",
    dexSkills: "ffd20lnrw.BuffTarDexSkills",
    conSkills: "ffd20lnrw.BuffTarConSkills",
    intSkills: "ffd20lnrw.BuffTarIntSkills",
    wisSkills: "ffd20lnrw.BuffTarWisSkills",
    chaSkills: "ffd20lnrw.BuffTarChaSkills",
  },
  skill: {
    _label: "ffd20lnrw.BuffTarSpecificSkill",
  },
  abilityChecks: {
    _label: "ffd20lnrw.BuffTarAbilityChecks",
    allChecks: "ffd20lnrw.All",
    strChecks: "ffd20lnrw.BuffTarStrChecks",
    dexChecks: "ffd20lnrw.BuffTarDexChecks",
    conChecks: "ffd20lnrw.BuffTarConChecks",
    intChecks: "ffd20lnrw.BuffTarIntChecks",
    wisChecks: "ffd20lnrw.BuffTarWisChecks",
    chaChecks: "ffd20lnrw.BuffTarChaChecks",
  },
  spell: {
    _label: "ffd20lnrw.BuffTarSpells",
    effect: "ffd20lnrw.SpellBuffEffect",
    concentration: "ffd20lnrw.Concentration",
    cl: "ffd20lnrw.CasterLevel",
  },
  misc: {
    _label: "ffd20lnrw.MiscShort",
    ac: "ffd20lnrw.ACNormal",
    cmb: "ffd20lnrw.CMBAbbr",
    cmd: "ffd20lnrw.CMDAbbr",
    sr: "ffd20lnrw.SpellResistance",
    init: "ffd20lnrw.Initiative",
  },
};

// Languages
ffd20lnrw.languages = {
  common: "ffd20lnrw.LanguageCommon",
  dwarven: "ffd20lnrw.LanguageDwarven",
  elvaan: "ffd20lnrw.LanguageElvaan",
  galkan: "ffd20lnrw.LanguageGalkan",
  lalafellan: "ffd20lnrw.LanguageLalafellan",
  mithran: "ffd20lnrw.LanguageMithran",
  moogle: "ffd20lnrw.LanguageMoogle",
  aegyllan: "ffd20lnrw.LanguageAegyllan",
  albhedian: "ffd20lnrw.LanguageAlbhedian",
  banganese: "ffd20lnrw.LanguageBanganese",
  burmecian: "ffd20lnrw.LanguageBurmecian",
  draconic: "ffd20lnrw.LanguageDraconic",
  garif: "ffd20lnrw.LanguageGarif",
  lupin: "ffd20lnrw.LanguageLupin",
  mandragoran: "ffd20lnrw.LanguageMandragoran",
  numish: "ffd20lnrw.LanguageNumish",
  qiqirn: "ffd20lnrw.LanguageQiqirn",
  quadav: "ffd20lnrw.LanguageQuadav",
  roegadyn: "ffd20lnrw.LanguageRoegadyn",
  ronsaur: "ffd20lnrw.LanguageRonsaur",
  seeq: "ffd20lnrw.LanguageSeeq",
  tonberry: "ffd20lnrw.LanguageTonberry",
  vieran: "ffd20lnrw.LanguageVieran",
  aquan: "ffd20lnrw.LanguageAquan",
  auran: "ffd20lnrw.LanguageAuran",
  auroran: "ffd20lnrw.LanguageAuroran",
  enochian: "ffd20lnrw.LanguageEnochian",
  ignan: "ffd20lnrw.LanguageIgnan",
  terran: "ffd20lnrw.LanguageTerran",
  thorian: "ffd20lnrw.LanguageThorian",
  umbran: "ffd20lnrw.LanguageUmbran",  
  antican: "ffd20lnrw.LanguageAntican",
  goblin: "ffd20lnrw.LanguageGoblin",
  kojin: "ffd20lnrw.LanguageKojin",
  orcish: "ffd20lnrw.LanguageOrcish",
  queran: "ffd20lnrw.LanguageQueran",
  sahagin: "ffd20lnrw.LanguageSahagin",
  sylvan: "ffd20lnrw.LanguageSylvan",
  vanu: "ffd20lnrw.LanguageVanu",
  yagudo: "ffd20lnrw.LanguageYagudo",
};

ffd20lnrw.creatureTypes = {
  aberration: "ffd20lnrw.CreatureTypeAberration",
  animal: "ffd20lnrw.CreatureTypeAnimal",
  construct: "ffd20lnrw.CreatureTypeConstruct",
  dragon: "ffd20lnrw.CreatureTypeDragon",
  fey: "ffd20lnrw.CreatureTypeFey",
  humanoid: "ffd20lnrw.CreatureTypeHumanoid",
  magicalBeast: "ffd20lnrw.CreatureTypeMagicalBeast",
  monstrousHumanoid: "ffd20lnrw.CreatureTypeMonstrousHumanoid",
  ooze: "ffd20lnrw.CreatureTypeOoze",
  outsider: "ffd20lnrw.CreatureTypeOutsider",
  plant: "ffd20lnrw.CreatureTypePlant",
  undead: "ffd20lnrw.CreatureTypeUndead",
  vermin: "ffd20lnrw.CreatureTypeVermin",
};

ffd20lnrw.sizeDie = [
  "1",
  "1d2",
  "1d3",
  "1d4",
  "1d6",
  "1d8",
  "1d10",
  "2d6",
  "2d8",
  "3d6",
  "3d8",
  "4d6",
  "4d8",
  "6d6",
  "6d8",
  "8d6",
  "8d8",
  "12d6",
  "12d8",
  "16d6",
  "16d8",
];

// Character Level XP Requirements
ffd20lnrw.CHARACTER_EXP_LEVELS = {
  slow: [
    0,
    3000,
    7500,
    14000,
    23000,
    35000,
    53000,
    77000,
    115000,
    160000,
    235000,
    330000,
    475000,
    665000,
    955000,
    1350000,
    1900000,
    2700000,
    3850000,
    5350000,
  ],
  medium: [
    0,
    2000,
    5000,
    9000,
    15000,
    23000,
    35000,
    51000,
    75000,
    105000,
    155000,
    220000,
    315000,
    445000,
    635000,
    890000,
    1300000,
    1800000,
    2550000,
    3600000,
  ],
  fast: [
    0,
    1300,
    3300,
    6000,
    10000,
    15000,
    23000,
    34000,
    50000,
    71000,
    105000,
    145000,
    210000,
    295000,
    425000,
    600000,
    850000,
    1200000,
    1700000,
    2400000,
  ],
};

// Challenge Rating XP Levels
ffd20lnrw.CR_EXP_LEVELS = [
  200,
  400,
  600,
  800,
  1200,
  1600,
  2400,
  3200,
  4800,
  6400,
  9600,
  12800,
  19200,
  25600,
  38400,
  51200,
  76800,
  102400,
  153600,
  204800,
  307200,
  409600,
  614400,
  819200,
  1228800,
  1638400,
  2457600,
  3276800,
  4915200,
  6553600,
  9830400,
];

CONFIG.Combat.initiative.decimals = 2;
