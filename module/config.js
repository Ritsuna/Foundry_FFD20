// Namespace FFD20 Configuration Values
export const FFD20 = {};

FFD20.re = {
  traitSeparator: /\s*[;]\s*/g,
};

/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
FFD20.abilities = {
  str: "FFD20.AbilityStr",
  dex: "FFD20.AbilityDex",
  con: "FFD20.AbilityCon",
  int: "FFD20.AbilityInt",
  wis: "FFD20.AbilityWis",
  cha: "FFD20.AbilityCha",
};

FFD20.abilitiesShort = {
  str: "FFD20.AbilityShortStr",
  dex: "FFD20.AbilityShortDex",
  con: "FFD20.AbilityShortCon",
  int: "FFD20.AbilityShortInt",
  wis: "FFD20.AbilityShortWis",
  cha: "FFD20.AbilityShortCha",
};

FFD20.abilityCost = {
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
FFD20.savingThrows = {
  fort: "FFD20.SavingThrowFort",
  ref: "FFD20.SavingThrowRef",
  will: "FFD20.SavingThrowWill",
};

FFD20.classTypes = {
  base: "FFD20.ClassTypeBase",
  prestige: "FFD20.ClassTypePrestige",
  npc: "FFD20.ClassTypeNPC",
  racial: "FFD20.ClassTypeRacial",
  mythic: "FFD20.ClassTypeMythic",
};

FFD20.classSubTypes = {
  core: "FFD20.ClassSubTypeCore",
  coreArc: "FFD20.ClassSubTypeCoreArc",
  base: "FFD20.ClassSubTypeBase",
  baseArc: "FFD20.ClassSubTypeBaseArc",
  hybrid: "FFD20.ClassSubTypeHybrid",
  hybridArc: "FFD20.ClassSubTypeHybridArc",
};

FFD20.countforexp = {
  exp: "FFD20.ClassExp",
  noExp: "FFD20.ClassNoExp",
};

FFD20.classCastingStats = {
  noncaster: "FFD20.NonCaster",
  int: "FFD20.AbilityShortInt",
  wis: "FFD20.AbilityShortWis",
  cha: "FFD20.AbilityShortCha",
  intAndWis: "FFD20.AbilityShortIntAndWis",
}; 

FFD20.classBaseMPTypes = {
  noncaster: "FFD20.NonCaster",
  halfCaster: "FFD20.HalfCaster",
  dimPacman: "FFD20.DimPacman",
  pacman: "FFD20.Pacman",
  dimFullCaster: "FFD20.DimFullCaster",
  fullCaster: "FFD20.FullCaster",
  advFullCaster: "FFD20.AdvFullCaster",
}; 

// Max Spell Level
FFD20.ClassSpellProgression = {
  noncaster: 0,
  halfCaster: 4,
  pacman: 6,
  fullCaster: 9,
};

// Character MP from levels
FFD20.classMPlevels = {
// level          1   2   3   4   5   6   7   8   9   10   11    12    13    14    15    16    17    18    19    20
noncaster:     [0],
halfCaster:    [0,  0,  0,  1,  2,  3,  4,  5,  6,   7,   8,   10,   12,   14,   16,   19,   22,   25,   29,   33,],
pacman:        [2,  3,  4,  5,  6,  8, 10, 13, 16,  20,  24,   29,   34,   39,   45,   51,   57,   64,   71,   79,],
fullCaster:    [3,  4,  5,  6,  8, 11, 15, 20, 26,  32,  39,   47,   56,   65,   75,   86,   98,  110,  122,  135,],
};

// Character MP from stat
FFD20.classMPStatsBonus = {
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
FFD20.classBaseMPauto = {
no: "FFD20.No",
yes: "FFD20.Yes",
};

FFD20.classBAB = {
  low: "FFD20.Low",
  med: "FFD20.Medium",
  high: "FFD20.High",
};

FFD20.classSavingThrows = {
  low: "FFD20.Poor",
  high: "FFD20.Good",
};

FFD20.classBABFormulas = {
  low: "floor(@level * 0.5)",
  med: "floor(@level * 0.75)",
  high: "@level",
};

FFD20.classSavingThrowFormulas = {
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
  mythic: {
    low: "0",
    high: "0",
  },
};

FFD20.favouredClassBonuses = {
  hp: "FFD20.FavouredClassHP",
  skill: "FFD20.FavouredClassSkill",
  alt: "FFD20.FavouredClassAlt",
};

/**
 * The set of Armor Classes
 * @type {Object}
 */
FFD20.ac = {
  normal: "FFD20.ACNormal",
  touch: "FFD20.ACTouch",
  flatFooted: "FFD20.ACFlatFooted",
};

/**
 * The set of Armor Class modifier types
 * @type {Object}
 */
FFD20.acValueLabels = {
  normal: "FFD20.ACTypeNormal",
  touch: "FFD20.ACTypeTouch",
  flatFooted: "FFD20.ACTypeFlatFooted",
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
FFD20.alignments = {
  lg: "FFD20.AlignmentLG",
  ng: "FFD20.AlignmentNG",
  cg: "FFD20.AlignmentCG",
  ln: "FFD20.AlignmentLN",
  tn: "FFD20.AlignmentTN",
  cn: "FFD20.AlignmentCN",
  le: "FFD20.AlignmentLE",
  ne: "FFD20.AlignmentNE",
  ce: "FFD20.AlignmentCE",
};

FFD20.alignmentsShort = {
  lg: "FFD20.AlignmentShortLG",
  ng: "FFD20.AlignmentShortNG",
  cg: "FFD20.AlignmentShortCG",
  ln: "FFD20.AlignmentShortLN",
  tn: "FFD20.AlignmentShortTN",
  cn: "FFD20.AlignmentShortCN",
  le: "FFD20.AlignmentShortLE",
  ne: "FFD20.AlignmentShortNE",
  ce: "FFD20.AlignmentShortCE",
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
FFD20.armorProficiencies = {
  lgt: "FFD20.ArmorProfLight",
  med: "FFD20.ArmorProfMedium",
  hvy: "FFD20.ArmorProfHeavy",
  shl: "FFD20.ArmorProfShield",
  twr: "FFD20.ArmorProfTowerShield",
};

FFD20.weaponProficiencies = {
  sim: "FFD20.WeaponProfSimple",
  mar: "FFD20.WeaponProfMartial",
  exo: "FFD20.WeaponProfExotic",
  che: "FFD20.WeaponProfChef",
  pow: "FFD20.WeaponProfPower",
};

/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
FFD20.abilityActivationTypes = {
  passive: "FFD20.ActivationTypePassive",
  free: "FFD20.ActivationTypeFree",
  swift: "FFD20.ActivationTypeSwift",
  immediate: "FFD20.ActivationTypeImmediate",
  move: "FFD20.ActivationTypeMove",
  standard: "FFD20.ActivationTypeStandard",
  full: "FFD20.ActivationTypeFullround",
  attack: "FFD20.ActivationTypeAttack",
  round: "FFD20.ActivationTypeRound",
  minute: "FFD20.ActivationTypeMinute",
  hour: "FFD20.ActivationTypeHour",
  special: "FFD20.ActivationTypeSpecial",
};

/**
 * This describes plurals for activation types.
 */
FFD20.abilityActivationTypesPlurals = {
  free: "FFD20.ActivationTypeFreePlural",
  swift: "FFD20.ActivationTypeSwiftPlural",
  immediate: "FFD20.ActivationTypeImmediatePlural",
  move: "FFD20.ActivationTypeMovePlural",
  standard: "FFD20.ActivationTypeStandardPlural",
  full: "FFD20.ActivationTypeFullroundPlural",
  attack: "FFD20.ActivationTypeAttackPlural",
  round: "FFD20.ActivationTypeRoundPlural",
  minute: "FFD20.ActivationTypeMinutePlural",
  hour: "FFD20.ActivationTypeHourPlural",
};

FFD20.abilityActivationTypes_unchained = {
  passive: "FFD20.ActivationTypePassive",
  free: "FFD20.ActivationTypeFree",
  reaction: "FFD20.ActivationTypeReaction",
  action: "FFD20.ActivationTypeAction",
  minute: "FFD20.ActivationTypeMinute",
  hour: "FFD20.ActivationTypeHour",
  special: "FFD20.ActivationTypeSpecial",
};

FFD20.abilityActivationTypesPlurals_unchained = {
  passive: "FFD20.ActivationTypePassive",
  free: "FFD20.ActivationTypeFreePlural",
  reaction: "FFD20.ActivationTypeReactionPlural",
  action: "FFD20.ActivationTypeActionPlural",
  minute: "FFD20.ActivationTypeMinutePlural",
  hour: "FFD20.ActivationTypeHourPlural",
  special: "FFD20.ActivationTypeSpecial",
};

FFD20.woundThresholdConditions = {
  0: "FFD20.WoundLevelHealthy",
  1: "FFD20.WoundLevelGrazed",
  2: "FFD20.WoundLevelWounded",
  3: "FFD20.WoundLevelCritical",
};

FFD20.divineFocus = {
  0: "",
  1: "FFD20.SpellComponentDivineFocusAlone",
  2: "FFD20.SpellComponentDivineFocusMaterial",
  3: "FFD20.SpellComponentDivineFocusFocus",
};

FFD20.measureTemplateTypes = {
  cone: "FFD20.MeasureTemplateCone",
  circle: "FFD20.MeasureTemplateCircle",
  ray: "FFD20.MeasureTemplateRay",
  rect: "FFD20.MeasureTemplateRectangle",
};

/* -------------------------------------------- */

// Creature Sizes
FFD20.actorSizes = {
  fine: "FFD20.ActorSizeFine",
  dim: "FFD20.ActorSizeDiminutive",
  tiny: "FFD20.ActorSizeTiny",
  sm: "FFD20.ActorSizeSmall",
  med: "FFD20.ActorSizeMedium",
  lg: "FFD20.ActorSizeLarge",
  huge: "FFD20.ActorSizeHuge",
  grg: "FFD20.ActorSizeGargantuan",
  col: "FFD20.ActorSizeColossal",
};

FFD20.sizeChart = {
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

FFD20.tokenSizes = {
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

FFD20.sizeMods = {
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

FFD20.sizeSpecialMods = {
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

FFD20.sizeFlyMods = {
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

FFD20.sizeStealthMods = {
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

FFD20.flyManeuverabilities = {
  clumsy: "FFD20.FlyManeuverabilityClumsy",
  poor: "FFD20.FlyManeuverabilityPoor",
  average: "FFD20.FlyManeuverabilityAverage",
  good: "FFD20.FlyManeuverabilityGood",
  perfect: "FFD20.FlyManeuverabilityPerfect",
};

FFD20.flyManeuverabilityValues = {
  clumsy: -8,
  poor: -4,
  average: 0,
  good: 4,
  perfect: 8,
};

FFD20.speedReduction = {
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

FFD20.encumbranceLoads = [
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

FFD20.encumbranceMultipliers = {
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

FFD20.itemTypes = {
  equipment: "FFD20.ItemTypeEquipment",
  weapon: "FFD20.ItemTypeWeapon",
  loot: "FFD20.ItemTypeLoot",
  consumable: "FFD20.ItemTypeConsumable",
  class: "FFD20.ItemTypeClass",
  buff: "FFD20.ItemTypeBuff",
  spell: "FFD20.ItemTypeSpell",
  feat: "FFD20.ItemTypeFeat",
  attack: "FFD20.ItemTypeAttack",
};

/**
 * Classification types for item action types
 * @type {Object}
 */
FFD20.itemActionTypes = {
  mwak: "FFD20.ActionMWAK",
  rwak: "FFD20.ActionRWAK",
  msak: "FFD20.ActionMSAK",
  rsak: "FFD20.ActionRSAK",
  mcman: "FFD20.ActionMCMan",
  rcman: "FFD20.ActionRCMan",
  spellsave: "FFD20.ActionSpellSave",
  save: "FFD20.ActionSave",
  heal: "FFD20.ActionHeal",
  other: "FFD20.ActionOther",
};

/* -------------------------------------------- */

FFD20.itemCapacityTypes = {
  items: "FFD20.ItemContainerCapacityItems",
  weight: "FFD20.ItemContainerCapacityWeight",
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
FFD20.limitedUsePeriods = {
  single: "FFD20.LimitedUseSingle",
  unlimited: "FFD20.Unlimited",
  day: "FFD20.LimitedUseDay",
  week: "FFD20.LimitedUseWeek",
  charges: "FFD20.LimitedUseCharges",
};

/* -------------------------------------------- */

// Equipment Types
FFD20.equipmentTypes = {
  armor: {
    _label: "FFD20.EquipTypeArmor",
    lightArmor: "FFD20.EquipTypeLight",
    mediumArmor: "FFD20.EquipTypeMedium",
    heavyArmor: "FFD20.EquipTypeHeavy",
  },
  shield: {
    _label: "FFD20.EquipTypeShield",
    lightShield: "FFD20.EquipTypeLightShield",
    heavyShield: "FFD20.EquipTypeHeavyShield",
    towerShield: "FFD20.EquipTypeTowerShield",
    other: "FFD20.EquipTypeOtherShield",
  },
  misc: {
    _label: "FFD20.Misc",
    wondrous: "FFD20.EquipTypeWondrousItem",
    clothing: "FFD20.EquipTypeClothing",
    other: "FFD20.Other",
  },
};

FFD20.equipmentSlots = {
  armor: {
    armor: "FFD20.EquipSlotArmor",
  },
  shield: {
    shield: "FFD20.EquipSlotShield",
  },
  misc: {
    slotless: "FFD20.EquipSlotSlotless",
    head: "FFD20.EquipSlotHead",
    headband: "FFD20.EquipSlotHeadband",
    eyes: "FFD20.EquipSlotEyes",
    shoulders: "FFD20.EquipSlotShoulders",
    neck: "FFD20.EquipSlotNeck",
    chest: "FFD20.EquipSlotChest",
    body: "FFD20.EquipSlotBody",
    belt: "FFD20.EquipSlotBelt",
    wrists: "FFD20.EquipSlotWrists",
    hands: "FFD20.EquipSlotHands",
    ring: "FFD20.EquipSlotRing",
    feet: "FFD20.EquipSlotFeet",
  },
};

FFD20.lootTypes = {
  gear: "FFD20.LootTypeGear",
  ammo: "FFD20.LootTypeAmmo",
  tradeGoods: "FFD20.LootTypeTradeGoods",
  misc: "FFD20.Misc",
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
FFD20.consumableTypes = {
  potion: "FFD20.ConsumableTypePotion",
  poison: "FFD20.ConsumableTypePoison",
  drug: "FFD20.ConsumableTypeDrug",
  scroll: "FFD20.ConsumableTypeScroll",
  wand: "FFD20.ConsumableTypeWand",
  staff: "FFD20.ConsumableTypeStaff",
  misc: "FFD20.Misc",
};

FFD20.attackTypes = {
  weapon: "FFD20.AttackTypeWeapon",
  natural: "FFD20.AttackTypeNatural",
  ability: "FFD20.AttackTypeAbility",
  racialAbility: "FFD20.AttackTypeRacial",
  item: "FFD20.Item",
  misc: "FFD20.Misc",
};

FFD20.featTypes = {
  feat: "FFD20.FeatTypeFeat",
  classFeat: "FFD20.FeatTypeClassFeat",
  trait: "FFD20.FeatTypeTraits",
  racial: "FFD20.FeatTypeRacial",
  misc: "FFD20.Misc",
  template: "FFD20.FeatTypeTemplate",
};

FFD20.abilityTypes = {
  ex: {
    short: "FFD20.AbilityTypeShortExtraordinary",
    long: "FFD20.AbilityTypeExtraordinary",
  },
  su: {
    short: "FFD20.AbilityTypeShortSupernatural",
    long: "FFD20.AbilityTypeSupernatural",
  },
  sp: {
    short: "FFD20.AbilityTypeShortSpell-Like",
    long: "FFD20.AbilityTypeSpell-Like",
  },
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
FFD20.currencies = {
  gil: "FFD20.CurrencyGil",
};

FFD20.acTypes = {
  armor: "Armor",
  shield: "Shield",
  natural: "Natural Armor",
};

FFD20.bonusModifiers = {
  untyped: "FFD20.BonusModifierUntyped",
  untypedPerm: "FFD20.BonusModifierUntypedPerm",
  base: "FFD20.BonusModifierBase",
  enh: "FFD20.BonusModifierEnhancement",
  dodge: "FFD20.BonusModifierDodge",
  inherent: "FFD20.BonusModifierInherent",
  deflection: "FFD20.BonusModifierDeflection",
  morale: "FFD20.BonusModifierMorale",
  luck: "FFD20.BonusModifierLuck",
  sacred: "FFD20.BonusModifierSacred",
  insight: "FFD20.BonusModifierInsight",
  resist: "FFD20.BonusModifierResistance",
  profane: "FFD20.BonusModifierProfane",
  trait: "FFD20.BonusModifierTrait",
  racial: "FFD20.BonusModifierRacial",
  size: "FFD20.BonusModifierSize",
  competence: "FFD20.BonusModifierCompetence",
  circumstance: "FFD20.BonusModifierCircumstance",
  alchemical: "FFD20.BonusModifierAlchemical",
  penalty: "FFD20.BonusModifierPenalty",
};

FFD20.stackingBonusModifiers = ["untyped", "untypedPerm", "dodge", "racial", "penalty"];

/* -------------------------------------------- */

// Damage Types
FFD20.damageTypes = {
  bludgeoning: "FFD20.DamageTypeBludgeoning",
  piercing: "FFD20.DamageTypePiercing",
  slashing: "FFD20.DamageTypeSlashing",
  fire: "FFD20.DamageTypeFire",
  ice: "FFD20.DamageTypeIce",
  wind: "FFD20.DamageTypeWind",
  earth: "FFD20.DamageTypeEarth",
  lightning: "FFD20.DamageTypeLightning",
  water: "FFD20.DamageTypeWater",
  light: "FFD20.DamageTypeLight",
  dark: "FFD20.DamageTypeDark",
  nonelemental: "FFD20.DamageTypeNonElemental",
};

/* -------------------------------------------- */

FFD20.distanceUnits = {
  none: "FFD20.None",
  personal: "FFD20.DistPersonal",
  touch: "FFD20.DistTouch",
  melee: "FFD20.DistMelee",
  reach: "FFD20.DistReach",
  close: "FFD20.DistClose",
  medium: "FFD20.DistMedium",
  long: "FFD20.DistLong",
  ft: "FFD20.DistFt",
  mi: "FFD20.DistMi",
  spec: "FFD20.Special",
  seeText: "FFD20.SeeText",
  unlimited: "FFD20.Unlimited",
};

FFD20.measureUnits = {
  ft: "FFD20.DistFt",
  mi: "FFD20.DistMi",
  m: "FFD20.DistM",
  km: "FFD20.DistKM",
};

FFD20.measureUnitsShort = {
  ft: "FFD20.DistFtShort",
  mi: "FFD20.DistMiShort",
  m: "FFD20.DistMShort",
  km: "FFD20.DistKMShort",
};

FFD20.actorStatures = {
  tall: "FFD20.StatureTall",
  long: "FFD20.StatureLong",
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied in D&D5e
 * @type {Object}
 */
FFD20.targetTypes = {
  none: "FFD20.None",
  self: "FFD20.TargetSelf",
  creature: "FFD20.TargetCreature",
  ally: "FFD20.TargetAlly",
  enemy: "FFD20.TargetEnemy",
  object: "FFD20.TargetObject",
  space: "FFD20.TargetSpace",
  radius: "FFD20.TargetRadius",
  sphere: "FFD20.TargetSphere",
  cylinder: "FFD20.TargetCylinder",
  cone: "FFD20.TargetCone",
  square: "FFD20.TargetSquare",
  cube: "FFD20.TargetCube",
  line: "FFD20.TargetLine",
  wall: "FFD20.TargetWall",
};

/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur in FFD20
 * @type {Object}
 */
FFD20.timePeriods = {
  inst: "FFD20.TimeInst",
  turn: "FFD20.TimeTurn",
  round: "FFD20.TimeRound",
  minute: "FFD20.TimeMinute",
  hour: "FFD20.TimeHour",
  day: "FFD20.TimeDay",
  month: "FFD20.TimeMonth",
  year: "FFD20.TimeYear",
  perm: "FFD20.TimePerm",
  seeText: "FFD20.SeeText",
  spec: "FFD20.Special",
};

/* -------------------------------------------- */

// Healing Types
FFD20.healingTypes = {
  healing: "FFD20.Healing",
  temphp: "FFD20.HealingTemp",
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
FFD20.senses = {
  bs: "FFD20.SenseBS",/* Blindsight */
  dv: "FFD20.SenseDV",/* Darkvision */
  ts: "FFD20.SenseTS",/* Tremorsense */
  tr: "FFD20.SenseTR",/* truesight */
  ll: "FFD20.SenseLL",/* Lowlight */
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained in FFD20
 
Craft (Electronic)
Craft (Explosive)
Craft (Mechanical)
Craft (Structural)
 * @type {Object}
 */
FFD20.skills = {
  acr: "FFD20.SkillAcr",/* Acrobatics */
  apr: "FFD20.SkillApr",/* Appraise */
  blf: "FFD20.SkillBlf",/* Bluff */
  clm: "FFD20.SkillClm",/* Climb */
  crf: "FFD20.SkillCrf",/* craft skills */
  dip: "FFD20.SkillDip",/* Diplomacy */
  dev: "FFD20.SkillDev",/* Disable Device */
  dis: "FFD20.SkillDis",/* Disguise */
  dri: "FFD20.SkillDri",/* Drive */
  esc: "FFD20.SkillEsc",/* Escape Artist */
  fly: "FFD20.SkillFly",/* Fly */
  han: "FFD20.SkillHan",/* Handle Animal */
  hea: "FFD20.SkillHea",/* Heal */
  int: "FFD20.SkillInt",/* Intimidate */
  kar: "FFD20.SkillKAr",/* Knowledge (arcana) */
  kdu: "FFD20.SkillKDu",/* Knowledge (dungeoneering) */
  ken: "FFD20.SkillKEn",/* Knowledge (engineering) */
  kge: "FFD20.SkillKGe",/* Knowledge (geography) */
  khi: "FFD20.SkillKHi",/* Knowledge (history) */
  klo: "FFD20.SkillKLo",/* Knowledge (local) */
  kna: "FFD20.SkillKNa",/* Knowledge (nature) */
  kno: "FFD20.SkillKNo",/* Knowledge (nobility) */
  kpl: "FFD20.SkillKPl",/* Knowledge (planes) */
  kre: "FFD20.SkillKRe",/* Knowledge (religion) */
  kte: "FFD20.SkillKTe",/* Knowledge (technology) */
  lin: "FFD20.SkillLin",/* Linguistics */
  nav: "FFD20.SkillNav",/* Navigate */
  per: "FFD20.SkillPer",/* Perception */
  prf: "FFD20.SkillPrf",/* Perform */
  pil: "FFD20.SkillPil",/* Pilot */
  pro: "FFD20.SkillPro",/* Profession */
  rep: "FFD20.SkillRep",/* Repair */
  rid: "FFD20.SkillRid",/* Ride */
  sen: "FFD20.SkillSen",/* Sense Motive */
  slt: "FFD20.SkillSlt",/* Sleight of Hand */
  spl: "FFD20.SkillSpl",/* Spellcraft */
  ste: "FFD20.SkillSte",/* Stealth */
  sur: "FFD20.SkillSur",/* Survival */
  swm: "FFD20.SkillSwm",/* Swim */
  umd: "FFD20.SkillUMD",/* Use Magic Device */
};

FFD20.skillCompendiumEntries = {
  acr: "FFD20.skills.HPsdXjjRtKNGFGRc",
  apr: "FFD20.skills.W5GT9F3euC4aG9zP",
  blf: "FFD20.skills.pAB2PYkZO3lsmeaC",
  clm: "FFD20.skills.xvua9V5Zggkc77Gt",
  crf: "FFD20.skills.L6LEhHRrn53cMuhE",
  dev: "FFD20.skills.CCy1fajKKU3K02iQ",
  dip: "FFD20.skills.OtfbHJhIQsNzmiTN",
  dis: "FFD20.skills.lP3L1RXi9q4ha9Gu",
  dir: "FFD20.skills.LqNIXvXeQTxcDeUA",
  esc: "FFD20.skills.AOQsMtvLY4V3wFEL",
  fly: "FFD20.skills.rR877UB1xVd3Z7z1",
  han: "FFD20.skills.fXauAodbOBHBi7Mj",
  hea: "FFD20.skills.RtBGttkocvTbySjd",
  int: "FFD20.skills.ImjhcPmm02QSCbPg",
  kar: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kdu: "FFD20.skills.ki0QvL0K7u4YuK0O",
  ken: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kge: "FFD20.skills.ki0QvL0K7u4YuK0O",
  khi: "FFD20.skills.ki0QvL0K7u4YuK0O",
  klo: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kna: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kno: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kpl: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kre: "FFD20.skills.ki0QvL0K7u4YuK0O",
  kte: "FFD20.skills.ki0QvL0K7u4YuK0O",
  lin: "FFD20.skills.QXIYXqy6ivNHrDrW",
  nav: "FFD20.skills.mY5hN2EBEG0zWcSk",
  per: "FFD20.skills.YYmmxDgp0g3ltSUG",
  pil: "FFD20.skills.RbmyZeLZzFv7YHqF",
  prf: "FFD20.skills.HhV5UmaRLTjtB3Xh",
  pro: "FFD20.skills.O7Utk8xKbHYDP7Ot",
  rep: "FFD20.skills.", //repair
  rid: "FFD20.skills.mKO8Q4uMiqpMySOZ",
  sen: "FFD20.skills.R8HGxGCKayOl15AO",
  slt: "FFD20.skills.zK0CbvpYLZhTN5Wn",
  spl: "FFD20.skills.uLZI2uWz0uB8UgBc",
  ste: "FFD20.skills.T6nefKotIb5vKE9h",
  sur: "FFD20.skills.TXrxgrB2sQjppZFY",
  swm: "FFD20.skills.weCPHUuXi9sF5r4E",
  umd: "FFD20.skills.WR5lekzyLT6T2CFH",
};

FFD20.arbitrarySkills = ["crf", "prf", "pro"];

/* -------------------------------------------- */

FFD20.spellPreparationModes = {
  atwill: "FFD20.SpellPrepAtWill",
  prepared: "FFD20.SpellPrepPrepared",
  spontaneous: "FFD20.SpellPrepSpontaneous",
};

FFD20.classCasterType = {
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

FFD20.magicAuraByLevel = {
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

FFD20.auraStrengths = {
  1: "FFD20.AuraStrength_Faint",
  2: "FFD20.AuraStrength_Moderate",
  3: "FFD20.AuraStrength_Strong",
  4: "FFD20.AuraStrength_Overwhelming",
};

/* -------------------------------------------- */

/* -------------------------------------------- */

// Weapon Types
FFD20.weaponTypes = {
  simple: {
    _label: "FFD20.WeaponTypeSimple",
    light: "FFD20.WeaponPropLight",
    "1h": "FFD20.WeaponPropOneHanded",
    "2h": "FFD20.WeaponPropTwoHanded",
    ranged: "FFD20.WeaponSubtypeRanged",
  },
  martial: {
    _label: "FFD20.WeaponTypeMartial",
    light: "FFD20.WeaponPropLight",
    "1h": "FFD20.WeaponPropOneHanded",
    "2h": "FFD20.WeaponPropTwoHanded",
    ranged: "FFD20.WeaponSubtypeRanged",
  },
  exotic: {
    _label: "FFD20.WeaponTypeExotic",
    light: "FFD20.WeaponPropLight",
    "1h": "FFD20.WeaponPropOneHanded",
    "2h": "FFD20.WeaponPropTwoHanded",
    ranged: "FFD20.WeaponSubtypeRanged",
  },
  chef: {
    _label: "FFD20.WeaponTypeChef",
    light: "FFD20.WeaponPropLight",
    "1h": "FFD20.WeaponPropOneHanded",
    "2h": "FFD20.WeaponPropTwoHanded",
    ranged: "FFD20.WeaponSubtypeRanged",
  },
  power: {
    _label: "FFD20.WeaponTypePower",
    light: "FFD20.WeaponPropLight",
    "1h": "FFD20.WeaponPropOneHanded",
    "2h": "FFD20.WeaponPropTwoHanded",
    ranged: "FFD20.WeaponSubtypeRanged",
  },
  misc: {
    _label: "FFD20.Misc",
    splash: "FFD20.WeaponTypeSplash",
    other: "FFD20.Other",
  },
};

// Weapon hold types
FFD20.weaponHoldTypes = {
  normal: "FFD20.WeaponHoldTypeNormal",
  "2h": "FFD20.WeaponHoldTypeTwoHanded",
  oh: "FFD20.WeaponHoldTypeOffhand",
};

/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
FFD20.weaponProperties = {
  blc: "FFD20.WeaponPropBlocking",
  brc: "FFD20.WeaponPropBrace",
  dea: "FFD20.WeaponPropDeadly",
  dst: "FFD20.WeaponPropDistracting",
  dbl: "FFD20.WeaponPropDouble",
  dis: "FFD20.WeaponPropDisarm",
  fin: "FFD20.WeaponPropFinesse",
  frg: "FFD20.WeaponPropFragile",
  grp: "FFD20.WeaponPropGrapple",
  imp: "FFD20.WeaponPropImprovised",
  mnk: "FFD20.WeaponPropMonk",
  nnl: "FFD20.WeaponPropNonLethal",
  prf: "FFD20.WeaponPropPerformance",
  rch: "FFD20.WeaponPropReach",
  snd: "FFD20.WeaponPropSunder",
  thr: "FFD20.WeaponPropThrown",
  trp: "FFD20.WeaponPropTrip",
};

// Spell Components
FFD20.spellComponents = {
  V: "FFD20.SpellComponentVerbal",
  S: "FFD20.SpellComponentSomatic",
  M: "FFD20.SpellComponentMaterial",
  F: "FFD20.SpellComponentFocus",
  DF: "FFD20.SpellComponentDivineFocus",
};

// Spell Schools
FFD20.spellSchools = {
  crn: "FFD20.SpellSchoolChronomancy",
  drk: "FFD20.SpellSchoolDark",
  ele: "FFD20.SpellSchoolElemental",
  enc: "FFD20.SpellSchoolEnhancing",
  enf: "FFD20.SpellSchoolEnfeebling",
  heal: "FFD20.SpellSchoolHealing",
  ill: "FFD20.SpellSchoolIllusion",
  lit: "FFD20.SpellSchoolLight",
  misc: "FFD20.SpellSchoolMisc",
  nec: "FFD20.SpellSchoolNecromancy",
  nel: "FFD20.SpellSchoolNonElemental",
  sum: "FFD20.SpellSchoolSummoning",
  uni: "FFD20.SpellSchoolUniversal",
};

// Spell Levels
FFD20.spellLevels = {
  0: "FFD20.SpellLevel0",
  1: "FFD20.SpellLevel1",
  2: "FFD20.SpellLevel2",
  3: "FFD20.SpellLevel3",
  4: "FFD20.SpellLevel4",
  5: "FFD20.SpellLevel5",
  6: "FFD20.SpellLevel6",
  7: "FFD20.SpellLevel7",
  8: "FFD20.SpellLevel8",
  9: "FFD20.SpellLevel9",
};

/* -------------------------------------------- */

/**
 * Weapon proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
FFD20.proficiencyLevels = {
  "-4": "Not Proficient",
  0: "Proficient",
};

/* -------------------------------------------- */

FFD20.conditionTypes = {
  antagonized: "FFD20.CondTypeAntagonized",
  berserk: "FFD20.CondTypeBerserk",
  bleed: "FFD20.CondTypeBleed",
  blinded: "FFD20.CondTypeBlinded",
  burning: "FFD20.CondTypeBurning",
  charmed: "FFD20.CondTypeCharmed",
  confused: "FFD20.CondTypeConfused",
  cowering: "FFD20.CondTypeCowering",
  cursed: "FFD20.CondTypeCursed",
  dazed: "FFD20.CondTypeDazed",
  dazzled: "FFD20.CondTypeDazzled",
  deafened: "FFD20.CondTypeDeafened",
  deprotect: "FFD20.CondTypeDeprotect",
  deshell: "FFD20.CondTypeDeshell",
  dimmed: "FFD20.CondTypeDimmed",
  disabled: "FFD20.CondTypeDisabled",
  diseased: "FFD20.CondTypeDiseased",
  doom: "FFD20.CondTypeDoom",
  drenched: "FFD20.CondTypeDrenched",
  energyDrained: "FFD20.CondTypeEnergyDrained",
  entangled: "FFD20.CondTypeEntangled",
  exhausted: "FFD20.CondTypeExhausted",
  fascinated: "FFD20.CondTypeFascinated",
  fatigued: "FFD20.CondTypeFatigued", 
  float: "FFD20.CondTypeFloat",
  frightened: "FFD20.CondTypeFrightened",
  frog: "FFD20.CondTypeFrog",
  frozen: "FFD20.CondTypeFrozen",
  hasted: "FFD20.CondTypeHasted",
  immobilized: "FFD20.CondTypeImmobilized",
  imperil: "FFD20.CondTypeImperil",
  invisible: "FFD20.CondTypeInvisible",
  mini: "FFD20.CondTypeMini",
  nauseated: "FFD20.CondTypeNauseated",
  panicked: "FFD20.CondTypePanicked",
  paralyzed: "FFD20.CondTypeParalyzed",
  petrified: "FFD20.CondTypePetrified",
  poisoned: "FFD20.CondTypePoisoned",
  protect: "FFD20.CondTypeProtect",
  reflect: "FFD20.CondTypeReflect",
  regen: "FFD20.CondTypeRegen",
  reraise: "FFD20.CondTypeReraise",
  sapped: "FFD20.CondTypeSapped",
  shaken: "FFD20.CondTypeShaken",
  shell: "FFD20.CondTypeShell",
  sickened: "FFD20.CondTypeSickened",
  silenced: "FFD20.CondTypeSilenced",
  sleep: "FFD20.CondTypeSleep",
  slow: "FFD20.CondTypeSlow",
  squalled: "FFD20.CondTypeSqualled",
  staggered: "FFD20.CondTypeStaggered",
  static: "FFD20.CondTypeStatic",
  stop: "FFD20.CondTypeStop",
  stunned: "FFD20.CondTypeStunned",
  weighted: "FFD20.CondTypeWeighted",
  zombie: "FFD20.CondTypeZombie",
};

FFD20.conditions = {
  antagonized: "FFD20.CondAntagonized",
  berserk: "FFD20.CondBerserk",
  bleed: "FFD20.CondBleed",
  blinded: "FFD20.CondBlinded",
  burning: "FFD20.CondBurning",
  charmed: "FFD20.CondCharmed",
  confused: "FFD20.CondConfused",
  cowering: "FFD20.CondCowering",
  cursed: "FFD20.CondCursed",
  dazed: "FFD20.CondDazed",
  dazzled: "FFD20.CondDazzled",
  deafened: "FFD20.CondDeafened",
  deprotect: "FFD20.CondDeprotect",
  deshell: "FFD20.CondDeshell",
  dimmed: "FFD20.CondDimmed",
  disabled: "FFD20.CondDisabled",
  diseased: "FFD20.CondDiseased",
  doom: "FFD20.CondDoom",
  drenched: "FFD20.CondDrenched",
  energyDrained: "FFD20.CondEnergyDrained",
  entangled: "FFD20.CondEntangled",
  exhausted: "FFD20.CondExhausted",
  fascinated: "FFD20.CondFascinated",
  fatigued: "FFD20.CondFatigued", 
  float: "FFD20.CondFloat",
  frightened: "FFD20.CondFrightened",
  frog: "FFD20.CondFrog",
  frozen: "FFD20.CondFrozen",
  grappled: "FFD20.CondGrappled",
  hasted: "FFD20.CondHasted",
  helpless: "FFD20.CondHelpless",
  immobilized: "FFD20.CondImmobilized",
  imperil: "FFD20.CondImperil",
  incorporeal: "FFD20.CondIncorporeal",
  invisible: "FFD20.CondInvisible",
  mini: "FFD20.CondMini",
  nauseated: "FFD20.CondNauseated",
  panicked: "FFD20.CondPanicked",
  paralyzed: "FFD20.CondParalyzed",
  petrified: "FFD20.CondPetrified",
  pinned: "FFD20.CondPinned",
  poisoned: "FFD20.CondPoisoned",
  prone: "FFD20.CondProne",
  protect: "FFD20.CondProtect",
  reflect: "FFD20.CondReflect",
  regen: "FFD20.CondRegen",
  reraise: "FFD20.CondReraise",
  sapped: "FFD20.CondSapped",
  shaken: "FFD20.CondShaken",
  shell: "FFD20.CondShell",
  sickened: "FFD20.CondSickened",
  silenced: "FFD20.CondSilenced",
  sleep: "FFD20.CondSleep",
  slow: "FFD20.CondSlow",
  squalled: "FFD20.CondSqualled",
  staggered: "FFD20.CondStaggered",
  static: "FFD20.CondStatic",
  stop: "FFD20.CondStop",
  stunned: "FFD20.CondStunned",
  weighted: "FFD20.CondWeighted",
  zombie: "FFD20.CondZombie",
};

FFD20.conditionTextures = {
  bleed: "systems/ffd20/icons/conditions/bleed.png",
  blind: "systems/ffd20/icons/conditions/blind.png",
  confused: "systems/ffd20/icons/conditions/confused.png",
  dazzled: "systems/ffd20/icons/conditions/dazzled.png",
  deaf: "systems/ffd20/icons/conditions/deaf.png",
  entangled: "systems/ffd20/icons/conditions/entangled.png",
  fatigued: "systems/ffd20/icons/conditions/fatigued.png",
  exhausted: "systems/ffd20/icons/conditions/exhausted.png",
  grappled: "systems/ffd20/icons/conditions/grappled.png",
  helpless: "systems/ffd20/icons/conditions/helpless.png",
  incorporeal: "systems/ffd20/icons/conditions/incorporeal.png",
  invisible: "systems/ffd20/icons/conditions/invisible.png",
  paralyzed: "systems/ffd20/icons/conditions/paralyzed.png",
  pinned: "systems/ffd20/icons/conditions/pinned.png",
  prone: "systems/ffd20/icons/conditions/prone.png",
  sickened: "systems/ffd20/icons/conditions/sickened.png",
  staggered: "systems/ffd20/icons/conditions/staggered.png",
  stunned: "systems/ffd20/icons/conditions/stunned.png",
  shaken: "systems/ffd20/icons/conditions/shaken.png",
  frightened: "systems/ffd20/icons/conditions/frightened.png",
  panicked: "systems/ffd20/icons/conditions/fear.png",
  nauseated: "systems/ffd20/icons/conditions/nauseated.png",
  dazed: "systems/ffd20/icons/conditions/dazed.png",
};

FFD20.buffTypes = {
  temp: "FFD20.Temporary",
  perm: "FFD20.Permanent",
  item: "FFD20.Item",
  misc: "FFD20.Misc",
};

// Static conditional modifier targets
FFD20.conditionalTargets = {
  attack: {
    _label: "FFD20.AttackRollPlural",
    allAttack: "FFD20.All",
    hasteAttack: "FFD20.Haste",
    rapidShotAttack: "FFD20.RapidShot",
  },
  damage: {
    _label: "FFD20.Damage",
    allDamage: "FFD20.All",
    hasteDamage: "FFD20.Haste",
    rapidShotDamage: "FFD20.RapidShot",
  },
  effect: {
    _label: "FFD20.Effects",
  },
  misc: {
    _label: "FFD20.MiscShort",
  },
};

FFD20.buffTargets = {
  ac: {
    _label: "FFD20.BuffTarAC",
    ac: "FFD20.BuffTarACGeneric",
    aac: "FFD20.BuffTarACArmor",
    sac: "FFD20.BuffTarACShield",
    nac: "FFD20.BuffTarACNatural",
  },
  attack: {
    _label: "FFD20.AttackRollPlural",
    attack: "FFD20.All",
    mattack: "FFD20.Melee",
    rattack: "FFD20.Ranged",
    "~attackCore": "", // hidden
  },
  damage: {
    _label: "FFD20.Damage",
    damage: "FFD20.All",
    wdamage: "FFD20.WeaponDamage",
    sdamage: "FFD20.SpellDamage",
  },
  ability: {
    _label: "FFD20.AbilityScore",
    str: "FFD20.AbilityStr",
    dex: "FFD20.AbilityDex",
    con: "FFD20.AbilityCon",
    int: "FFD20.AbilityInt",
    wis: "FFD20.AbilityWis",
    cha: "FFD20.AbilityCha",
  },
  savingThrows: {
    _label: "FFD20.SavingThrowPlural",
    allSavingThrows: "FFD20.All",
    fort: "FFD20.SavingThrowFort",
    ref: "FFD20.SavingThrowRef",
    will: "FFD20.SavingThrowWill",
  },
  skills: {
    _label: "FFD20.Skills",
    skills: "FFD20.All",
    strSkills: "FFD20.BuffTarStrSkills",
    dexSkills: "FFD20.BuffTarDexSkills",
    conSkills: "FFD20.BuffTarConSkills",
    intSkills: "FFD20.BuffTarIntSkills",
    wisSkills: "FFD20.BuffTarWisSkills",
    chaSkills: "FFD20.BuffTarChaSkills",
  },
  skill: {
    _label: "FFD20.BuffTarSpecificSkill",
  },
  abilityChecks: {
    _label: "FFD20.BuffTarAbilityChecks",
    allChecks: "FFD20.All",
    strChecks: "FFD20.BuffTarStrChecks",
    dexChecks: "FFD20.BuffTarDexChecks",
    conChecks: "FFD20.BuffTarConChecks",
    intChecks: "FFD20.BuffTarIntChecks",
    wisChecks: "FFD20.BuffTarWisChecks",
    chaChecks: "FFD20.BuffTarChaChecks",
  },
  speed: {
    _label: "FFD20.Speed",
    allSpeeds: "FFD20.All",
    landSpeed: "FFD20.SpeedLand",
    climbSpeed: "FFD20.SpeedClimb",
    swimSpeed: "FFD20.SpeedSwim",
    burrowSpeed: "FFD20.SpeedBurrow",
    flySpeed: "FFD20.SpeedFly",
  },
  misc: {
    _label: "FFD20.MiscShort",
    cmb: "FFD20.CMBAbbr",
    cmd: "FFD20.CMDAbbr",
    init: "FFD20.Initiative",
    mhp: "FFD20.HitPoints",
    wounds: "FFD20.Wounds",
    vigor: "FFD20.Vigor",
    mmp: "FFD20.ManaPoints",
    limit: "FFD20.LimitBreak",
    acpA: "FFD20.ACPArmor",
    acpS: "FFD20.ACPShield",
    mDexA: "FFD20.MaxDexArmor",
    mDexS: "FFD20.MaxDexShield",
    spellResist: "FFD20.SpellResistance",
  },
};

FFD20.contextNoteTargets = {
  attacks: {
    _label: "FFD20.Attacks",
    attack: "FFD20.AttackRollPlural",
    effect: "FFD20.Effects",
    melee: "FFD20.Melee",
    meleeWeapon: "FFD20.MeleeWeapon",
    meleeSpell: "FFD20.MeleeSpell",
    ranged: "FFD20.Ranged",
    rangedWeapon: "FFD20.RangedWeapon",
    rangedSpell: "FFD20.RangedSpell",
  },
  savingThrows: {
    _label: "FFD20.SavingThrowPlural",
    allSavingThrows: "FFD20.All",
    fort: "FFD20.SavingThrowFort",
    ref: "FFD20.SavingThrowRef",
    will: "FFD20.SavingThrowWill",
  },
  skills: {
    _label: "FFD20.Skills",
    skills: "FFD20.All",
    strSkills: "FFD20.BuffTarStrSkills",
    dexSkills: "FFD20.BuffTarDexSkills",
    conSkills: "FFD20.BuffTarConSkills",
    intSkills: "FFD20.BuffTarIntSkills",
    wisSkills: "FFD20.BuffTarWisSkills",
    chaSkills: "FFD20.BuffTarChaSkills",
  },
  skill: {
    _label: "FFD20.BuffTarSpecificSkill",
  },
  abilityChecks: {
    _label: "FFD20.BuffTarAbilityChecks",
    allChecks: "FFD20.All",
    strChecks: "FFD20.BuffTarStrChecks",
    dexChecks: "FFD20.BuffTarDexChecks",
    conChecks: "FFD20.BuffTarConChecks",
    intChecks: "FFD20.BuffTarIntChecks",
    wisChecks: "FFD20.BuffTarWisChecks",
    chaChecks: "FFD20.BuffTarChaChecks",
  },
  spell: {
    _label: "FFD20.BuffTarSpells",
    effect: "FFD20.SpellBuffEffect",
    concentration: "FFD20.Concentration",
    cl: "FFD20.CasterLevel",
  },
  misc: {
    _label: "FFD20.MiscShort",
    ac: "FFD20.ACNormal",
    cmb: "FFD20.CMBAbbr",
    cmd: "FFD20.CMDAbbr",
    sr: "FFD20.SpellResistance",
    init: "FFD20.Initiative",
  },
};

// Languages
FFD20.languages = {
  common: "FFD20.LanguageCommon",
  dwarven: "FFD20.LanguageDwarven",
  elvaan: "FFD20.LanguageElvaan",
  galkan: "FFD20.LanguageGalkan",
  lalafellan: "FFD20.LanguageLalafellan",
  mithran: "FFD20.LanguageMithran",
  moogle: "FFD20.LanguageMoogle",
  aegyllan: "FFD20.LanguageAegyllan",
  albhedian: "FFD20.LanguageAlbhedian",
  banganese: "FFD20.LanguageBanganese",
  burmecian: "FFD20.LanguageBurmecian",
  draconic: "FFD20.LanguageDraconic",
  garif: "FFD20.LanguageGarif",
  guado: "FFD20.LanguageGuado",
  hypello: "FFD20.LanguageHypello",
  lupin: "FFD20.LanguageLupin",
  mandragoran: "FFD20.LanguageMandragoran",
  numish: "FFD20.LanguageNumish",
  qiqirn: "FFD20.LanguageQiqirn",
  queran: "FFD20.LanguageQueran",
  roegadyn: "FFD20.LanguageRoegadyn",
  ronsaur: "FFD20.LanguageRonsaur",
  seeq: "FFD20.LanguageSeeq",
  tonberry: "FFD20.LanguageTonberry",
  vieran: "FFD20.LanguageVieran",
  aquan: "FFD20.LanguageAquan",
  auran: "FFD20.LanguageAuran",
  auroran: "FFD20.LanguageAuroran",
  enochian: "FFD20.LanguageEnochian",
  ignan: "FFD20.LanguageIgnan",
  terran: "FFD20.LanguageTerran",
  thorian: "FFD20.LanguageThorian",
  umbran: "FFD20.LanguageUmbran",
  amaljaa: "FFD20.LanguageAmaljaa",
  antican: "FFD20.LanguageAntican",
  goblin: "FFD20.LanguageGoblin",
  kojin: "FFD20.LanguageKojin",
  orcish: "FFD20.LanguageOrcish",
  quadav: "FFD20.LanguageQuadav",
  sahagin: "FFD20.LanguageSahagin",
  sylvan: "FFD20.LanguageSylvan",
  undercommon: "FFD20.LanguageUndercommon",
  vanu: "FFD20.LanguageVanu",
  yagudo: "FFD20.LanguageYagudo",
};

FFD20.creatureTypes = {
  aberration: "FFD20.CreatureTypeAberration",
  animal: "FFD20.CreatureTypeAnimal",
  construct: "FFD20.CreatureTypeConstruct",
  dragon: "FFD20.CreatureTypeDragon",
  fey: "FFD20.CreatureTypeFey",
  humanoid: "FFD20.CreatureTypeHumanoid",
  magicalBeast: "FFD20.CreatureTypeMagicalBeast",
  monstrousHumanoid: "FFD20.CreatureTypeMonstrousHumanoid",
  ooze: "FFD20.CreatureTypeOoze",
  outsider: "FFD20.CreatureTypeOutsider",
  plant: "FFD20.CreatureTypePlant",
  undead: "FFD20.CreatureTypeUndead",
  vermin: "FFD20.CreatureTypeVermin",
};

FFD20.sizeDie = [
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
FFD20.CHARACTER_EXP_LEVELS = {
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
    8350000,
    14350000,
    26350000,
    50350000,
    98350000,
    194350000,
    386350000,
    770350000,
    1538350000,
    3074350000,
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
    5700000,
    9900000,
    18300000,
    35100000,
    68700000,
    135900000,
    270300000,
    539100000,
    1076700000,
    2151900000,
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
    3800000,
    6600000,
    12200000,
    23400000,
    45800000,
    90600000,
    180200000,
    359400000,
    717800000,
    1434600000,
  ],
};

// Challenge Rating XP Levels
FFD20.CR_EXP_LEVELS = [
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

FFD20.temporaryRollDataFields = {
  actor: [
    "d20",
    "attackBonus",
    "damageBonus",
    "pointBlankBonus",
    "rapidShotPenalty",
    "powerAttackBonus",
    "powerAttackPenalty",
    "conditionals",
    "concentrationBonus",
    "formulaBonus",
    "dcBonus",
    "chargeCostBonus",
    "chargeCost",
    "sizeBonus",
    "bonus",
    "critMult",
    "ablMult",
    "ablDamage",
    "cl",
    "sl",
    "classLevel",
    "ablMod",
    "item",
    "level",
    "mod",
    "spells",
  ],
};

CONFIG.Combat.initiative.decimals = 2;
