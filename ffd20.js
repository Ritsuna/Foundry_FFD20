const e = { re: { traitSeparator: /\s*[;]\s*/g }, abilities: { str: "FFD20.AbilityStr", dex: "FFD20.AbilityDex", con: "FFD20.AbilityCon", int: "FFD20.AbilityInt", wis: "FFD20.AbilityWis", cha: "FFD20.AbilityCha" }, abilitiesShort: { str: "FFD20.AbilityShortStr", dex: "FFD20.AbilityShortDex", con: "FFD20.AbilityShortCon", int: "FFD20.AbilityShortInt", wis: "FFD20.AbilityShortWis", cha: "FFD20.AbilityShortCha" }, abilityCost: { 7: -4, 8: -2, 9: -1, 10: 0, 11: 1, 12: 2, 13: 3, 14: 5, 15: 7, 16: 10, 17: 13, 18: 17 }, levelAbilityScores: { 4: 1, 8: 1, 12: 1, 16: 1, 20: 1 }, levelAbilityScoreFeature: { img: "systems/ffd20/icons/skills/affliction_10.jpg", name: "FFD20.LevelUp.AbilityScore.Item.Name", system: { description: { value: "FFD20.LevelUp.AbilityScore.Item.Desc" }, featType: "misc" }, type: "feat" }, savingThrows: { fort: "FFD20.SavingThrowFort", ref: "FFD20.SavingThrowRef", will: "FFD20.SavingThrowWill" }, classTypes: { base: "FFD20.ClassTypeBase", prestige: "FFD20.ClassTypePrestige", npc: "FFD20.ClassTypeNPC", racial: "FFD20.ClassTypeRacial", mythic: "FFD20.ClassTypeMythic" }, classBAB: { low: "FFD20.Low", med: "FFD20.Medium", high: "FFD20.High", custom: "FFD20.Custom" }, classSavingThrows: { low: "FFD20.Poor", high: "FFD20.Good", custom: "FFD20.Custom" }, classBABFormulas: { low: "floor(@hitDice * 0.5)", med: "floor(@hitDice * 0.75)", high: "@hitDice", custom: "0" }, classFractionalBABFormulas: { low: "@hitDice * 0.5", med: "@hitDice * 0.75", high: "@hitDice", custom: "0" }, classSavingThrowFormulas: { base: { low: "floor(@hitDice / 3)", high: "2 + floor(@hitDice / 2)" }, prestige: { low: "floor((1 + @hitDice) / 3)", high: "floor((1 + @hitDice) / 2)" }, npc: { low: "floor(@hitDice / 3)", high: "2 + floor(@hitDice / 2)" }, racial: { low: "floor(@hitDice / 3)", high: "2 + floor(@hitDice / 2)" }, mythic: { low: "0", high: "0" }, custom: { low: "0", high: "0" } }, classFractionalSavingThrowFormulas: { goodSaveBonus: "2", base: { low: "@hitDice / 3", high: "@hitDice / 2", goodSave: true }, prestige: { low: "(1 + @hitDice) / 3", high: "(1 + @hitDice) / 2" }, npc: { low: "@hitDice / 3", high: "@hitDice / 2", goodSave: true }, racial: { low: "@hitDice / 3", high: "@hitDice / 2", goodSave: true }, mythic: { low: "0", high: "0" }, custom: { low: "0", high: "0" } }, favouredClassBonuses: { hp: "FFD20.FavouredClassHP", skill: "FFD20.FavouredClassSkill", alt: "FFD20.FavouredClassAlt" }, favouredClassBonusIcons: { hp: "fa-heartbeat", skill: "fa-wrench", alt: "fa-tag" }, ac: { normal: "FFD20.ACNormal", touch: "FFD20.ACTouch", flatFooted: "FFD20.ACFlatFooted" }, acValueLabels: { normal: "FFD20.ACTypeNormal", touch: "FFD20.ACTypeTouch", flatFooted: "FFD20.ACTypeFlatFooted" }, alignments: { lg: "FFD20.AlignmentLG", ng: "FFD20.AlignmentNG", cg: "FFD20.AlignmentCG", ln: "FFD20.AlignmentLN", tn: "FFD20.AlignmentTN", cn: "FFD20.AlignmentCN", le: "FFD20.AlignmentLE", ne: "FFD20.AlignmentNE", ce: "FFD20.AlignmentCE" }, alignmentsShort: { lg: "FFD20.AlignmentShortLG", ng: "FFD20.AlignmentShortNG", cg: "FFD20.AlignmentShortCG", ln: "FFD20.AlignmentShortLN", tn: "FFD20.AlignmentShortTN", cn: "FFD20.AlignmentShortCN", le: "FFD20.AlignmentShortLE", ne: "FFD20.AlignmentShortNE", ce: "FFD20.AlignmentShortCE" }, armorProficiencies: { lgt: "FFD20.ArmorProfLight", med: "FFD20.ArmorProfMedium", hvy: "FFD20.ArmorProfHeavy", shl: "FFD20.ArmorProfShield", twr: "FFD20.ArmorProfTowerShield" }, weaponProficiencies: { sim: "FFD20.WeaponProfSimple", mar: "FFD20.WeaponProfMartial", exo: "FFD20.WeaponProfExotic", che: "FFD20.WeaponProfChef", pow: "FFD20.WeaponProfPower" }, abilityActivationTypes: { passive: "FFD20.ActivationTypePassive", free: "FFD20.ActivationTypeFree", nonaction: "FFD20.ActivationTypeNonaction", swift: "FFD20.ActivationTypeSwift", immediate: "FFD20.ActivationTypeImmediate", move: "FFD20.ActivationTypeMove", standard: "FFD20.ActivationTypeStandard", full: "FFD20.ActivationTypeFullround", attack: "FFD20.ActivationTypeAttack", aoo: "FFD20.ActivationTypeAoO", round: "FFD20.ActivationTypeRound", minute: "FFD20.ActivationTypeMinute", hour: "FFD20.ActivationTypeHour", special: "FFD20.ActivationTypeSpecial" }, abilityActivationTypesPlurals: { free: "FFD20.ActivationTypeFreePlural", swift: "FFD20.ActivationTypeSwiftPlural", immediate: "FFD20.ActivationTypeImmediatePlural", move: "FFD20.ActivationTypeMovePlural", standard: "FFD20.ActivationTypeStandardPlural", full: "FFD20.ActivationTypeFullroundPlural", attack: "FFD20.ActivationTypeAttackPlural", round: "FFD20.ActivationTypeRoundPlural", minute: "FFD20.ActivationTypeMinutePlural", hour: "FFD20.ActivationTypeHourPlural" }, abilityActivationTypes_unchained: { passive: "FFD20.ActivationTypePassive", free: "FFD20.ActivationTypeFree", nonaction: "FFD20.ActivationTypeNonaction", reaction: "FFD20.ActivationTypeReaction", action: "FFD20.ActivationTypeAction", attack: "FFD20.ActivationTypeAttack", aoo: "FFD20.ActivationTypeAoO", minute: "FFD20.ActivationTypeMinute", hour: "FFD20.ActivationTypeHour", special: "FFD20.ActivationTypeSpecial" }, abilityActivationTypesPlurals_unchained: { passive: "FFD20.ActivationTypePassive", free: "FFD20.ActivationTypeFreePlural", reaction: "FFD20.ActivationTypeReactionPlural", action: "FFD20.ActivationTypeActionPlural", minute: "FFD20.ActivationTypeMinutePlural", hour: "FFD20.ActivationTypeHourPlural", special: "FFD20.ActivationTypeSpecial" }, woundThresholdConditions: { 0: "FFD20.WoundLevelHealthy", 1: "FFD20.WoundLevelGrazed", 2: "FFD20.WoundLevelWounded", 3: "FFD20.WoundLevelCritical" }, woundThresholdChangeTargets: ["~attackCore", "cmd", "allSavingThrows", "ac", "~skillMods", "allChecks"], divineFocus: { 0: "", 1: "FFD20.SpellComponentDivineFocusAlone", 2: "FFD20.SpellComponentDivineFocusMaterial", 3: "FFD20.SpellComponentDivineFocusFocus" }, measureTemplateTypes: { cone: "FFD20.MeasureTemplateCone", circle: "FFD20.MeasureTemplateCircle", ray: "FFD20.MeasureTemplateRay", rect: "FFD20.MeasureTemplateRectangle" }, actorSizes: { fine: "FFD20.ActorSizeFine", dim: "FFD20.ActorSizeDiminutive", tiny: "FFD20.ActorSizeTiny", sm: "FFD20.ActorSizeSmall", med: "FFD20.ActorSizeMedium", lg: "FFD20.ActorSizeLarge", huge: "FFD20.ActorSizeHuge", grg: "FFD20.ActorSizeGargantuan", col: "FFD20.ActorSizeColossal" }, sizeChart: { fine: "F", dim: "D", tiny: "T", sm: "S", med: "M", lg: "L", huge: "H", grg: "G", col: "C" }, tokenSizes: { fine: { w: 1, h: 1, scale: 0.45 }, dim: { w: 1, h: 1, scale: 0.6 }, tiny: { w: 1, h: 1, scale: 0.75 }, sm: { w: 1, h: 1, scale: 0.9 }, med: { w: 1, h: 1, scale: 1 }, lg: { w: 2, h: 2, scale: 1 }, huge: { w: 3, h: 3, scale: 1 }, grg: { w: 4, h: 4, scale: 1 }, col: { w: 6, h: 6, scale: 1 } }, sizeMods: { fine: 8, dim: 4, tiny: 2, sm: 1, med: 0, lg: -1, huge: -2, grg: -4, col: -8 }, sizeSpecialMods: { fine: -8, dim: -4, tiny: -2, sm: -1, med: 0, lg: 1, huge: 2, grg: 4, col: 8 }, sizeFlyMods: { fine: 8, dim: 6, tiny: 4, sm: 2, med: 0, lg: -2, huge: -4, grg: -6, col: -8 }, sizeStealthMods: { fine: 16, dim: 12, tiny: 8, sm: 4, med: 0, lg: -4, huge: -8, grg: -12, col: -16 }, flyManeuverabilities: { clumsy: "FFD20.FlyManeuverabilityClumsy", poor: "FFD20.FlyManeuverabilityPoor", average: "FFD20.FlyManeuverabilityAverage", good: "FFD20.FlyManeuverabilityGood", perfect: "FFD20.FlyManeuverabilityPerfect" }, flyManeuverabilityValues: { clumsy: -8, poor: -4, average: 0, good: 4, perfect: 8 }, speedReduction: { 5: 5, 15: 10, 20: 15, 30: 20, 35: 25, 45: 30, 50: 35, 60: 40, 65: 45, 75: 50, 80: 55, 90: 60, 95: 65, 105: 70, 110: 75, 120: 80 }, encumbranceLoads: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 115, 130, 150, 175, 200, 230, 260, 300, 350, 400, 460, 520, 600, 700, 800, 920, 1040, 1200, 1400, 1600, 1840, 2080, 2400, 2800, 3200, 3680, 4160, 4800, 5600, 6400, 7360, 8320, 9600, 11200, 12800, 14720, 16640, 19200, 22400, 25600], encumbranceLevels: { light: 0, medium: 1, heavy: 2 }, encumbranceMultipliers: { normal: { fine: 0.125, dim: 0.25, tiny: 0.5, sm: 0.75, med: 1, lg: 2, huge: 4, grg: 8, col: 16 }, quadruped: { fine: 0.25, dim: 0.5, tiny: 0.75, sm: 1, med: 1.5, lg: 3, huge: 6, grg: 12, col: 24 } }, itemTypes: { equipment: "FFD20.ItemTypeEquipment", weapon: "FFD20.ItemTypeWeapon", loot: "FFD20.ItemTypeLoot", consumable: "FFD20.ItemTypeConsumable", class: "FFD20.ItemTypeClass", buff: "FFD20.ItemTypeBuff", spell: "FFD20.ItemTypeSpell", feat: "FFD20.ItemTypeFeat", attack: "FFD20.ItemTypeAttack" }, itemActionTypes: { mwak: "FFD20.ActionMWAK", rwak: "FFD20.ActionRWAK", msak: "FFD20.ActionMSAK", rsak: "FFD20.ActionRSAK", mcman: "FFD20.ActionMCMan", rcman: "FFD20.ActionRCMan", spellsave: "FFD20.ActionSpellSave", save: "FFD20.ActionSave", heal: "FFD20.ActionHeal", other: "FFD20.ActionOther" }, itemCapacityTypes: { items: "FFD20.ItemContainerCapacityItems", weight: "FFD20.ItemContainerCapacityWeight" }, limitedUsePeriods: { single: "FFD20.LimitedUseSingle", unlimited: "FFD20.Unlimited", day: "FFD20.LimitedUseDay", week: "FFD20.LimitedUseWeek", charges: "FFD20.LimitedUseCharges" }, equipmentTypes: { armor: { _label: "FFD20.EquipTypeArmor", lightArmor: "FFD20.EquipTypeLight", mediumArmor: "FFD20.EquipTypeMedium", heavyArmor: "FFD20.EquipTypeHeavy" }, shield: { _label: "FFD20.EquipTypeShield", lightShield: "FFD20.EquipTypeLightShield", heavyShield: "FFD20.EquipTypeHeavyShield", towerShield: "FFD20.EquipTypeTowerShield", other: "FFD20.EquipTypeOtherShield" }, misc: { _label: "FFD20.Misc", wondrous: "FFD20.EquipTypeWondrousItem", clothing: "FFD20.EquipTypeClothing", other: "FFD20.Other" }, materia: { _label: "FFD20.Materia", ability: "FFD20.MateriaTypeAbility", independent: "FFD20.MateriaTypeIndependent", spell: "FFD20.MateriaTypeSpell", summon: "FFD20.MateriaTypeSummon", support: "FFD20.MateriaTypeSupport" } }, equipmentSlots: { armor: { armor: "FFD20.EquipSlotArmor" }, shield: { shield: "FFD20.EquipSlotShield" }, misc: { slotless: "FFD20.EquipSlotSlotless", head: "FFD20.EquipSlotHead", headband: "FFD20.EquipSlotHeadband", eyes: "FFD20.EquipSlotEyes", shoulders: "FFD20.EquipSlotShoulders", neck: "FFD20.EquipSlotNeck", chest: "FFD20.EquipSlotChest", body: "FFD20.EquipSlotBody", belt: "FFD20.EquipSlotBelt", wrists: "FFD20.EquipSlotWrists", hands: "FFD20.EquipSlotHands", ring: "FFD20.EquipSlotRing", feet: "FFD20.EquipSlotFeet" }, materia: { any: "FFD20.MateriaSlotAny", weapon: "FFD20.MateriaSlotWeapon", shield: "FFD20.MateriaSlotShield", armor: "FFD20.MateriaSlotArmor", weaponarmor: "FFD20.MateriaSlotWeaponArmor", armorShield: "FFD20.MateriaSlotArmorShield", other: "FFD20.MateriaSlotOther" } }, lootTypes: { gear: "FFD20.LootTypeGear", ammo: "FFD20.LootTypeAmmo", tradeGoods: "FFD20.LootTypeTradeGoods", misc: "FFD20.Misc" }, ammoTypes: { arrow: "FFD20.AmmoTypeArrow", bolt: "FFD20.AmmoTypeBolt", repeatingBolt: "FFD20.AmmoTypeRepeatingBolt", slingBullet: "FFD20.AmmoTypeBulletSling", gunBullet: "FFD20.AmmoTypeBulletGun", dragoonBullet: "FFD20.AmmoTypeBulletDragoon", dart: "FFD20.AmmoTypeDart" }, consumableTypes: { potion: "FFD20.ConsumableTypePotion", oil: "FFD20.ConsumableTypeOil", poison: "FFD20.ConsumableTypePoison", drug: "FFD20.ConsumableTypeDrug", alchContact: "FFD20.ConsumableTypeAlchContact", alchIngested: "FFD20.ConsumableTypeAlchIngested", alchInhaled: "FFD20.ConsumableTypeAlchInhaled", scroll: "FFD20.ConsumableTypeScroll", wand: "FFD20.ConsumableTypeWand", staff: "FFD20.ConsumableTypeStaff", misc: "FFD20.Misc" }, attackTypes: { weapon: "FFD20.AttackTypeWeapon", natural: "FFD20.AttackTypeNatural", ability: "FFD20.AttackTypeAbility", racialAbility: "FFD20.AttackTypeRacial", item: "FFD20.Item", misc: "FFD20.Misc" }, featTypes: { feat: "FFD20.FeatTypeFeat", classFeat: "FFD20.FeatTypeClassFeat", trait: "FFD20.FeatTypeTraits", racial: "FFD20.FeatTypeRacial", misc: "FFD20.Misc", template: "FFD20.FeatTypeTemplate" }, featTypesPlurals: { feat: "FFD20.FeatPlural", classFeat: "FFD20.ClassFeaturePlural", trait: "FFD20.TraitPlural", racial: "FFD20.RacialTraitPlural", template: "FFD20.TemplatePlural" }, abilityTypes: { ex: { short: "FFD20.AbilityTypeShortExtraordinary", long: "FFD20.AbilityTypeExtraordinary" }, su: { short: "FFD20.AbilityTypeShortSupernatural", long: "FFD20.AbilityTypeSupernatural" }, sp: { short: "FFD20.AbilityTypeShortSpell-Like", long: "FFD20.AbilityTypeSpell-Like" } }, currencies: { pgil: "FFD20.CurrencyPGil", gil: "FFD20.CurrencyGil", sgil: "FFD20.CurrencySGil", cgil: "FFD20.CurrencyCGil" }, acTypes: { armor: "Armor", shield: "Shield", natural: "Natural Armor" }, armorTypes: { none: 0, light: 1, medium: 2, heavy: 3 }, shieldTypes: { none: 0, other: 1, light: 2, heavy: 3, tower: 4 }, bonusModifiers: { untyped: "FFD20.BonusModifierUntyped", untypedPerm: "FFD20.BonusModifierUntypedPerm", base: "FFD20.BonusModifierBase", enh: "FFD20.BonusModifierEnhancement", dodge: "FFD20.BonusModifierDodge", inherent: "FFD20.BonusModifierInherent", deflection: "FFD20.BonusModifierDeflection", morale: "FFD20.BonusModifierMorale", luck: "FFD20.BonusModifierLuck", sacred: "FFD20.BonusModifierSacred", insight: "FFD20.BonusModifierInsight", resist: "FFD20.BonusModifierResistance", profane: "FFD20.BonusModifierProfane", trait: "FFD20.BonusModifierTrait", racial: "FFD20.BonusModifierRacial", size: "FFD20.BonusModifierSize", competence: "FFD20.BonusModifierCompetence", circumstance: "FFD20.BonusModifierCircumstance", alchemical: "FFD20.BonusModifierAlchemical", penalty: "FFD20.BonusModifierPenalty" }, stackingBonusModifiers: ["untyped", "untypedPerm", "dodge", "racial", "penalty"], get damageTypes() {
  return ffd20.registry.damageTypes.reduce((e2, t2) => (e2[t2.id] = game.i18n.localize(t2.name), e2), {});
}, distanceUnits: { none: "FFD20.None", personal: "FFD20.DistPersonal", touch: "FFD20.DistTouch", melee: "FFD20.DistMelee", reach: "FFD20.DistReach", close: "FFD20.DistClose", medium: "FFD20.DistMedium", long: "FFD20.DistLong", ft: "FFD20.DistFt", mi: "FFD20.DistMi", spec: "FFD20.Special", seeText: "FFD20.SeeText", unlimited: "FFD20.Unlimited" }, measureUnits: { ft: "FFD20.DistFt", mi: "FFD20.DistMi", m: "FFD20.DistM", km: "FFD20.DistKM" }, measureUnitsShort: { ft: "FFD20.DistFtShort", mi: "FFD20.DistMiShort", m: "FFD20.DistMShort", km: "FFD20.DistKMShort" }, actorStatures: { tall: "FFD20.StatureTall", long: "FFD20.StatureLong" }, targetTypes: { none: "FFD20.None", self: "FFD20.TargetSelf", creature: "FFD20.TargetCreature", ally: "FFD20.TargetAlly", enemy: "FFD20.TargetEnemy", object: "FFD20.TargetObject", space: "FFD20.TargetSpace", radius: "FFD20.TargetRadius", sphere: "FFD20.TargetSphere", cylinder: "FFD20.TargetCylinder", cone: "FFD20.TargetCone", square: "FFD20.TargetSquare", cube: "FFD20.TargetCube", line: "FFD20.TargetLine", wall: "FFD20.TargetWall" }, timePeriods: { inst: "FFD20.TimeInst", turn: "FFD20.TimeTurn", round: "FFD20.TimeRound", minute: "FFD20.TimeMinute", hour: "FFD20.TimeHour", day: "FFD20.TimeDay", month: "FFD20.TimeMonth", year: "FFD20.TimeYear", perm: "FFD20.TimePerm", seeText: "FFD20.SeeText", spec: "FFD20.Special" }, timePeriodsShort: { turn: "FFD20.TimeTurnShort", round: "FFD20.TimeRoundShort", minute: "FFD20.TimeMinuteShort", hour: "FFD20.TimeHourShort" }, casterProgression: { castsPerDay: { prepared: { low: [[Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY, 0], [Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 1, 0], [Number.POSITIVE_INFINITY, 1, 1], [Number.POSITIVE_INFINITY, 2, 1], [Number.POSITIVE_INFINITY, 2, 1, 0], [Number.POSITIVE_INFINITY, 2, 1, 1], [Number.POSITIVE_INFINITY, 2, 2, 1], [Number.POSITIVE_INFINITY, 3, 2, 1, 0], [Number.POSITIVE_INFINITY, 3, 2, 1, 1], [Number.POSITIVE_INFINITY, 3, 2, 2, 1], [Number.POSITIVE_INFINITY, 3, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 3, 2, 2], [Number.POSITIVE_INFINITY, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 3, 3]], med: [[Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 2], [Number.POSITIVE_INFINITY, 3], [Number.POSITIVE_INFINITY, 3, 1], [Number.POSITIVE_INFINITY, 4, 2], [Number.POSITIVE_INFINITY, 4, 3], [Number.POSITIVE_INFINITY, 4, 3, 1], [Number.POSITIVE_INFINITY, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 5, 4], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 5, 5]], high: [[Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 2], [Number.POSITIVE_INFINITY, 2, 1], [Number.POSITIVE_INFINITY, 3, 2], [Number.POSITIVE_INFINITY, 3, 2, 1], [Number.POSITIVE_INFINITY, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 4, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 3, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 4, 4]] }, spontaneous: { low: [[Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY], [Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 1, 1], [Number.POSITIVE_INFINITY, 1, 1], [Number.POSITIVE_INFINITY, 2, 1], [Number.POSITIVE_INFINITY, 2, 1, 1], [Number.POSITIVE_INFINITY, 2, 1, 1], [Number.POSITIVE_INFINITY, 2, 2, 1], [Number.POSITIVE_INFINITY, 3, 2, 1, 1], [Number.POSITIVE_INFINITY, 3, 2, 1, 1], [Number.POSITIVE_INFINITY, 3, 2, 2, 1], [Number.POSITIVE_INFINITY, 3, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 3, 2, 1], [Number.POSITIVE_INFINITY, 4, 3, 2, 2], [Number.POSITIVE_INFINITY, 4, 3, 3, 2], [Number.POSITIVE_INFINITY, 4, 4, 3, 2]], med: [[Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 2], [Number.POSITIVE_INFINITY, 3], [Number.POSITIVE_INFINITY, 3, 1], [Number.POSITIVE_INFINITY, 4, 2], [Number.POSITIVE_INFINITY, 4, 3], [Number.POSITIVE_INFINITY, 4, 3, 1], [Number.POSITIVE_INFINITY, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 5, 5, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 5, 4], [Number.POSITIVE_INFINITY, 5, 5, 5, 5, 5, 5]], high: [[Number.POSITIVE_INFINITY, 3], [Number.POSITIVE_INFINITY, 4], [Number.POSITIVE_INFINITY, 5], [Number.POSITIVE_INFINITY, 6, 3], [Number.POSITIVE_INFINITY, 6, 4], [Number.POSITIVE_INFINITY, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 6, 5, 3], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 6, 6, 4], [Number.POSITIVE_INFINITY, 6, 6, 6, 6, 6, 6, 6, 6, 6]] }, hybrid: { high: [[Number.POSITIVE_INFINITY, 2], [Number.POSITIVE_INFINITY, 3], [Number.POSITIVE_INFINITY, 4], [Number.POSITIVE_INFINITY, 4, 2], [Number.POSITIVE_INFINITY, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 4, 2], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 4, 3], [Number.POSITIVE_INFINITY, 4, 4, 4, 4, 4, 4, 4, 4, 4]] }, prestige: { low: [[Number.POSITIVE_INFINITY, 1], [Number.POSITIVE_INFINITY, 2], [Number.POSITIVE_INFINITY, 3], [Number.POSITIVE_INFINITY, 3, 1], [Number.POSITIVE_INFINITY, 4, 2], [Number.POSITIVE_INFINITY, 4, 3], [Number.POSITIVE_INFINITY, 4, 3, 1], [Number.POSITIVE_INFINITY, 4, 4, 2], [Number.POSITIVE_INFINITY, 5, 4, 3], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1], [Number.POSITIVE_INFINITY, 5, 4, 3, 1]] } }, spellsPreparedPerDay: { prepared: { low: [[null], [null], [null], [null, 0], [null, 1], [null, 1], [null, 1, 0], [null, 1, 1], [null, 2, 1], [null, 2, 1, 0], [null, 2, 1, 1], [null, 2, 2, 1], [null, 3, 2, 1, 0], [null, 3, 2, 1, 1], [null, 3, 2, 2, 1], [null, 3, 3, 2, 1], [null, 4, 3, 2, 1], [null, 4, 3, 2, 2], [null, 4, 3, 3, 2], [null, 4, 4, 3, 3]], med: [[3, 1], [4, 2], [4, 3], [4, 3, 1], [4, 4, 2], [5, 4, 3], [5, 4, 3, 1], [5, 4, 4, 2], [5, 5, 4, 3], [5, 5, 4, 3, 1], [5, 5, 4, 4, 2], [5, 5, 5, 4, 3], [5, 5, 5, 4, 3, 1], [5, 5, 5, 4, 4, 2], [5, 5, 5, 5, 4, 3], [5, 5, 5, 5, 4, 3, 1], [5, 5, 5, 5, 4, 4, 2], [5, 5, 5, 5, 5, 4, 3], [5, 5, 5, 5, 5, 5, 4], [5, 5, 5, 5, 5, 5, 5]], high: [[3, 1], [4, 2], [4, 2, 1], [4, 3, 2], [4, 3, 2, 1], [4, 3, 3, 2], [4, 4, 3, 2, 1], [4, 4, 3, 3, 2], [4, 4, 4, 3, 2, 1], [4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 3, 2, 1], [4, 4, 4, 4, 4, 4, 4, 3, 3, 2], [4, 4, 4, 4, 4, 4, 4, 4, 3, 3], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]] }, spontaneous: { low: [[2], [3], [4], [4, 2], [5, 3], [5, 4], [6, 4, 2], [6, 4, 3], [6, 5, 4], [6, 5, 4, 2], [6, 5, 4, 3], [6, 6, 5, 4], [6, 6, 5, 4, 2], [6, 6, 5, 4, 3], [6, 6, 6, 5, 4], [6, 6, 6, 5, 4], [6, 6, 6, 5, 4], [6, 6, 6, 6, 5], [6, 6, 6, 6, 5], [6, 6, 6, 6, 5]], med: [[4, 2], [5, 3], [6, 4], [6, 4, 2], [6, 4, 3], [6, 4, 4], [6, 5, 4, 2], [6, 5, 4, 3], [6, 5, 4, 4], [6, 5, 5, 4, 2], [6, 6, 5, 4, 3], [6, 6, 5, 4, 4], [6, 6, 5, 5, 4, 2], [6, 6, 6, 5, 4, 3], [6, 6, 6, 5, 4, 4], [6, 6, 6, 5, 5, 4, 2], [6, 6, 6, 6, 5, 4, 3], [6, 6, 6, 6, 5, 4, 4], [6, 6, 6, 6, 5, 5, 4], [6, 6, 6, 6, 6, 5, 5]], high: [[4, 2], [5, 2], [5, 3], [6, 3, 1], [6, 4, 2], [7, 4, 2, 1], [7, 5, 3, 2], [8, 5, 3, 2, 1], [8, 5, 4, 3, 2], [9, 5, 4, 3, 2, 1], [9, 5, 5, 4, 3, 2], [9, 5, 5, 4, 3, 2, 1], [9, 5, 5, 4, 4, 3, 2], [9, 5, 5, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 2], [9, 5, 5, 4, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 3, 3]] }, hybrid: { high: [[4, 2], [5, 2], [5, 3], [6, 3, 1], [6, 4, 2], [7, 4, 2, 1], [7, 5, 3, 2], [8, 5, 3, 2, 1], [8, 5, 4, 3, 2], [9, 5, 4, 3, 2, 1], [9, 5, 5, 4, 3, 2], [9, 5, 5, 4, 3, 2, 1], [9, 5, 5, 4, 4, 3, 2], [9, 5, 5, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 2], [9, 5, 5, 4, 4, 4, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 2, 1], [9, 5, 5, 4, 4, 4, 3, 3, 3, 2], [9, 5, 5, 4, 4, 4, 3, 3, 3, 3]] }, prestige: { low: [[null, 2], [null, 3], [null, 4], [null, 4, 2], [null, 4, 3], [null, 4, 4], [null, 5, 4, 2], [null, 5, 4, 3], [null, 5, 4, 4], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2], [null, 5, 5, 4, 2]] } } }, healingTypes: { healing: "FFD20.Healing", temphp: "FFD20.HealingTemp" }, senses: { bs: "FFD20.SenseBS", bse: "FFD20.SenseBSense", dv: "FFD20.SenseDV", ts: "FFD20.SenseTS", tr: "FFD20.SenseTR", ll: "FFD20.SenseLL", si: "FFD20.SenseSI", sid: "FFD20.SenseSID", sc: "FFD20.SenseSC" }, skills: { acr: "FFD20.SkillAcr", apr: "FFD20.SkillApr", blf: "FFD20.SkillBlf", clm: "FFD20.SkillClm", crf: "FFD20.SkillCrf", dip: "FFD20.SkillDip", dev: "FFD20.SkillDev", dis: "FFD20.SkillDis", dri: "FFD20.SkillDri", esc: "FFD20.SkillEsc", fly: "FFD20.SkillFly", han: "FFD20.SkillHan", hea: "FFD20.SkillHea", int: "FFD20.SkillInt", kar: "FFD20.SkillKAr", kdu: "FFD20.SkillKDu", ken: "FFD20.SkillKEn", kge: "FFD20.SkillKGe", khi: "FFD20.SkillKHi", klo: "FFD20.SkillKLo", kna: "FFD20.SkillKNa", kno: "FFD20.SkillKNo", kpl: "FFD20.SkillKPl", kre: "FFD20.SkillKRe", kte: "FFD20.SkillKTe", lin: "FFD20.SkillLin", nav: "FFD20.SkillNav", per: "FFD20.SkillPer", prf: "FFD20.SkillPrf", pil: "FFD20.SkillPil", pro: "FFD20.SkillPro", rep: "FFD20.SkillRep", rid: "FFD20.SkillRid", sen: "FFD20.SkillSen", slt: "FFD20.SkillSlt", spl: "FFD20.SkillSpl", ste: "FFD20.SkillSte", sur: "FFD20.SkillSur", swm: "FFD20.SkillSwm", umd: "FFD20.SkillUMD" }, skillCompendiumEntries: { acr: "Compendium.ffd20.ffd20e-rules.HPsdXjjRtKNGFGRc", apr: "Compendium.ffd20.ffd20e-rules.W5GT9F3euC4aG9zP", blf: "Compendium.ffd20.ffd20e-rules.pAB2PYkZO3lsmeaC", clm: "Compendium.ffd20.ffd20e-rules.xvua9V5Zggkc77Gt", crf: "Compendium.ffd20.ffd20e-rules.L6LEhHRrn53cMuhE", dip: "Compendium.ffd20.ffd20e-rules.OtfbHJhIQsNzmiTN", dev: "Compendium.ffd20.ffd20e-rules.CCy1fajKKU3K02iQ", dis: "Compendium.ffd20.ffd20e-rules.lP3L1RXi9q4ha9Gu", dri: "Compendium.ffd20.ffd20e-rules.EiaJIZVdGDvLxVll", esc: "Compendium.ffd20.ffd20e-rules.AOQsMtvLY4V3wFEL", fly: "Compendium.ffd20.ffd20e-rules.rR877UB1xVd3Z7z1", han: "Compendium.ffd20.ffd20e-rules.fXauAodbOBHBi7Mj", hea: "Compendium.ffd20.ffd20e-rules.RtBGttkocvTbySjd", int: "Compendium.ffd20.ffd20e-rules.ImjhcPmm02QSCbPg", kar: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kdu: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", ken: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kge: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", khi: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", klo: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kna: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kno: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kpl: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kre: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", kte: "Compendium.ffd20.ffd20e-rules.ki0QvL0K7u4YuK0O", lin: "Compendium.ffd20.ffd20e-rules.QXIYXqy6ivNHrDrW", nav: "Compendium.ffd20.ffd20e-rules.qtwTUimJjHnSjLkp", per: "Compendium.ffd20.ffd20e-rules.YYmmxDgp0g3ltSUG", prf: "Compendium.ffd20.ffd20e-rules.HhV5UmaRLTjtB3Xh", pil: "Compendium.ffd20.ffd20e-rules.rVqzliJeSlYj7ewt", pro: "Compendium.ffd20.ffd20e-rules.O7Utk8xKbHYDP7Ot", rep: "Compendium.ffd20.ffd20e-rules.DWB0xZqtaxOwfd2S", rid: "Compendium.ffd20.ffd20e-rules.mKO8Q4uMiqpMySOZ", sen: "Compendium.ffd20.ffd20e-rules.R8HGxGCKayOl15AO", slt: "Compendium.ffd20.ffd20e-rules.zK0CbvpYLZhTN5Wn", spl: "Compendium.ffd20.ffd20e-rules.uLZI2uWz0uB8UgBc", ste: "Compendium.ffd20.ffd20e-rules.T6nefKotIb5vKE9h", sur: "Compendium.ffd20.ffd20e-rules.TXrxgrB2sQjppZFY", swm: "Compendium.ffd20.ffd20e-rules.weCPHUuXi9sF5r4E", umd: "Compendium.ffd20.ffd20e-rules.WR5lekzyLT6T2CFH" }, arbitrarySkills: ["crf", "prf", "pro"], backgroundSkills: ["apr", "crf", "han", "ken", "kge", "khi", "kno", "lin", "prf", "pro", "slt"], backgroundOnlySkills: ["lor", "art"], spellPreparationModes: { atwill: "FFD20.SpellPrepAtWill", prepared: "FFD20.SpellPrepPrepared", spontaneous: "FFD20.SpellPrepSpontaneous" }, classCasterType: { astrologian: "high", blackmage: "high", bluemage: "high", geomancer: "high", illusionist: "high", necromancer: "high", summoner: "high", timemage: "high", whitemage: "high", bard: "med", cleric: "med", redmage: "med", scholar: "med", darkpaladin: "low", holyknight: "low" }, magicAuraByLevel: { spell: [{ power: "faint", level: 1 }, { power: "moderate", level: 4 }, { power: "strong", level: 7 }, { power: "overwhelming", level: 10 }], item: [{ power: "faint", level: 1 }, { power: "moderate", level: 6 }, { power: "strong", level: 12 }, { power: "overwhelming", level: 21 }] }, auraStrengths: { 1: "FFD20.AuraStrength_Faint", 2: "FFD20.AuraStrength_Moderate", 3: "FFD20.AuraStrength_Strong", 4: "FFD20.AuraStrength_Overwhelming" }, weaponTypes: { simple: { _label: "FFD20.WeaponTypeSimple", light: "FFD20.WeaponPropLight", "1h": "FFD20.WeaponPropOneHanded", "2h": "FFD20.WeaponPropTwoHanded", ranged: "FFD20.WeaponSubtypeRanged" }, martial: { _label: "FFD20.WeaponTypeMartial", light: "FFD20.WeaponPropLight", "1h": "FFD20.WeaponPropOneHanded", "2h": "FFD20.WeaponPropTwoHanded", ranged: "FFD20.WeaponSubtypeRanged" }, exotic: { _label: "FFD20.WeaponTypeExotic", light: "FFD20.WeaponPropLight", "1h": "FFD20.WeaponPropOneHanded", "2h": "FFD20.WeaponPropTwoHanded", ranged: "FFD20.WeaponSubtypeRanged" }, chef: { _label: "FFD20.WeaponTypeChef", light: "FFD20.WeaponPropLight", "1h": "FFD20.WeaponPropOneHanded", "2h": "FFD20.WeaponPropTwoHanded", ranged: "FFD20.WeaponSubtypeRanged" }, power: { _label: "FFD20.WeaponTypePower", light: "FFD20.WeaponPropLight", "1h": "FFD20.WeaponPropOneHanded", "2h": "FFD20.WeaponPropTwoHanded", ranged: "FFD20.WeaponSubtypeRanged" }, misc: { _label: "FFD20.Misc", splash: "FFD20.WeaponTypeSplash", other: "FFD20.Other" } }, weaponHoldTypes: { normal: "FFD20.WeaponHoldTypeNormal", "2h": "FFD20.WeaponHoldTypeTwoHanded", oh: "FFD20.WeaponHoldTypeOffhand" }, weaponGroups: { axes: "FFD20.WeaponGroupAxes", bladesHeavy: "FFD20.WeaponGroupBladesHeavy", bladesLight: "FFD20.WeaponGroupBladesLight", bows: "FFD20.WeaponGroupBows", close: "FFD20.WeaponGroupClose", crossbows: "FFD20.WeaponGroupCrossbows", double: "FFD20.WeaponGroupDouble", firearms: "FFD20.WeaponGroupFirearms", flails: "FFD20.WeaponGroupFlails", hammers: "FFD20.WeaponGroupHammers", monk: "FFD20.WeaponGroupMonk", natural: "FFD20.WeaponGroupNatural", polearms: "FFD20.WeaponGroupPolearms", siegeEngines: "FFD20.WeaponGroupSiegeEngines", spears: "FFD20.WeaponGroupSpears", thrown: "FFD20.WeaponGroupThrown", tribal: "FFD20.WeaponGroupTribal" }, weaponProperties: { blc: "FFD20.WeaponPropBlocking", brc: "FFD20.WeaponPropBrace", dea: "FFD20.WeaponPropDeadly", dst: "FFD20.WeaponPropDistracting", dbl: "FFD20.WeaponPropDouble", dis: "FFD20.WeaponPropDisarm", fin: "FFD20.WeaponPropFinesse", frg: "FFD20.WeaponPropFragile", grp: "FFD20.WeaponPropGrapple", imp: "FFD20.WeaponPropImprovised", mnk: "FFD20.WeaponPropMonk", nnl: "FFD20.WeaponPropNonLethal", prf: "FFD20.WeaponPropPerformance", rch: "FFD20.WeaponPropReach", snd: "FFD20.WeaponPropSunder", thr: "FFD20.WeaponPropThrown", trp: "FFD20.WeaponPropTrip" }, spellComponents: { V: "FFD20.SpellComponentVerbal", S: "FFD20.SpellComponentSomatic", T: "FFD20.SpellComponentThought", E: "FFD20.SpellComponentEmotion", M: "FFD20.SpellComponentMaterial", F: "FFD20.SpellComponentFocus", DF: "FFD20.SpellComponentDivineFocus" }, spellSchools: { crn: "FFD20.SpellSchoolChronomancy", drk: "FFD20.SpellSchoolDark", div: "FFD20.SpellSchoolDivination", ele: "FFD20.SpellSchoolElemental", enc: "FFD20.SpellSchoolEnhancing", enf: "FFD20.SpellSchoolEnfeebling", heal: "FFD20.SpellSchoolHealing", ill: "FFD20.SpellSchoolIllusion", lit: "FFD20.SpellSchoolLight", multi: "FFD20.multiSchool", misc: "FFD20.SpellSchoolMisc", nec: "FFD20.SpellSchoolNecromancy", nel: "FFD20.SpellSchoolNonElemental", sum: "FFD20.SpellSchoolSummoning", uni: "FFD20.SpellSchoolUniversal" }, multiSchools: { blank: "", sumhealenc: "FFD20.SpellSchoolSummoningHealingEnhancing", sumheal: "FFD20.SpellSchoolSummoningHealing", sumenfdrk: "FFD20.SpellSchoolSummoningEnfeeblingDark", sumenflit: "FFD20.SpellSchoolSummoningEnfeeblingLight", sumenfele: "FFD20.SpellSchoolSummoningEnfeeblingElemental", sumenf: "FFD20.SpellSchoolSummoningEnfeebling", sumenc: "FFD20.SpellSchoolSummoningEnhancing", sumdrk: "FFD20.SpellSchoolSummoningDark", sumlit: "FFD20.SpellSchoolSummoningLight", sumele: "FFD20.SpellSchoolSummoningElemental", sumnel: "FFD20.SpellSchoolSummoningNonElemental", crnheal: "FFD20.SpellSchoolChronomancyHealing", crnnec: "FFD20.SpellSchoolChronomancyNecromancy", crnenf: "FFD20.SpellSchoolChronomancyEnfeebling", crnenc: "FFD20.SpellSchoolChronomancyEnhancing", healenf: "FFD20.SpellSchoolHealingEnfeebling", healenc: "FFD20.SpellSchoolHealingEnhancing", illenf: "FFD20.SpellSchoolIllusionEnfeebling", illenc: "FFD20.SpellSchoolIllusionEnhancing", necenc: "FFD20.SpellSchoolNecromancyEnhancing", necenf: "FFD20.SpellSchoolNecromancyEnfeebling", necele: "FFD20.SpellSchoolNecromancyElemental", necnel: "FFD20.SpellSchoolNecromancyNonElemental", enfenc: "FFD20.SpellSchoolEnfeeblingEnhancing", enfdrkele: "FFD20.SpellSchoolEnfeeblingDarkElemental", enfdrknel: "FFD20.SpellSchoolEnfeeblingDarkNonElemental", enfdrk: "FFD20.SpellSchoolEnfeeblingDark", enflit: "FFD20.SpellSchoolEnfeeblingLight", enfele: "FFD20.SpellSchoolEnfeeblingElemental", enfnel: "FFD20.SpellSchoolEnfeeblingNonElemental", encdrk: "FFD20.SpellSchoolEnhancingDark", enclit: "FFD20.SpellSchoolEnhancingLight", encele: "FFD20.SpellSchoolEnhancingElemental", encnel: "FFD20.SpellSchoolEnhancingNonElemental", drkele: "FFD20.SpellSchoolDarkElemental", drknel: "FFD20.SpellSchoolDarkNonElemental", litele: "FFD20.SpellSchoolLightElemental", litnel: "FFD20.SpellSchoolLightNonElemental" }, spellLevels: { 0: "FFD20.SpellLevel0", 1: "FFD20.SpellLevel1", 2: "FFD20.SpellLevel2", 3: "FFD20.SpellLevel3", 4: "FFD20.SpellLevel4", 5: "FFD20.SpellLevel5", 6: "FFD20.SpellLevel6", 7: "FFD20.SpellLevel7", 8: "FFD20.SpellLevel8", 9: "FFD20.SpellLevel9" }, proficiencyLevels: { "-4": "Not Proficient", 0: "Proficient" }, conditionTypes: { antagonized: "FFD20.CondTypeAntagonized", berserk: "FFD20.CondTypeBerserk", bleed: "FFD20.CondTypeBleed", blinded: "FFD20.CondTypeBlinded", burning: "FFD20.CondTypeBurning", charmed: "FFD20.CondTypeCharmed", confused: "FFD20.CondTypeConfused", cowering: "FFD20.CondTypeCowering", cursed: "FFD20.CondTypeCursed", dazed: "FFD20.CondTypeDazed", dazzled: "FFD20.CondTypeDazzled", deafened: "FFD20.CondTypeDeafened", deprotect: "FFD20.CondTypeDeprotect", deshell: "FFD20.CondTypeDeshell", dimmed: "FFD20.CondTypeDimmed", disabled: "FFD20.CondTypeDisabled", diseased: "FFD20.CondTypeDiseased", doom: "FFD20.CondTypeDoom", drenched: "FFD20.CondTypeDrenched", energyDrained: "FFD20.CondTypeEnergyDrained", entangled: "FFD20.CondTypeEntangled", exhausted: "FFD20.CondTypeExhausted", fascinated: "FFD20.CondTypeFascinated", fatigued: "FFD20.CondTypeFatigued", frightened: "FFD20.CondTypeFrightened", frog: "FFD20.CondTypeFrog", frozen: "FFD20.CondTypeFrozen", immobilized: "FFD20.CondTypeImmobilized", imperil: "FFD20.CondTypeImperil", invisible: "FFD20.CondTypeInvisible", mini: "FFD20.CondTypeMini", nauseated: "FFD20.CondTypeNauseated", panicked: "FFD20.CondTypePanicked", paralyzed: "FFD20.CondTypeParalyzed", petrified: "FFD20.CondTypePetrified", poisoned: "FFD20.CondTypePoisoned", prone: "FFD20.CondTypeProne", sapped: "FFD20.CondTypeSapped", shaken: "FFD20.CondTypeShaken", sickened: "FFD20.CondTypeSickened", silenced: "FFD20.CondTypeSilenced", sleep: "FFD20.CondTypeSleep", slow: "FFD20.CondTypeSlow", squalled: "FFD20.CondTypeSqualled", staggered: "FFD20.CondTypeStaggered", static: "FFD20.CondTypeStatic", stop: "FFD20.CondTypeStop", stunned: "FFD20.CondTypeStunned", weighted: "FFD20.CondTypeWeighted", unlucky: "FFD20.CondTypeUnlucky", zombie: "FFD20.CondTypeZombie" }, conditions: { antagonized: "FFD20.CondAntagonized", berserk: "FFD20.CondBerserk", bleed: "FFD20.CondBleed", ffd20_blind: "FFD20.CondBlinded", burning: "FFD20.CondBurning", charmed: "FFD20.CondCharmed", confused: "FFD20.CondConfused", cowering: "FFD20.CondCowering", cursed: "FFD20.CondCursed", dazed: "FFD20.CondDazed", dazzled: "FFD20.CondDazzled", ffd20_deaf: "FFD20.CondDeafened", deprotect: "FFD20.CondDeprotect", deshell: "FFD20.CondDeshell", dimmed: "FFD20.CondDimmed", disabled: "FFD20.CondDisabled", diseased: "FFD20.CondDiseased", doom: "FFD20.CondDoom", drenched: "FFD20.CondDrenched", energyDrained: "FFD20.CondEnergyDrained", entangled: "FFD20.CondEntangled", exhausted: "FFD20.CondExhausted", fascinated: "FFD20.CondFascinated", fatigued: "FFD20.CondFatigued", frightened: "FFD20.CondFrightened", frog: "FFD20.CondFrog", frozen: "FFD20.CondFrozen", grappled: "FFD20.CondGrappled", helpless: "FFD20.CondHelpless", immobilized: "FFD20.CondImmobilized", imperil: "FFD20.CondImperil", incorporeal: "FFD20.CondIncorporeal", invisible: "FFD20.CondInvisible", mini: "FFD20.CondMini", nauseated: "FFD20.CondNauseated", panicked: "FFD20.CondPanicked", paralyzed: "FFD20.CondParalyzed", petrified: "FFD20.CondPetrified", pinned: "FFD20.CondPinned", poisoned: "FFD20.CondPoisoned", ffd20_prone: "FFD20.CondProne", sapped: "FFD20.CondSapped", shaken: "FFD20.CondShaken", sickened: "FFD20.CondSickened", silenced: "FFD20.CondSilenced", ffd20_sleep: "FFD20.CondSleep", slow: "FFD20.CondSlow", squalled: "FFD20.CondSqualled", staggered: "FFD20.CondStaggered", static: "FFD20.CondStatic", stop: "FFD20.CondStop", stunned: "FFD20.CondStunned", unlucky: "FFD20.CondUnlucky", weighted: "FFD20.CondWeighted", zombie: "FFD20.CondZombie" }, conditionMechanics: { ffd20_blind: { changes: [{ formula: -2, subTarget: "ac", modifier: "penalty" }], flags: ["loseDexToAC"] }, dazzled: { changes: [{ formula: -1, subTarget: "attack", modifier: "penalty" }] }, ffd20_deaf: { changes: [{ formula: -4, subTarget: "init", modifier: "penalty" }] }, entangled: { changes: [{ formula: -4, subTarget: "dex", modifier: "penalty" }, { formula: -2, subTarget: "attack", modifier: "penalty" }] }, grappled: { changes: [{ formula: -4, subTarget: "dex", modifier: "penalty" }, { formula: -2, subTarget: "attack", modifier: "penalty" }] }, helpless: { changes: [{ formula: 0, subTarget: "dex", modifier: "untypedPerm", operator: "set", priority: 1001, continuous: true }] }, ffd20_sleep: { changes: [{ formula: 0, subTarget: "dex", modifier: "untypedPerm", operator: "set", priority: 1001, continuous: true }] }, paralyzed: { changes: [{ formula: 0, subTarget: "dex", modifier: "untypedPerm", operator: "set", priority: 1001, continuous: true }, { formula: 0, subTarget: "str", modifier: "untypedPerm", operator: "set", priority: 1001, continuous: true }] }, ffd20_prone: { changes: [{ formula: -4, subTarget: "mattack", modifier: "penalty" }] }, pinned: { changes: [{ formula: "min(0, @abilities.dex.mod)", subTarget: "dexMod", modifier: "untyped", operator: "set", priority: 1001, continuous: true }, { formula: -4, subTarget: "ac", modifier: "penalty" }, { formula: -4, subTarget: "cmd", modifier: "penalty" }], flags: ["loseDexToAC"] }, cowering: { changes: [{ formula: -2, subTarget: "ac", modifier: "penalty" }] }, shaken: { changes: [{ formula: -2, subTarget: "attack", modifier: "penalty" }, { formula: -2, subTarget: "allSavingThrows", modifier: "penalty" }, { formula: -2, subTarget: "skills", modifier: "penalty" }, { formula: -2, subTarget: "allChecks", modifier: "penalty" }] }, frightened: { changes: [{ formula: -2, subTarget: "attack", modifier: "penalty" }, { formula: -2, subTarget: "allSavingThrows", modifier: "penalty" }, { formula: -2, subTarget: "skills", modifier: "penalty" }, { formula: -2, subTarget: "allChecks", modifier: "penalty" }] }, panicked: { changes: [{ formula: -2, subTarget: "attack", modifier: "penalty" }, { formula: -2, subTarget: "allSavingThrows", modifier: "penalty" }, { formula: -2, subTarget: "skills", modifier: "penalty" }, { formula: -2, subTarget: "allChecks", modifier: "penalty" }] }, sickened: { changes: [{ formula: -2, subTarget: "attack", modifier: "penalty" }, { formula: -2, subTarget: "wdamage", modifier: "penalty" }, { formula: -2, subTarget: "allSavingThrows", modifier: "penalty" }, { formula: -2, subTarget: "skills", modifier: "penalty" }, { formula: -2, subTarget: "allChecks", modifier: "penalty" }] }, nauseated: { changes: [{ formula: -2, subTarget: "attack", modifier: "penalty" }, { formula: -2, subTarget: "wdamage", modifier: "penalty" }, { formula: -2, subTarget: "allSavingThrows", modifier: "penalty" }, { formula: -2, subTarget: "skills", modifier: "penalty" }, { formula: -2, subTarget: "allChecks", modifier: "penalty" }] }, stunned: { changes: [{ formula: -2, subTarget: "ac", modifier: "penalty" }] }, exhausted: { changes: [{ formula: -6, subTarget: "str", modifier: "penalty" }, { formula: -6, subTarget: "dex", modifier: "penalty" }] }, fatigued: { changes: [{ formula: -2, subTarget: "str", modifier: "penalty" }, { formula: -2, subTarget: "dex", modifier: "penalty" }] }, squeezing: { changes: [{ formula: -4, subTarget: "ac", modifier: "penalty" }, { formula: -4, subTarget: "attack", modifier: "penalty" }] } }, conditionTextures: { antagonized: "systems/ffd20/icons/conditions/antagonized.png", berserk: "systems/ffd20/icons/conditions/berserk.png", bleed: "systems/ffd20/icons/conditions/bleed.png", ffd20_blind: "systems/ffd20/icons/conditions/blind.png", burning: "systems/ffd20/icons/conditions/burning.png", charmed: "systems/ffd20/icons/conditions/charmed.png", confused: "systems/ffd20/icons/conditions/confused.png", cowering: "systems/ffd20/icons/conditions/cowering.png", cursed: "systems/ffd20/icons/conditions/cursed.png", dazed: "systems/ffd20/icons/conditions/dazed.png", dazzled: "systems/ffd20/icons/conditions/dazzled.png", ffd20_deaf: "systems/ffd20/icons/conditions/deaf.png", deprotect: "systems/ffd20/icons/conditions/deprotect.png", deshell: "systems/ffd20/icons/conditions/deshell.png", dimmed: "systems/ffd20/icons/conditions/dimmed.png", disabled: "systems/ffd20/icons/conditions/disabled.png", diseased: "systems/ffd20/icons/conditions/diseased.png", doom: "systems/ffd20/icons/conditions/doom.png", drenched: "systems/ffd20/icons/conditions/drenched.png", energyDrained: "systems/ffd20/icons/conditions/energydrained.png", entangled: "systems/ffd20/icons/conditions/entangled.png", exhausted: "systems/ffd20/icons/conditions/exhausted.png", fascinated: "systems/ffd20/icons/conditions/fascinated.png", fatigued: "systems/ffd20/icons/conditions/fatigued.png", frightened: "systems/ffd20/icons/conditions/frightened.png", frog: "systems/ffd20/icons/conditions/frog.png", frozen: "systems/ffd20/icons/conditions/frozen.png", grappled: "systems/ffd20/icons/conditions/grappled.png", helpless: "systems/ffd20/icons/conditions/helpless.png", immobilized: "systems/ffd20/icons/conditions/immobilized.png", imperil: "systems/ffd20/icons/conditions/imperil.png", incorporeal: "systems/ffd20/icons/conditions/incorporeal.png", invisible: "systems/ffd20/icons/conditions/invisible.png", mini: "systems/ffd20/icons/conditions/mini.png", nauseated: "systems/ffd20/icons/conditions/nauseated.png", panicked: "systems/ffd20/icons/conditions/fear.png", paralyzed: "systems/ffd20/icons/conditions/paralyzed.png", petrified: "systems/ffd20/icons/conditions/petrified.png", pinned: "systems/ffd20/icons/conditions/pinned.png", poisoned: "systems/ffd20/icons/conditions/poisoned.png", ffd20_prone: "systems/ffd20/icons/conditions/prone.png", sapped: "systems/ffd20/icons/conditions/sapped.png", shaken: "systems/ffd20/icons/conditions/shaken.png", sickened: "systems/ffd20/icons/conditions/sickened.png", silenced: "systems/ffd20/icons/conditions/silenced.png", ffd20_sleep: "systems/ffd20/icons/conditions/sleep.png", slow: "systems/ffd20/icons/conditions/slow.png", squalled: "systems/ffd20/icons/conditions/squalled.png", staggered: "systems/ffd20/icons/conditions/staggered.png", static: "systems/ffd20/icons/conditions/static.png", stop: "systems/ffd20/icons/conditions/stop.png", stunned: "systems/ffd20/icons/conditions/stunned.png", unlucky: "systems/ffd20/icons/conditions/unlucky.png", weighted: "systems/ffd20/icons/conditions/weighted.png", zombie: "systems/ffd20/icons/conditions/zombie.png" }, buffTypes: { temp: "FFD20.Temporary", perm: "FFD20.Permanent", item: "FFD20.Item", misc: "FFD20.Misc" }, conditionalTargets: { attack: { _label: "FFD20.AttackRollPlural", allAttack: "FFD20.All", hasteAttack: "FFD20.Haste", rapidShotAttack: "FFD20.RapidShot" }, damage: { _label: "FFD20.Damage", allDamage: "FFD20.All", hasteDamage: "FFD20.Haste", rapidShotDamage: "FFD20.RapidShot" }, size: { _label: "FFD20.Size" }, effect: { _label: "FFD20.Effects" }, misc: { _label: "FFD20.MiscShort" } }, buffTargets: { acpA: { label: "FFD20.ACPArmor", category: "misc", sort: 1e4 }, acpS: { label: "FFD20.ACPShield", category: "misc", sort: 11e3 }, mDexA: { label: "FFD20.MaxDexArmor", category: "misc", sort: 2e4 }, mDexS: { label: "FFD20.MaxDexShield", category: "misc", sort: 21e3 }, str: { label: "FFD20.AbilityStr", category: "ability", sort: 3e4 }, dex: { label: "FFD20.AbilityDex", category: "ability", sort: 31e3 }, con: { label: "FFD20.AbilityCon", category: "ability", sort: 32e3 }, int: { label: "FFD20.AbilityInt", category: "ability", sort: 33e3 }, wis: { label: "FFD20.AbilityWis", category: "ability", sort: 34e3 }, cha: { label: "FFD20.AbilityCha", category: "ability", sort: 35e3 }, strMod: { label: "FFD20.AbilityStrMod", category: "ability", sort: 4e4 }, dexMod: { label: "FFD20.AbilityDexMod", category: "ability", sort: 41e3 }, conMod: { label: "FFD20.AbilityConMod", category: "ability", sort: 42e3 }, intMod: { label: "FFD20.AbilityIntMod", category: "ability", sort: 43e3 }, wisMod: { label: "FFD20.AbilityWisMod", category: "ability", sort: 44e3 }, chaMod: { label: "FFD20.AbilityChaMod", category: "ability", sort: 45e3 }, skills: { label: "FFD20.BuffTarAllSkills", category: "skills", sort: 5e4 }, carryStr: { label: "FFD20.CarryStrength", category: "misc", sort: 6e4 }, carryMult: { label: "FFD20.CarryMultiplier", category: "misc", sort: 61e3 }, strSkills: { label: "FFD20.BuffTarStrSkills", category: "skills", sort: 7e4 }, dexSkills: { label: "FFD20.BuffTarDexSkills", category: "skills", sort: 71e3 }, conSkills: { label: "FFD20.BuffTarConSkills", category: "skills", sort: 72e3 }, intSkills: { label: "FFD20.BuffTarIntSkills", category: "skills", sort: 73e3 }, wisSkills: { label: "FFD20.BuffTarWisSkills", category: "skills", sort: 74e3 }, chaSkills: { label: "FFD20.BuffTarChaSkills", category: "skills", sort: 75e3 }, allChecks: { label: "FFD20.BuffTarAllAbilityChecks", category: "abilityChecks", sort: 8e4 }, strChecks: { label: "FFD20.BuffTarStrChecks", category: "abilityChecks", sort: 81e3 }, dexChecks: { label: "FFD20.BuffTarDexChecks", category: "abilityChecks", sort: 82e3 }, conChecks: { label: "FFD20.BuffTarConChecks", category: "abilityChecks", sort: 83e3 }, intChecks: { label: "FFD20.BuffTarIntChecks", category: "abilityChecks", sort: 84e3 }, wisChecks: { label: "FFD20.BuffTarWisChecks", category: "abilityChecks", sort: 85e3 }, chaChecks: { label: "FFD20.BuffTarChaChecks", category: "abilityChecks", sort: 86e3 }, landSpeed: { label: "FFD20.SpeedLand", category: "speed", sort: 9e4 }, climbSpeed: { label: "FFD20.SpeedClimb", category: "speed", sort: 91e3 }, swimSpeed: { label: "FFD20.SpeedSwim", category: "speed", sort: 92e3 }, burrowSpeed: { label: "FFD20.SpeedBurrow", category: "speed", sort: 93e3 }, flySpeed: { label: "FFD20.SpeedFly", category: "speed", sort: 94e3 }, allSpeeds: { label: "FFD20.BuffTarAllSpeeds", category: "speed", sort: 95e3 }, ac: { label: "FFD20.BuffTarACGeneric", category: "defense", sort: 1e5 }, aac: { label: "FFD20.BuffTarACArmor", category: "defense", sort: 101e3 }, sac: { label: "FFD20.BuffTarACShield", category: "defense", sort: 102e3 }, nac: { label: "FFD20.BuffTarACNatural", category: "defense", sort: 103e3 }, tac: { label: "FFD20.BuffTarACTouch", category: "defense", sort: 104e3 }, ffac: { label: "FFD20.BuffTarACFlatFooted", category: "defense", sort: 105e3 }, attack: { label: "FFD20.BuffTarAllAttackRolls", category: "attack", sort: 11e4 }, bab: { label: "FFD20.BAB", category: "attack", sort: 111e3 }, "~attackCore": { label: "", category: "attack", sort: 112e3 }, mattack: { label: "FFD20.BuffTarMeleeAttack", category: "attack", sort: 113e3 }, rattack: { label: "FFD20.BuffTarRangedAttack", category: "attack", sort: 114e3 }, damage: { label: "FFD20.BuffTarAllDamageRolls", category: "damage", sort: 12e4 }, wdamage: { label: "FFD20.WeaponDamage", category: "damage", sort: 121e3 }, sdamage: { label: "FFD20.SpellDamage", category: "damage", sort: 122e3 }, critConfirm: { label: "FFD20.CriticalConfirmation", category: "attack", sort: 13e4 }, allSavingThrows: { label: "FFD20.BuffTarAllSavingThrows", category: "savingThrows", sort: 14e4 }, fort: { label: "FFD20.SavingThrowFort", category: "savingThrows", sort: 141e3 }, ref: { label: "FFD20.SavingThrowRef", category: "savingThrows", sort: 142e3 }, will: { label: "FFD20.SavingThrowWill", category: "savingThrows", sort: 143e3 }, cmb: { label: "FFD20.CMB", category: "attack", sort: 15e4 }, cmd: { label: "FFD20.CMD", category: "defense", sort: 151e3 }, ffcmd: { label: "FFD20.CMDFlatFooted", category: "defense", sort: 152e3 }, init: { label: "FFD20.Initiative", category: "misc", sort: 16e4 }, mhp: { label: "FFD20.HitPoints", category: "health", sort: 17e4 }, wounds: { label: "FFD20.Wounds", category: "health", sort: 18e4 }, vigor: { label: "FFD20.Vigor", category: "health", sort: 181e3 }, mmp: { label: "FFD20.ManaPoints", category: "health", sort: 171e3 }, spellResist: { label: "FFD20.SpellResistance", category: "defense", sort: 19e4 }, bonusFeats: { label: "FFD20.BuffTarBonusFeats", category: "misc", sort: 2e5 }, bonusSkillRanks: { label: "FFD20.BuffTarBonusSkillRanks", category: "skills", sort: 21e4 }, concentration: { label: "FFD20.ConcentrationBuff", category: "spell", sort: 22e4 }, cl: { label: "FFD20.CasterLevelBuff", category: "spell", sort: 23e4 } }, buffTargetCategories: { defense: { label: "FFD20.Defense" }, savingThrows: { label: "FFD20.SavingThrowPlural" }, attack: { label: "FFD20.Attack" }, damage: { label: "FFD20.Damage" }, ability: { label: "FFD20.AbilityScore" }, abilityChecks: { label: "FFD20.BuffTarAbilityChecks" }, health: { label: "FFD20.Health" }, skills: { label: "FFD20.Skills" }, skill: { label: "FFD20.BuffTarSpecificSkill" }, speed: { label: "FFD20.Speed" }, spell: { label: "FFD20.BuffTarSpells" }, misc: { label: "FFD20.Misc" } }, contextNoteTargets: { attack: { label: "FFD20.AttackRollPlural", category: "attacks" }, effect: { label: "FFD20.Effects", category: "attacks" }, melee: { label: "FFD20.Melee", category: "attacks" }, meleeWeapon: { label: "FFD20.MeleeWeapon", category: "attacks" }, meleeSpell: { label: "FFD20.MeleeSpell", category: "attacks" }, ranged: { label: "FFD20.Ranged", category: "attacks" }, rangedWeapon: { label: "FFD20.RangedWeapon", category: "attacks" }, rangedSpell: { label: "FFD20.RangedSpell", category: "attacks" }, cmb: { label: "FFD20.CMB", category: "attacks" }, allSavingThrows: { label: "FFD20.BuffTarAllSavingThrows", category: "savingThrows" }, fort: { label: "FFD20.SavingThrowFort", category: "savingThrows" }, ref: { label: "FFD20.SavingThrowRef", category: "savingThrows" }, will: { label: "FFD20.SavingThrowWill", category: "savingThrows" }, skills: { label: "FFD20.BuffTarAllSkills", category: "skills" }, strSkills: { label: "FFD20.BuffTarStrSkills", category: "skills" }, dexSkills: { label: "FFD20.BuffTarDexSkills", category: "skills" }, conSkills: { label: "FFD20.BuffTarConSkills", category: "skills" }, intSkills: { label: "FFD20.BuffTarIntSkills", category: "skills" }, wisSkills: { label: "FFD20.BuffTarWisSkills", category: "skills" }, chaSkills: { label: "FFD20.BuffTarChaSkills", category: "skills" }, allChecks: { label: "FFD20.BuffTarAllAbilityChecks", category: "abilityChecks" }, strChecks: { label: "FFD20.BuffTarStrChecks", category: "abilityChecks" }, dexChecks: { label: "FFD20.BuffTarDexChecks", category: "abilityChecks" }, conChecks: { label: "FFD20.BuffTarConChecks", category: "abilityChecks" }, intChecks: { label: "FFD20.BuffTarIntChecks", category: "abilityChecks" }, wisChecks: { label: "FFD20.BuffTarWisChecks", category: "abilityChecks" }, chaChecks: { label: "FFD20.BuffTarChaChecks", category: "abilityChecks" }, spellEffect: { label: "FFD20.SpellBuffEffect", category: "spell" }, concentration: { label: "FFD20.Concentration", category: "spell" }, cl: { label: "FFD20.CasterLevel", category: "spell" }, ac: { label: "FFD20.ACNormal", category: "defense" }, cmd: { label: "FFD20.CMD", category: "defense" }, sr: { label: "FFD20.SpellResistance", category: "defense" }, init: { label: "FFD20.Initiative", category: "misc" } }, contextNoteCategories: { attacks: { label: "FFD20.Attacks" }, savingThrows: { label: "FFD20.SavingThrowPlural" }, skills: { label: "FFD20.Skills" }, skill: { label: "FFD20.BuffTarSpecificSkill" }, abilityChecks: { label: "FFD20.BuffTarAbilityChecks" }, spell: { label: "FFD20.BuffTarSpells" }, defense: { label: "FFD20.Defense" }, misc: { label: "FFD20.Misc" } }, languages: { common: "FFD20.LanguageCommon", dwarven: "FFD20.LanguageDwarven", elvaan: "FFD20.LanguageElvaan", galkan: "FFD20.LanguageGalkan", lalafellan: "FFD20.LanguageLalafellan", mithran: "FFD20.LanguageMithran", moogle: "FFD20.LanguageMoogle", aegyllan: "FFD20.LanguageAegyllan", albhedian: "FFD20.LanguageAlbhedian", banganese: "FFD20.LanguageBanganese", burmecian: "FFD20.LanguageBurmecian", draconic: "FFD20.LanguageDraconic", garif: "FFD20.LanguageGarif", guado: "FFD20.LanguageGuado", hypello: "FFD20.LanguageHypello", lupin: "FFD20.LanguageLupin", mandragoran: "FFD20.LanguageMandragoran", numish: "FFD20.LanguageNumish", qiqirn: "FFD20.LanguageQiqirn", queran: "FFD20.LanguageQueran", roegadyn: "FFD20.LanguageRoegadyn", ronsaur: "FFD20.LanguageRonsaur", seeq: "FFD20.LanguageSeeq", tonberry: "FFD20.LanguageTonberry", vieran: "FFD20.LanguageVieran", celestial: "FFD20.LanguageCelestial", infernal: "FFD20.LanguageInfernal", abyssal: "FFD20.LanguageAbyssal", aquan: "FFD20.LanguageAquan", auran: "FFD20.LanguageAuran", auroran: "FFD20.LanguageAuroran", enochian: "FFD20.LanguageEnochian", ignan: "FFD20.LanguageIgnan", terran: "FFD20.LanguageTerran", thorian: "FFD20.LanguageThorian", umbran: "FFD20.LanguageUmbran", amaljaa: "FFD20.LanguageAmaljaa", antican: "FFD20.LanguageAntican", goblin: "FFD20.LanguageGoblin", kojin: "FFD20.LanguageKojin", orcish: "FFD20.LanguageOrcish", quadav: "FFD20.LanguageQuadav", sahagin: "FFD20.LanguageSahagin", sylvan: "FFD20.LanguageSylvan", undercommon: "FFD20.LanguageUndercommon", vanu: "FFD20.LanguageVanu", yagudo: "FFD20.LanguageYagudo" }, creatureTypes: { aberration: "FFD20.CreatureTypeAberration", animal: "FFD20.CreatureTypeAnimal", construct: "FFD20.CreatureTypeConstruct", dragon: "FFD20.CreatureTypeDragon", fey: "FFD20.CreatureTypeFey", humanoid: "FFD20.CreatureTypeHumanoid", magicalBeast: "FFD20.CreatureTypeMagicalBeast", monstrousHumanoid: "FFD20.CreatureTypeMonstrousHumanoid", ooze: "FFD20.CreatureTypeOoze", outsider: "FFD20.CreatureTypeOutsider", plant: "FFD20.CreatureTypePlant", undead: "FFD20.CreatureTypeUndead", vermin: "FFD20.CreatureTypeVermin" }, spellRangeFormulas: { close: "25 + floor(@cl / 2) * 5", medium: "100 + @cl * 10", long: "400 + @cl * 40" }, sizeDie: ["1", "1d2", "1d3", "1d4", "1d6", "1d8", "1d10", "2d6", "2d8", "3d6", "3d8", "4d6", "4d8", "6d6", "6d8", "8d6", "8d8", "12d6", "12d8", "16d6", "16d8"], CHARACTER_EXP_LEVELS: { slow: [0, 3e3, 7500, 14e3, 23e3, 35e3, 53e3, 77e3, 115e3, 16e4, 235e3, 33e4, 475e3, 665e3, 955e3, 135e4, 19e5, 27e5, 385e4, 535e4, 835e4, 1435e4, 2635e4, 5035e4, 9835e4, 19435e4, 38635e4, 77035e4, 153835e4, 307435e4], medium: [0, 2e3, 5e3, 9e3, 15e3, 23e3, 35e3, 51e3, 75e3, 105e3, 155e3, 22e4, 315e3, 445e3, 635e3, 89e4, 13e5, 18e5, 255e4, 36e5, 57e5, 99e5, 183e5, 351e5, 687e5, 1359e5, 2703e5, 5391e5, 10767e5, 21519e5], fast: [0, 1300, 3300, 6e3, 1e4, 15e3, 23e3, 34e3, 5e4, 71e3, 105e3, 145e3, 21e4, 295e3, 425e3, 6e5, 85e4, 12e5, 17e5, 24e5, 38e5, 66e5, 122e5, 234e5, 458e5, 906e5, 1802e5, 3594e5, 7178e5, 14346e5] }, CR_EXP_LEVELS: [200, 400, 600, 800, 1200, 1600, 2400, 3200, 4800, 6400, 9600, 12800, 19200, 25600, 38400, 51200, 76800, 102400, 153600, 204800, 307200, 409600, 614400, 819200, 1228800, 1638400, 2457600, 3276800, 4915200, 6553600, 9830400], temporaryRollDataFields: { actor: ["d20", "attackBonus", "damageBonus", "pointBlankBonus", "rapidShotPenalty", "powerAttackBonus", "powerAttackPenalty", "conditionals", "concentrationBonus", "formulaBonus", "dcBonus", "chargeCostBonus", "chargeCost", "sizeBonus", "bonus", "critMult", "ablMult", "ablDamage", "cl", "sl", "classLevel", "ablMod", "item", "action", "level", "mod"] }, keepItemLinksOnCopy: ["classAssociations"], classSubTypes: { none: "FFD20.None", core: "FFD20.ClassSubTypeCore", coreArc: "FFD20.ClassSubTypeCoreArc", base: "FFD20.ClassSubTypeBase", baseArc: "FFD20.ClassSubTypeBaseArc", hybrid: "FFD20.ClassSubTypeHybrid", hybridArc: "FFD20.ClassSubTypeHybridArc" }, countforexp: { exp: "FFD20.ClassExp", noExp: "FFD20.ClassNoExp" }, classCastingStats: { noncaster: "FFD20.NonCaster", int: "FFD20.AbilityShortInt", wis: "FFD20.AbilityShortWis", cha: "FFD20.AbilityShortCha", intAndWis: "FFD20.AbilityShortIntAndWis" }, classBaseMPTypes: { noncaster: "FFD20.NonCaster", halfCaster: "FFD20.HalfCaster", dimPacman: "FFD20.DimPacman", pacman: "FFD20.Pacman", dimFullCaster: "FFD20.DimFullCaster", fullCaster: "FFD20.FullCaster", advFullCaster: "FFD20.AdvFullCaster" }, ClassSpellLvlProgression: { noncaster: "0", halfCaster: "min(floor(max(@level - 3 ,0) / 3),4)", dimPacman: "min(floor((@level + 2) / 3),6)", pacman: "min(floor((@level + 2) / 3),6)", dimFullCaster: "min(floor((@level + 1) / 2),9)", fullCaster: "min(floor((@level + 1) / 2),9)", advFullCaster: "min(floor((@level + 1) / 2),9)" }, classMPlevels: { noncaster: [0], halfCaster: [0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 19, 22, 25, 29, 33], dimPacman: [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 21, 25, 29, 33, 38, 43, 48, 53, 58], pacman: [2, 3, 4, 5, 6, 8, 10, 13, 16, 20, 24, 29, 34, 39, 45, 51, 57, 64, 71, 79], dimFullCaster: [2, 3, 4, 5, 6, 8, 11, 15, 20, 24, 29, 35, 42, 49, 56, 65, 74, 83, 92, 101], fullCaster: [3, 4, 5, 6, 8, 11, 15, 20, 26, 32, 39, 47, 56, 65, 75, 86, 98, 110, 122, 135], advFullCaster: [4, 6, 8, 9, 14, 17, 25, 30, 41, 47, 60, 68, 84, 93, 111, 124, 143, 155, 167, 180] }, classMPStatsBonus: { 1: [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5], 2: [0, 1, 3, 3, 3, 4, 6, 6, 6, 7, 9, 9, 9, 10, 12, 12, 12, 13], 3: [0, 1, 3, 6, 6, 7, 9, 12, 12, 13, 15, 18, 18, 19, 21, 24, 24, 25], 4: [0, 1, 3, 6, 10, 11, 13, 16, 20, 21, 23, 26, 30, 31, 33, 36, 40, 41], 5: [0, 1, 3, 6, 10, 16, 18, 21, 25, 31, 33, 36, 40, 46, 48, 51, 55, 61], 6: [0, 1, 3, 6, 10, 16, 24, 27, 31, 37, 45, 48, 52, 58, 66, 69, 73, 79], 7: [0, 1, 3, 6, 10, 16, 24, 34, 38, 44, 52, 62, 66, 72, 80, 90, 94, 100], 8: [0, 1, 3, 6, 10, 16, 24, 34, 46, 52, 60, 70, 82, 88, 96, 106, 118, 124], 9: [0, 1, 3, 6, 10, 16, 24, 34, 46, 61, 69, 79, 91, 106, 114, 124, 136, 151] }, classBaseMPauto: { no: "FFD20.No", yes: "FFD20.Yes", half: "FFD20.Half" }, materiaRarity: { common: "FFD20.MateriaRarityCommon", uncommon: "FFD20.MateriaRarityUncommon", rare: "FFD20.MateriaRarityRare", legendary: "FFD20.MateriaRarityLegendary" }, materiaRarityMath: { common: 1, uncommon: 2, rare: 3, legendary: 4 }, materiaSlot: { unslotted: "FFD20.MateriaSlotUnslotted", weapon: "FFD20.MateriaSlotWeapon", shield: "FFD20.MateriaSlotShield", armor: "FFD20.MateriaSlotArmor", other: "FFD20.MateriaSlotOther" }, materiaAdvancement: { common: [0, 0, 5e3, 1e4, 2e4], uncommon: [0, 5e3, 1e4, 2e4, 4e4], rare: [0, 7500, 15e3, 3e4, 6e4], legendary: [0, 1e4, 2e4, 4e4, 8e4] } };
class HealthConfig extends FormApplication {
  constructor(e2, t2) {
    super(e2 || HealthConfig.defaultSettings, t2);
  }
  async getData() {
    let e2 = await game.settings.get("ffd20", "healthConfig");
    return e2 = mergeObject(HealthConfig.defaultSettings, e2), e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { title: game.i18n.localize("SETTINGS.ffd20HealthConfigName"), id: "health-config", template: "systems/ffd20/templates/settings/health.hbs", width: 480, height: "auto", tabs: [{ navSelector: ".tabs", contentSelector: ".tabbed", initial: "base" }] });
  }
  static get defaultSettings() {
    return { hitdice: { PC: { auto: false, rate: 0.5, maximized: 1 }, NPC: { auto: false, rate: 0.5, maximized: 0 }, Racial: { auto: false, rate: 0.5, maximized: 0 } }, hitdieOptions: ["Compute", "Rate", "Maximized"], rounding: "up", continuity: "discrete", variants: { pc: { useWoundsAndVigor: false, useWoundThresholds: 0, allowWoundThresholdOverride: false }, npc: { useWoundsAndVigor: false, useWoundThresholds: 0, allowWoundThresholdOverride: true } } };
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find('button[name="reset"]').click(this._onReset.bind(this)), e2.find('button[name="submit"]').click(this._onSubmit.bind(this));
  }
  async _onReset(e2) {
    return e2.preventDefault(), await game.settings.set("ffd20", "healthConfig", HealthConfig.defaultSettings), ui.notifications.info("Reset Pathfinder health configuration."), this.render();
  }
  _onSubmit(e2) {
    super._onSubmit(e2);
  }
  async _updateObject(e2, t2) {
    const s2 = expandObject(t2);
    for (const e3 of Object.values(s2.hitdice))
      e3.rate = Math.max(0, Math.min(e3.rate, 100)), e3.maximized = Math.max(0, Math.min(Math.floor(e3.maximized), 100));
    s2.variants.npc.allowWoundThresholdOverride = true, await game.settings.set("ffd20", "healthConfig", s2), ui.notifications.info("Updated Pathfinder health configuration.");
  }
}
class ExperienceConfig extends FormApplication {
  constructor(e2, t2) {
    super(e2 || ExperienceConfig.defaultSettings, t2), this._init = false;
  }
  async getData() {
    const e2 = {};
    if (!this._init) {
      const e3 = await game.settings.get("ffd20", "experienceConfig");
      this._settings = mergeObject(this.constructor.defaultSettings, e3), this._init = true;
    }
    return e2.settings = this._settings, e2.hasCustomFormula = "customFormula" === e2.settings.track, e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { title: game.i18n.localize("FFD20.ExperienceConfigName"), id: "experience-config", template: "systems/ffd20/templates/settings/experience.hbs", width: 560, height: "auto" });
  }
  static get defaultSettings() {
    return { track: "medium", disableExperienceTracking: false, openXpDistributor: true, custom: { formula: "" } };
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find('button[type="submit"]').click(this._onButtonSubmit.bind(this));
  }
  _onButtonSubmit(e2) {
    this._onSubmit(e2);
  }
  _onChangeInput(e2) {
    super._onChangeInput(e2), this._updateApplicationSettings();
  }
  _updateApplicationSettings() {
    this._settings = mergeObject(this._settings, expandObject(this._getSubmitData())), this.render();
  }
  async _updateObject(e2, t2) {
    const s2 = mergeObject(this._settings, expandObject(t2), { inplace: false });
    await game.settings.set("ffd20", "experienceConfig", s2), ui.notifications.info("Updated Pathfinder experience configuration.");
  }
}
class AccessibilityConfig extends FormApplication {
  constructor(e2, t2) {
    super(e2 || AccessibilityConfig.defaultSettings, t2), this._init = false;
  }
  async getData() {
    const e2 = {};
    if (!this._init) {
      const e3 = await game.settings.get("ffd20", "accessibilityConfig");
      this._settings = mergeObject(this.constructor.defaultSettings, e3), this._init = true;
    }
    return e2.settings = this._settings, e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { title: game.i18n.localize("FFD20.AccessibilityConfigName"), id: "accessibility-config", template: "systems/ffd20/templates/settings/accessibility.hbs", width: 560, height: "auto" });
  }
  static get defaultSettings() {
    return {};
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find('button[type="submit"]').click(this._onButtonSubmit.bind(this));
  }
  _onButtonSubmit(e2) {
    this._onSubmit(e2);
  }
  async _updateObject(e2, t2) {
    const s2 = expandObject(t2);
    await game.settings.set("ffd20", "accessibilityConfig", s2), ui.notifications.info("Updated Pathfinder accessibility configuration.");
  }
}
class TooltipWorldConfig extends FormApplication {
  constructor(e2, t2) {
    super(e2 || TooltipWorldConfig.defaultSettings, t2), this._cachedData = null;
  }
  getData() {
    const e2 = {};
    let t2 = game.settings.get("ffd20", "tooltipWorldConfig");
    return t2 = mergeObject(this.constructor.defaultSettings, t2), e2.data = t2, e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { title: game.i18n.localize("FFD20.TooltipWorldConfigName"), id: "tooltip-world-config", template: "systems/ffd20/templates/settings/tooltip_world.hbs", width: 720, height: "auto" });
  }
  static get defaultSettings() {
    return { disable: false, portrait: { hide: false }, hideHeld: true, hideArmor: true, hideBuffs: true, hideConditions: false, hideClothing: true, hideActorNameByDisposition: 0, hideActorNameReplacement: "???" };
  }
  activateListeners(e2) {
    e2.find('button[name="submit"]').click(this._onSubmit.bind(this)), e2.find('button[name="reset"]').click(this._onReset.bind(this));
  }
  async _onReset(e2) {
    return e2.preventDefault(), await game.settings.set("ffd20", "tooltipWorldConfig", this.constructor.defaultSettings), ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigResetInfo")), this.render();
  }
  async _updateObject(e2, t2) {
    const s2 = expandObject(t2);
    await game.settings.set("ffd20", "tooltipWorldConfig", s2), ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigUpdateInfo"));
  }
}
class TooltipConfig extends FormApplication {
  constructor(e2, t2) {
    super(e2 || TooltipConfig.defaultSettings, t2), this._cachedData = null;
  }
  getData() {
    if (this._cachedData)
      return this._cachedData;
    const e2 = canvas.app.view.getBoundingClientRect(), t2 = { screen: { width: e2.width, height: e2.height, halfWidth: Math.floor(e2.width / 2), halfHeight: Math.floor(e2.height / 2) }, isGM: game.user.isGM };
    {
      const e3 = { width: 320, height: 320, tooltip: { width: 80, height: 48 } }, s3 = t2.screen.width / t2.screen.height, l2 = t2.screen.height / t2.screen.width;
      s3 > l2 ? e3.height = Math.ceil(e3.height * l2) : l2 > s3 && (e3.width = Math.ceil(e3.width * s3)), t2.preview = e3;
    }
    let s2 = game.settings.get("ffd20", "tooltipConfig");
    return s2 = mergeObject(this.constructor.defaultSettings, s2), t2.data = s2, t2.hideKey = game.i18n.localize("FFD20.Key_Control"), this._cachedData = t2, t2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { title: game.i18n.localize("FFD20.TooltipConfigName"), id: "tooltip-config", template: "systems/ffd20/templates/settings/tooltip.hbs", width: 720, height: "auto" });
  }
  static get defaultSettings() {
    return { disable: false, anchor: { x: 1, y: 1 }, offset: { x: 0, y: 0 }, onMouse: false, portrait: { hide: false, maxSize: { width: 280, height: 280 } }, hideWithoutKey: false };
  }
  activateListeners(e2) {
    e2.find(".immediate-change").change(this._handleImmediateChange.bind(this)), e2.find("button.world-settings").click(this._openWorldSettings.bind(this)), e2.find('button[name="submit"]').click(this._onSubmit.bind(this)), e2.find('button[name="reset"]').click(this._onReset.bind(this));
  }
  _handleImmediateChange(e2) {
    const t2 = e2.currentTarget, s2 = t2.name;
    if (!s2)
      return;
    let l2;
    "INPUT" === t2.tagName.toUpperCase() ? (l2 = t2.value, "checkbox" === t2.type && (l2 = true === t2.checked)) : l2 = t2.innerHTML, "Boolean" === t2.dataset?.dtype ? l2 = Boolean(l2) : "Number" === t2.dataset?.dtype && (l2 = parseFloat(l2)), setProperty(this._cachedData, `data.${s2}`, l2), this.render();
  }
  _openWorldSettings(e2) {
    game.user.can("SETTINGS_MODIFY") ? new TooltipWorldConfig().render(true) : ui.notifications.error("FFD20.ErrorGenericPermission");
  }
  async _onReset(e2) {
    return e2.preventDefault(), await game.settings.set("ffd20", "tooltipConfig", this.constructor.defaultSettings), this._cachedData = null, ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigResetInfo")), this.render();
  }
  async _updateObject(e2, t2) {
    const s2 = expandObject(t2);
    await game.settings.set("ffd20", "tooltipConfig", s2), ui.notifications.info(game.i18n.localize("FFD20.TooltipConfigUpdateInfo"));
  }
}
class TooltipFFD20 extends Application {
  constructor() {
    super(), this.mousePos = { x: 0, y: 0 }, document.addEventListener("mousemove", (e2) => {
      this.mousePos.x = e2.clientX, this.mousePos.y = e2.clientY, this.onMouse && !this.hidden && this._setPosition();
    }), this.object = null, this.forceHideGMInfo = false, this.forceHide = false, this.lock = { new: false, old: false };
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/hud/tooltip.hbs", popOut: false });
  }
  get config() {
    return game.settings.get("ffd20", "tooltipConfig");
  }
  get worldConfig() {
    return game.settings.get("ffd20", "tooltipWorldConfig");
  }
  get anchor() {
    return this.config.anchor;
  }
  get offset() {
    return this.config.offset;
  }
  get onMouse() {
    return this.config.onMouse;
  }
  get hidden() {
    return "hidden" === this.element[0]?.style.visibility;
  }
  bind(e2) {
    this.lock.new || (this.object = e2, this.render(true));
  }
  unbind(e2) {
    this.lock.old || (this.object = null, this.hide());
  }
  clearBind() {
    this.object = null, this.hide();
  }
  async getData() {
    return "string" == typeof this.object ? { stringContent: this.object } : this.object instanceof Token ? { actorData: this.getTokenData(this.object) } : this.object instanceof Actor ? { actorData: this.getActorData(this.object) } : {};
  }
  getTokenData(e2) {
    const t2 = this.getActorData(e2.actor);
    if (!t2)
      return null;
    if (t2.name = e2.name, game.user.isGM && this.forceHideGMInfo || !game.user.isGM && !e2.actor.testUserPermission(game.user, "OBSERVER")) {
      const s2 = getProperty(e2.actor, "system.details.tooltip.name");
      t2.name = s2 || e2.name, (!s2 || true === getProperty(e2.actor, "system.details.tooltip.hideName") || e2.document.disposition < this.worldConfig.hideActorNameByDisposition) && (t2.name = this.worldConfig.hideActorNameReplacement || "???");
    }
    return t2;
  }
  getActorData(e2) {
    if (!e2)
      return null;
    const t2 = { data: e2.system, name: e2.name };
    if (game.user.isGM && !this.forceHideGMInfo || (t2.name = getProperty(e2, "system.details.tooltip.name") || e2.name), t2.isOwner = game.user.isGM || e2.isOwner, t2.isOwner || (t2.name = "???"), this.getPortrait(t2, e2.img), game.user.isGM && !this.forceHideGMInfo || e2.isOwner || !getProperty(e2, "system.details.tooltip.hideConditions") && !getProperty(this.worldConfig, "hideConditions")) {
      const s2 = getProperty(e2, "system.attributes.conditions") || {};
      for (const [e3, l2] of Object.entries(s2))
        true === l2 && (t2.conditions = t2.conditions || [], t2.conditions.push({ label: CONFIG.FFD20.conditions[e3], icon: CONFIG.FFD20.conditionTextures[e3] }));
    }
    if (game.user.isGM && !this.forceHideGMInfo || e2.isOwner || !getProperty(e2, "system.details.tooltip.hideBuffs") && !getProperty(this.worldConfig, "hideBuffs")) {
      const s2 = e2.items.filter((e3) => "buff" === e3.type && e3.isActive && !e3.system.hideFromToken);
      for (const e3 of s2)
        t2.buffs = t2.buffs || [], t2.buffs.push({ label: e3.name, icon: e3.img, level: e3.system.level });
    }
    if (game.user.isGM && !this.forceHideGMInfo || e2.isOwner || !getProperty(e2, "system.details.tooltip.hideHeld") && !getProperty(this.worldConfig, "hideHeld")) {
      const s2 = e2.items.filter((e3) => !!["weapon", "equipment"].includes(e3.type) && (!!e3.system.equipped && ("equipment" !== e3.type || "shield" === e3.system.equipmentType)));
      for (const e3 of s2)
        t2.held = t2.held || [], t2.held.push({ label: e3.getName(this.forceHideGMInfo), icon: e3.img });
    }
    if (game.user.isGM && !this.forceHideGMInfo || e2.isOwner || !getProperty(e2, "system.details.tooltip.hideArmor") && !getProperty(this.worldConfig, "hideArmor")) {
      const s2 = e2.items.filter((e3) => "equipment" === e3.type && (!!e3.system.equipped && "armor" === e3.system.equipmentType));
      for (const e3 of s2)
        t2.armor = t2.armor || [], t2.armor.push({ label: e3.getName(this.forceHideGMInfo), icon: e3.img });
    }
    if (game.user.isGM && !this.forceHideGMInfo || e2.isOwner || !getProperty(e2, "item.details.tooltip.hideClothing") && !getProperty(this.worldConfig, "hideClothing")) {
      const s2 = e2.items.filter((e3) => "equipment" === e3.type && (!!e3.system.equipped && ("misc" === e3.system.equipmentType && "clothing" === e3.system.equipmentSubtype)));
      for (const e3 of s2)
        t2.clothing = t2.clothing || [], t2.clothing.push({ label: e3.getName(this.forceHideGMInfo), icon: e3.img });
    }
    return t2;
  }
  getPortrait(e2, t2) {
    true !== getProperty(this.config, "portrait.hide") && true !== getProperty(this.worldConfig, "portrait.hide") && (e2.portrait = { maxWidth: getProperty(this.config, "portrait.maxSize.width") || 100, maxHeight: getProperty(this.config, "portrait.maxSize.height") || 100, url: t2 });
  }
  _setPosition() {
    if (!this.element[0])
      return;
    const e2 = canvas.app.view.getBoundingClientRect(), t2 = this.element[0].getBoundingClientRect(), s2 = { width: t2.width, height: t2.height, left: 0, top: 0 }, l2 = ui.sidebar.element[0].getBoundingClientRect(), c2 = e2.width - s2.width - l2.width, u2 = e2.height - s2.height;
    if (this.onMouse) {
      const t3 = { x: e2.left, y: e2.top }, l3 = { x: t3.x + c2, y: t3.y + u2 }, m2 = { x: this.mousePos.x - s2.width + s2.width * this.anchor.x + this.offset.x, y: this.mousePos.y - s2.height + s2.height * this.anchor.y + this.offset.y };
      s2.left = Math.max(t3.x, Math.min(l3.x, m2.x)), s2.top = Math.max(t3.y, Math.min(l3.y, m2.y));
    } else
      s2.left = e2.left + c2 * this.anchor.x + this.offset.x, s2.top = e2.top + u2 * this.anchor.y + this.offset.y;
    this.element.css(s2);
  }
  show() {
    this.object && (this.forceHide || true !== getProperty(this.config, "disable") && true !== getProperty(this.worldConfig, "disable") && this.element.css("visibility", "visible"));
  }
  hide() {
    this.element.css("visibility", "hidden");
  }
  async _render(e2 = false, t2 = {}) {
    await super._render(e2, t2), this.hide();
    const s2 = this.element.find("img"), l2 = s2.length;
    if (l2 > 0) {
      let e3 = 0;
      s2.one("load", () => {
        e3++, e3 === l2 && this.object && (this._setPosition(), this.show());
      });
    } else
      this.object && (this._setPosition(), this.show());
  }
  activateListeners(e2) {
    e2.find(".controls .close").click(() => {
      this.clearBind();
    });
  }
  tokenHover(e2, t2) {
    if (t2) {
      const t3 = ffd20.tooltip.mousePos;
      "board" === document.elementFromPoint(t3.x, t3.y)?.id && ffd20.tooltip.bind(e2);
    } else
      ffd20.tooltip.unbind(e2);
  }
  static toggle(e2) {
    e2 ? (ffd20.tooltip || (ffd20.tooltip = new TooltipFFD20(), Hooks.on("hoverToken", ffd20.tooltip.tokenHover)), ffd20.tooltip?.setPosition()) : ffd20.tooltip && (Hooks.off("hoverToken", ffd20.tooltip.tokenHover), ffd20.tooltip = null);
  }
  async refresh() {
    await this.render(), this.forceHide ? this.hide() : this.show();
  }
}
const t = foundry.utils.debounce(() => {
  window.location.reload();
}, 100), registerSystemSettings = function() {
  game.settings.register("ffd20", "systemMigrationVersion", { name: "System Migration Version", scope: "world", config: false, type: String, default: "0.0.0" }), game.settings.register("ffd20", "changelogVersion", { name: "Changelog Version", scope: "client", config: false, type: String, default: "0.2.28" }), game.settings.register("ffd20", "dontShowChangelog", { name: "Don't Automatically Show Changelog", scope: "client", config: false, type: Boolean, default: false }), game.settings.registerMenu("ffd20", "healthConfig", { name: "SETTINGS.ffd20HealthConfigName", label: "SETTINGS.ffd20HealthConfigLabel", hint: "SETTINGS.ffd20HealthConfigHint", icon: "fas fa-heartbeat", type: HealthConfig, restricted: true }), game.settings.register("ffd20", "healthConfig", { name: "SETTINGS.ffd20HealthConfigName", scope: "world", default: HealthConfig.defaultSettings, type: Object, config: false, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.registerMenu("ffd20", "experienceConfig", { name: "FFD20.ExperienceConfigName", label: "FFD20.ExperienceConfigLabel", hint: "FFD20.ExperienceConfigHint", icon: "fas fa-book", type: ExperienceConfig, restricted: true }), game.settings.register("ffd20", "experienceConfig", { name: "FFD20.ExperienceConfigName", scope: "world", default: ExperienceConfig.defaultSettings, type: Object, config: false, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "accessibilityConfig", { name: "FFD20.AccessibilityConfigName", scope: "client", default: AccessibilityConfig.defaultSettings, type: Object, config: false, onChange: () => ffd20.utils.refreshActors() }), game.settings.registerMenu("ffd20", "tooltipConfig", { name: "FFD20.TooltipConfigName", label: "FFD20.TooltipConfigLabel", hint: "FFD20.TooltipConfigHint", restricted: false, icon: "fas fa-window-maximize", type: TooltipConfig }), game.settings.register("ffd20", "tooltipConfig", { name: "FFD20.TooltipConfigName", scope: "client", default: TooltipConfig.defaultSettings, type: Object, config: false, onChange: (e2) => {
    const t2 = !game.settings.get("ffd20", "tooltipWorldConfig").disabled && !e2.disabled;
    TooltipFFD20.toggle(t2);
  } }), game.settings.register("ffd20", "tooltipWorldConfig", { name: "FFD20.TooltipWorldConfigName", scope: "world", default: TooltipWorldConfig.defaultSettings, type: Object, config: false, onChange: (e2) => {
    TooltipFFD20.toggle(!e2.disable), ffd20.tooltip?.setPosition();
  } }), game.settings.register("ffd20", "diagonalMovement", { name: "SETTINGS.ffd20DiagN", hint: "SETTINGS.ffd20DiagL", scope: "world", config: true, default: "5105", type: String, choices: { 555: "SETTINGS.ffd20DiagPHB", 5105: "SETTINGS.ffd20DiagDMG" }, onChange: (e2) => canvas.grid.diagonalRule = e2 }), game.settings.register("ffd20", "experienceRate", { name: "SETTINGS.ffd20ExpRateN", hint: "SETTINGS.ffd20ExpRateL", scope: "world", config: false, default: "", type: String, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "units", { name: "SETTINGS.ffd20UnitsN", hint: "SETTINGS.ffd20UnitsL", scope: "world", config: true, default: "imperial", type: String, choices: { imperial: game.i18n.localize("SETTINGS.ffd20ImperialUnits"), metric: game.i18n.localize("SETTINGS.ffd20MetricUnits") }, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "distanceUnits", { name: "SETTINGS.ffd20DistanceUnitsN", hint: "SETTINGS.ffd20DistanceUnitsL", scope: "world", config: true, default: "default", type: String, choices: { default: game.i18n.localize("FFD20.Default"), imperial: game.i18n.localize("SETTINGS.ffd20ImperialDistanceUnits"), metric: game.i18n.localize("SETTINGS.ffd20MetricDistanceUnits") }, onChange: () => ffd20.utils.refreshActors({ renderOnly: true, renderForEveryone: true }) }), game.settings.register("ffd20", "weightUnits", { name: "SETTINGS.ffd20WeightUnitsN", hint: "SETTINGS.ffd20WeightUnitsL", scope: "world", config: true, default: "default", type: String, choices: { default: game.i18n.localize("FFD20.Default"), imperial: game.i18n.localize("SETTINGS.ffd20ImperialWeightUnits"), metric: game.i18n.localize("SETTINGS.ffd20MetricWeightUnits") }, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "allowBackgroundSkills", { name: "SETTINGS.ffd20BackgroundSkillsN", hint: "SETTINGS.ffd20BackgroundSkillsH", scope: "world", config: true, default: false, type: Boolean, onChange: () => ffd20.utils.refreshActors({ renderOnly: true, renderForEveryone: true }) }), game.settings.register("ffd20", "useFractionalBaseBonuses", { name: "SETTINGS.ffd20FractionalBaseBonusesN", hint: "SETTINGS.ffd20FractionalBaseBonusesH", scope: "world", config: true, default: false, type: Boolean, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "autoCollapseItemCards", { name: "SETTINGS.ffd20AutoCollapseCardN", hint: "SETTINGS.ffd20AutoCollapseCardL", scope: "client", config: true, default: false, type: Boolean, onChange: () => {
    ui.chat.render();
  } }), game.settings.register("ffd20", "hideChatButtons", { name: "SETTINGS.ffd20HideChatButtonsN", hint: "SETTINGS.ffd20HideChatButtonsH", scope: "client", config: true, default: false, type: Boolean, onChange: () => {
    ui.chat.render();
  } }), game.settings.register("ffd20", "measureStyle", { name: "SETTINGS.ffd20MeasureStyleN", hint: "SETTINGS.ffd20MeasureStyleL", scope: "world", config: true, default: true, type: Boolean }), game.settings.register("ffd20", "lowLightVisionMode", { name: "SETTINGS.ffd20LowLightVisionModeN", hint: "SETTINGS.ffd20LowLightVisionModeH", scope: "world", config: true, default: false, type: Boolean, onChange: () => {
    canvas.perception.schedule({ lighting: { initialize: true, refresh: true }, sight: { initialize: true, refresh: true } });
  } }), game.settings.register("ffd20", "sharedVisionMode", { name: "SETTINGS.ffd20SharedVisionModeN", hint: "SETTINGS.ffd20SharedVisionModeH", scope: "world", config: false, default: "0", type: String, choices: { 0: "SETTINGS.ffd20SharedVisionWithoutSelection", 1: "SETTINGS.ffd20SharedVisionWithSelection" }, onChange: () => {
    game.socket.emit("system.ffd20", { eventType: "redrawCanvas" });
  } }), game.settings.register("ffd20", "characterVision", { name: "SETTINGS.ffd20characterVisionN", hint: "SETTINGS.ffd20characterVisionH", scope: "world", config: true, default: true, type: Boolean }), game.settings.register("ffd20", "coinWeight", { name: "SETTINGS.ffd20CoinWeightN", hint: "SETTINGS.ffd20CoinWeightH", scope: "world", config: true, default: 50, type: Number, onChange: () => ffd20.utils.refreshActors({ renderForEveryone: true }) }), game.settings.register("ffd20", "allowScriptChanges", { name: "SETTINGS.ffd20AllowScriptChangesN", hint: "SETTINGS.ffd20AllowScriptChangesH", scope: "world", config: true, default: false, type: Boolean, onChange: (e2) => {
    if (!e2 || !game.user.isGM)
      return;
    Dialog.confirm({ title: game.i18n.localize("SETTINGS.ffd20AllowScriptChangesN"), content: game.i18n.localize("SETTINGS.ffd20AllowScriptChangesW"), defaultYes: false }).then((e3) => {
      e3 || game.settings.set("ffd20", "allowScriptChanges", false);
    });
  } }), game.settings.register("ffd20", "hideTokenConditions", { name: "SETTINGS.ffd20HideTokenConditionsN", hint: "SETTINGS.ffd20HideTokenConditionsH", scope: "world", config: true, default: false, type: Boolean, onChange: () => {
    const e2 = [], t2 = [...Array.from(game.actors.contents.filter((e3) => getProperty(e3.data, "token.actorLink"))), ...Object.values(game.actors.tokens).filter((e3) => null != e3)];
    for (const s2 of t2)
      s2.toggleConditionStatusIcons && e2.push(s2.toggleConditionStatusIcons({ render: false }));
    return Promise.all(e2);
  } }), game.settings.register("ffd20", "obscureInlineRolls", { name: "SETTINGS.ffd20obscureInlineRollsN", hint: "SETTINGS.ffd20obscureInlineRollsH", scope: "world", config: true, default: false, type: Boolean, onChange: t }), game.settings.register("ffd20", "obscureSaveDCs", { name: "SETTINGS.ffd20obscureSaveDCsN", hint: "SETTINGS.ffd20obscureSaveDCsH", scope: "world", config: true, default: true, type: Boolean, onChange: t }), game.settings.register("ffd20", "coreEffects", { name: "SETTINGS.ffd20CoreEffectsN", hint: "SETTINGS.ffd20CoreEffectsH", scope: "world", config: true, default: false, type: Boolean, onChange: t }), game.settings.register("ffd20", "skipActionDialogs", { name: "SETTINGS.ffd20SkipActionDialogsN", hint: "SETTINGS.ffd20SkipActionDialogsH", scope: "client", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "placeMeasureTemplateOnQuickRolls", { name: "SETTINGS.placeMeasureTemplateOnQuickRollsN", hint: "SETTINGS.placeMeasureTemplateOnQuickRollsH", scope: "client", config: true, default: true, type: Boolean }), game.settings.register("ffd20", "unchainedActionEconomy", { name: "SETTINGS.ffd20UnchainedActionEconomyN", hint: "SETTINGS.ffd20UnchainedActionEconomyH", scope: "world", config: true, default: false, type: Boolean, onChange: () => ffd20.utils.refreshActors({ renderOnly: true, renderForEveryone: true }) }), game.settings.register("ffd20", "invertSectionFilterShiftBehaviour", { name: "SETTINGS.ffd20InvertSectionFilterBehaviourN", hint: "SETTINGS.ffd20InvertSectionFilterBehaviourH", scope: "client", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "hideReachMeasurements", { name: "SETTINGS.ffd20HideReachMeasurementsN", hint: "SETTINGS.ffd20HideReachMeasurementsH", scope: "client", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "displayIteratives", { name: "SETTINGS.ffd20DisplayIterativesN", hint: "SETTINGS.ffd20DisplayIterativesH", scope: "client", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "alternativeReachCornerRule", { name: "SETTINGS.ffd20AlternativeReachCornerRuleN", hint: "SETTINGS.ffd20AlternativeReachCornerRuleH", scope: "world", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "npcProficiencies", { name: "SETTINGS.ffd20NPCProficienciesN", hint: "SETTINGS.ffd20NPCProficienciesH", scope: "world", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "disableAttackCardTargets", { name: "SETTINGS.ffd20DisableAttackCardTargetsN", hint: "SETTINGS.ffd20DisableAttackCardTargetsH", scope: "world", config: true, default: false, type: Boolean }), game.settings.register("ffd20", "initiativeTiebreaker", { name: "SETTINGS.ffd20InitTiebreakerN", hint: "SETTINGS.ffd20InitTiebreakerH", scope: "world", config: true, default: true, type: Boolean }), game.settings.register("ffd20", "clearTargetsAfterAttack", { name: "SETTINGS.ffd20ClearTargetsAfterAttackN", hint: "SETTINGS.ffd20ClearTargetsAfterAttackH", scope: "client", config: true, default: false, type: Boolean });
}, registerClientSettings = function() {
  game.settings.register("ffd20", "compendiumFilters", { name: "Compendium Filters", hint: "Stores compendium filters", scope: "client", config: false, default: {}, type: Object }), game.settings.register("ffd20", "compendiumItems", { name: "Compendium Items", hint: "Cache compendium entries", scope: "client", config: false, default: {}, type: Object }), game.settings.register("ffd20", "compendiumSaveVersions", { name: "Compendium Save Versions", hint: "Versions of compendium caches", scope: "client", config: false, default: { spells: "0.2.28", items: "0.2.28", bestiary: "0.2.28", feats: "0.2.28", classes: "0.2.28", races: "0.2.28" }, type: Object }), game.settings.register("ffd20", "compendiumForceRefresh", { name: "Compendium Force Refresh Data", hint: "Data needed to determine whether to force refresh compendiums", scope: "client", config: false, default: { diff: { items: [], spells: [], classes: [], races: [], feats: [], bestiary: [] } }, type: Object });
}, migrateSystemSettings = async function() {
  game.user.isGM;
}, getSkipActionPrompt = function() {
  return game.settings.get("ffd20", "skipActionDialogs") && !ffd20.skipConfirmPrompt || !game.settings.get("ffd20", "skipActionDialogs") && ffd20.skipConfirmPrompt;
}, s = Object.freeze(Object.defineProperty({ __proto__: null, registerSystemSettings, registerClientSettings, migrateSystemSettings, getSkipActionPrompt }, Symbol.toStringTag, { value: "Module" })), preloadHandlebarsTemplates = async function() {
  return loadTemplates(["systems/ffd20/templates/actors/parts/actor-summary.hbs", "systems/ffd20/templates/actors/parts/actor-traits.hbs", "systems/ffd20/templates/actors/parts/actor-inventory.hbs", "systems/ffd20/templates/actors/parts/actor-features.hbs", "systems/ffd20/templates/actors/parts/actor-spellbook-front.hbs", "systems/ffd20/templates/actors/parts/actor-spellbook.hbs", "systems/ffd20/templates/actors/parts/actor-skills-front.hbs", "systems/ffd20/templates/actors/parts/actor-skills.hbs", "systems/ffd20/templates/actors/parts/actor-combat.hbs", "systems/ffd20/templates/actors/parts/actor-defenses_tables.hbs", "systems/ffd20/templates/actors/parts/actor-buffs.hbs", "systems/ffd20/templates/actors/parts/actor-attributes.hbs", "systems/ffd20/templates/actors/parts/actor-settings.hbs", "systems/ffd20/templates/actors/parts/actor-cmb.hbs", "systems/ffd20/templates/actors/parts/actor-contextNotes.hbs", "systems/ffd20/templates/internal/item-search.hbs", "systems/ffd20/templates/items/parts/item-actions.hbs", "systems/ffd20/templates/items/parts/item-advanced.hbs", "systems/ffd20/templates/items/parts/item-aura.hbs", "systems/ffd20/templates/items/parts/item-changes.hbs", "systems/ffd20/templates/items/parts/item-contents.hbs", "systems/ffd20/templates/items/parts/item-description.hbs", "systems/ffd20/templates/items/parts/item-links.hbs", "systems/ffd20/templates/items/parts/item-name.hbs", "systems/ffd20/templates/items/parts/item-proficiencies.hbs", "systems/ffd20/templates/items/parts/item-size.hbs", "systems/ffd20/templates/items/parts/item-tag.hbs", "systems/ffd20/templates/items/parts/item-weapon-groups.hbs", "systems/ffd20/templates/apps/attack-roll-dialog.hbs", "systems/ffd20/templates/apps/vision-permission.hbs", "systems/ffd20/templates/apps/help-browser.hbs", "systems/ffd20/templates/apps/item-action/action.hbs", "systems/ffd20/templates/apps/item-action/activation.hbs", "systems/ffd20/templates/apps/item-action/template.hbs", "systems/ffd20/templates/apps/item-action/conditionals.hbs", "systems/ffd20/templates/chat/roll-ext.hbs", "systems/ffd20/templates/chat/defenses.hbs", "systems/ffd20/templates/chat/parts/gm-description.hbs", "systems/ffd20/templates/chat/parts/attack-roll-header.hbs", "systems/ffd20/templates/chat/parts/attack-roll-footer.hbs", "systems/ffd20/templates/chat/parts/attack-roll-targets.hbs", "systems/ffd20/templates/internal/spell-description.hbs", "systems/ffd20/templates/internal/consumable-description.hbs", "systems/ffd20/templates/internal/damage-tooltip.hbs", "systems/ffd20/templates/internal/token-config_vision.hbs", "systems/ffd20/templates/internal/compendium-browser_entry.hbs", "systems/ffd20/templates/internal/damage-type-visual.hbs", "systems/ffd20/templates/hud/tooltip.hbs", "systems/ffd20/templates/hud/tooltip_actor.hbs", "systems/ffd20/templates/apps/level-up/fc_alt.hbs", "systems/ffd20/templates/apps/level-up/fc_hp.hbs", "systems/ffd20/templates/apps/level-up/fc_skill.hbs", "systems/ffd20/templates/apps/level-up/health_roll.hbs", "systems/ffd20/templates/apps/level-up/health_manual.hbs", "systems/ffd20/templates/apps/level-up/ability-score.hbs", "systems/ffd20/templates/apps/level-up/summary.hbs", "systems/ffd20/templates/apps/level-up/summary/health.hbs", "systems/ffd20/templates/apps/level-up/summary/fc.hbs", "systems/ffd20/templates/apps/level-up/summary/ability-score.hbs"]);
};
class SemanticVersion {
  static re = /^(0|[1-9]\d*)\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)?$/;
  constructor() {
    this.major = 0, this.minor = 0, this.patch = 0, this.preRelease = "", this.buildMetaData = "";
  }
  static fromString(e2) {
    if (e2.match(this.re)) {
      let e3 = new this();
      return e3.major = parseInt(RegExp.$1), e3.minor = parseInt(RegExp.$2), e3.patch = parseInt(RegExp.$3 || 0), e3.preRelease = RegExp.$4 || "", e3.buildMetaData = RegExp.$5 || "", e3;
    }
    return null;
  }
  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
  isHigherThan(e2) {
    return this.major > e2.major || (this.major === e2.major && this.minor > e2.minor || this.major === e2.major && this.minor === e2.minor && this.patch > e2.patch);
  }
  isLowerThan(e2) {
    return this.major < e2.major || (this.major === e2.major && this.minor < e2.minor || this.major === e2.major && this.minor === e2.minor && this.patch < e2.patch);
  }
}
class RollFFD20 extends Roll {
  get totalHalved() {
    return Math.floor(this.total / 2);
  }
  get dice() {
    return this._dice.concat(this.terms.reduce((e2, t2) => (t2 instanceof DiceTerm ? e2.push(t2) : (t2 instanceof PoolTerm || t2 instanceof ffd20.dice.terms.SizeRollTerm) && (e2 = e2.concat(t2.dice)), e2), []));
  }
  static safeRoll(e2, t2 = {}, s2, l2 = { suppressError: false }) {
    let c2;
    try {
      c2 = this.create(e2, t2).evaluate({ async: false });
    } catch (e3) {
      c2 = this.create("0", t2).evaluate({ async: false }), c2.err = e3;
    }
    return c2.warning && (c2.err = Error("This formula had a value replaced with null.")), c2.err && (s2 && !l2.suppressError ? console.error(s2, c2.err) : CONFIG.debug.roll && console.error(c2.err)), c2;
  }
  static safeTotal(e2, t2) {
    return isNaN(+e2) ? RollFFD20.safeRoll(e2, t2).total : +e2;
  }
  static simplifyTerms(e2) {
    let t2 = e2.reduce((e3, t3) => {
      const s2 = e3[e3.length - 1];
      if (!(t3 instanceof OperatorTerm) && s2 instanceof StringTerm)
        return s2.term += t3.total, foundry.utils.mergeObject(s2.options, t3.options), e3;
      const l2 = s2 instanceof NumericTerm;
      if (s2 && l2 && t3 instanceof StringTerm && t3.term.match(/\[(.+)\]/))
        return s2.options.flavor = RegExp.$1, e3;
      const c2 = s2 instanceof ffd20.dice.terms.SizeRollTerm;
      if (s2 && c2 && t3 instanceof StringTerm && t3.term.match(/\[(.+)\]/))
        return s2.options.flavor = RegExp.$1, e3;
      const u2 = s2 instanceof OperatorTerm;
      return s2 && !u2 && t3 instanceof StringTerm ? (t3.term = String(s2.total) + t3.term, foundry.utils.mergeObject(t3.options, s2.options), e3[e3.length - 1] = t3, e3) : (e3.push(t3), e3);
    }, []);
    return t2 = t2.map((e3) => {
      if (!(e3 instanceof StringTerm))
        return e3;
      const t3 = this._classifyStringTerm(e3.formula, { intermediate: false });
      return t3.options = foundry.utils.mergeObject(e3.options, t3.options, { inplace: false }), t3;
    }), t2[0] instanceof OperatorTerm && "-" !== t2[0].operator && t2.shift(), t2[e2.length - 1] instanceof OperatorTerm && t2.pop(), t2;
  }
  static _splitParentheses(e2) {
    return this._splitGroup(e2, { openRegexp: ParentheticalTerm.OPEN_REGEXP, closeRegexp: ParentheticalTerm.CLOSE_REGEXP, openSymbol: "(", closeSymbol: ")", onClose: (e3) => {
      const t2 = e3.open.slice(0, -1), s2 = e3.terms.join(""), l2 = { flavor: e3.flavor ? e3.flavor.slice(1, -1) : void 0 }, c2 = [];
      if ("sizeRoll" === t2) {
        const e4 = this._splitMathArgs(s2);
        c2.push(new ffd20.dice.terms.SizeRollTerm({ terms: e4, options: l2 }));
      } else {
        if (t2 in ffd20.utils.rollPreProcess) {
          const s3 = e3.terms.reduce((e4, t3) => (e4.push(...t3.split(/\s*,\s*/)), e4), []).map((e4) => e4.startsWith('"') && e4.endsWith('"') || e4.startsWith("'") && e4.endsWith("'") ? e4.slice(1, -1) : e4.match(/^[a-zA-Z0-9]+$/) ? parseRollStringVariable(e4) : RollFFD20.safeRoll(e4, this.data).total);
          return ffd20.utils.rollPreProcess[t2](...s3);
        }
        if (t2 in Math) {
          const e4 = this._splitMathArgs(s2);
          c2.push(new MathTerm({ fn: t2, terms: e4, options: l2 }));
        } else
          t2 && c2.push(new StringTerm({ term: t2 })), c2.push(new ParentheticalTerm({ term: s2, options: l2 }));
      }
      return c2;
    } });
  }
  static cleanFlavor(e2) {
    return e2.replace(/\[\];/g, "");
  }
  async getTooltip() {
    const e2 = this.dice.map((e3) => e3.getTooltipData()), t2 = this.terms.reduce((e3, t3, s2, l2) => {
      const c2 = t3 instanceof NumericTerm ? t3.getTooltipData() : void 0, u2 = l2[s2 - 1];
      return t3 instanceof NumericTerm && u2 && u2 instanceof OperatorTerm && "-" === u2.operator && (c2.total = -c2.total), void 0 !== c2 && (c2.flavor || (c2.flavor = game.i18n.localize("FFD20.Undefined")), e3.push(c2)), e3;
    }, []);
    return renderTemplate("systems/ffd20/templates/dice/tooltip.hbs", { parts: e2, numericParts: t2 });
  }
}
const parseRollStringVariable = function(e2) {
  return "false" !== e2 && ("true" === e2 || ("null" === e2 ? null : "undefined" !== e2 ? e2.match(/^(?:[0-9]+)?(?:\.[0-9]+)?$/) ? parseFloat(e2) : e2 : void 0));
}, createTag = function(e2) {
  return 0 === e2.length && (e2 = "tag"), e2.replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/).map((e3, t2) => (e3 = e3.toLowerCase(), t2 > 0 && (e3 = e3.substring(0, 1).toUpperCase() + e3.substring(1)), e3)).join("");
}, isMinimumCoreVersion = function(e2) {
  const t2 = SemanticVersion.fromString(game.version), s2 = SemanticVersion.fromString(e2);
  return !t2.isLowerThan(s2);
}, degtorad = function(e2) {
  return e2 * Math.PI / 180;
}, linkData = function(e2, t2, s2, l2) {
  setProperty(e2, s2, l2), t2[s2] = l2;
}, getItemOwner = function(e2) {
  return e2.actor ? e2.actor : e2.id ? game.actors.find((t2) => t2.items.get(e2.id)) : null;
}, fractionalToString = (e2) => {
  const t2 = Math.floor(e2), s2 = Math.roundDecimals(e2 - t2, 3);
  if (0 === s2)
    return `${t2}`;
  const l2 = [];
  return 0 !== t2 && l2.push(t2), 0.25 === s2 ? l2.push("1/4") : 0.333 === s2 ? l2.push("1/3") : 0.5 === s2 ? l2.push("1/2") : 0.667 === s2 ? l2.push("2/3") : 0.75 === s2 && l2.push("3/4"), l2.join(" ");
}, l = { fromString: (e2) => "1/8" === e2 ? 0.125 : "1/6" === e2 ? 0.1625 : "1/4" === e2 ? 0.25 : "1/3" === e2 ? 0.3375 : "1/2" === e2 ? 0.5 : parseFloat(e2), fromNumber: (e2) => 0.125 === e2 ? "1/8" : 0.1625 === e2 ? "1/6" : 0.25 === e2 ? "1/4" : 0.3375 === e2 ? "1/3" : 0.5 === e2 ? "1/2" : Number.isNumeric(e2) ? e2.toString() : "0" }, getActorFromId = function(e2) {
  const t2 = ChatMessage.getSpeaker();
  let s2 = null;
  return e2 && (s2 = game.actors.tokens[e2], s2 || (s2 = game.actors.get(e2))), t2.token && !s2 && (s2 = game.actors.tokens[t2.token]), s2 || (s2 = game.actors.get(t2.actor)), s2;
}, convertDistance = function(e2, t2 = "ft") {
  let s2 = game.settings.get("ffd20", "distanceUnits");
  return "default" === s2 && (s2 = game.settings.get("ffd20", "units")), "metric" === s2 ? "mi" === t2 ? [Math.round(1.6 * e2 * 100) / 100, "km"] : [Math.round(e2 / 5 * 1.5 * 100) / 100, "m"] : [e2, t2];
}, convertDistanceBack = function(e2, t2 = "ft") {
  let s2 = game.settings.get("ffd20", "distanceUnits");
  return "default" === s2 && (s2 = game.settings.get("ffd20", "units")), "metric" === s2 ? "mi" === t2 ? [Math.round(e2 / 1.6 * 100) / 100, "mi"] : [Math.round(5 * e2 / 1.5 * 100) / 100, "ft"] : [e2, t2];
}, measureDistance = function(e2, t2, { ray: s2 = null, diagonalRule: l2 = "5105", state: c2 = { diagonals: 0, cells: 0 } } = {}) {
  s2 ??= new Ray(e2, t2);
  const u2 = canvas.dimensions.size, m2 = Math.ceil(Math.abs(s2.dx / u2)), d2 = Math.ceil(Math.abs(s2.dy / u2)), h2 = Math.min(m2, d2), p2 = Math.abs(d2 - m2);
  c2.diagonals += h2;
  let g2 = 0;
  if ("5105" === l2) {
    const e3 = Math.floor(c2.diagonals / 2) - Math.floor((c2.diagonals - h2) / 2);
    g2 = 2 * e3 + (h2 - e3) + p2;
  } else
    g2 = p2 + h2;
  return c2.cells += g2, g2 * canvas.dimensions.distance;
}, convertWeight = function(e2) {
  let t2 = game.settings.get("ffd20", "weightUnits");
  return "default" === t2 && (t2 = game.settings.get("ffd20", "units")), "metric" === t2 ? Math.round(e2 / 2 * 100) / 100 : e2;
}, convertWeightBack = function(e2) {
  let t2 = game.settings.get("ffd20", "weightUnits");
  return "default" === t2 && (t2 = game.settings.get("ffd20", "units")), "metric" === t2 ? Math.round(2 * e2 * 100) / 100 : e2;
}, naturalSort = function(e2, t2 = "") {
  return e2.sort((e3, s2) => {
    const l2 = t2 ? getProperty(e3, t2) : e3, c2 = t2 ? getProperty(s2, t2) : s2;
    return new Intl.Collator(game.settings.get("core", "language"), { numeric: true }).compare(l2, c2);
  });
}, createConsumableSpellDialog = async function(e2, { allowSpell: t2 = true } = {}) {
  const [s2, l2] = CONFIG.Item.documentClasses.spell.getMinimumCasterLevelBySpellData(e2), c2 = await renderTemplate("systems/ffd20/templates/internal/create-consumable.hbs", { name: e2.name, sl: s2, cl: l2 }), getData = function(t3) {
    const s3 = e2, l3 = expandObject(new FormDataExtended(t3.querySelector("form")).object);
    return s3.sl = l3.sl ?? 1, s3.cl = l3.cl ?? 1, Number.isNaN(s3.sl) && (s3.sl = 1), s3;
  };
  return new Promise((s3) => {
    const l3 = { title: game.i18n.localize("FFD20.CreateItemForSpell").format(e2.name), content: c2, itemData: e2, buttons: { potion: { icon: '<i class="fas fa-prescription-bottle"></i>', label: game.i18n.localize("FFD20.CreateItemPotion"), callback: (e3) => s3(createConsumableSpell(getData(e3), "potion")) }, scroll: { icon: '<i class="fas fa-scroll"></i>', label: game.i18n.localize("FFD20.CreateItemScroll"), callback: (e3) => s3(createConsumableSpell(getData(e3), "scroll")) }, wand: { icon: '<i class="fas fa-magic"></i>', label: game.i18n.localize("FFD20.CreateItemWand"), callback: (e3) => s3(createConsumableSpell(getData(e3), "wand")) }, spell: { icon: '<i class="fas fa-hand-sparkles"></i>', label: game.i18n.localize("FFD20.ItemTypeSpell"), callback: () => s3("spell") } }, close: () => {
      s3(false);
    }, default: "potion" };
    t2 || delete l3.buttons.spell, new Dialog(l3, { classes: ["dialog", "ffd20", "create-consumable"], jQuery: false }).render(true);
  });
}, createConsumableSpell = async function(e2, t2) {
  const s2 = await CONFIG.Item.documentClasses.spell.toConsumable(e2, t2);
  return s2._id && delete s2._id, s2;
}, adjustNumberByStringCommand = function(e2, t2, s2 = null, l2 = null) {
  let c2 = e2;
  if (t2.match(/(=)?([+-]+)?(\d+)/)) {
    const t3 = RegExp.$2, s3 = "=" == RegExp.$1 || ["--", "++"].includes(t3) || !RegExp.$1 && !RegExp.$2, l3 = ["-", "--"].includes(t3), u2 = parseInt(RegExp.$3, 10), m2 = l3 ? -u2 : u2;
    c2 = s3 ? m2 : e2 + m2;
  } else
    c2 = "" === t2 && null != l2 ? l2 : parseFloat(t2 || "0");
  return s2 && (c2 = Math.min(c2, s2)), Number.isNaN(c2) && (c2 = e2), c2;
}, colorToInt = function(e2) {
  const t2 = e2.rgb().color;
  return ((255 & Math.round(t2[0])) << 16) + ((255 & Math.round(t2[1])) << 8) + (255 & Math.round(t2[2]));
}, getBuffTargets = function(e2, t2 = "buffs") {
  const s2 = duplicate({ buffs: CONFIG.FFD20.buffTargets, contextNotes: CONFIG.FFD20.contextNoteTargets }[t2]);
  if (e2)
    for (const t3 of e2._skillTargets) {
      const l2 = t3.split(".").slice(1).join("."), c2 = e2.getSkillInfo(l2);
      s2[t3] = { label: c2.name, category: "skill" };
    }
  else
    for (const [e3, t3] of Object.entries(CONFIG.FFD20.skills))
      s2[`skill.${e3}`] = { label: t3, category: "skill" };
  return s2;
}, getBuffTargetDictionary = function(e2, t2 = "buffs") {
  const s2 = getBuffTargets(e2, t2), l2 = duplicate({ buffs: CONFIG.FFD20.buffTargetCategories, contextNotes: CONFIG.FFD20.contextNoteCategories }[t2]);
  let c2 = Object.entries(s2).reduce((e3, t3) => {
    const s3 = t3[0], c3 = t3[1].label, u2 = t3[1].category, m2 = t3[1].icon;
    return s3.startsWith("~") || (e3[u2] = e3[u2] || { label: l2[u2].label, items: [] }, e3[u2].items.push({ key: s3, label: c3, icon: m2 })), e3;
  }, {});
  return c2 = Object.entries(c2).reduce((e3, t3) => {
    const s3 = t3[0], l3 = t3[1].label, c3 = t3[1].items;
    return e3.push({ key: s3, label: l3, items: c3 }), e3;
  }, []), c2 = naturalSort(c2, "label"), c2;
}, sortArrayByName = function(e2) {
  const t2 = e2.length;
  e2 = duplicate(e2).map((e3) => (e3.name = e3.name.toLocaleLowerCase(), e3));
  for (let s2 = 1; s2 < t2; s2++) {
    const t3 = e2[s2], l2 = t3.name;
    let c2 = s2 - 1;
    for (; c2 > -1 && l2.localeCompare(e2[c2].name, void 0, { ignorePunctuation: true }) < 0; )
      e2[c2 + 1] = e2[c2], c2--;
    e2[c2 + 1] = t3;
  }
  return e2;
}, binarySearch = function(e2, t2, s2) {
  let l2 = 0, c2 = e2.length - 1;
  for (; l2 <= c2; ) {
    const u2 = c2 + l2 >> 1, m2 = s2(t2, e2[u2]);
    if (m2 > 0)
      l2 = u2 + 1;
    else {
      if (!(m2 < 0))
        return u2;
      c2 = u2 - 1;
    }
  }
  return -l2 - 1;
};
function uniquePermutations(e2) {
  const t2 = /* @__PURE__ */ new Set();
  if (e2.length > 7)
    return console.warn("Array too large. Not attempting.", e2), false;
  for (let s2 = 0; s2 < e2.length; s2 += 1) {
    const l2 = uniquePermutations(e2.slice(0, s2).concat(e2.slice(s2 + 1)));
    if (l2.length)
      for (let c2 = 0; c2 < l2.length; c2 += 1)
        t2.add([e2[s2]].concat(l2[c2]));
    else
      t2.add([e2[s2]]);
  }
  return [...t2];
}
const findInCompendia = function(e2, t2 = { packs: [], type: void 0 }) {
  let s2, l2, c2, u2;
  s2 = t2?.packs && t2.packs.length ? t2.packs.flatMap((e3) => game.packs.get(e3) ?? []) : game.packs.filter((e3) => !t2?.type || e3.metadata.type == t2.type), e2 = e2.toLocaleLowerCase();
  for (const t3 of s2)
    if (t3.fuzzyIndex || (t3.fuzzyIndex = sortArrayByName([...t3.index])), l2 = binarySearch(t3.fuzzyIndex, e2, (e3, t4) => e3.localeCompare(t4.name, void 0, { ignorePunctuation: true })), l2 > -1) {
      c2 = t3.index.get(t3.fuzzyIndex[l2]._id), u2 = t3;
      break;
    }
  if (c2)
    return { pack: u2, index: c2 };
  let m2 = uniquePermutations(e2.split(/[ _-]/));
  m2 ? m2 = m2.map((e3) => e3.join(" ")) : (m2 = [null], m2.push(e2.split(/[ _-]/).reverse().join(" ")), m2.push(e2.split(/[,;] ?/).reverse().flatMap((e3) => e3.split(" ")).join(" ")));
  for (const e3 of s2) {
    for (let t3 = 1; t3 < m2.length; t3++)
      if (l2 = binarySearch(e3.fuzzyIndex, m2[t3], (e4, t4) => e4.localeCompare(t4.name, void 0, { ignorePunctuation: true })), l2 > -1) {
        c2 = e3.index.get(e3.fuzzyIndex[l2]._id), u2 = e3;
        break;
      }
    if (c2)
      break;
  }
  return !!c2 && { pack: u2, index: c2 };
};
const splitCurrency = (e2) => {
  const t2 = Math.floor(e2 / 100), s2 = Math.floor(e2 / 10) - 10 * t2;
  return e2 = e2 - 100 * t2 - 10 * s2, { gil: Math.max(0, t2), sgil: Math.max(0, s2), cgil: Math.max(0, e2) };
}, getFirstActiveGM = function() {
  return game.users.filter((e2) => e2.active && e2.isGM).sort((e2, t2) => t2.id - e2.id)[0];
};
function calculateRange(e2, t2 = "ft", s2 = {}) {
  if (null == t2)
    return null;
  const l2 = function(e3, t3 = "ft", s3 = {}) {
    switch (t3) {
      case "melee":
      case "touch":
        return getProperty(s3, "range.melee") ?? 0;
      case "reach":
        return getProperty(s3, "range.reach") ?? 0;
      case "close":
        return RollFFD20.safeRoll(CONFIG.FFD20.spellRangeFormulas.close, s3).total;
      case "medium":
        return RollFFD20.safeRoll(CONFIG.FFD20.spellRangeFormulas.medium, s3).total;
      case "long":
        return RollFFD20.safeRoll(CONFIG.FFD20.spellRangeFormulas.long, s3).total;
      case "mi":
        return 5280 * RollFFD20.safeRoll(e3, s3).total;
      default:
        return RollFFD20.safeRoll(e3, s3).total;
    }
  }(e2, t2, s2);
  return convertDistance(l2)[0];
}
function refreshActors(e2 = { renderOnly: false, renderForEveryone: false }) {
  game.actors.contents.forEach((t2) => {
    e2.renderOnly || t2.reset(), null != t2.sheet && t2.sheet._state > 0 && t2.sheet.render();
  }), Object.values(game.actors.tokens).forEach((t2) => {
    t2 && (e2.renderOnly || t2.reset(), null != t2.sheet && t2.sheet._state > 0 && t2.sheet.render());
  }), e2.renderForEveryone && game.socket.emit("ffd20", "refreshActorSheets");
}
function keepUpdateArray(e2, t2, s2) {
  const l2 = Object.entries(t2).filter((e3) => e3[0].startsWith(`${s2}.`));
  if (l2.length > 0) {
    const c2 = deepClone(getProperty(e2, s2) || []), u2 = (s2.match(/\./g) || []).length;
    l2.forEach((e3) => {
      const s3 = e3[0].split(".").slice(u2 + 1), l3 = s3[0], m2 = s3.slice(1).join(".");
      if (c2[l3] || (c2[l3] = {}), m2)
        if (s3[s3.length - 1].startsWith("-=")) {
          const e4 = flattenObject(c2[l3]);
          s3[s3.length - 1] = s3[s3.length - 1].slice(2);
          const t3 = Object.keys(e4).filter((e5) => e5.startsWith(s3.slice(1).join(".")));
          for (const s4 of t3)
            Object.prototype.hasOwnProperty.call(e4, s4) && delete e4[s4];
          c2[l3] = expandObject(e4);
        } else
          c2[l3] = mergeObject(c2[l3], expandObject({ [m2]: e3[1] }));
      else
        c2[l3] = e3[1];
      delete t2[e3[0]];
    }), t2[s2] = c2;
  }
}
const diffObjectAndArray = function(e2, t2, { inner: s2 = false, keepLength: l2 = false } = {}) {
  return Object.keys(t2).reduce((c2, u2) => {
    if (s2 && !(u2 in e2))
      return c2;
    const [m2, d2] = function(e3, t3) {
      const c3 = getType(e3);
      if (c3 !== getType(t3))
        return [true, t3];
      if ("Array" === c3) {
        if (e3.length !== t3.length)
          return [true, t3];
        const c4 = [];
        for (let u3 = 0; u3 < e3.length; u3++) {
          const m3 = diffObjectAndArray(e3[u3], t3[u3], { inner: s2, keepLength: l2 });
          foundry.utils.isEmpty(m3) ? l2 && c4.push({}) : c4.push(m3);
        }
        return c4.length > 0 ? [true, c4] : [false, c4];
      }
      if ("Object" === c3) {
        if (foundry.utils.isEmpty(e3) !== foundry.utils.isEmpty(t3))
          return [true, t3];
        const c4 = diffObjectAndArray(e3, t3, { inner: s2, keepLength: l2 });
        return [!foundry.utils.isEmpty(c4), c4];
      }
      return [e3 !== t3, t3];
    }(e2[u2], t2[u2]);
    return m2 && (c2[u2] = d2), c2;
  }, {});
};
function getAbilityModifier(e2 = null, t2 = {}) {
  if (null != e2) {
    const s2 = Math.abs(t2.penalty ?? 0), l2 = Math.abs(t2.damage ?? 0);
    return Math.max(-5, Math.floor((e2 - 10) / 2) - Math.floor(s2 / 2) - Math.floor(l2 / 2));
  }
  return 0;
}
const registerHandlebarsHelpers = function() {
  function actionDamage(e2, t2, s2) {
    if (!e2.hasDamage)
      return null;
    const l2 = e2.actor, c2 = e2.parent, u2 = l2?.system, m2 = e2.data, d2 = [], handleFormula = (e3, s3) => {
      const l3 = s3?.parent?.getRollData() ?? t2, c3 = RollFFD20.safeRoll(e3, l3);
      if (0 !== c3.total) {
        const e4 = function(e5, t3 = {}) {
          const s4 = [], l4 = RollFFD20.parse(function(e6) {
            return e6.replace(/\[[^\]]*]/g, "");
          }(e5), t3);
          for (const e6 of l4)
            if (e6 instanceof DiceTerm || e6 instanceof OperatorTerm)
              s4.push(e6);
            else if (e6.isDeterministic) {
              const t4 = RollFFD20.safeTotal(e6.formula);
              s4.push(...RollFFD20.parse(`${t4}`));
            } else
              s4.push(e6);
          const c4 = [];
          let u3, m3;
          for (; s4.length; ) {
            u3 = m3, m3 = s4.shift();
            const e6 = s4[0];
            if (m3 instanceof OperatorTerm) {
              if ("?" === m3.operator) {
                s4.shift();
                const t4 = s4.shift(), l5 = s4.shift(), d3 = RollFFD20.safeEval([u3.formula, m3.formula, e6.formula, t4?.formula ?? "", l5?.formula ?? ""].join(""));
                m3 = RollFFD20.parse(`${d3}`)[0], c4.pop();
              } else if (u3 instanceof NumericTerm && e6 instanceof NumericTerm) {
                const t4 = RollFFD20.safeEval([u3.formula, m3.formula, e6.formula].join(""));
                m3 = RollFFD20.parse(`${t4}`)[0], c4.pop(), s4.shift();
              }
            }
            c4.push(m3);
          }
          return RollFFD20.simplifyTerms(c4).map((e6) => e6.formula).join("");
        }(c3.formula);
        d2.push(e4);
      }
    }, handleParts = (e3) => e3.forEach(([e4, t3]) => handleFormula(e4));
    handleParts(m2.damage.parts);
    const h2 = m2.ability.damage, p2 = Math.floor((u2?.abilities[h2]?.mod ?? 0) * (m2.ability.damageMult || 1));
    return 0 != p2 && d2.push(p2), handleParts(m2.damage.nonCritParts), c2.getAllDamageSources(e2.id)?.forEach((e3) => handleFormula(e3.formula, e3)), 0 === d2.length && d2.push("NaN"), d2.join("+").replace(/\s+/g, "").replace(/\+-/, "-").replace(/--/g, "+").replace(/\+\++/, "+");
  }
  Handlebars.registerHelper("convertDistance", (e2) => Number.isFinite(e2) ? convertDistance(e2)[0] : e2), Handlebars.registerHelper("distanceUnit", (e2) => convertDistance(0, e2)[1]), Handlebars.registerHelper("itemRange", (e2, t2) => {
    if (!e2.document?.firstAction?.hasRange)
      return null;
    const s2 = e2.document.firstAction, l2 = s2.data.range.value, c2 = s2.data.range.units;
    if (null == c2)
      return null;
    const u2 = calculateRange(l2, c2, t2);
    if (u2 && "string" != typeof u2) {
      return `${u2} ${convertDistance(l2)[1]}`;
    }
    return "" + (u2 ?? "");
  }), Handlebars.registerHelper("actionDamage", actionDamage), Handlebars.registerHelper("damageTypes", (e2) => {
    const t2 = [], { custom: s2, values: l2 } = e2;
    return s2 && t2.push(s2), l2.forEach((e3) => t2.push(game.i18n.localize(ffd20.registry.damageTypes.get(e3)?.name ?? "FFD20.Undefined"))), t2.join(", ");
  }), Handlebars.registerHelper("itemDamage", (e2, t2) => {
    console.warn("{{itemDamage}} handlebars helper is deprecated, use {{actionDamage}} instead");
    const s2 = e2.document?.firstAction;
    return actionDamage(s2, t2);
  }), Handlebars.registerHelper("itemAttacks", (e2) => {
    const t2 = e2.document.attackArray, s2 = Math.max(...t2);
    return `${t2.length} (${s2 < 0 ? s2 : `+${s2}`}${t2.length > 1 ? "/…" : ""})`;
  }), Handlebars.registerHelper("optionalConditionals", (e2) => e2.firstAction?.data.conditionals.find((e3) => !e3.default)), Handlebars.registerHelper("abilityMod", (e2, t2, s2) => Math.floor(t2.abilities[e2]?.mod * s2)), Handlebars.registerHelper("hasContextNotes", (e2, t2) => !!e2.getContextNotes(t2).find((e3) => e3.notes.length)), Handlebars.registerHelper("contextNotes", (e2, t2, s2) => {
    const l2 = s2.data.root.rollData, c2 = e2.getContextNotes(t2);
    return e2.formatContextNotes(c2, l2);
  }), Handlebars.registerHelper("enrich", (e2, t2) => {
    const s2 = Boolean(t2.hash.owner), l2 = t2.hash.rollData;
    return new Handlebars.SafeString(TextEditor.enrichHTML(e2, { secrets: s2, rollData: l2, async: false }));
  }), Handlebars.registerHelper("json-string", (e2) => new Handlebars.SafeString(escape(JSON.stringify(e2)))), Handlebars.registerHelper("halfNumber", (e2) => (e2 = "number" == typeof e2 ? e2 : parseFloat(e2), new Handlebars.SafeString(Math.floor(e2 / 2).toString()))), Handlebars.registerHelper("arrayHas", (e2) => {
    const t2 = e2.hash.array, s2 = e2.hash.value;
    return t2.includes(s2);
  });
}, tinyMCEInit = function() {
  CONFIG.TinyMCE.content_css.push("/systems/ffd20/ui/mce.css"), CONFIG.TinyMCE.style_formats[0].items.push({ title: game.i18n.localize("FFD20.NotImplemented"), inline: "span", classes: "notImp", attributes: { title: game.i18n.localize("FFD20.NotImplemented") }, remove: "all" }, { title: game.i18n.localize("FFD20.StepsRequired"), inline: "span", classes: "needSteps", attributes: { title: game.i18n.localize("FFD20.StepsRequired") }, remove: "all" }), CONFIG.TinyMCE.formats = Object.assign({}, CONFIG.TinyMCE.formats, { removeFormat: [{ selector: "span", classes: "notImp,needSteps", remove: "all" }] }), tinyMCE.on("addeditor", (e2) => {
    !function(e3) {
      const isInfoElement = function(e4) {
        return "span" !== e4.nodeName.toLowerCase() && (e4 = e4.parentNode), "span" === e4.nodeName.toLowerCase() && (e4.classList.contains("notImp") || e4.classList.contains("needSteps"));
      }, getInfoElement = function() {
        const t2 = e3.selection.getNode();
        return isInfoElement(t2) ? t2.closest("span.notImp,span.needSteps") : null;
      };
      e3.ui.registry.addContextForm("info-form", { launch: { type: "contextformtogglebutton", icon: "warning" }, label: "Info", predicate: isInfoElement, initValue: function() {
        const e4 = getInfoElement();
        return e4 ? e4.title : "";
      }, commands: [{ type: "contextformtogglebutton", icon: "warning", tooltip: game.i18n.localize("FFD20.NotImplemented"), onSetup: function(t2) {
        t2.setActive(!!getInfoElement()?.classList.contains("notImp"));
        const nodeChangeHandler = function() {
          t2.setActive(!e3.readonly && getInfoElement()?.classList.contains("notImp"));
        };
        return e3.on("nodechange", nodeChangeHandler), function() {
          e3.off("nodechange", nodeChangeHandler);
        };
      }, onAction: function(t2) {
        const s2 = t2.getValue(), l2 = getInfoElement();
        e3.setDirty(true), e3.dom.setAttribs(l2, { title: s2, class: "notImp" }), t2.hide();
      } }, { type: "contextformtogglebutton", icon: "selected", tooltip: game.i18n.localize("FFD20.StepsRequired"), onSetup: function(t2) {
        t2.setActive(!!getInfoElement()?.classList.contains("needSteps"));
        const nodeChangeHandler = function() {
          t2.setActive(!e3.readonly && getInfoElement()?.classList.contains("needSteps"));
        };
        return e3.on("nodechange", nodeChangeHandler), function() {
          e3.off("nodechange", nodeChangeHandler);
        };
      }, onAction: function(t2) {
        const s2 = t2.getValue(), l2 = getInfoElement();
        e3.setDirty(true), e3.dom.setAttribs(l2, { title: s2, class: "needSteps" }), t2.hide();
      } }, { type: "contextformtogglebutton", icon: "close", tooltip: game.i18n.localize("FFD20.RemoveInfo"), onAction: function(t2) {
        const s2 = getInfoElement();
        e3.setDirty(true), e3.dom.remove(s2, true), t2.hide();
      } }] });
    }(e2.editor);
  });
};
const measureDistances = function(e2, t2 = {}) {
  if (!t2.gridSpaces)
    return BaseGrid.prototype.measureDistances.call(this, e2, t2);
  const s2 = this.parent.diagonalRule, l2 = { diagonals: 0 };
  return e2.map((e3) => measureDistance(null, null, { ray: e3.ray, diagonalRule: s2, state: l2 }));
}, getConditions = function() {
  const e2 = CONFIG.statusEffects;
  let t2 = Object.keys(CONFIG.FFD20.conditions).map((e3) => ({ id: e3, label: CONFIG.FFD20.conditions[e3], icon: CONFIG.FFD20.conditionTextures[e3] }));
  return game.settings.get("ffd20", "coreEffects") ? t2.push(...e2) : t2 = [e2[0]].concat(t2), t2.sort((e3, t3) => e3.label.localeCompare(t3.label));
}, c = TokenHUD.prototype._getStatusEffectChoices;
TokenHUD.prototype._getStatusEffectChoices = function() {
  const e2 = c.call(this), t2 = {};
  return this.object.actor?._calcBuffActiveEffects && Object.values(this.object.actor._calcBuffActiveEffects()).forEach((e3, s2) => {
    const l2 = e3;
    t2[l2.icon] && l2.label && (l2.icon += "?" + s2), l2 && (t2[l2.icon] = { id: l2.id, title: l2.label, src: l2.icon, isActive: l2.active, isOverlay: false, cssClass: l2.active ? "active" : "" });
  }), Object.assign({}, e2, t2);
}, TokenHUD.prototype._onToggleEffect = function(e2, { overlay: t2 = false } = {}) {
  e2.preventDefault();
  const s2 = e2.currentTarget, l2 = s2.dataset.statusId && this.object.actor ? CONFIG.statusEffects.find((e3) => e3.id === s2.dataset.statusId) ?? s2.dataset.statusId : s2.getAttribute("src");
  return this.object.toggleEffect(l2, { overlay: t2 });
};
const u = Object.freeze(Object.defineProperty({ __proto__: null, measureDistances, getConditions }, Symbol.toStringTag, { value: "Module" }));
class TemplateLayerFFD20 extends TemplateLayer {
  async _onDragLeftStart(e2) {
    if (!game.settings.get("ffd20", "measureStyle"))
      return super._onDragLeftStart(e2);
    const t2 = duplicate(e2.data.origin);
    await PlaceablesLayer.prototype._onDragLeftStart.call(this, e2);
    const s2 = game.activeTool, { originalEvent: l2 } = e2.data;
    if (!l2.shiftKey) {
      const e3 = canvas.grid.getSnappedPosition(t2.x, t2.y, this.gridPrecision);
      t2.x = e3.x, t2.y = e3.y;
    }
    const c2 = { user: game.user.id, t: s2, x: t2.x, y: t2.y, distance: 1, direction: 0, fillColor: game.user.color || "#FF0000" }, u2 = CONFIG.MeasuredTemplate.defaults;
    "cone" === s2 ? c2.angle = u2.angle : "ray" === s2 && (c2.width = u2.width * canvas.dimensions.distance);
    const m2 = new CONFIG.MeasuredTemplate.documentClass(c2, { parent: canvas.scene }), d2 = new CONFIG.MeasuredTemplate.objectClass(m2);
    return e2.data.preview = this.preview.addChild(d2), d2.draw();
  }
  _onDragLeftMove(e2) {
    if (!game.settings.get("ffd20", "measureStyle"))
      return super._onDragLeftMove(e2);
    const { destination: t2, createState: s2, preview: l2, origin: c2 } = e2.data;
    if (0 === s2)
      return;
    const { originalEvent: u2 } = e2.data, m2 = !u2.shiftKey;
    m2 && (e2.data.destination = canvas.grid.getSnappedPosition(t2.x, t2.y, 2));
    const d2 = new Ray(c2, t2), h2 = canvas.dimensions.distance, p2 = canvas.dimensions.size / h2, g2 = l2.document.t, y2 = canvas.dimensions.distance, F2 = Math.normalizeDegrees(Math.toDegrees(d2.angle));
    if (m2 && ["cone", "circle"].includes(g2)) {
      const e3 = CONFIG.MeasuredTemplate.defaults.angle / 2;
      l2.document.direction = Math.floor((F2 + e3 / 2) / e3) * e3;
    } else
      l2.document.direction = m2 && "ray" === g2 ? Math.floor((F2 + y2 / 2) / y2) * y2 : F2;
    const D2 = d2.distance / p2;
    m2 && ["cone", "circle", "ray"].includes(g2) ? l2.document.distance = Math.floor(D2 / h2) * h2 : l2.document.distance = D2, l2.refresh(), e2.data.createState = 2;
  }
}
class MeasuredTemplateFFD20 extends MeasuredTemplate {
  getHighlightedSquares() {
    if (!game.settings.get("ffd20", "measureStyle") || !["circle", "cone", "ray"].includes(this.document.t))
      return [];
    const e2 = canvas.grid, t2 = canvas.dimensions;
    if (!this.id || !this.shape)
      return [];
    if ("ray" === this.document.t) {
      const e3 = [], s3 = t2.size, line = function(t3, l4, c3, u3) {
        t3 = Math.floor(Math.floor(t3) / s3), c3 = Math.floor(Math.floor(c3) / s3), l4 = Math.floor(Math.floor(l4) / s3), u3 = Math.floor(Math.floor(u3) / s3);
        const m3 = Math.abs(c3 - t3), d3 = Math.abs(u3 - l4), h3 = t3 < c3 ? 1 : -1, p3 = l4 < u3 ? 1 : -1;
        let g3 = m3 - d3;
        for (; t3 !== c3 || l4 !== u3; ) {
          e3.push({ x: t3 * s3, y: l4 * s3 });
          const c4 = g3 << 1;
          c4 > -d3 && (g3 -= d3, t3 += h3), c4 < m3 && (g3 += m3, l4 += p3);
        }
      }, l3 = Ray.fromAngle(this.ray.A.x, this.ray.A.y, this.ray.angle, this.ray.distance + s3 / 2);
      return line(l3.A.x, l3.A.y, l3.B.x, l3.B.y), e3;
    }
    const s2 = Math.ceil(1.5 * this.document.distance / t2.distance / (t2.size / e2.h)), l2 = Math.ceil(1.5 * this.document.distance / t2.distance / (t2.size / e2.w)), c2 = this.document.x, u2 = this.document.y, [m2, d2] = e2.getCenter(c2, u2), [h2, p2] = e2.grid.getGridPositionFromPixels(m2, d2), g2 = (360 + (this.document.direction - 0.5 * this.document.angle) % 360) % 360, y2 = (360 + (this.document.direction + 0.5 * this.document.angle) % 360) % 360, F2 = { x: 0, y: 0 };
    if ("cone" === this.document.t) {
      const e3 = (this.document.direction >= 0 ? 360 - this.document.direction : -this.document.direction) % 360, s3 = this.document.x % t2.size != 0 ? Math.sign(1 * Math.round(100 * Math.cos(degtorad(e3))) / 100) / 2 : 0, l3 = this.document.y % t2.size != 0 ? -Math.sign(1 * Math.round(100 * Math.sin(degtorad(e3))) / 100) / 2 : 0;
      F2.x = s3, F2.y = l3;
    }
    const D2 = [];
    for (let e3 = -l2; e3 < l2; e3++)
      for (let l3 = -s2; l3 < s2; l3++) {
        const [s3, c3] = canvas.grid.grid.getPixelsFromGridPosition(h2 + e3, p2 + l3), [u3, m3] = [s3 + 0.5 * t2.size, c3 + 0.5 * t2.size], d3 = { x: this.document.x, y: this.document.y };
        d3.x += F2.x * t2.size, d3.y += F2.y * t2.size;
        const T2 = new Ray(d3, { x: u3, y: m3 }), S2 = (360 + T2.angle / (Math.PI / 180) % 360) % 360;
        if ("cone" === this.document.t && T2.distance > 0 && (C2 = (360 + (C2 = S2) % 360) % 360, !((k2 = (360 + (k2 = g2) % 360) % 360) < (v = (360 + (v = y2) % 360) % 360) ? C2 >= k2 && C2 <= v : C2 >= k2 || C2 <= v)))
          continue;
        measureDistance({ x: u3, y: m3 }, d3) <= this.document.distance && D2.push({ x: s3, y: c3 });
      }
    var k2, v, C2;
    return D2;
  }
  getTokensWithin() {
    const e2 = this.getHighlightedSquares(), t2 = canvas.dimensions, inRect = function(e3, t3) {
      return e3.x >= t3.x && e3.x < t3.x + t3.width && e3.y >= t3.y && e3.y < t3.y + t3.height;
    }, s2 = [];
    for (const l2 of e2)
      for (const e3 of canvas.tokens.placeables) {
        if (s2.includes(e3))
          continue;
        const c2 = { x: Math.round(e3.document.x / t2.size), y: Math.round(e3.document.y / t2.size), width: e3.document.width, height: e3.document.height };
        inRect({ x: Math.round(l2.x / t2.size), y: Math.round(l2.y / t2.size) }, c2) && s2.push(e3);
      }
    return s2;
  }
  highlightGrid() {
    if (!game.settings.get("ffd20", "measureStyle") || !["circle", "cone", "ray"].includes(this.document.t) || canvas.grid.type !== CONST.GRID_TYPES.SQUARE)
      return super.highlightGrid();
    const e2 = canvas.grid, t2 = this.borderColor, s2 = this.fillColor;
    if (!this.id || !this.shape)
      return;
    const l2 = this.getHighlightLayer();
    if (l2.clear(), !this.isVisible)
      return;
    const c2 = this.getHighlightedSquares();
    for (const u2 of c2)
      e2.grid.highlightGridPosition(l2, { x: u2.x, y: u2.y, color: s2, border: t2 });
  }
  getHighlightLayer() {
    return canvas.grid.getHighlightLayer(this.highlightId);
  }
}
Hooks.on("getActorDirectoryEntryContext", function(e2, t2) {
  t2.push({ name: "FFD20.Vision", icon: '<i class="fas fa-eye"></i>', condition: (e3) => game.user.isGM, callback: (e3) => {
    const t3 = game.actors.get(e3.data("documentId"));
    if (t3) {
      const e4 = t3.visionPermissionSheet;
      e4.rendered ? e4._minimized ? e4.maximize() : e4.close() : e4.render(true);
    }
  } });
});
class VisionPermissionSheet extends FormApplication {
  constructor(e2, t2) {
    super(e2, t2), this.object.apps[this.appId] = this;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["sheet", "vision-permission"], template: "systems/ffd20/templates/apps/vision-permission.hbs", width: 300, height: "auto", closeOnSubmit: true, submitOnClose: false, submitOnChange: false });
  }
  get title() {
    return this.token && !this.token.data.actorLink ? `Vision Permissions: [Token] ${this.object.name}` : `Vision Permissions: ${this.object.name}`;
  }
  get isLinkedToken() {
    return !!this.token && this.token.data.actorLink;
  }
  async _updateObject(e2, t2) {
    await this.object.setFlag("ffd20", "visionPermission", t2), game.socket.emit("system.ffd20", { eventType: "redrawCanvas" });
  }
  async getData() {
    let e2 = super.getData();
    return e2 = mergeObject(e2, this.object.getFlag("ffd20", "visionPermission")), e2.users = e2.users || {}, e2.defaultLevels = [{ level: "no", name: game.i18n.localize("FFD20.No") }, { level: "yes", name: game.i18n.localize("FFD20.Yes") }], e2.levels = [{ level: "default", name: game.i18n.localize("FFD20.Default") }, ...e2.defaultLevels], null == e2.default && (e2.default = "no"), e2.users = game.users.reduce((t2, s2) => (s2.isGM || (t2[s2.id] = { user: s2, level: e2.users[s2.id]?.level || "default", hidden: false }), t2), {}), e2;
  }
}
class ActorBaseFFD20 extends Actor {
  constructor(e2, t2 = {}) {
    if (t2.ffd20?.subtyped)
      super(e2, t2);
    else if (e2.type) {
      const s2 = { ffd20: { subtyped: true } }, l2 = CONFIG.Actor.documentClasses[e2.type] ?? CONFIG.Actor.documentClasses.default;
      return l2 || console.warn(e2?.type, e2.type), new l2(e2, { ...s2, ...t2 });
    }
  }
  get visionPermissionSheet() {
    return this._visionPermissionSheet || (this._visionPermissionSheet = new VisionPermissionSheet(this)), this._visionPermissionSheet;
  }
}
class ChatMessageFFD20 extends ChatMessage {
  static _initRollObject(e2) {
    if (Array.isArray(e2))
      return e2.map((e3) => this._initRollObject(e3));
    if (null != e2 && "object" == typeof e2 && "class" in e2)
      return Roll.fromData(e2);
    if ("object" == typeof e2 && null != e2)
      for (const [t2, s2] of Object.entries(e2))
        e2[t2] = this._initRollObject(s2);
    return e2;
  }
  get isRoll() {
    return this.type === CONST.CHAT_MESSAGE_TYPES.ROLL || this.getFlag("ffd20", "noRollRender");
  }
  get itemSource() {
    const e2 = this.flags?.ffd20?.metadata?.item;
    if (e2) {
      return this.constructor.getSpeakerActor(this.speaker)?.items.get(e2);
    }
    return null;
  }
  get hasItemSource() {
    return void 0 !== this.flags?.ffd20?.metadata?.item;
  }
  get measureTemplate() {
    const e2 = this.system.flags?.ffd20?.metadata?.template;
    if (!e2)
      return null;
    return canvas.templates.get(e2) || null;
  }
  get targets() {
    const e2 = this.system.flags?.ffd20?.metadata?.targets ?? [];
    return canvas.tokens.placeables.filter((t2) => e2.includes(t2.id));
  }
  prepareDerivedData() {
    super.prepareDerivedData(), this.systemRolls = this.constructor._initRollObject(this.flags?.ffd20?.metadata?.rolls ?? {});
  }
}
const customRolls = function(e2, t2, s2) {
  if (e2.match(/^\/(\w+)(?: +([^#]+))(?:#(.+))?/)) {
    const e3 = RegExp.$1?.toUpperCase(), l2 = RegExp.$2, c2 = RegExp.$3, u2 = CONFIG.ChatMessage.documentClass;
    t2 = t2 ?? u2.getSpeaker();
    const m2 = u2.getSpeakerActor(t2), d2 = (t2.scene ? game.scenes.get(t2.scene) : canvas.scene)?.tokens.get(t2.token), h2 = d2?.uuid;
    switch (e3) {
      case "D":
      case "DAMAGE":
      case "H":
      case "HEAL":
        s2 = s2 ?? m2?.getRollData() ?? {};
        return Roll.create(l2, s2).roll().then(async (s3) => {
          s3.total;
          const l3 = "HEAL" === e3 || "H" === e3, m3 = await renderTemplate("systems/ffd20/templates/chat/simple-damage.hbs", { tokenId: h2, isHealing: l3, css: l3 ? "heal" : "damage", roll: s3 }), d3 = { type: CONST.CHAT_MESSAGE_TYPES.ROLL, roll: s3, flavor: c2, speaker: t2, rollMode: game.settings.get("core", "rollMode"), content: m3, flags: { ffd20: { subject: { health: l3 ? "healing" : "damage" } } } };
          u2.create(d3);
        });
    }
  }
  return false;
}, callOldNamespaceHook = (e2, t2, s2, ...l2) => (Hooks.events[e2]?.length > 0 && foundry.utils.logCompatibilityWarning(`This usage of the ${e2} hook has been deprecated in favor of ${t2}.`, { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), false !== s2 && Hooks.call(e2, ...l2)), callOldNamespaceHookAll = (e2, t2, ...s2) => (Hooks.events[e2]?.length > 0 && foundry.utils.logCompatibilityWarning(`This usage of the ${e2} hook has been deprecated in favor of ${t2}.`, { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), Hooks.callAll(e2, ...s2));
class D20RollFFD20 extends RollFFD20 {
  options;
  constructor(e2, t2, s2 = {}) {
    if (super(e2, t2, s2), this.options = mergeObject(this.constructor.defaultOptions, s2), !(this.terms[0] instanceof Die)) {
      if (!(this.terms[0] instanceof NumericTerm && null === this.options.staticRoll))
        throw new Error(`Invalid D20RollFFD20 formula provided: ${this._formula}`);
      this.options.staticRoll = this.terms[0].total, this.terms[0] = new Die({ number: 1, faces: 20 }), this._formula = this.constructor.getFormula(this.terms);
    }
  }
  static get defaultOptions() {
    return { critical: 20, fumble: 1, flavor: "", staticRoll: null, bonus: "" };
  }
  static DIALOG_TEMPLATE = "systems/ffd20/templates/chat/roll-dialog.hbs";
  static CHAT_TEMPLATE = "systems/ffd20/templates/chat/roll-ext.hbs";
  static STATIC_ROLL = { TEN: 10, TWENTY: 20 };
  get isCrit() {
    if (this._evaluated)
      return !!Number.isNumeric(this.options.critical) && this.dice[0].total >= this.options.critical;
  }
  get isFumble() {
    if (this._evaluated)
      return !!Number.isNumeric(this.options.fumble) && this.dice[0].total <= this.options.fumble;
  }
  get isNat20() {
    if (this._evaluated)
      return 20 === this.dice[0].total;
  }
  get formula() {
    let e2 = this.constructor.getFormula(this.terms);
    const t2 = this.constructor.parse(`${this.options.bonus}`, this.data);
    return this.options.bonus && !this._evaluated && (e2 += ` + ${this.constructor.getFormula(t2)}`), e2;
  }
  async promptDialog(e2 = {}) {
    const { rollMode: t2 = game.settings.get("core", "rollMode"), template: s2 = this.constructor.DIALOG_TEMPLATE } = e2, l2 = null === this.options.staticRoll ? this.terms[0].formula : this.options.staticRoll, c2 = { data: this.data, rollMode: e2.rollMode || t2, rollModes: CONFIG.Dice.rollModes, d20: "1d20" === l2 ? "" : l2, bonus: this.options.bonus }, u2 = e2.dialogOptions || {};
    u2.subject = e2.subject;
    const m2 = await renderTemplate(s2, c2);
    return new Promise((t3) => {
      new Dialog({ title: e2.title || game.i18n.localize("FFD20.Roll"), content: m2, buttons: { normal: { label: game.i18n.localize("FFD20.Normal"), callback: (e3) => t3(this._onDialogSubmit(e3, null)) }, takeTen: { label: game.i18n.format("FFD20.TakeX", { number: this.constructor.STATIC_ROLL.TEN }), callback: (e3) => t3(this._onDialogSubmit(e3, this.constructor.STATIC_ROLL.TEN)) }, takeTwenty: { label: game.i18n.format("FFD20.TakeX", { number: this.constructor.STATIC_ROLL.TWENTY }), callback: (e3) => t3(this._onDialogSubmit(e3, this.constructor.STATIC_ROLL.TWENTY)) } }, default: "normal", close: () => {
        t3(null);
      } }, u2).render(true);
    });
  }
  _onDialogSubmit(e2, t2) {
    e2 instanceof jQuery && (e2 = e2[0]);
    const s2 = e2.querySelector("form");
    if (s2) {
      if (s2.bonus.value && (this.options.bonus = s2.bonus.value), s2.d20.value) {
        const e3 = this.constructor.parse(s2.d20.value, this.data);
        e3[0] instanceof NumericTerm ? this.options.staticRoll = e3[0].total : e3[0] instanceof Die && (this.terms = [...e3, ...this.terms.slice(1)], void 0 !== t2 && (this.options.staticRoll = t2));
      } else
        void 0 !== t2 && (this.options.staticRoll = t2);
      s2.rollMode && (this.options.rollMode = s2.rollMode.value), this._formula = this.constructor.getFormula(this.terms);
    }
    return this;
  }
  async toMessage(e2 = {}, t2 = {}) {
    this._evaluated || await this.evaluate({ async: true });
    const s2 = t2.chatTemplate || this.constructor.CHAT_TEMPLATE, l2 = mergeObject({ user: game.user.id, formula: this.formula, tooltip: await this.getTooltip(), total: this.total, isCrit: this.isCrit, isFumble: this.isFumble, isNat20: this.isNat20, flavor: this.options.flavor, compendiumEntry: t2.compendium?.entry, compendiumEntryType: t2.compendium?.type }, t2.chatTemplateData || {}), c2 = t2.rollMode || this.options.rollMode || game.settings.get("core", "rollMode");
    (e2 = foundry.utils.mergeObject({ user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.ROLL, sound: t2.noSound ? void 0 : CONFIG.sounds.dice, content: await renderTemplate(s2, l2), "flags.ffd20.noRollRender": true }, e2)).rolls = [this], t2.subject && foundry.utils.setProperty(e2, "flags.ffd20.subject", t2.subject);
    const u2 = CONFIG.ChatMessage.documentClass, m2 = new u2(e2), d2 = m2.toObject();
    return t2.create ?? true ? u2.create(m2, { rollMode: c2 }) : (c2 && u2.applyRollMode(d2, c2), d2);
  }
  async _evaluate(e2) {
    return this._applyBonus(), await super._evaluate(e2), this._applyStaticRoll(), this;
  }
  _evaluateSync(e2) {
    return this._applyBonus(), super._evaluateSync(e2), this._applyStaticRoll(), this;
  }
  _applyBonus() {
    if (this.options.bonus) {
      const e2 = this.constructor.parse(`${this.options.bonus}`, this.data);
      e2[0] instanceof OperatorTerm || e2.unshift(new OperatorTerm({ operator: "+" })), this.terms = this.terms.concat(...e2), this._formula = this.constructor.getFormula(this.terms);
    }
  }
  _applyStaticRoll() {
    if (!this._evaluated)
      throw new Error("Roll must be evaluated before applying static roll.");
    if (null !== this.options.staticRoll && this.options.staticRoll >= 0) {
      const e2 = this.options.staticRoll - this.dice[0].total, t2 = this._total + e2, s2 = this.dice[0].results.find((e3) => e3.active) ?? this.dice[0].results[0];
      s2.result = this.options.staticRoll, this._total = t2, this.options.flavor += ` (${game.i18n.format("FFD20.TakeX", { number: this.options.staticRoll })})`;
    }
  }
}
const formulaHasDice = function(e2) {
  return e2.match(/[0-9)][dD]/) || e2.match(/[dD][0-9(]/);
};
class DiceFFD20 {
  static async d20Roll({ event: e2, parts: t2, dice: s2 = "1d20", actor: l2, data: c2, subject: u2, template: m2, title: d2, speaker: h2, flavor: p2, takeTwenty: g2 = true, situational: y2 = true, fastForward: F2 = true, critical: D2 = 20, fumble: k2 = 1, onClose: v, dialogOptions: C2 = {}, extraRolls: T2 = [], chatTemplate: S2, chatTemplateData: I2, staticRoll: _2 = null, chatMessage: w2 = true, noSound: A2 = false, compendiumEntry: N2 = null, compendiumEntryType: O2 = null, originalOptions: x2 = {} }) {
    if (foundry.utils.logCompatibilityWarning("DiceFFD20.d20Roll has been deprecated in favor of ffd20.dice.d20Roll", { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), callOldNamespaceHookAll("ffd20.preRoll", "ffd20PreRoll", ...arguments), false === callOldNamespaceHook("ffd20PreRoll", "ffd20PreActorRoll*", void 0, ...arguments))
      return;
    p2 = p2 || d2;
    let P2 = game.settings.get("core", "rollMode"), E2 = false;
    const _roll = async (e3, t3, l3) => {
      let m3 = l3 ? l3.find('[name="d20"]').val() : s2;
      m3 || (m3 = s2), e3 = [m3].concat(e3);
      const d3 = p2;
      P2 = l3 ? l3.find('[name="rollMode"]').val() : P2;
      for (let s3 = 0; s3 < 1 + T2.length; s3++) {
        p2 = d3;
        const m4 = duplicate(e3);
        if (c2.bonus = l3 ? l3.find('[name="bonus"]').val() : 0, c2.bonus || -1 === m4.indexOf("@bonus") || m4.pop(), s3 >= 1) {
          const e4 = T2[s3 - 1];
          m4.push(e4.bonus), p2 += ` <div class="extra-roll-label">${e4.label}</div>`;
        }
        const g3 = await Roll.create(m4.join(" + "), c2).evaluate({ async: true });
        if (null != t3 && t3 >= 0) {
          const e4 = t3 - g3.dice[0].total, s4 = g3._total + e4;
          g3.terms[0].results[0].result = t3, g3._total = s4, p2 += ` (Take ${t3})`;
        }
        if (S2) {
          const e4 = g3.terms[0], t4 = mergeObject({ user: game.user.id, formula: g3.formula, tooltip: await g3.getTooltip(), total: g3.total, isCrit: e4.total >= D2, isFumble: e4.total <= k2, isNat20: 20 === e4.total, flavor: p2, compendiumEntry: N2, compendiumEntryType: O2 }, I2 || {}), l4 = { user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.ROLL, sound: A2 ? null : 0 === s3 ? CONFIG.sounds.dice : null, speaker: h2, content: await renderTemplate(S2, t4), rollMode: P2, roll: g3.toJSON(), "flags.ffd20.noRollRender": true };
          if (u2 && setProperty(l4, "flags.ffd20.subject", u2), E2 = true, w2)
            return await ChatMessageFFD20.create(l4);
        } else if (E2 = true, w2) {
          const e4 = { speaker: h2, flavor: p2, rollMode: P2, sound: 0 === s3 ? CONFIG.sounds.dice : null };
          u2 && setProperty(e4, "flags.ffd20.subject", u2), await g3.toMessage(e4);
        }
        return g3;
      }
    };
    if (true === F2)
      return _roll(t2, _2);
    t2 = t2.concat(["@bonus"]), m2 = m2 || "systems/ffd20/templates/chat/roll-dialog.hbs";
    const M2 = { data: c2, rollMode: P2, rollModes: CONFIG.Dice.rollModes, d20: "1d20" === s2 ? "" : s2 }, R2 = await renderTemplate(m2, M2);
    let L2;
    return new Promise((e3) => {
      if (C2.classes instanceof Array || (C2.classes = []), C2.classes.push("dialog", "ffd20", "die-roll"), u2) {
        C2.subject = u2;
        for (const [e4, t3] of Object.entries(u2))
          C2.classes.push(e4, `${e4}-${t3}`);
      }
      new Dialog({ title: l2 ? `${d2}: ${l2.name}` : d2, content: R2, buttons: { normal: { label: game.i18n.localize("FFD20.Normal"), callback: (s3) => e3(L2 = _roll(t2, null != _2 ? _2 : -1, s3)) }, takeTen: { label: game.i18n.localize("FFD20.Take10"), condition: g2, callback: (s3) => e3(L2 = _roll(t2, 10, s3)) }, takeTwenty: { label: game.i18n.localize("FFD20.Take20"), condition: g2, callback: (s3) => e3(L2 = _roll(t2, 20, s3)) } }, default: "normal", close: (s3) => {
        v && v(s3, t2, c2), e3(!!E2 && L2);
      } }, C2).render(true);
    });
  }
  static async damageRoll({ event: e2 = {}, parts: t2, actor: s2, data: l2, template: c2, title: u2, speaker: m2, flavor: d2, critical: h2 = true, onClose: p2, dialogOptions: g2 = {}, chatTemplate: y2, chatTemplateData: F2, chatMessage: D2 = true, noSound: k2 = false }) {
    foundry.utils.logCompatibilityWarning("DiceFFD20.damageRoll has been deprecated in favor of ffd20.dice.d20Roll", { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), d2 = d2 || u2;
    const v = game.settings.get("core", "rollMode");
    let C2 = false;
    const _roll = async (e3, s3) => {
      l2.bonus = s3 ? s3.find('[name="bonus"]').val() : 0, l2.critMult = e3 ? l2.item.ability.critMult : 1, l2.ablMult = 0, null != l2.item.ability.damageMult && (l2.ablMult = l2.item.ability.damageMult);
      const c3 = Roll.create(t2.join("+"), l2);
      if (true === e3) {
        const e4 = l2.item.ability.critMult || 2;
        c3.alter(0, e4), d2 = `${d2} (Critical)`;
      }
      if (await c3.evaluate({ async: true }), y2) {
        const e4 = mergeObject({ user: game.user.id, formula: c3.formula, tooltip: await c3.getTooltip(), total: c3.total }, F2 || {}), t3 = { user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.ROLL, sound: k2 ? null : CONFIG.sounds.dice, speaker: m2, flavor: d2, rollMode: v, roll: c3, content: await renderTemplate(y2, e4), useCustomContent: true };
        setProperty(t3, "flags.ffd20.subject.core", "damage"), ChatMessage.applyRollMode(t3, t3.rollMode), C2 = true, D2 && ChatMessageFFD20.create(t3);
      } else
        C2 = true, D2 && c3.toMessage({ speaker: m2, flavor: d2, rollMode: v });
      return c3;
    };
    if (!e2.shiftKey)
      return _roll(e2.ctrlKey);
    c2 = c2 || "systems/ffd20/templates/chat/roll-dialog.hbs";
    const T2 = { formula: (t2 = t2.concat(["@bonus"])).join(" + "), data: l2, rollMode: v, rollModes: CONFIG.Dice.rollModes }, S2 = await renderTemplate(c2, T2);
    let I2;
    return new Promise((e3) => {
      g2.classes instanceof Array || (g2.classes = []), g2.classes.push("dialog", "ffd20", "damage-roll"), new Dialog({ title: u2, content: S2, buttons: { normal: { label: h2 ? "Normal" : "Roll", callback: (e4) => I2 = _roll(false, e4) }, critical: { condition: h2, label: "Critical Hit", callback: (e4) => I2 = _roll(true, e4) } }, default: "normal", close: (s3) => {
        p2 && p2(s3, t2, l2), e3(!!C2 && I2);
      } }, g2).render(true);
    });
  }
  static messageRoll({ data: e2, msgStr: t2 }) {
    return t2.replace(/\[\[(.+)\]\]/g, (t3, s2) => RollFFD20.safeRoll(s2, e2).total.toString());
  }
}
class ItemBaseFFD20 extends Item {
  constructor(e2, t2 = {}) {
    if (t2.ffd20?.subtyped)
      super(e2, t2);
    else if (e2.type) {
      const s2 = { ffd20: { subtyped: true } }, l2 = CONFIG.Item.documentClasses[e2?.type ?? e2.type] ?? CONFIG.Item.documentClasses.default;
      return l2 || console.warn(e2?.type, e2.type), new l2(e2, { ...s2, ...t2 });
    }
  }
  get subType() {
    return null;
  }
}
function getDefaultExportFromCjs(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function getAugmentedNamespace(e2) {
  var t2 = e2.default;
  if ("function" == typeof t2) {
    var s2 = function a2() {
      if (this instanceof a2) {
        var e3 = [null];
        e3.push.apply(e3, arguments);
        var s3 = Function.bind.apply(t2, e3);
        return new s3();
      }
      return t2.apply(this, arguments);
    };
    s2.prototype = t2.prototype;
  } else
    s2 = {};
  return Object.defineProperty(s2, "__esModule", { value: true }), Object.keys(e2).forEach(function(t3) {
    var l2 = Object.getOwnPropertyDescriptor(e2, t3);
    Object.defineProperty(s2, t3, l2.get ? l2 : { enumerable: true, get: function() {
      return e2[t3];
    } });
  }), s2;
}
var m = { exports: {} }, d = { exports: {} }, isArrayish = function(e2) {
  return !(!e2 || "string" == typeof e2) && (e2 instanceof Array || Array.isArray(e2) || e2.length >= 0 && (e2.splice instanceof Function || Object.getOwnPropertyDescriptor(e2, e2.length - 1) && "String" !== e2.constructor.name));
}, h = Array.prototype.concat, p = Array.prototype.slice, g = d.exports = function(e2) {
  for (var t2 = [], s2 = 0, l2 = e2.length; s2 < l2; s2++) {
    var c2 = e2[s2];
    isArrayish(c2) ? t2 = h.call(t2, p.call(c2)) : t2.push(c2);
  }
  return t2;
};
g.wrap = function(e2) {
  return function() {
    return e2(g(arguments));
  };
};
var y = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, F = d.exports, D = Object.hasOwnProperty, k = /* @__PURE__ */ Object.create(null);
for (var v in y)
  D.call(y, v) && (k[y[v]] = v);
var C = m.exports = { to: {}, get: {} };
function clamp(e2, t2, s2) {
  return Math.min(Math.max(t2, e2), s2);
}
function hexDouble(e2) {
  var t2 = Math.round(e2).toString(16).toUpperCase();
  return t2.length < 2 ? "0" + t2 : t2;
}
C.get = function(e2) {
  var t2, s2;
  switch (e2.substring(0, 3).toLowerCase()) {
    case "hsl":
      t2 = C.get.hsl(e2), s2 = "hsl";
      break;
    case "hwb":
      t2 = C.get.hwb(e2), s2 = "hwb";
      break;
    default:
      t2 = C.get.rgb(e2), s2 = "rgb";
  }
  return t2 ? { model: s2, value: t2 } : null;
}, C.get.rgb = function(e2) {
  if (!e2)
    return null;
  var t2, s2, l2, c2 = [0, 0, 0, 1];
  if (t2 = e2.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
    for (l2 = t2[2], t2 = t2[1], s2 = 0; s2 < 3; s2++) {
      var u2 = 2 * s2;
      c2[s2] = parseInt(t2.slice(u2, u2 + 2), 16);
    }
    l2 && (c2[3] = parseInt(l2, 16) / 255);
  } else if (t2 = e2.match(/^#([a-f0-9]{3,4})$/i)) {
    for (l2 = (t2 = t2[1])[3], s2 = 0; s2 < 3; s2++)
      c2[s2] = parseInt(t2[s2] + t2[s2], 16);
    l2 && (c2[3] = parseInt(l2 + l2, 16) / 255);
  } else if (t2 = e2.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
    for (s2 = 0; s2 < 3; s2++)
      c2[s2] = parseInt(t2[s2 + 1], 0);
    t2[4] && (t2[5] ? c2[3] = 0.01 * parseFloat(t2[4]) : c2[3] = parseFloat(t2[4]));
  } else {
    if (!(t2 = e2.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))
      return (t2 = e2.match(/^(\w+)$/)) ? "transparent" === t2[1] ? [0, 0, 0, 0] : D.call(y, t2[1]) ? ((c2 = y[t2[1]])[3] = 1, c2) : null : null;
    for (s2 = 0; s2 < 3; s2++)
      c2[s2] = Math.round(2.55 * parseFloat(t2[s2 + 1]));
    t2[4] && (t2[5] ? c2[3] = 0.01 * parseFloat(t2[4]) : c2[3] = parseFloat(t2[4]));
  }
  for (s2 = 0; s2 < 3; s2++)
    c2[s2] = clamp(c2[s2], 0, 255);
  return c2[3] = clamp(c2[3], 0, 1), c2;
}, C.get.hsl = function(e2) {
  if (!e2)
    return null;
  var t2 = e2.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t2) {
    var s2 = parseFloat(t2[4]);
    return [(parseFloat(t2[1]) % 360 + 360) % 360, clamp(parseFloat(t2[2]), 0, 100), clamp(parseFloat(t2[3]), 0, 100), clamp(isNaN(s2) ? 1 : s2, 0, 1)];
  }
  return null;
}, C.get.hwb = function(e2) {
  if (!e2)
    return null;
  var t2 = e2.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);
  if (t2) {
    var s2 = parseFloat(t2[4]);
    return [(parseFloat(t2[1]) % 360 + 360) % 360, clamp(parseFloat(t2[2]), 0, 100), clamp(parseFloat(t2[3]), 0, 100), clamp(isNaN(s2) ? 1 : s2, 0, 1)];
  }
  return null;
}, C.to.hex = function() {
  var e2 = F(arguments);
  return "#" + hexDouble(e2[0]) + hexDouble(e2[1]) + hexDouble(e2[2]) + (e2[3] < 1 ? hexDouble(Math.round(255 * e2[3])) : "");
}, C.to.rgb = function() {
  var e2 = F(arguments);
  return e2.length < 4 || 1 === e2[3] ? "rgb(" + Math.round(e2[0]) + ", " + Math.round(e2[1]) + ", " + Math.round(e2[2]) + ")" : "rgba(" + Math.round(e2[0]) + ", " + Math.round(e2[1]) + ", " + Math.round(e2[2]) + ", " + e2[3] + ")";
}, C.to.rgb.percent = function() {
  var e2 = F(arguments), t2 = Math.round(e2[0] / 255 * 100), s2 = Math.round(e2[1] / 255 * 100), l2 = Math.round(e2[2] / 255 * 100);
  return e2.length < 4 || 1 === e2[3] ? "rgb(" + t2 + "%, " + s2 + "%, " + l2 + "%)" : "rgba(" + t2 + "%, " + s2 + "%, " + l2 + "%, " + e2[3] + ")";
}, C.to.hsl = function() {
  var e2 = F(arguments);
  return e2.length < 4 || 1 === e2[3] ? "hsl(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%)" : "hsla(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%, " + e2[3] + ")";
}, C.to.hwb = function() {
  var e2 = F(arguments), t2 = "";
  return e2.length >= 4 && 1 !== e2[3] && (t2 = ", " + e2[3]), "hwb(" + e2[0] + ", " + e2[1] + "%, " + e2[2] + "%" + t2 + ")";
}, C.to.keyword = function(e2) {
  return k[e2.slice(0, 3)];
};
const T = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, S = {};
for (const e2 of Object.keys(T))
  S[T[e2]] = e2;
const I = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
var _ = I;
for (const e2 of Object.keys(I)) {
  if (!("channels" in I[e2]))
    throw new Error("missing channels property: " + e2);
  if (!("labels" in I[e2]))
    throw new Error("missing channel labels property: " + e2);
  if (I[e2].labels.length !== I[e2].channels)
    throw new Error("channel and label counts mismatch: " + e2);
  const { channels: t2, labels: s2 } = I[e2];
  delete I[e2].channels, delete I[e2].labels, Object.defineProperty(I[e2], "channels", { value: t2 }), Object.defineProperty(I[e2], "labels", { value: s2 });
}
I.rgb.hsl = function(e2) {
  const t2 = e2[0] / 255, s2 = e2[1] / 255, l2 = e2[2] / 255, c2 = Math.min(t2, s2, l2), u2 = Math.max(t2, s2, l2), m2 = u2 - c2;
  let d2, h2;
  u2 === c2 ? d2 = 0 : t2 === u2 ? d2 = (s2 - l2) / m2 : s2 === u2 ? d2 = 2 + (l2 - t2) / m2 : l2 === u2 && (d2 = 4 + (t2 - s2) / m2), d2 = Math.min(60 * d2, 360), d2 < 0 && (d2 += 360);
  const p2 = (c2 + u2) / 2;
  return h2 = u2 === c2 ? 0 : p2 <= 0.5 ? m2 / (u2 + c2) : m2 / (2 - u2 - c2), [d2, 100 * h2, 100 * p2];
}, I.rgb.hsv = function(e2) {
  let t2, s2, l2, c2, u2;
  const m2 = e2[0] / 255, d2 = e2[1] / 255, h2 = e2[2] / 255, p2 = Math.max(m2, d2, h2), g2 = p2 - Math.min(m2, d2, h2), diffc = function(e3) {
    return (p2 - e3) / 6 / g2 + 0.5;
  };
  return 0 === g2 ? (c2 = 0, u2 = 0) : (u2 = g2 / p2, t2 = diffc(m2), s2 = diffc(d2), l2 = diffc(h2), m2 === p2 ? c2 = l2 - s2 : d2 === p2 ? c2 = 1 / 3 + t2 - l2 : h2 === p2 && (c2 = 2 / 3 + s2 - t2), c2 < 0 ? c2 += 1 : c2 > 1 && (c2 -= 1)), [360 * c2, 100 * u2, 100 * p2];
}, I.rgb.hwb = function(e2) {
  const t2 = e2[0], s2 = e2[1];
  let l2 = e2[2];
  const c2 = I.rgb.hsl(e2)[0], u2 = 1 / 255 * Math.min(t2, Math.min(s2, l2));
  return l2 = 1 - 1 / 255 * Math.max(t2, Math.max(s2, l2)), [c2, 100 * u2, 100 * l2];
}, I.rgb.cmyk = function(e2) {
  const t2 = e2[0] / 255, s2 = e2[1] / 255, l2 = e2[2] / 255, c2 = Math.min(1 - t2, 1 - s2, 1 - l2);
  return [100 * ((1 - t2 - c2) / (1 - c2) || 0), 100 * ((1 - s2 - c2) / (1 - c2) || 0), 100 * ((1 - l2 - c2) / (1 - c2) || 0), 100 * c2];
}, I.rgb.keyword = function(e2) {
  const t2 = S[e2];
  if (t2)
    return t2;
  let s2, l2 = 1 / 0;
  for (const t3 of Object.keys(T)) {
    const m2 = (u2 = T[t3], ((c2 = e2)[0] - u2[0]) ** 2 + (c2[1] - u2[1]) ** 2 + (c2[2] - u2[2]) ** 2);
    m2 < l2 && (l2 = m2, s2 = t3);
  }
  var c2, u2;
  return s2;
}, I.keyword.rgb = function(e2) {
  return T[e2];
}, I.rgb.xyz = function(e2) {
  let t2 = e2[0] / 255, s2 = e2[1] / 255, l2 = e2[2] / 255;
  t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92, s2 = s2 > 0.04045 ? ((s2 + 0.055) / 1.055) ** 2.4 : s2 / 12.92, l2 = l2 > 0.04045 ? ((l2 + 0.055) / 1.055) ** 2.4 : l2 / 12.92;
  return [100 * (0.4124 * t2 + 0.3576 * s2 + 0.1805 * l2), 100 * (0.2126 * t2 + 0.7152 * s2 + 0.0722 * l2), 100 * (0.0193 * t2 + 0.1192 * s2 + 0.9505 * l2)];
}, I.rgb.lab = function(e2) {
  const t2 = I.rgb.xyz(e2);
  let s2 = t2[0], l2 = t2[1], c2 = t2[2];
  s2 /= 95.047, l2 /= 100, c2 /= 108.883, s2 = s2 > 8856e-6 ? s2 ** (1 / 3) : 7.787 * s2 + 16 / 116, l2 = l2 > 8856e-6 ? l2 ** (1 / 3) : 7.787 * l2 + 16 / 116, c2 = c2 > 8856e-6 ? c2 ** (1 / 3) : 7.787 * c2 + 16 / 116;
  return [116 * l2 - 16, 500 * (s2 - l2), 200 * (l2 - c2)];
}, I.hsl.rgb = function(e2) {
  const t2 = e2[0] / 360, s2 = e2[1] / 100, l2 = e2[2] / 100;
  let c2, u2, m2;
  if (0 === s2)
    return m2 = 255 * l2, [m2, m2, m2];
  c2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
  const d2 = 2 * l2 - c2, h2 = [0, 0, 0];
  for (let e3 = 0; e3 < 3; e3++)
    u2 = t2 + 1 / 3 * -(e3 - 1), u2 < 0 && u2++, u2 > 1 && u2--, m2 = 6 * u2 < 1 ? d2 + 6 * (c2 - d2) * u2 : 2 * u2 < 1 ? c2 : 3 * u2 < 2 ? d2 + (c2 - d2) * (2 / 3 - u2) * 6 : d2, h2[e3] = 255 * m2;
  return h2;
}, I.hsl.hsv = function(e2) {
  const t2 = e2[0];
  let s2 = e2[1] / 100, l2 = e2[2] / 100, c2 = s2;
  const u2 = Math.max(l2, 0.01);
  l2 *= 2, s2 *= l2 <= 1 ? l2 : 2 - l2, c2 *= u2 <= 1 ? u2 : 2 - u2;
  return [t2, 100 * (0 === l2 ? 2 * c2 / (u2 + c2) : 2 * s2 / (l2 + s2)), 100 * ((l2 + s2) / 2)];
}, I.hsv.rgb = function(e2) {
  const t2 = e2[0] / 60, s2 = e2[1] / 100;
  let l2 = e2[2] / 100;
  const c2 = Math.floor(t2) % 6, u2 = t2 - Math.floor(t2), m2 = 255 * l2 * (1 - s2), d2 = 255 * l2 * (1 - s2 * u2), h2 = 255 * l2 * (1 - s2 * (1 - u2));
  switch (l2 *= 255, c2) {
    case 0:
      return [l2, h2, m2];
    case 1:
      return [d2, l2, m2];
    case 2:
      return [m2, l2, h2];
    case 3:
      return [m2, d2, l2];
    case 4:
      return [h2, m2, l2];
    case 5:
      return [l2, m2, d2];
  }
}, I.hsv.hsl = function(e2) {
  const t2 = e2[0], s2 = e2[1] / 100, l2 = e2[2] / 100, c2 = Math.max(l2, 0.01);
  let u2, m2;
  m2 = (2 - s2) * l2;
  const d2 = (2 - s2) * c2;
  return u2 = s2 * c2, u2 /= d2 <= 1 ? d2 : 2 - d2, u2 = u2 || 0, m2 /= 2, [t2, 100 * u2, 100 * m2];
}, I.hwb.rgb = function(e2) {
  const t2 = e2[0] / 360;
  let s2 = e2[1] / 100, l2 = e2[2] / 100;
  const c2 = s2 + l2;
  let u2;
  c2 > 1 && (s2 /= c2, l2 /= c2);
  const m2 = Math.floor(6 * t2), d2 = 1 - l2;
  u2 = 6 * t2 - m2, 0 != (1 & m2) && (u2 = 1 - u2);
  const h2 = s2 + u2 * (d2 - s2);
  let p2, g2, y2;
  switch (m2) {
    default:
    case 6:
    case 0:
      p2 = d2, g2 = h2, y2 = s2;
      break;
    case 1:
      p2 = h2, g2 = d2, y2 = s2;
      break;
    case 2:
      p2 = s2, g2 = d2, y2 = h2;
      break;
    case 3:
      p2 = s2, g2 = h2, y2 = d2;
      break;
    case 4:
      p2 = h2, g2 = s2, y2 = d2;
      break;
    case 5:
      p2 = d2, g2 = s2, y2 = h2;
  }
  return [255 * p2, 255 * g2, 255 * y2];
}, I.cmyk.rgb = function(e2) {
  const t2 = e2[0] / 100, s2 = e2[1] / 100, l2 = e2[2] / 100, c2 = e2[3] / 100;
  return [255 * (1 - Math.min(1, t2 * (1 - c2) + c2)), 255 * (1 - Math.min(1, s2 * (1 - c2) + c2)), 255 * (1 - Math.min(1, l2 * (1 - c2) + c2))];
}, I.xyz.rgb = function(e2) {
  const t2 = e2[0] / 100, s2 = e2[1] / 100, l2 = e2[2] / 100;
  let c2, u2, m2;
  return c2 = 3.2406 * t2 + -1.5372 * s2 + -0.4986 * l2, u2 = -0.9689 * t2 + 1.8758 * s2 + 0.0415 * l2, m2 = 0.0557 * t2 + -0.204 * s2 + 1.057 * l2, c2 = c2 > 31308e-7 ? 1.055 * c2 ** (1 / 2.4) - 0.055 : 12.92 * c2, u2 = u2 > 31308e-7 ? 1.055 * u2 ** (1 / 2.4) - 0.055 : 12.92 * u2, m2 = m2 > 31308e-7 ? 1.055 * m2 ** (1 / 2.4) - 0.055 : 12.92 * m2, c2 = Math.min(Math.max(0, c2), 1), u2 = Math.min(Math.max(0, u2), 1), m2 = Math.min(Math.max(0, m2), 1), [255 * c2, 255 * u2, 255 * m2];
}, I.xyz.lab = function(e2) {
  let t2 = e2[0], s2 = e2[1], l2 = e2[2];
  t2 /= 95.047, s2 /= 100, l2 /= 108.883, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, s2 = s2 > 8856e-6 ? s2 ** (1 / 3) : 7.787 * s2 + 16 / 116, l2 = l2 > 8856e-6 ? l2 ** (1 / 3) : 7.787 * l2 + 16 / 116;
  return [116 * s2 - 16, 500 * (t2 - s2), 200 * (s2 - l2)];
}, I.lab.xyz = function(e2) {
  let t2, s2, l2;
  s2 = (e2[0] + 16) / 116, t2 = e2[1] / 500 + s2, l2 = s2 - e2[2] / 200;
  const c2 = s2 ** 3, u2 = t2 ** 3, m2 = l2 ** 3;
  return s2 = c2 > 8856e-6 ? c2 : (s2 - 16 / 116) / 7.787, t2 = u2 > 8856e-6 ? u2 : (t2 - 16 / 116) / 7.787, l2 = m2 > 8856e-6 ? m2 : (l2 - 16 / 116) / 7.787, t2 *= 95.047, s2 *= 100, l2 *= 108.883, [t2, s2, l2];
}, I.lab.lch = function(e2) {
  const t2 = e2[0], s2 = e2[1], l2 = e2[2];
  let c2;
  c2 = 360 * Math.atan2(l2, s2) / 2 / Math.PI, c2 < 0 && (c2 += 360);
  return [t2, Math.sqrt(s2 * s2 + l2 * l2), c2];
}, I.lch.lab = function(e2) {
  const t2 = e2[0], s2 = e2[1], l2 = e2[2] / 360 * 2 * Math.PI;
  return [t2, s2 * Math.cos(l2), s2 * Math.sin(l2)];
}, I.rgb.ansi16 = function(e2, t2 = null) {
  const [s2, l2, c2] = e2;
  let u2 = null === t2 ? I.rgb.hsv(e2)[2] : t2;
  if (u2 = Math.round(u2 / 50), 0 === u2)
    return 30;
  let m2 = 30 + (Math.round(c2 / 255) << 2 | Math.round(l2 / 255) << 1 | Math.round(s2 / 255));
  return 2 === u2 && (m2 += 60), m2;
}, I.hsv.ansi16 = function(e2) {
  return I.rgb.ansi16(I.hsv.rgb(e2), e2[2]);
}, I.rgb.ansi256 = function(e2) {
  const t2 = e2[0], s2 = e2[1], l2 = e2[2];
  if (t2 === s2 && s2 === l2)
    return t2 < 8 ? 16 : t2 > 248 ? 231 : Math.round((t2 - 8) / 247 * 24) + 232;
  return 16 + 36 * Math.round(t2 / 255 * 5) + 6 * Math.round(s2 / 255 * 5) + Math.round(l2 / 255 * 5);
}, I.ansi16.rgb = function(e2) {
  let t2 = e2 % 10;
  if (0 === t2 || 7 === t2)
    return e2 > 50 && (t2 += 3.5), t2 = t2 / 10.5 * 255, [t2, t2, t2];
  const s2 = 0.5 * (1 + ~~(e2 > 50));
  return [(1 & t2) * s2 * 255, (t2 >> 1 & 1) * s2 * 255, (t2 >> 2 & 1) * s2 * 255];
}, I.ansi256.rgb = function(e2) {
  if (e2 >= 232) {
    const t3 = 10 * (e2 - 232) + 8;
    return [t3, t3, t3];
  }
  let t2;
  e2 -= 16;
  return [Math.floor(e2 / 36) / 5 * 255, Math.floor((t2 = e2 % 36) / 6) / 5 * 255, t2 % 6 / 5 * 255];
}, I.rgb.hex = function(e2) {
  const t2 = (((255 & Math.round(e2[0])) << 16) + ((255 & Math.round(e2[1])) << 8) + (255 & Math.round(e2[2]))).toString(16).toUpperCase();
  return "000000".substring(t2.length) + t2;
}, I.hex.rgb = function(e2) {
  const t2 = e2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!t2)
    return [0, 0, 0];
  let s2 = t2[0];
  3 === t2[0].length && (s2 = s2.split("").map((e3) => e3 + e3).join(""));
  const l2 = parseInt(s2, 16);
  return [l2 >> 16 & 255, l2 >> 8 & 255, 255 & l2];
}, I.rgb.hcg = function(e2) {
  const t2 = e2[0] / 255, s2 = e2[1] / 255, l2 = e2[2] / 255, c2 = Math.max(Math.max(t2, s2), l2), u2 = Math.min(Math.min(t2, s2), l2), m2 = c2 - u2;
  let d2, h2;
  return d2 = m2 < 1 ? u2 / (1 - m2) : 0, h2 = m2 <= 0 ? 0 : c2 === t2 ? (s2 - l2) / m2 % 6 : c2 === s2 ? 2 + (l2 - t2) / m2 : 4 + (t2 - s2) / m2, h2 /= 6, h2 %= 1, [360 * h2, 100 * m2, 100 * d2];
}, I.hsl.hcg = function(e2) {
  const t2 = e2[1] / 100, s2 = e2[2] / 100, l2 = s2 < 0.5 ? 2 * t2 * s2 : 2 * t2 * (1 - s2);
  let c2 = 0;
  return l2 < 1 && (c2 = (s2 - 0.5 * l2) / (1 - l2)), [e2[0], 100 * l2, 100 * c2];
}, I.hsv.hcg = function(e2) {
  const t2 = e2[1] / 100, s2 = e2[2] / 100, l2 = t2 * s2;
  let c2 = 0;
  return l2 < 1 && (c2 = (s2 - l2) / (1 - l2)), [e2[0], 100 * l2, 100 * c2];
}, I.hcg.rgb = function(e2) {
  const t2 = e2[0] / 360, s2 = e2[1] / 100, l2 = e2[2] / 100;
  if (0 === s2)
    return [255 * l2, 255 * l2, 255 * l2];
  const c2 = [0, 0, 0], u2 = t2 % 1 * 6, m2 = u2 % 1, d2 = 1 - m2;
  let h2 = 0;
  switch (Math.floor(u2)) {
    case 0:
      c2[0] = 1, c2[1] = m2, c2[2] = 0;
      break;
    case 1:
      c2[0] = d2, c2[1] = 1, c2[2] = 0;
      break;
    case 2:
      c2[0] = 0, c2[1] = 1, c2[2] = m2;
      break;
    case 3:
      c2[0] = 0, c2[1] = d2, c2[2] = 1;
      break;
    case 4:
      c2[0] = m2, c2[1] = 0, c2[2] = 1;
      break;
    default:
      c2[0] = 1, c2[1] = 0, c2[2] = d2;
  }
  return h2 = (1 - s2) * l2, [255 * (s2 * c2[0] + h2), 255 * (s2 * c2[1] + h2), 255 * (s2 * c2[2] + h2)];
}, I.hcg.hsv = function(e2) {
  const t2 = e2[1] / 100, s2 = t2 + e2[2] / 100 * (1 - t2);
  let l2 = 0;
  return s2 > 0 && (l2 = t2 / s2), [e2[0], 100 * l2, 100 * s2];
}, I.hcg.hsl = function(e2) {
  const t2 = e2[1] / 100, s2 = e2[2] / 100 * (1 - t2) + 0.5 * t2;
  let l2 = 0;
  return s2 > 0 && s2 < 0.5 ? l2 = t2 / (2 * s2) : s2 >= 0.5 && s2 < 1 && (l2 = t2 / (2 * (1 - s2))), [e2[0], 100 * l2, 100 * s2];
}, I.hcg.hwb = function(e2) {
  const t2 = e2[1] / 100, s2 = t2 + e2[2] / 100 * (1 - t2);
  return [e2[0], 100 * (s2 - t2), 100 * (1 - s2)];
}, I.hwb.hcg = function(e2) {
  const t2 = e2[1] / 100, s2 = 1 - e2[2] / 100, l2 = s2 - t2;
  let c2 = 0;
  return l2 < 1 && (c2 = (s2 - l2) / (1 - l2)), [e2[0], 100 * l2, 100 * c2];
}, I.apple.rgb = function(e2) {
  return [e2[0] / 65535 * 255, e2[1] / 65535 * 255, e2[2] / 65535 * 255];
}, I.rgb.apple = function(e2) {
  return [e2[0] / 255 * 65535, e2[1] / 255 * 65535, e2[2] / 255 * 65535];
}, I.gray.rgb = function(e2) {
  return [e2[0] / 100 * 255, e2[0] / 100 * 255, e2[0] / 100 * 255];
}, I.gray.hsl = function(e2) {
  return [0, 0, e2[0]];
}, I.gray.hsv = I.gray.hsl, I.gray.hwb = function(e2) {
  return [0, 100, e2[0]];
}, I.gray.cmyk = function(e2) {
  return [0, 0, 0, e2[0]];
}, I.gray.lab = function(e2) {
  return [e2[0], 0, 0];
}, I.gray.hex = function(e2) {
  const t2 = 255 & Math.round(e2[0] / 100 * 255), s2 = ((t2 << 16) + (t2 << 8) + t2).toString(16).toUpperCase();
  return "000000".substring(s2.length) + s2;
}, I.rgb.gray = function(e2) {
  return [(e2[0] + e2[1] + e2[2]) / 3 / 255 * 100];
};
const w = _;
function deriveBFS(e2) {
  const t2 = function() {
    const e3 = {}, t3 = Object.keys(w);
    for (let s3 = t3.length, l2 = 0; l2 < s3; l2++)
      e3[t3[l2]] = { distance: -1, parent: null };
    return e3;
  }(), s2 = [e2];
  for (t2[e2].distance = 0; s2.length; ) {
    const e3 = s2.pop(), l2 = Object.keys(w[e3]);
    for (let c2 = l2.length, u2 = 0; u2 < c2; u2++) {
      const c3 = l2[u2], m2 = t2[c3];
      -1 === m2.distance && (m2.distance = t2[e3].distance + 1, m2.parent = e3, s2.unshift(c3));
    }
  }
  return t2;
}
function link$1(e2, t2) {
  return function(s2) {
    return t2(e2(s2));
  };
}
function wrapConversion(e2, t2) {
  const s2 = [t2[e2].parent, e2];
  let l2 = w[t2[e2].parent][e2], c2 = t2[e2].parent;
  for (; t2[c2].parent; )
    s2.unshift(t2[c2].parent), l2 = link$1(w[t2[c2].parent][c2], l2), c2 = t2[c2].parent;
  return l2.conversion = s2, l2;
}
const A = _, route = function(e2) {
  const t2 = deriveBFS(e2), s2 = {}, l2 = Object.keys(t2);
  for (let e3 = l2.length, c2 = 0; c2 < e3; c2++) {
    const e4 = l2[c2];
    null !== t2[e4].parent && (s2[e4] = wrapConversion(e4, t2));
  }
  return s2;
}, N = {};
Object.keys(A).forEach((e2) => {
  N[e2] = {}, Object.defineProperty(N[e2], "channels", { value: A[e2].channels }), Object.defineProperty(N[e2], "labels", { value: A[e2].labels });
  const t2 = route(e2);
  Object.keys(t2).forEach((s2) => {
    const l2 = t2[s2];
    N[e2][s2] = function(e3) {
      const wrappedFn = function(...t3) {
        const s3 = t3[0];
        if (null == s3)
          return s3;
        s3.length > 1 && (t3 = s3);
        const l3 = e3(t3);
        if ("object" == typeof l3)
          for (let e4 = l3.length, t4 = 0; t4 < e4; t4++)
            l3[t4] = Math.round(l3[t4]);
        return l3;
      };
      return "conversion" in e3 && (wrappedFn.conversion = e3.conversion), wrappedFn;
    }(l2), N[e2][s2].raw = function(e3) {
      const wrappedFn = function(...t3) {
        const s3 = t3[0];
        return null == s3 ? s3 : (s3.length > 1 && (t3 = s3), e3(t3));
      };
      return "conversion" in e3 && (wrappedFn.conversion = e3.conversion), wrappedFn;
    }(l2);
  });
});
var O = N;
const x = m.exports, P = O, E = ["keyword", "gray", "hex"], M = {};
for (const e2 of Object.keys(P))
  M[[...P[e2].labels].sort().join("")] = e2;
const R = {};
function Color$1(e2, t2) {
  if (!(this instanceof Color$1))
    return new Color$1(e2, t2);
  if (t2 && t2 in E && (t2 = null), t2 && !(t2 in P))
    throw new Error("Unknown model: " + t2);
  let s2, l2;
  if (null == e2)
    this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
  else if (e2 instanceof Color$1)
    this.model = e2.model, this.color = [...e2.color], this.valpha = e2.valpha;
  else if ("string" == typeof e2) {
    const t3 = x.get(e2);
    if (null === t3)
      throw new Error("Unable to parse color from string: " + e2);
    this.model = t3.model, l2 = P[this.model].channels, this.color = t3.value.slice(0, l2), this.valpha = "number" == typeof t3.value[l2] ? t3.value[l2] : 1;
  } else if (e2.length > 0) {
    this.model = t2 || "rgb", l2 = P[this.model].channels;
    const s3 = Array.prototype.slice.call(e2, 0, l2);
    this.color = zeroArray(s3, l2), this.valpha = "number" == typeof e2[l2] ? e2[l2] : 1;
  } else if ("number" == typeof e2)
    this.model = "rgb", this.color = [e2 >> 16 & 255, e2 >> 8 & 255, 255 & e2], this.valpha = 1;
  else {
    this.valpha = 1;
    const t3 = Object.keys(e2);
    "alpha" in e2 && (t3.splice(t3.indexOf("alpha"), 1), this.valpha = "number" == typeof e2.alpha ? e2.alpha : 0);
    const l3 = t3.sort().join("");
    if (!(l3 in M))
      throw new Error("Unable to parse color from object: " + JSON.stringify(e2));
    this.model = M[l3];
    const { labels: c2 } = P[this.model], u2 = [];
    for (s2 = 0; s2 < c2.length; s2++)
      u2.push(e2[c2[s2]]);
    this.color = zeroArray(u2);
  }
  if (R[this.model])
    for (l2 = P[this.model].channels, s2 = 0; s2 < l2; s2++) {
      const e3 = R[this.model][s2];
      e3 && (this.color[s2] = e3(this.color[s2]));
    }
  this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this);
}
Color$1.prototype = { toString() {
  return this.string();
}, toJSON() {
  return this[this.model]();
}, string(e2) {
  let t2 = this.model in x.to ? this : this.rgb();
  t2 = t2.round("number" == typeof e2 ? e2 : 1);
  const s2 = 1 === t2.valpha ? t2.color : [...t2.color, this.valpha];
  return x.to[t2.model](s2);
}, percentString(e2) {
  const t2 = this.rgb().round("number" == typeof e2 ? e2 : 1), s2 = 1 === t2.valpha ? t2.color : [...t2.color, this.valpha];
  return x.to.rgb.percent(s2);
}, array() {
  return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha];
}, object() {
  const e2 = {}, { channels: t2 } = P[this.model], { labels: s2 } = P[this.model];
  for (let l2 = 0; l2 < t2; l2++)
    e2[s2[l2]] = this.color[l2];
  return 1 !== this.valpha && (e2.alpha = this.valpha), e2;
}, unitArray() {
  const e2 = this.rgb().color;
  return e2[0] /= 255, e2[1] /= 255, e2[2] /= 255, 1 !== this.valpha && e2.push(this.valpha), e2;
}, unitObject() {
  const e2 = this.rgb().object();
  return e2.r /= 255, e2.g /= 255, e2.b /= 255, 1 !== this.valpha && (e2.alpha = this.valpha), e2;
}, round(e2) {
  return e2 = Math.max(e2 || 0, 0), new Color$1([...this.color.map(roundToPlace(e2)), this.valpha], this.model);
}, alpha(e2) {
  return void 0 !== e2 ? new Color$1([...this.color, Math.max(0, Math.min(1, e2))], this.model) : this.valpha;
}, red: getset("rgb", 0, maxfn(255)), green: getset("rgb", 1, maxfn(255)), blue: getset("rgb", 2, maxfn(255)), hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (e2) => (e2 % 360 + 360) % 360), saturationl: getset("hsl", 1, maxfn(100)), lightness: getset("hsl", 2, maxfn(100)), saturationv: getset("hsv", 1, maxfn(100)), value: getset("hsv", 2, maxfn(100)), chroma: getset("hcg", 1, maxfn(100)), gray: getset("hcg", 2, maxfn(100)), white: getset("hwb", 1, maxfn(100)), wblack: getset("hwb", 2, maxfn(100)), cyan: getset("cmyk", 0, maxfn(100)), magenta: getset("cmyk", 1, maxfn(100)), yellow: getset("cmyk", 2, maxfn(100)), black: getset("cmyk", 3, maxfn(100)), x: getset("xyz", 0, maxfn(95.047)), y: getset("xyz", 1, maxfn(100)), z: getset("xyz", 2, maxfn(108.833)), l: getset("lab", 0, maxfn(100)), a: getset("lab", 1), b: getset("lab", 2), keyword(e2) {
  return void 0 !== e2 ? new Color$1(e2) : P[this.model].keyword(this.color);
}, hex(e2) {
  return void 0 !== e2 ? new Color$1(e2) : x.to.hex(this.rgb().round().color);
}, hexa(e2) {
  if (void 0 !== e2)
    return new Color$1(e2);
  const t2 = this.rgb().round().color;
  let s2 = Math.round(255 * this.valpha).toString(16).toUpperCase();
  return 1 === s2.length && (s2 = "0" + s2), x.to.hex(t2) + s2;
}, rgbNumber() {
  const e2 = this.rgb().color;
  return (255 & e2[0]) << 16 | (255 & e2[1]) << 8 | 255 & e2[2];
}, luminosity() {
  const e2 = this.rgb().color, t2 = [];
  for (const [s2, l2] of e2.entries()) {
    const e3 = l2 / 255;
    t2[s2] = e3 <= 0.04045 ? e3 / 12.92 : ((e3 + 0.055) / 1.055) ** 2.4;
  }
  return 0.2126 * t2[0] + 0.7152 * t2[1] + 0.0722 * t2[2];
}, contrast(e2) {
  const t2 = this.luminosity(), s2 = e2.luminosity();
  return t2 > s2 ? (t2 + 0.05) / (s2 + 0.05) : (s2 + 0.05) / (t2 + 0.05);
}, level(e2) {
  const t2 = this.contrast(e2);
  return t2 >= 7 ? "AAA" : t2 >= 4.5 ? "AA" : "";
}, isDark() {
  const e2 = this.rgb().color;
  return (2126 * e2[0] + 7152 * e2[1] + 722 * e2[2]) / 1e4 < 128;
}, isLight() {
  return !this.isDark();
}, negate() {
  const e2 = this.rgb();
  for (let t2 = 0; t2 < 3; t2++)
    e2.color[t2] = 255 - e2.color[t2];
  return e2;
}, lighten(e2) {
  const t2 = this.hsl();
  return t2.color[2] += t2.color[2] * e2, t2;
}, darken(e2) {
  const t2 = this.hsl();
  return t2.color[2] -= t2.color[2] * e2, t2;
}, saturate(e2) {
  const t2 = this.hsl();
  return t2.color[1] += t2.color[1] * e2, t2;
}, desaturate(e2) {
  const t2 = this.hsl();
  return t2.color[1] -= t2.color[1] * e2, t2;
}, whiten(e2) {
  const t2 = this.hwb();
  return t2.color[1] += t2.color[1] * e2, t2;
}, blacken(e2) {
  const t2 = this.hwb();
  return t2.color[2] += t2.color[2] * e2, t2;
}, grayscale() {
  const e2 = this.rgb().color, t2 = 0.3 * e2[0] + 0.59 * e2[1] + 0.11 * e2[2];
  return Color$1.rgb(t2, t2, t2);
}, fade(e2) {
  return this.alpha(this.valpha - this.valpha * e2);
}, opaquer(e2) {
  return this.alpha(this.valpha + this.valpha * e2);
}, rotate(e2) {
  const t2 = this.hsl();
  let s2 = t2.color[0];
  return s2 = (s2 + e2) % 360, s2 = s2 < 0 ? 360 + s2 : s2, t2.color[0] = s2, t2;
}, mix(e2, t2) {
  if (!e2 || !e2.rgb)
    throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e2);
  const s2 = e2.rgb(), l2 = this.rgb(), c2 = void 0 === t2 ? 0.5 : t2, u2 = 2 * c2 - 1, m2 = s2.alpha() - l2.alpha(), d2 = ((u2 * m2 == -1 ? u2 : (u2 + m2) / (1 + u2 * m2)) + 1) / 2, h2 = 1 - d2;
  return Color$1.rgb(d2 * s2.red() + h2 * l2.red(), d2 * s2.green() + h2 * l2.green(), d2 * s2.blue() + h2 * l2.blue(), s2.alpha() * c2 + l2.alpha() * (1 - c2));
} };
for (const e2 of Object.keys(P)) {
  if (E.includes(e2))
    continue;
  const { channels: t2 } = P[e2];
  Color$1.prototype[e2] = function(...t3) {
    return this.model === e2 ? new Color$1(this) : t3.length > 0 ? new Color$1(t3, e2) : new Color$1([...(s2 = P[this.model][e2].raw(this.color), Array.isArray(s2) ? s2 : [s2]), this.valpha], e2);
    var s2;
  }, Color$1[e2] = function(...s2) {
    let l2 = s2[0];
    return "number" == typeof l2 && (l2 = zeroArray(s2, t2)), new Color$1(l2, e2);
  };
}
function roundToPlace(e2) {
  return function(t2) {
    return function(e3, t3) {
      return Number(e3.toFixed(t3));
    }(t2, e2);
  };
}
function getset(e2, t2, s2) {
  e2 = Array.isArray(e2) ? e2 : [e2];
  for (const l2 of e2)
    (R[l2] || (R[l2] = []))[t2] = s2;
  return e2 = e2[0], function(l2) {
    let c2;
    return void 0 !== l2 ? (s2 && (l2 = s2(l2)), c2 = this[e2](), c2.color[t2] = l2, c2) : (c2 = this[e2]().color[t2], s2 && (c2 = s2(c2)), c2);
  };
}
function maxfn(e2) {
  return function(t2) {
    return Math.max(0, Math.min(e2, t2));
  };
}
function zeroArray(e2, t2) {
  for (let s2 = 0; s2 < t2; s2++)
    "number" != typeof e2[s2] && (e2[s2] = 0);
  return e2;
}
const L = Color$1, createCustomChatMessage = async function(e2, t2 = {}, s2 = {}, { rolls: l2 = [] } = {}) {
  if ((s2 = mergeObject({ user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.CHAT }, s2)).content = await renderTemplate(e2, t2), ChatMessage.implementation.applyRollMode(s2, s2.rollMode ?? game.settings.get("core", "rollMode")), null != s2.roll && 0 === l2.length && (l2 = [s2.roll]), null != game.dice3d && game.dice3d.isEnabled())
    for (const e3 of l2)
      await game.dice3d.showForRoll(e3, game.user, false, s2.whisper, s2.blind), s2.sound = null;
  return ChatMessage.implementation.create(s2);
}, hideRollInfo = function(e2, t2, s2) {
  const l2 = e2.whisper || [], c2 = l2.length && e2.blind;
  !l2.length || (l2.includes(game.user.id) || e2.isAuthor && !c2) || (t2.find(".dice-formula").text("???"), t2.find(".dice-total").text("?"), t2.find(".dice").text(""), t2.find(".success").removeClass("success"), t2.find(".failure").removeClass("failure"));
}, hideGMSensitiveInfo = function(e2, t2, s2) {
  if (game.user.isGM) {
    const s3 = e2.flags.ffd20?.identifiedInfo ?? {}, { identified: l3 = true } = s3;
    if (!l3 && e2.hasItemSource) {
      t2.find(".card-content").append(((e3) => {
        const t3 = e3.actionName && !e3.actionDescription;
        return _templateCache["systems/ffd20/templates/chat/parts/gm-description.hbs"]?.({ ...e3, hasCombinedName: t3 }, { allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true }) ?? "";
      })(s3));
    }
    return;
  }
  t2.find(".gm-sensitive-always").remove(), t2.find("[data-gm-sensitive-uuid]").each((e3, t3) => {
    (t3 = $(t3)).hide();
    const s3 = t3.data("gm-sensitive-uuid");
    s3 && fromUuid(s3).then((e4) => {
      (e4 instanceof Token || e4 instanceof TokenDocument) && (e4 = e4.actor), e4?.testUserPermission && e4.testUserPermission(game.user, "OBSERVER") ? t3.show() : t3.remove();
    });
  });
  const l2 = e2.speaker;
  let c2 = null;
  null != l2 && (l2.token && (c2 = game.actors.tokens[l2.token]), c2 || (c2 = game.actors.get(l2.actor))), !c2 || c2 && c2.testUserPermission(game.user, "OBSERVER") || (t2.find(".gm-sensitive").remove(), t2.find("[data-gm-sensitive-inner]").each((e3, t3) => {
    (game.settings.get("ffd20", "obscureSaveDCs") || "save" !== t3.dataset.action) && ((t3 = $(t3)).text(t3.data("gm-sensitive-inner")), t3.removeData("gm-sensitive-inner"));
  }), game.settings.get("ffd20", "obscureInlineRolls") && t2.find(".inline-roll").each((e3, t3) => {
    if (!t3.dataset.roll)
      return;
    const s3 = Roll.fromJSON(unescape(t3.dataset.roll)), l3 = t3.parentNode;
    l3.insertBefore($(`<span>${s3.total}</span>`)[0], t3), l3.removeChild(t3);
  }));
}, addChatCardTitleGradient = async function(e2, t2, s2) {
  const l2 = t2.find(".chat-card")[0];
  if (!l2)
    return;
  const c2 = await CONFIG.Item.documentClasses.default._getChatCardActor(l2);
  if (!c2)
    return;
  const u2 = c2.items.get(l2.dataset.itemId);
  if (!u2)
    return;
  const m2 = $(l2).find(".card-header");
  if (!m2.length)
    return;
  m2.css("background-image", `linear-gradient(to right, ${u2.typeColor}, ${u2.typeColor2})`);
  const d2 = m2.find("h2, h3");
  L(u2.typeColor).isLight() ? d2.css("color", "black") : d2.css("color", "white");
}, alterAmmoRecovery = function(e2, t2) {
  const s2 = e2.getFlag("ffd20", "ammoRecovery");
  s2 && t2.find(".chat-attack .ammo[data-ammo-id]").each((e3, t3) => {
    const l2 = t3.closest(".chat-attack").dataset.index, c2 = t3.dataset.ammoId, u2 = s2[l2]?.[c2];
    u2 && $(t3).find(".inline-action").each((e4, t4) => {
      u2.recovered && t4.classList.add("recovered"), u2.failed && t4.classList.add("recovery-failed");
    });
  });
}, alterTargetDefense = function(e2, t2) {
  const s2 = e2.getFlag("ffd20", "targetDefense");
  s2 && t2.find(".attack-targets .saving-throws div[data-saving-throw]").each((e3, t3) => {
    const l2 = t3.closest(".target").dataset.uuid, c2 = t3.dataset.savingThrow, u2 = getProperty(s2, `${l2}.save.${c2}`);
    null != u2 && $(t3).find(".value").text(u2.toString());
  });
}, applyAccessibilitySettings = function(e2, t2, s2, l2) {
}, createInlineRollString = (e2, { hide3d: t2 = true } = {}) => `<a class="inline-roll inline-result ${t2 ? "inline-dsn-hidden" : ""}"   title="${e2.formula}" data-roll="${escape(JSON.stringify(e2))}">   <i class="fas fa-dice-d20"></i> ${e2.total}</a>`, hideInvisibleTargets = async function(e2, t2) {
  const s2 = t2.find(".attack-targets .target").toArray().reduce((e3, t3) => (e3.push({ uuid: t3.dataset.uuid, elem: t3 }), e3), []);
  for (const e3 of s2) {
    const t3 = $(e3.elem), s3 = await fromUuid(e3.uuid);
    s3 && (e3.token = s3.object, e3.token?.visible ? t3.show() : t3.hide());
  }
}, addTargetCallbacks = function(e2, t2) {
  const s2 = t2.find(".attack-targets .target[data-uuid]"), _getTokenByElem = async function(e3) {
    return (await fromUuid(e3?.dataset.uuid ?? ""))?.object;
  }, _getRootTargetElement = function(e3) {
    return null != e3.dataset.uuid ? e3 : e3.closest("[data-uuid]");
  }, _mouseEnterCallback = function(e3) {
    _getTokenByElem(_getRootTargetElement(e3.currentTarget)).then((t3) => {
      t3?._onHoverIn(e3, { hoverOutOthers: false });
    });
  }, _mouseLeaveCallback = function(e3) {
    _getTokenByElem(_getRootTargetElement(e3.currentTarget)).then((t3) => {
      t3?._onHoverOut(e3);
    });
  }, _imageClickCallback = function(e3) {
    e3.preventDefault(), _getTokenByElem(_getRootTargetElement(e3.currentTarget)).then((t3) => {
      t3?.actor.testUserPermission(game.user, "OWNER") && (t3._controlled ? e3.shiftKey && t3.release() : t3.control({ releaseOthers: !e3.shiftKey }));
    });
  };
  for (let l2 of s2) {
    l2 = $(l2);
    const s3 = l2.find(".target-image");
    s3.on("mouseenter", _mouseEnterCallback), s3.on("mouseleave", _mouseLeaveCallback), s3.on("click", _imageClickCallback), l2.find(".ac").on("click", (s4) => {
      s4.preventDefault(), _getTokenByElem(_getRootTargetElement(s4.currentTarget)).then((l3) => {
        l3?.actor && ffd20.utils.chat.targetACClick(e2, t2, l3.actor, s4);
      });
    }), l2.find(".saving-throws .click").on("click", (s4) => {
      s4.preventDefault(), _getTokenByElem(_getRootTargetElement(s4.currentTarget)).then((l3) => {
        l3?.actor && ffd20.utils.chat.targetSavingThrowClick(e2, t2, l3.actor, s4);
      });
    });
  }
}, targetACClick = async function(e2, t2, s2, l2) {
  s2.rollDefenses({ rollMode: "selfroll" });
}, targetSavingThrowClick = async function(e2, t2, s2, l2) {
  const c2 = l2.currentTarget, u2 = c2.dataset.savingThrow, m2 = (await s2.rollSavingThrow(u2, { event: l2, skipDialog: getSkipActionPrompt() }))?.rolls?.[0]?.total;
  if (null != m2) {
    const t3 = c2.closest(".target").dataset.uuid;
    await e2.setFlag("ffd20", "targetDefense", { [t3]: { save: { [u2]: m2 } } });
  }
}, z = Object.freeze(Object.defineProperty({ __proto__: null, createCustomChatMessage, hideRollInfo, hideGMSensitiveInfo, addChatCardTitleGradient, alterAmmoRecovery, alterTargetDefense, applyAccessibilitySettings, createInlineRollString, hideInvisibleTargets, addTargetCallbacks, targetACClick, targetSavingThrowClick }, Symbol.toStringTag, { value: "Module" }));
function applyChanges() {
  this.changeOverrides = {};
  const e2 = Array.from(this.changes), t2 = getSortChangePriority.call(this), _sortChanges = function(e3, s3) {
    const l2 = t2.types.indexOf(e3.subTarget), c2 = t2.types.indexOf(s3.subTarget), u2 = t2.modifiers.indexOf(e3.modifier), m2 = t2.modifiers.indexOf(s3.modifier);
    let d2 = "string" == typeof e3.priority ? parseInt(e3.priority) : e3.priority, h2 = "string" == typeof s3.priority ? parseInt(s3.priority) : s3.priority;
    return d2 = (d2 || 0) + 1e3, h2 = (h2 || 0) + 1e3, h2 - d2 || l2 - c2 || u2 - m2;
  };
  e2.sort((e3, t3) => _sortChanges.call(this, e3, t3));
  for (const e3 of this.changeItems)
    for (const [t3, s3] of Object.entries(e3.system.changeFlags))
      if (true === s3 && (this.changeFlags[t3] = true, "loseDexToAC" === t3)) {
        for (const t4 of ["normal", "touch"])
          getSourceInfo(this.sourceInfo, `system.attributes.ac.${t4}.total`).negative.push({ value: game.i18n.localize("FFD20.ChangeFlagLoseDexToAC"), name: e3.name, type: e3.type });
        getSourceInfo(this.sourceInfo, "system.attributes.cmd.total").negative.push({ value: game.i18n.localize("FFD20.ChangeFlagLoseDexToAC"), name: e3.name, type: e3.type });
      }
  this.refreshDerivedData();
  const s2 = e2.filter((e3) => true === e3.continuous);
  for (let t3 = 0; t3 < e2.length; t3++) {
    const l2 = e2[t3];
    let c2 = getChangeFlat.call(this, l2.subTarget, l2.modifier);
    c2 instanceof Array || (c2 = [c2]);
    for (const e3 of c2)
      this.changeOverrides[e3] || (this.changeOverrides[e3] = createOverride());
    l2.applyChange(this, c2, { applySourceInfo: false });
    for (const e3 of s2) {
      if (e3 === l2)
        continue;
      let t4 = getChangeFlat.call(this, e3.subTarget, e3.modifier);
      t4 instanceof Array || (t4 = [t4]);
      for (const e4 of t4)
        this.changeOverrides[e4] || (this.changeOverrides[e4] = createOverride());
      e3.applyChange(this, t4, { applySourceInfo: false });
    }
    this.refreshDerivedData();
  }
  for (const t3 of e2)
    t3.applySourceInfo(this);
  resetSkills.call(this);
}
const createOverride = function() {
  const e2 = { add: {}, set: {} };
  for (const t2 of Object.keys(CONFIG.FFD20.bonusModifiers))
    e2.add[t2] = null, e2.set[t2] = null;
  return e2;
}, getSortChangePriority = function() {
  const t2 = this._skillTargets.map((e2, t3) => [e2, { sort: 76e3 + 10 * t3 }]), s2 = [...t2, ...Object.entries(e.buffTargets)].sort(([, { sort: e2 }], [, { sort: t3 }]) => e2 - t3).map(([e2]) => e2);
  return { types: s2, modifiers: ["untyped", "untypedPerm", "base", "enh", "dodge", "inherent", "deflection", "morale", "luck", "sacred", "insight", "resist", "profane", "trait", "racial", "size", "competence", "circumstance", "alchemical", "penalty"] };
}, getChangeFlat = function(e2, t2, s2 = null) {
  if (null == e2)
    return null;
  s2 = s2 ?? this.system;
  const l2 = [];
  switch (e2) {
    case "mhp":
      l2.push("system.attributes.hp.max");
      break;
    case "wounds":
      l2.push("system.attributes.wounds.max");
      break;
    case "vigor":
      l2.push("system.attributes.vigor.max");
      break;
    case "mmp":
      l2.push("system.attributes.mp.max");
      break;
    case "limitbreak":
      l2.push("system.attributes.limitbreak.max");
      break;
    case "str":
    case "dex":
    case "con":
    case "int":
    case "wis":
    case "cha":
      if ("penalty" === t2) {
        l2.push(`system.abilities.${e2}.penalty`);
        break;
      }
      if (["base", "untypedPerm"].includes(t2)) {
        l2.push(`system.abilities.${e2}.total`, `system.abilities.${e2}.base`);
        break;
      }
      l2.push(`system.abilities.${e2}.total`);
      break;
    case "strMod":
    case "dexMod":
    case "conMod":
    case "intMod":
    case "wisMod":
    case "chaMod":
      l2.push(`system.abilities.${e2.slice(0, 3)}.mod`);
      break;
    case "carryStr":
      l2.push("system.details.carryCapacity.bonus.total");
      break;
    case "carryMult":
      l2.push("system.details.carryCapacity.multiplier.total");
      break;
    case "ac":
      switch (t2) {
        case "dodge":
          l2.push("system.attributes.ac.normal.total", "system.attributes.ac.touch.total", "system.attributes.cmd.total");
          break;
        case "deflection":
        case "circumstance":
        case "insight":
        case "luck":
        case "morale":
        case "profane":
        case "sacred":
          l2.push("system.attributes.ac.normal.total", "system.attributes.ac.touch.total", "system.attributes.ac.flatFooted.total", "system.attributes.cmd.total", "system.attributes.cmd.flatFootedTotal");
          break;
        default:
          l2.push("system.attributes.ac.normal.total", "system.attributes.ac.touch.total", "system.attributes.ac.flatFooted.total");
      }
      break;
    case "aac": {
      const e3 = ["system.ac.normal.total"];
      switch (t2) {
        case "base":
          e3.push("system.ac.normal.base");
          break;
        case "enh":
          e3.push("system.ac.normal.enh");
          break;
        default:
          e3.push("system.ac.normal.misc");
      }
      l2.push(...e3);
      break;
    }
    case "sac": {
      const e3 = ["system.ac.shield.total"];
      switch (t2) {
        case "base":
          e3.push("system.ac.shield.base");
          break;
        case "enh":
          e3.push("system.ac.shield.enh");
          break;
        default:
          e3.push("system.ac.shield.misc");
      }
      l2.push(...e3);
      break;
    }
    case "nac": {
      const e3 = ["system.ac.natural.total"];
      switch (t2) {
        case "base":
          e3.push("system.ac.natural.base");
          break;
        case "enh":
          e3.push("system.ac.natural.enh");
          break;
        default:
          e3.push("system.ac.natural.misc");
      }
      l2.push(...e3);
      break;
    }
    case "tac":
      l2.push("system.attributes.ac.touch.total");
      break;
    case "ffac":
      l2.push("system.attributes.ac.flatFooted.total");
      break;
    case "ffcmd":
      l2.push("system.attributes.cmd.flatFootedTotal");
      break;
    case "bab":
      l2.push("system.attributes.bab.total");
      break;
    case "~attackCore":
      l2.push("system.attributes.attack.shared");
      break;
    case "attack":
      l2.push("system.attributes.attack.general");
      break;
    case "mattack":
      l2.push("system.attributes.attack.melee");
      break;
    case "rattack":
      l2.push("system.attributes.attack.ranged");
      break;
    case "critConfirm":
      l2.push("system.attributes.attack.critConfirm");
      break;
    case "allSavingThrows":
      l2.push("system.attributes.savingThrows.fort.total", "system.attributes.savingThrows.ref.total", "system.attributes.savingThrows.will.total");
      break;
    case "fort":
      l2.push("system.attributes.savingThrows.fort.total");
      break;
    case "ref":
      l2.push("system.attributes.savingThrows.ref.total");
      break;
    case "will":
      l2.push("system.attributes.savingThrows.will.total");
      break;
    case "skills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && (l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const s3 of Object.keys(t3.subSkills))
            l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "~skillMods":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && (l2.push(`system.skills.${e3}.mod`), null != t3.subSkills))
          for (const s3 of Object.keys(t3.subSkills))
            l2.push(`system.skills.${e3}.subSkills.${s3}.mod`);
      break;
    case "strSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("str" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "str" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "dexSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("dex" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "dex" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "conSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("con" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "con" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "intSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("int" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "int" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "wisSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("wis" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "wis" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "chaSkills":
      for (const [e3, t3] of Object.entries(s2.skills))
        if (null != t3 && ("cha" === t3.ability && l2.push(`system.skills.${e3}.changeBonus`), null != t3.subSkills))
          for (const [s3, c2] of Object.entries(t3.subSkills))
            null != c2 && "cha" === c2.ability && l2.push(`system.skills.${e3}.subSkills.${s3}.changeBonus`);
      break;
    case "allChecks":
      l2.push("system.abilities.str.checkMod", "system.abilities.dex.checkMod", "system.abilities.con.checkMod", "system.abilities.int.checkMod", "system.abilities.wis.checkMod", "system.abilities.cha.checkMod", ...this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "strChecks":
      l2.push("system.abilities.str.checkMod", ..."str" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "dexChecks":
      l2.push("system.abilities.dex.checkMod", ..."dex" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "conChecks":
      l2.push("system.abilities.con.checkMod", ..."con" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "intChecks":
      l2.push("system.abilities.int.checkMod", ..."int" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "wisChecks":
      l2.push("system.abilities.wis.checkMod", ..."wis" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "chaChecks":
      l2.push("system.abilities.cha.checkMod", ..."cha" === this.system.attributes.init.ability ? ["system.attributes.init.total"] : []);
      break;
    case "allSpeeds":
      for (const e3 of Object.keys(s2.attributes.speed)) {
        const t3 = s2.attributes.speed[e3]?.base;
        void 0 !== t3 && l2.push(`system.attributes.speed.${e3}.total`);
      }
      break;
    case "landSpeed":
      if ("base" === t2)
        return ["system.attributes.speed.land.total"];
      l2.push("system.attributes.speed.land.add", "system.attributes.speed.land.total");
      break;
    case "climbSpeed":
      if ("base" === t2) {
        l2.push("system.attributes.speed.climb.total");
        break;
      }
      l2.push("system.attributes.speed.climb.add", "system.attributes.speed.climb.total");
      break;
    case "swimSpeed":
      if ("base" === t2) {
        l2.push("system.attributes.speed.swim.total");
        break;
      }
      l2.push("system.attributes.speed.swim.add", "system.attributes.speed.swim.total");
      break;
    case "burrowSpeed":
      if ("base" === t2) {
        l2.push("system.attributes.speed.burrow.total");
        break;
      }
      l2.push("system.attributes.speed.burrow.add", "system.attributes.speed.burrow.total");
      break;
    case "flySpeed":
      if ("base" === t2) {
        l2.push("system.attributes.speed.fly.total");
        break;
      }
      l2.push("system.attributes.speed.fly.add", "system.attributes.speed.fly.total");
      break;
    case "cmb":
      l2.push("system.attributes.cmb.bonus");
      break;
    case "cmd":
      if ("dodge" === t2) {
        l2.push("system.attributes.cmd.total");
        break;
      }
      l2.push("system.attributes.cmd.total", "system.attributes.cmd.flatFootedTotal");
      break;
    case "init":
      l2.push("system.attributes.init.total");
      break;
    case "acpA":
      l2.push("system.attributes.acp.armorBonus");
      break;
    case "acpS":
      l2.push("system.attributes.acp.shieldBonus");
      break;
    case "mDexA":
      l2.push("system.attributes.mDex.armorBonus");
      break;
    case "mDexS":
      l2.push("system.attributes.mDex.shieldBonus");
      break;
    case "spellResist":
      l2.push("system.attributes.sr.total");
      break;
    case "damage":
      l2.push("system.attributes.damage.general");
      break;
    case "wdamage":
      l2.push("system.attributes.damage.weapon");
      break;
    case "sdamage":
      l2.push("system.attributes.damage.spell");
      break;
    case "bonusFeats":
      l2.push("system.details.feats.bonus");
      break;
    case "bonusSkillRanks":
      l2.push("system.details.skills.bonus");
      break;
    case "concentration":
      l2.push("system.attributes.spells.spellbooks.primary.concentration.total", "system.attributes.spells.spellbooks.secondary.concentration.total", "system.attributes.spells.spellbooks.tertiary.concentration.total", "system.attributes.spells.spellbooks.quaternary.concentration.total", "system.attributes.spells.spellbooks.spelllike.concentration.total");
      break;
    case "cl":
      l2.push("system.attributes.spells.spellbooks.primary.cl.total", "system.attributes.spells.spellbooks.secondary.cl.total", "system.attributes.spells.spellbooks.tertiary.cl.total", "system.attributes.spells.spellbooks.quaternary.cl.total", "system.attributes.spells.spellbooks.spelllike.cl.total");
  }
  if (e2.match(/^skill\.([a-zA-Z0-9]+)$/)) {
    const e3 = RegExp.$1;
    null != s2.skills[e3] && l2.push(`system.skills.${e3}.changeBonus`);
  } else if (e2.match(/^skill\.([a-zA-Z0-9]+)\.subSkills\.([a-zA-Z0-9_]+)$/)) {
    const e3 = RegExp.$1, t3 = RegExp.$2;
    null != s2.skills[e3]?.subSkills?.[t3] && l2.push(`system.skills.${e3}.subSkills.${t3}.changeBonus`);
  }
  return callOldNamespaceHookAll("ffd20.getChangeFlat", "ffd20GetChangeFlat", e2, t2, { keys: l2 }), Hooks.callAll("ffd20GetChangeFlat", e2, t2, l2, s2), l2.map((e3) => {
    if (e3.startsWith("data.")) {
      const t3 = e3.replace("data.", "system.");
      return foundry.utils.logCompatibilityWarning(`Change targets pointing towards "data." (${e3}) are deprecated. Use "system." (${t3}) instead.`, { since: "FFD20 10.2.0", until: "FFD20 10.3.0" }), t3;
    }
    return e3;
  });
}, getBabTotal = function(e2) {
  return e2.attributes.bab.total;
}, getNegativeEnergyDrain = function(e2) {
  return -e2.attributes.energyDrain;
}, getAbilityMod = function(e2) {
  return function(t2) {
    return t2.abilities[e2]?.mod ?? 0;
  };
}, addDefaultChanges = function(e2) {
  const t2 = this.system, s2 = [];
  callOldNamespaceHookAll("ffd20.addDefaultChanges", "ffd20AddDefaultChanges", this, s2), Hooks.callAll("ffd20AddDefaultChanges", this, s2), e2.push(...s2.filter((e3) => e3 instanceof ffd20.components.ItemChange));
  const l2 = this.items.filter((e3) => "class" === e3.type && !["racial"].includes(e3.classType)).sort((e3, t3) => e3.sort - t3.sort), c2 = this.items.filter((e3) => "class" === e3.type && "racial" === e3.classType).sort((e3, t3) => e3.sort - t3.sort), u2 = game.settings.get("ffd20", "healthConfig"), m2 = "character" === this.type ? u2.hitdice.PC : u2.hitdice.NPC, d2 = u2.hitdice.Racial, h2 = { up: Math.ceil, nearest: Math.round, down: Math.floor }[u2.rounding], p2 = { discrete: false, continuous: true }[u2.continuity], push_health = (t3, s3) => {
    e2.push(new ffd20.components.ItemChange({ formula: t3, target: "misc", subTarget: "mhp", modifier: "untypedPerm", flavor: s3.name })), e2.push(new ffd20.components.ItemChange({ formula: t3, target: "misc", subTarget: "vigor", modifier: "untypedPerm", flavor: s3.name }));
  }, auto_health = (e3, t3, s3 = 0) => {
    if (0 === e3.system.hd)
      return;
    let l3 = 1 + (e3.system.hd - 1) * t3.rate;
    p2 || (l3 = h2(l3));
    const c3 = Math.min(e3.system.level, s3) * e3.system.hd, u3 = Math.max(0, e3.system.level - s3) * l3, m3 = ("base" === e3.system.classType) * e3.system.fc.hp.value;
    push_health(c3 + u3 + m3, e3);
  }, compute_health = (e3, t3) => {
    if (t3.auto) {
      let s3 = t3.maximized;
      for (const l3 of e3)
        auto_health(l3, t3, s3), s3 = Math.max(0, s3 - l3.system.level);
    } else
      e3.forEach((e4) => ((e5) => {
        let t4 = e5.system.hp + ("base" === e5.system.classType) * e5.system.fc.hp.value;
        p2 || (t4 = h2(t4)), push_health(t4, e5);
      })(e4));
  };
  compute_health(c2, d2), compute_health(l2, m2);
  const push_mana = (t3, s3) => {
    e2.push(new ffd20.components.ItemChange({ formula: t3.toString(), target: "misc", subTarget: "mmp", modifier: "untypedPerm", flavor: s3.name }));
  }, manual_mana = (e3) => {
    const t3 = null === e3.system.mp ? 0 : e3.system.mp;
    getSourceInfo(this.sourceInfo, "system.attributes.mp.max").positive.push({ value: e3.system.mp, name: game.i18n.format("FFD20.SourceInfoSkillRank_ClassBase", { className: e3.name }) }), push_mana(t3, e3);
  }, compute_mana = (e3) => {
    e3.forEach((e4) => {
      "no" == e4.system.classBaseMPauto || null == e4.system.classBaseMPauto ? manual_mana(e4) : ((e5) => {
        if ("noncaster" === e5.system.classBaseMPTypes)
          return;
        if (0 === e5.system.level)
          return;
        let t3 = 1;
        "half" === e5.system.classBaseMPauto && (t3 = 0.5);
        const s3 = CONFIG.FFD20.classMPlevels[e5.system.classBaseMPTypes], l3 = Math.floor(s3[e5.system.level - 1] * t3);
        push_mana(l3, e5);
      })(e4);
    });
  };
  compute_mana(c2), compute_mana(l2);
  const g2 = [...l2, ...c2], y2 = true === game.settings.get("ffd20", "useFractionalBaseBonuses");
  for (const s3 of Object.keys(t2.attributes.savingThrows)) {
    let l3 = false;
    t2.attributes.savingThrows[s3].total = t2.attributes.savingThrows[s3]?.base ?? 0;
    const c3 = g2.reduce((t3, c4) => {
      const u3 = c4.system.savingThrows[s3].base;
      return y2 ? true === c4.system.savingThrows[s3].good && (l3 = true) : e2.push(new ffd20.components.ItemChange({ formula: u3, target: "savingThrows", subTarget: s3, modifier: "untypedPerm", flavor: c4.name })), t3 + u3;
    }, 0);
    if (y2 && e2.push(new ffd20.components.ItemChange({ formula: Math.floor(c3), target: "savingThrows", subTarget: s3, modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.Base") })), y2 && l3) {
      const t3 = CONFIG.FFD20.classFractionalSavingThrowFormulas.goodSaveBonus, l4 = RollFFD20.safeRoll(t3).total;
      e2.push(new ffd20.components.ItemChange({ formula: l4, target: "savingThrows", subTarget: s3, modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.SavingThrowGoodFractionalBonus") }));
    }
  }
  const F2 = t2.attributes.hpAbility;
  F2 && (e2.push(new ffd20.components.ItemChange({ formula: (e3) => e3.abilities[F2].mod * e3.attributes.hd.total, operator: "function", target: "misc", subTarget: "mhp", modifier: "base", flavor: CONFIG.FFD20.abilities[F2] })), getProperty(this, "system.attributes.wounds.base") || e2.push(new ffd20.components.ItemChange({ formula: (e3) => 2 * e3.abilities[F2].total + e3.abilities[F2].drain, operator: "function", target: "misc", subTarget: "wounds", modifier: "base", flavor: CONFIG.FFD20.abilities[F2] }))), l2.forEach((t3) => {
    let s3 = t3.system.classCastingStat;
    if (null == s3 && (s3 = "noncaster"), "noncaster" === s3)
      return;
    if (0 === t3.system.level)
      return;
    const l3 = CONFIG.FFD20.ClassSpellLvlProgression[t3.system.classBaseMPTypes], c3 = Math.floor(RollFFD20.safeRoll(l3, { level: t3.system.level }).total), u3 = CONFIG.FFD20.classMPStatsBonus[c3];
    if ("" !== s3) {
      const t4 = JSON.stringify(u3);
      "intAndWis" === s3 ? e2.push(new ffd20.components.ItemChange({ formula: `${t4}[[@abilities.int.mod]] + ${t4}[[@abilities.wis.mod]]`, target: "misc", subTarget: "mmp", modifier: "base" })) : e2.push(new ffd20.components.ItemChange({ formula: `${t4}[[@abilities.${s3}.mod]]`, target: "misc", subTarget: "mmp", modifier: "base" }));
    }
  });
  for (const [s3, l3] of Object.entries(t2.attributes.speed)) {
    let t3 = l3.base;
    t3 || (t3 = 0), e2.push(new ffd20.components.ItemChange({ formula: t3, target: "speed", subTarget: `${s3}Speed`, modifier: "base", operator: "set", priority: 1001, flavor: game.i18n.localize("FFD20.Base") }));
  }
  e2.push(new ffd20.components.ItemChange({ formula: getBabTotal, operator: "function", target: "attack", subTarget: "~attackCore", modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.BAB") })), e2.push(new ffd20.components.ItemChange({ formula: getNegativeEnergyDrain, operator: "function", target: "attack", subTarget: "~attackCore", modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") })), e2.push(new ffd20.components.ItemChange({ formula: (e3) => -e3.attributes.acp.attackPenalty, operator: "function", target: "attack", subTarget: "~attackCore", modifier: "penalty", flavor: game.i18n.localize("FFD20.ArmorCheckPenalty") }));
  {
    e2.push(new ffd20.components.ItemChange({ formula: getBabTotal, operator: "function", target: "misc", subTarget: "cmd", modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.BAB") }));
    const s3 = t2.attributes.cmd.strAbility;
    s3 in CONFIG.FFD20.abilities && e2.push(new ffd20.components.ItemChange({ formula: `@abilities.${s3}.mod`, target: "misc", subTarget: "cmd", modifier: "untypedPerm", flavor: CONFIG.FFD20.abilities[s3] })), e2.push(new ffd20.components.ItemChange({ formula: getNegativeEnergyDrain, operator: "function", target: "misc", subTarget: "cmd", modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") }));
  }
  {
    const s3 = t2.attributes.init.ability;
    s3 && e2.push(new ffd20.components.ItemChange({ formula: getAbilityMod(s3), operator: "function", target: "misc", subTarget: "init", modifier: "untypedPerm", priority: -100, flavor: CONFIG.FFD20.abilities[s3] })), ["str", "dex"].includes(s3) && e2.push(new ffd20.components.ItemChange({ formula: (e3) => -e3.attributes.acp.attackPenalty, operator: "function", target: "misc", subTarget: "init", modifier: "penalty", priority: -100, flavor: game.i18n.localize("FFD20.ArmorCheckPenalty") }));
  }
  {
    let s3 = t2.attributes.savingThrows.fort.ability;
    s3 && e2.push(new ffd20.components.ItemChange({ formula: getAbilityMod(s3), operator: "function", target: "savingThrows", subTarget: "fort", modifier: "untypedPerm", flavor: CONFIG.FFD20.abilities[s3] })), s3 = t2.attributes.savingThrows.ref.ability, s3 && e2.push(new ffd20.components.ItemChange({ formula: getAbilityMod(s3), operator: "function", target: "savingThrows", subTarget: "ref", modifier: "untypedPerm", flavor: CONFIG.FFD20.abilities[s3] })), s3 = t2.attributes.savingThrows.will.ability, s3 && e2.push(new ffd20.components.ItemChange({ formula: getAbilityMod(s3), operator: "function", target: "savingThrows", subTarget: "will", modifier: "untypedPerm", flavor: CONFIG.FFD20.abilities[s3] })), e2.push(new ffd20.components.ItemChange({ formula: getNegativeEnergyDrain, operator: "function", target: "savingThrows", subTarget: "allSavingThrows", modifier: "penalty", flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") }));
  }
  {
    const s3 = t2.attributes.sr.formula || 0;
    e2.push(new ffd20.components.ItemChange({ formula: s3, target: "misc", subTarget: "spellResist", modifier: "base", priority: 1e3, flavor: game.i18n.localize("FFD20.Base") }));
  }
  {
    const s3 = t2.details.carryCapacity.bonus.user || 0;
    e2.push(new ffd20.components.ItemChange({ formula: s3, target: "misc", subTarget: "carryStr", modifier: "untyped", priority: 1e3, flavor: game.i18n.localize("FFD20.Custom") }));
    const l3 = t2.details.carryCapacity.multiplier.base ?? 1;
    e2.push(new ffd20.components.ItemChange({ formula: l3, target: "misc", subTarget: "carryMult", modifier: "base", priority: 1e3, flavor: game.i18n.localize("FFD20.Base") }));
    const c3 = t2.details.carryCapacity.multiplier.user || 0;
    e2.push(new ffd20.components.ItemChange({ formula: c3, target: "misc", subTarget: "carryMult", modifier: "untyped", priority: 1e3, flavor: game.i18n.localize("FFD20.Custom") }));
  }
  {
    const s3 = t2.attributes.naturalAC || 0;
    e2.push(new ffd20.components.ItemChange({ formula: s3, subTarget: "nac", modifier: "base", flavor: game.i18n.localize("FFD20.EquipTypeNatural") }));
  }
  this.items.filter((e3) => "equipment" === e3.type && e3.system.equipped).forEach((t3) => {
    let s3 = "aac";
    if ("shield" === t3.system.equipmentType && (s3 = "sac"), t3.system.armor.value || t3.system.armor.enh) {
      const l3 = t3.system.broken ? Math.floor(t3.system.armor.value / 2) : t3.system.armor.value, c3 = t3.system.armor.enh;
      e2.push(new ffd20.components.ItemChange({ formula: l3, subTarget: s3, modifier: "base" }, t3)), e2.push(new ffd20.components.ItemChange({ formula: c3, subTarget: s3, modifier: "enhancement" }, t3));
    }
  });
  {
    const s3 = t2.attributes.speed.fly.maneuverability;
    let l3 = 0;
    null != s3 && (l3 = CONFIG.FFD20.flyManeuverabilityValues[s3]), 0 !== l3 && e2.push(new ffd20.components.ItemChange({ formula: l3, target: "skill", subTarget: "skill.fly", modifier: "racial", flavor: game.i18n.localize("FFD20.FlyManeuverability") }));
  }
  e2.push(new ffd20.components.ItemChange({ formula: (e3) => e3.attributes.speed.climb.total > 0 ? 8 : 0, operator: "function", target: "skill", subTarget: "skill.clm", modifier: "racial", priority: -1, flavor: game.i18n.localize("FFD20.SpeedClimb") })), e2.push(new ffd20.components.ItemChange({ formula: (e3) => e3.attributes.speed.swim.total > 0 ? 8 : 0, operator: "function", target: "skill", subTarget: "skill.swm", modifier: "racial", priority: -1, flavor: game.i18n.localize("FFD20.SpeedSwim") })), e2.push(new ffd20.components.ItemChange({ formula: getNegativeEnergyDrain, operator: "function", target: "skills", subTarget: "skills", modifier: "untypedPerm", flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") }));
  const D2 = t2.traits.size;
  "med" !== D2 && (e2.push(new ffd20.components.ItemChange({ formula: CONFIG.FFD20.sizeMods[D2], target: "ac", subTarget: "ac", modifier: "size", flavor: game.i18n.localize("FFD20.BonusModifierSize") })), e2.push(new ffd20.components.ItemChange({ formula: CONFIG.FFD20.sizeStealthMods[D2], target: "skill", subTarget: "skill.ste", modifier: "size", flavor: game.i18n.localize("FFD20.BonusModifierSize") })), e2.push(new ffd20.components.ItemChange({ formula: CONFIG.FFD20.sizeFlyMods[D2], target: "skill", subTarget: "skill.fly", modifier: "size", flavor: game.i18n.localize("FFD20.BonusModifierSize") })), e2.push(new ffd20.components.ItemChange({ formula: CONFIG.FFD20.sizeSpecialMods[D2], target: "misc", subTarget: "cmd", modifier: "size", flavor: game.i18n.localize("FFD20.BonusModifierSize") })));
  for (const [s3, l3] of Object.entries(t2.attributes.conditions || {})) {
    if (!l3)
      continue;
    const t3 = CONFIG.FFD20.conditionMechanics[s3];
    if (t3) {
      for (const l4 of t3.changes ?? []) {
        const t4 = deepClone(l4);
        t4.flavor = CONFIG.FFD20.conditions[s3];
        const c3 = new ffd20.components.ItemChange(t4);
        e2.push(c3);
      }
      for (const e3 of t3.flags ?? [])
        this.changeFlags[e3] = true;
    }
  }
  !Number.isNaN(t2.attributes.energyDrain) && t2.attributes.energyDrain > 0 && (e2.push(new ffd20.components.ItemChange({ formula: (e3) => 5 * -e3.attributes.energyDrain, operator: "function", subTarget: "mhp", modifier: "untyped", priority: -750, flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") })), e2.push(new ffd20.components.ItemChange({ formula: (e3) => 5 * -e3.attributes.energyDrain, operator: "function", subTarget: "vigor", modifier: "untyped", priority: -750, flavor: game.i18n.localize("FFD20.CondTypeEnergyDrain") })));
}, resetSkills = function() {
  const e2 = this.system, t2 = e2.skills;
  for (const [s2, l2] of Object.entries(t2)) {
    if (!l2) {
      console.warn(`Bad skill data for "${s2}"`, this);
      continue;
    }
    let t3 = l2.acp ? e2.attributes.acp.total : 0, c2 = e2.abilities[l2.ability]?.mod || 0, u2 = l2.changeBonus || 0, m2 = l2.rank + (l2.cs && l2.rank > 0 ? 3 : 0) + c2 + u2 - t3;
    l2.mod = m2;
    for (const [d2, h2] of Object.entries(l2.subSkills || {}))
      h2 ? (t3 = h2.acp ? e2.attributes.acp.total : 0, c2 = e2.abilities[h2.ability]?.mod || 0, u2 = h2.changeBonus || 0, m2 = h2.rank + (h2.cs && h2.rank > 0 ? 3 : 0) + c2 + u2 - t3, h2.mod = m2) : console.warn(`Bad subskill data for "${s2}.${d2}"`, this);
  }
}, getSourceInfo = function(e2, t2) {
  return e2[t2] || (e2[t2] = { negative: [], positive: [] }), e2[t2];
}, setSourceInfoByName = function(e2, t2, s2, l2, c2 = true) {
  const u2 = c2 ? "positive" : "negative", m2 = getSourceInfo(e2, t2)[u2], d2 = m2.find((e3) => e3.name === s2);
  d2 ? d2.value = l2 : m2.push({ name: s2, value: l2 });
}, getHighestChanges = function(e2, t2 = { ignoreTarget: false }) {
  const s2 = { value: 0, ids: [], highestID: null }, l2 = Object.keys(CONFIG.FFD20.bonusModifiers).reduce((e3, l3) => (t2.ignoreTarget ? e3[l3] = duplicate(s2) : e3[l3] = {}, e3), {});
  for (const s3 of e2) {
    let e3;
    e3 = t2.ignoreTarget ? l2[s3.modifier] : l2[s3.modifier]?.[s3.subTarget], e3 && (e3.ids.push(s3._id), (e3.value < s3.value || !e3.highestID) && (e3.value = s3.value, e3.highestID = s3._id));
  }
  {
    let s3, c2;
    const filterFunc = function(e3) {
      return c2.highestID === e3._id || (-1 !== CONFIG.FFD20.stackingBonusModifiers.indexOf(s3) || !c2.ids.includes(e3._id));
    };
    for (s3 of Object.keys(l2))
      if (t2.ignoreTarget)
        c2 = l2[s3], e2 = e2.filter(filterFunc);
      else
        for (const t3 of Object.keys(l2[s3]))
          c2 = l2[s3][t3], e2 = e2.filter(filterFunc);
  }
  return e2;
}, j = Object.freeze(Object.defineProperty({ __proto__: null, applyChanges, getChangeFlat, addDefaultChanges, getSourceInfo, setSourceInfoByName, getHighestChanges }, Symbol.toStringTag, { value: "Module" }));
class ItemChange {
  constructor(e2, t2) {
    this.data = mergeObject(this.constructor.defaultData, e2), this.parent = t2, this.updateTime = new Date();
  }
  static async create(e2, t2) {
    const { parent: s2 } = t2;
    if (s2 instanceof ffd20.documents.item.ItemFFD20) {
      e2 = e2.map((e3) => mergeObject(this.defaultData, e3));
      const t3 = deepClone(s2.system.changes || []);
      return t3.push(...e2), await s2.update({ "system.changes": t3 }), e2.map((e3) => s2.changes.get(e3._id));
    }
    return [];
  }
  static get defaultData() {
    return { _id: randomID(8), formula: "", operator: "add", subTarget: "", modifier: "", priority: 0, value: 0, flavor: void 0 };
  }
  get id() {
    return this.data._id;
  }
  get _id() {
    return this.data._id;
  }
  get formula() {
    return this.data.formula;
  }
  get operator() {
    return this.data.operator;
  }
  get subTarget() {
    return this.data.subTarget;
  }
  get modifier() {
    return this.data.modifier;
  }
  get priority() {
    return this.data.priority;
  }
  get value() {
    return this.data.value;
  }
  get flavor() {
    return this.data.flavor ?? this.parent?.name.replace(/\[|\]/g, "") ?? this.modifier;
  }
  get continuous() {
    return this.data.continuous;
  }
  get isDeferred() {
    return ["damage", "wdamage", "sdamage"].includes(this.subTarget);
  }
  get source() {
    return this.data.source;
  }
  getSourceInfoTargets(e2) {
    switch (this.subTarget) {
      case "aac":
      case "sac":
      case "nac":
        return ["system.attributes.ac.normal.total", "system.attributes.ac.flatFooted.total"];
    }
    let t2 = getChangeFlat.call(e2, this.subTarget, this.modifier);
    return t2 instanceof Array || (t2 = [t2]), t2;
  }
  prepareData() {
  }
  preUpdate(e2) {
    if (e2.target) {
      const t2 = e2.subTarget || this.subTarget, s2 = this.parent.getChangeSubTargets(e2.target);
      null == s2[t2] && (e2.subTarget = Object.keys(s2)[0]);
    }
    return e2;
  }
  async update(e2, t2 = {}) {
    if (this.updateTime = new Date(), null != this.parent) {
      e2 = this.preUpdate(e2);
      const s2 = this.parent.system.changes.find((e3) => e3._id === this._id), l2 = this.parent.system.changes.indexOf(s2);
      if (l2 >= 0)
        return e2 = Object.entries(e2).reduce((e3, t3) => (e3[`system.changes.${l2}.${t3[0]}`] = t3[1], e3), {}), this.parent.update(e2, t2);
    }
  }
  applyChange(e2, t2 = null, { applySourceInfo: s2 = true } = {}) {
    t2 || (t2 = getChangeFlat.call(e2, this.subTarget, this.modifier)) instanceof Array || (t2 = [t2]);
    const l2 = this.parent ? this.parent.getRollData({ refresh: true }) : e2.getRollData({ refresh: true }), c2 = e2.changeOverrides;
    for (const u2 of t2) {
      const t3 = c2[u2];
      if (!c2 || t3) {
        let c3 = this.operator;
        "+" === c3 && (c3 = "add"), "=" === c3 && (c3 = "set");
        const m2 = null != u2 ? u2.match(/^system\.abilities\.([a-zA-Z0-9]+)\.(?:total|penalty|base)$/) : null, d2 = null != m2, h2 = m2?.[1], p2 = d2 ? deepClone(e2.system.abilities[h2]) : null;
        let g2 = 0;
        if (this.formula)
          if ("script" === c3)
            if (game.settings.get("ffd20", "allowScriptChanges")) {
              const e3 = this.createFunction(this.formula, ["d", "item"])(l2, this.parent);
              g2 = e3.value, c3 = e3.operator;
            } else
              ui.notifications?.warn(game.i18n.localize("SETTINGS.ffd20AllowScriptChangesE"), { console: false }), console.warn(game.i18n.localize("SETTINGS.ffd20AllowScriptChangesE"), this.parent), g2 = 0, c3 = "add";
          else
            "function" === c3 ? (g2 = this.formula(l2, this.parent), c3 = "add") : g2 = isNaN(this.formula) ? this.isDeferred ? RollFFD20.replaceFormulaData(this.formula, l2, { missing: 0 }) : RollFFD20.safeRoll(this.formula, l2, [u2, this, l2], { suppressError: this.parent && !this.parent.testUserPermission(game.user, "OWNER") }).total : parseFloat(this.formula);
        if (this.data.value = g2, !u2)
          continue;
        const y2 = t3[c3][this.modifier];
        switch (c3) {
          case "add":
            {
              let s3 = getProperty(e2, u2);
              if (null == s3) {
                if (u2.match(/^system\.abilities/))
                  continue;
                s3 = 0;
              }
              if ("number" == typeof s3)
                if (CONFIG.FFD20.stackingBonusModifiers.includes(this.modifier))
                  setProperty(e2, u2, s3 + g2), t3[c3][this.modifier] = (y2 ?? 0) + g2;
                else {
                  const l3 = y2 ? Math.max(0, g2 - (y2 ?? 0)) : g2;
                  setProperty(e2, u2, s3 + l3), t3[c3][this.modifier] = Math.max(y2 ?? 0, g2);
                }
            }
            break;
          case "set":
            setProperty(e2, u2, g2), t3[c3][this.modifier] = g2;
        }
        if (s2 && this.applySourceInfo(e2, g2), d2) {
          const t4 = getAbilityModifier(p2.total, { damage: p2.damage, penalty: p2.penalty }), s3 = e2.system.abilities[h2], l3 = getAbilityModifier(s3.total, { damage: s3.damage, penalty: s3.penalty });
          setProperty(e2, `system.abilities.${h2}.mod`, getProperty(e2, `system.abilities.${h2}.mod`) - (t4 - l3));
        }
      }
    }
  }
  applySourceInfo(e2) {
    const t2 = this.getSourceInfoTargets(e2);
    let s2 = this.value;
    switch (this.operator) {
      case "add":
      case "function":
        if (CONFIG.FFD20.stackingBonusModifiers.includes(this.modifier)) {
          const l2 = s2 >= 0 ? "positive" : "negative";
          for (const c2 of t2)
            getSourceInfo(e2.sourceInfo, c2)[l2].push({ value: s2, name: this.parent ? this.parent.name : this.flavor, type: this.parent ? this.parent.type : null, change: this });
        } else
          for (const l2 of t2) {
            const t3 = s2 >= 0 ? "positive" : "negative", c2 = getSourceInfo(e2.sourceInfo, l2)[t3];
            let u2 = true;
            c2.forEach((e3) => {
              const t4 = e3.change?.parent === this.parent, l3 = "base" === e3.change?.modifier && "enhancement" === this.modifier || "enhancement" === e3.change?.modifier && "base" === this.modifier, m2 = e3.change?.subTarget === this.subTarget, d2 = t4 && l3 && m2;
              (e3.change?.modifier === this.modifier || d2) && (d2 ? "base" === e3.change?.modifier ? (e3.value += s2, u2 = false) : (s2 += e3.value, c2.splice(c2.indexOf(e3), 1)) : e3.value < s2 ? c2.splice(c2.indexOf(e3), 1) : u2 = false);
            }), u2 && c2.push({ value: s2, name: this.parent ? this.parent.name : this.flavor, type: this.parent ? this.parent.type : null, change: this });
          }
        break;
      case "set":
        for (const l2 of t2)
          getSourceInfo(e2.sourceInfo, l2).positive.push({ value: s2, operator: "set", name: this.parent ? this.parent.name : this.flavor, type: this.parent ? this.parent.type : null, change: this });
    }
  }
  createFunction(e2, t2 = []) {
    try {
      const s2 = 'const actor = item.actor; const result = { operator: "add", value: 0, };', l2 = "return result;", c2 = `return function(${t2.join(",")}) {${s2}${e2}
${l2}};`;
      return new Function(c2)();
    } catch (t3) {
      return console.warn("Could not create change function with definition ", e2), function() {
        return { operator: "add", value: 0 };
      };
    }
  }
}
class DamageRoll extends RollFFD20 {
  constructor(e2, t2, s2 = {}) {
    super(e2, t2, s2), this.options.damageType ??= { values: ["untyped"], custom: "" };
  }
  static TYPES = { NORMAL: "normal", CRITICAL: "crit", NON_CRITICAL: "nonCrit" };
  get damageType() {
    return this.options.damageType;
  }
  get type() {
    return this.options.type;
  }
  get isCritical() {
    return this.type === this.constructor.TYPES.CRITICAL;
  }
}
class ItemAction {
  constructor(e2, t2) {
    this.data = e2, this.parent = t2, this.apps = {}, this.sheet = null, this.prepareData();
  }
  get description() {
    return this.data.description;
  }
  static async create(e2, t2 = {}) {
    const { parent: s2 } = t2;
    if (s2 instanceof ffd20.documents.item.ItemFFD20) {
      e2 = e2.map((e3) => mergeObject(this.defaultData, e3));
      const t3 = deepClone(s2.system.actions || []);
      return t3.push(...e2), await s2.update({ "system.actions": t3 }), e2.map((e3) => s2.actions.get(e3._id));
    }
    return [];
  }
  static get defaultDamageType() {
    return { values: [], custom: "" };
  }
  get item() {
    return this.parent;
  }
  get actor() {
    return this.parent.parentActor;
  }
  get id() {
    return this.data._id;
  }
  get img() {
    return this.data.img;
  }
  get name() {
    return this.data.name;
  }
  get tag() {
    return this.data.tag || createTag(this.name);
  }
  get hasAction() {
    return !!this.data.actionType;
  }
  get hasAttack() {
    return ["mwak", "rwak", "msak", "rsak", "mcman", "rcman"].includes(this.data.actionType);
  }
  get hasMultiAttack() {
    return this.hasAttack && (null != this.data.attackParts && this.data.attackParts.length > 0 || this.data.formulaicAttacks?.count?.value > 0);
  }
  get autoDeductCharges() {
    return this.getChargeCost() > 0;
  }
  get isCharged() {
    return this.item.isCharged;
  }
  get isSelfCharged() {
    return ["single", "day", "week", "charges"].includes(this.data.uses.self?.per);
  }
  get chargeCost() {
    return foundry.utils.logCompatibilityWarning("Action.chargeCost is deprecated. Please use Action#getChargeCost instead.", { since: "10.1.2", until: "10.2.0" }), this.getChargeCost();
  }
  getChargeCost({ rollData: e2 = null } = {}) {
    if (!this.isCharged)
      return 0;
    let t2 = "spell" === this.item.type && this.item.useSpellPoints() ? this.data.uses.spellPointCost : this.data.uses.autoDeductChargesCost;
    t2 ? "string" != typeof t2 && (console.warn(this.item.name, "action", this.name, "has invalid charge formula:", t2, this), t2 = this.item.getDefaultChargeFormula()) : t2 = this.item.getDefaultChargeFormula(), e2 ??= this.getRollData();
    const s2 = RollFFD20.safeRoll(t2, e2).total;
    return this.item.isSingleUse ? Math.max(-1, Math.min(1, s2)) : s2;
  }
  get range() {
    return foundry.utils.logCompatibilityWarning("Action.range is deprecated. Please use Action#getRange instead.", { since: "10.1.2", until: "10.2.0" }), this.getRange({ type: "single" });
  }
  get minRange() {
    return foundry.utils.logCompatibilityWarning("Action.minRange is deprecated. Please use Action#getRange instead.", { since: "10.1.2", until: "10.2.0" }), this.getRange({ type: "min" });
  }
  get maxRange() {
    return foundry.utils.logCompatibilityWarning("Action.maxRange is deprecated. Please use Action#getRange instead.", { since: "10.1.2", until: "10.2.0" }), this.getRange({ type: "max" });
  }
  getRange({ type: e2 = "single", rollData: t2 = null } = {}) {
    const s2 = "min" === e2 ? this.data.range.minValue : this.data.range.value, l2 = "min" === e2 ? this.data.range.minUnits : this.data.range.units;
    if (!l2)
      return "min" === e2 ? 0 : null;
    t2 || (t2 = this.getRollData());
    const c2 = calculateRange(s2, l2, t2);
    return ["single", "min"].includes(e2) ? c2 : c2 * this.data.range.maxIncrements;
  }
  get hasTemplate() {
    const e2 = this.data.measureTemplate.type, t2 = this.data.measureTemplate.size;
    return "string" == typeof e2 && "" !== e2 && ("string" == typeof t2 && t2.length > 0 || "number" == typeof t2 && t2 > 0);
  }
  get hasDamage() {
    return !!this.data.damage.parts?.length;
  }
  get hasRange() {
    return !!this.data.range?.units;
  }
  get isHealing() {
    return "heal" === this.data.actionType && this.data.damage.parts.length;
  }
  get hasEffect() {
    return this.hasDamage || null != this.data.effectNotes && this.data.effectNotes.length > 0;
  }
  get hasSave() {
    return "string" == typeof this.data.save?.type && this.data.save?.type.length > 0;
  }
  getDC(e2 = null) {
    if (!this.actor)
      return 0;
    let t2 = 10;
    const s2 = (e2 = e2 ?? this.getRollData()).dcBonus ?? 0;
    if ("spell" !== this.item.type) {
      const l2 = this.data.save.dc.toString() || "0";
      return t2 = RollFFD20.safeRoll(l2, e2).total + s2, t2;
    }
    {
      const t3 = this.item.spellbook;
      if (t3) {
        let l2 = t3.baseDCFormula;
        const c2 = e2.action;
        return c2.save.dc.length > 0 && (l2 += ` + ${c2.save.dc}`), RollFFD20.safeRoll(l2, e2).total + s2;
      }
    }
    return t2;
  }
  get hasSound() {
    return !!this.data.soundEffect;
  }
  get enhancementBonus() {
    return this.data.enh?.value ?? this.item.system.enh;
  }
  get damageSources() {
    const e2 = ["msak", "rsak", "spellsave"].includes(this.data.actionType), t2 = ["mwak", "rwak"].includes(this.data.actionType), s2 = this.parent.getContextChanges(e2 ? "sdamage" : t2 ? "wdamage" : "damage");
    return getHighestChanges(s2, { ignoreTarget: true });
  }
  getRollData() {
    const e2 = this.item.getRollData();
    return e2.action = deepClone(this.data), e2.dc = this.hasSave ? this.getDC(e2) : 0, Hooks.events.ffd20GetRollData?.length > 0 && Hooks.callAll("ffd20GetRollData", this, e2), e2;
  }
  static get defaultData() {
    return { _id: randomID(16), name: game.i18n.localize("FFD20.Action"), img: "systems/ffd20/icons/skills/gray_04.jpg", description: "", tag: "", activation: { cost: 1, type: "" }, unchainedAction: { activation: { cost: 1, type: "" } }, duration: { value: null, units: "" }, target: { value: "" }, range: { value: null, units: "", maxIncrements: 1, minValue: null, minUnits: "" }, uses: { autoDeductChargesCost: "", self: { value: 0, maxFormula: "", per: null } }, measureTemplate: { type: "", size: "", overrideColor: false, customColor: "", overrideTexture: false, customTexture: "" }, attackName: "", actionType: null, attackBonus: "", critConfirmBonus: "", damage: { parts: [], critParts: [], nonCritParts: [] }, attackParts: [], formulaicAttacks: { count: { formula: "" }, bonus: { formula: "" }, label: null }, formula: "", ability: { attack: null, damage: null, damageMult: 1, critRange: 20, critMult: 2 }, save: { dc: "", type: "", description: "" }, effectNotes: [], attackNotes: [], soundEffect: "", powerAttack: { multiplier: "", damageBonus: 2, critMultiplier: 1 }, naturalAttack: { primaryAttack: true, secondary: { attackBonus: "-5", damageMult: 0.5 } }, nonlethal: false, usesAmmo: false, spellEffect: "", spellArea: "", conditionals: [], enh: { value: null } };
  }
  prepareData() {
    if (this.hasAttack && this.parseFormulaicAttacks({ formula: getProperty(this.data, "formulaicAttacks.count.formula") }), this.data.conditionals instanceof Array && (this.conditionals = this._prepareConditionals(this.data.conditionals)), this.data.uses.self?.per) {
      const e2 = "single" === this.data.uses.self.per ? "1" : this.data.uses.self.maxFormula, t2 = RollFFD20.safeTotal(e2, this.getRollData());
      setProperty(this.data, "uses.self.max", t2);
    }
    null == this.data.enh?.value || ["weapon", "attack"].includes(this.item.type) || setProperty(this.data, "enh.value", null);
  }
  _prepareConditionals(e2) {
    const t2 = this.conditionals, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2._id) ? (e3 = t2.get(l2._id), e3.data = l2, e3.prepareData()) : e3 = new ffd20.components.ItemConditional(l2, this), s2.set(l2._id || e3.data._id, e3);
    }
    return s2;
  }
  async delete() {
    const e2 = deepClone(this.item.system.actions), t2 = this.item.system.actions.indexOf(this.data);
    e2.splice(t2, 1);
    const s2 = [];
    for (const e3 of Object.values(this.apps))
      s2.push(e3.close());
    return await Promise.all(s2), this.item.update({ "system.actions": e2 });
  }
  async update(e2, t2 = {}) {
    const s2 = this.item.system.actions.indexOf(this.data), l2 = deepClone(this.data), c2 = flattenObject(mergeObject(l2, expandObject(e2)));
    c2.name || (c2.name = this.name);
    {
      const e3 = ["attackParts", "damage.parts", "damage.critParts", "damage.nonCritParts", "attackNotes", "effectNotes", "conditionals"];
      for (const t3 of e3)
        keepUpdateArray(this.data, c2, t3);
    }
    await this.item.update({ [`system.actions.${s2}`]: expandObject(c2) }), await this.sheet?.render();
  }
  getChatData(e2 = {}, t2 = {}) {
    return this.parent.getChatData(e2, { ...t2, actionId: this.id });
  }
  getLabels(e2 = {}) {
    const t2 = this.data, s2 = {}, l2 = e2.rollData ?? this.getRollData();
    if (t2.activation) {
      const e3 = game.settings.get("ffd20", "unchainedActionEconomy") ? CONFIG.FFD20.abilityActivationTypes_unchained : CONFIG.FFD20.abilityActivationTypes, l3 = game.settings.get("ffd20", "unchainedActionEconomy") ? CONFIG.FFD20.abilityActivationTypesPlurals_unchained : CONFIG.FFD20.abilityActivationTypesPlurals, c2 = game.settings.get("ffd20", "unchainedActionEconomy") ? t2.unchainedAction.activation || {} : t2.activation || {};
      c2 && c2.cost > 1 && null != l3[c2.type] ? s2.activation = [c2.cost.toString(), l3[c2.type]].filterJoin(" ") : c2 && (s2.activation = [["minute", "hour", "action"].includes(c2.type) && c2.cost ? c2.cost.toString() : "", e3[c2.type]].filterJoin(" "));
    }
    if (this.hasSave && (s2.save = game.i18n.format("FFD20.DCThreshold", { threshold: this.getDC() })), this.hasRange) {
      const e3 = t2.range.units, c2 = CONFIG.FFD20.distanceUnits[e3];
      if (["personal", "touch", "melee", "reach"].includes(e3))
        s2.range = c2;
      else {
        const t3 = this.getRange({ type: "single", rollData: l2 });
        if (t3 > 0) {
          let e4 = game.settings.get("ffd20", "distanceUnits");
          "default" === e4 && (e4 = game.settings.get("ffd20", "units"));
          const l3 = "metric" === e4 ? "m" : "ft";
          s2.range = `${t3} ${l3}`;
        }
        ["close", "medium", "long"].includes(e3) && (s2.range += ` (${c2})`);
      }
    }
    return s2;
  }
  parseFormulaicAttacks({ formula: e2 = null } = {}) {
    if (!this.actor)
      return;
    const t2 = e2 ?? (this.data.formulaicAttacks?.count?.formula || "");
    let s2, l2 = 0;
    const c2 = this.getRollData();
    if (t2.length > 0 && (s2 = RollFFD20.safeRoll(t2, c2), l2 = Math.min(50, Math.max(0, s2.total))), s2?.err) {
      const e3 = game.i18n.localize("FFD20.ErrorItemFormula").format(this.name, this.actor?.name);
      console.warn(e3, s2.err, t2), ui.notifications.warn(e3);
    }
    const u2 = this.data.formulaicAttacks?.bonus || "";
    try {
      u2.length > 0 && (c2.attackCount = 1, RollFFD20.safeRoll(u2, c2));
    } catch (e3) {
      const t3 = game.i18n.localize("FFD20.ErrorItemFormula").format(this.name, this.actor?.name);
      console.warn(t3, e3, u2), ui.notifications.warn(t3);
    }
    return setProperty(this.data, "formulaicAttacks.count.value", l2), l2;
  }
  async rollAttack({ data: e2 = null, extraParts: t2 = [], bonus: s2 = null, primaryAttack: l2 = true } = {}) {
    const c2 = e2 ?? this.getRollData(), u2 = c2.item, m2 = c2.action;
    c2.item.primaryAttack = l2;
    const d2 = ["rwak", "rsak", "rcman"].includes(m2.actionType), h2 = ["mcman", "rcman"].includes(m2.actionType);
    c2.sizeBonus = h2 ? CONFIG.FFD20.sizeSpecialMods[c2.traits.size] : CONFIG.FFD20.sizeMods[c2.traits.size], c2.item.proficiencyPenalty = -4;
    const p2 = m2.ability.attack;
    let g2 = [];
    this.actor.sourceDetails["system.attributes.attack.shared"]?.reverse().forEach((e3) => g2.push(`${e3.value}[${e3.name}]`)), h2 && this.actor.sourceDetails["system.attributes.cmb.bonus"]?.reverse().forEach((e3) => g2.push(`${e3.value}[${e3.name}]`)), 0 !== c2.sizeBonus && g2.push(`@sizeBonus[${game.i18n.localize("FFD20.Size")}]`), "" != p2 && null != c2.abilities[p2] && 0 !== c2.abilities[p2].mod && g2.push(`@abilities.${p2}.mod[${CONFIG.FFD20.abilities[p2]}]`), g2 = g2.concat(t2), "string" != typeof m2.attackBonus || ["", "0"].includes(m2.attackBonus) ? "number" == typeof m2.attackBonus && (c2.item.attackBonus = m2.attackBonus, g2.push(`@item.attackBonus[${game.i18n.localize("FFD20.AttackRollBonus")}]`)) : g2.push(m2.attackBonus);
    const y2 = this.item.getContextChanges(d2 ? "rattack" : "mattack");
    ["mwak", "rwak", "mcman", "rcman"].includes(this.data.actionType) && this.item.system.masterwork && y2.push(new ffd20.components.ItemChange({ formula: "1", operator: "add", subTarget: "attack", modifier: "enh", value: 1, flavor: game.i18n.localize("FFD20.EnhancementBonus") })), this.enhancementBonus && y2.push(new ffd20.components.ItemChange({ formula: this.enhancementBonus.toString(), operator: "add", subTarget: "attack", modifier: "enh", value: this.enhancementBonus, flavor: game.i18n.localize("FFD20.EnhancementBonus") }));
    let F2 = [];
    F2 = getHighestChanges(y2.filter((e3) => (e3.applyChange(this.actor), !["set", "="].includes(e3.operator))), { ignoreTarget: true }).reduce((e3, t3) => (e3.push({ value: t3.value, source: t3.flavor }), e3), []);
    for (const e3 of F2)
      g2.push(`${e3.value}[${RollFFD20.cleanFlavor(e3.source)}]`);
    if ("attack" !== this.item.type || u2.proficient || g2.push(`@item.proficiencyPenalty[${game.i18n.localize("FFD20.ProficiencyPenalty")}]`), "natural" === this.item.system.attackType && false === l2) {
      const e3 = -5;
      g2.push(`${e3}[${game.i18n.localize("FFD20.SecondaryAttack")}]`);
    }
    s2 && (c2.bonus = RollFFD20.safeRoll(s2, c2).total, g2.push(`@bonus[${game.i18n.localize("FFD20.SituationalBonus")}]`));
    return await new D20RollFFD20([c2.d20 || "1d20", ...g2.filter((e3) => !!e3)].join("+"), c2).evaluate({ async: true });
  }
  rollEffect({ critical: e2 = false, primaryAttack: t2 = true } = {}) {
    const s2 = this.getRollData();
    if (!this.hasEffect)
      throw new Error("You may not make an Effect Roll with this Item.");
    s2.critMult = 1, e2 && (s2.critMult = this.data.ability.critMult), null != this.data.ability.damageMult && (s2.ablMult = this.data.ability.damageMult);
    const l2 = this.parent.getContextNotes("attacks.effect").reduce((e3, t3) => (t3.notes.reduce((e4, t4) => (e4.push(...t4.split(/[\n\r]+/)), e4), []).forEach((t4) => {
      e3.push(t4);
    }), e3), []);
    l2.push(...this.data.effectNotes);
    let c2 = "";
    for (const e3 of l2)
      e3.length > 0 && (c2 += `<span class="tag">${e3}</span>`);
    if (0 === c2.length)
      return "";
    const u2 = TextEditor.enrichHTML(c2, { rollData: s2 });
    return `<div class="flexcol property-group"><label>${game.i18n.localize("FFD20.EffectNotes")}</label><div class="flexrow tag-list">${u2}</div></div>`;
  }
  async rollFormula(e2 = {}) {
    const t2 = this.data;
    if (!t2.formula)
      throw new Error(game.i18n.localize("FFD20.ErrorNoFormula").format(this.name));
    const s2 = this.parent.getRollData();
    s2.item = t2;
    const l2 = `${this.name} - ${game.i18n.localize("FFD20.OtherFormula")}`;
    return (await RollFFD20.create(t2.formula, s2).evaluate({ async: true })).toMessage({ speaker: ChatMessage.getSpeaker({ actor: this.parent }), flavor: t2.chatFlavor || l2, rollMode: game.settings.get("core", "rollMode") });
  }
  async rollDamage({ data: e2 = null, critical: t2 = false, extraParts: s2 = [], conditionalParts: l2 = {}, primaryAttack: c2 = true } = {}) {
    const u2 = e2 ?? this.getRollData();
    if (!this.hasDamage)
      throw new Error("You may not make a Damage Roll with this Action.");
    u2.critMult = 1, t2 && (u2.critMult = this.data.ability.critMult), null == u2.ablMult && (u2.ablMult = u2.action?.ability.damageMult);
    let m2 = this.data.damage.parts.map((e3) => ({ base: e3[0], extra: [], damageType: e3[1], type: "normal" }));
    if (l2["damage.normal"]?.forEach((e3) => {
      const [t3, s3, l3] = e3;
      l3 ? m2[0].extra.push(t3) : m2.push({ base: t3, extra: [], damageType: s3, type: "normal" });
    }), true === t2 && (null != getProperty(this.data, "damage.critParts") && (m2 = m2.concat(this.data.damage.critParts.map((e3) => ({ base: e3[0], extra: [], damageType: e3[1], type: "crit" })))), l2["damage.crit"]?.forEach((e3) => {
      const [t3, s3, l3] = e3;
      l3 ? m2[0].extra.push(t3) : m2.push({ base: t3, extra: [], damageType: s3, type: "crit" });
    })), false === t2 && (null != getProperty(this.data, "damage.nonCritParts") && (m2 = m2.concat(this.data.damage.nonCritParts.map((e3) => ({ base: e3[0], extra: [], damageType: e3[1], type: "nonCrit" })))), l2["damage.nonCrit"]?.forEach((e3) => {
      const [t3, s3, l3] = e3;
      l3 ? m2[0].extra.push(t3) : m2.push({ base: t3, extra: [], damageType: s3, type: "nonCrit" });
    })), !this.isHealing) {
      const e3 = ["msak", "rsak", "spellsave"].includes(this.data.actionType), t3 = ["mwak", "rwak"].includes(this.data.actionType), s3 = this.item.getContextChanges(e3 ? "sdamage" : t3 ? "wdamage" : "damage");
      if (this.enhancementBonus && s3.push(new ffd20.components.ItemChange({ formula: this.enhancementBonus.toString(), operator: "add", subTarget: "damage", modifier: "enh", value: this.enhancementBonus, flavor: game.i18n.localize("FFD20.EnhancementBonus") })), getHighestChanges(s3.filter((e4) => (e4.applyChange(this.actor), !["set", "="].includes(e4.operator))), { ignoreTarget: true }).forEach((e4) => {
        let t4 = e4.value;
        /[\s+-?:]/.test(t4) && (t4 = `(${t4})`), m2[0].extra.push(`${t4}[${e4.flavor}]`);
      }), this.item.system.broken) {
        const e4 = game.i18n.localize("FFD20.Broken");
        m2[0].extra.push(`-2[${e4}]`);
      }
    }
    const d2 = this.data.ability.damage;
    if ("string" == typeof d2 && "" !== d2) {
      u2.ablDamage = Math.floor(u2.abilities[d2].mod * u2.ablMult), u2.abilities[d2].mod < 0 && (u2.ablDamage = u2.abilities[d2].mod);
      const e3 = CONFIG.FFD20.abilities[d2];
      m2[0].extra.push(`@ablDamage[${e3}]`);
    }
    const h2 = [];
    for (let e3 = 0; e3 < m2.length; e3++) {
      const t3 = m2[e3];
      let l3 = [];
      0 === e3 && (l3 = [...t3.extra, ...s2]);
      const c3 = [t3.base, ...l3].join(" + ");
      if (0 != c3.length)
        try {
          const e4 = await new DamageRoll(c3, u2, { damageType: t3.damageType, type: t3.type }).evaluate({ async: true });
          h2.push(e4);
        } catch (e4) {
          throw console.error("Error with damage formula:", c3, this), e4;
        }
    }
    return h2;
  }
  getConditionalTargets() {
    const e2 = {};
    return this.hasAttack && (e2.attack = game.i18n.localize(CONFIG.FFD20.conditionalTargets.attack._label)), this.hasDamage && (e2.damage = game.i18n.localize(CONFIG.FFD20.conditionalTargets.damage._label)), e2.size = game.i18n.localize(CONFIG.FFD20.conditionalTargets.size._label), ("spell" === this.item.type || this.hasSave) && (e2.effect = game.i18n.localize(CONFIG.FFD20.conditionalTargets.effect._label)), Object.keys(this.getConditionalSubTargets("misc")).length > 0 && (e2.misc = game.i18n.localize(CONFIG.FFD20.conditionalTargets.misc._label)), e2;
  }
  getConditionalSubTargets(e2) {
    const t2 = {};
    if (hasProperty(CONFIG.FFD20.conditionalTargets, e2))
      for (const [s2, l2] of Object.entries(CONFIG.FFD20.conditionalTargets[e2]))
        s2.startsWith("_") || s2.startsWith("~") || (t2[s2] = l2);
    if (["attack", "damage"].includes(e2) && (this.hasAttack ? t2.attack_0 = `${game.i18n.localize("FFD20.Attack")} 1` : delete t2.rapidShotDamage, this.hasMultiAttack))
      for (const [e3, s2] of Object.entries(this.data.attackParts))
        t2[`attack_${Number(e3) + 1}`] = s2[1];
    return "effect" === e2 && this.hasSave && (t2.dc = game.i18n.localize("FFD20.DC")), "misc" === e2 && this.isCharged && "spell" !== this.type && (t2.charges = game.i18n.localize("FFD20.ChargeCost")), t2;
  }
  getConditionalModifierTypes(e2) {
    const t2 = {};
    if ("attack" === e2 || "damage" === e2)
      for (const [e3, s2] of Object.entries(CONFIG.FFD20.bonusModifiers))
        t2[e3] = s2;
    if ("damage" === e2)
      for (const [e3, s2] of Object.entries(CONFIG.FFD20.damageTypes))
        t2[e3] = s2;
    return t2;
  }
  getConditionalCritical(e2) {
    let t2 = {};
    return "attack" === e2 && (t2 = { ...t2, normal: "FFD20.Normal", crit: "FFD20.CriticalConfirmBonus" }), "damage" === e2 && (t2 = { ...t2, normal: "FFD20.Normal" }, this.hasAttack && (t2 = { ...t2, crit: "FFD20.CritDamageBonusFormula", nonCrit: "FFD20.NonCritDamageBonusFormula" })), t2;
  }
  async use(e2 = {}) {
    return e2.actionID = this.id, this.item.use(e2);
  }
}
class ChatAttack {
  constructor(e2, { label: t2 = "", rollData: s2 = {}, targets: l2 = null } = {}) {
    this._rollData = s2, this.setAction(e2), this.label = t2, this.attack = null, this.critConfirm = null, this.hasAttack = false, this.hasCritConfirm = false, this.damage = { flavor: "", tooltip: "", total: 0, rolls: [] }, this.critDamage = { flavor: "", tooltip: "", total: 0, rolls: [] }, this.hasDamage = false, this.hasRange = e2.item.hasRange, this.nonlethal = false, this.damageRows = [], this.notesOnly = true, this.cards = {}, this.hasCards = false, this.attackNotes = [], this.effectNotes = [], this.attackNotesHTML = "", this.effectNotesHTML = "", this.targets = l2, this.ammo = null;
  }
  setAmmo(e2) {
    if (null == e2)
      this.ammo = null;
    else {
      const t2 = this.action.item.actor?.items.get(e2);
      if (null == t2)
        return void (this.ammo = null);
      this.ammo = { id: e2, img: t2.img, name: t2.name };
    }
  }
  get critRange() {
    return this.action.item.system.broken ? 20 : getProperty(this.action, "data.ability.critRange") || 20;
  }
  setAction(e2) {
    if (null == e2)
      return this.rollData = this._rollData, void (this.action = null);
    this.action = e2, this.rollData = mergeObject(this.action.getRollData(), this._rollData, { inplace: false }), this.isHealing = e2.isHealing, this.setRollData();
  }
  setRollData() {
    const e2 = this.rollData;
    e2.critMult = 1, e2.critCount = 0, e2.critConfirmBonus = RollFFD20.safeTotal(e2.action.critConfirmBonus || "0") ?? 0, null != e2.action.ability.damageMult && (e2.ablMult = e2.action.ability.damageMult);
  }
  setAttackNotesHTML() {
    if (0 === this.attackNotes.length)
      return void (this.attackNotesHTML = "");
    let e2 = "";
    for (const t3 of this.attackNotes)
      t3.length > 0 && (e2 += `<span class="tag">${t3}</span>`);
    const t2 = TextEditor.enrichHTML(e2, { rollData: this.rollData, async: false });
    this.attackNotesHTML = `<div class="flexcol property-group gm-sensitive attack-notes"><label>${game.i18n.localize("FFD20.AttackNotes")}</label><div class="flexrow tag-list">${t2}</div></div>`;
  }
  setEffectNotesHTML() {
    if (0 === this.effectNotes.length)
      return void (this.effectNotesHTML = "");
    let e2 = "";
    for (const t3 of this.effectNotes)
      t3.length > 0 && (e2 += `<span class="tag">${t3}</span>`);
    const t2 = TextEditor.enrichHTML(e2, { rollData: this.rollData, async: false });
    this.effectNotesHTML = `<div class="flexcol property-group gm-sensitive effect-notes"><label>${game.i18n.localize("FFD20.EffectNotes")}</label><div class="flexrow tag-list">${t2}</div></div>`;
  }
  async addAttack({ noAttack: e2 = false, bonus: t2 = null, extraParts: s2 = [], critical: l2 = false, conditionalParts: c2 = {} } = {}) {
    if (!this.action.item)
      return;
    let u2;
    if (this.hasAttack = true, this.notesOnly = false, true === l2) {
      0 !== this.rollData.critConfirmBonus && s2.push(`@critConfirmBonus[${game.i18n.localize("FFD20.CriticalConfirmation")}]`);
      const e3 = ffd20.documents.actor.changes.getChangeFlat.call(this.action.item, "critConfirm");
      this.action.item.parentActor?.sourceDetails[e3]?.forEach((e4) => s2.push(`(${e4.value})[${e4.name}]`)), c2["attack.crit"]?.length && s2.push(...c2["attack.crit"]);
    } else
      c2["attack.normal"]?.length && s2.push(...c2["attack.normal"]);
    if (this.action.item.broken && !l2) {
      const e3 = game.i18n.localize("FFD20.Broken");
      s2.push(`-2[${e3}]`);
    }
    if (!e2) {
      u2 = await this.action.rollAttack({ data: this.rollData, bonus: t2, extraParts: s2 }), true === l2 ? this.critConfirm = u2 : this.attack = u2;
      const e3 = u2.dice.length ? u2.dice[0].total : u2.terms[0].total, m2 = ["mcman", "rcman"].includes(this.action.data.actionType);
      this.critRange, !l2 && !m2 && e3 >= this.critRange && this.rollData.action.ability.critMult > 1 && (this.hasCritConfirm = true, this.rollData.critMult = Math.max(1, this.rollData.action.ability.critMult), this.action.item.system.broken && (this.rollData.critMult = 1), await this.addAttack({ bonus: t2, extraParts: s2, critical: true, conditionalParts: c2 }));
    }
    u2.flavor = l2 ? game.i18n.localize("FFD20.CriticalConfirmation") : this.label, "" === this.attackNotes && this.addAttackNotes();
  }
  addAttackNotes() {
    if (!this.action.item)
      return;
    const e2 = this.action.data.actionType, t2 = { rsak: ["ranged", "rangedSpell"], rwak: ["ranged", "rangedWeapon"], rcman: ["ranged"], mwak: ["melee", "meleeWeapon"], msak: ["melee", "meleeSpell"], mcman: ["melee"] }, s2 = [];
    null != this.action.item?.actor && (s2.push(...this.action.item.actor.getContextNotesParsed("attacks.attack")), (t2[e2]?.length || 0) > 0 && t2[e2].forEach((e3) => s2.push(...this.action.item.actor.getContextNotesParsed(`attacks.${e3}`)))), this.action.item?.system.attackNotes && s2.push(...this.action.item.system.attackNotes), this.action.data.attackNotes && s2.push(...this.action.data.attackNotes), ["mcman", "rcman"].includes(this.action.data.actionType) && s2.push(...this.action.item?.actor?.getContextNotesParsed("misc.cmb") ?? []), this.attackNotes = s2, this.setAttackNotesHTML();
  }
  async addDamage({ flavor: e2 = null, extraParts: t2 = [], critical: s2 = false, conditionalParts: l2 = {} } = {}) {
    if (!this.action.item)
      return;
    this.hasDamage = true, this.notesOnly = false;
    let c2 = this.damage;
    true === s2 && (c2 = this.critDamage);
    const u2 = duplicate(this.rollData);
    u2.critCount = 0;
    const m2 = s2 ? Math.max(1, u2.critMult - 1) : 1;
    for (let e3 = 0; e3 < m2; ++e3)
      s2 && u2.critCount++, c2.rolls.push(...await this.action.rollDamage({ data: u2, extraParts: t2, critical: s2, conditionalParts: l2 }));
    let d2 = "";
    for (const e3 of c2.rolls)
      d2 += await renderTemplate("systems/ffd20/templates/internal/damage-tooltip.hbs", { part: e3 });
    e2 || (e2 = s2 ? this.isHealing ? game.i18n.localize("FFD20.HealingCritical") : game.i18n.localize("FFD20.DamageCritical") : this.isHealing ? game.i18n.localize("FFD20.Healing") : game.i18n.localize("FFD20.Damage"));
    let h2 = c2.rolls.reduce((e3, t3) => e3 + t3.total, 0);
    s2 && (h2 = this.damage.rolls.reduce((e3, t3) => e3 + t3.total, h2)), h2 < 1 && (h2 = 1, e2 = game.i18n.localize("FFD20.Nonlethal"), this.nonlethal = true), (this.action.data.nonlethal || this.action.item.system.properties?.nnl) && (this.nonlethal = true, e2 = game.i18n.localize("FFD20.Nonlethal")), c2.flavor = e2, c2.tooltip = d2, c2.total = h2;
  }
  addEffectNotes() {
    if (!this.action.item)
      return;
    let e2 = [];
    null != this.action.item && null != this.action.item.actor && (e2 = this.action.item.actor.getContextNotes("attacks.effect").reduce((e3, t2) => {
      for (const s2 of t2.notes)
        e3.push(...s2.split(/[\n\r]+/));
      return e3;
    }, []), "spell" === this.action.item.type && this.action.item.actor.getContextNotes("spell.effect").forEach((t2) => {
      for (const s2 of t2.notes)
        e2.push(...s2.split(/[\n\r]+/));
    })), null != this.action.item && this.action.item.system.effectNotes && e2.push(...this.action.item.system.effectNotes), this.action.data.effectNotes && e2.push(...this.action.data.effectNotes), this.effectNotes = this.effectNotes.concat(e2), this.setEffectNotesHTML();
  }
  finalize() {
    this.hasCards = Object.keys(this.cards).length > 0;
    for (let e2 = 0; e2 < Math.max(this.damage.rolls.length, this.critDamage.rolls.length); e2++)
      this.damageRows.push({ normal: null, crit: null });
    for (let e2 = 0; e2 < this.damage.rolls.length; e2++)
      this.damageRows[e2].normal = this.damage.rolls[e2];
    for (let e2 = 0; e2 < this.critDamage.rolls.length; e2++)
      this.damageRows[e2].crit = this.critDamage.rolls[e2];
    return this;
  }
}
const B = Object.freeze({ NO_ACTOR_PERM: 1, DISABLED: 2, INSUFFICIENT_QUANTITY: 3, INSUFFICIENT_CHARGES: 4, MISSING_AMMO: 5, INSUFFICIENT_AMMO: 6 });
class ActionUse {
  actor;
  item;
  action;
  shared;
  constructor(e2 = {}) {
    Object.defineProperties(this, { shared: { value: e2 }, item: { value: e2.item }, action: { value: e2.action }, actor: { value: e2.item.parentActor } });
  }
  checkRequirements() {
    const e2 = this.item.parentActor;
    if (e2 && !e2.isOwner) {
      const t3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(e2.name);
      return console.warn(t3), ui.notifications.warn(t3), B.NO_ACTOR_PERM;
    }
    if ("feat" === this.item.type && this.item.system.disabled) {
      const e3 = game.i18n.localize("FFD20.ErrorFeatDisabled");
      return console.warn(e3), ui.notifications.warn(e3), B.DISABLED;
    }
    const t2 = getProperty(this, "system.quantity");
    if (null != t2 && t2 <= 0) {
      const e3 = game.i18n.localize("FFD20.ErrorNoQuantity");
      return console.warn(e3), ui.notifications.warn(e3), B.INSUFFICIENT_QUANTITY;
    }
    if (this.item.isCharged && this.item.charges < this.shared.chargeCost) {
      const e3 = game.i18n.localize("FFD20.ErrorInsufficientCharges").format(this.item.name);
      return console.warn(e3), ui.notifications.warn(e3), B.INSUFFICIENT_CHARGES;
    }
    if (this.action.isSelfCharged && this.action.data.uses.self?.value < 1) {
      const e3 = game.i18n.localize("FFD20.ErrorInsufficientCharges").format(`${this.item.name}: ${this.action.name}`);
      return console.warn(e3), ui.notifications.warn(e3), B.INSUFFICIENT_CHARGES;
    }
    return 0;
  }
  getRollData() {
    const e2 = duplicate(this.shared.action.getRollData());
    return e2.d20 = "1d20" !== this.shared.dice ? this.shared.dice : "", e2;
  }
  createAttackDialog() {
    return new ffd20.applications.AttackDialog(this.shared.action, this.shared.rollData).show();
  }
  alterRollData(e2 = {}) {
    let t2;
    t2 = e2 instanceof jQuery ? new FormDataExtended(e2[0].querySelector("form")).object : e2, t2.d20 && (this.shared.rollData.d20 = t2.d20);
    const s2 = t2["attack-bonus"];
    s2 && this.shared.attackBonus.push(s2);
    const l2 = t2["damage-bonus"];
    if (l2 && this.shared.damageBonus.push(l2), this.shared.rollMode = t2.rollMode ?? game.settings.get("core", "rollMode"), t2["point-blank-shot"] && (this.shared.attackBonus.push(`1[${game.i18n.localize("FFD20.PointBlankShot")}]`), this.shared.damageBonus.push(`1[${game.i18n.localize("FFD20.PointBlankShot")}]`), this.shared.pointBlankShot = true), this.shared.fullAttack && t2.manyshot && (this.shared.manyShot = true), this.shared.fullAttack && t2["rapid-shot"] && this.shared.attackBonus.push(`-2[${game.i18n.localize("FFD20.RapidShot")}]`), null != t2["primary-attack"] && setProperty(this.shared.rollData, "action.naturalAttack.primaryAttack", t2["primary-attack"]), null != t2["measure-template"] && (this.shared.useMeasureTemplate = t2["measure-template"]), setProperty(this.shared.rollData, "item.held", t2.held ?? "normal"), null != t2["damage-ability-multiplier"] && (this.shared.rollData.action.ability.damageMult = t2["damage-ability-multiplier"]), t2["power-attack"]) {
      const e3 = this.shared.rollData.action?.powerAttack?.damageBonus ?? 2;
      let t3 = (1 + Math.floor(this.shared.rollData.attributes.bab.total / 4)) * e3, s3 = this.shared.rollData.item?.powerAttack?.multiplier;
      s3 ? s3 = parseFloat(s3) : (s3 = 1, "natural" === this.item.system.attackType ? s3 = this.shared.rollData.action?.naturalAttack.primaryAttack ? this.shared.rollData.action.ability?.damageMult : this.shared.rollData.action.naturalAttack?.secondary?.damageMult ?? 0.5 : "2h" === this.shared.rollData?.item?.held ? s3 = 1.5 : "oh" === this.shared.rollData?.item?.held && (s3 = 0.5)), t3 = Math.floor(t3 * s3);
      const l3 = ["rwak", "rsak"].includes(this.action.data.actionType) ? game.i18n.localize("FFD20.DeadlyAim") : game.i18n.localize("FFD20.PowerAttack"), c2 = -(1 + Math.floor(getProperty(this.shared.rollData, "attributes.bab.total") / 4));
      this.shared.rollData.powerAttackPenalty = c2, this.shared.attackBonus.push(`${c2}[${l3}]`), this.shared.powerAttack = true, this.shared.rollData.powerAttackBonus = t3, this.shared.rollData.powerAttackPenalty = c2;
    } else
      this.shared.rollData.powerAttackBonus = 0, this.shared.rollData.powerAttackPenalty = 0;
    if (Object.keys(t2).forEach((e3) => {
      const s3 = e3.match(/conditional\.(\d+)/)?.[1];
      s3 && t2[e3] && (this.shared.conditionals ? this.shared.conditionals.push(parseInt(s3)) : this.shared.conditionals = [parseInt(s3)]);
    }), "natural" === this.shared.rollData.item.attackType && false === this.shared.rollData.action?.naturalAttack.primaryAttack) {
      const e3 = this.shared.rollData.action.naturalAttack?.secondary?.attackBonus || "-5", t3 = this.shared.rollData.action.naturalAttack?.secondary?.damageMult ?? 0.5;
      this.shared.attackBonus.push(`(${e3})[${game.i18n.localize("FFD20.SecondaryAttack")}]`), this.shared.rollData.action.ability.damageMult = t3;
    }
    this.shared.casterLevelCheck = t2["cl-check"], this.shared.concentrationCheck = t2.concentration, !this.shared.conditionals && foundry.utils.isEmpty(t2) && (this.shared.conditionals = this.shared.action.data.conditionals?.reduce((e3, t3, s3) => (t3.default && e3.push(s3), e3), []));
  }
  generateAttacks(e2 = false) {
    const t2 = this.shared.rollData, s2 = t2.action;
    let l2 = 1;
    const c2 = s2.attackName || game.i18n.format("FFD20.FormulaAttack", { 0: l2 }), u2 = e2 || this.shared.fullAttack, m2 = u2 ? s2.attackParts.reduce((e3, t3) => (e3.push({ attackBonus: t3[0], label: t3[1] || game.i18n.format("FFD20.FormulaAttack", { 0: l2 += 1 }) }), e3), [{ attackBonus: "", label: c2 }]) : [{ attackBonus: "", label: c2 }];
    if (u2) {
      const e3 = s2.formulaicAttacks?.count?.formula, c3 = RollFFD20.safeRoll(e3, t2)?.total ?? 0, u3 = s2.formulaicAttacks?.bonus?.formula || "0";
      if (c3 > 0)
        try {
          for (let e4 = 0; e4 < c3; e4++) {
            t2.formulaicAttack = e4 + 1;
            const c4 = RollFFD20.safeRoll(u3, t2).total;
            m2.push({ attackBonus: `(${c4})[${game.i18n.localize("FFD20.Iterative")}]`, label: s2.formulaicAttacks.label ? s2.formulaicAttacks.label.format(e4 + 1) : game.i18n.format("FFD20.FormulaAttack", { 0: l2 += 1 }) });
          }
        } catch (e4) {
          console.error(e4);
        }
    }
    if (s2.usesAmmo) {
      const e3 = this.item.getFlag("ffd20", "defaultAmmo"), t3 = this.item.actor.items.get(e3), s3 = t3?.system.quantity ?? 0, l3 = t3?.flags.ffd20?.abundant;
      for (let t4 = 0; t4 < m2.length; t4++) {
        const c3 = m2[t4];
        c3.ammo = l3 || s3 >= t4 + 1 ? e3 : null;
      }
    }
    return m2;
  }
  async subtractAmmo(e2 = 1) {
    if (!this.shared.action.data.usesAmmo)
      return;
    const t2 = {};
    for (const e3 of this.shared.attacks)
      if (e3.ammo) {
        if (this.item.actor.items.get(e3.ammo).flags?.ffd20?.abundant)
          continue;
        t2[e3.ammo] ? t2[e3.ammo]++ : t2[e3.ammo] = 1;
      }
    if (!foundry.utils.isEmpty(t2)) {
      const e3 = Object.entries(t2).reduce((e4, t3) => {
        const s2 = this.item.actor.items.get(t3[0]).system.quantity, l2 = { _id: t3[0], "system.quantity": s2 - t3[1] };
        return e4.push(l2), e4;
      }, []);
      return this.item.actor.updateEmbeddedDocuments("Item", e3);
    }
  }
  handleConditionals() {
    if (this.shared.conditionals) {
      const e2 = {};
      for (const t2 of this.shared.conditionals) {
        const s2 = this.shared.action.data.conditionals[t2], l2 = createTag(s2.name);
        for (const [t3, c2] of s2.modifiers.entries()) {
          const u2 = RollFFD20.safeRoll(c2.formula, this.shared.rollData);
          if (u2.err) {
            const e3 = game.i18n.format("FFD20.WarningConditionalRoll", { number: t3 + 1, name: s2.name });
            console.warn(e3), ui.notifications.warn(e3);
            continue;
          }
          e2[[l2, t3].join(".")] = RollFFD20.safeRoll(c2.formula, this.shared.rollData).total;
          const m2 = `${c2.target}.${c2.subTarget}${c2.critical ? "." + c2.critical : ""}`;
          if (["attack", "effect", "misc"].includes(c2.target)) {
            const e3 = /\[.*\]/.test(c2.formula) ? c2.formula : `(${c2.formula})[${s2.name}]`;
            this.shared.conditionalPartsCommon[m2] = [...this.shared.conditionalPartsCommon[m2] ?? [], e3];
          } else
            "damage" === c2.target ? this.shared.conditionalPartsCommon[m2] = [...this.shared.conditionalPartsCommon[m2] ?? [], [c2.formula, c2.damageType, false]] : "size" === c2.target && (this.shared.rollData.size += u2.total);
        }
      }
      this.shared.rollData.conditionals = expandObject(e2, 5);
      for (const e3 of ["effect.cl", "effect.dc", "misc.charges"])
        if (null != this.shared.conditionalPartsCommon[e3]) {
          const t2 = this.shared.conditionalPartsCommon[e3].join("+"), s2 = RollFFD20.safeRoll(t2, this.shared.rollData, [e3, t2]).total;
          switch (e3) {
            case "effect.cl":
              this.shared.rollData.cl += s2;
              break;
            case "effect.dc":
              this.shared.rollData.dcBonus = s2;
              break;
            case "misc.charges":
              this.shared.rollData.chargeCostBonus = s2;
          }
        }
    }
  }
  checkAttackRequirements() {
    let e2 = this.shared.action.getChargeCost({ rollData: this.shared.rollData });
    if (0 != e2) {
      let t2 = this.item.charges;
      if ("spell" === this.item.type && this.item.useSpellPoints() && (t2 = this.item.getSpellUses()), e2 += this.shared.rollData.chargeCostBonus ?? 0, e2 > t2) {
        const e3 = game.i18n.localize("FFD20.ErrorInsufficientCharges").format(this.item.name);
        return console.warn(e3), ui.notifications.warn(e3), B.INSUFFICIENT_CHARGES;
      }
    }
    return this.shared.rollData.chargeCost = e2, 0;
  }
  async generateChatAttacks() {
    this.shared.action.hasAttack ? await this.addAttacks() : this.shared.action.hasDamage ? await this.addDamage() : await this.addEffectNotes(), this.shared.attacks.forEach((e2) => {
      if (!e2.ammo)
        return;
      const t2 = e2.chatAttack;
      t2 && t2.setAmmo(e2.ammo);
    }), this.shared.save = this.shared.action.data.save.type, this.shared.saveDC = this.shared.action.getDC(this.shared.rollData);
  }
  _getConditionalParts(e2, { index: t2 = 0 }) {
    const s2 = {}, l2 = { "attack.normal": "attack.;id;.normal", "attack.crit": "attack.;id;.crit", "damage.normal": "damage.;id;.normal", "damage.crit": "damage.;id;.crit", "damage.nonCrit": "damage.;id;.nonCrit" }, addPart = (e3) => {
      for (const [t3, c2] of Object.entries(l2)) {
        s2[t3] || (s2[t3] = []);
        const l3 = c2.replace(";id;", e3);
        s2[t3].push(...this.shared.conditionalPartsCommon[l3] ?? []);
      }
    };
    return addPart(`attack_${t2}`), addPart("allAttack"), addPart("allDamage"), "rapid-shot" === e2.id ? (addPart("rapidShotAttack"), addPart("rapidShotDamage")) : "haste-attack" === e2.id && (addPart("hasteAttack"), addPart("hasteDamage")), s2;
  }
  async addAttacks() {
    for (let e2 = 0; e2 < this.shared.attacks.length; e2++) {
      const t2 = this.shared.attacks[e2], s2 = this._getConditionalParts(t2, { index: e2 });
      this.shared.rollData.attackCount = e2;
      const l2 = new ChatAttack(this.shared.action, { label: t2.label, rollData: this.shared.rollData, targets: game.user.targets });
      if ("manyshot" !== t2.id && await l2.addAttack({ extraParts: duplicate(this.shared.attackBonus).concat([t2.attackBonus]), conditionalParts: s2 }), this.shared.action.hasDamage) {
        const e3 = duplicate(this.shared.damageBonus), c2 = [], u2 = [];
        if (this.shared.rollData.powerAttackBonus > 0) {
          const e4 = ["rwak", "rsak"].includes(this.shared.action.data.actionType) ? game.i18n.localize("FFD20.DeadlyAim") : game.i18n.localize("FFD20.PowerAttack"), t3 = this.shared.rollData.powerAttackBonus, s3 = t3 * (this.shared.rollData.item?.powerAttack?.critMultiplier ?? 1);
          c2.push(`${t3}[${e4}]`), u2.push(`${s3}[${e4}]`);
        }
        let m2 = null;
        "manyshot" === t2.id && (m2 = game.i18n.localize("FFD20.Manyshot")), await l2.addDamage({ flavor: m2, extraParts: [...e3, ...c2], critical: false, conditionalParts: s2 }), l2.hasCritConfirm && await l2.addDamage({ extraParts: [...e3, ...u2], critical: true, conditionalParts: s2 });
      }
      0 === e2 && l2.addAttackNotes(), "manyshot" !== t2.id && l2.addEffectNotes(), this.shared.chatAttacks.push(l2), t2.chatAttack = l2;
    }
    delete this.shared.rollData.attackCount;
  }
  async addDamage() {
    this.shared.conditionalParts = { "damage.normal": this.shared.conditionalPartsCommon["damage.allDamage.normal"] ?? [] };
    const e2 = new ChatAttack(this.shared.action, { rollData: this.shared.rollData, primaryAttack: this.shared.primaryAttack });
    await e2.addDamage({ extraParts: duplicate(this.shared.damageBonus), critical: false, conditionalParts: this.shared.conditionalParts }), e2.addEffectNotes(), this.shared.chatAttacks.push(e2);
  }
  addEffectNotes() {
    const e2 = new ChatAttack(this.shared.action, { rollData: this.shared.rollData, primaryAttack: this.shared.primaryAttack });
    e2.addEffectNotes(), this.shared.chatAttacks.push(e2);
  }
  async promptMeasureTemplate() {
    let e2 = this.shared.action.data.measureTemplate.size;
    "string" == typeof e2 && (e2 = RollFFD20.safeRoll(this.shared.action.data.measureTemplate.size, this.shared.rollData).total), e2 = convertDistance(e2)[0];
    const t2 = { type: this.shared.action.data.measureTemplate.type, distance: e2 };
    this.shared.action.data.measureTemplate.overrideColor && (t2.color = this.shared.action.data.measureTemplate.customColor), this.shared.action.data.measureTemplate.overrideTexture && (t2.texture = this.shared.action.data.measureTemplate.customTexture), this.shared.template = null;
    const s2 = ffd20.canvas.AbilityTemplate.fromData(t2);
    let l2;
    if (s2) {
      const e3 = null != this.item.parent?.sheet?._element;
      if (e3 && this.item.parent.sheet.minimize(), l2 = await s2.drawPreview(this.shared.event), !l2.result)
        return e3 && this.item.parent.sheet.maximize(), l2;
    }
    return this.shared.template = await l2.place(), l2;
  }
  async handleDiceSoNice() {
    if (null != game.dice3d && game.dice3d.isEnabled())
      try {
        const e2 = {};
        ChatMessage.applyRollMode(e2, this.shared.rollMode);
        const t2 = game.settings.get("dice-so-nice", "enabledSimultaneousRolls"), s2 = game.settings.get("dice-so-nice", "immediatelyDisplayChatMessages"), showRoll = async (s3) => {
          const l3 = e2.whisper?.length ? e2.whisper : void 0;
          if (t2)
            return Promise.all(s3.map((t3) => game.dice3d.showForRoll(t3, game.user, true, l3, e2.blind)));
          for (const t3 of s3)
            await game.dice3d.showForRoll(t3, game.user, true, l3, e2.blind);
        }, l2 = [];
        for (const e3 of this.shared.chatAttacks) {
          const t3 = new PoolTerm();
          e3.attack && t3.rolls.push(e3.attack), t3.rolls.push(...e3.damage?.rolls ?? []);
          const s3 = new PoolTerm();
          e3.hasCritConfirm && s3.rolls.push(e3.critConfirm), s3.rolls.push(...e3.critDamage?.rolls ?? []), t3.rolls.length && l2.push(t3), s3.rolls.length && l2.push(s3);
        }
        l2.length && (s2 ? showRoll(l2) : await showRoll(l2));
      } catch (e2) {
        console.error(e2);
      }
  }
  getMessageData() {
    if (0 === this.shared.chatAttacks.length)
      return;
    this.shared.templateData = { action: this.shared.action, name: this.item.name, type: CONST.CHAT_MESSAGE_TYPES.OTHER, rollMode: this.shared.rollMode, attacks: this.shared.chatAttacks.map((e3) => e3.finalize()) }, this.shared.chatData = { speaker: ChatMessage.getSpeaker({ actor: this.item.parent }), rollMode: this.shared.rollMode }, this.shared.action.data.soundEffect ? this.shared.chatData.sound = this.shared.action.data.soundEffect : null != game.dice3d && game.dice3d.isEnabled() || (this.shared.chatData.sound = CONFIG.sounds.dice);
    const e2 = [];
    let t2 = "";
    this.shared.templateData.attacks.length > 0 && (t2 = this.shared.templateData.attacks[0].attackNotesHTML);
    const s2 = this.item.getChatData({ rollData: this.shared.rollData }, { actionId: this.shared.action.id }), l2 = [...s2.properties, ...this.addGenericPropertyLabels()];
    if (l2.length > 0 && e2.push({ header: game.i18n.localize("FFD20.InfoShort"), value: l2 }), game.combat) {
      const t3 = this.addCombatPropertyLabels();
      t3.length > 0 && e2.push({ header: game.i18n.localize("FFD20.CombatInfo_Header"), value: t3, css: "combat-properties" });
    }
    if ("spell" === this.item.type && this.item.parent) {
      const t3 = this.item.parent.getContextNotesParsed(`spell.cl.${this.item.system.spellbook}`);
      t3.length && e2.push({ header: game.i18n.localize("FFD20.CLNotes"), value: t3 });
    }
    const c2 = this.item.parentActor?.token ?? canvas.tokens?.placeables.find((e3) => e3.actor && e3.actor.id === this.item.parentActor?.id), u2 = Boolean(this.shared.rollData.item?.identified ?? true), m2 = u2 ? `${this.shared.rollData.item.identifiedName || this.item.name} (${this.shared.action.name})` : this.shared.rollData.item.unidentified?.name || this.item.name;
    this.shared.templateData = mergeObject(this.shared.templateData, { tokenUuid: c2 ? c2.document?.uuid ?? c2.uuid : null, actionId: this.shared.action?.id, extraText: t2, identified: u2, name: m2, description: u2 ? s2.identifiedDescription : s2.unidentifiedDescription, actionDescription: s2.actionDescription, hasExtraText: t2.length > 0, properties: e2, hasProperties: e2.length > 0, item: this.item.toObject(), actor: this.item.parentActor, hasSave: this.shared.action.hasSave, rollData: this.shared.rollData, save: { dc: this.shared.saveDC, type: this.shared.save, label: game.i18n.format("FFD20.SavingThrowButtonLabel", { 0: CONFIG.FFD20.savingThrows[this.shared.save], 1: this.shared.saveDC.toString() }), gmSensitiveLabel: game.i18n.format("FFD20.SavingThrowButtonLabelGMSensitive", { save: CONFIG.FFD20.savingThrows[this.shared.save] }) } }, { inplace: false });
    {
      const e3 = this.shared.action.getRange({ type: "max", rollData: this.shared.rollData });
      if (null != e3) {
        this.shared.templateData.range = e3;
        let t3 = game.settings.get("ffd20", "distanceUnits");
        "default" === t3 && (t3 = game.settings.get("ffd20", "units")), this.shared.templateData.rangeLabel = "metric" === t3 ? `${e3} m` : `${e3} ft.`;
        const s3 = this.shared.action.data.range.units;
        ["melee", "touch", "reach", "close", "medium", "long"].includes(s3) && (this.shared.templateData.rangeLabel = CONFIG.FFD20.distanceUnits[s3]);
      }
    }
    if ("spell" === this.item.type && null != this.item.parent) {
      if (this.item.parent.spellFailure > 0 && this.item.system.components.somatic) {
        const e3 = getProperty(this.item.parentActor, `system.attributes.spells.spellbooks.${this.item.system.spellbook}`);
        if (e3 && e3.arcaneSpellFailure) {
          const e4 = RollFFD20.safeRoll("1d100");
          this.shared.templateData.spellFailure = e4.total, this.shared.templateData.spellFailureRoll = e4, this.shared.templateData.spellFailureSuccess = this.shared.templateData.spellFailure > this.item.parentActor.spellFailure;
        }
      }
      this.shared.templateData.casterLevelCheck = this.shared.casterLevelCheck, this.shared.templateData.concentrationCheck = this.shared.concentrationCheck;
    }
    const d2 = this.generateChatMetadata();
    if (!game.settings.get("ffd20", "disableAttackCardTargets")) {
      const e3 = d2.targets?.length ? d2.targets.map((e4) => canvas.tokens.get(e4)).filter((e4) => null != e4) : [];
      e3.length && (this.shared.templateData.targets = e3.map((e4) => ({ actorData: e4.actor?.toObject(false), tokenData: e4.document?.toObject(false), uuid: e4.document.uuid })));
    }
    this.shared.chatData["flags.ffd20.metadata"] = d2, this.shared.chatData["flags.core.canPopout"] = true, u2 || (this.shared.chatData["flags.ffd20.identifiedInfo"] = { identified: u2, name: this.item.name, description: s2.identifiedDescription, actionName: this.shared.action.name, actionDescription: s2.actionDescription });
  }
  addGenericPropertyLabels() {
    const e2 = [], t2 = this.shared.rollData.chargeCost;
    return t2 && !this.item.system.atWill && ("spell" === this.item.type && this.item.useSpellPoints() ? e2.push(`${game.i18n.localize("FFD20.SpellPointsCost")}: ${t2}`) : e2.push(`${game.i18n.localize("FFD20.ChargeCost")}: ${t2}`)), this.item.system.broken && e2.push(game.i18n.localize("FFD20.Broken")), this.item.system.nonlethal && e2.push(game.i18n.localize("FFD20.Nonlethal")), this.shared.powerAttack && ("rwak" === this.action.data.actionType && e2.push(game.i18n.localize("FFD20.DeadlyAim")), "mwak" === this.action.data.actionType && e2.push(game.i18n.localize("FFD20.PowerAttack"))), this.shared.pointBlankShot && e2.push(game.i18n.localize("FFD20.PointBlankShot")), this.shared.attacks.find((e3) => "rapid-shot" === e3.id) && e2.push(game.i18n.localize("FFD20.RapidShot")), this.shared.manyShot && e2.push(game.i18n.localize("FFD20.Manyshot")), this.item.hasAttack && this.shared.rollData.attributes.acp.attackPenalty > 0 && e2.push(game.i18n.localize("FFD20.ArmorCheckPenalty")), this.shared.conditionals?.length && this.shared.conditionals.forEach((t3) => {
      e2.push(this.shared.action.data.conditionals[t3].name);
    }), this.shared.rollData.attributes.woundThresholds.level > 0 && e2.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[this.shared.rollData.attributes.woundThresholds.level])), e2;
  }
  addCombatPropertyLabels() {
    const e2 = [];
    return e2.push(game.i18n.localize("FFD20.CombatInfo_Round").format(game.combat.round)), e2;
  }
  generateChatMetadata() {
    const e2 = {};
    e2.item = this.item.id, e2.template = this.shared.template ? this.shared.template.id : null, e2.rolls = { attacks: [] };
    const t2 = canvas.scene ? canvas.templates.get(e2.template) : null;
    e2.targets = null != t2 ? t2.getTokensWithin().map((e3) => e3.id) : Array.from(game.user.targets).map((e3) => e3.id);
    for (let t3 = 0; t3 < this.shared.chatAttacks.length; t3++) {
      const s2 = this.shared.chatAttacks[t3], l2 = { attack: null, damage: [], critConfirm: null, critDamage: [] };
      if (s2.attack && (l2.attack = s2.attack.toJSON()), s2.damage.rolls.length)
        for (let e3 = 0; e3 < s2.damage.rolls.length; e3++) {
          const t4 = s2.damage.rolls[e3];
          l2.damage[e3] = t4.toJSON();
        }
      if (s2.critConfirm && (l2.critConfirm = s2.critConfirm.toJSON()), s2.critDamage.rolls.length)
        for (let e3 = 0; e3 < s2.critDamage.rolls.length; e3++) {
          const t4 = s2.critDamage.rolls[e3];
          l2.critDamage[e3] = t4.toJSON();
        }
      e2.rolls.attacks[t3] = l2;
    }
    return this.shared.saveDC && (e2.save = { dc: this.shared.saveDC, type: this.shared.save }), "spell" === this.item.type && (e2.spell = { cl: this.shared.rollData.cl, sl: this.shared.rollData.sl }), e2;
  }
  async executeScriptCalls() {
    this.shared.scriptData = await this.item.executeScriptCalls("use", { attackData: this.shared });
  }
  async postMessage() {
    const e2 = { ev: this.shared.event, skipDialog: this.shared.skipDialog, chatData: this.shared.chatData, templateData: this.shared.templateData, shared: this.shared };
    if (callOldNamespaceHookAll("itemUse", "ffd20PreDisplayActionUse", this.item, "postAttack", e2), this.shared.chatTemplate ||= "systems/ffd20/templates/chat/attack-roll.hbs", this.shared.templateData.damageTypes = ffd20.registry.damageTypes.toRecord(), false === Hooks.call("ffd20PreDisplayActionUse", this))
      return;
    let t2;
    return t2 = this.shared.chatAttacks.length > 0 ? this.shared.chatMessage && true !== this.shared.scriptData.hideChat ? await createCustomChatMessage(this.shared.chatTemplate, this.shared.templateData, this.shared.chatData) : this.shared : this.shared.chatMessage && true !== this.shared.scriptData.hideChat ? this.item.roll() : { descriptionOnly: true }, t2;
  }
}
const G = Object.freeze(Object.defineProperty({ __proto__: null, ERR_REQUIREMENT: B, ActionUse }, Symbol.toStringTag, { value: "Module" }));
class ItemFFD20 extends ItemBaseFFD20 {
  constructor(...e2) {
    super(...e2), void 0 === this.links && (this.links = {}), void 0 === this._rollData && (this._rollData = null), void 0 === this.actions && this.actions instanceof Array && (this.actions = new Collection());
  }
  static isInventoryItem(e2) {
    return ["weapon", "equipment", "consumable", "loot", "container"].includes(e2);
  }
  _preCreate(e2, t2, s2) {
    super._preCreate(e2, t2, s2);
    const l2 = this.parentActor;
    if (l2 && e2?.system?.changes?.length > 0) {
      const t3 = e2.system.changes;
      let s3 = false;
      for (const e3 of t3) {
        let t4 = 0;
        for (; !(void 0 === l2.changes.get(e3._id) && e3._id || (s3 = true, t4 > 1e4)); )
          t4++ > 1e3 ? e3._id = foundry.utils.randomID() : e3._id = ItemChange.defaultData._id;
      }
      s3 && this.updateSource({ "system.changes": t3 });
    }
    let c2 = {};
    if ("function" == typeof this.preCreateData && (c2 = this.preCreateData(e2, t2, s2)), Object.keys(c2).length)
      return this.updateSource(c2);
  }
  preCreateData(e2, t2, s2) {
    return {};
  }
  get memoryVariables() {
    return ["system.quantity", "system.level", "system.inventoryItems"];
  }
  get isPhysical() {
    return this.constructor.isInventoryItem(this.type);
  }
  get firstAction() {
    if (this.system.actions?.length)
      return this.actions.get(this.system.actions[0]._id);
  }
  get hasAttack() {
    return this.actions?.some((e2) => e2.hasAttack) ?? false;
  }
  get hasDamage() {
    return this.actions?.some((e2) => e2.hasDamage) ?? false;
  }
  get isOwned() {
    return super.isOwned || null != this.parentItem;
  }
  get isActive() {
    return true;
  }
  get hasAction() {
    return this.system.actions?.length > 0;
  }
  get isSingleUse() {
    return "single" === this.system.uses?.per;
  }
  get isCharged() {
    return this.isSingleUse || ["day", "week", "charges"].includes(this.system.uses?.per);
  }
  get charges() {
    if (!this.parentActor)
      return 0;
    const e2 = this.links?.charges;
    return e2 ? e2.charges : this.isSingleUse ? this.system.quantity : this.system.uses?.value ?? 0;
  }
  get autoDeductCharges() {
    return this.getDefaultChargeCost() > 0;
  }
  getDefaultChargeCost({ rollData: e2 } = {}) {
    e2 ??= this.getRollData();
    const t2 = this.getDefaultChargeFormula();
    return RollFFD20.safeRoll(t2, e2).total;
  }
  getDefaultChargeFormula() {
    return this.system.uses?.autoDeductChargesCost || "1";
  }
  get maxCharges() {
    if (!this.parentActor)
      return 0;
    const e2 = this.links?.charges;
    return e2 ? e2.maxCharges : this.isSingleUse ? this.system.quantity : this.system.uses?.max ?? 0;
  }
  get totalDurationSeconds() {
    return this.system.duration?.totalSeconds ?? null;
  }
  get auraStrength() {
    const e2 = getProperty(this, "system.cl") || 0;
    return e2 < 1 ? 0 : e2 < 6 ? 1 : e2 < 12 ? 2 : e2 < 21 ? 3 : 4;
  }
  get parentActor() {
    if (this.parent)
      return this.parent;
    let e2 = null, t2 = this.parentItem;
    for (; !e2 && t2; )
      e2 = t2.actor, t2 = t2.parentItem;
    return e2;
  }
  get limited() {
    return this.parentItem ? this.parentItem.limited : super.limited;
  }
  getName(e2 = false) {
    return game.user.isGM && !e2 ? this.name : false === getProperty(this, "system.identified") && getProperty(this, "system.unidentified.name") ? getProperty(this, "system.unidentified.name") : this.name;
  }
  testUserPermission(e2, t2, { exact: s2 = false } = {}) {
    return this.parentActor ? this.parentActor.testUserPermission(e2, t2, { exact: s2 }) : this.parentItem ? this.parentItem.testUserPermission(e2, t2, { exact: s2 }) : super.testUserPermission(e2, t2, { exact: s2 });
  }
  get permission() {
    return this.parentActor ? this.parentActor.permission : super.permission;
  }
  get fullDescription() {
    return this.system.description.value;
  }
  get effect() {
    return this.actor.effects.find((e2) => {
      const t2 = e2.data.origin.split(".");
      return "Item" === t2[2] && t2[3] === this.id;
    });
  }
  static getTypeColor(e2, t2) {
    switch (t2) {
      case 0:
        switch (e2) {
          case "feat":
            return "#8900EA";
          case "spell":
            return "#5C37FF";
          case "class":
            return "#85B1D2";
          case "race":
            return "#00BD29";
          case "attack":
            return "#F21B1B";
          case "weapon":
          case "equipment":
          case "consumable":
          case "loot":
            return "#E5E5E5";
          case "buff":
            return "#FDF767";
          default:
            return "#FFFFFF";
        }
      case 1:
        switch (e2) {
          case "feat":
            return "#5F00A3";
          case "spell":
            return "#4026B2";
          case "class":
            return "#6A8DA8";
          case "race":
            return "#00841C";
          case "attack":
            return "#A91212";
          case "weapon":
          case "equipment":
          case "consumable":
          case "loot":
            return "#B7B7B7";
          case "buff":
            return "#FDF203";
          default:
            return "#C1C1C1";
        }
    }
    return "#FFFFFF";
  }
  get typeColor() {
    return this.constructor.getTypeColor(this.type, 0);
  }
  get typeColor2() {
    return this.constructor.getTypeColor(this.type, 1);
  }
  get actionTypes() {
    const e2 = this.actions?.map((e3) => e3.data.actionType).filter(Boolean) ?? [];
    return [...new Set(e2)];
  }
  static get defaultContextNote() {
    return { text: "", subTarget: "" };
  }
  async addCharges(e2) {
    const t2 = getProperty(this, "links.charges");
    if (t2)
      return t2.addCharges(e2);
    if ("single" === getProperty(this, "system.uses.per") && null == getProperty(this, "system.quantity"))
      return;
    const s2 = this.isSingleUse ? getProperty(this, "system.quantity") : getProperty(this, "system.uses.value");
    this.isSingleUse ? await this.update({ "system.quantity": s2 + e2 }) : await this.update({ "system.uses.value": s2 + e2 });
  }
  get showUnidentifiedData() {
    return !game.user.isGM && false === getProperty(this, "system.identified");
  }
  prepareData() {
    super.prepareData();
    const e2 = this.system;
    return CONFIG.FFD20, this.prepareLinks(), this.system.changes instanceof Array && (this.changes = this._prepareChanges(this.system.changes)), this.system.actions instanceof Array && (this.actions = this._prepareActions(this.system.actions)), this.system.scriptCalls instanceof Array && (this.scriptCalls = this._prepareScriptCalls(this.system.scriptCalls)), this.system.inventoryItems instanceof Array && (this.items = this._prepareInventory(this.system.inventoryItems)), this.prepareWeight(), this.actor || this.prepareDerivedItemData(), e2;
  }
  prepareWeight() {
    const e2 = this.system;
    {
      const t3 = e2.weight;
      if (void 0 === t3 || Number.isFinite(t3)) {
        const t4 = this._source.system, s3 = t4.baseWeight ?? t4.weight ?? 0;
        e2.weight = { value: s3 };
      }
    }
    const t2 = e2.weight;
    t2.value ??= 0, t2.total ??= 0;
    const s2 = (100 - (e2.weightReduction ?? 0)) / 100;
    t2.total = (this.items ?? []).reduce((e3, t3) => e3 + t3.system.weight.total * s2, t2.value * e2.quantity), t2.currency ??= 0, t2.total += t2.currency;
    let l2 = game.settings.get("ffd20", "weightUnits");
    "default" === l2 && (l2 = game.settings.get("ffd20", "units")), t2.converted = { value: ffd20.utils.convertWeight(t2.value), total: ffd20.utils.convertWeight(t2.total) }, t2.units = "metric" === l2 ? game.i18n.localize("FFD20.Kgs") : game.i18n.localize("FFD20.Lbs"), e2.priceUnits = game.i18n.localize("FFD20.CurrencyGil").toLowerCase();
  }
  prepareDerivedData() {
    if (super.prepareDerivedData(), this.isPhysical && (void 0 === this.system.identifiedName && (this.system.identifiedName = this.name), this.showUnidentifiedData)) {
      const e2 = this.system.unidentified.name;
      e2 && (this.system.name = e2), this.system.description.value = this.system.description.unidentified;
    }
  }
  prepareBaseData() {
    this.showUnidentifiedData ? this.name = this.system.unidentified?.name || this._source.name : this.name = this.system.identifiedName || this._source.name;
    const e2 = this.system, t2 = game.system.template.Item, s2 = t2.types.filter((e3) => t2[e3].templates?.includes("tagged"));
    true !== e2.useCustomTag && s2.includes(this.type) && (e2.tag = createTag(this.name));
  }
  prepareDerivedItemData() {
    this._updateMaxUses();
  }
  getLabels({ actionId: e2 } = {}) {
    const t2 = {}, s2 = this.system, l2 = '<i class="fas fa-check"></i>', c2 = '<i class="fas fa-times"></i>';
    if (t2.equipped = "", true === s2.equipped ? t2.equipped = l2 : t2.equipped = c2, t2.carried = "", true === s2.carried ? t2.carried = l2 : t2.carried = c2, t2.identified = "", true === s2.identified ? t2.identified = l2 : t2.identified = c2, s2.slot) {
      const e3 = this.system.equipmentType || null;
      if (null != e3) {
        const s3 = this.system.slot || null;
        t2.slot = null == s3 ? null : CONFIG.FFD20.equipmentSlots[e3]?.[s3];
      } else
        t2.slot = null;
    }
    const u2 = e2 ? this.actions.get(e2) : this.firstAction;
    return { ...t2, ...u2?.getLabels() ?? {} };
  }
  prepareLinks() {
    if (this.links)
      for (const [e2, t2] of Object.entries(this.links))
        switch (e2) {
          case "charges": {
            const e3 = t2.system.uses;
            if (!e3)
              break;
            for (const [t3, s2] of Object.entries(e3))
              ["autoDeductCharges", "autoDeductChargesCost"].includes(t3) || (this.system.uses[t3] = s2);
            break;
          }
        }
  }
  _prepareChanges(e2) {
    const t2 = this.changes, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2._id) ? (e3 = t2.get(l2._id), e3.data = l2, e3.prepareData()) : e3 = new ffd20.components.ItemChange(l2, this), s2.set(l2._id || e3.data._id, e3);
    }
    return s2;
  }
  _prepareActions(e2) {
    const t2 = this.actions, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2._id) ? (e3 = t2.get(l2._id), e3.data = l2, e3.prepareData()) : e3 = new ffd20.components.ItemAction(l2, this), s2.set(l2._id || e3.data._id, e3);
    }
    return s2;
  }
  _prepareScriptCalls(e2) {
    const t2 = this.scriptCalls, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2.id) ? (e3 = t2.get(l2.id), e3.data = l2) : e3 = new ffd20.components.ItemScriptCall(l2, this), s2.set(l2._id || e3.data._id, e3);
    }
    return s2;
  }
  _prepareInventory(e2) {
    const t2 = this.items, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2._id) ? (e3 = t2.get(l2._id), e3.updateSource(l2), e3.reset()) : (e3 = new CONFIG.Item.documentClass(l2), e3.parentItem = this), s2.set(l2._id || e3.id, e3);
    }
    return s2;
  }
  async executeScriptCalls(e2, t2 = {}) {
    const s2 = this.scriptCalls?.filter((t3) => t3.category === e2) ?? [], l2 = {};
    t2.attackData && (l2.attackData = t2.attackData, delete t2.attackData);
    for (const e3 of s2)
      await e3.execute(l2, t2);
    return l2;
  }
  async update(e2, t2 = {}) {
    if (false === t2.recursive)
      return super.update(e2, t2);
    const s2 = this.toObject(), l2 = mergeObject(s2, e2, { inplace: false });
    {
      const t3 = ["system.attackNotes", "system.effectNotes", "system.contextNotes", "system.scriptCalls", "system.actions", "system.inventoryItems", "system.changes"];
      for (const s3 of t3)
        keepUpdateArray(this, e2, s3), linkData(l2, e2, s3, e2[s3]);
    }
    if (null != e2["system.basePrice"] && linkData(l2, e2, "system.price", getProperty(l2, "system.basePrice") || 0), null != e2["system.unidentified.basePrice"] && linkData(l2, e2, "system.unidentified.price", getProperty(l2, "system.unidentified.basePrice") || 0), e2["system.identifiedName"] ? linkData(l2, e2, "name", e2["system.identifiedName"]) : e2.name && linkData(l2, e2, "system.identifiedName", e2.name), this.isCharged) {
      let t3 = 0, s3 = 0, c3 = "value";
      "spell" === this.type ? (null != e2["system.preparation.maxAmount"] && (c3 = "max"), t3 = e2["system.preparation.preparedAmount"] ?? this.charges, s3 = e2["system.preparation.maxAmount"] ?? this.maxCharges) : (null != e2["system.uses.max"] && (c3 = "max"), t3 = e2["system.uses.value"] ?? this.charges, s3 = e2["system.uses.max"] ?? this.maxCharges), "value" === c3 && t3 > s3 ? s3 = t3 : "max" === c3 && s3 < t3 && (t3 = s3);
      const u3 = getProperty(this, "links.charges");
      u3 ? null != e2["system.uses.value"] && u3 && null == getProperty(u3, "links.charges") && await u3.update({ "system.uses.value": e2["system.uses.value"] }) : "spell" === this.type ? (void 0 !== t3 && linkData(l2, e2, "system.preparation.preparedAmount", t3), void 0 !== s3 && linkData(l2, e2, "system.preparation.maxAmount", s3)) : (void 0 !== t3 && linkData(l2, e2, "system.uses.value", t3), void 0 !== s3 && linkData(l2, e2, "system.uses.max", s3));
    }
    this.memorizeVariables();
    const c2 = diffObject(flattenObject(this.toObject()), e2);
    for (const [e3, t3] of Object.entries(c2))
      void 0 === t3 && delete c2[e3];
    if (Object.keys(c2).length && !t2.skipUpdate)
      if (null == this.parentItem)
        await super.update(c2, t2);
      else {
        const e3 = this.parentItem.system.inventoryItems || [], t3 = e3.find((e4) => e4._id === this.id), s3 = e3.indexOf(t3);
        if (s3 >= 0) {
          for (const [e4, t4] of Object.entries(c2))
            delete c2[e4], c2[`system.inventoryItems.${s3}.${e4}`] = t4;
          await this.parentItem.update(c2);
        }
      }
    else
      t2.skipUpdate && (c2._id = this.id);
    const u2 = this.parent;
    if (u2) {
      const e3 = [], t3 = canvas?.tokens?.placeables?.filter((e4) => e4.actor?.id === u2.id) ?? [];
      for (const s3 of t3) {
        const t4 = {};
        if (null != c2["system.uses.value"])
          for (const e4 of ["bar1", "bar2"]) {
            const l3 = s3.document.getBarAttribute(e4);
            l3 && l3.attribute === `resources.${this.system.tag}` && (t4[`${e4}.value`] = c2["system.uses.value"]);
          }
        foundry.utils.isEmpty(t4) || e3.push(s3.document.update(t4));
      }
      e3.length && await Promise.all(e3);
    }
  }
  memorizeVariables() {
    if (null != this._memoryVariables)
      return;
    const e2 = this.memoryVariables;
    this._memoryVariables = {};
    for (const t2 of e2)
      hasProperty(this, t2) && (this._memoryVariables[t2] = deepClone(getProperty(this, t2)));
    for (const e3 of this.items ?? [])
      e3.memorizeVariables();
  }
  _onUpdate(e2, t2, s2) {
    if (super._onUpdate(e2, t2, s2), s2 === game.user.id) {
      {
        let t3 = null;
        "buff" === this.type && (t3 = getProperty(e2, "system.active")), "feat" === this.type && hasProperty(e2, "system.disabled") && (t3 = true !== getProperty(e2, "system.disabled")), null != t3 && this.executeScriptCalls("toggle", { state: t3 });
      }
      {
        const t3 = getProperty(e2, "system.equipped");
        null != t3 && this.executeScriptCalls("equip", { equipped: t3 });
      }
      if (void 0 !== this._memoryVariables?.["system.quantity"]) {
        const e3 = { previous: this._memoryVariables["system.quantity"], new: getProperty(this, "system.quantity") };
        null != e3.new && e3.new !== e3.previous && this.executeScriptCalls("changeQuantity", { quantity: e3 });
      }
      if (void 0 !== this._memoryVariables?.["system.level"]) {
        const e3 = { previous: parseInt(this._memoryVariables["system.level"]), new: parseInt(getProperty(this, "system.level")) };
        for (const [t3, s3] of Object.entries(e3))
          Number.isNaN(s3) && (e3[t3] = null);
        void 0 !== e3.new && e3.new !== e3.previous && this.executeScriptCalls("changeLevel", { level: e3 });
      }
    }
    for (let l2 = 0; l2 < (e2.system?.inventoryItems ?? []).length; l2++) {
      const c2 = e2.system?.inventoryItems[l2], u2 = this._memoryVariables?.["system.inventoryItems"]?.[l2];
      if (!u2)
        continue;
      const m2 = diffObjectAndArray(u2, c2, { keepLength: true });
      if (!foundry.utils.isEmpty(m2)) {
        this.items.get(u2._id)._onUpdate(m2, t2, s2);
      }
    }
    this._memoryVariables = null;
  }
  _updateMaxUses() {
    if (!this.parentActor)
      return;
    if (!["day", "week", "charges"].includes(getProperty(this, "system.uses.per")))
      return;
    const e2 = this.getRollData();
    if (hasProperty(this, "system.uses.maxFormula")) {
      const t2 = getProperty(this, "system.uses.maxFormula");
      if ("" === t2 || formulaHasDice(t2)) {
        if (formulaHasDice(t2)) {
          const e3 = game.i18n.localize("FFD20.WarningNoDiceAllowedInFormula").format(game.i18n.localize("FFD20.ChargePlural"), this.name);
          console.warn(e3), ui.notifications.warn(e3);
        }
      } else {
        const s2 = RollFFD20.safeRoll(t2, e2);
        setProperty(this, "system.uses.max", s2.total);
      }
    }
  }
  getRawEffectData() {
    return { label: this.name, icon: this.img, origin: this.uuid, flags: { ffd20: { origin: { item: this.id } } }, disabled: !this.isActive, duration: {} };
  }
  getScriptCalls(e2) {
    return this.scriptCalls?.filter((t2) => t2.category === e2) ?? [];
  }
  async roll(e2 = {}) {
    return foundry.utils.logCompatibilityWarning("ActorFFD20#roll has been deprecated in favor of ActorFFD20#displayCard", { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), this.displayCard(e2);
  }
  async displayCard(e2 = {}) {
    const t2 = this.parent;
    if (t2 && !t2.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(t2.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    const s2 = this.parentActor.token, l2 = this.getRollData(), c2 = this.getChatData({ rollData: l2 }), u2 = Boolean(l2.item?.identified ?? true), m2 = { actor: this.parent, tokenId: s2 ? s2.uuid : null, item: this.toObject(), labels: this.getLabels(), hasAttack: this.hasAttack, hasMultiAttack: this.hasMultiAttack, hasAction: this.hasAction, isVersatile: this.isVersatile, isSpell: "spell" === this.type, name: (u2 ? l2.identifiedName : l2.item.unidentified?.name) || this.name, description: u2 ? c2.identifiedDescription : c2.unidentifiedDescription, rollData: l2, hasExtraProperties: false, extraProperties: [] }, d2 = {};
    if (false === u2 && (d2.identifiedInfo = { identified: u2, name: l2.identifiedName || this.name, description: c2.identifiedDescription }), game.combat) {
      const e3 = [];
      e3.push(game.i18n.localize("FFD20.CombatInfo_Round").format(game.combat.round)), e3.length > 0 && (m2.extraProperties.push({ header: game.i18n.localize("FFD20.CombatInfo_Header"), value: e3, css: "combat-properties" }), m2.hasExtraProperties = true);
    }
    if (m2.isSpell && null != this.parent && this.parent.spellFailure > 0 && this.system.components.somatic) {
      const e3 = getProperty(this.parent, `system.attributes.spells.spellbooks.${this.system.spellbook}`);
      e3 && e3.arcaneSpellFailure && (m2.spellFailure = RollFFD20.safeRoll("1d100").total, m2.spellFailureSuccess = m2.spellFailure > this.parentActor.spellFailure);
    }
    const h2 = `systems/ffd20/templates/chat/${["consumable"].includes(this.type) ? this.type : "item"}-card.hbs`;
    d2.metadata = {}, d2.metadata.item = this.id;
    const p2 = flattenObject(mergeObject({ user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.OTHER, speaker: ChatMessage.getSpeaker({ actor: this.parent }), flags: { core: { canPopout: true }, ffd20: d2 } }, e2));
    if (false !== Hooks.call("ffd20DisplayCard", this, { template: h2, templateData: m2, chatData: p2 }))
      return createCustomChatMessage(h2, m2, p2);
  }
  getChatData(e2 = {}, t2 = {}) {
    const s2 = {}, { actionId: l2 = null } = t2, c2 = l2 ? this.actions.get(l2) : this.firstAction, u2 = this.getLabels({ actionId: l2 });
    e2.rollData ??= c2 ? c2.getRollData() : this.getRollData(), e2.secrets ??= this.isOwner, e2.async = false;
    const m2 = e2.rollData?.item ?? this.system, d2 = e2.rollData?.action ?? c2?.data ?? {};
    s2.identifiedDescription = TextEditor.enrichHTML(m2.description.value, e2), m2.shortDescription && (s2.identifiedDescription = `${s2.identifiedDescription}${TextEditor.enrichHTML(m2.shortDescription, e2)}`), s2.unidentifiedDescription = TextEditor.enrichHTML(m2.description.unidentified, e2), s2.description = this.showUnidentifiedData ? s2.unidentifiedDescription : s2.identifiedDescription, s2.actionDescription = TextEditor.enrichHTML(d2.description, e2);
    const h2 = [];
    if (Object.prototype.hasOwnProperty.call(m2, "equipped") && ["weapon", "equipment"].includes(this.type) && h2.push(m2.equipped ? game.i18n.localize("FFD20.Equipped") : game.i18n.localize("FFD20.NotEquipped")), !this.showUnidentifiedData) {
      const t3 = {};
      if (t3.range = u2.range || "", t3.level = u2.sl || "", null != d2.range) {
        const e3 = c2.getRange({ type: "max" }), s4 = "mi" === d2.range.units ? "mi" : "ft", l3 = convertDistance(e3, s4);
        t3.range = e3 > 0 ? game.i18n.format("FFD20.RangeNote", { 0: `${e3} ${l3[1]}` }) : null;
      }
      h2.push(u2.save);
      const s3 = d2.save?.description;
      if (s3?.length > 0 && h2.push(s3), null != d2.duration && !["inst", "perm"].includes(d2.duration.units) && "string" == typeof d2.duration.value) {
        const s4 = RollFFD20.safeRoll(d2.duration.value || "0", e2.rollData).total;
        t3.duration = [s4, CONFIG.FFD20.timePeriods[d2.duration.units]].filterJoin(" ");
      }
      d2.activation?.type && h2.push(u2.target, u2.activation, t3.range, t3.duration);
    }
    return this.getTypeChatData(s2, u2, h2, e2.rollData), s2.properties = h2.filter((e3) => !!e3), s2;
  }
  getTypeChatData(e2, t2, s2, l2) {
    this.isCharged && s2.push(`${game.i18n.localize("FFD20.ChargePlural")}: ${this.charges}/${this.maxCharges}`);
  }
  useAttack(e2) {
    return foundry.utils.logCompatibilityWarning("ItemFFD20#useAttack has been deprecated in favor of ItemFFD20#use", { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), this.use(e2);
  }
  async use({ actionID: e2 = "", ev: t2 = null, skipDialog: s2 = false, chatMessage: l2 = true, dice: c2 = "1d20", rollMode: u2 } = {}) {
    if (!this.hasAction) {
      const e3 = this.scriptCalls.filter((e4) => "use" === e4.category);
      let c3;
      if (!(e3.length > 0))
        return l2 ? this.displayCard({ rollMode: u2 }) : { descriptionOnly: true };
      if (c3 = await this.executeScriptCalls("use", { attackData: { event: t2, skipDialog: s2, chatMessage: l2, rollMode: u2 } }), c3.reject)
        return c3;
      if (true !== c3.hideChat && await this.displayCard(), this.isCharged) {
        if (this.charges < this.chargeCost) {
          if (this.isSingleUse) {
            const e5 = game.i18n.localize("FFD20.ErrorNoQuantity");
            return console.warn(e5), ui.notifications.warn(e5);
          }
          const e4 = game.i18n.localize("FFD20.ErrorInsufficientCharges").format(this.name);
          return console.warn(e4), ui.notifications.warn(e4);
        }
        this.autoDeductCharges && await this.addCharges(-this.chargeCost);
      }
      return c3;
    }
    let m2;
    if (t2 && t2.originalEvent && (t2 = t2.originalEvent), !e2 && this.system.actions.length > 1 && false === s2) {
      return void new ffd20.applications.ActionChooser(this).render(true);
    }
    if (!e2 && 1 !== this.system.actions.length && !s2)
      return void console.error("This item does not have an action associated with it.");
    m2 = this.actions.get(e2 || this.system.actions[0]._id);
    const d2 = { event: t2, rollData: {}, skipDialog: s2, chatMessage: l2, dice: c2, fullAttack: true, attackBonus: [], damageBonus: [], attacks: [], chatAttacks: [], rollMode: game.settings.get("core", "rollMode"), useMeasureTemplate: m2.hasTemplate && game.settings.get("ffd20", "placeMeasureTemplateOnQuickRolls"), conditionals: null, conditionalPartsCommon: {}, casterLevelCheck: false, concentrationCheck: false, scriptData: {} };
    Object.defineProperties(d2, { action: { value: m2, writable: false, enumerable: true }, item: { value: this, writable: false, enumerable: true } });
    const h2 = new ActionUse(d2);
    let p2, g2 = await h2.checkRequirements();
    if (g2 > 0)
      return { err: ffd20.actionUse.ERR_REQUIREMENT, code: g2 };
    if (d2.rollData = await h2.getRollData(), s2)
      d2.attacks = await h2.generateAttacks(), await h2.alterRollData();
    else {
      const e3 = await h2.createAttackDialog();
      if ("object" != typeof e3)
        return;
      d2.fullAttack = e3.fullAttack, d2.attacks = e3.attacks, await h2.alterRollData(e3.html);
    }
    if (d2.action.data.usesAmmo && (d2.attacks = d2.attacks.filter((e3) => null != e3.ammo), 0 === d2.attacks.length))
      return void ui.notifications.error(game.i18n.localize("FFD20.AmmoDepleted"));
    if (d2.fullAttack || (d2.attacks = d2.attacks.slice(0, 1)), await h2.handleConditionals(), g2 = await h2.checkAttackRequirements(), g2 > 0)
      return { err: ffd20.actionUse.ERR_REQUIREMENT, code: g2 };
    if (await h2.generateChatAttacks(), d2.useMeasureTemplate && canvas.scene && (p2 = await h2.promptMeasureTemplate(), !p2.result))
      return;
    u2 && (d2.rollMode = u2);
    let y2, F2 = Hooks.call("ffd20PreActionUse", h2);
    if (F2 = callOldNamespaceHook("itemUse", "ffd20PreUseAttack", F2, this, "attack", { ev: t2, skipDialog: s2, dice: c2, shared: d2 }), false !== F2) {
      if (await h2.executeScriptCalls(), d2.scriptData?.reject)
        await p2?.delete();
      else if (await h2.handleDiceSoNice(), await h2.subtractAmmo(), (d2.rollData.chargeCost < 0 || d2.rollData.chargeCost > 0) && await this.addCharges(-d2.rollData.chargeCost), d2.action.isSelfCharged && await d2.action.update({ "uses.self.value": d2.action.data.uses.self.value - 1 }), await h2.getMessageData(), true !== d2.scriptData?.hideChat) {
        if (y2 = await h2.postMessage(), game.settings.get("ffd20", "clearTargetsAfterAttack"))
          for (const e3 of game.user.targets)
            e3.setTarget(false);
        return y2;
      }
    } else
      await p2?.delete();
  }
  getContextChanges(e2 = "attack") {
    let t2 = this.parentActor.changes;
    switch (e2) {
      case "mattack":
      case "rattack": {
        const s2 = ["attack", e2];
        t2 = t2.filter((e3) => !!s2.includes(e3.subTarget));
        break;
      }
      case "wdamage":
      case "sdamage": {
        const s2 = ["damage", e2];
        t2 = t2.filter((e3) => !!s2.includes(e3.subTarget));
        break;
      }
      case "damage":
        t2 = t2.filter((e3) => "damage" === e3.subTarget);
    }
    return t2;
  }
  getRollData() {
    const e2 = this.parentActor, t2 = e2 ? e2.getRollData() : {};
    return t2.item = deepClone(this.system), this.system.tag && (t2.item.dFlags = getProperty(t2, `dFlags.${this.system.tag}`)), setProperty(t2, "item.auraStrength", this.auraStrength), t2.dc = this.hasSave ? this.getDC(t2) : 0, this._rollData = t2.item, Hooks.events.ffd20GetRollData?.length > 0 && Hooks.callAll("ffd20GetRollData", this, t2), callOldNamespaceHookAll("ffd20.getRollData", "ffd20GetRollData", this, t2, true), t2;
  }
  static chatListeners(e2) {
    e2.on("click", ".card-buttons button, .inline-action", this._onChatCardButton.bind(this)), e2.on("click", ".item-name", this._onChatCardToggleContent.bind(this));
  }
  static async _onChatCardButton(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    t2.disabled = true;
    const s2 = t2.closest(".chat-card"), l2 = s2.closest(".message").dataset.messageId, c2 = game.messages.get(l2), u2 = t2.dataset.action;
    if (!(["save", "applyDamage"].includes(u2) || game.user.isGM || c2.isAuthor))
      return;
    const m2 = await this._getChatCardActor(s2);
    if (!m2)
      return void ("applyDamage" === u2 && (await this._onChatCardAction(u2, { button: t2 }), t2.disabled = false));
    const d2 = m2.items.get(s2.dataset.itemId);
    await this._onChatCardAction(u2, { button: t2, item: d2 }) || (t2.disabled = false);
  }
  static async _onChatCardAction(e2, { button: t2 = null, item: s2 = null } = {}) {
    if ("applyDamage" === e2) {
      let e3 = [...t2.closest(".chat-message")?.querySelectorAll(".tag") ?? []].map((e4) => e4.innerText).includes(game.i18n.localize("FFD20.Nonlethal"));
      t2.dataset.tags?.split(" ").includes("nonlethal") && (e3 = true);
      const s3 = t2.dataset.value;
      isNaN(parseInt(s3)) || CONFIG.Actor.documentClasses.default.applyDamage(parseInt(s3), { asNonlethal: e3 });
    } else {
      if (["recoverAmmo", "forceRecoverAmmo"].includes(e2)) {
        if (!s2)
          return;
        if (!s2.isOwner)
          return;
        const l2 = t2.closest(".chat-attack").dataset.index, c2 = game.messages.get(t2.closest(".chat-message").dataset.messageId), u2 = t2.closest(".ammo")?.dataset.ammoId || t2.dataset.ammoId, m2 = c2.getFlag("ffd20", "ammoRecovery")?.[l2]?.[u2];
        if (m2?.failed || m2?.recovered)
          return;
        let d2 = false, h2 = false;
        const p2 = [], g2 = s2.actor.items.get(u2);
        if (!g2)
          return;
        let y2 = 100;
        return "recoverAmmo" === e2 && (y2 = 50), y2 >= 100 * Math.random() ? (d2 = true, p2.push(g2.addCharges(1))) : h2 = true, (d2 || h2) && l2 && p2.push(c2.setFlag("ffd20", "ammoRecovery", { [l2]: { [u2]: { failed: h2, recovered: d2 } } })), await Promise.all(p2), true;
      }
      "concentration" === e2 ? s2.parentActor.rollConcentration(s2.system.spellbook) : "caster-level-check" === e2 && s2.parentActor.rollCL(s2.system.spellbook);
    }
    return false;
  }
  static _onChatCardToggleContent(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".chat-card").querySelector(".card-content");
    s2.style.display = "none" === s2.style.display ? "block" : "none";
    const l2 = t2.closest(".chat-popout");
    l2 && (l2.style.height = "auto");
  }
  static async _getChatCardActor(e2) {
    const t2 = e2.dataset.tokenId;
    if (t2)
      return (await fromUuid(t2))?.actor;
    const s2 = e2.dataset.actorId;
    return game.actors.get(s2) || null;
  }
  static _getChatCardTargets(e2) {
    const t2 = game.user.character, s2 = canvas.tokens.controlled, l2 = s2.reduce((e3, t3) => t3.actor ? e3.concat([t3.actor]) : e3, []);
    if (t2 && 0 === s2.length && l2.push(t2), !l2.length)
      throw new Error("You must designate a specific Token as the roll target");
    return l2;
  }
  canCreateItemLink(e2, t2, s2, l2) {
    const c2 = this.parent, u2 = c2 && s2.actor && s2.actor.id === c2.id;
    if (l2.split(".").slice(-1)[0] === this.id)
      return false;
    if ((getProperty(this, `system.links.${e2}`) || []).filter((e3) => e3.id === l2).length)
      return false;
    const m2 = getProperty(s2, `system.links.${e2}`);
    if (["children", "charges", "ammunition"].includes(e2) && u2) {
      if ("charges" === e2) {
        if (m2.length > 0)
          return ui.notifications.warn(game.i18n.localize("FFD20.WarningCannotCreateChargeLink").format(this.name, s2.name)), false;
        if (null != s2.links.charges)
          return ui.notifications.warn(game.i18n.localize("FFD20.WarningCannotCreateChargeLink2").format(this.name, s2.name, s2.links.charges.name)), false;
      }
      return true;
    }
    return "classAssociations" === e2 && "compendium" === t2;
  }
  generateInitialLinkData(e2, t2, s2, l2) {
    const c2 = { id: l2, dataType: t2, name: s2.name, img: s2.img };
    return "classAssociations" === e2 && (c2.level = 1), "ammunition" === e2 && (c2.recoverChance = 50), c2;
  }
  async createItemLink(e2, t2, s2, l2) {
    if (this.canCreateItemLink(e2, t2, s2, l2)) {
      const c2 = {}, u2 = duplicate(getProperty(this, `system.links.${e2}`) || []), m2 = this.generateInitialLinkData(e2, t2, s2, l2);
      return u2.push(m2), c2[`system.links.${e2}`] = u2, await this.update(c2), callOldNamespaceHookAll("createItemLink", "ffd20CreateItemLink", this, m2, e2), Hooks.callAll("ffd20CreateItemLink", this, m2, e2), window.setTimeout(() => {
        this.parent && this.parent.sheet.render();
      }, 50), true;
    }
    if ("children" === e2 && "data" !== t2) {
      const e3 = s2.toObject();
      delete e3._id, "spell" === getProperty(e3, "type") && setProperty(e3, "system.spellbook", "spelllike");
      const t3 = await this.parent.createEmbeddedDocuments("Item", [e3]), l3 = this.parent.items.get(t3._id);
      await this.createItemLink("children", "data", l3, l3._id);
    }
    return false;
  }
  async getLinkedItems(e2, t2 = false) {
    const s2 = getProperty(this, `system..links.${e2}`);
    if (!s2)
      return [];
    const l2 = [];
    for (const e3 of s2) {
      const s3 = await this.getLinkItem(e3, t2);
      s3 && l2.push(s3);
    }
    return l2;
  }
  async getAllLinkedItems() {
    const e2 = [];
    for (const t2 of Object.values(getProperty(this, "system.links")))
      for (const s2 of t2) {
        const t3 = await this.getLinkItem(s2);
        t3 && e2.push(t3);
      }
    return e2;
  }
  async removeItemLink(e2) {
    const t2 = {};
    for (const [s2, l2] of Object.entries(getProperty(this, "system.links") || {})) {
      const c2 = duplicate(l2);
      for (let t3 = 0; t3 < c2.length; t3++) {
        c2[t3].id === e2 && (c2.splice(t3, 1), t3--);
      }
      l2.length > c2.length && (t2[`data.links.${s2}`] = c2);
    }
    if (Object.keys(t2).length)
      return this.update(t2);
  }
  async getLinkItem(e2, t2 = false) {
    const s2 = e2.id.split(".");
    let l2;
    if ("compendium" === e2.dataType) {
      const e3 = game.packs.get(s2.slice(0, 2).join("."));
      if (!e3)
        return null;
      l2 = await e3.getDocument(s2[2]);
    } else
      "world" === e2.dataType ? l2 = game.items.get(s2[1]) : null != this.parent && null != this.parent.items && (l2 = this.parent.items.get(s2[0]));
    return t2 && (l2 = { item: l2, linkData: e2 }), l2;
  }
  async updateLinkItems() {
    const e2 = getProperty(this, "system.links") || {};
    for (const t2 of Object.values(e2))
      for (const e3 of t2) {
        const t3 = await this.getLinkItem(e3);
        null != t3 ? (e3.name = t3.name, e3.img = t3.img) : (e3.name = e3.name + (e3.name?.indexOf("[x]") > -1 ? "" : " [x]"), e3.img = CONST.DEFAULT_TOKEN);
      }
  }
  _cleanLink(e2, t2) {
    if (!this.parent)
      return;
    const s2 = this.parent.items.get(e2.id);
    "charges" === t2 && s2 && hasProperty(s2, "links.charges") && delete s2.links.charges;
  }
  getChangeSubTargets(e2) {
    const t2 = {};
    if ("skill" === e2)
      if (null == this.parent)
        for (const [e3, s2] of Object.entries(CONFIG.FFD20.skills))
          t2[`skill.${e3}`] = s2;
      else {
        const e3 = mergeObject(duplicate(CONFIG.FFD20.skills), this.parent.data.skills);
        for (const [s2, l2] of Object.entries(e3))
          if (l2.subSkills)
            for (const [e4, c2] of Object.entries(l2.subSkills))
              t2[`skill.${s2}.subSkills.${e4}`] = `${CONFIG.FFD20.skills[s2]} (${c2.name})`;
          else
            l2.custom ? t2[`skill.${s2}`] = l2.name : t2[`skill.${s2}`] = CONFIG.FFD20.skills[s2];
      }
    else if (hasProperty(CONFIG.FFD20.buffTargets, e2))
      for (const [s2, l2] of Object.entries(CONFIG.FFD20.buffTargets[e2]))
        s2.startsWith("_") || s2.startsWith("~") || (t2[s2] = l2);
    return t2;
  }
  async addChange() {
    return new ItemChange({}, this);
  }
  getTotalCurrency({ inLowestDenomination: e2 = false } = {}) {
    return 0;
  }
  getValue({ recursive: e2 = true, sellValue: t2 = 0.5, inLowestDenomination: s2 = false, forceUnidentified: l2 = false } = {}) {
    let c2 = 0;
    const u2 = getProperty(this, "system.quantity") || 0;
    return c2 += ((e3 = true) => {
      let t3 = 0;
      return t3 = e3 ? this.system.price : this.system.unidentified.price, e3 && (t3 += (this.system.uses?.pricePerUse ?? 0) * (this.system.uses?.value ?? 0)), s2 && (t3 *= 100), this.system.broken && (t3 *= 0.75), t3;
    })(!l2 && !this.showUnidentifiedData) * u2, "loot" === this.type && "tradeGoods" === this.system.subType || (c2 *= t2), c2 += this.getTotalCurrency({ inLowestDenomination: s2 }), c2;
  }
  convertCurrency(e2 = "pgil") {
    const t2 = this.getTotalCurrency(), s2 = [0, 0, 0, 0];
    switch (e2) {
      case "pgil":
        s2[0] = Math.floor(t2 / 10), s2[1] = Math.max(0, Math.floor(t2) - 10 * s2[0]), s2[2] = Math.max(0, Math.floor(10 * t2) - 100 * s2[0] - 10 * s2[1]), s2[3] = Math.max(0, Math.floor(100 * t2) - 1e3 * s2[0] - 100 * s2[1] - 10 * s2[2]);
        break;
      case "gil":
        s2[1] = Math.floor(t2), s2[2] = Math.max(0, Math.floor(10 * t2) - 10 * s2[1]), s2[3] = Math.max(0, Math.floor(100 * t2) - 100 * s2[1] - 10 * s2[2]);
        break;
      case "sgil":
        s2[2] = Math.floor(10 * t2), s2[3] = Math.max(0, Math.floor(100 * t2) - 10 * s2[2]);
        break;
      case "cgil":
        s2[3] = Math.floor(100 * t2);
    }
    const l2 = {};
    return l2["data.currency.pgil"] = s2[0], l2["data.currency.gil"] = s2[1], l2["data.currency.sgil"] = s2[2], l2["data.currency.cgil"] = s2[3], this.update(l2);
  }
  _calculateCoinWeight(e2) {
    const t2 = game.settings.get("ffd20", "coinWeight");
    return t2 ? Object.values(getProperty(e2, "currency") || {}).reduce((e3, t3) => e3 + t3, 0) / t2 : 0;
  }
  async addItemBooleanFlag(e2, t2 = {}) {
    e2 = String(e2);
    const s2 = getProperty(this, "system.flags.boolean") ?? {};
    if (Array.isArray(s2))
      throw new Error(`${this.name} [${this.id}] requires migration.`);
    return void 0 === s2[e2] && (await this.update({ [`data.flags.boolean.${e2}`]: true }, t2), true);
  }
  async removeItemBooleanFlag(e2, t2 = {}) {
    return void 0 !== (getProperty(this, "system.flags.boolean") ?? {})[e2] && (await this.update({ [`data.flags.boolean.-=${e2}`]: null }, t2), true);
  }
  hasItemBooleanFlag(e2) {
    return true === (getProperty(this, "system.flags.boolean") ?? {})[e2];
  }
  getItemBooleanFlags() {
    const e2 = getProperty(this, "system.flags.boolean") ?? {};
    return Object.keys(e2);
  }
  async setItemDictionaryFlag(e2, t2, s2 = {}) {
    e2 = String(e2);
    return duplicate(getProperty(this, "system.flags.dictionary") ?? {})[e2] !== t2 && (await this.update({ [`data.flags.dictionary.${e2}`]: t2 }, s2), true);
  }
  async removeItemDictionaryFlag(e2, t2 = {}) {
    return void 0 !== (getProperty(this, "system.flags.dictionary") ?? {})[e2] && (await this.update({ [`data.flags.dictionary.-=${e2}`]: null }, t2), true);
  }
  getItemDictionaryFlag(e2) {
    return (getProperty(this, "system.flags.dictionary") || {})[e2];
  }
  getItemDictionaryFlags() {
    return getProperty(this, "system.flags.dictionary") || {};
  }
  getAttackArray(e2) {
    const t2 = this.actions.get(e2), s2 = t2?.data, l2 = t2?.getRollData(), c2 = [0];
    if (!s2)
      return c2;
    const appendAttack = (e3) => {
      const t3 = RollFFD20.safeRoll(e3, l2).total;
      Number.isFinite(t3) && c2.push(t3);
    }, u2 = s2.attackParts.map((e3) => e3[0]?.toString().trim()).filter((e3) => e3?.length > 0);
    for (const e3 of u2)
      appendAttack(e3);
    const m2 = s2.formulaicAttacks?.count?.formula?.trim();
    if (m2?.length > 0) {
      const e3 = s2.formulaicAttacks?.bonus?.formula?.trim() || "0", t3 = RollFFD20.safeRoll(m2, l2);
      for (let s3 = 0; s3 < t3.total; s3++)
        l2.formulaicAttack = s3 + 1, appendAttack(e3);
      delete l2.formulaicAttack;
    }
    const d2 = new Array(c2.length).fill(0);
    s2.conditionals.filter((e3) => e3.default && e3.modifiers.find((e4) => "attack" === e4.target)).forEach((e3) => {
      e3.modifiers.forEach((e4) => {
        const t3 = RollFFD20.safeRoll(e4.formula, l2);
        if (0 != t3.total && e4.subTarget?.match(/^attack\.(\d+)$/)) {
          const e5 = parseInt(RegExp.$1, 10);
          e5 in d2 && (d2[e5] += t3.total);
        }
      });
    });
    const h2 = this.getAttackSources(e2).reduce((e3, t3) => e3 + t3.value, 0);
    return c2.map((e3, t3) => e3 + h2 + d2[t3]);
  }
  get attackArray() {
    return this.getAttackArray(this.firstAction.id);
  }
  getAttackSources(e2) {
    const t2 = this.actions.get(e2);
    if (!t2)
      return;
    const s2 = [], l2 = this.parentActor?.system, c2 = this.system, u2 = t2.data;
    if (!l2 || !u2)
      return s2;
    const m2 = t2.getRollData(), d2 = ["mwak", "msak", "mcman"].includes(u2.actionType) || ["melee", "reach"].includes(u2.range.units), h2 = ["rwak", "rsak", "rcman"].includes(u2.actionType) || "ranged" === this.system.weaponSubtype, p2 = ["mcman", "rcman"].includes(u2.actionType), describePart = (e3, t3, l3 = 0) => {
      s2.push({ value: e3, label: t3, sort: l3 });
    }, srcDetails = (e3) => e3?.reverse().forEach((e4) => describePart(e4.value, e4.name, -10)), g2 = p2 ? CONFIG.FFD20.sizeSpecialMods[m2.traits.size] : CONFIG.FFD20.sizeMods[m2.traits.size];
    0 != g2 && describePart(g2, game.i18n.localize("FFD20.Size"), -20), srcDetails(this.parentActor.sourceDetails["system.attributes.attack.shared"]), p2 && srcDetails(this.parentActor.sourceDetails["system.attributes.cmb.bonus"]), srcDetails(this.parentActor.sourceDetails["system.attributes.attack.general"]);
    const y2 = [];
    h2 && y2.push("rattack"), d2 && y2.push("mattack");
    const F2 = getHighestChanges(this.parentActor.changes.filter((e3) => y2.includes(e3.subTarget)), { ignoreTarget: true });
    if (F2.forEach((e3) => describePart(e3.value, e3.flavor, -800)), u2.ability.attack) {
      const e3 = getProperty(l2, `abilities.${u2.ability.attack}.mod`) ?? 0;
      describePart(e3, CONFIG.FFD20.abilities[u2.ability.attack], -50);
    }
    const D2 = RollFFD20.safeRoll(u2.attackBonus || "0", m2);
    0 != D2.total && describePart(D2.total, D2.flavor ?? game.i18n.localize("FFD20.AttackRollBonus"), -100);
    const k2 = t2.enhancementBonus ?? (c2.masterwork ? 1 : 0);
    if (F2.find((e3) => "enh" === e3.modifier && e3.value > k2) || (Number.isFinite(t2.enhancementBonus) && 0 !== t2.enhancementBonus ? describePart(t2.enhancementBonus, game.i18n.localize("FFD20.EnhancementBonus"), -300) : c2.masterwork && describePart(1, game.i18n.localize("FFD20.Masterwork"), -300)), c2.proficient || describePart(-4, game.i18n.localize("FFD20.ProficiencyPenalty"), -500), c2.broken && describePart(-2, game.i18n.localize("FFD20.Broken"), -500), true !== u2.naturalAttack.primaryAttack && "natural" === c2.attackType) {
      const e3 = u2.naturalAttack?.secondary?.attackBonus || "-5", t3 = RollFFD20.safeTotal(`${e3}`, m2);
      describePart(t3, game.i18n.localize("FFD20.SecondaryAttack"), -400);
    }
    return u2.conditionals.filter((e3) => e3.default && e3.modifiers.find((e4) => "attack" === e4.target)).forEach((e3) => {
      e3.modifiers.forEach((t3) => {
        if ("allAttack" === t3.subTarget) {
          const s3 = RollFFD20.safeRoll(t3.formula, m2);
          if (0 == s3.total)
            return;
          describePart(s3.total, e3.name, -5e3);
        }
      });
    }), s2.sort((e3, t3) => t3.sort - e3.sort);
  }
  get attackSources() {
    return this.getAttackSources(this.firstAction.id);
  }
  get damageSources() {
    return foundry.utils.logCompatibilityWarning("ItemFFD20.damageSources is deprecated, use ItemAction.damageSources instead", { since: "FFD20 10.1.2", until: "FFD20 10.2.0" }), this.firstAction?.damageSources ?? [];
  }
  getAllDamageSources(e2) {
    const t2 = this.actions.get(e2);
    if (!t2)
      return;
    const s2 = t2.data.conditionals.filter((e3) => e3.default).filter((e3) => e3.modifiers.find((e4) => "damage" === e4.target)), l2 = t2.getRollData();
    if (!l2)
      return [];
    const c2 = Object.keys(CONFIG.FFD20.bonusModifiers), u2 = [];
    for (const e3 of s2)
      for (const t3 of e3.modifiers) {
        if ("damage" !== t3.target)
          continue;
        const s3 = RollFFD20.safeRoll(t3.formula, l2);
        if (s3.err)
          continue;
        const m3 = c2.includes(t3.type);
        u2.push({ flavor: e3.name, value: s3.total, modifier: m3 ? t3.type : "untyped", type: m3 ? void 0 : t3.type, formula: t3.formula });
      }
    const m2 = [...t2.damageSources, ...u2];
    return t2.enhancementBonus && m2.push({ flavor: game.i18n.localize("FFD20.EnhancementBonus"), value: t2.enhancementBonus, modifier: "enh", formula: t2.enhancementBonus.toString() }), this.system.broken && m2.push({ flavor: game.i18n.localize("FFD20.Broken"), value: -2, modifier: "untyped", formula: "-2" }), getHighestChanges(m2, { ignoreTarget: true });
  }
  get allDamageSources() {
    return this.getAllDamageSources(this.firstAction.id);
  }
  setActive(e2, t2) {
    throw new Error(`Item type ${this.type} does not support ItemFFD20#setActive`);
  }
}
const q = { charges: function(e2, t2) {
  for (const s2 of t2) {
    const t3 = this.items.get(s2.id);
    t3 && (t3.links.charges = e2, t3.prepareLinks());
  }
} }, H = Object.freeze(Object.defineProperty({ __proto__: null, LinkFunctions: q }, Symbol.toStringTag, { value: "Module" }));
class Spellbook {
  key;
  actor;
  data;
  spells = [];
  level = {};
  constructor(e2, t2) {
    this.actor = t2, this.data = t2.system.attributes.spells.spellbooks[e2];
  }
  addSpell(e2) {
    this.spells.push(e2);
    const t2 = e2.system.level;
    Math.clamped(t2, 0, 9) === t2 ? (this.level[t2] ??= new SpellbookLevel(this), this.level[t2].spells.push(e2)) : console.error("Spell with impossible spell level:", e2);
  }
}
class SpellbookLevel {
  book;
  spells = [];
  constructor(e2) {
    this.book = e2;
  }
}
class SpellbookSlots {
  max;
  value;
  domain;
  domainMax;
  domainUnused = 0;
  used = 0;
  constructor({ value: e2 = 0, max: t2 = 0, domain: s2 = 0 } = {}) {
    this.value = e2 ?? 0, this.max = t2 ?? 0, this.domain = s2 ?? 0, this.domainMax = this.domain, this.domainUnused = this.domainMax;
  }
}
class SpellRanges {
  close;
  medium;
  long;
  cl;
  constructor(e2) {
    this.cl = e2, this.close = calculateRange(null, "close", { cl: e2 }), this.medium = calculateRange(null, "medium", { cl: e2 }), this.long = calculateRange(null, "long", { cl: e2 });
  }
}
class SpellbookMode {
  raw;
  get isHybrid() {
    return "hybrid" === this.raw;
  }
  get isPrestige() {
    return "prestige" === this.raw;
  }
  get isSpontaneous() {
    return "spontaneous" === this.raw;
  }
  get isPrepared() {
    return "prepared" === this.raw;
  }
  get isSemiSpontaneous() {
    return this.isSpontaneous || this.isHybrid || this.isPrestige;
  }
  constructor(e2) {
    let t2 = e2.spellPreparationMode;
    t2 || (t2 = e2.spellPreparationMode = "spontaneous"), this.raw = t2;
  }
}
const U = Object.freeze(Object.defineProperty({ __proto__: null, Spellbook, SpellbookLevel, SpellbookSlots, SpellRanges, SpellbookMode }, Symbol.toStringTag, { value: "Module" }));
class ActorFFD20 extends ActorBaseFFD20 {
  static get relativeAttributes() {
    return ["system.attributes.hp", "system.attributes.wounds", "system.attributes.vigor", "system.attributes.mp"];
  }
  constructor(...e2) {
    super(...e2), void 0 === this.itemFlags && (this.itemFlags = { boolean: {}, dictionary: {} }), void 0 === this.changeItems && (this.changeItems = []), void 0 === this.changes && (this.changes = new Collection()), void 0 === this._queuedUpdates && (this._queuedUpdates = {}), void 0 === this._rollData && (this._rollData = null), void 0 === this._runningFunctions && (this._runningFunctions = {}), void 0 === this.containerItems && (this.containerItems = []), void 0 === this._states && (this._states = {}), this._race ??= null;
  }
  _preCreate(e2, t2, s2) {
    super._preCreate(e2, t2, s2);
    let l2 = {};
    if ("function" == typeof this.preCreateData && (l2 = this.preCreateData(e2, t2, s2)), Object.keys(l2).length)
      return this.system.update(l2);
  }
  preCreateData(e2, t2, s2) {
    return {};
  }
  static chatListeners(e2) {
    e2.on("click", "button[data-action], a[data-action]", this._onChatCardButtonAction.bind(this));
  }
  static async _onChatCardButtonAction(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".chat-card"), l2 = t2.dataset.action;
    if ("defense-save" === l2) {
      const l3 = await ItemFFD20._getChatCardActor(s2), c2 = t2.dataset.save;
      l3 && l3.rollSavingThrow(c2, { event: e2, skipPrompt: getSkipActionPrompt() });
    } else if ("save" === l2) {
      const s3 = ActorFFD20.getSelectedActors(), l3 = t2.dataset.type;
      let c2 = false;
      for (const t3 of s3)
        t3[0].rollSavingThrow(l3, { event: e2, noSound: c2, skipPrompt: getSkipActionPrompt() }), c2 = true;
    } else if ("open-compendium-entry" === l2) {
      const e3 = t2.dataset.compendiumEntry, s3 = await fromUuid(e3);
      s3 instanceof JournalEntryPage ? s3.parent.sheet.render(true, { pageId: s3.id }) : s3.sheet.render(true);
    }
  }
  static getActiveActor({ actorName: e2 = null, actorId: t2 = null } = {}) {
    const s2 = ChatMessage.getSpeaker();
    let l2;
    return (e2 || t2) && (l2 = game.actors.contents.find((s3) => (!e2 || s3.name === e2) && (!t2 || s3.id === t2))), s2.token && !l2 && (l2 = canvas.tokens.get(s2.token)?.actor), l2 || (l2 = game.actors.get(s2.actor)), l2;
  }
  static getSelectedActors() {
    const e2 = [];
    for (const t2 of canvas.tokens.controlled)
      e2.push([t2.actor, t2]);
    return e2;
  }
  get spellFailure() {
    return this.items.filter((e2) => "equipment" === e2.type && true === e2.system.equipped).reduce((e2, t2) => "number" == typeof t2.system.spellFailure ? e2 + t2.system.spellFailure : e2, 0);
  }
  get race() {
    return this._race;
  }
  get typeColor() {
    return "#FDE600";
  }
  static _translateSourceInfo(e2, t2, s2) {
    let l2 = "";
    return "size" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoSize")), "buff" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoBuffs"), "temp" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoTemporaryBuffs")), "perm" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoPermanentBuffs")), "item" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoItemBuffs")), "misc" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoMiscBuffs"))), "equipment" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoEquipment")), "weapon" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoWeapons")), "feat" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoFeats"), "classFeat" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoClassFeatures")), "trait" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoTraits")), "racial" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoRacialTraits")), "misc" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoMiscFeatures")), "template" === t2 && (l2 = game.i18n.localize("FFD20.SourceInfoTemplate"))), "race" === e2 && (l2 = game.i18n.localize("FFD20.SourceInfoRace")), s2 && 0 !== s2.length ? "" === l2 ? s2 : `${l2} (${s2})` : l2;
  }
  static _getChangeItemSubtype(e2) {
    return "buff" === e2.type ? e2.system.buffType : "feat" === e2.type ? e2.system.featType : "";
  }
  get _skillTargets() {
    const e2 = [], t2 = [];
    for (const [s2, l2] of Object.entries(this.system.skills))
      if (null != l2)
        if (null != l2.subSkills)
          for (const e3 of Object.keys(l2.subSkills))
            t2.push(`skill.${s2}.subSkills.${e3}`);
        else
          e2.push(`skill.${s2}`);
    return [...e2, ...t2];
  }
  _prepareContainerItems(e2) {
    const t2 = [], getContainerContents = function(e3) {
      "container" === e3.type && e3.items.forEach((e4) => {
        t2.push(e4), getContainerContents(e4);
      });
    };
    return e2.forEach((e3) => {
      getContainerContents(e3);
    }), t2;
  }
  _prepareItemFlags(e2) {
    const t2 = {}, s2 = {};
    for (const l2 of e2) {
      if (l2.isActive) {
        const e4 = getProperty(l2, "system.flags.boolean") || {};
        for (const s3 of Object.keys(e4))
          t2[s3] ??= { sources: [] }, t2[s3].sources.push(l2);
      }
      const e3 = l2.system.tag;
      if (e3) {
        const t3 = getProperty(l2, "system.flags.dictionary") || {};
        for (const [c2, u2] of Object.entries(t3))
          setProperty(s2, `${e3}.${c2}`, l2.isActive ? u2 : 0);
      }
    }
    this.itemFlags = { boolean: t2, dictionary: s2 };
  }
  _prepareChanges() {
    this.changeItems = this.items.filter((e3) => e3.system.changes instanceof Array && e3.system.changes.length || e3.system.changeFlags && Object.values(e3.system.changeFlags).filter((e4) => true === e4).length).filter((e3) => e3.isActive);
    const e2 = [];
    for (const t3 of this.changeItems)
      e2.push(...t3.changes);
    addDefaultChanges.call(this, e2);
    const t2 = new Collection();
    for (const s2 of e2)
      t2.set(s2._id, s2);
    this.changes = t2;
  }
  applyActiveEffects() {
    super.applyActiveEffects(), this.containerItems = this._prepareContainerItems(this.items), this._prepareItemFlags(this.allItems), this._prepareChanges();
  }
  prepareData() {
    this.sourceInfo = {}, this.changeFlags = {}, super.prepareData(), this._initialized = true, this._setSourceDetails(this.sourceInfo);
  }
  async expireActiveEffects(e2 = {}) {
    const t2 = game.time.worldTime, s2 = this.temporaryEffects.filter((e3) => {
      const { seconds: s3, startTime: l3 } = e3.duration;
      if (s3 > 0) {
        return s3 - (t2 - l3) <= 0;
      }
      return false;
    }), l2 = [], c2 = [];
    for (const e3 of s2) {
      const t3 = e3.origin?.match(/Item\.(?<itemId>\w+)/), s3 = this.items.get(t3?.groups.itemId);
      s3 && "buff" === s3.type ? c2.push({ _id: s3.id, "system.active": false }) : l2.push({ _id: e3.id, active: false });
    }
    const u2 = mergeObject({ render: !c2.length }, e2);
    l2.length && await this.updateEmbeddedDocuments("ActiveEffect", l2, u2), c2.length && await this.updateEmbeddedDocuments("Item", c2, e2);
  }
  prepareBaseData() {
    super.prepareBaseData(), this.equipment = { shield: { type: CONFIG.FFD20.shieldTypes.none, id: void 0 }, armor: { type: CONFIG.FFD20.armorTypes.none, id: void 0 } }, this.classes = {}, this.resources ??= {}, this._resetInherentTotals(), callOldNamespaceHookAll("ffd20.prepareBaseActorData", "ffd20PrepareBaseActorData", this), Hooks.callAll("ffd20PrepareBaseActorData", this);
    const e2 = this.items.filter((e3) => "class" === e3.type), { level: t2, mythicTier: s2 } = e2.reduce((e3, t3) => (t3.prepareDerivedData(), e3.level += t3.hitDice, e3.mythicTier += t3.mythicTier, e3), { level: 0, mythicTier: 0 });
    this.system.details.level.value = t2, this.system.details.mythicTier = s2;
    for (const e3 of Object.keys(CONFIG.FFD20.conditions))
      this.system.attributes.conditions[e3] ??= false;
    {
      const e3 = Object.keys(this.system.abilities);
      for (const t3 of e3) {
        const e4 = this.system.abilities[t3].value;
        null == e4 ? (this.system.abilities[t3].total = null, this.system.abilities[t3].base = null, this.system.abilities[t3].baseMod = 0) : (this.system.abilities[t3].total = e4 - this.system.abilities[t3].drain, this.system.abilities[t3].penalty = (this.system.abilities[t3].penalty || 0) - Math.abs(this.system.abilities[t3].userPenalty || 0), this.system.abilities[t3].base = this.system.abilities[t3].total);
      }
      this.refreshAbilityModifiers();
    }
    {
      const t3 = "system.attributes.bab.total", s3 = Math.floor(e2.reduce((e3, s4) => {
        const l2 = s4.system.babBase;
        return 0 !== l2 && getSourceInfo(this.sourceInfo, t3).positive.push({ name: s4.name, value: fractionalToString(l2) }), e3 + l2;
      }, 0));
      this.system.attributes.bab.total = Math.floor(s3);
    }
    this._prepareClassSkills(), setProperty(this, "system.attributes.hd.total", this.system.details.level.value);
  }
  _prepareClassSkills() {
    const e2 = /* @__PURE__ */ new Set();
    this.items.filter((e3) => ["class", "race", "feat"].includes(e3.type)).forEach((t2) => {
      for (const [s2, l2] of Object.entries(t2.system.classSkills || {}))
        true === l2 && e2.add(s2);
    });
    for (const [t2, s2] of Object.entries(this.system.skills))
      if (s2) {
        this.system.skills[t2].cs = e2.has(t2);
        for (const l2 of Object.keys(s2.subSkills ?? {}))
          setProperty(s2, `subSkills.${l2}.cs`, e2.has(t2));
      } else
        console.warn(`Bad skill data for "${t2}"`, this);
  }
  hasArmorProficiency(e2, t2) {
    if ("equipment" !== e2.type || !["armor", "shield"].includes(e2.system.equipmentType))
      return true;
    const s2 = this.system.traits.armorProf?.customTotal?.split(CONFIG.FFD20.re.traitSeparator).map((e3) => e3.trim().toLowerCase()).filter((e3) => e3.length > 0) || [], l2 = e2.name.toLowerCase(), c2 = e2.system.tag;
    return this.system.traits.armorProf.total.includes(t2) || null != s2.find((e3) => e3.includes(l2) || e3.includes(c2));
  }
  _updateSpellBook(e2, t2, s2) {
    const l2 = this.system, c2 = l2.attributes.spells.spellbooks[e2];
    if (!c2)
      return void console.error(`Spellbook data not found for "${e2} on actor`, this);
    if (c2.label = c2.name || `FFD20.SpellBook${e2.capitalize()}`, !c2.inUse)
      return;
    if (c2.class)
      if ("_hd" === c2.class)
        c2.label = "FFD20.SpellBookSpelllike";
      else {
        const e3 = this.items.find((e4) => "class" === e4.type && e4.system.tag === c2.class);
        null != e3 && (c2.label = e3.name);
      }
    t2 ??= this.getRollData({ refresh: true }), s2 ??= this._generateSpellbookCache();
    const u2 = s2.books[e2], m2 = l2.abilities[c2.ability], d2 = RollFFD20.safeRoll(c2.spellSlotAbilityBonusFormula || "0", t2).total, h2 = getAbilityModifier((m2?.total ?? 10) + d2);
    let p2 = 0;
    {
      const s3 = `system.attributes.spells.spellbooks.${e2}.cl.total`, u3 = c2.cl.formula || "0";
      let m3 = 0;
      if ("npc" === this.type) {
        const e3 = c2.cl.base || 0;
        m3 += e3, p2 += e3, setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.Base"), e3);
      }
      if ("_hd" === c2.class) {
        const e3 = l2.attributes.hd.total;
        m3 += e3, p2 += e3, setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.HitDie"), e3);
      } else if (c2.class && t2.classes[c2.class]) {
        const e3 = t2.classes[c2.class].level;
        m3 += e3, p2 += e3, setSourceInfoByName(this.sourceInfo, s3, t2.classes[c2.class].name, e3);
      }
      if (c2.autoSpellLevelCalculation) {
        const e3 = c2.cl.autoSpellLevelCalculationFormula || "0", l3 = RollFFD20.safeTotal(e3, t2), u4 = Math.max(1, Math.min(20, m3 + l3));
        c2.cl.autoSpellLevelTotal = u4, p2 += l3, 0 !== l3 && setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.AutoSpellClassLevelOffset.Formula"), l3);
      }
      const d3 = RollFFD20.safeRoll(u3, t2).total;
      p2 += d3, d3 > 0 ? setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.CasterLevelBonusFormula"), d3) : d3 < 0 && setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.CasterLevelBonusFormula"), d3, false), null != t2.attributes.woundThresholds.penalty && t2.attributes.woundThresholds.penalty > 0 && p2 > 1 && (p2 = Math.max(1, p2 - t2.attributes.woundThresholds.penalty), setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[t2.attributes.woundThresholds.level]), -t2.attributes.woundThresholds.penalty)), t2.attributes.energyDrain && (p2 = Math.max(0, p2 - t2.attributes.energyDrain), setSourceInfoByName(this.sourceInfo, s3, game.i18n.localize("FFD20.CondTypeEnergyDrain"), -Math.abs(t2.attributes.energyDrain), false));
      p2 += c2.cl.total ?? 0, c2.cl.total = p2;
    }
    {
      Number.isFinite(c2.concentration) && (c2.concentration = {});
      const s3 = c2.concentrationFormula, u3 = s3.length ? RollFFD20.safeRoll(s3, t2).total : 0, m3 = l2.abilities[c2.ability]?.mod ?? 0, d3 = p2 + m3 + u3, h3 = c2.concentration.total ?? 0;
      setSourceInfoByName(this.sourceInfo, `system.attributes.spells.spellbooks.${e2}.concentration.total`, game.i18n.localize("FFD20.CasterLevel"), p2, false), setSourceInfoByName(this.sourceInfo, `system.attributes.spells.spellbooks.${e2}.concentration.total`, game.i18n.localize("FFD20.SpellcastingAbility"), m3, false), setSourceInfoByName(this.sourceInfo, `system.attributes.spells.spellbooks.${e2}.concentration.total`, game.i18n.localize("FFD20.ByBonus"), u3, false), c2.concentration = { total: h3 + d3 };
    }
    const getAbilityBonus = (e3) => 0 !== e3 ? ActorFFD20.getSpellSlotIncrease(h2, e3) : 0, g2 = new SpellbookMode(c2), y2 = true === c2.spellPoints.useSystem;
    if (c2.autoSpellLevelCalculation) {
      c2.spellPoints.useSystem = false, c2.spontaneous = g2.isSemiSpontaneous;
      let e3 = c2.casterType;
      (!e3 || g2.isHybrid && "high" !== e3) && (c2.casterType = e3 = "high"), g2.isPrestige && "low" !== e3 && (c2.casterType = e3 = "low");
      const s3 = CONFIG.FFD20.casterProgression[c2.spontaneous ? "castsPerDay" : "spellsPreparedPerDay"][g2.raw][e3];
      let l3 = Math.clamped(c2.cl.autoSpellLevelTotal, 1, 20);
      if (!Number.isSafeInteger(l3)) {
        const e4 = `Actor ${this.id} has invalid caster class level.`;
        console.error(e4, l3), ui.notifications?.error(e4), l3 = Math.floor(l3);
      }
      t2.ablMod = h2;
      const u3 = c2[c2.spontaneous ? "castPerDayAllOffsetFormula" : "preparedAllOffsetFormula"] || "0", m3 = RollFFD20.safeTotal(u3, t2);
      for (let u4 = 0; u4 < 10; u4++) {
        const d3 = c2.spells[`spell${u4}`], h3 = 0 === u4 && c2.spontaneous ? CONFIG.FFD20.casterProgression.spellsPreparedPerDay[g2.raw][e3][l3 - 1][u4] : s3[l3 - 1][u4];
        d3.base = h3;
        const p3 = d3[c2.spontaneous ? "castPerDayOffsetFormula" : "preparedOffsetFormula"] || "0", y3 = "number" == typeof h3 || 0 === u4 && c2.hasCantrips ? h3 + getAbilityBonus(u4) + m3 + RollFFD20.safeTotal(p3, t2) : null;
        d3.max = y3, Number.isFinite(d3.value) || (d3.value = y3);
      }
    } else
      for (let e3 = 0; e3 < 10; e3++) {
        const t3 = c2.spells[`spell${e3}`];
        let s3 = parseInt(t3.base);
        Number.isNaN(s3) ? (t3.base = null, t3.max = 0) : c2.autoSpellLevels ? (s3 += getAbilityBonus(e3), t3.max = s3) : t3.max = s3;
        const l3 = t3.max, u3 = t3.value;
        Number.isFinite(u3) || (t3.value = l3);
      }
    for (let e3 = 0; e3 < 10; e3++) {
      const t3 = c2.spells[`spell${e3}`], s3 = t3.value;
      t3.value = s3 || 0;
    }
    {
      const e3 = {};
      for (let t3 = 0; t3 < 10; t3++)
        e3[t3] = new SpellbookSlots({ value: c2.spells[`spell${t3}`].max, domain: c2.domainSlotValue });
      if (!c2.spontaneous)
        for (let t3 = 0; t3 < 10; t3++) {
          const s3 = u2.level[t3]?.spells ?? [], l3 = e3[t3];
          for (const e4 of s3)
            if (Number.isFinite(e4.maxCharges)) {
              const t4 = e4.system.slotCost ?? 1, s4 = { domain: 0, uses: 0 };
              true === e4.system.domain ? (s4.domain = Math.min(e4.maxCharges, l3.domain), s4.uses = (e4.maxCharges - s4.domain) * t4) : s4.uses = e4.maxCharges * t4, l3.domain -= s4.domain, l3.value -= s4.uses;
            }
          c2.spells[`spell${t3}`].value = l3.value;
        }
      if (c2.autoSpellLevelCalculation) {
        const s3 = (m2?.total ?? 0) - 10, l3 = c2.preparedAllOffsetFormula || "0", d3 = RollFFD20.safeTotal(l3, t2), h3 = c2.casterType || "high", p3 = Math.floor(Math.clamped(c2.cl.autoSpellLevelTotal, 1, 20));
        for (let l4 = 0; l4 < 10; l4++) {
          const m3 = c2.spells[`spell${l4}`];
          if (s3 < l4) {
            m3.lowAbilityScore = true;
            continue;
          }
          let y3;
          if (m3.known = { unused: 0, max: 0 }, m3.preparation = { unused: 0, max: 0 }, g2.isPrepared)
            y3 = m3.value, m3.preparation.max = m3.max;
          else {
            let s4 = CONFIG.FFD20.casterProgression.spellsPreparedPerDay[g2.raw][h3]?.[p3 - 1][l4];
            s4 += d3;
            const c3 = m3.preparedOffsetFormula || "0";
            s4 += RollFFD20.safeTotal(c3, t2), m3.known.max = s4;
            let F3 = e3[l4].domain;
            const D2 = u2.level[l4]?.spells.reduce((e4, t3) => {
              const { preparation: s5, atWill: l5, domain: c4, slotCost: u3 } = t3.system;
              return !l5 && s5.spontaneousPrepared && (c4 && F3 > 0 ? F3 -= u3 : e4 += u3), e4;
            }, 0) ?? 0;
            e3[l4].domainUnused = F3, e3[l4].used = D2, y3 = s4 - D2;
          }
          if (!y3) {
            m3.spellMessage = "";
            continue;
          }
          let F2 = "";
          y3 < 0 ? (F2 = game.i18n.format("FFD20.TooManySpells", { quantity: Math.abs(y3) }), g2.isSpontaneous ? m3.unusedKnown = y3 : m3.preparation.unused = y3) : y3 > 0 && (g2.isSpontaneous ? (F2 = 1 === y3 ? game.i18n.localize("FFD20.LearnMoreSpell") : game.i18n.format("FFD20.LearnMoreSpells", { quantity: y3 }), m3.known.unused = y3) : (F2 = 1 === y3 ? game.i18n.localize("FFD20.PrepareMoreSpell") : game.i18n.format("FFD20.PrepareMoreSpells", { quantity: y3 }), m3.preparation.unused = y3)), m3.spellMessage = F2;
        }
      }
    }
    if (y2) {
      const e3 = c2.spellPoints.maxFormula || "0";
      t2.cl = c2.cl.total, t2.ablMod = h2;
      const s3 = c2.class ?? "";
      t2.classLevel = "_hd" === s3 ? t2.attributes.hd.total : t2[s3]?.level || 0;
      const l3 = RollFFD20.safeRoll(e3, t2);
      c2.spellPoints.max = l3.total;
    } else
      c2.spellPoints.max = 0;
    c2.range = new SpellRanges(c2.cl.total);
  }
  _generateSpellbookCache() {
    const e2 = Object.keys(this.system.attributes.spells.spellbooks), t2 = this.items.filter((e3) => "spell" === e3.type), s2 = { spells: t2, books: {} };
    return e2.forEach((e3) => {
      s2.books[e3] ??= new Spellbook(e3, this);
    }), t2.forEach((t3) => {
      const l2 = t3.system.spellbook;
      if (!e2.includes(l2))
        return console.error("Spell has invalid book", t3);
      s2.books[l2].addSpell(t3);
    }), s2;
  }
  updateSpellbookInfo(e2, t2) {
    e2 ??= this.getRollData({ refresh: true }), t2 ??= this._generateSpellbookCache();
    const s2 = this.system.attributes.spells.spellbooks;
    for (const l2 of Object.keys(s2))
      this._updateSpellBook(l2, e2, t2);
    this.system.attributes.spells.usedSpellbooks = Object.keys(s2).filter((e3) => s2[e3].inUse);
  }
  refreshDerivedData() {
    this.system.attributes.maxDexBonus = null, this.system.abilities.dex.maxBonus = this.system.abilities.dex.mod;
    {
      const e2 = this._computeEncumbrance(), t2 = this._applyArmorPenalties();
      this.system.attributes.acp.encumbrance = e2.acp, this.system.attributes.acp.gear = t2.acp, this.system.attributes.acp.total = Math.max(e2.acp, t2.acp), null == e2.maxDexBonus && null == t2.maxDexBonus || (this.system.attributes.maxDexBonus = Math.min(e2.maxDexBonus ?? Number.POSITIVE_INFINITY, t2.maxDexBonus ?? Number.POSITIVE_INFINITY), this.system.abilities.dex.maxBonus = Math.min(this.system.abilities.dex.maxBonus, this.system.attributes.maxDexBonus));
    }
  }
  prepareDerivedData() {
    super.prepareDerivedData(), this.prepareProficiencies(), this.getRollData({ refresh: true }), this.items.forEach((e2) => {
      e2.prepareDerivedItemData(), this.updateItemResources(e2);
    }), applyChanges.call(this), this.prepareSpecificDerivedData(), this.prepareCMB(), this.prepareItemLinks(), this.getRollData({ refresh: true }), this.items.forEach((e2) => {
      e2.prepareDerivedItemData(), this.updateItemResources(e2);
    });
    (this.isToken ? [this.token] : this.getActiveTokens()).forEach((e2) => {
      try {
        e2.drawBars();
      } catch (e3) {
      }
    });
  }
  prepareProficiencies() {
    const e2 = this.system, t2 = { armorProf: CONFIG.FFD20.armorProficiencies, weaponProf: CONFIG.FFD20.weaponProficiencies, languages: CONFIG.FFD20.languages };
    for (const [s2, l2] of Object.entries(t2)) {
      const t3 = e2.traits[s2]?.custom?.split(CONFIG.FFD20.re.traitSeparator).filter((e3) => e3.length > 0) || [], c2 = this.items.reduce((e3, c3) => {
        if (hasProperty(c3, `system.${s2}`)) {
          let u2 = getSourceInfo(this.sourceInfo, `system.traits.${s2}`).positive.find((e4) => e4.name === c3.name);
          const m2 = !!u2;
          u2 ? "string" == typeof u2.value && (u2.value = u2.value.split(", ")) : u2 = { name: c3.name, value: [] };
          for (const t4 of c3.system[s2].value)
            u2.value.includes(t4) || u2.value.push(l2[t4]), e3.includes(t4) || e3.push(t4);
          const d2 = c3.system[s2].custom?.split(CONFIG.FFD20.re.traitSeparator).map((e4) => e4.trim()).filter((e4, t4, s3) => e4.length > 0 && s3.indexOf(e4) === t4) || [];
          u2.value.push(...d2), t3.push(...d2), u2.value.length > 0 && (m2 && (u2.value = [...new Set(u2.value)]), u2.value = u2.value.join(", "), m2 || getSourceInfo(this.sourceInfo, `system.traits.${s2}`).positive.push(u2));
        }
        return e3;
      }, [...e2.traits[s2]?.value ?? []]);
      e2.traits[s2] ??= {}, e2.traits[s2].total = [...c2], e2.traits[s2].customTotal = t3.join(";");
    }
  }
  prepareCMB() {
    const e2 = this.system.attributes.attack.shared ?? 0, t2 = this.system.attributes.attack.general ?? 0, s2 = this.system.attributes.cmbAbility, l2 = this.system.abilities[s2]?.mod ?? 0, c2 = this.system.traits.size, u2 = e2 + t2 + (CONFIG.FFD20.sizeSpecialMods[c2] ?? 0) + (this.system.attributes.cmb.bonus ?? 0) + l2;
    this.system.attributes.cmb.total = u2;
  }
  prepareSpecificDerivedData() {
    callOldNamespaceHookAll("ffd20.prepareDerivedActorData", "ffd20PrepareDerivedActorData", this), Hooks.callAll("ffd20PrepareDerivedActorData", this), this.refreshDerivedData();
    const e2 = this.system.attributes, t2 = this.system.abilities;
    for (const e3 of Object.keys(t2)) {
      const s3 = t2[e3].base, l3 = t2[e3].penalty || 0, c3 = t2[e3].damage;
      t2[e3].baseMod = getAbilityModifier(s3, { penalty: l3, damage: c3 });
    }
    const s2 = this.system, l2 = s2, c2 = game.settings.get("ffd20", "healthConfig"), u2 = { up: Math.ceil, nearest: Math.round, down: Math.floor }[c2.rounding];
    for (const t3 of ["hp", "vigor"])
      e2[t3].max = u2(e2[t3].max);
    for (const e3 of this.constructor.relativeAttributes) {
      const t3 = getProperty(this, `${e3}.offset`), s3 = getProperty(this, `${e3}.max`);
      null != t3 && setProperty(this, `${e3}.value`, t3 + s3);
    }
    {
      const t3 = e2.bab.total - e2.acp.attackPenalty - (e2.energyDrain ?? 0);
      e2.attack.shared = t3;
    }
    this.updateWoundThreshold();
    for (const e3 of CONFIG.FFD20.arbitrarySkills) {
      if (null == l2.skills[e3])
        continue;
      const t3 = l2.skills[e3];
      t3.subSkills = t3.subSkills || {};
      for (const e4 of Object.keys(t3.subSkills))
        null == t3.subSkills[e4] && delete t3.subSkills[e4];
    }
    for (const e3 of Object.keys(l2.skills)) {
      null == l2.skills[e3] && delete l2.skills[e3];
    }
    for (const e3 of Object.keys(l2.skills))
      if (CONFIG.FFD20.backgroundSkills.includes(e3)) {
        const t3 = l2.skills[e3];
        t3.background = true;
        for (const e4 of Object.keys(t3.subSkills ?? {}))
          t3.subSkills[e4].background = true;
      }
    for (const t3 of ["ac.normal.total", "ac.shield.total", "ac.natural.total"]) {
      const l3 = getProperty(s2, t3);
      if (l3)
        for (const t4 of ["normal", "flatFooted"])
          e2.ac[t4].total += l3;
    }
    {
      const s3 = e2.ac.normal.ability ?? "dex", l3 = e2.ac.touch.ability ?? "dex", c3 = e2.cmd.dexAbility ?? "dex";
      let u3 = t2[s3]?.mod ?? 0, m2 = t2[l3]?.mod ?? 0;
      const d2 = t2[c3]?.mod ?? 0;
      this.changeFlags.loseDexToAC && (u3 = Math.min(u3, 0), m2 = Math.min(m2, 0));
      const h2 = e2.maxDexBonus ?? null, p2 = { normal: null !== h2 ? Math.min(h2, u3) : u3, touch: null !== h2 ? Math.min(h2, m2) : m2, flatFooted: Math.min(0, u3) }, g2 = { normal: s3, touch: l3, flatFooted: s3 }, y2 = { total: d2, flatFootedTotal: Math.min(0, d2) };
      for (const [t3, s4] of Object.entries(p2))
        e2.ac[t3].total += s4, getSourceInfo(this.sourceInfo, `system.attributes.ac.${t3}.total`).positive.push({ value: s4, name: CONFIG.FFD20.abilities[g2[t3]] });
      for (const [t3, s4] of Object.entries(y2))
        e2.cmd[t3] += s4, getSourceInfo(this.sourceInfo, `system.attributes.cmd.${t3}`).positive.push({ value: s4, name: CONFIG.FFD20.abilities[c3] });
    }
    {
      const t3 = this.items.filter((e3) => "equipment" === e3.type);
      let s3 = false;
      const l3 = { name: "", value: game.i18n.localize("FFD20.ReducedMovementSpeed") };
      if (e2.encumbrance.level >= CONFIG.FFD20.encumbranceLevels.medium && !this.changeFlags.noEncumbrance && (s3 = true, l3.name = game.i18n.localize("FFD20.Encumbrance")), t3.filter((e3) => "mediumArmor" === e3.system.equipmentSubtype && e3.system.equipped).length && !this.changeFlags.mediumArmorFullSpeed && (s3 = true, l3.name = game.i18n.localize("FFD20.EquipTypeMedium")), t3.filter((e3) => "heavyArmor" === e3.system.equipmentSubtype && e3.system.equipped).length && !this.changeFlags.heavyArmorFullSpeed && (s3 = true, l3.name = game.i18n.localize("FFD20.EquipTypeHeavy")), s3)
        for (const e3 of Object.keys(this.system.attributes.speed)) {
          const t4 = `system.attributes.speed.${e3}.total`, s4 = getProperty(this, t4);
          setProperty(this, t4, this.constructor.getReducedMovementSpeed(s4)), s4 > 0 && getSourceInfo(this.sourceInfo, `system.attributes.speed.${e3}.add`).negative.push(l3);
        }
    }
    switch (e2.encumbrance.level) {
      case CONFIG.FFD20.encumbranceLevels.medium:
        getSourceInfo(this.sourceInfo, "system.attributes.acp.total").negative.push({ name: game.i18n.localize("FFD20.Encumbrance"), value: 3 }), getSourceInfo(this.sourceInfo, "system.attributes.maxDexBonus").negative.push({ name: game.i18n.localize("FFD20.Encumbrance"), value: 3 });
        break;
      case CONFIG.FFD20.encumbranceLevels.heavy:
        getSourceInfo(this.sourceInfo, "system.attributes.acp.total").negative.push({ name: game.i18n.localize("FFD20.Encumbrance"), value: 6 }), getSourceInfo(this.sourceInfo, "system.attributes.maxDexBonus").negative.push({ name: game.i18n.localize("FFD20.Encumbrance"), value: 1 });
    }
    this.updateSpellbookInfo();
  }
  getLabels() {
    const e2 = {};
    e2.race = this.race ? game.i18n.localize("FFD20.RaceTitle").format(this.race.name) : game.i18n.localize("FFD20.Race"), e2.alignment = CONFIG.FFD20.alignments[this.system.details.alignment], e2.speed = {};
    for (const [t2, s2] of Object.entries(this.system.attributes.speed ?? {})) {
      const l2 = ffd20.utils.convertDistance(s2.total);
      e2.speed[t2] = `${l2[0]} ${CONFIG.FFD20.measureUnitsShort[l2[1]]}`;
    }
    return e2;
  }
  _applyArmorPenalties() {
    const e2 = { armor: { lightArmor: "lgt", mediumArmor: "med", heavyArmor: "hvy" }, shield: { other: "shl", lightShield: "shl", heavyShield: "shl", towerShield: "twr" } };
    let t2 = 0;
    const s2 = { armor: 0, shield: 0 }, l2 = { armor: { value: 0, item: null }, shield: { value: 0, item: null } }, c2 = { armor: null, shield: null };
    this.items.filter((e3) => "equipment" === e3.type && e3.system.equipped).forEach((u3) => {
      const m3 = u3.system.equipmentType, d2 = ["armor", "shield"].includes(m3);
      let h2 = Math.abs(u3.system.armor.acp);
      true === u3.system.masterwork && d2 && (h2 = Math.max(0, h2 - 1)), d2 && (h2 = Math.max(0, h2 + (getProperty(this, `system.attributes.acp.${m3}Bonus`) ?? 0)));
      let p2 = 0;
      if (u3.system.broken && (p2 = h2, h2 *= 2), h2) {
        const e3 = getSourceInfo(this.sourceInfo, "system.attributes.acp.total").negative.find((e4) => e4.itemId === u3.id);
        p2 && (l2[m3].value = p2, l2[m3].item = u3), e3 ? e3.value = h2 : getSourceInfo(this.sourceInfo, "system.attributes.acp.total").negative.push({ name: u3.name, itemId: u3.id, value: h2 });
      }
      if (d2 && (h2 > s2[m3] && (s2[m3] = h2), this.hasArmorProficiency(u3, e2[m3][u3.system.equipmentSubtype]) || (t2 += h2)), null !== u3.system.armor.dex && d2) {
        const e3 = Number.parseInt(u3.system.armor.dex, 10);
        if (Number.isInteger(e3)) {
          const t3 = e3 + (getProperty(this, `system.attributes.mDex.${m3}Bonus`) ?? 0);
          c2[m3] = Math.min(t3, c2[m3] ?? Number.POSITIVE_INFINITY);
          const s3 = getSourceInfo(this.sourceInfo, "system.attributes.maxDexBonus").negative.find((e4) => e4.itemId === u3.id);
          s3 ? s3.value = e3 : getSourceInfo(this.sourceInfo, "system.attributes.maxDexBonus").negative.push({ name: u3.name, itemId: u3.id, value: e3, ignoreNull: false });
        }
      }
    });
    {
      const e3 = game.i18n.localize("FFD20.Broken");
      for (const t3 of Object.keys(l2)) {
        const s3 = l2[t3].value;
        if (0 == s3)
          continue;
        const c3 = l2[t3].item.id, u3 = getSourceInfo(this.sourceInfo, `system.attributes.acp.${t3}Bonus`).negative.find((e4) => e4.brokenId === c3);
        u3 ? u3.value = s3 : getSourceInfo(this.sourceInfo, `system.attributes.acp.${t3}Bonus`).negative.push({ name: e3, brokenId: c3, value: s3 });
      }
    }
    const u2 = s2.armor + s2.shield, m2 = { maxDexBonus: null, acp: u2 };
    return this.system.attributes.acp.gear = u2, null === c2.armor && null === c2.shield || (m2.maxDexBonus = Math.min(c2.armor ?? Number.POSITIVE_INFINITY, c2.shield ?? Number.POSITIVE_INFINITY)), this.system.attributes.acp.attackPenalty = t2, m2;
  }
  prepareItemLinks() {
    if (this.items) {
      for (const e2 of this.items)
        if (null != e2.system.links)
          for (const t2 of Object.keys(e2.system.links))
            null != q[t2] && q[t2].call(this, e2, e2.system.links[t2]);
    }
  }
  _setSourceDetails(e2) {
    const t2 = this.system, s2 = {};
    for (const e3 of Object.keys(CONFIG.FFD20.buffTargets)) {
      let t3 = getChangeFlat.call(this, e3, null);
      t3 instanceof Array || (t3 = [t3]);
      for (const e4 of t3)
        s2[e4] || (s2[e4] = []);
    }
    s2["system.attributes.bab.total"] = [], s2["system.attributes.ac.normal.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 }), s2["system.attributes.ac.touch.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 }), s2["system.attributes.ac.flatFooted.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 }), s2["system.attributes.cmd.total"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 }), s2["system.attributes.cmd.flatFootedTotal"].push({ name: game.i18n.localize("FFD20.Base"), value: 10 });
    for (const [e3, l3] of Object.entries(t2.abilities))
      s2[`system.abilities.${e3}.total`].push({ name: game.i18n.localize("FFD20.Base"), value: l3.value }), null != l3.damage && 0 !== l3.damage && s2[`system.abilities.${e3}.total`].push({ name: game.i18n.localize("FFD20.AbilityDamage"), value: `-${Math.floor(Math.abs(l3.damage) / 2)} (Mod only)` }), null != l3.drain && 0 !== l3.drain && s2[`system.abilities.${e3}.total`].push({ name: game.i18n.localize("FFD20.AbilityDrain"), value: -Math.abs(l3.drain) });
    {
      const e3 = game.settings.get("ffd20", "healthConfig").variants;
      if (("npc" === this.type ? e3.npc.useWoundThresholds : e3.pc.useWoundThresholds) > 0) {
        const e4 = this.getWoundThresholdData(t2);
        if (e4.level > 0) {
          const l3 = ["~attackCore", "cmd", "init", "allSavingThrows", "ac", "skills", "abilityChecks"];
          for (const c2 of l3) {
            let l4 = getChangeFlat.call(this, c2, "penalty", t2);
            l4 instanceof Array || (l4 = [l4]);
            for (const t3 of l4)
              t3 && s2[t3].push({ name: game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[e4.level]), value: -e4.penalty });
          }
        }
      }
    }
    const l2 = this.getRollData();
    for (const [t3, c2] of Object.entries(e2))
      for (const e3 of Object.values(c2))
        if (e3.length > 0) {
          s2[t3] = s2[t3] || [];
          for (const c3 of e3) {
            c3.operator || (c3.operator = "add");
            const e4 = this.constructor._translateSourceInfo(c3.type, c3.subtype, c3.name);
            let u2 = null != c3.value ? c3.value : RollFFD20.safeRoll(c3.formula || "0", l2, [t3, c3, this], { suppressError: !this.testUserPermission(game.user, "OWNER") }).total;
            "set" === c3.operator && (u2 = game.i18n.localize("FFD20.SetTo").format(u2)), "add" === c3.operator && 0 === u2 && false !== c3.ignoreNull || s2[t3].push({ name: e4.replace(/[[\]]/g, ""), value: u2 });
          }
        }
    this.sourceDetails = s2;
  }
  _getInherentTotalsKeys() {
    const e2 = { "attributes.ac.normal.total": 10, "attributes.ac.touch.total": 10, "attributes.ac.flatFooted.total": 10, "attributes.bab.total": 0, "attributes.bab.value": 0, "attributes.cmd.total": 10, "attributes.cmd.flatFootedTotal": 10, "attributes.acp.armorBonus": 0, "attributes.acp.shieldBonus": 0, "attributes.acp.gear": 0, "attributes.acp.encumbrance": 0, "attributes.acp.total": 0, "attributes.acp.attackPenalty": 0, "attributes.maxDexBonus": null, "ac.normal.total": 0, "ac.normal.base": 0, "ac.normal.enh": 0, "ac.normal.misc": 0, "ac.natural.total": 0, "ac.natural.base": 0, "ac.natural.misc": 0, "ac.natural.enh": 0, "ac.shield.total": 0, "ac.shield.base": 0, "ac.shield.enh": 0, "ac.shield.misc": 0, "attributes.sr.total": 0, "attributes.init.bonus": 0, "attributes.init.total": 0, "attributes.cmb.bonus": 0, "attributes.cmb.total": 0, "attributes.cmb.value": 0, "attributes.hp.max": this.system.attributes.hp.base ?? 0, "attributes.vigor.max": this.system.attributes.vigor.base ?? 0, "attributes.wounds.max": this.system.attributes.wounds.base ?? 0, "attributes.mp.max": this.system.attributes.mp.base ?? 0, "attributes.attack.general": 0, "attributes.attack.melee": 0, "attributes.attack.ranged": 0, "attributes.attack.critConfirm": 0, "attributes.mDex": { armorBonus: 0, shieldBonus: 0 }, "attributes.damage.general": 0, "attributes.damage.weapon": 0, "attributes.damage.spell": 0, "attributes.damage.shared": 0, "attributes.woundThresholds.level": 0, "attributes.woundThresholds.mod": 0, "attributes.woundThresholds.override": -1, "attributes.woundThresholds.penaltyBase": 0, "attributes.woundThresholds.penalty": 0, "abilities.str.checkMod": 0, "abilities.dex.checkMod": 0, "abilities.con.checkMod": 0, "abilities.int.checkMod": 0, "abilities.wis.checkMod": 0, "abilities.cha.checkMod": 0, "attributes.spells.spellbooks.primary.concentration.total": 0, "attributes.spells.spellbooks.secondary.concentration.total": 0, "attributes.spells.spellbooks.tertiary.concentration.total": 0, "attributes.spells.spellbooks.quaternary.concentration": 0, "attributes.spells.spellbooks.spelllike.concentration.total": 0, "attributes.spells.spellbooks.primary.cl.total": 0, "attributes.spells.spellbooks.secondary.cl.total": 0, "attributes.spells.spellbooks.tertiary.cl.total": 0, "attributes.spells.spellbooks.quaternary.cl.total": 0, "attributes.spells.spellbooks.spelllike.cl.total": 0, "details.carryCapacity.bonus.total": 0, "details.carryCapacity.multiplier.total": 0 };
    try {
      const t2 = getChangeFlat.call(this, "skills", "skills");
      for (const s2 of t2)
        e2[s2.replace(/^system\./, "")] = 0;
    } catch (e3) {
      console.error("Could not determine skills for an actor", this);
    }
    return e2;
  }
  _resetInherentTotals() {
    const e2 = this._getInherentTotalsKeys();
    for (const [t2, s2] of Object.entries(e2))
      try {
        setProperty(this.system, t2, s2);
      } catch (e3) {
        console.log(e3, t2);
      }
  }
  static getReducedMovementSpeed(e2) {
    return e2 - 5 * Math.floor(e2 / 5 / 3);
  }
  static getSpellSlotIncrease(e2, t2) {
    return 0 === t2 || e2 <= 0 ? 0 : Math.max(0, Math.ceil((e2 + 1 - t2) / 4));
  }
  getLevelExp(e2) {
    return 0;
  }
  async _preUpdate(e2, t2, s2) {
    if (await super._preUpdate(e2, t2, s2), this._initialized)
      for (const t3 of this.constructor.relativeAttributes) {
        const s3 = { value: Object.hasOwnProperty.call(e2, `${t3}.value`), offset: Object.hasOwnProperty.call(e2, `${t3}.offset`), max: Object.hasOwnProperty.call(e2, `${t3}.max`) }, l3 = Object.entries(s3).reduce((s4, l4) => (s4[l4[0]] = l4[1] ? e2[`${t3}.${l4[0]}`] : getProperty(e2, `${t3}.${l4[0]}`), "max" === l4[0] && void 0 === s4[l4[0]] && (s4[l4[0]] = getProperty(this, `${t3}.max`)), s4), {});
        void 0 !== l3.value && void 0 === l3.offset && setProperty(e2, `${t3}.offset`, l3.value - l3.max);
      }
    if (!e2.system)
      return;
    const l2 = this.system, c2 = e2.system.traits?.size;
    if (void 0 !== c2 && void 0 !== l2.traits.size) {
      const t3 = CONFIG.FFD20.tokenSizes[c2];
      this.isToken || getProperty(this, "prototypeToken.flags.ffd20.staticSize") || (e2.token || (e2.token = {}), e2.token.width = t3.w, e2.token.height = t3.h, e2.token.scale = t3.scale);
    }
    const u2 = e2.system.abilities;
    if (u2) {
      const e3 = ["userPenalty", "damage", "drain"], t3 = Object.keys(u2);
      for (const s3 of t3)
        for (const t4 of e3)
          void 0 !== u2[s3][t4] && (u2[s3][t4] = Math.abs(u2[s3][t4]));
    }
    const m2 = e2.system.attributes?.energyDrain;
    void 0 !== m2 && (e2.system.attributes.energyDrain = Math.abs(m2));
    const d2 = e2.system.attributes?.conditions;
    if (d2) {
      const e3 = [["shaken", "frightened", "panicked"], ["fatigued", "exhausted"]];
      for (const t3 of e3) {
        const e4 = Object.keys(d2).find((e5) => t3.includes(e5));
        if (null != e4)
          for (const s3 of t3)
            s3 !== e4 && (d2[s3] = false);
      }
    }
    this._updateExp(e2);
  }
  _onUpdate(e2, t2, s2, l2 = {}) {
    if (super._onUpdate(e2, t2, s2, l2), game.user.id === s2 && hasProperty(e2, "system.attributes.conditions") && (this.toggleConditionStatusIcons({ render: false }), canvas.perception.update({ initializeLighting: true, initializeVision: true }, true), game.socket.emit("system.ffd20", { eventType: "redrawCanvas" })), game.user.id === s2) {
      const t3 = getProperty(e2, "system.traits.size");
      if (t3) {
        const e3 = CONFIG.FFD20.tokenSizes[t3], s3 = this.getActiveTokens(false, true).filter((e4) => !e4.getFlag("ffd20", "staticSize"));
        s3.forEach((t4) => {
          t4.update({ width: e3.w, height: e3.h, scale: e3.scale });
        });
      }
    }
  }
  _onCreateEmbeddedDocuments(e2, t2, s2, l2, c2) {
    if (super._onCreateEmbeddedDocuments(...arguments), c2 === game.user.id && "Item" === e2) {
      this.toggleConditionStatusIcons({ render: false });
      const e3 = t2.find((e4) => "race" === e4.type);
      e3?.system.size && this.system.traits.size !== e3.system.size && this.update({ "system.traits.size": e3.system.size });
    }
  }
  _onUpdateEmbeddedDocuments(e2, t2, s2, l2, c2) {
    super._onUpdateEmbeddedDocuments(e2, t2, s2, l2, c2), c2 === game.user.id && "Item" === e2 && this.toggleConditionStatusIcons({ render: false });
  }
  updateItemResources(e2) {
    if (e2.isCharged) {
      const t2 = e2.system.useCustomTag ? e2.system.tag : createTag(e2.name), s2 = { value: e2.charges, max: e2.maxCharges, _id: e2.id };
      return this.system.resources[t2] = s2, true;
    }
    return false;
  }
  async createAttackFromWeapon(e2) {
    if ("weapon" !== e2.type)
      throw new Error("Wrong Item type");
    if (!this.isOwner) {
      const e3 = game.i18n.format("FFD20.ErrorNoActorPermissionAlt", { 0: this.name });
      return console.warn(e3), ui.notifications.warn(e3);
    }
    const t2 = { type: "attack" };
    t2.name = e2.name, t2.img = e2.img, t2["system.attackType"] = "weapon", t2["system.masterwork"] = e2.system.masterwork, t2["system.enh"] = e2.system.enh, t2["system.broken"] = e2.system.broken;
    const s2 = deepClone(e2._source.system.actions ?? []);
    for (const e3 of s2)
      e3._id = randomID(16);
    t2["system.actions"] = s2;
    const l2 = (await this.createEmbeddedDocuments("Item", [expandObject(t2)]))[0];
    return l2 && await e2.createItemLink("children", "data", l2, l2.id), ui.notifications.info(game.i18n.localize("FFD20.NotificationCreatedAttack").format(e2.system.name)), await e2.update({ "system.showInQuickbar": false }), l2;
  }
  getSkillInfo(e2) {
    let t2, s2, l2;
    const [c2, u2, m2] = e2.split(".", 3), d2 = "subSkills" === u2 && !!m2, h2 = this.system.skills[c2];
    if (!h2)
      return null;
    if (d2) {
      if (t2 = h2.subSkills[m2], !t2)
        return null;
      s2 = `${CONFIG.FFD20.skills[c2]} (${t2.name})`, l2 = this.getSkillInfo(c2);
    } else
      t2 = h2, s2 = t2.name ?? CONFIG.FFD20.skills[e2];
    const p2 = duplicate(t2);
    return p2.id = e2, p2.name = s2, l2 && (p2.parentSkill = l2), p2;
  }
  async rollSkill(e2, t2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    if (false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollSkill", void 0, this, "skill", e2, t2))
      return;
    const s2 = this.getSkillInfo(e2), l2 = this.getRollData(), c2 = this.getContextNotes(`skill.${e2}`), u2 = this.formatContextNotes(c2, l2);
    s2.rt && !s2.rank && u2.push(game.i18n.localize("FFD20.Untrained"));
    const m2 = [], d2 = getHighestChanges(this.changes.filter((t3) => {
      let s3 = getChangeFlat.call(this, t3.subTarget, t3.modifier);
      return s3 instanceof Array || (s3 = [s3]), s3.includes(`system.skills.${e2}.changeBonus`);
    }), { ignoreTarget: true });
    s2.ability && m2.push(`@abilities.${s2.ability}.mod[${CONFIG.FFD20.abilities[s2.ability]}]`), s2.rank > 0 && (m2.push(`${s2.rank}[${game.i18n.localize("FFD20.SkillRankPlural")}]`), s2.cs && m2.push(`3[${game.i18n.localize("FFD20.CSTooltip")}]`)), s2.acp && 0 !== l2.attributes.acp.total && m2.push(`-@attributes.acp.total[${game.i18n.localize("FFD20.ACPLong")}]`), l2.attributes.woundThresholds?.penalty > 0 && m2.push(`- @attributes.woundThresholds.penalty[${game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[l2.attributes.woundThresholds.level])}]`);
    for (const e3 of d2)
      e3.value && m2.push(`${e3.value}[${e3.flavor}]`);
    const h2 = [];
    u2.length > 0 && h2.push({ header: game.i18n.localize("FFD20.Notes"), value: u2 });
    const p2 = { ...t2, parts: m2, rollData: l2, flavor: game.i18n.localize("FFD20.SkillCheck").format(s2.name), chatTemplateData: { hasProperties: h2.length > 0, properties: h2 }, compendium: { entry: CONFIG.FFD20.skillCompendiumEntries[e2] ?? s2.journal, type: "JournalEntry" }, subject: { skill: e2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollSkill", this, p2, e2))
      return;
    const g2 = await ffd20.dice.d20Roll(p2);
    return g2 && Hooks.callAll("ffd20ActorRollSkill", this, g2, e2), g2;
  }
  async rollBAB(e2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    if (false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollBab", void 0, this, "bab", null, e2))
      return;
    const t2 = { ...e2, parts: [`${this.system.attributes.bab.total}[${game.i18n.localize("FFD20.BABAbbr")}]`], subject: { core: "bab" }, flavor: game.i18n.localize("FFD20.BAB"), speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollBab", this, t2))
      return;
    const s2 = await ffd20.dice.d20Roll(t2);
    return Hooks.callAll("ffd20ActorRollBab", this, s2), s2;
  }
  async rollCMB(e2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    if (e2.ranged ??= false, e2.ability ??= null, false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollCmb", void 0, this, "cmb", null, e2))
      return;
    const t2 = this.getRollData(), s2 = this.getContextNotes("misc.cmb"), l2 = this.formatContextNotes(s2, t2), c2 = [], describePart = (e3, t3) => c2.push(`${e3}[${t3}]`), srcDetails = (e3) => e3?.reverse().forEach((e4) => describePart(e4.value, e4.name));
    srcDetails(this.sourceDetails["system.attributes.cmb.bonus"]), srcDetails(this.sourceDetails["system.attributes.attack.shared"]);
    const u2 = this.system.traits.size ?? "med";
    t2.sizeBonus = CONFIG.FFD20.sizeSpecialMods[u2], 0 != t2.sizeBonus && c2.push(`@sizeBonus[${game.i18n.localize("FFD20.Size")}]`);
    const m2 = ["attack"];
    true === e2.ranged ? m2.push("rattack") : m2.push("mattack");
    const d2 = getHighestChanges(this.changes.filter((e3) => m2.includes(e3.subTarget)), { ignoreTarget: true });
    d2.forEach((e3) => describePart(e3.value, e3.flavor));
    const h2 = e2.ability ?? this.system.attributes.cmbAbility, p2 = this.system.abilities[h2]?.mod ?? 0;
    0 != p2 && describePart(p2, CONFIG.FFD20.abilities[h2]), this.system.attributes.conditions.grappled && l2.push("+2 to Grapple");
    const g2 = [];
    l2.length > 0 && g2.push({ header: game.i18n.localize("FFD20.Notes"), value: l2 });
    const y2 = { ...e2, parts: c2, rollData: t2, subject: { core: "cmb" }, flavor: game.i18n.localize("FFD20.CMB"), chatTemplateData: { hasProperties: g2.length > 0, properties: g2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollCmb", this, e2))
      return;
    const F2 = await ffd20.dice.d20Roll(y2);
    return Hooks.callAll("ffd20ActorRollCmb", this, F2), F2;
  }
  async rollAttack(e2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    e2.melee ??= true;
    const t2 = [...this.sourceDetails["system.attributes.attack.shared"]], s2 = this.getRollData(), l2 = [...this.getContextNotes("attacks.effect"), ...this.getContextNotes("attacks.attack")], c2 = this.formatContextNotes(l2, s2);
    s2.item = {};
    const u2 = t2.filter((e3) => Number.isInteger(e3.value)).map((e3) => `${e3.value}[${e3.name}]`), m2 = ["attack"].concat(e2.melee ? ["mattack"] : ["rattack"]), d2 = this.changes.filter((e3) => m2.includes(e3.subTarget));
    u2.push(...d2.map((e3) => (e3.applyChange(this), `${e3.value}[${e3.parent ? e3.parent.name : e3.data.modifier}]`)));
    const h2 = getProperty(this, `system.attributes.attack.${e2.melee ? "melee" : "ranged"}Ability`);
    u2.push(`${getProperty(this, `system.abilities.${h2}.mod`)}[${CONFIG.FFD20.abilities[h2]}]`);
    const p2 = this.system.traits.size ?? "med";
    s2.sizeBonus = CONFIG.FFD20.sizeMods[p2], 0 != s2.sizeBonus && u2.push(`@sizeBonus[${game.i18n.localize("FFD20.Size")}]`);
    const g2 = [];
    c2.length > 0 && g2.push({ header: game.i18n.localize("FFD20.Notes"), value: c2 });
    const y2 = { ...e2, parts: u2, rollData: s2, subject: { core: "attack" }, flavor: game.i18n.localize("FFD20." + (e2.melee ? "Melee" : "Ranged")), chatTemplateData: { hasProperties: g2.length > 0, properties: g2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollAttack", this, y2))
      return;
    const F2 = await ffd20.dice.d20Roll(y2);
    return Hooks.callAll("ffd20ActorRollAttack", this, F2), F2;
  }
  async rollCL(e2, t2 = {}) {
    const s2 = this.system.attributes.spells.spellbooks[e2], l2 = duplicate(this.getRollData());
    if (l2.cl = s2.cl.total, false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollCl", void 0, this, "cl", e2, t2))
      return;
    const c2 = [];
    ((e3) => {
      e3?.reverse().forEach((e4) => {
        return t3 = e4.value, s3 = e4.name, c2.push(`${t3}[${s3}]`);
        var t3, s3;
      });
    })(this.sourceDetails[`system.attributes.spells.spellbooks.${e2}.cl.total`]);
    const u2 = this.getContextNotesParsed(`spell.cl.${e2}`), m2 = this.getWoundThresholdData();
    m2.valid && u2.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[m2.level]));
    const d2 = [];
    u2.length > 0 && d2.push({ header: game.i18n.localize("FFD20.Notes"), value: u2 });
    const h2 = { ...t2, parts: c2, rollData: l2, subject: { core: "cl", spellbook: e2 }, flavor: game.i18n.localize("FFD20.CasterLevelCheck"), chatTemplateData: { hasProperties: d2.length > 0, properties: d2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollCl", this, e2, h2))
      return;
    const p2 = await ffd20.dice.d20Roll(h2);
    return Hooks.callAll("ffd20ActorRollCl", this, p2, e2), p2;
  }
  async rollConcentration(e2, t2 = {}) {
    const s2 = this.system.attributes.spells.spellbooks[e2], l2 = duplicate(this.getRollData());
    if (l2.cl = s2.cl.total, l2.mod = this.system.abilities[s2.ability]?.mod ?? 0, false === Hooks.call("actorRoll", "ffd20PreActorRollConcentration", void 0, this, "concentration", e2, t2))
      return;
    const c2 = [];
    ((e3) => {
      e3?.reverse().forEach((e4) => {
        return t3 = e4.value, s3 = e4.name, c2.push(`${t3}[${s3}]`);
        var t3, s3;
      });
    })(this.sourceDetails[`system.attributes.spells.spellbooks.${e2}.concentration.total`]);
    const u2 = this.getContextNotesParsed(`spell.concentration.${e2}`), m2 = this.getWoundThresholdData();
    m2.valid && u2.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[m2.level]));
    const d2 = [];
    u2.length > 0 && d2.push({ header: game.i18n.localize("FFD20.Notes"), value: u2 });
    let h2 = 0;
    s2.concentrationFormula.length && (h2 = RollFFD20.safeRoll(s2.concentrationFormula, l2).total), l2.formulaBonus = h2;
    const p2 = { ...t2, parts: c2, rollData: l2, subject: { core: "concentration", spellbook: e2 }, flavor: game.i18n.localize("FFD20.ConcentrationCheck"), chatTemplateData: { hasProperties: d2.length > 0, properties: d2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollConcentration", this, p2, e2))
      return;
    const g2 = ffd20.dice.d20Roll(p2);
    return Hooks.callAll("ffd20ActorRollConcentration", this, g2, e2), g2;
  }
  getDefenseHeaders() {
    const e2 = this.system, t2 = [], s2 = CONFIG.FFD20.re.traitSeparator, l2 = [];
    if (e2.traits.dr.length && t2.push({ header: game.i18n.localize("FFD20.DamRed"), value: e2.traits.dr.split(s2) }), e2.traits.eres.length && t2.push({ header: game.i18n.localize("FFD20.EnRes"), value: e2.traits.eres.split(s2) }), e2.traits.dv.value.length || e2.traits.dv.custom.length) {
      const s3 = [].concat(e2.traits.dv.value.map((e3) => CONFIG.FFD20.damageTypes[e3]), e2.traits.dv.custom.length > 0 ? e2.traits.dv.custom.split(";") : []);
      t2.push({ header: game.i18n.localize("FFD20.DamVuln"), value: s3 });
    }
    if (e2.traits.cres.length && t2.push({ header: game.i18n.localize("FFD20.ConRes"), value: e2.traits.cres.split(s2) }), e2.traits.di.value.length || e2.traits.di.custom.length || e2.traits.ci.value.length || e2.traits.ci.custom.length) {
      const s3 = [].concat(e2.traits.di.value.map((e3) => CONFIG.FFD20.damageTypes[e3]), e2.traits.di.custom.length > 0 ? e2.traits.di.custom.split(";") : [], e2.traits.ci.value.map((e3) => CONFIG.FFD20.conditionTypes[e3]), e2.traits.ci.custom.length > 0 ? e2.traits.ci.custom.split(";") : []);
      t2.push({ header: game.i18n.localize("FFD20.ImmunityPlural"), value: s3 });
    }
    return e2.attributes.sr.total > 0 && l2.push(game.i18n.localize("FFD20.SpellResistanceNote").format(e2.attributes.sr.total)), l2.length > 0 && t2.push({ header: game.i18n.localize("FFD20.MiscShort"), value: l2 }), t2;
  }
  getInitiativeContextNotes() {
    const e2 = this.getContextNotes("misc.init").reduce((e3, t3) => {
      for (const s2 of t3.notes)
        e3.push(...s2.split(/[\n\r]+/));
      return e3;
    }, []);
    let t2;
    if (e2.length > 0) {
      const s2 = [];
      e2.forEach((e3) => s2.push(`<span class="tag">${e3}</span>`)), t2 = '<div class="flexcol property-group gm-sensitive"><label>' + game.i18n.localize("FFD20.Notes") + '</label> <div class="flexrow tag-list">' + s2.join("") + "</div></div>";
    }
    return [e2, t2];
  }
  async rollInitiative({ createCombatants: e2 = false, rerollInitiative: t2 = false, initiativeOptions: s2 = {}, skipDialog: l2 = false } = {}) {
    let c2 = game.combat;
    if (!c2) {
      if (!game.user.isGM)
        return ui.notifications.warn(game.i18n.localize("COMBAT.NoneActive")), null;
      {
        const e3 = { active: true };
        canvas?.scene?.id && (e3.scene = canvas.scene.id), c2 = await game.combats.documentClass.create(e3);
      }
    }
    if (e2) {
      const e3 = this.isToken ? [this.token] : this.getActiveTokens(), t3 = e3.reduce((e4, t4) => (t4.inCombat || e4.push({ tokenId: t4.id, actorId: this.id, hidden: t4.hidden }), e4), []);
      0 == e3.length && t3.push({ actorId: this.id }), await c2.createEmbeddedDocuments("Combatant", t3);
    }
    const u2 = c2.combatants.reduce((e3, s3) => s3.actor.id !== this.id || this.isToken && s3.data.tokenId !== this.token.id ? e3 : null === s3.initiative || t2 ? (e3.push(s3.id), e3) : e3, []);
    return u2.length ? c2.rollInitiative(u2, mergeObject(s2, { skipDialog: l2 })) : { combat: c2, messages: [] };
  }
  async rollSavingThrow(e2, t2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    if (false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollSave", void 0, this, "save", e2, t2))
      return;
    const s2 = this.getRollData(), l2 = this.getContextNotes(`savingThrow.${e2}`), c2 = this.formatContextNotes(l2, s2), u2 = [], m2 = this.system.attributes.savingThrows[e2]?.base;
    m2 && u2.push(`${m2}[${game.i18n.localize("FFD20.Base")}]`);
    let d2 = [];
    const h2 = this.changes.filter((t3) => ["allSavingThrows", e2].includes(t3.subTarget));
    d2 = getHighestChanges(h2.filter((e3) => !["set", "="].includes(e3.operator)), { ignoreTarget: true }).reduce((e3, t3) => (t3.value && e3.push({ value: t3.value, source: t3.flavor }), e3), []);
    for (const e3 of d2)
      u2.push(`${e3.value}[${e3.source}]`);
    s2.attributes.woundThresholds.penalty > 0 && (c2.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[s2.attributes.woundThresholds.level])), u2.push(`- @attributes.woundThresholds.penalty[${game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[s2.attributes.woundThresholds.level])}]`));
    const p2 = this.getDefenseHeaders();
    c2.length > 0 && p2.push({ header: game.i18n.localize("FFD20.Notes"), value: c2 });
    const g2 = CONFIG.FFD20.savingThrows[e2], y2 = { ...t2, parts: u2, rollData: s2, flavor: game.i18n.localize("FFD20.SavingThrowRoll").format(g2), subject: { save: e2 }, chatTemplateData: { hasProperties: p2.length > 0, properties: p2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    if (false === Hooks.call("ffd20PreActorRollSave", this, t2, e2))
      return;
    const F2 = await ffd20.dice.d20Roll(y2);
    return Hooks.callAll("ffd20ActorRollSave", this, F2, e2), F2;
  }
  async rollAbilityTest(e2, t2 = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    if (false === callOldNamespaceHook("actorRoll", "ffd20PreActorRollAbility", void 0, this, "ability", e2, t2))
      return;
    const s2 = this.getRollData(), l2 = this.getContextNotes(`abilityChecks.${e2}`), c2 = this.formatContextNotes(l2, s2), u2 = CONFIG.FFD20.abilities[e2], m2 = [`@abilities.${e2}.mod[${u2}]`];
    if (0 != this.system.abilities[e2].checkMod) {
      const t3 = this.sourceDetails[`system.abilities.${e2}.checkMod`];
      for (const e3 of t3)
        m2.push(`${e3.value}[${e3.name}]`);
    }
    this.system.attributes.energyDrain && m2.push("-@attributes.energyDrain"), s2.attributes.woundThresholds.penalty > 0 && (c2.push(game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[s2.attributes.woundThresholds.level])), m2.push(`- @attributes.woundThresholds.penalty[${game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[s2.attributes.woundThresholds.level])}]`));
    const d2 = [];
    c2.length > 0 && d2.push({ header: game.i18n.localize("FFD20.Notes"), value: c2 });
    const h2 = { ...t2, parts: m2, rollData: s2, flavor: game.i18n.localize("FFD20.AbilityTest").format(u2), subject: { ability: e2 }, chatTemplateData: { hasProperties: d2.length > 0, properties: d2 }, speaker: CONFIG.ChatMessage.documentClass.getSpeaker({ actor: this }) };
    Hooks.call("ffd20PreActorRollAbility", this, t2, e2);
    const p2 = await ffd20.dice.d20Roll(h2);
    return Hooks.callAll("ffd20ActorRollAbility", this, p2, e2), p2;
  }
  async rollDefenses({ rollMode: e2 = null } = {}) {
    if (!this.isOwner) {
      const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
      return console.warn(e3), ui.notifications.warn(e3);
    }
    const t2 = this.getRollData(), s2 = this.getContextNotes("misc.ac"), l2 = this.formatContextNotes(s2, t2);
    this.system.attributes.acNotes.length > 0 && l2.push(...this.system.attributes.acNotes.split(/[\n\r]+/));
    const c2 = this.getContextNotes("misc.cmd"), u2 = this.formatContextNotes(c2, t2);
    this.system.attributes.cmdNotes.length > 0 && u2.push(...this.system.attributes.cmdNotes.split(/[\n\r]+/));
    const m2 = this.getContextNotes("misc.sr"), d2 = this.formatContextNotes(m2, t2);
    this.system.attributes.srNotes.length > 0 && d2.push(...this.system.attributes.srNotes.split(/[\n\r]+/));
    const h2 = CONFIG.FFD20.re.traitSeparator;
    let p2 = [];
    this.system.traits.dr.length && (p2 = this.system.traits.dr.split(h2));
    const g2 = [];
    if (this.system.traits.eres.length && g2.push(...this.system.traits.eres.split(h2)), this.system.traits.di.value.length || this.system.traits.di.custom.length) {
      const e3 = [...this.system.traits.di.value.map((e4) => CONFIG.FFD20.damageTypes[e4]), ...this.system.traits.di.custom.length > 0 ? this.system.traits.di.custom.split(h2) : []];
      g2.push(...e3.map((e4) => game.i18n.localize("FFD20.ImmuneTo").format(e4)));
    }
    if (this.system.traits.dv.value.length || this.system.traits.dv.custom.length) {
      const e3 = [...this.system.traits.dv.value.map((e4) => CONFIG.FFD20.damageTypes[e4]), ...this.system.traits.dv.custom.length > 0 ? this.system.traits.dv.custom.split(h2) : []];
      g2.push(...e3.map((e4) => game.i18n.localize("FFD20.VulnerableTo").format(e4)));
    }
    const y2 = this.getWoundThresholdData();
    if (y2.valid) {
      const e3 = game.i18n.localize(CONFIG.FFD20.woundThresholdConditions[y2.level]);
      l2.push(e3), u2.push(e3);
    }
    const F2 = this.token instanceof TokenDocument ? this.token.object : this.token ?? canvas.tokens.placeables.find((e3) => e3.actor && e3.actor.id === this.id), D2 = this.system, k2 = { actor: this, name: this.name, tokenId: this.token ? `${this.token.uuid}` : null, ac: { normal: D2.attributes.ac.normal.total, touch: D2.attributes.ac.touch.total, flatFooted: D2.attributes.ac.flatFooted.total, notes: l2 }, cmd: { normal: D2.attributes.cmd.total, flatFooted: D2.attributes.cmd.flatFootedTotal, notes: u2 }, misc: { sr: D2.attributes.sr.total, srNotes: d2, drNotes: p2, energyResistance: g2 }, tokenUuid: F2?.document.uuid };
    ((getProperty(D2, "traits.fastHealing") || "").length || (getProperty(D2, "traits.regen") || "").length) && (k2.regen = { regen: D2.traits.regen, fastHealing: D2.traits.fastHealing }), setProperty(k2, "flags.ffd20.subject", "defenses");
    const v = { speaker: ChatMessage.getSpeaker({ actor: this }), rollMode: e2 };
    await createCustomChatMessage("systems/ffd20/templates/chat/defenses.hbs", k2, v);
  }
  async applyDamage(e2, t2 = {}) {
    return this.constructor.applyDamage(e2, mergeObject(t2, { targets: [this] }));
  }
  async toggleCondition(e2) {
    e2 = `system.attributes.conditions.${e2}`;
    const t2 = !getProperty(this, e2), s2 = e2.replace(/(\w+)$/, (e3) => `-=${e3}`), l2 = t2 ? { [e2]: true } : { [s2]: null };
    await this.update(l2);
  }
  async setCondition(e2, t2) {
    e2 = `system.attributes.conditions.${e2}`;
    const s2 = !getProperty(this, e2);
    if (s2 !== t2)
      return;
    const l2 = e2.replace(/(\w+)$/, (e3) => `-=${e3}`), c2 = s2 ? { [e2]: true } : { [l2]: null };
    await this.update(c2);
  }
  hasCondition(e2) {
    return e2 = `system.attributes.conditions.${e2}`, true === getProperty(this, e2);
  }
  static async applyDamage(e2, { forceDialog: t2 = false, reductionDefault: s2 = "", asNonlethal: l2 = false, targets: c2 = null, critMult: u2 = 0, asWounds: m2 = false } = {}) {
    const d2 = [];
    let h2 = canvas.tokens.controlled, p2 = 1;
    c2 instanceof Array && (h2 = c2.filter((e3) => e3 instanceof Token || e3 instanceof Actor));
    const g2 = game.settings.get("ffd20", "healthConfig"), y2 = /(\d+)/g, F2 = /[^,;\n]*(\d+)[^,;\n]*/g, D2 = /[^,;\n]+/g, _submit = async function(t3, s3) {
      if (t3) {
        e2 = t3.find('[name="damage"]').val();
        let l3 = t3.find('[name="damage-reduction"]').val();
        e2 = e2.length ? RollFFD20.safeRoll(e2, {}, []).total : 0, l3 = l3.length ? RollFFD20.safeRoll(l3, {}, []).total : 0, s3 < 0 ? (e2 = Math.ceil(e2 * s3), e2 = Math.min(e2 - l3, 0)) : (e2 = Math.floor(e2 * (s3 ?? 1)), e2 = Math.max(e2 - l3, 0));
        const c3 = [...t3.find(".tokenAffected:checked")].map((e3) => e3.name.replace("affect.", ""));
        h2 = h2.filter((e3) => c3.includes(e3.id));
      }
      if (0 != e2) {
        for (const t4 of h2) {
          const s4 = t4 instanceof Token ? t4.actor : t4;
          if (!s4.isOwner) {
            const e3 = game.i18n.localize("FFD20.ErrorNoActorPermissionAlt").format(this.name);
            console.warn(e3), ui.notifications.warn(e3);
            continue;
          }
          const c3 = { character: "pc", npc: "npc" }[s4.type], h3 = g2.variants[c3]?.useWoundsAndVigor ?? false, p3 = h3 ? s4.system.attributes.vigor : s4.system.attributes.hp, y3 = p3.temp || 0, F3 = {};
          if (h3) {
            const t5 = p3.value;
            let c4 = 0;
            m2 && (c4 -= e2, e2 = 0);
            const d3 = e2 > 0 ? Math.min(y3, e2) : 0;
            if (e2 -= d3, l2 && e2 > 0 && (t5 > 0 ? e2 = Math.min(t5, e2) : (c4 -= u2 > 1 ? u2 : 1, e2 = 0)), 0 != d3 && (F3["system.attributes.vigor.temp"] = y3 - d3), 0 != e2) {
              let t6 = Math.min(p3.value - e2, p3.max);
              e2 > 0 && (p3.value > 0 ? t6 < 0 && (u2 > 0 && (c4 -= -t6, c4 -= u2), t6 = 0) : c4 -= e2), t6 != p3.value && (F3["system.attributes.vigor.value"] = t6);
            }
            if (0 != c4) {
              const e3 = s4.data.attributes.wounds;
              F3["system.attributes.wounds.value"] = Math.max(0, Math.min(e3.value + c4, e3.max));
            }
          } else {
            let t5 = 0;
            l2 && e2 > 0 && (t5 = Math.min(p3.max - p3.nonlethal, e2), e2 -= t5);
            const s5 = e2 > 0 ? Math.min(y3, e2) : 0;
            F3["system.attributes.hp.nonlethal"] = p3.nonlethal + t5, F3["system.attributes.hp.temp"] = y3 - s5, F3["system.attributes.hp.value"] = Math.min(p3.value - (e2 - s5), p3.max);
          }
          d2.push(s4.update(F3));
        }
        return Promise.all(d2);
      }
    };
    if (ffd20.skipConfirmPrompt ? !t2 : t2) {
      e2 < 0 && (p2 = -1, e2 *= -1);
      const t3 = h2.map((e3) => {
        const t4 = e3 instanceof Token, s3 = t4 ? e3.actor : e3;
        return { _id: t4 ? e3.id : s3.id, name: t4 ? e3.name : s3.name, isToken: t4, dr: s3.system.traits.dr.match(F2), eres: s3.system.traits.eres.match(F2), di: [...s3.system.traits.di.value, ...s3.system.traits.di.custom.match(D2) ?? []], dv: [...s3.system.traits.dv.value, ...s3.system.traits.dv.custom.match(D2) ?? []], checked: true };
      }), c3 = "systems/ffd20/templates/apps/damage-dialog.hbs", u3 = { damage: e2, healing: -1 == p2, damageReduction: s2 = s2 ?? "", tokens: t3, nonlethal: l2 }, m3 = await renderTemplate(c3, u3);
      return new Promise((e3) => {
        const t4 = {};
        t4.normal = { label: game.i18n.localize("FFD20.Apply"), callback: (t5) => e3(_submit.call(this, t5, 1 * p2)) }, t4.half = { label: game.i18n.localize("FFD20.ApplyHalf"), callback: (t5) => e3(_submit.call(this, t5, 0.5 * p2)) };
        const s3 = new Dialog({ title: p2 > 0 ? game.i18n.localize("FFD20.ApplyDamage") : game.i18n.localize("FFD20.ApplyHealing"), content: m3, buttons: t4, default: "normal", close: (t5) => {
          e3(false);
        }, render: (e4) => {
          e4.on("click", 'a[name="swap-selected"]', function() {
            [...e4[0].querySelectorAll('.selected-tokens input[type="checkbox"]')].forEach((e5) => e5.checked = !e5.checked);
          }), e4.on("click", 'a[name="clear-reduction"], p.notes a', function(t5) {
            e4[0].querySelector('input[name="damage-reduction"]').value = t5.currentTarget.innerText.match(y2) ?? "";
          }), e4.on("wheel", "input", function(e5) {
            const t5 = e5.currentTarget;
            if (/[^\d+-]|(?:\d[+-])/.test(t5.value.trim()))
              return;
            const s4 = parseFloat(t5.value) || 0, l3 = -Math.sign(e5.originalEvent.deltaY);
            t5.value = (s4 + l3).toString();
          });
        } }, { classes: ["dialog", "ffd20", "apply-hit-points"] });
        s3.render(true);
      });
    }
    return _submit();
  }
  getWoundThresholdMultiplier(e2 = null) {
    e2 = e2 ?? this.system;
    const t2 = game.settings.get("ffd20", "healthConfig").variants, s2 = "npc" === this.type ? t2.npc : t2.pc, l2 = e2.attributes.woundThresholds.override ?? -1;
    return l2 >= 0 && s2.allowWoundThresholdOverride ? l2 : s2.useWoundThresholds;
  }
  getWoundThresholdData(e2 = null) {
    e2 = e2 ?? this.system;
    const t2 = this.getWoundThresholdMultiplier(e2), s2 = e2.attributes.woundThresholds.level ?? 0;
    return { level: s2, penalty: s2 * t2 + (e2.attributes.woundThresholds.mod ?? 0), multiplier: t2, valid: s2 > 0 && t2 > 0 };
  }
  updateWoundThreshold() {
    const e2 = game.settings.get("ffd20", "healthConfig").variants, t2 = "npc" === this.type ? e2.npc.useWoundThresholds : e2.pc.useWoundThresholds, s2 = this.system.attributes.woundThresholds;
    if (!t2)
      return s2.level = 0, s2.penaltyBase = 0, s2.penalty = 0, void (s2.mod = 0);
    const l2 = this.system.attributes.hp, c2 = l2.value, u2 = l2.temp ?? 0, m2 = l2.max;
    let d2 = t2 > 0 ? Math.clamped(4 - Math.ceil((c2 + u2) / m2 * 4), 0, 3) : 0;
    Number.isNaN(d2) && (d2 = 0);
    const h2 = this.getWoundThresholdMultiplier(), p2 = s2.mod ?? 0;
    s2.level = d2, s2.penaltyBase = d2 * h2, s2.penalty = d2 * h2 + p2;
    const g2 = s2.penalty, y2 = CONFIG.FFD20.woundThresholdChangeTargets;
    for (const e3 of y2) {
      let t3 = getChangeFlat.call(this, e3, "penalty", this.system);
      t3 instanceof Array || (t3 = [t3]);
      for (const e4 of t3) {
        if (!e4)
          continue;
        const t4 = getProperty(this, e4) ?? 0;
        setProperty(this, e4, t4 - g2);
      }
    }
  }
  get allSkills() {
    const e2 = [];
    for (const [t2, s2] of Object.entries(this.system.skills))
      if (s2 && (e2.push(t2), s2.subSkills))
        for (const l2 of Object.keys(s2.subSkills))
          e2.push(`${t2}.subSkills.${l2}`);
    return e2;
  }
  get allNotes() {
    const e2 = [], t2 = this.items.filter((e3) => null != e3.system.contextNotes);
    for (const s2 of t2)
      s2.isActive && s2.system.contextNotes && 0 !== s2.system.contextNotes.length && e2.push({ notes: s2.system.contextNotes, item: s2 });
    return e2;
  }
  get allItems() {
    return [...this.containerItems, ...Array.from(this.items)];
  }
  getContextNotes(e2) {
    e2.string && (e2 = e2.string);
    const t2 = this.allNotes;
    if (e2.match(/^attacks\.(.+)/)) {
      const e3 = RegExp.$1;
      for (const s2 of t2)
        s2.notes = s2.notes.filter((t3) => t3.subTarget === e3).map((e4) => e4.text);
      return t2;
    }
    if (e2.match(/^skill\.(.+)/)) {
      const s2 = RegExp.$1, l2 = this.getSkillInfo(s2).ability;
      for (const s3 of t2)
        s3.notes = s3.notes.filter((t3) => t3.subTarget === e2 || t3.subTarget?.split(".")?.[3] === e2?.split(".")?.[1] || t3.subTarget === `${l2}Skills` || "skills" === t3.subTarget).map((e3) => e3.text);
      return t2;
    }
    if (e2.match(/^savingThrow\.(.+)/)) {
      const e3 = RegExp.$1;
      for (const s2 of t2)
        s2.notes = s2.notes.filter((t3) => t3.subTarget === e3 || "allSavingThrows" === t3.subTarget).map((e4) => e4.text);
      return null != this.system.attributes.saveNotes && "" !== this.system.attributes.saveNotes && t2.push({ notes: [this.system.attributes.saveNotes], item: null }), t2;
    }
    if (e2.match(/^abilityChecks\.(.+)/)) {
      const e3 = RegExp.$1;
      for (const s2 of t2)
        s2.notes = s2.notes.filter((t3) => t3.subTarget === `${e3}Checks` || "allChecks" === t3.subTarget).map((e4) => e4.text);
      return t2;
    }
    if (e2.match(/^misc\.(.+)/)) {
      const e3 = RegExp.$1;
      for (const s2 of t2)
        s2.notes = s2.notes.filter((t3) => t3.subTarget === e3).map((e4) => e4.text);
      return t2;
    }
    if (e2.match(/^spell\.concentration\.([a-z]+)$/)) {
      const e3 = RegExp.$1;
      for (const e4 of t2)
        e4.notes = e4.notes.filter((e5) => "concentration" === e5.subTarget).map((e5) => e5.text);
      const s2 = getProperty(this, `system.attributes.spells.spellbooks.${e3}.concentrationNotes`);
      return s2.length && t2.push({ notes: s2.split(/[\n\r]+/), item: null }), t2;
    }
    if (e2.match(/^spell\.cl\.([a-z]+)$/)) {
      const e3 = RegExp.$1;
      for (const e4 of t2)
        e4.notes = e4.notes.filter((e5) => "cl" === e5.subTarget).map((e5) => e5.text);
      const s2 = getProperty(this, `system.attributes.spells.spellbooks.${e3}.clNotes`);
      return s2.length && t2.push({ notes: s2.split(/[\n\r]+/), item: null }), t2;
    }
    if (e2.match(/^spell\.effect$/)) {
      for (const e3 of t2)
        e3.notes = e3.notes.filter((e4) => "spellEffect" === e4.subTarget).map((e4) => e4.text);
      return t2;
    }
    return [];
  }
  getContextNotesParsed(e2) {
    return this.getContextNotes(e2).reduce((e3, t2) => {
      for (const s2 of t2.notes)
        e3.push(TextEditor.enrichHTML(s2, { rollData: null != t2.item ? t2.item.getRollData() : this.getRollData(), async: false }));
      return e3;
    }, []);
  }
  formatContextNotes(e2, t2, { roll: s2 = true } = {}) {
    const l2 = [];
    t2 = t2 ?? this.getRollData();
    for (const c2 of e2) {
      t2.item = {}, null != c2.item && (t2 = c2.item.getRollData());
      for (const e3 of c2.notes)
        l2.push(...e3.split(/[\n\r]+/).map((e4) => TextEditor.enrichHTML(e4, { rollData: t2, rolls: s2, async: false })));
    }
    return l2;
  }
  async createEmbeddedDocuments(e2, t2, s2 = {}) {
    t2 = t2 instanceof Array ? t2 : [t2];
    const l2 = await super.createEmbeddedDocuments(e2, t2, s2);
    for (const e3 of l2)
      "class" === e3.type && await e3._onLevelChange(0, e3.system.level);
    return l2;
  }
  _computeEncumbrance() {
    const e2 = this.system.attributes;
    void 0 === e2.encumbrance && (e2.encumbrance = {});
    const t2 = e2.encumbrance, s2 = this.getCarryCapacity();
    t2.levels = s2, t2.levels.carry = 2 * s2.heavy, t2.levels.drag = 5 * s2.heavy;
    const l2 = Math.max(0, this.getCarriedWeight());
    t2.carriedWeight = Math.round(10 * l2) / 10;
    let c2 = CONFIG.FFD20.encumbranceLevels.light;
    l2 > 0 && (l2 > t2.levels.medium ? c2 = CONFIG.FFD20.encumbranceLevels.heavy : l2 > t2.levels.light && (c2 = CONFIG.FFD20.encumbranceLevels.medium)), t2.level = c2;
    const u2 = { maxDexBonus: null, acp: 0 };
    switch (t2.level) {
      case CONFIG.FFD20.encumbranceLevels.medium:
        u2.acp = 3, u2.maxDexBonus = 3;
        break;
      case CONFIG.FFD20.encumbranceLevels.heavy:
        u2.acp = 6, u2.maxDexBonus = 1;
    }
    return u2;
  }
  _calculateCoinWeight() {
    const e2 = game.settings.get("ffd20", "coinWeight");
    return e2 ? Object.values(this.system.currency).reduce((e3, t2) => (parseInt(e3) || 0) + t2, 0) / e2 : 0;
  }
  getCarryCapacity() {
    const e2 = this.system.details.carryCapacity, t2 = this.system.abilities.str.total + e2.bonus.total;
    let s2 = e2.multiplier.total;
    const l2 = this.system.traits.size;
    this.system.attributes.quadruped ? s2 *= CONFIG.FFD20.encumbranceMultipliers.quadruped[l2] : s2 *= CONFIG.FFD20.encumbranceMultipliers.normal[l2];
    const c2 = CONFIG.FFD20.encumbranceLoads;
    let u2 = Math.floor(c2[t2] * s2);
    if (t2 >= c2.length) {
      const e3 = (t2 - (c2.length - 1)) / 10;
      u2 = Math.floor(c2[c2.length - 1] * Math.pow(4, e3) * s2);
    }
    return u2 = ffd20.utils.convertWeight(u2), { light: Math.floor(u2 / 3), medium: Math.floor(u2 / 3 * 2), heavy: u2 };
  }
  getCarriedWeight() {
    const e2 = this.items.filter((e3) => null != e3.system.weight), t2 = e2.reduce((e3, t3) => t3.system.carried ? e3 + t3.system.weight.total : e3, this._calculateCoinWeight());
    return ffd20.utils.convertWeight(t2);
  }
  mergeCurrency({ inLowestDenomination: e2 = false } = {}) {
    const t2 = this.getTotalCurrency("currency", { inLowestDenomination: e2 }) + this.getTotalCurrency("altCurrency", { inLowestDenomination: e2 });
    return e2 ? t2 : t2 / 100;
  }
  getTotalCurrency(e2 = "currency", { inLowestDenomination: t2 = false } = {}) {
    const s2 = this.system[e2], l2 = 1e3 * s2.pgil + 100 * s2.gil + 10 * s2.sgil + s2.cgil;
    return t2 ? l2 : l2 / 100;
  }
  convertCurrency(e2 = "currency", t2 = "pgil") {
    const s2 = "currency" === e2 ? this.getTotalCurrency("currency") : this.getTotalCurrency("altCurrency"), l2 = [0, 0, 0, 0];
    switch (t2) {
      case "pgil":
        l2[0] = Math.floor(s2 / 10), l2[1] = Math.max(0, Math.floor(s2) - 10 * l2[0]), l2[2] = Math.max(0, Math.floor(10 * s2) - 100 * l2[0] - 10 * l2[1]), l2[3] = Math.max(0, Math.floor(100 * s2) - 1e3 * l2[0] - 100 * l2[1] - 10 * l2[2]);
        break;
      case "gil":
        l2[1] = Math.floor(s2), l2[2] = Math.max(0, Math.floor(10 * s2) - 10 * l2[1]), l2[3] = Math.max(0, Math.floor(100 * s2) - 100 * l2[1] - 10 * l2[2]);
        break;
      case "sgil":
        l2[2] = Math.floor(10 * s2), l2[3] = Math.max(0, Math.floor(100 * s2) - 10 * l2[2]);
        break;
      case "cgil":
        l2[3] = Math.floor(100 * s2);
    }
    const c2 = {};
    return c2[`system.${e2}.pgil`] = l2[0], c2[`system.${e2}.gil`] = l2[1], c2[`system.${e2}.sgil`] = l2[2], c2[`system.${e2}.cgil`] = l2[3], this.update(c2);
  }
  getRollData(e2 = { refresh: false }) {
    let t2;
    const s2 = !e2.refresh && this._rollData;
    if (s2) {
      t2 = this._rollData;
      const e3 = CONFIG.FFD20.temporaryRollDataFields.actor;
      for (const s3 of e3) {
        const e4 = s3.split("."), l2 = e4.slice(0, -1).join("."), c2 = e4.slice(-1)[0];
        if ("" === l2)
          delete t2[s3];
        else {
          const e5 = getProperty(t2, l2);
          "object" == typeof e5 && delete e5[c2];
        }
      }
    } else
      t2 = deepClone(this.system);
    if (game.combats?.viewed && (t2.combat = { round: game.combat.round || 0 }), setProperty(t2, "conditions.loseDexToAC", this.changeFlags?.loseDexToAC ?? false), s2)
      return t2;
    {
      const e3 = Object.keys(CONFIG.FFD20.sizeChart);
      t2.size = e3.indexOf(t2.traits.size);
    }
    t2.armor = { type: 0 }, t2.shield = { type: 0 };
    {
      const e3 = this.equipment?.armor?.id, s3 = { total: Number.NEGATIVE_INFINITY, ac: 0, enh: 0 }, l2 = e3 ? this.items.get(e3) : null;
      if (l2) {
        t2.armor.type = this.equipment.armor.type;
        const e4 = l2.system, c2 = e4.armor.enh ?? 0, u2 = e4.armor.value ?? 0, m2 = u2 + c2;
        s3.total < m2 && (s3.ac = u2, s3.total = m2, s3.enh = c2);
      }
      Number.isFinite(s3.total) || (s3.total = 0), mergeObject(t2.armor, s3);
    }
    {
      const e3 = this.equipment?.shield?.id, s3 = e3 ? this.items.get(e3) : null, l2 = { total: Number.NEGATIVE_INFINITY, ac: 0, enh: 0 };
      if (s3) {
        t2.shield.type = this.equipment.shield.type;
        const e4 = s3.system, c2 = e4.armor.enh ?? 0, u2 = e4.armor.value ?? 0, m2 = u2 + c2;
        l2.total < m2 && (l2.ac = u2, l2.total = m2, l2.enh = c2);
      }
      mergeObject(t2.shield, l2);
    }
    t2.spells = t2.attributes.spells.spellbooks;
    for (const [e3, s3] of Object.entries(t2.spells))
      s3.abilityMod = t2.abilities[s3.ability]?.mod ?? 0, s3.class && "_hd" !== s3.class && (t2.spells[s3.class] ??= s3);
    return this.itemFlags && (t2.dFlags = this.itemFlags.dictionary), t2.range = this.constructor.getReach(this.system.traits.size, this.system.traits.stature), t2.classes = this.classes, this._rollData = t2, Hooks.events.ffd20GetRollData?.length > 0 && Hooks.callAll("ffd20GetRollData", this, t2), callOldNamespaceHookAll("ffd20.getRollData", "ffd20GetRollData", this, t2, true), t2;
  }
  static getReach(e2 = "med", t2 = "tall") {
    const s2 = { melee: 5, reach: 10 };
    switch (e2) {
      case "fine":
      case "dim":
        s2.melee = 0, s2.reach = 0;
        break;
      case "tiny":
        s2.melee = 0, s2.reach = 5;
        break;
      case "lg":
        "tall" === t2 && (s2.melee = 10, s2.reach = 20);
        break;
      case "huge":
        "tall" === t2 ? (s2.melee = 15, s2.reach = 30) : (s2.melee = 10, s2.reach = 20);
        break;
      case "grg":
        "tall" === t2 ? (s2.melee = 20, s2.reach = 40) : (s2.melee = 15, s2.reach = 30);
        break;
      case "col":
        "tall" === t2 ? (s2.melee = 30, s2.reach = 60) : (s2.melee = 20, s2.reach = 40);
    }
    return s2;
  }
  async deleteEmbeddedDocuments(e2, t2, s2 = {}) {
    if ("Item" === e2) {
      t2 instanceof Array || (t2 = [t2]);
      const _addChildren = async function(e3) {
        const s3 = this.items.get(e3), l2 = await s3.getLinkedItems("children");
        for (const e4 of l2)
          t2.includes(e4.id) || (t2.push(e4.id), await _addChildren.call(this, e4.id));
      };
      for (const e3 of t2)
        await _addChildren.call(this, e3);
      for (const e3 of t2)
        for (const t3 of this.items)
          await t3.removeItemLink(e3);
    }
    await super.deleteEmbeddedDocuments(e2, t2, s2);
  }
  getQuickActions() {
    return this.items.filter((e2) => e2.isActive && true === e2.system.showInQuickbar && ["weapon", "equipment", "consumable", "attack", "spell", "feat"].includes(e2.type) && !e2.showUnidentifiedData).sort((e2, t2) => e2.sort - t2.sort).map((e2) => ({ item: e2, isSingleUse: e2.isSingleUse, get haveAnyCharges() {
      return this.item.isCharged;
    }, maxCharge: e2.maxCharges, get charges() {
      return this.item.charges;
    }, color1: ItemFFD20.getTypeColor(e2.type, 0), color2: ItemFFD20.getTypeColor(e2.type, 1) }));
  }
  async toggleConditionStatusIcons(e2 = {}) {
    if (this._states.togglingStatusIcons)
      return;
    if (this._states.togglingStatusIcons = true, !this.testUserPermission(game.user, "OWNER"))
      return;
    const t2 = this._calcBuffActiveEffects(), s2 = [...this.effects], l2 = [], c2 = [], u2 = [];
    for (const [e3, m3] of Object.entries(t2)) {
      const t3 = s2.find((t4) => t4.origin === e3 || t4.flags.ffd20?.origin?.item === m3.id);
      if (t3)
        if (m3.active) {
          const e4 = t3.toObject(), s3 = foundry.utils.mergeObject(e4, m3.item.getRawEffectData(), { inplace: false });
          (m3.item.system.hideFromToken || game.settings.get("ffd20", "hideTokenConditions")) && (s3.icon = null);
          const l3 = foundry.utils.diffObject(e4, s3);
          foundry.utils.isEmpty(l3) || (l3._id = t3.id, u2.push(l3));
        } else
          c2.push(t3.id);
      else
        m3.active && l2.push(m3.item.getRawEffectData());
    }
    for (const e3 of Object.keys(CONFIG.FFD20.conditions)) {
      const t3 = s2.findIndex((t4) => t4.getFlag("core", "statusId") === e3), u3 = true === this.system.attributes.conditions[e3], m3 = t3 >= 0;
      if (u3 && !m3)
        l2.push({ "flags.core.statusId": e3, name: CONFIG.FFD20.conditions[e3], icon: CONFIG.FFD20.conditionTextures[e3], label: CONFIG.FFD20.conditions[e3] });
      else if (!u3 && m3) {
        const t4 = s2.filter((t5) => t5.getFlag("core", "statusId") === e3);
        c2.push(...t4.map((e4) => e4.id));
      }
    }
    const m2 = deepClone(e2);
    false !== e2.render && (m2.render = !l2.length && !u2.length);
    const d2 = deepClone(e2);
    false !== e2.render && (d2.render = !u2.length), c2.length && await this.deleteEmbeddedDocuments("ActiveEffect", c2, m2), l2.length && await this.createEmbeddedDocuments("ActiveEffect", l2, d2), u2.length && await this.updateEmbeddedDocuments("ActiveEffect", u2, e2), this._states.togglingStatusIcons = false;
    const h2 = this.getActiveTokens();
    for (const e3 of h2) {
      e3.document.actorLink || e3.drawEffects();
    }
  }
  _calcBuffActiveEffects() {
    const e2 = this.items.filter((e3) => "buff" === e3.type);
    return e2.reduce((e3, t2) => {
      const s2 = t2.uuid;
      return e3[s2] || (e3[s2] = { id: t2.id, label: t2.name, icon: t2.img, item: t2 }), t2.system.active ? e3[s2].active = true : e3[s2].active = false, e3;
    }, {});
  }
  refreshAbilityModifiers() {
    for (const e2 of Object.keys(this.system.abilities)) {
      const t2 = this.system.abilities[e2].total, s2 = getAbilityModifier(t2, { penalty: Math.abs(this.system.abilities[e2].penalty || 0), damage: this.system.abilities[e2].damage });
      if (this.system.abilities[e2].mod = s2, !ffd20.migrations.isMigrating && this._initialized && this._prevAbilityScores) {
        const l2 = s2 - (this._prevAbilityScores?.[e2].mod ?? 0), c2 = this.system.abilities[e2].mod + l2;
        this._prevAbilityScores[e2] = { total: t2, mod: c2 };
      }
    }
  }
  async importFromJSON(e2) {
    this._initialized = false;
    const t2 = JSON.parse(e2);
    return delete t2._id, t2.effects = [], this.update(t2, { diff: false, recursive: false });
  }
  getFeatCount() {
    const e2 = { max: 0, value: 0 };
    e2.value = this.items.filter((e3) => "feat" === e3.type && "feat" === e3.system.featType && !e3.system.disabled).length;
    const t2 = this.items.filter((e3) => "class" === e3.type && ["base", "npc", "prestige", "racial"].includes(e3.system.classType)).reduce((e3, t3) => e3 + t3.hitDice, 0);
    e2.max += Math.ceil(t2 / 2);
    const s2 = RollFFD20.safeRoll(this.system.details.bonusFeatFormula || "0", this.getRollData());
    if (e2.max += s2.total, s2.err) {
      const e3 = game.i18n.localize("FFD20.ErrorActorFormula").format(game.i18n.localize("FFD20.BonusFeatFormula"), this.actor.name);
      console.error(e3), ui.notifications.error(e3);
    }
    return this.changes.filter((e3) => "bonusFeats" === e3.subTarget).forEach((t3) => {
      t3.value && (e2.max += t3.value);
    }), e2;
  }
  hasItemBooleanFlag(e2) {
    return null != this.itemFlags.boolean[e2];
  }
  async performRest(e2 = {}) {
    const { restoreHealth: t2 = true, longTermCare: s2 = false, aidedCare: l2 = false, restoreDailyUses: c2 = true, hours: u2 = 8 } = e2, m2 = this.system, d2 = {};
    if (true === t2) {
      const e3 = m2.attributes.hd.total, t3 = { hp: e3, mp: m2.attributes.mp.recover, abl: 1, nonlethal: u2 * e3 };
      true === s2 && false === l2 && (t3.hp *= 2, t3.mp *= 2, t3.abl *= 2), false === s2 && true === l2 && (t3.hp *= 2, t3.mp *= 2, t3.abl *= 2), true === s2 && true === l2 && (t3.hp *= 5, t3.mp *= 5, t3.abl *= 5), d2["system.attributes.hp.value"] = Math.min(m2.attributes.hp.value + t3.hp, m2.attributes.hp.max), d2["system.attributes.mp.value"] = Math.min(m2.attributes.mp.value + t3.mp, m2.attributes.mp.max), d2["system.attributes.hp.nonlethal"] = Math.max(0, (m2.attributes.hp.nonlethal || 0) - t3.nonlethal);
      for (const [e4, s3] of Object.entries(m2.abilities)) {
        const l3 = Math.abs(s3.damage);
        d2[`system.abilities.${e4}.damage`] = Math.max(0, l3 - t3.abl);
      }
    }
    const h2 = [];
    if (true === c2) {
      for (const [e3, t3] of Object.entries(getProperty(m2, "attributes.spells.spellbooks") || {}))
        for (let s3 = 0; s3 < 10; s3++)
          d2[`system.attributes.spells.spellbooks.${e3}.spells.spell${s3}.value`] = getProperty(t3, `spells.spell${s3}.max`) || 0;
      d2["system.attributes.limitbreak.value"] = m2.attributes.limitbreak.max;
      for (const e3 of this.items) {
        const t3 = {}, s3 = e3.system;
        if (s3.uses && "day" === s3.uses.per && s3.uses.value !== s3.uses.max)
          t3["system.uses.value"] = s3.uses.max;
        else if ("spell" === e3.type) {
          if (!getProperty(m2, `attributes.spells.spellbooks.${s3.spellbook}`).spontaneous && (s3.preparation.preparedAmount < s3.preparation.maxAmount && (t3["system.preparation.preparedAmount"] = s3.preparation.maxAmount, h2.push(t3)), !e3.system.domain)) {
            let e4 = d2[`system.attributes.spells.spellbooks.${s3.spellbook}.spells.spell${s3.level}.value`] || 0;
            e4 -= s3.preparation.maxAmount, d2[`system.attributes.spells.spellbooks.${s3.spellbook}.spells.spell${s3.level}.value`] = e4;
          }
        }
        if (e3.system.actions?.length > 0) {
          const s4 = deepClone(e3.system.actions);
          let l3 = false;
          for (const e4 of s4)
            if ("day" === e4.uses.self?.per) {
              const t4 = e4.uses.self.max || 0;
              e4.uses.self.value < t4 && (e4.uses.self.value = t4, l3 = true);
            }
          l3 && (t3["system.actions"] = s4);
        }
        foundry.utils.isEmpty(t3) || (t3._id = e3.id, h2.push(t3));
      }
      for (const [e3, t3] of Object.entries(m2.attributes.spells.spellbooks))
        if (t3.spellPoints.useSystem) {
          let s3 = t3.spellPoints.max;
          if (t3.spellPoints.restoreFormula) {
            const e4 = RollFFD20.safeRoll(t3.spellPoints.restoreFormula, this.getRollData());
            e4.err ? console.error(e4.err, t3.spellPoints.restoreFormula) : s3 = Math.min(t3.spellPoints.value + e4.total, t3.spellPoints.max);
          }
          d2[`system.attributes.spells.spellbooks.${e3}.spellPoints.value`] = s3;
        }
    }
    e2 = { restoreHealth: t2, restoreDailyUses: c2, longTermCare: s2, aidedCare: l2, hours: u2 };
    let p2 = Hooks.call("ffd20PreActorRest", this, e2, d2, h2);
    if (p2 = callOldNamespaceHook("actorRest", "ffd20ActorRest", p2, this, e2, d2, h2), false !== p2)
      return await this.updateEmbeddedDocuments("Item", h2), await this.update(d2), Hooks.callAll("ffd20ActorRest", this, e2, d2, h2), { options: e2, updateData: d2, itemUpdates: h2 };
  }
  async modifyTokenAttribute(e2, t2, s2 = false, l2 = true) {
    let c2 = this;
    const u2 = getProperty(this.system, e2), m2 = {};
    if (e2.startsWith("resources.")) {
      const t3 = e2.split(".").slice(-1)[0];
      c2 = this.items.find((e3) => e3.system.tag === t3);
    }
    if (!c2)
      return;
    if ("attributes.hp" === e2) {
      s2 || (t2 = -1 * (u2.temp + u2.value - t2));
      let e3 = t2;
      u2.temp > 0 && t2 < 0 && (e3 = Math.min(0, u2.temp + t2), m2["system.attributes.hp.temp"] = Math.max(0, u2.temp + t2)), m2["system.attributes.hp.value"] = Math.min(u2.value + e3, u2.max);
    } else if ("attributes.vigor" === e2) {
      s2 || (t2 = -1 * (u2.temp + u2.value - t2));
      let e3 = t2;
      u2.temp > 0 && t2 < 0 && (e3 = Math.min(0, u2.temp + t2), m2["system.attributes.vigor.temp"] = Math.max(0, u2.temp + t2)), m2["system.attributes.vigor.value"] = Math.min(u2.value + e3, u2.max);
    } else
      s2 ? c2 instanceof Actor ? l2 ? m2[`system.${e2}.value`] = Math.clamped(u2.min || 0, u2.value + t2, u2.max) : m2[`system.${e2}`] = u2 + t2 : m2["system.uses.value"] = u2.value + t2 : c2 instanceof Actor ? l2 ? m2[`system.${e2}.value`] = t2 : m2[`system.${e2}`] = t2 : m2["system.uses.value"] = t2;
    return false !== Hooks.call("modifyTokenAttribute", { attribute: e2, value: t2, isDelta: s2, isBar: l2 }, m2) ? c2.update(m2) : this;
  }
  getItemByTag(e2) {
    return this.items.find((t2) => t2.system.tag === e2);
  }
}
class ActorCharacterFFD20 extends ActorFFD20 {
  _preCreate(e2, t2) {
    super._preCreate(e2, t2);
    const s2 = {};
    void 0 === e2.prototypeToken?.actorLink && (s2.actorLink = true), game.settings.get("ffd20", "characterVision") && setProperty(e2, "prototypeToken.sight.enabled", true), foundry.utils.isEmpty(s2) || this.prototypeToken.updateSource(s2);
  }
  prepareBaseData() {
    super.prepareBaseData();
    const e2 = this.system, t2 = this.getLevelExp(e2.details.level.value);
    if (e2.details.xp.max = t2, !hasProperty(this, "system.details.level.value"))
      return;
    const s2 = this.getLevelExp(e2.details.level.value - 1 || 0), l2 = this.getLevelExp(e2.details.level.value || 1);
    e2.details.xp.pct = (Math.max(s2, Math.min(l2, e2.details.xp.value)) - s2) / (l2 - s2) * 100 || 0;
  }
  _updateExp(e2) {
    const t2 = e2.details?.xp;
    if (null == t2?.value)
      return;
    const s2 = this.items.filter((e3) => "class" === e3.type), l2 = s2.filter((e3) => "mythic" !== e3.system.classType).reduce((e3, t3) => e3 + t3.system.level, 0), c2 = this.system;
    let u2 = t2.value, m2 = false;
    if ("string" == typeof u2) {
      const e3 = Number(c2.details.xp.value);
      u2.match(/^\+([0-9]+)$/) ? u2 = e3 + parseInt(RegExp.$1) : u2.match(/^-([0-9]+)$/) ? u2 = e3 - parseInt(RegExp.$1) : "" === u2 ? m2 = true : u2 = u2.match(/^([0-9]+)$/) ? parseInt(u2) : e3, t2.value = u2;
    }
    const d2 = this.getLevelExp(l2);
    if (t2.max = d2, m2) {
      const e3 = l2 > 0 ? this.getLevelExp(l2 - 1) : 0;
      t2.value = e3;
    }
  }
  getLevelExp(e2) {
    const t2 = game.settings.get("ffd20", "experienceConfig"), s2 = t2.track;
    if (["fast", "medium", "slow"].includes(s2)) {
      const t3 = CONFIG.FFD20.CHARACTER_EXP_LEVELS[s2];
      return t3[Math.min(e2, t3.length - 1)];
    }
    let l2 = 0;
    if (t2.custom.formula.length > 0)
      for (let s3 = 0; s3 < e2; s3++) {
        const e3 = this.getRollData();
        e3.level = s3 + 1;
        l2 += RollFFD20.safeRoll(t2.custom.formula, e3).total;
      }
    return Math.max(1, l2);
  }
}
class ActorNPCFFD20 extends ActorFFD20 {
  prepareBaseData() {
    super.prepareBaseData(), this.system.details.cr.total = this.getCR(this.system), this.system.attributes.init.total = this.system.attributes.init.value;
  }
  prepareSpecificDerivedData() {
    super.prepareSpecificDerivedData(), setProperty(this.system, "details.cr.total", this.getCR());
    try {
      const e2 = getProperty(this.system, "details.cr.total") || 0;
      setProperty(this.system, "details.xp.value", this.getCRExp(e2));
    } catch (e2) {
      setProperty(this.system, "details.xp.value", this.getCRExp(1));
    }
  }
  hasArmorProficiency(e2, t2) {
    return !game.settings.get("ffd20", "npcProficiencies") || super.hasArmorProficiency(e2, t2);
  }
  _updateExp() {
  }
  getCR() {
    if ("npc" !== this.type)
      return 0;
    const e2 = this.system, t2 = e2.details.cr.base;
    if (null == this.items)
      return t2;
    const s2 = this.items.filter((e3) => "feat" === e3.type && "template" === e3.system.featType && !e3.system.disabled);
    return s2.reduce((t3, s3) => {
      const l2 = s3.system.crOffset;
      return "string" == typeof l2 && l2.length && (t3 += RollFFD20.safeRoll(l2, this.getRollData(e2)).total), t3;
    }, t2);
  }
  getCRExp(e2) {
    return e2 < 1 ? Math.max(400 * e2, 0) : CONFIG.FFD20.CR_EXP_LEVELS[e2];
  }
}
class BasicActorFFD20 extends ActorBaseFFD20 {
}
class ActorTraitSelector extends DocumentSheet {
  constructor(e2, t2) {
    super(e2, t2), this.options.classes.push(t2.subject);
  }
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return e2.classes = ["ffd20", "trait-selector"], e2.title = "Actor Trait Selection", e2.template = "systems/ffd20/templates/apps/trait-selector.hbs", e2.width = 320, e2.height = "auto", e2;
  }
  get attribute() {
    return this.options.name;
  }
  getData() {
    const e2 = getProperty(this.object, this.attribute) ?? { value: [], custom: "" }, t2 = duplicate(this.options.choices);
    for (const [s3, l2] of Object.entries(t2))
      t2[s3] = { label: l2, chosen: e2.value?.includes(s3) };
    const s2 = this.object instanceof Actor ? "FFD20.UpdateActor" : "FFD20.UpdateItem";
    return { choices: t2, custom: e2.custom, updateButton: s2 };
  }
  _updateObject(e2, t2) {
    const s2 = [];
    for (const [e3, l2] of Object.entries(t2))
      "custom" !== e3 && l2 && s2.push(e3);
    this.object.update({ [`${this.attribute}.value`]: s2, [`${this.attribute}.custom`]: t2.custom });
  }
}
class ActorRestDialog extends DocumentSheet {
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return mergeObject(e2, { classes: ["ffd20", "actor-rest"], template: "systems/ffd20/templates/apps/actor-rest.hbs", width: 500, closeOnSubmit: true });
  }
  get title() {
    return `${game.i18n.localize("FFD20.Rest")}: ${this.object.name}`;
  }
  async _updateObject(e2, t2) {
    this.object.performRest({ restoreHealth: t2.restoreHealth, longTermCare: t2.longTermCare, aidedcare: t2.aidedCare, restoreDailyUses: t2.restoreDailyUses, hours: t2.hours });
  }
}
class PointBuyCalculator extends DocumentSheet {
  constructor(...e2) {
    super(...e2);
    const t2 = this.actor.system.abilities;
    this.abilities = [];
    for (const [e3, s3] of Object.entries(CONFIG.FFD20.abilities))
      this.abilities.push({ key: e3, name: s3, value: t2[e3]?.value ?? 10 });
    const s2 = Object.keys(CONFIG.FFD20.abilityCost).map((e3) => Number(e3));
    this.min = Math.min(...s2), this.max = Math.max(...s2);
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "pointbuy-calculator"], title: "Point Buy Calculator", template: "systems/ffd20/templates/apps/point-buy-calculator.hbs", width: 320, height: "auto", closeOnSubmit: false, submitOnClose: false });
  }
  get title() {
    return `${this.options.title}: ${this.object.name}`;
  }
  get actor() {
    return this.document;
  }
  getData() {
    const e2 = this.getSpentPoints();
    return { abilities: this.abilities, points: e2 };
  }
  getSpentPoints() {
    let e2 = 0;
    for (const t2 of this.abilities)
      e2 += CONFIG.FFD20.abilityCost[t2.value];
    return e2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find(".ability-control").click(this._onAbilityControl.bind(this));
  }
  _onAbilityControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.ability, l2 = this.abilities.find((e3) => e3.key === s2);
    t2.classList.contains("add") ? l2.value = Math.min(this.max, l2.value + 1) : t2.classList.contains("subtract") && (l2.value = Math.max(this.min, l2.value - 1)), this.render();
  }
  _updateObject() {
    const e2 = {};
    for (const t2 of this.abilities)
      e2[`system.abilities.${t2.key}.value`] = t2.value;
    this.actor.update(e2), this.close();
  }
}
class Widget_ItemPicker {
  constructor(e2, { items: t2, columns: s2 = 3 } = {}) {
    this.element = null, this.callback = e2, this._items = t2, this.columns = s2;
  }
  render(e2) {
    const t2 = $($.parseHTML('<div class="widget item-picker"></div>'));
    let s2;
    for (let e3 = 0; e3 < this._items.length; e3++) {
      const l2 = this._items[e3];
      e3 % this.columns == 0 && (s2 = $($.parseHTML('<div class="row"></div>')), t2.append(s2));
      const c2 = $($.parseHTML(`<div class="item" value="${l2.value}">${l2.label}</div>`)), u2 = Math.floor(1e4 / this.columns) / 100;
      c2.css("flex", `0 0 calc(${u2}% - 4px)`), s2.append(c2);
    }
    e2 instanceof jQuery || (e2 = $(e2)), t2.css("position", "absolute"), t2.css("left", `${e2[0].offsetLeft}px`), t2.css("position", `${e2[0].offsetBottom}px`), e2.parent().append(t2), this.element = t2, window.setTimeout(() => {
      this.activateListeners(t2);
    }, 10);
  }
  activateListeners(e2) {
    e2.find(".item").click(this._onClickItem.bind(this)), this._cancelCallback = this._onCancel.bind(this), document.addEventListener("click", this._cancelCallback);
  }
  _onCancel(e2) {
    e2.preventDefault();
    let t2 = e2.target;
    if (t2 !== this.element[0]) {
      for (; t2.parentNode; ) {
        if (t2 === this.element[0])
          return;
        t2 = t2.parentNode;
      }
      this.cancel();
    }
  }
  _onClickItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    this.callback($(t2).attr("value"));
  }
  cancel() {
    document.removeEventListener("click", this._cancelCallback), this.element.remove();
  }
}
function dialogGetNumber({ title: e2 = "Input Number", initial: t2 = null, min: s2 = Number.NEGATIVE_INFINITY, max: l2 = Number.POSITIVE_INFINITY } = {}) {
  return new Promise((c2) => {
    let u2 = true;
    new Dialog({ title: e2, content: `<input type="number" name="result" min="${s2}" max="${l2}" value="${t2 || 0}">`, buttons: { ok: { label: "Submit", callback: (e3) => {
      u2 = false;
      const t3 = e3.find('input[name="result"]');
      c2(t3.val());
    } } }, close: () => {
      u2 || c2(t2);
    }, default: "ok", render: (e3) => {
      e3.find("input").select();
    } }, { classes: ["dialog", "ffd20", "get-number"] }).render(true);
  });
}
const dialogGetActor = function(e2 = "", t2 = []) {
  return new Promise((s2) => {
    let l2 = "";
    t2.forEach((e3) => {
      if (e3 instanceof Actor) {
        const t3 = game.users.some((e4) => e4.active && e4.isGM), s3 = t3 || e3.testUserPermission(game.user, "OWNER");
        l2 += `<div class="dialog-get-actor flexrow ${s3 ? "" : "disabled"}" data-actor-id="${e3.id}"><img src="${e3.data.img}"><h2>${e3.name}</h2></div>`;
      } else
        e3 instanceof Item && (l2 += `<div class="dialog-get-actor flexrow" data-item-id="${e3.id}"><img src="${e3.data.img}"><h2>${e3.name}</h2></div>`);
    });
    const c2 = new Dialog({ title: e2, content: l2, buttons: {}, close: () => {
      s2(null);
    } }, { classes: ["dialog", "ffd20", "get-actor"] });
    c2.activateListeners = function(e3) {
      Dialog.prototype.activateListeners.call(this, e3), e3.find(".dialog-get-actor:not(.disabled)").click((e4) => {
        const t3 = e4.currentTarget, l3 = t3.dataset.actorId;
        if (l3)
          s2({ type: "actor", id: l3 });
        else {
          const e5 = t3.dataset.itemId;
          e5 && s2({ type: "item", id: e5 });
        }
        this.close();
      });
    }, c2.render(true);
  });
}, V = Object.freeze(Object.defineProperty({ __proto__: null, dialogGetNumber, dialogGetActor }, Symbol.toStringTag, { value: "Module" }));
class LevelUpForm extends FormApplication {
  constructor(...e2) {
    super(...e2), this._submitted = false, this._section = 0, this._sections = this._addSections(), this._sections.push(this._addSummarySection());
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "level-up"], template: "systems/ffd20/templates/apps/level-up.hbs", width: 720, height: 480, closeOnSubmit: true });
  }
  get section() {
    return this._section;
  }
  get currentSection() {
    return this._sections[this.section];
  }
  setSection(e2) {
    return this._section = e2, this._render();
  }
  get title() {
    return game.i18n.format("FFD20.LevelUpForm_Title", { className: this.object.name });
  }
  get actor() {
    return this.object.actor;
  }
  static async addClassWizard(e2, t2) {
    setProperty(t2, "system.hp", 0), setProperty(t2, "system.level", 0);
    let s2 = await e2.createEmbeddedDocuments("Item", [t2]);
    s2 = s2 instanceof Array ? s2 : [s2];
    const l2 = e2.items.get(s2[0].id);
    if (!l2)
      throw new Error("No class was created at class initialization wizard");
    return new Promise((t3) => {
      const s3 = new LevelUpForm(l2).render(true);
      Hooks.on("closeLevelUpForm", function _onClose(c2) {
        c2 === s3 && (0 === getProperty(l2, "system.level") && e2.deleteEmbeddedDocuments("Item", [l2.id]), Hooks.off("closeLevelUpForm", _onClose), t3());
      });
    });
  }
  getData() {
    const e2 = {};
    return e2.data = this.object.toObject(), e2.actor = this.actor.toObject(), e2.config = CONFIG.FFD20, e2.section = this.currentSection, e2.sections = this._sections, e2.summary = this.getSummaryData(), e2.uuid = this.object.uuid, e2;
  }
  getSummaryData() {
    const e2 = {};
    for (const t2 of this._sections) {
      if ("summary" === t2.name)
        continue;
      const { summary: s2 } = this._parseSection(t2);
      e2[t2.name] = s2;
    }
    return e2;
  }
  _addSections() {
    const e2 = [], t2 = game.settings.get("ffd20", "healthConfig");
    true !== ("character" === this.actor.type ? t2.hitdice.PC : t2.hitdice.NPC).auto && e2.push({ name: "health", label: "FFD20.LevelUpForm_Health", choice: null, manualValue: Math.ceil(1 + (this.object.system.hd - 1) / 2), items: [{ img: "systems/ffd20/icons/items/inventory/dice.jpg", name: game.i18n.localize("FFD20.LevelUpForm_Health_Roll"), id: "roll", type: "html", target: "systems/ffd20/templates/apps/level-up/health_roll.hbs" }, { img: "systems/ffd20/icons/skills/green_19.jpg", name: game.i18n.localize("FFD20.LevelUpForm_Health_Manual"), id: "manual", type: "html", target: "systems/ffd20/templates/apps/level-up/health_manual.hbs" }] }), this.isFavouredClass() && e2.push({ name: "fc", label: "FFD20.LevelUp.FC.Label", choice: null, items: [{ name: game.i18n.localize("FFD20.None"), id: "none" }, { img: "systems/ffd20/icons/skills/green_19.jpg", name: game.i18n.localize("FFD20.FavouredClassBonus.HP"), id: "hp", type: "html", target: "systems/ffd20/templates/apps/level-up/fc_hp.hbs" }, { img: "systems/ffd20/icons/items/inventory/dice.jpg", name: game.i18n.localize("FFD20.FavouredClassBonus.Skill"), id: "skill", type: "html", target: "systems/ffd20/templates/apps/level-up/fc_skill.hbs" }, { img: "systems/ffd20/icons/skills/affliction_22.jpg", name: game.i18n.localize("FFD20.FavouredClassBonus.Alt"), id: "alt", type: "html", target: "systems/ffd20/templates/apps/level-up/fc_alt.hbs" }] });
    const s2 = this.actor.getRollData().attributes.hd.total + 1, l2 = CONFIG.FFD20.levelAbilityScores[s2];
    return "number" == typeof l2 && l2 > 0 && e2.push({ name: "ability", label: "FFD20.LevelUp.AbilityScore.Label", template: "systems/ffd20/templates/apps/level-up/ability-score.hbs", choice: null, abilities: Object.keys(CONFIG.FFD20.abilities).reduce((e3, t3) => (e3[t3] = { value: this.actor.system.abilities[t3].total, name: CONFIG.FFD20.abilities[t3], added: 0, isEnhanced: this.actor.system.abilities[t3].total !== this.actor.system.abilities[t3].base }, e3), {}), value: l2 }), e2;
  }
  _addSummarySection() {
    return { name: "summary", label: "FFD20.LevelUp.Summary.Label", template: "systems/ffd20/templates/apps/level-up/summary.hbs" };
  }
  isFavouredClass() {
    return "base" === this.object.system.classType;
  }
  async _updateObject(e2, t2) {
    const s2 = {}, l2 = {}, c2 = { config: CONFIG.FFD20 }, u2 = [], m2 = [];
    for (const e3 of this._sections) {
      const t3 = this._parseSection(e3);
      mergeObject(s2, t3.item), mergeObject(l2, t3.actor), mergeObject(c2, t3.chatData), m2.push(...t3.callbacks);
      for (const e4 of t3.newItems) {
        const t4 = u2.find((t5) => t5._id === e4._id);
        null != t4 ? mergeObject(t4, e4) : u2.push(e4);
      }
    }
    c2.level = { previous: this.object.system.level, new: this.object.system.level + 1 }, mergeObject(s2, { "system.level": c2.level.new });
    const d2 = this.object, h2 = new Promise((e3) => {
      const t3 = Hooks.on("ffd20.classLevelChange", function(s3, l3, c3, u3) {
        l3.id === d2.id && (Hooks.off("ffd20.classLevelChange", t3), e3());
      });
    });
    await d2.update(s2), await h2, Object.keys(l2).length && await this.actor.update(l2), u2.length > 0 && await this.actor.createEmbeddedDocuments("Item", u2);
    for (const e3 of m2)
      await e3.call(this);
    {
      const e3 = getProperty(this.object, "flags.ffd20.links.classAssociations") || {}, t3 = Object.entries(e3).filter((e4) => e4[1] === c2.level.new);
      c2.newFeatures = [];
      for (const e4 of t3) {
        const t4 = this.actor.items.get(e4[0]);
        t4 && c2.newFeatures.push(t4.toObject());
      }
    }
    {
      const e3 = {};
      c2.extra = e3;
      const t3 = this.actor.getFeatCount();
      t3.new = Math.max(0, t3.max - t3.value), e3.feats = t3, t3.new > 0 && (e3.enabled = true, 1 === t3.new ? t3.label = game.i18n.localize("FFD20.LevelUp.Chat.Extra.NewFeat") : t3.label = game.i18n.format("FFD20.LevelUp.Chat.Extra.NewFeats", { newValue: t3.new }));
      const s3 = this.actor.system.attributes.hd.total;
      "number" == typeof s3 && s3 % 4 == 0 && (e3.enabled = true, e3.newAbilityScore = { label: game.i18n.localize("FFD20.LevelUp.Chat.Extra.NewAbilityScore") });
    }
    return this.createChatMessage(c2);
  }
  _parseSection(e2) {
    const t2 = { item: {}, actor: {}, chatData: {}, newItems: [], summary: {}, callbacks: [] }, s2 = this[`_parseSection_${e2.name}`];
    return s2 instanceof Function ? s2.call(this, e2, t2) : t2;
  }
  _parseSection_health(e2, t2) {
    if (t2.summary = { label: "FFD20.LevelUp.Chat.Health.Header", template: "systems/ffd20/templates/apps/level-up/summary/health.hbs", type: e2.choice }, "manual" === e2.choice) {
      const s2 = e2.manualValue;
      t2.item["system.hp"] = this.object.system.hp + s2, t2.chatData.hp = { label: "FFD20.LevelUp.Chat.Health.Manual", add: s2, roll: RollFFD20.safeRoll(`${s2}`) }, t2.summary.hp = s2;
    } else if ("roll" === e2.choice) {
      const e3 = `1d${this.object.system.hd}`, s2 = RollFFD20.safeRoll(e3);
      t2.chatData.hp = { label: "FFD20.LevelUp.Chat.Health.Roll", add: createInlineRollString(s2), roll: s2 }, Number.isNaN(s2.total) || (t2.item["system.hp"] = this.object.system.hp + s2.total);
    }
    return t2;
  }
  _parseSection_fc(e2, t2) {
    t2.summary = { label: "FFD20.LevelUp.Chat.FC.Header", template: "systems/ffd20/templates/apps/level-up/summary/fc.hbs", id: e2.choice };
    const s2 = e2.choice;
    if (["hp", "skill", "alt"].includes(s2)) {
      const l2 = `system.fc.${e2.choice}.value`;
      t2.item[l2] = getProperty(this.object, l2) + 1;
      const c2 = { hp: "HP", skill: "Skill", alt: "Alt" }[s2];
      t2.chatData.fc = { type: s2, label: `FFD20.FavouredClassBonus.${c2}` }, t2.summary.desc = `FFD20.LevelUp.FC.${c2}.Desc`;
    }
    return t2;
  }
  _parseSection_ability(e2, t2) {
    const s2 = Object.entries(e2.abilities).reduce((e3, t3) => t3[1].added > 0 ? (e3[t3[0]] = t3[1].added, e3) : e3, {});
    t2.summary = { label: "FFD20.LevelUp.AbilityScore.Label", template: "systems/ffd20/templates/apps/level-up/summary/ability-score.hbs", choices: s2 }, Object.keys(s2).length && (t2.chatData.ability = { choices: s2 });
    const l2 = this.actor.items.find((e3) => true === e3.getFlag("ffd20", "levelUp"));
    if (l2) {
      const cb = async function() {
        const e3 = duplicate(l2.system.changes ?? []);
        for (const [t3, l3] of Object.entries(s2)) {
          const s3 = e3.find((e4) => e4.subTarget === t3);
          if (null != s3) {
            const e4 = parseInt(s3.formula);
            if (!Number.isNaN(e4)) {
              const t4 = e4 + l3;
              s3.formula = `${t4}`;
              continue;
            }
          }
          e3.push(mergeObject(ffd20.components.ItemChange.defaultData, { subTarget: t3, formula: `${l3}`, modifier: "untypedPerm" }));
        }
        await l2.update({ "system.changes": e3 });
      };
      t2.callbacks.push(cb);
    } else {
      const e3 = mergeObject(CONFIG.FFD20.levelAbilityScoreFeature, { flags: { ffd20: { levelUp: true } } }, { inplace: false });
      e3.name = game.i18n.localize(e3.name), setProperty(e3, "system.description.value", game.i18n.localize(getProperty(e3, "system.description.value") ?? "")), setProperty(e3, "system.changes", Object.entries(s2).reduce((e4, t3) => {
        const s3 = mergeObject(ffd20.components.ItemChange.defaultData, { formula: `${t3[1]}`, subTarget: t3[0], modifier: "untypedPerm" });
        return e4.push(s3), e4;
      }, [])), t2.newItems.push(e3);
    }
    return t2;
  }
  async createChatMessage(e2) {
    const t2 = ChatMessage.getSpeaker({ actor: this.actor }), s2 = { formData: e2, config: CONFIG.FFD20, item: this.object.toObject(), actor: this.actor.toObject() };
    return ChatMessage.create({ content: await renderTemplate("systems/ffd20/templates/chat/level-up.hbs", s2), user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.ROLL, speaker: t2, roll: e2.hp?.roll ?? RollFFD20.safeRoll("0") });
  }
  activateListeners(e2) {
    e2.find(".list-selector .item").on("click", this._onClickListItem.bind(this)), e2.find("input.section-choice").on("change", this._onChangeSectionChoice.bind(this)), e2.find(".ability-scores .ability-score .operator").on("click", this._onClickAbilityScoreOperator.bind(this)), e2.find('button[data-type="previous"]').on("click", this._onPreviousSection.bind(this)), e2.find('button[data-type="next"]').on("click", this._onNextSection.bind(this)), e2.find('button[name="submit"]').on("click", this._onSubmit.bind(this));
  }
  _onPreviousSection(e2) {
    e2.preventDefault(), this.setSection(this.section - 1);
  }
  _onNextSection(e2) {
    e2.preventDefault(), this.setSection(this.section + 1);
  }
  _onClickListItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (!t2.classList.contains("active"))
      return this.currentSection.currentItem = this.currentSection.items.find((e3) => e3.id === t2.dataset.id), setProperty(this.currentSection, "choice", t2.dataset.id), this._render();
  }
  async _render(...e2) {
    await super._render(...e2), this._updateNavButtons();
  }
  _onChangeSectionChoice(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, [s2, l2] = t2.name.split(":"), c2 = this._sections.find((e3) => e3.name === s2);
    if (!c2)
      return;
    let u2 = t2.value;
    switch (t2.dataset.dtype.toLowerCase()) {
      case "number":
        u2 = parseFloat(u2);
        break;
      case "boolean":
        u2 = ["true", "1"].includes(u2);
    }
    setProperty(c2, l2, u2);
  }
  _onClickAbilityScoreOperator(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.dataset.operator, l2 = t2.closest(".ability-score").dataset.key, c2 = this.currentSection, u2 = "add" === s2 ? 1 : "subtract" === s2 ? -1 : 0;
    c2.abilities[l2].value += u2, c2.abilities[l2].added += u2, c2.value -= u2, c2.choice = 0 === c2.value || null, this._render();
  }
  _updateNavButtons() {
    const e2 = this.element.find(".nav-buttons"), t2 = { previous: e2.find('button[data-type="previous"]'), next: e2.find('button[data-type="next"]'), submit: e2.find('button[type="submit"]') };
    this._section > 0 ? t2.previous.prop("disabled", false) : t2.previous.prop("disabled", true);
    const s2 = !!this.currentSection.choice;
    this.section < this._sections.length - 1 && s2 ? t2.next.prop("disabled", false) : t2.next.prop("disabled", true), this.section === this._sections.length - 1 ? t2.submit.prop("disabled", false) : t2.submit.prop("disabled", true);
  }
  _onSubmit(e2, ...t2) {
    e2.preventDefault(), this._submitted || (this._submitted = true, super._onSubmit(e2, ...t2));
  }
}
class CurrencyTransfer extends FormApplication {
  constructor(e2 = { actor: null, container: null, amount: {}, alt: false }, t2 = { actor: null, container: null, amount: {}, alt: false }, s2 = {}) {
    if (super(s2), e2.actor && ("string" == typeof e2.actor && (e2.actor = game.actors.get(e2.actor)), "npc" == e2.actor.data.type && (e2.alt = false)), e2.container && (e2.alt = false, "string" == typeof e2.container && (e2.container = e2.actor ? e2.actor.items.get(e2.container) : game.items.get(e2.container))), t2.actor && ("string" == typeof t2.actor && (t2.actor = game.actors.get(t2.actor)), "npc" == t2.actor.data.type ? t2.alt = false : t2.actor !== e2.actor || e2.container || t2.container || (t2.alt = !e2.alt)), t2.container && "string" == typeof t2.container && (t2.container = t2.actor ? t2.actor.items.get(t2.container) : game.items.get(t2.container)), e2.container)
      e2.amount = mergeObject(e2.container.data.currency, e2.amount ?? {});
    else if (e2.actor)
      e2.amount = mergeObject(e2.alt ? e2.actor.data.altCurrency : e2.actor.data.currency, e2.amount ?? {});
    else {
      if (!game.user.isGM)
        return void ui.notification.warning("Cannot use Infinite currency transfer as non-gm.");
      e2.amount = mergeObject({ pgil: "∞", gil: "∞", sgil: "∞", cgil: "∞" }, e2.amount ?? {});
    }
    (t2.actor || t2.container) && (this.source = e2, this.dest = t2);
  }
  get title() {
    let e2;
    return this.source.actor ? (e2 = this.source.actor.name + " ", this.source.container && (e2 += `(${this.source.container.name}) `)) : e2 = this.source.container ? this.source.container.name + " " : "∞ ", e2 += "➤ ", this.source.actor == this.dest.actor && (this.source.alt || this.dest.alt) ? e2 += this.dest.alt ? game.i18n.localize("FFD20.WeightlessCurrency") : game.i18n.localize("FFD20.Currency") : this.dest.actor ? (e2 += this.dest.actor.name, this.dest.container && (e2 += ` (${this.dest.container.name})`)) : e2 += this.dest.container.name, e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "currency-transfer"], template: "systems/ffd20/templates/apps/currency-transfer.hbs", width: 380, height: 235 });
  }
  static get order() {
    return ["pgil", "gil", "sgil", "cgil"];
  }
  activateListeners(e2) {
    e2.find('button[type="submit"]').click(this._onSubmit.bind(this)), e2.find("button.cur-range").click(this._curRange.bind(this)), e2.find("input").on("input", this._calcTotal.bind(this)), $(e2.find("input")[0]).trigger("input");
  }
  _updateObject(e2, t2) {
    this.dest.amount = { pgil: t2.pgil ?? 0, gil: t2.gil ?? 0, sgil: t2.sgil ?? 0, cgil: t2.cgil ?? 0 }, this.constructor.transfer(this.source.container ? this.source.container : this.source.actor, this.dest.container ? this.dest.container : this.dest.actor, this.dest.amount, this.source.alt, this.dest.alt, 2);
  }
  getData(e2 = {}) {
    return { source: this.source, dest: this.dest, options: this.options, title: this.title, total: "∞" === this.source.amount.gil ? "∞" : this.constructor.order.reduce((e3, t2, s2) => e3 + this.source.amount[t2] * 10 ** (1 - s2), 0) };
  }
  _curRange(e2) {
    e2.preventDefault();
    const t2 = e2.target.closest("button"), s2 = t2.closest(".form-fields"), l2 = t2.classList.contains("down"), c2 = s2.querySelector("input");
    c2.value = l2 ? "" : s2.querySelector("span").textContent, $(c2).trigger("input");
  }
  _calcTotal(e2) {
    const t2 = e2.target.closest(".currency-transfer"), s2 = Object.fromEntries([...t2.querySelectorAll("input")].map((e3) => [e3.name, parseInt(e3.value || 0)])), l2 = this.constructor.order.reduce((e3, t3, l3) => e3 + s2[t3] * 10 ** (1 - l3), 0);
    t2.querySelector(".currency-total .form-fields label").textContent = Math.round(100 * l2) / 100 + " gil";
  }
  async close(...e2) {
    super.close(...e2);
  }
  static _failed(e2) {
    return ui.notifications.error(game.i18n.localize("FFD20.CurrencyFailed") + game.i18n.localize(e2));
  }
  static _directoryDrop(e2, t2) {
    let s2;
    t2.preventDefault();
    try {
      if (s2 = JSON.parse(t2.dataTransfer.getData("text/plain")), "Currency" !== s2.type)
        return;
    } catch (e3) {
      return false;
    }
    const l2 = t2.currentTarget.classList.contains("item") ? game.items.get(e2) : game.actors.get(e2), c2 = s2.tokenId ? game.actors.tokens[s2.tokenId] : s2.actorId;
    if (s2.currency && c2)
      return new CurrencyTransfer({ actor: c2, container: s2.containerId, alt: s2.alt }, { actor: l2?.actor ?? l2, container: "container" === l2.data.type ? l2.id : null, amount: Object.fromEntries([[s2.currency, parseInt(s2.amount)]]) }).render(true);
  }
  static async transfer(e2, t2, s2, l2 = false, c2 = false, u2 = false) {
    if (!e2 && !game.user.isGM || !t2 || !s2)
      return false;
    if ("object" != typeof s2 && (s2 = { gil: parseInt(s2) }), this.order.forEach((e3) => s2[e3] = s2[e3] ?? 0), !Object.values(s2).find((e3) => e3 > 0))
      return this._failed("FFD20.CurrencyInsufficient"), false;
    let m2 = duplicate(l2 ? e2?.data.altCurrency : e2?.data.currency);
    const d2 = duplicate(c2 ? t2.data.altCurrency : t2.data.currency);
    if (!m2 && !game.user.isGM || !d2)
      return false;
    const h2 = Object.assign(Object.fromEntries(this.order.map((e3) => [e3, 1 / 0])), m2), p2 = this.order.reduce((e3, t3, l3) => e3 + s2[t3] * 10 ** (1 - l3), 0), g2 = this.order.reduce((e3, t3, s3) => e3 + m2[t3] * 10 ** (1 - s3), 0);
    return p2 > g2 ? (this._failed("FFD20.CurrencyInsufficient"), false) : (m2 && this.order.some((e3) => {
      const t3 = m2[e3] - s2[e3];
      if (t3 < 0 && u2)
        return s2 = this.convert(h2, p2, u2), m2 = Object.fromEntries(this.order.map((e4) => [e4, h2[e4] - s2[e4]])), true;
      m2[e3] = t3;
    }), !(!s2 || Object.values(m2).find((e3) => e3 < 0)) && (e2.testUserPermission(game.user, 3) && t2.testUserPermission(game.user, 3) ? (this.order.forEach((e3) => d2[e3] += s2[e3]), e2 === t2 ? e2.update({ "data.altCurrency": l2 ? m2 : d2, "data.currency": c2 ? m2 : d2 }) : (l2 ? e2.update({ "data.altCurrency": m2 }) : e2.update({ "data.currency": m2 }), c2 ? t2.update({ "data.altCurrency": d2 }) : t2.update({ "data.currency": d2 }), s2)) : game.users.find((e3) => e3.active && e3.isGM) ? (game.socket.emit("system.ffd20", { eventType: "currencyTransfer", data: { sourceActor: e2.actor?.uuid ?? e2.uuid, destActor: t2.actor?.uuid ?? t2.uuid, sourceContainer: "container" === e2.data.type ? e2.id : "", destContainer: "container" === t2.data.type ? t2.id : "", sourceAlt: l2, destAlt: c2, amount: s2 } }), s2) : (this._failed("FFD20.CurrencyGMRequired"), false)));
  }
  static convert(e2, t2) {
    if (e2 = e2 ? Object.assign({}, e2) : Object.fromEntries(this.order.map((e3) => [e3, 1 / 0])), "number" != typeof t2 && (t2 = this.order.reduce((e3, s3, l2) => e3 + t2?.[s3] * 10 ** (1 - l2))), !t2)
      return false;
    const s2 = {};
    return !((t2 = this.order.reduce((t3, l2, c2) => {
      const u2 = Math.min(e2[l2], Math.floor(t3 % 1e4 / 10 ** (3 - c2))), m2 = u2 * 10 ** (3 - c2);
      return s2[l2] = u2, e2[l2] -= u2, t3 - m2;
    }, 100 * t2) / 100) < 0) && s2;
  }
}
class ActorSheetFFD20 extends ActorSheet {
  constructor(...e2) {
    super(...e2), this._filters = { inventory: /* @__PURE__ */ new Set(), "spellbook-primary": /* @__PURE__ */ new Set(), "spellbook-secondary": /* @__PURE__ */ new Set(), "spellbook-tertiary": /* @__PURE__ */ new Set(), "spellbook-quaternary": /* @__PURE__ */ new Set(), "spellbook-spelllike": /* @__PURE__ */ new Set(), features: /* @__PURE__ */ new Set(), buffs: /* @__PURE__ */ new Set(), attacks: /* @__PURE__ */ new Set(), search: { inventory: "", attacks: "", feats: "", buffs: "", "spellbook-primary": "", "spellbook-secondary": "", "spellbook-tertiary": "", "spellbook-quaternary": "", "spellbook-spelllike": "" } }, this.searchCompositioning = false, this.searchRefresh = true, this.searchDelay = 250, this.searchDelayEvent = null, this.effectiveSearch = {}, this._itemUpdates = [], this._hiddenElems = {}, this._submitQueued = false, this._renderedInner = false, this._pendingUpdates = {}, this._skillsLocked = true, this._expandedItems = [];
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { scrollY: [".combat-attacks", ".inventory-list", ".skills-list", ".traits", ".actor-notes", ".editor-content[data-edit='system.details.biography.value']"], dragDrop: [{ dragSelector: "li.item[data-item-id]" }, { dragSelector: "label.denomination" }, { dragSelector: ".race-container.item[data-item-id]" }, { dragSelector: "li.skill[data-skill]" }, { dragSelector: "li.sub-skill[data-skill]" }, { dragSelector: "th.saving-throw[data-savingthrow]" }, { dragSelector: "th.attribute.cmb[data-attribute]" }, { dragSelector: "th.attribute.bab[data-attribute]" }, { dragSelector: "li.generic-defenses[data-drag]" }, { dragSelector: ".spellcasting-concentration[data-drag]" }, { dragSelector: ".spellcasting-cl" }], tabs: [{ navSelector: "nav.tabs[data-group='primary']", contentSelector: "section.primary-body", initial: "summary" }, { navSelector: "nav.tabs[data-group='skillset']", contentSelector: "section.skillset-body", initial: "adventure" }, { navSelector: "nav.tabs[data-group='spellbooks']", contentSelector: "section.spellbooks-body", initial: "primary" }] });
  }
  static get featTypeData() {
    return { template: { hasActions: false } };
  }
  get currentPrimaryTab() {
    const e2 = this.element.find('nav[data-group="primary"] .item.active');
    return 1 !== e2.length ? null : e2.attr("data-tab");
  }
  get currentSpellbookKey() {
    const e2 = this.element.find("nav.spellbooks .item.active");
    return 1 === e2.length ? e2.attr("data-tab") : "primary";
  }
  async getData(e2) {
    const t2 = this.document.isOwner, s2 = mergeObject(await super.getData(e2), { owner: t2, limited: this.document.limited, editable: this.isEditable, cssClass: t2 ? "editable" : "locked", isCharacter: "character" === this.document.type, hasRace: false, config: CONFIG.FFD20, useBGSkills: game.settings.get("ffd20", "allowBackgroundSkills"), spellFailure: this.document.spellFailure, isGM: game.user.isGM, race: null != this.document.race ? this.document.race.toObject() : null, usesAnySpellbook: this.document.system.attributes.spells.usedSpellbooks?.length > 0, sourceData: {}, skillsLocked: this._skillsLocked }), l2 = this.document.getRollData();
    s2.rollData = l2, s2.system = deepClone(this.document.system), s2.hasProficiencies = s2.isCharacter || game.settings.get("ffd20", "npcProficiencies"), s2.hasCurrency = Object.values(this.object.system.currency).some((e3) => e3 > 0), s2.hasAltCurrency = Object.values(this.object.system.altCurrency).some((e3) => e3 > 0), s2.biographyHTML = await TextEditor.enrichHTML(s2.system.details.biography.value, { secrets: t2, rollData: s2.rollData, async: true }), s2.notesHTML = await TextEditor.enrichHTML(s2.system.details.notes.value, { secrets: t2, rollData: s2.rollData, async: true }), this.document.isToken ? s2.token = this.document.token.toObject() : s2.token = s2.actor.token, s2.items = this.document.items.map((e3) => {
      const t3 = deepClone(e3.system);
      t3.document = e3, t3.type = e3.type, t3.id = e3.id, t3.img = e3.img;
      const s3 = e3.firstAction;
      return t3.labels = e3.getLabels({ actionId: s3?.id }), t3.hasAttack = s3?.hasAttack, t3.hasMultiAttack = s3?.hasMultiAttack, t3.hasDamage = s3?.hasDamage, t3.hasRange = s3?.hasRange, t3.hasEffect = s3?.hasEffect, t3.hasAction = e3.hasAction || e3.getScriptCalls("use").length > 0, t3.range = mergeObject(s3?.data?.range ?? {}, { min: s3?.getRange({ type: "min" }), max: s3?.getRange({ type: "max" }) }, { inplace: false }), t3.sort = e3.sort, t3.showUnidentifiedData = e3.showUnidentifiedData, t3.showUnidentifiedData ? t3.name = getProperty(e3, "system.unidentified.name") || getProperty(e3, "system.identifiedName") || e3.name : t3.name = getProperty(e3, "system.identifiedName") || e3.name, t3;
    }), s2.items.sort((e3, t3) => (e3.sort || 0) - (t3.sort || 0)), s2.labels = this.document.getLabels(), s2.filters = this._filters;
    const c2 = s2.system.attributes.attack.shared + s2.system.attributes.attack.general, u2 = s2.system.abilities[s2.system.attributes.attack.meleeAbility]?.mod ?? 0, m2 = s2.system.abilities[s2.system.attributes.attack.rangedAbility]?.mod ?? 0, d2 = s2.system.abilities[s2.system.attributes.cmbAbility]?.mod ?? 0, h2 = CONFIG.FFD20.sizeMods[s2.system.traits.size], p2 = CONFIG.FFD20.sizeSpecialMods[s2.system.traits.size];
    s2.system.attributes.attack.meleeAttackMod = u2, s2.system.attributes.attack.rangedAttackMod = m2, s2.meleeAttack = c2 + h2 + s2.system.attributes.attack.melee + (u2 ?? 0), s2.rangedAttack = c2 + h2 + s2.system.attributes.attack.ranged + (m2 ?? 0), s2.cmbAttack = c2 + p2 + s2.system.attributes.cmb.total + (d2 ?? 0);
    {
      const e3 = this.calculateTotalItemValue({ inLowestDenomination: true }), t3 = splitCurrency(e3);
      s2.labels.totalValue = game.i18n.localize("FFD20.ItemContainerTotalItemValue").format(t3.gil, t3.sgil, t3.cgil);
    }
    null != this.document.sourceDetails ? s2.sourceDetails = expandObject(this.document.sourceDetails) : s2.sourceDetails = null;
    for (const [e3, t3] of Object.entries(s2.system.abilities))
      t3.label = CONFIG.FFD20.abilities[e3], t3.totalLabel = null == t3.total ? "-" : t3.total, t3.sourceDetails = [...s2.sourceDetails?.system?.abilities?.[e3]?.total ?? [], ...s2.sourceDetails?.system?.abilities?.[e3]?.penalty ?? []];
    for (const [e3, t3] of Object.entries(s2.system.attributes.ac))
      t3.label = CONFIG.FFD20.ac[e3], t3.valueLabel = CONFIG.FFD20.acValueLabels[e3], t3.sourceDetails = null != s2.sourceDetails ? s2.sourceDetails.system.attributes.ac[e3].total : [];
    for (const [e3, t3] of Object.entries(s2.system.attributes.savingThrows))
      t3.label = CONFIG.FFD20.savingThrows[e3], t3.sourceDetails = null != s2.sourceDetails ? s2.sourceDetails.system.attributes.savingThrows[e3].total : [];
    const g2 = getProperty(this.document, "system.attributes.acp.total");
    for (const [e3, t3] of Object.entries(s2.system.skills))
      if (t3.label = CONFIG.FFD20.skills[e3], t3.arbitrary = CONFIG.FFD20.arbitrarySkills.includes(e3), t3.sourceDetails = [], t3.compendiumEntry = CONFIG.FFD20.skillCompendiumEntries[e3] ?? t3.journal ?? null, t3.rank > 0 && (t3.sourceDetails.push({ name: game.i18n.localize("FFD20.SkillRankPlural"), value: t3.rank }), t3.cs && t3.sourceDetails.push({ name: game.i18n.localize("FFD20.CSTooltip"), value: 3 })), t3.acp && g2 > 0 && t3.sourceDetails.push({ name: game.i18n.localize("FFD20.ACPLong"), value: -g2 }), t3.ability && t3.sourceDetails.push({ name: CONFIG.FFD20.abilities[t3.ability], value: s2.rollData.abilities[t3.ability]?.mod ?? 0 }), null != s2.sourceDetails && null != s2.sourceDetails.system.skills[e3] && (t3.sourceDetails = t3.sourceDetails.concat(s2.sourceDetails.system.skills[e3].changeBonus)), t3.untrained = true === t3.rt && t3.rank <= 0, null != t3.subSkills)
        for (const [l3, c3] of Object.entries(t3.subSkills))
          c3.compendiumEntry = c3.journal ?? null, c3.sourceDetails = [], c3.rank > 0 && (c3.sourceDetails.push({ name: game.i18n.localize("FFD20.SkillRankPlural"), value: c3.rank }), c3.cs && c3.sourceDetails.push({ name: game.i18n.localize("FFD20.CSTooltip"), value: 3 })), c3.sourceDetails.push({ name: CONFIG.FFD20.abilities[c3.ability], value: s2.system.abilities[c3.ability]?.mod ?? 0 }), null != s2.sourceDetails && null != s2.sourceDetails.system.skills[e3] && null != s2.sourceDetails.system.skills[e3].subSkills && null != s2.sourceDetails.system.skills[e3].subSkills[l3] && (c3.sourceDetails = c3.sourceDetails.concat(s2.sourceDetails.system.skills[e3].subSkills[l3].changeBonus)), c3.untrained = true === c3.rt && c3.rank <= 0;
    this._prepareTraits(s2.system.traits), s2.senses = this._prepareSenses(s2.system.traits.senses), this._prepareItems(s2), s2.encumbrance = this._computeEncumbrance(s2.system), s2.skillsets = this._prepareSkillsets(s2.system.skills);
    const y2 = { allowed: 0, used: 0, bgAllowed: 0, bgUsed: 0, sentToBG: 0 };
    for (const e3 of Object.values(s2.rollData.skills))
      if (null != e3.subSkills)
        for (const t3 of Object.values(e3.subSkills))
          s2.useBGSkills && e3.background ? y2.bgUsed += t3.rank : y2.used += t3.rank;
      else
        s2.useBGSkills && e3.background ? y2.bgUsed += e3.rank : y2.used += e3.rank;
    const F2 = [];
    if (setProperty(s2.sourceData, "skillRanks", F2), this.document.items.filter((e3) => "class" === e3.type && "mythic" !== e3.system.classType).forEach((e3) => {
      const t3 = e3.system.hitDice, l3 = e3.system.skillsPerLevel, c3 = e3.system.fc.skill.value;
      y2.allowed += Math.max(1, l3 + this.document.system.abilities.int.mod) * t3 + c3, s2.useBGSkills && ["base", "prestige"].includes(e3.system.classType) && (y2.bgAllowed += 2 * t3), F2.push({ name: game.i18n.format("FFD20.SourceInfoSkillRank_ClassBase", { className: e3.name }), value: l3 * t3 }), c3 > 0 && F2.push({ name: game.i18n.format("FFD20.SourceInfoSkillRank_ClassFC", { className: e3.name }), value: c3 });
    }), 0 !== getProperty(this.actor, "system.abilities.int.mod") && F2.push({ name: game.i18n.localize("FFD20.AbilityInt"), value: getProperty(this.actor, "system.abilities.int.mod") * getProperty(this.actor, "system.attributes.hd.total") }), "" !== this.actor.system.details.bonusSkillRankFormula) {
      const e3 = RollFFD20.safeRoll(this.actor.system.details.bonusSkillRankFormula, l2);
      e3.err && console.error(`An error occurred in the Bonus Skill Rank formula of actor ${this.actor.name}.`), y2.allowed += e3.total, F2.push({ name: game.i18n.localize("FFD20.SkillBonusRankFormula"), value: e3.total });
    }
    this.actor.changes.filter((e3) => "bonusSkillRanks" === e3.subTarget).forEach((e3) => {
      e3.value && (y2.allowed += e3.value, F2.push({ name: e3.parent ? e3.parent.name : game.i18n.localize("FFD20.Change"), value: e3.value }));
    }), s2.useBGSkills && y2.bgUsed > y2.bgAllowed && (y2.sentToBG = y2.bgUsed - y2.bgAllowed, y2.allowed -= y2.sentToBG, y2.bgAllowed += y2.sentToBG), s2.skillRanks = y2;
    {
      const e3 = [];
      setProperty(s2.sourceData, "bonusFeats", e3), s2.featCount = {}, s2.featCount.value = this.actor.items.filter((e4) => "feat" === e4.type && "feat" === e4.system.featType && !e4.system.disabled).length;
      const t3 = this.document.items.filter((e4) => "class" === e4.type && ["base", "npc", "prestige", "racial"].includes(e4.system.classType)).reduce((e4, t4) => e4 + t4.hitDice, 0);
      s2.featCount.byLevel = Math.ceil(t3 / 2), e3.push({ name: game.i18n.localize("FFD20.Level"), value: s2.featCount.byLevel });
      const c3 = RollFFD20.safeRoll(this.document.system.details.bonusFeatFormula || "0", l2), u3 = this.document.changes.filter((e4) => "bonusFeats" === e4.subTarget), m3 = getHighestChanges(u3.filter((t4) => (t4.applyChange(this.document), (t4.parent || t4.flavor) && e3.push({ name: t4.parent?.name ?? t4.flavor, value: t4.value }), !["set", "="].includes(t4.operator))), { ignoreTarget: true }).reduce((e4, t4) => e4 + t4.value, 0);
      if (s2.featCount.byFormula = c3.total + m3, c3.err) {
        const e4 = game.i18n.localize("FFD20.ErrorActorFormula").format(game.i18n.localize("FFD20.BonusFeatFormula"), this.document.name);
        console.error(e4), ui.notifications.error(e4);
      }
      0 !== c3.total && e3.push({ name: game.i18n.localize("FFD20.BonusFeatFormula"), value: c3.total }), s2.featCount.total = s2.featCount.byLevel + s2.featCount.byFormula;
    }
    {
      const e3 = { character: "pc", npc: "npc" }[this.document.type];
      s2.healthConfig = game.settings.get("ffd20", "healthConfig"), s2.useWoundsAndVigor = s2.healthConfig.variants[e3].useWoundsAndVigor;
    }
    this._prepareHiddenElements(), s2.hiddenElems = this._hiddenElems;
    {
      const e3 = this.document.items.filter((e4) => {
        if (e4.showUnidentifiedData)
          return false;
        if (!e4.system.carried)
          return false;
        const t3 = getProperty(e4, "system.aura.school"), s3 = getProperty(e4, "system.cl");
        return "string" == typeof t3 && t3.length > 0 && "number" == typeof s3 && s3 > 0;
      }).map((e4) => {
        const t3 = {};
        t3.name = e4.name, t3.img = e4.img, t3.id = e4.id, t3.cl = getProperty(e4, "system.cl"), t3.school = getProperty(e4, "system.aura.school"), null != CONFIG.FFD20.spellSchools[t3.school] && (t3.school = CONFIG.FFD20.spellSchools[t3.school]), t3.school = `${CONFIG.FFD20.auraStrengths[e4.auraStrength]} <b>${t3.school}</b>`, t3.identifyDC = 15 + t3.cl;
        {
          const s3 = getProperty(e4, "system.quantity") || 0;
          s3 > 1 && (t3.quantity = s3);
        }
        return t3.identified = true === getProperty(e4, "system.identified"), t3;
      });
      e3.length > 0 && (s2.table_magicItems = await renderTemplate("systems/ffd20/templates/internal/table_magic-items.hbs", { items: e3, isGM: game.user.isGM }));
    }
    return s2.labels.firstClass = game.i18n.localize("FFD20.Info_FirstClass").format(`<a data-action="compendium" data-action-target="classes" title="${game.i18n.localize("FFD20.OpenCompendium")}">${game.i18n.localize("FFD20.Info_FirstClass_Compendium")}</a>`).replace(/[\n\r]+/, "<br>"), s2;
  }
  _prepareHiddenElements() {
    const e2 = getProperty(this.document, "system.attributes.spells.spellbooks");
    for (const t2 of Object.keys(e2)) {
      const e3 = `spellbook-info_${t2}`;
      null == this._hiddenElems[e3] && (this._hiddenElems[e3] = true);
    }
  }
  _prepareTraits(e2) {
    const t2 = { di: CONFIG.FFD20.damageTypes, dv: CONFIG.FFD20.damageTypes, ci: CONFIG.FFD20.conditionTypes, languages: CONFIG.FFD20.languages, armorProf: CONFIG.FFD20.armorProficiencies, weaponProf: CONFIG.FFD20.weaponProficiencies };
    for (const [s2, l2] of Object.entries(t2)) {
      const t3 = e2[s2];
      if (!t3)
        continue;
      let c2 = [];
      ["armorProf", "weaponProf", "languages"].includes(s2) ? c2 = t3.total ?? t3.value : t3.value && (c2 = t3.value instanceof Array ? t3.value : [t3.value]), t3.selected = c2.reduce((e3, t4) => (e3[t4] = l2[t4], e3), {}), t3.customTotal ? t3.customTotal.split(CONFIG.FFD20.re.traitSeparator).forEach((e3, s3) => t3.selected[`custom${s3 + 1}`] = e3.trim()) : t3.custom && t3.custom.split(CONFIG.FFD20.re.traitSeparator).forEach((e3, s3) => t3.selected[`custom${s3 + 1}`] = e3.trim()), t3.cssClass = foundry.utils.isEmpty(t3.selected) ? "inactive" : "";
    }
  }
  _prepareSenses(e2) {
    const t2 = {};
    for (const [s2, l2] of Object.entries(e2))
      if ("ll" === s2 && e2[s2].enabled)
        t2[s2] = CONFIG.FFD20.senses[s2];
      else if ("custom" === s2 && l2.length)
        l2.split(CONFIG.FFD20.re.traitSeparator).forEach((e3, s3) => {
          t2[`custom${s3 + 1}`] = e3.trim();
        });
      else if ("number" == typeof l2 && l2 > 0) {
        const e3 = ffd20.utils.convertDistance(l2);
        t2[s2] = `${CONFIG.FFD20.senses[s2]} ${e3[0]} ${e3[1]}`;
      } else
        true !== l2 || (t2[s2] = CONFIG.FFD20.senses[s2]);
    return t2;
  }
  _prepareSpellbook(e2, t2, s2) {
    const l2 = this.document.isOwner, c2 = this.document.system.attributes.spells.spellbooks[s2];
    let u2 = 0, m2 = 9;
    if (c2.autoSpellLevelCalculation) {
      u2 = c2.hasCantrips ? 0 : 1;
      const e3 = c2.cl.autoSpellLevelTotal, t3 = CONFIG.FFD20.casterProgression.castsPerDay[c2.spellPreparationMode][c2.casterType][e3 - 1];
      m2 = void 0 !== t3 ? t3.length - 1 : 0;
    }
    const d2 = {};
    for (let t3 = 0; t3 < 10; t3++) {
      const u3 = getProperty(c2, `spells.spell${t3}`);
      isNaN(u3.max) || (d2[t3] = { level: t3, usesSlots: true, spontaneous: c2.spontaneous, canCreate: true === l2, canPrepare: "character" === e2.actor.type, label: CONFIG.FFD20.spellLevels[t3], items: [], uses: u3.value || 0, baseSlots: u3.base || 0, slots: u3.max || 0, dataset: { type: "spell", level: t3, spellbook: s2 }, name: game.i18n.localize(`FFD20.SpellLevel${t3}`), spellMessage: u3.spellMessage, lowAbilityScore: u3.lowAbilityScore, known: u3.known, preparation: u3.preparation });
    }
    t2.forEach((e3) => {
      const t3 = e3.level ?? u2;
      d2[t3]?.items.push(e3);
    });
    for (let e3 = 0; e3 < 10; e3++)
      0 === d2[e3]?.items.length && (e3 > m2 || e3 < u2) && delete d2[e3];
    return d2;
  }
  _prepareSkillsets(e2) {
    const t2 = { all: { skills: {} }, adventure: { skills: {} }, background: { skills: {} } }, s2 = Object.keys(e2).sort(function(t3, s3) {
      return e2[t3].custom && !e2[s3].custom ? 1 : !e2[t3].custom && e2[s3].custom ? -1 : ("" + e2[t3].label).localeCompare(e2[s3].label);
    });
    return s2.forEach((s3) => {
      const l2 = e2[s3];
      CONFIG.FFD20.backgroundOnlySkills.includes(s3) || (t2.all.skills[s3] = l2), l2.background ? t2.background.skills[s3] = l2 : t2.adventure.skills[s3] = l2;
    }), t2;
  }
  _typeFilterCount(e2) {
    return Array.from(e2).filter((e3) => e3.startsWith("type-")).length;
  }
  _filterItems(e2, t2) {
    const s2 = this._typeFilterCount(t2) > 0;
    return e2.filter((e3) => {
      if ("feat" === e3.type && s2 && !t2.has(`type-${e3.featType}`))
        return false;
      if (ItemFFD20.isInventoryItem(e3.type)) {
        if (s2 && "loot" !== e3.type && !t2.has(`type-${e3.type}`))
          return false;
        if (s2 && "loot" === e3.type && !t2.has(`type-${e3.subType}`))
          return false;
      }
      return !("spell" === e3.type && s2 && !t2.has(`type-${e3.level}`)) && (!("buff" === e3.type && s2 && !t2.has(`type-${e3.buffType}`)) && !("attack" === e3.type && s2 && !t2.has(`type-${e3.attackType}`)));
    });
  }
  _computeEncumbrance(e2) {
    const t2 = e2.attributes.encumbrance.carriedWeight, s2 = e2.attributes.encumbrance.levels.light, l2 = e2.attributes.encumbrance.levels.medium, c2 = e2.attributes.encumbrance.levels.heavy;
    let u2, m2 = game.settings.get("ffd20", "weightUnits");
    if ("default" === m2 && (m2 = game.settings.get("ffd20", "units")), "metric" === m2)
      u2 = game.i18n.localize("FFD20.CarryLabelKg").format(t2);
    else
      u2 = game.i18n.localize("FFD20.CarryLabel").format(t2);
    return { pct: { light: Math.max(0, Math.min(100 * t2 / s2, 99.5)), medium: Math.max(0, Math.min(100 * (t2 - s2) / (l2 - s2), 99.5)), heavy: Math.max(0, Math.min(100 * (t2 - l2) / (c2 - l2), 99.5)) }, encumbered: { light: e2.attributes.encumbrance.level >= CONFIG.FFD20.encumbranceLevels.medium, medium: e2.attributes.encumbrance.level >= CONFIG.FFD20.encumbranceLevels.heavy, heavy: e2.attributes.encumbrance.carriedWeight >= e2.attributes.encumbrance.levels.heavy }, light: e2.attributes.encumbrance.levels.light, medium: e2.attributes.encumbrance.levels.medium, heavy: e2.attributes.encumbrance.levels.heavy, aboveHead: e2.attributes.encumbrance.levels.heavy, offGround: 2 * e2.attributes.encumbrance.levels.heavy, dragPush: 5 * e2.attributes.encumbrance.levels.heavy, value: e2.attributes.encumbrance.carriedWeight, carryLabel: u2 };
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.mousemove((e3) => this._moveTooltips(e3));
    const t2 = e2.find(".filter-list");
    t2.each(this._initializeFilterItemList.bind(this)), t2.on("click", ".filter-item", this._onToggleFilter.bind(this));
    {
      const t3 = e2.find(".search-input");
      t3.on("keyup change", this._searchFilterChange.bind(this)), t3.on("compositionstart compositionend", this._searchFilterCompositioning.bind(this)), this.searchRefresh = true, t3.each(function() {
        this.value.length > 0 && $(this).change();
      }), e2.find(".clear-search").on("click", this._clearSearch.bind(this));
    }
    e2.find(".item .item-name h4").click((e3) => this._onItemSummary(e3)), e2.find(".race").each((e3, t3) => {
      t3.closest(".item").dataset?.itemId && t3.addEventListener("contextmenu", (e4) => this._onItemEdit(e4));
    }), e2.find(".item-edit").on("click", this._onItemEdit.bind(this)), e2.find(".item .item-name h4").contextmenu(this._onItemEdit.bind(this)), e2.find(".quick-actions li").contextmenu(this._onItemEdit.bind(this)), e2.find(".race-container .item-control").click(this._onRaceControl.bind(this)), this.options.editable ? (e2.off("change"), e2.find("input,select,textarea").on("change", this._onChangeInput.bind(this)), e2.find("span.text-box.direct").on("click", (e3) => {
      this._onSpanTextInput(e3, this._adjustActorPropertyBySpan.bind(this));
    }), e2.find('*[data-action="input-text"]').click((e3) => this._onInputText(e3)), e2.find('*[data-action="input-text"].wheel-change').on("wheel", (e3) => this._onInputText(e3.originalEvent)), e2.find("textarea").change(this._onSubmit.bind(this)), e2.find(".config .config-control").click(this._onConfigControl.bind(this)), e2.find(".select-on-click").click(this._selectOnClick.bind(this)), e2.find(".submit-on-blur").on("blur", async (e3) => {
      await this._onSubmit(e3, { preventRender: true }), this.render();
    }), e2.find('input[name="system.attributes.hp.value"]').keypress(this._onSubmitElement.bind(this)), e2.find('input[name="system.attributes.mp.value"]').keypress(this._onSubmitElement.bind(this)), e2.find(".ability-name").click(this._onRollAbilityTest.bind(this)), e2.find(".attribute.bab .rollable").click(this._onRollBAB.bind(this)), e2.find(".attribute.cmb .rollable").click(this._onRollCMB.bind(this)), e2.find(".attribute.attack.melee .rollable").click(this._onRollMelee.bind(this)), e2.find(".attribute.attack.ranged .rollable").click(this._onRollRanged.bind(this)), e2.find(".attribute.initiative .rollable").click(this._onRollInitiative.bind(this)), e2.find(".saving-throw .rollable").click(this._onRollSavingThrow.bind(this)), e2.find("span.text-box.skill-rank").on("click", (e3) => {
      this._onSpanTextInput(e3, this._adjustActorPropertyBySpan.bind(this));
    }), e2.find(".skill.arbitrary .skill-create").click((e3) => this._onArbitrarySkillCreate(e3)), e2.find(".sub-skill > .skill-controls > .skill-delete").click((e3) => this._onArbitrarySkillDelete(e3)), e2.find(".skill-controls.skills .skill-create").click((e3) => this._onSkillCreate(e3)), e2.find(".sub-skill > .skill-controls > .skill-edit").on("click", (e3) => this._onSkillEdit(e3)), e2.find(".skill > .skill-controls > .skill-edit").on("click", (e3) => this._onSkillEdit(e3)), e2.find(".skill > .skill-controls > .skill-delete").click((e3) => this._onSkillDelete(e3)), e2.find(".item-actions a").mouseup((e3) => this._quickItemActionControl(e3)), e2.find(".skill > .rollable").click(this._onRollSkillCheck.bind(this)), e2.find(".sub-skill > .rollable").click(this._onRollSubSkillCheck.bind(this)), e2.find("a.compendium-entry").click(this._onOpenCompendiumEntry.bind(this)), e2.find(".trait-selector").click(this._onTraitSelector.bind(this)), e2.find(".generic-defenses .rollable").click((e3) => {
      this.document.rollDefenses();
    }), e2.find(".rest").click(this._onRest.bind(this)), e2.find("button.pointbuy-calculator").click(this._onPointBuyCalculator.bind(this)), e2.find(".control.alignment").click(this._onControlAlignment.bind(this)), e2.find(".senses-selector").on("click", this._onSensesSelector.bind(this)), e2.find(".item-create").on("click", (e3) => this._onItemCreate(e3)), e2.find(".item-delete").on("click", this._onItemDelete.bind(this)), e2.find(".item-give").on("click", this._onItemGive.bind(this)), e2.find(".item-split:not(.disabled)").on("click", this._onItemSplit.bind(this)), e2.find(".item .item-image").click((e3) => this._onItemRoll(e3)), e2.find("a.item-control.item-quantity-add").click((e3) => {
      this._quickChangeItemQuantity(e3, 1);
    }), e2.find("a.item-control.item-quantity-subtract").click((e3) => {
      this._quickChangeItemQuantity(e3, -1);
    }), e2.find("a.item-control.item-equip").click((e3) => {
      this._quickEquipItem(e3);
    }), e2.find("a.item-control.item-carry").click((e3) => {
      this._quickCarryItem(e3);
    }), e2.find("a.item-control.item-identify").click((e3) => {
      this._quickIdentifyItem(e3);
    }), e2.find("a.item-control.item-toggle-data").click(this._itemToggleData.bind(this)), e2.find("a.item-control.item-duplicate").click(this._duplicateItem.bind(this)), e2.find(".quick-actions li").click(this._quickAction.bind(this)), e2.find("a.convert-currency").click(this._convertCurrency.bind(this)), e2.find(".inventory-body .item-uses span.text-box.value").on("wheel", this._setFeatUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setFeatUses.bind(this));
    }), e2.find(".attacks-body .item-uses span.text-box.value").on("wheel", this._setFeatUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setFeatUses.bind(this));
    }), e2.find(".feats-body .item-uses span.text-box.value").on("wheel", this._setFeatUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setFeatUses.bind(this));
    }), e2.find(".level-up").click(this._onLevelUp.bind(this)), e2.find(".item-list .spell-uses span.text-box[data-type='amount']").on("wheel", this._setSpellUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setSpellUses.bind(this));
    }), e2.find(".item-list .spell-uses span.text-box[data-type='max']").on("wheel", this._setMaxSpellUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setMaxSpellUses.bind(this));
    }), e2.find(".spell-uses .spell-slots.spontaneous span.text-box").on("wheel", this._adjustActorPropertyBySpan.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._adjustActorPropertyBySpan.bind(this));
    }), e2.find(".spell-uses .spell-max span.text-box").on("click", (e3) => {
      this._onSpanTextInput(e3, this._onSubmit.bind(this));
    }), e2.find(".spell-points-current .value span.text-box").on("wheel", this._adjustActorPropertyBySpan.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._adjustActorPropertyBySpan.bind(this));
    }), e2.find(".spellcasting-concentration.rollable").click(this._onRollConcentration.bind(this)), e2.find(".spellcasting-cl.rollable").click(this._onRollCL.bind(this)), e2.find(".item-detail.item-active input[type='checkbox']").off("change").on("change", this._setItemActive.bind(this)), e2.find(".item-detail.item-level span.text-box").on("wheel", this._setBuffLevel.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setBuffLevel.bind(this));
    }), e2.find("a.hide-show").click(this._hideShowElement.bind(this)), e2.find(".condition .checkbox").click(this._onToggleCondition.bind(this)), e2.find(".skill-lock-button").on("click", this._onToggleSkillLock.bind(this)), e2.find('a[data-action="compendium"]').click(this._onOpenCompendium.bind(this))) : e2.find("span.text-box").addClass("readonly");
  }
  _onSpanTextInput(e2, t2 = null) {
    const s2 = e2.currentTarget, l2 = s2.parentElement, c2 = document.createElement("INPUT");
    c2.type = "text", s2.dataset?.dtype && (c2.dataset.dtype = s2.dataset.dtype);
    let u2 = s2.innerText;
    s2.classList.contains("placeholder") && (u2 = "");
    const m2 = s2.classList.contains("no-value-cap"), d2 = s2.getAttribute("name");
    let h2;
    if (d2 && (c2.setAttribute("name", d2), u2 = getProperty(this.document, d2) ?? "", u2 && "string" != typeof u2 && (u2 = u2.toString()), d2.endsWith(".value") && !m2)) {
      const e3 = d2.replace(/\.value$/, ".max");
      h2 = getProperty(this.document, e3);
    }
    c2.value = u2;
    const p2 = ["placeholder", "direct", "allow-relative"];
    for (const e3 of s2.classList)
      p2.includes(e3) || c2.classList.add(e3);
    const g2 = s2.classList.contains("allow-relative"), y2 = parseFloat(s2.dataset.clearValue || "0");
    l2.replaceChild(c2, s2);
    let F2 = false;
    c2.addEventListener("keypress", (e3) => {
      if ("Enter" === e3.key) {
        if (F2 = true, g2) {
          const e4 = adjustNumberByStringCommand(parseFloat(u2), c2.value, h2, y2);
          c2.value = e4;
        }
        c2.value.toString() === u2.toString() ? this.render() : "function" == typeof t2 && t2.call(this, e3);
      }
    }), c2.addEventListener("focusout", (e3) => {
      if (!F2) {
        if (F2 = true, g2 && parseFloat(u2) !== parseFloat(c2.value)) {
          const e4 = adjustNumberByStringCommand(parseFloat(u2), c2.value, h2, y2);
          c2.value = e4;
        }
        c2.value.toString() === u2.toString() ? this.render() : "function" == typeof t2 && t2.call(this, e3);
      }
    }), c2.focus(), c2.select();
  }
  _moveTooltips(e2) {
    const t2 = $(e2.currentTarget), s2 = e2.clientX, l2 = e2.clientY + 24;
    t2.find(".tooltip:hover .tooltipcontent").css("left", `${s2}px`).css("top", `${l2}px`);
  }
  _onDragSkillStart(e2) {
    const t2 = e2.currentTarget;
    let s2 = t2.closest(".sub-skill"), l2 = null, c2 = null, u2 = true;
    if (s2 || (s2 = t2.closest(".skill"), u2 = false), !s2)
      return;
    u2 ? (l2 = s2.dataset.mainSkill, c2 = s2.dataset.skill) : l2 = s2.dataset.skill;
    const m2 = { type: "skill", actor: this.document.id, skill: c2 ? `${l2}.subSkills.${c2}` : l2 };
    this.document.isToken && (m2.sceneId = canvas.scene.id, m2.tokenId = this.document.token.id), e2.dataTransfer.setData("text/plain", JSON.stringify(m2));
  }
  _onDragMiscStart(e2, t2) {
    const s2 = { type: t2, actor: this.document.id };
    switch (this.document.isToken && (s2.sceneId = canvas.scene.id, s2.tokenId = this.document.token.id), t2) {
      case "concentration":
      case "cl": {
        const t3 = e2.currentTarget.closest(".tab.spellbook-group");
        s2.altType = t3.dataset.tab;
        break;
      }
    }
    e2.dataTransfer.setData("text/plain", JSON.stringify(s2));
  }
  _onDragSaveStart(e2, t2) {
    const s2 = { type: "save", altType: t2, actor: this.document.id };
    this.document.isToken && (s2.sceneId = canvas.scene.id, s2.tokenId = this.document.token.id), e2.dataTransfer.setData("text/plain", JSON.stringify(s2));
  }
  _initializeFilterItemList(e2, t2) {
    const s2 = this._filters[t2.dataset.filter], l2 = t2.querySelectorAll(".filter-item");
    for (const e3 of l2)
      s2.has(e3.dataset.filter) && e3.classList.add("active");
  }
  _onRest(e2) {
    e2.preventDefault();
    const t2 = Object.values(this.document.apps).find((e3) => e3 instanceof ActorRestDialog && e3._element);
    t2 ? t2.render(true, { focus: true }) : new ActorRestDialog(this.document).render(true);
  }
  _onItemRoll(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.document.items.get(t2);
    if (null != s2)
      return s2.displayCard();
  }
  _mouseWheelAdd(e2, t2) {
    const s2 = "INPUT" === t2.tagName.toUpperCase(), { originalEvent: l2 } = e2;
    if (l2 && l2 instanceof WheelEvent && l2.ctrlKey) {
      e2.preventDefault();
      const c2 = (s2 ? parseFloat(t2.value) : parseFloat(t2.innerText)) || 0;
      if (Number.isNaN(c2))
        return;
      const u2 = -Math.sign(l2.deltaY), m2 = parseFloat(t2.dataset.wheelStep) || 1;
      s2 ? t2.value = c2 + m2 * u2 : t2.innerText = (c2 + m2 * u2).toString();
    }
  }
  _setFeatUses(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.itemId, l2 = this.document.items.get(s2);
    this._mouseWheelAdd(e2, t2);
    const c2 = "INPUT" === t2.tagName.toUpperCase() ? Number(t2.value) : Number(t2.innerText);
    this.setItemUpdate(l2.id, "system.uses.value", c2), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._updateItems();
    }) : this._updateItems();
  }
  _setSpellUses(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget, s2 = e2.currentTarget.closest(".item").dataset.itemId, l2 = this.document.items.get(s2);
    this._mouseWheelAdd(e2, t2);
    const c2 = getProperty(l2, "system.preparation.preparedAmount"), u2 = "INPUT" === t2.tagName.toUpperCase() ? Number(t2.value) : Number(t2.innerText);
    if (this.setItemUpdate(l2.id, "system.preparation.preparedAmount", u2), c2 < u2) {
      const e3 = l2.system.preparation.maxAmount;
      this.setItemUpdate(l2.id, "system.preparation.maxAmount", Math.max(e3, u2));
    }
    e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._updateItems();
    }) : this._updateItems();
  }
  _setMaxSpellUses(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.itemId, l2 = this.document.items.get(s2);
    this._mouseWheelAdd(e2, t2);
    const c2 = getProperty(l2, "system.preparation.maxAmount"), u2 = "INPUT" === t2.tagName.toUpperCase() ? Number(t2.value) : Number(t2.innerText);
    if (this.setItemUpdate(l2.id, "system.preparation.maxAmount", Math.max(0, u2)), c2 > u2) {
      const e3 = l2.system.preparation.preparedAmount;
      this.setItemUpdate(l2.id, "system.preparation.preparedAmount", Math.min(e3, u2));
    }
    u2 < 0 && ("INPUT" === t2.tagName.toUpperCase() ? t2.value = 0 : t2.innerText = 0), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._updateItems();
    }) : this._updateItems();
  }
  _adjustActorPropertyBySpan(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget;
    this._mouseWheelAdd(e2, t2);
    const s2 = "INPUT" === t2.tagName.toUpperCase() ? t2.value : t2.innerText;
    let l2 = "STRING" === t2.dataset.dtype?.toUpperCase() ? s2 : Number(s2);
    const c2 = t2.getAttribute("name");
    c2.match(/^system\.abilities\.([a-zA-Z0-9]+)\.value$/) && (l2 = Number.isNaN(parseInt(l2)) ? null : parseInt(l2)), c2 && (this._pendingUpdates[c2] = l2), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._onSubmit(e3);
    }) : this._onSubmit(e2);
  }
  _setBuffLevel(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.itemId, l2 = this.document.items.get(s2);
    this._mouseWheelAdd(e2, t2);
    const c2 = "INPUT" === t2.tagName.toUpperCase() ? Number(t2.value) : Number(t2.innerText), u2 = t2.getAttribute("name");
    u2 && (this._pendingUpdates[u2] = c2), this.setItemUpdate(l2.id, "system.level", c2), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._updateItems();
    }) : this._updateItems();
  }
  _hideShowElement(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = this.element.find(`.${t2.dataset.for}`);
    s2.hasClass("hidden") ? ($(t2).find("i").removeClass("fa-arrow-circle-down").addClass("fa-arrow-circle-up"), s2.removeClass("hidden"), s2.hide(), s2.slideDown(200), this._hiddenElems[t2.dataset.for] = false) : ($(t2).find("i").removeClass("fa-arrow-circle-up").addClass("fa-arrow-circle-down"), s2.slideUp(200, () => s2.addClass("hidden")), this._hiddenElems[t2.dataset.for] = true);
  }
  _onToggleCondition(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.name, s2 = !getProperty(this.actor, t2), l2 = t2.replace(/(\w+)$/, (e3) => `-=${e3}`), c2 = s2 ? { [t2]: true } : { [l2]: null };
    this.actor.update(c2);
  }
  _onToggleSkillLock(e2) {
    return e2.preventDefault(), this._skillsLocked = !this._skillsLocked, this.render();
  }
  _onOpenCompendium(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.actionTarget;
    ffd20.applications.compendiums[t2].render(true, { focus: true });
  }
  _onRollConcentration(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).closest(".spellbook-group").data("tab");
    this.document.rollConcentration(t2, { skipDialog: getSkipActionPrompt() });
  }
  _onRollCL(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).closest(".spellbook-group").data("tab");
    this.document.rollCL(t2, { skipDialog: getSkipActionPrompt() });
  }
  _setItemActive(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.document.items.get(t2), l2 = $(e2.currentTarget).prop("checked");
    this.setItemUpdate(s2.id, "system.active", l2), this._updateItems();
  }
  _onLevelUp(e2) {
    e2.preventDefault;
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.actor.items.get(t2), l2 = Object.values(this.actor.apps).find((e3) => e3 instanceof LevelUpForm && e3._element && e3.object === s2);
    l2 ? l2.render(true, { focus: true }) : new LevelUpForm(s2).render(true);
  }
  _onItemSummary(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".item");
    this.openItemSummary(t2);
  }
  openItemSummary(e2, { instant: t2 = false } = {}) {
    const s2 = e2.attr("data-item-collection") ?? "items", l2 = e2.attr("data-item-id"), c2 = this.document[s2].get(l2), { description: u2, properties: m2 } = c2.getChatData();
    if (this._expandedItems = this._expandedItems.filter((e3) => e3 !== l2), e2.hasClass("expanded")) {
      const s3 = e2.children(".item-summary");
      t2 ? s3.remove() : s3.slideUp(200, () => s3.remove());
    } else {
      const s3 = $(`<div class="item-summary">${u2}</div>`), c3 = $('<div class="item-properties tag-list"></div>');
      m2.forEach((e3) => c3.append(`<span class="tag">${e3}</span>`)), s3.append(c3), t2 ? e2.append(s3) : (e2.append(s3.hide()), s3.slideDown(200)), this._expandedItems.push(l2);
    }
    e2.toggleClass("expanded");
  }
  _onInputText(e2) {
    e2.preventDefault();
    let t2;
    if (e2.currentTarget.dataset.for.match(/CHILD-([0-9]+)/)) {
      const s3 = parseInt(RegExp.$1);
      t2 = $(e2.currentTarget.children[s3]);
    } else
      t2 = this.element.find(e2.currentTarget.dataset.for);
    if (!t2 || t2 && t2.attr("disabled"))
      return;
    t2.prop("readonly", false), t2.attr("name", e2.currentTarget.dataset.attrName);
    const s2 = getProperty(this.document, e2.currentTarget.dataset.attrName);
    t2.attr("value", s2);
    const l2 = e2 && e2 instanceof WheelEvent;
    l2 ? this._mouseWheelAdd(e2, t2[0]) : t2.select();
    const handler = (e3) => {
      l2 ? t2[0].removeEventListener("mouseout", handler) : (t2[0].removeEventListener("focusout", handler), t2[0].removeEventListener("keydown", keyHandler)), t2[0].removeEventListener("click", handler), ("string" == typeof s2 && s2 !== t2[0].value || "number" == typeof s2 && s2 !== parseInt(t2[0].value)) && (c2 = true), c2 ? this._onSubmit(e3) : this.render();
    }, keyHandler = (e3) => {
      "Enter" === e3.key && (c2 = true, handler.call(this, e3));
    };
    let c2 = false;
    l2 ? (t2[0].addEventListener("mouseout", handler), c2 = true) : (t2[0].addEventListener("focusout", handler), t2[0].addEventListener("keydown", keyHandler)), t2[0].addEventListener("click", handler);
  }
  async _onArbitrarySkillCreate(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".skill").attr("data-skill"), s2 = this.document.system.skills[t2], l2 = { name: game.i18n.format("DOCUMENT.New", { type: game.i18n.localize("FFD20.Skill") }), ability: s2.ability, rank: 0, mod: 0, rt: s2.rt, cs: s2.cs, acp: s2.acp };
    let c2 = 1, u2 = `${t2}${c2}`;
    for (; null != s2.subSkills[u2]; )
      c2++, u2 = `${t2}${c2}`;
    const m2 = {};
    return m2[`system.skills.${t2}.subSkills.${u2}`] = l2, this.document.testUserPermission(game.user, "OWNER") && await this.document.update(m2), this._editSkill(t2, u2);
  }
  async _onSkillCreate(e2) {
    e2.preventDefault();
    const t2 = "true" === $(e2.currentTarget).parents(".skills-list").attr("data-background"), s2 = { name: game.i18n.format("DOCUMENT.New", { type: game.i18n.localize("FFD20.Skill") }), ability: "int", rank: 0, mod: 0, rt: false, cs: false, acp: false, background: t2, custom: true };
    let l2 = createTag(s2.name || "skill"), c2 = 1;
    for (; null != this.document.system.skills[l2]; )
      c2++, l2 = createTag(s2.name || "skill") + c2.toString();
    const u2 = {};
    return u2[`system.skills.${l2}`] = s2, this.document.testUserPermission(game.user, "OWNER") && await this.document.update(u2), this._editSkill(l2);
  }
  _editSkill(e2, t2) {
    return new Promise((s2) => {
      const l2 = new ffd20.applications.SkillEditor(this.document, e2, t2);
      l2.addCallback(s2), l2.render(true);
    });
  }
  _onSkillEdit(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".sub-skill").attr("data-main-skill") ?? $(e2.currentTarget).parents(".skill").attr("data-skill"), s2 = $(e2.currentTarget).parents(".sub-skill").attr("data-skill");
    return this._editSkill(t2, s2);
  }
  _onArbitrarySkillDelete(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".sub-skill").attr("data-main-skill"), s2 = this.document.system.skills[t2], l2 = $(e2.currentTarget).parents(".sub-skill").attr("data-skill"), c2 = s2?.subSkills?.[l2], u2 = `${CONFIG.FFD20.skills[t2] ?? s2.name} (${c2.name})`, deleteSkill = () => {
      const e3 = {};
      e3[`data.skills.${t2}.subSkills.-=${l2}`] = null, this.document.update(e3);
    };
    if (getSkipActionPrompt())
      deleteSkill();
    else {
      const e3 = `<p>${game.i18n.localize("FFD20.DeleteSkillConfirmation")}</p>`;
      Dialog.confirm({ title: game.i18n.localize("FFD20.DeleteSkillTitle").format(u2), content: e3, yes: () => {
        deleteSkill();
      }, rejectClose: true });
    }
  }
  _onSkillDelete(e2) {
    if (e2.preventDefault(), !this.document.testUserPermission(game.user, "OWNER"))
      return;
    const t2 = $(e2.currentTarget).parents(".skill").attr("data-skill"), s2 = this.document.system.skills[t2], l2 = CONFIG.FFD20.skills[t2] ?? s2.name, deleteSkill = () => {
      const e3 = {};
      e3[`data.skills.-=${t2}`] = null, this.document.update(e3);
    };
    if (getSkipActionPrompt())
      deleteSkill();
    else {
      const e3 = `<p>${game.i18n.localize("FFD20.DeleteSkillConfirmation")}</p>`;
      Dialog.confirm({ title: game.i18n.localize("FFD20.DeleteSkillTitle").format(l2), content: e3, yes: () => {
        deleteSkill();
      }, rejectClose: true });
    }
  }
  async _onRaceControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("edit"))
      this._onItemEdit(e2);
    else if (this.isEditable)
      if (t2.classList.contains("add")) {
        const e3 = { name: "New Race", type: "race" };
        this.document.createEmbeddedDocuments("Item", [e3]);
      } else
        t2.classList.contains("delete") && this._onItemDelete(e2);
  }
  async _onPointBuyCalculator(e2) {
    e2.preventDefault();
    const t2 = Object.values(this.document.apps).find((e3) => e3 instanceof PointBuyCalculator && e3._element);
    t2 ? t2.render(true, { focus: true }) : new PointBuyCalculator(this.document).render(true);
  }
  async _onSensesSelector(e2) {
    e2.preventDefault();
    const t2 = Object.values(this.document.apps).find((e3) => e3 instanceof ffd20.applications.SensesSelector && e3._element);
    t2 ? t2.render(true, { focus: true }) : new ffd20.applications.SensesSelector(this.document).render(true);
  }
  async _onControlAlignment(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = Object.entries(CONFIG.FFD20.alignmentsShort).reduce((e3, t3) => (e3.push({ value: t3[0], label: game.i18n.localize(t3[1]) }), e3), []);
    new Widget_ItemPicker((e3) => {
      this.document.update({ "system.details.alignment": e3 });
    }, { items: s2, columns: 3 }).render($(t2));
  }
  async _quickItemActionControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), l2 = this.document.items.get(s2);
    t2.classList.contains("item-attack") && await l2.use({ ev: e2, skipDialog: getSkipActionPrompt() });
  }
  async _quickChangeItemQuantity(e2, t2 = 1) {
    e2.preventDefault();
    const s2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), l2 = this.document.items.get(s2), c2 = getProperty(l2, "system.quantity") || 0;
    let u2 = Math.max(0, c2 + t2);
    "container" === l2.type && (u2 = Math.min(u2, 1)), this.setItemUpdate(l2.id, "system.quantity", u2), this._updateItems();
  }
  async _quickEquipItem(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), s2 = this.document.items.get(t2);
    hasProperty(s2, "system.equipped") && (this.setItemUpdate(s2.id, "system.equipped", !s2.system.equipped), this._updateItems());
  }
  async _quickCarryItem(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), s2 = this.document.items.get(t2);
    hasProperty(s2, "system.carried") && s2.update({ "system.carried": !s2.system.carried });
  }
  async _quickIdentifyItem(e2) {
    if (e2.preventDefault(), !game.user.isGM) {
      const e3 = game.i18n.localize("FFD20.ErrorCantIdentify");
      return console.error(e3), ui.notifications.error(e3);
    }
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.document.items.get(t2);
    hasProperty(s2, "system.identified") && s2.update({ "system.identified": !s2.system.identified });
  }
  async _itemToggleData(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(t2).parents(".item").attr("data-item-id"), l2 = this.document.items.get(s2), c2 = $(t2).attr("name") || t2.dataset.name, u2 = {};
    u2[c2] = !getProperty(l2, c2), l2.update(u2);
  }
  async _duplicateItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(t2).parents(".item").attr("data-item-id"), l2 = this.document.items.get(s2), c2 = l2.toObject();
    delete c2.id, c2.name = `${c2.name} (Copy)`, l2.isPhysical && (c2.identifiedName = c2.name), c2.links && (c2.links = {}), this.document.createEmbeddedDocuments("Item", [c2]);
  }
  _quickAction(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.itemId, s2 = this.document.items.get(t2);
    if (s2)
      return s2.use({ skipDialog: getSkipActionPrompt() });
  }
  _convertCurrency(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.dataset.type, l2 = t2.dataset.category;
    this.document.convertCurrency(l2, s2);
  }
  _onItemCreate(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.dataset.type, l2 = `New ${(t2.dataset.typeName || t2.dataset.type).capitalize()}`, c2 = { name: l2, type: s2, system: duplicate(t2.dataset) };
    delete c2.system.type;
    for (const [e3, t3] of Object.entries(c2))
      Number.isNaN(parseFloat(t3)) || (c2[e3] = parseFloat(t3));
    const getSubtype = (e3) => getProperty(e3, `system.${e3.type}Type`), u2 = getSubtype(c2), m2 = this.document.items.filter((e3) => {
      return e3.type === s2 && (t3 = e3, u2 ? u2 === getSubtype(t3) : "spell" !== s2 || c2.spellbook === t3.system.spellbook && c2.level === t3.system.level);
      var t3;
    }).sort((e3, t3) => e3.sort - t3.sort);
    if (m2.length) {
      c2.sort = m2[0].sort - 10;
      let e3 = 2;
      for (; m2.find((e4) => e4.name === c2.name); )
        c2.name = `${l2} (${e3++})`;
    }
    return "spell" === s2 && "string" == typeof c2.system?.level && (c2.system.level = parseInt(c2.system.level)), this.document.createEmbeddedDocuments("Item", [c2]);
  }
  _onItemEdit(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item"), s2 = this.document.items.get(t2.dataset.itemId);
    Object.values(s2.apps).find((e3) => e3 instanceof ItemSheet && e3.document === s2 && null != e3._element), s2.sheet.render(true, { focus: true });
  }
  _onItemDelete(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.disabled)
      return;
    const s2 = e2.currentTarget.closest(".item"), l2 = this.document.items.get(s2.dataset.itemId);
    if (getSkipActionPrompt())
      l2.delete();
    else {
      t2.disabled = true;
      const e3 = `<p>${game.i18n.localize("FFD20.DeleteItemConfirmation")}</p>`;
      Dialog.confirm({ title: game.i18n.localize("FFD20.DeleteItemTitle").format(l2.name), content: e3, yes: () => {
        l2.delete(), t2.disabled = false;
      }, no: () => t2.disabled = false, rejectClose: true }).then(null, () => t2.disabled = false);
    }
  }
  async _onItemGive(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.document.items.get(t2), l2 = game.actors.contents.filter((e3) => e3.testUserPermission(game.user, "OWNER") && e3 !== this.document);
    l2.push(...this.document.items.filter((e3) => "container" === e3.type)), l2.push(...game.items.contents.filter((e3) => e3.testUserPermission(game.user, "OWNER") && "container" === e3.type)), l2.push(...game.actors.contents.filter((e3) => e3.hasPlayerOwner && e3 !== this.document && !e3.testUserPermission(game.user, "OWNER")));
    const c2 = await dialogGetActor("Give item to actor", l2);
    if (!c2)
      return;
    let u2;
    if ("actor" === c2.type ? u2 = game.actors.get(c2.id) : "item" === c2.type && (u2 = this.document.items.get(c2.id), u2 || (u2 = game.items.get(c2.id))), u2 && u2 !== s2) {
      const e3 = s2.toObject();
      if (u2 instanceof Actor) {
        if (!u2.testUserPermission(game.user, "OWNER"))
          return void game.socket.emit("system.ffd20", { eventType: "giveItem", targetActor: u2.uuid, item: s2.uuid });
        await u2.createEmbeddedDocuments("Item", [e3]);
      } else
        u2 instanceof Item && await u2.createContainerContent(e3);
      console.log({ sheet: this, document: this.document }), await this.document.deleteEmbeddedDocuments("Item", [s2.id]);
    }
  }
  async _onItemSplit(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.document.items.get(t2);
    new Dialog({ title: game.i18n.format("FFD20.Dialog.SplitItem.Title", { 0: s2.name }), content: `<p>${game.i18n.format("FFD20.Dialog.SplitItem.Desc")}</p><input type="text" name="value" value="1" />`, buttons: { split: { label: game.i18n.localize("FFD20.Split"), callback: async (e3) => {
      let t3 = parseInt(e3.find('[name="value"]').val());
      if (t3 = Math.min(s2.system.quantity - 1, Math.max(0, t3)), t3 > 0) {
        await s2.update({ "system.quantity": Math.max(0, s2.system.quantity - t3) });
        const e4 = s2.toObject();
        e4.system.quantity = t3, await CONFIG.Item.documentClass.createDocuments([e4], { parent: this.document });
      }
    } } }, default: "split" }).render(true);
  }
  _onSubmitElement(e2) {
    if ("Enter" === e2.key) {
      const t2 = e2.currentTarget;
      if (t2.name) {
        const s2 = getProperty(this.document.system, t2.name);
        ("number" == typeof s2 && s2 === parseFloat(t2.value) || "string" == typeof s2 && s2 === t2.value) && this._onSubmit(e2);
      }
    }
  }
  _onRollAbilityTest(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".ability").dataset.ability;
    this.document.rollAbilityTest(t2, { skipDialog: getSkipActionPrompt() });
  }
  _onRollBAB(e2) {
    e2.preventDefault(), this.document.rollBAB({ skipDialog: getSkipActionPrompt() });
  }
  _onRollMelee(e2) {
    e2.preventDefault(), this.document.rollAttack({ melee: true, skipDialog: getSkipActionPrompt() });
  }
  _onRollRanged(e2) {
    e2.preventDefault(), this.document.rollAttack({ melee: false, skipDialog: getSkipActionPrompt() });
  }
  _onRollCMB(e2) {
    e2.preventDefault(), this.document.rollCMB({ skipDialog: getSkipActionPrompt() });
  }
  _onRollInitiative(e2) {
    e2.preventDefault(), this.document.rollInitiative({ createCombatants: true, rerollInitiative: game.user.isGM, skipDialog: getSkipActionPrompt() });
  }
  _onRollSavingThrow(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.parentElement.dataset.savingthrow;
    this.document.rollSavingThrow(t2, { skipDialog: getSkipActionPrompt() });
  }
  _prepareItems(t2) {
    const s2 = { weapon: { label: game.i18n.localize("FFD20.InventoryWeapons"), canCreate: true, hasActions: true, items: [], canEquip: true, dataset: { type: "weapon" } }, equipment: { label: game.i18n.localize("FFD20.InventoryArmorEquipment"), canCreate: true, hasActions: true, items: [], canEquip: true, dataset: { type: "equipment" }, hasSlots: true }, consumable: { label: game.i18n.localize("FFD20.InventoryConsumables"), canCreate: true, hasActions: true, items: [], canEquip: false, dataset: { type: "consumable" } }, gear: { label: CONFIG.FFD20.lootTypes.gear, canCreate: true, hasActions: false, items: [], canEquip: true, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeGearSingle"), "sub-type": "gear" } }, ammo: { label: CONFIG.FFD20.lootTypes.ammo, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeAmmoSingle"), "sub-type": "ammo" } }, misc: { label: CONFIG.FFD20.lootTypes.misc, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.Misc"), "sub-type": "misc" } }, tradeGoods: { label: CONFIG.FFD20.lootTypes.tradeGoods, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeTradeGoodsSingle"), "sub-type": "tradeGoods" } }, container: { label: game.i18n.localize("FFD20.InventoryContainers"), canCreate: true, hasActions: false, items: [], dataset: { type: "container" } } };
    let [l2, c2, u2, m2, d2] = t2.items.reduce((e2, t3) => {
      const s3 = t3.document;
      t3.img = t3.img || CONST.DEFAULT_TOKEN, t3.isStack = !!t3.quantity && t3.quantity > 1, t3.hasUses = t3.uses && t3.uses.max > 0, t3.isCharged = ["day", "week", "charges"].includes(t3.uses?.per), t3.price = s3 ? s3.getValue({ recursive: false, sellValue: 1 }) : false === t3.identified ? t3.unidentified.price : t3.price;
      const l3 = null != t3.quantity ? t3.quantity : 1, c3 = null != t3.uses?.value ? t3.uses.value : 1;
      return t3.empty = l3 <= 0 || t3.isCharged && c3 <= 0, "spell" === t3.type ? e2[1].push(t3) : "feat" === t3.type ? e2[2].push(t3) : "class" === t3.type ? e2[3].push(t3) : "attack" === t3.type ? e2[4].push(t3) : ItemFFD20.isInventoryItem(t3.type) && e2[0].push(t3), e2;
    }, [[], [], [], [], []]);
    l2 = this._filterItems(l2, this._filters.inventory, this._filters.search.inventory), u2 = this._filterItems(u2, this._filters.features);
    const h2 = {}, p2 = t2.system.attributes.spells.spellbooks;
    for (const [e2, s3] of Object.entries(p2)) {
      let l3 = c2.filter((t3) => t3.spellbook === e2);
      l3 = this._filterItems(l3, this._filters[`spellbook-${e2}`]), h2[e2] = { data: this._prepareSpellbook(t2, l3, e2), prepared: l3.filter((e3) => "prepared" === e3.preparation.mode && e3.preparation.prepared).length, orig: s3 };
    }
    let g2 = game.settings.get("ffd20", "weightUnits");
    "default" === g2 && (g2 = game.settings.get("ffd20", "units"));
    for (const e2 of l2) {
      const t3 = "loot" === e2.type ? e2.subType || "gear" : e2.subType;
      e2.quantity = e2.quantity || 0, e2.totalWeight = Math.roundDecimals(e2.weight.converted.total, 1), e2.units = "metric" === g2 ? game.i18n.localize("FFD20.Kgs") : game.i18n.localize("FFD20.Lbs"), null != s2[e2.type] && s2[e2.type].items.push(e2), null != t3 && null != s2[t3] && s2[t3].items.push(e2);
    }
    const y2 = {}, F2 = { items: [], canCreate: true, hasActions: true }, D2 = this.constructor.featTypeData;
    for (const [t3, s3] of Object.entries(e.featTypes))
      y2[t3] = mergeObject(F2, { label: e.featTypesPlurals[t3] ?? s3, dataset: { type: "feat", "type-name": game.i18n.localize(s3), "feat-type": t3 }, ...D2[t3] }, { inplace: false });
    for (const e2 of u2) {
      const t3 = e2.featType;
      e2.abilityType && "none" !== e2.abilityType ? (e2.abilityTypeShort = CONFIG.FFD20.abilityTypes[e2.abilityType].short, e2.abilityType = CONFIG.FFD20.abilityTypes[e2.abilityType].long) : (e2.abilityTypeShort = "", e2.abilityType = ""), y2[t3]?.items?.push(e2);
    }
    m2.sort((e2, t3) => t3.level - e2.level), m2.forEach((e2) => {
      "mythic" !== e2.classType && (e2.canLevelUp = true);
    });
    let k2 = t2.items.filter((e2) => "buff" === e2.type);
    k2 = this._filterItems(k2, this._filters.buffs);
    const v = { temp: { label: game.i18n.localize("FFD20.Temporary"), items: [], hasActions: false, dataset: { type: "buff", "buff-type": "temp" } }, perm: { label: game.i18n.localize("FFD20.Permanent"), items: [], hasActions: false, dataset: { type: "buff", "buff-type": "perm" } }, item: { label: game.i18n.localize("FFD20.Item"), items: [], hasActions: false, dataset: { type: "buff", "buff-type": "item" } }, misc: { label: game.i18n.localize("FFD20.Misc"), items: [], hasActions: false, dataset: { type: "buff", "buff-type": "misc" } } };
    for (const e2 of k2) {
      const t3 = e2.buffType;
      v[t3] && v[t3].items.push(e2);
    }
    d2 = this._filterItems(d2, this._filters.attacks);
    const C2 = { weapon: { label: game.i18n.localize("FFD20.AttackTypeWeaponPlural"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "weapon" } }, natural: { label: game.i18n.localize("FFD20.AttackTypeNaturalPlural"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "natural" } }, ability: { label: game.i18n.localize("FFD20.AttackTypeAbilityPlural"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "ability" } }, racialAbility: { label: game.i18n.localize("FFD20.AttackTypeRacialPlural"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "racialAbility" } }, item: { label: game.i18n.localize("FFD20.Items"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "item" } }, misc: { label: game.i18n.localize("FFD20.Misc"), items: [], canCreate: true, initial: false, showTypes: false, dataset: { type: "attack", "attack-type": "misc" } } };
    for (const e2 of d2) {
      const t3 = e2.attackType;
      C2[t3] && C2[t3].items.push(e2);
    }
    {
      const e2 = [{ key: "inventory", section: s2 }, { key: "features", section: y2 }, { key: "buffs", section: v }, { key: "attacks", section: C2 }];
      for (const [t3, s3] of Object.entries(h2))
        e2.push({ key: `spellbook-${t3}`, section: s3.data });
      for (const t3 of e2)
        for (const [e3, s3] of Object.entries(t3.section)) {
          const l3 = this._typeFilterCount(this._filters[t3.key]);
          l3 > 0 && 0 === s3.items.length && (s3._hidden = true), 1 === l3 && this._filters[t3.key].has(`type-${e3}`) && (s3._hidden = false);
        }
    }
    t2.inventory = s2, t2.spellbookData = h2, t2.features = y2, t2.buffs = v, t2.attacks = C2, t2.classes = m2, t2.quickActions = this.document.getQuickActions();
  }
  _onRollSkillCheck(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.parentElement.dataset.skill;
    this.document.rollSkill(t2, { skipDialog: getSkipActionPrompt() });
  }
  _onRollSubSkillCheck(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.parentElement.dataset.mainSkill, s2 = e2.currentTarget.parentElement.dataset.skill;
    this.document.rollSkill(`${t2}.subSkills.${s2}`, { skipDialog: getSkipActionPrompt() });
  }
  async _onOpenCompendiumEntry(e2) {
    const t2 = e2.currentTarget.dataset.compendiumEntry, s2 = await fromUuid(t2);
    s2 instanceof JournalEntryPage ? s2.parent.sheet.render(true, { pageId: s2.id }) : s2.sheet.render(true);
  }
  _onToggleFilter(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = this._filters[t2.parentElement.dataset.filter], l2 = t2.dataset.filter, c2 = this._typeFilterCount(s2);
    if (game.settings.get("ffd20", "invertSectionFilterShiftBehaviour") ? !e2.shiftKey : e2.shiftKey)
      for (const e3 of Array.from(s2))
        e3.startsWith("type-") && (e3 !== l2 || c2 > 1) && s2.delete(e3);
    s2.has(l2) ? s2.delete(l2) : s2.add(l2), this.render();
  }
  _searchFilterCommit(e2) {
    const t2 = this.actor, s2 = this._filters.search[e2.target.dataset.category].toLowerCase(), l2 = e2.target.dataset.category;
    if (this.effectiveSearch[l2] === s2 && !this.searchRefresh)
      return;
    this.effectiveSearch[l2] = s2, this.searchRefresh = false;
    $(e2.target).closest(".tab").find(".item-list .item").each(function() {
      const e3 = $(this);
      if (s2?.length > 0) {
        ((e4) => e4.toLowerCase().includes(s2))(t2.items.get(this.dataset.itemId).name) ? e3.show() : e3.hide();
      } else
        e3.show();
    });
  }
  _clearSearch(e2) {
    const t2 = $(e2.target).prev(".search-input");
    this._filters.search[t2.get(0).dataset.category] = "", t2.val("").change();
  }
  _searchFilterCompositioning(e2) {
    this.searchCompositioning = "compositionstart" === e2.type;
  }
  _searchFilterChange(e2) {
    e2.preventDefault(), e2.stopPropagation();
    const t2 = e2.target.value, s2 = e2.target.dataset.category, l2 = this._filters.search[s2] !== t2;
    (this.searchCompositioning || l2) && clearTimeout(this.searchDelayEvent), this.searchCompositioning || (this._filters.search[s2] = t2, "keyup" === e2.type ? l2 && (this.searchDelayEvent = setTimeout(() => this._searchFilterCommit(e2), this.searchDelay)) : this._searchFilterCommit(e2));
  }
  _onTraitSelector(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.parentElement.querySelector("label"), l2 = { name: s2.getAttribute("for"), title: s2.innerText, subject: t2.dataset.options, choices: CONFIG.FFD20[t2.dataset.options] }, c2 = Object.values(this.document.apps).find((e3) => e3 instanceof ActorTraitSelector && e3.options.name === l2.name && e3._element);
    c2 ? c2.render(true, { focus: true }) : new ActorTraitSelector(this.document, l2).render(true);
  }
  setItemUpdate(e2, t2, s2) {
    let l2 = this._itemUpdates.filter((t3) => t3._id === e2)[0];
    null == l2 && (l2 = { _id: e2 }, this._itemUpdates.push(l2)), l2[t2] = s2;
  }
  async _render(...e2) {
    let t2 = this.element.find(":focus");
    t2 = t2.length ? t2[0] : null, t2?.name?.match(/^system\.skills\.(?:[a-zA-Z0-9]*)\.name$/) && t2.blur();
    const s2 = await super._render(...e2);
    return this._createPlaceholders(this.element), this.element, game.settings.get("ffd20", "accessibilityConfig"), s2;
  }
  async _renderInner(...e2) {
    const t2 = await super._renderInner(...e2);
    for (const e3 of this._expandedItems)
      if (this.object.items.has(e3)) {
        const s2 = t2.find(`.item-list>.item[data-item-id="${e3}"]`);
        s2.length && this.openItemSummary(s2, { instant: true });
      } else
        this._expandedItems.findSplice((t3) => t3 === e3);
    return t2;
  }
  async _onSubmit(e2, { updateData: t2 = null, preventClose: s2 = false, preventRender: l2 = false } = {}) {
    e2.preventDefault(), this._submitQueued = false, await super._onSubmit(e2, { updateData: t2, preventClose: s2, preventRender: l2 }), await this._updateItems();
  }
  async _updateItems() {
    const e2 = this._itemUpdates;
    this._itemUpdates = [];
    for (const t2 of e2) {
      const e3 = this.document.items.get(t2._id);
      e3 ? (e3.memorizeVariables(), delete t2._id, await e3.update(t2)) : console.error("Item update for non-existing item:", t2._id, t2);
    }
  }
  async _onDropCurrency(e2, t2) {
    const s2 = t2.tokenId ? game.actors.tokens[t2.tokenId] : t2.actorId;
    return new CurrencyTransfer({ actor: s2, container: t2.containerId, alt: t2.alt }, { actor: this.actor, amount: Object.fromEntries([[t2.currency, parseInt(t2.amount)]]) }).render(true);
  }
  async _onDropItem(e2, t2) {
    if (!this.actor.isOwner)
      return false;
    const s2 = await ItemFFD20.implementation.fromDropData(t2), l2 = s2.toObject();
    if (s2.parent?.uuid === this.actor.uuid && !t2.containerId)
      return this._onSortItem(e2, l2);
    if (t2.containerId) {
      const e3 = this.actor.allItems.find((e4) => e4.id === t2.containerId);
      e3 && e3.deleteContainerContent(l2._id);
    }
    return this._alterDropItemData(l2), this._onDropItemCreate(l2);
  }
  _alterDropItemData(e2) {
    "spell" === e2.type && (e2.system.spellbook = this.currentSpellbookKey);
  }
  _getSortSiblings(e2) {
    return this.document.items.filter((t2) => ItemFFD20.isInventoryItem(e2.data.type) ? ItemFFD20.isInventoryItem(t2.data.type) : t2.data.type === e2.data.type && t2.data.id !== e2.data.id);
  }
  async _onDropItemCreate(e2) {
    if ("spell" === e2.type && "spellbook" !== this.currentPrimaryTab) {
      const t3 = await createConsumableSpellDialog(e2);
      if ("spell" !== t3)
        return !!t3 && this.document.createEmbeddedDocuments("Item", [t3]);
    }
    if (!("class" !== e2.type || "mythic" === getProperty(e2, "system.classType") || event && event.shiftKey)) {
      if (await new Promise((t3) => {
        new Dialog({ title: game.i18n.localize("FFD20.AddClass"), content: `<div class="ffd20"><p>${game.i18n.localize("FFD20.Info.AddClassDialog_Desc")}</p><div class="help-text"><i class="fas fa-info-circle"></i> ${game.i18n.localize("FFD20.Info.AddClassDialog")}</div></div>`, buttons: { normal: { icon: '<i class="fas fa-hat-wizard"></i>', label: game.i18n.localize("FFD20.Normal"), callback: () => {
          LevelUpForm.addClassWizard(this.actor, e2).then(() => {
            t3(true);
          });
        } }, raw: { icon: '<i class="fas fa-file"></i>', label: game.i18n.localize("FFD20.Raw"), callback: () => {
          t3(false);
        } } }, close: () => {
          t3(true);
        } }, { classes: ["dialog", "ffd20", "add-character-class"] }).render(true);
      }))
        return false;
    }
    e2.id && delete e2.id;
    const t2 = this.document;
    return this.document.createEmbeddedDocuments("Item", [e2]).then((e3) => t2.items.get(e3.id));
  }
  _onDragStart(e2) {
    const t2 = e2.target;
    if (t2.classList.contains("denomination")) {
      if (this.actor.permission < 3)
        return;
      const s2 = { actorId: this.actor.id, sceneId: this.actor.isToken ? canvas.scene?.id : null, tokenId: this.actor.isToken ? this.actor.token.id : null, type: "Currency", alt: t2.classList.contains("alt-currency"), currency: [...t2.classList].find((e3) => /[pgsc]p/.test(e3)), amount: parseInt(t2.nextElementSibling.textContent || t2.nextElementSibling.value) };
      e2.dataTransfer.setData("text/plain", JSON.stringify(s2));
    } else
      t2.dataset?.skill ? this._onDragSkillStart(e2) : t2.dataset?.attribute ? this._onDragMiscStart(e2, t2.dataset.attribute) : t2.dataset?.drag ? this._onDragMiscStart(e2, t2.dataset.drag) : t2.dataset?.savingthrow ? this._onDragSaveStart(e2, t2.dataset.savingthrow) : super._onDragStart(e2);
  }
  async _onConfigControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(t2).attr("for"), c2 = this.element;
    if ($(t2).css("display", "none"), "cr" === s2) {
      const e3 = c2.find('input[for="system.details.cr"]');
      e3.attr("value", l.fromNumber(this.document.system.details.cr.base)), e3.attr("name", "system.details.cr.base"), e3.prop("disabled", false), e3.focus(), e3.select();
    } else if ("spellSlots" === s2) {
      const e3 = $(t2).closest(".spell-uses").find(".base");
      e3.css("display", "block"), e3.focus(), e3.select();
    }
  }
  _selectOnClick(e2) {
    e2.preventDefault();
    e2.currentTarget.select();
  }
  _updateObject(e2, t2) {
    const s2 = t2["system.details.cr.base"];
    "string" == typeof s2 && (t2["system.details.cr.base"] = l.fromString(s2));
    {
      const e3 = this.element.find("*[data-name]"), s3 = {};
      for (const t3 of e3) {
        const e4 = t3.dataset.name;
        let l2;
        "INPUT" === t3.nodeName ? l2 = t3.value : "SELECT" === t3.nodeName && (l2 = t3.options[t3.selectedIndex].value), "Number" === t3.dataset.dtype ? l2 = Number(l2) : "Boolean" === t3.dataset.dtype && (l2 = Boolean(l2)), getProperty(this.document.system, e4) !== l2 && (s3[e4] = l2);
      }
      for (const [e4, l2] of Object.entries(s3))
        t2[e4] = l2;
    }
    for (const [e3, s3] of Object.entries(this._pendingUpdates))
      t2[e3] = s3;
    return this._pendingUpdates = {}, this.searchRefresh = true, super._updateObject(e2, t2);
  }
  calculateTotalItemValue({ inLowestDenomination: e2 = false } = {}) {
    const t2 = this.document.items.filter((e3) => null != e3.system.price), s2 = t2.reduce((e3, t3) => e3 + t3.getValue({ sellValue: 1, inLowestDenomination: true }), 0);
    return e2 ? s2 : s2 / 100;
  }
  calculateSellItemValue({ inLowestDenomination: e2 = false } = {}) {
    const t2 = this.document.items.filter((e3) => null != e3.system.price), s2 = this.document.getFlag("ffd20", "sellMultiplier") || 0.5, l2 = t2.reduce((e3, t3) => e3 + t3.getValue({ sellValue: s2, inLowestDenomination: true }), 0);
    return e2 ? l2 : l2 / 100;
  }
  _createPlaceholders(e2) {
    const t2 = e2.find("span[data-placeholder]");
    for (const e3 of t2)
      e3.innerText || (e3.classList.add("placeholder"), e3.innerText = e3.dataset.placeholder);
  }
}
class ActorSheetFFD20Character extends ActorSheetFFD20 {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "sheet", "actor", "character"], width: 800, height: 840 });
  }
  get template() {
    return !game.user.isGM && this.actor.limited ? "systems/ffd20/templates/actors/limited-sheet.hbs" : "systems/ffd20/templates/actors/character-sheet.hbs";
  }
  async getData() {
    const e2 = await super.getData(), t2 = game.settings.get("ffd20", "experienceConfig");
    e2.disableExperience = t2.disableExperienceTracking, e2.minimumExperience = this.actor.getLevelExp(Math.max(0, (this.actor.system.details.level.value ?? 0) - 1)), e2.hasClasses = this.actor.items.filter((e3) => "class" === e3.type).length > 0;
    const s2 = game.settings.get("ffd20", "healthConfig");
    e2.woundThresholds = s2.variants.pc;
    const l2 = game.settings.get("ffd20", "displayIteratives"), c2 = e2.rollData.attributes.bab.total;
    if (l2) {
      const t3 = [c2];
      for (let e3 = c2 - 5; e3 > 0; e3 -= 5)
        t3.push(e3);
      e2.iteratives = `+${t3.join(" / +")}`;
    }
    if ("character" === this.actor.type && true !== game.settings.get("ffd20", "experienceConfig").disableExperienceTracking && e2.hasClasses) {
      const t3 = getProperty(this.actor, "system.details.xp");
      t3 && t3.value >= t3.max && (e2.levelUp = true);
    } else
      e2.levelUp = true;
    return e2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), this.options.editable && (e2.find(".currency-convert").click(this._onConvertCurrency.bind(this)), e2.find(".toggle-prepared").click(this._onPrepareItem.bind(this)));
  }
  _onPrepareItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.actor.items.get(t2);
    return s2.update({ "data.preparation.prepared": !s2.data.preparation.prepared });
  }
  _onLevelUp(e2) {
    e2.preventDefault;
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.actor.items.get(t2), l2 = Object.values(this.actor.apps).find((e3) => e3 instanceof LevelUpForm && e3._element);
    l2 ? l2.render(true, { focus: true }) : new LevelUpForm(s2).render(true);
  }
  async _onConvertCurrency(e2) {
    e2.preventDefault();
    const t2 = duplicate(this.actor.data.currency), s2 = { cgil: { into: "sgil", each: 10 }, sgil: { into: "gil", each: 10 }, gil: { into: "pgil", each: 10 } };
    for (const [e3, l2] of Object.entries(s2)) {
      const s3 = Math.floor(t2[e3] / l2.each);
      t2[e3] -= s3 * l2.each, t2[l2.into] += s3;
    }
    return this.actor.update({ "data.currency": t2 });
  }
}
class ActorSheetFFD20NPC extends ActorSheetFFD20 {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "sheet", "actor", "npc"], width: 800, height: 840 });
  }
  get template() {
    return !game.user.isGM && this.actor.limited ? "systems/ffd20/templates/actors/limited-sheet.hbs" : "systems/ffd20/templates/actors/npc-sheet.hbs";
  }
  async getData() {
    const e2 = await super.getData();
    try {
      e2.labels.cr = l.fromNumber(getProperty(this.actor, "system.details.cr.total"));
    } catch (t3) {
      try {
        e2.labels.cr = l.fromNumber(getProperty(this.actor, "system.details.cr"));
      } catch (t4) {
        e2.labels.cr = l.fromNumber(1);
      }
    }
    const t2 = game.settings.get("ffd20", "healthConfig");
    return e2.woundThresholds = t2.variants.npc, e2.levelUp = true, e2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find("span.text-box.cr-input").on("click", (e3) => {
      this._onSpanTextInput(e3, this._adjustCR.bind(this));
    });
  }
  _adjustCR(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = l.fromString("INPUT" === t2.tagName.toUpperCase() ? t2.value : t2.innerText), c2 = t2.getAttribute("name");
    c2 && (this._pendingUpdates[c2] = s2), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._onSubmit(e3);
    }) : this._onSubmit(e2);
  }
}
class ActorSheetFFD20NPCLite extends ActorSheetFFD20NPC {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "sheet", "actor", "npc", "lite"], width: 440, height: 640, tabs: [{ navSelector: "nav.tabs", contentSelector: "section.primary-body", initial: "summary" }] });
  }
  get template() {
    return !game.user.isGM && this.actor.limited ? "systems/ffd20/templates/actors/limited-sheet.hbs" : "systems/ffd20/templates/actors/npc-sheet-lite.hbs";
  }
  _prepareItems(e2) {
    const [t2] = e2.items.reduce((e3, t3) => (t3.img = t3.img || foundry.data.ItemData.DEFAULT_ICON, t3.hasUses = t3.uses && t3.uses.max > 0, t3.isCharged = ["day", "week", "charges"].includes(getProperty(t3, "uses.per")), null == getProperty(t3, "uses.value") || getProperty(t3, "uses.value"), "attack" === t3.type && e3[0].push(t3), e3), [[]]), s2 = { all: { label: game.i18n.localize("FFD20.ActionPlural"), items: [], canCreate: true, initial: true, showTypes: true, dataset: { type: "attack", "attack-type": "weapon" } } };
    for (const e3 of t2)
      s2.all.items.push(e3);
    e2.attacks = s2;
  }
}
class ActorSheetFFD20NPCLoot extends ActorSheetFFD20NPC {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "sheet", "actor", "npc", "loot"], tabs: [{ navSelector: "nav.tabs", contentSelector: "section.primary-body", initial: "inventory" }], width: 620, height: 420 });
  }
  get template() {
    return "systems/ffd20/templates/actors/npc-sheet-loot.hbs";
  }
  get currentPrimaryTab() {
    return "inventory";
  }
  async getData() {
    const e2 = await super.getData();
    e2.isLootSheet = true, e2.sellMultiplier = this.actor.getFlag("ffd20", "sellMultiplier");
    const t2 = this.calculateTotalItemValue({ inLowestDenomination: true }) + this.actor.mergeCurrency({ inLowestDenomination: true }), s2 = this.calculateSellItemValue({ inLowestDenomination: true }) + this.actor.mergeCurrency({ inLowestDenomination: true });
    e2.totalValue = splitCurrency(t2), e2.sellValue = splitCurrency(s2), e2.labels || (e2.labels = {}), e2.labels.totalValue = game.i18n.localize("FFD20.ItemContainerTotalValue").format(e2.totalValue.gil, e2.totalValue.sgil, e2.totalValue.cgil), e2.labels.sellValue = game.i18n.localize("FFD20.ItemContainerSellValue").format(e2.sellValue.gil, e2.sellValue.sgil, e2.sellValue.cgil);
    for (const t3 of Object.values(e2.inventory))
      t3.hasActions = false, t3.canEquip = false, t3.showValue = true;
    return e2;
  }
}
class ActorSheetFFD20Basic extends ActorSheet {
}
class ActorSheetFlags extends DocumentSheet {
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return mergeObject(e2, { id: "actor-flags", classes: ["ffd20"], template: "systems/ffd20/templates/apps/actor-flags.hbs", width: 500, closeOnSubmit: true });
  }
  get title() {
    return `${game.i18n.localize("FFD20.FlagsTitle")}: ${this.object.name}`;
  }
  getData() {
    const e2 = super.getData();
    return e2.flags = this._getFlags(), e2;
  }
  _getFlags() {
    const e2 = {};
    for (const [t2, s2] of Object.entries(CONFIG.FFD20.characterFlags)) {
      Object.prototype.hasOwnProperty.call(e2, s2.section) || (e2[s2.section] = {});
      const l2 = duplicate(s2);
      l2.type = s2.type.name, l2.isCheckbox = s2.type === Boolean, l2.isSelect = Object.prototype.hasOwnProperty.call(s2, "choices"), l2.value = this.document.getFlag("FFD20", t2), e2[s2.section][t2] = l2;
    }
    return e2;
  }
  _updateObject(e2, t2) {
    const s2 = this.object, l2 = {};
    for (const [e3, s3] of Object.entries(CONFIG.ffd20.characterFlags))
      [void 0, null, "", false].includes(t2[e3]) || s3.type === Number && 0 === t2[e3] ? l2[`-=${e3}`] = null : l2[e3] = t2[e3];
    s2.update({ "flags.ffd20": l2 });
  }
}
class SensesSelector extends DocumentSheet {
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return mergeObject(e2, { classes: ["ffd20", "senses-selector"], template: "systems/ffd20/templates/apps/senses-selector.hbs", width: 500, closeOnSubmit: true });
  }
  get title() {
    return `${game.i18n.localize("FFD20.Senses")}: ${this.object.name}`;
  }
  get convertKeys() {
    return { "system.traits.senses.dv": "distance", "system.traits.senses.ts": "distance", "system.traits.senses.bse": "distance", "system.traits.senses.bs": "distance" };
  }
  async getData() {
    const e2 = { system: this.document.system, converted: Object.entries(this.convertKeys).reduce((e3, t2) => ("distance" === t2[1] && setProperty(e3, t2[0], ffd20.utils.convertDistance(getProperty(this.document, t2[0]))[0]), e3), {}), gridUnits: "imperial" === game.settings.get("ffd20", "units") ? "ft" : "m" };
    return e2;
  }
  async _updateObject(e2, t2) {
    Object.entries(this.convertKeys).forEach((e3) => {
      "distance" === e3[1] && (t2[e3[0]] = ffd20.utils.convertDistanceBack(t2[e3[0]])[0]);
    });
    const s2 = await super._updateObject(e2, t2);
    return canvas.perception.update({ initializeLighting: true, initializeVision: true }, true), game.socket.emit("system.ffd20", { eventType: "redrawCanvas" }), s2;
  }
}
class SkillEditor extends FormApplication {
  constructor(e2, t2, s2, l2 = {}) {
    super(e2, l2), this.skillId = t2, this.subSkillId = s2, this._callbacks = [];
  }
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return { ...e2, width: 380, template: "systems/ffd20/templates/apps/skill-editor.hbs", closeOnSubmit: false, dragDrop: [{ dragSelector: null, dropSelector: "*" }], classes: [...e2.classes, "ffd20", "skill-editor"] };
  }
  get title() {
    return `${game.i18n.localize("FFD20.EditSkill")}: ${this.skillName}`;
  }
  get actor() {
    return this.object;
  }
  get isSubSkill() {
    return null != this.subSkillId;
  }
  get isStaticSkill() {
    return null != CONFIG.FFD20.skills[this.skillId] && !this.isSubSkill;
  }
  get skill() {
    return this.isSubSkill ? this.actor.system.skills[this.skillId]?.subSkills[this.subSkillId] : this.actor.system.skills[this.skillId];
  }
  get skillName() {
    return this.isStaticSkill ? CONFIG.FFD20.skills[this.skillId] : this.skill.name;
  }
  get skillTag() {
    return this.isStaticSkill ? this.skillId : this.isSubSkill ? this.subSkillId : this.skillId;
  }
  async getData(e2) {
    const t2 = await super.getData(e2);
    t2.config = CONFIG.FFD20, t2.skill = mergeObject(this.skill, { skillId: this.skillId, subSkillId: this.subSkillId, isSubSkill: this.isSubSkill, name: this.skillName, static: this.isStaticSkill, tag: this.skillTag }, { inplace: false }), t2.actorData = this.actor.toObject();
    try {
      const e3 = await fromUuid(t2.skill.journal);
      t2.journal = e3.toObject(), t2.journal.uuid = t2.skill.journal, t2.journal.documentType = e3 instanceof JournalEntryPage ? "JournalEntryPage" : "JournalEntry";
    } catch (e3) {
      t2.journal = null;
    }
    return t2;
  }
  addCallback(e2) {
    this._callbacks.push(e2);
  }
  async _updateObject(e2, t2) {
    e2.preventDefault();
    const s2 = { system: { skills: {} } }, l2 = s2.system.skills, { skill: c2, tag: u2 } = expandObject(t2), m2 = this.subSkillId, d2 = this.skillId;
    if (c2.journal ??= this.skill.journal, c2.custom ??= this.skill.custom, this.isStaticSkill || (c2.background ??= this.skill.background), this.isStaticSkill || u2) {
      if (u2 && (this.isSubSkill ? this.subSkillId = u2 : this.skillId = u2), this.isSubSkill) {
        if (l2[this.skillId] = { subSkills: { [this.subSkillId]: c2 } }, !this.isStaticSkill && m2 !== this.subSkillId && (l2[this.skillId].subSkills[`-=${m2}`] = null, this.subSkillId in this.object.system.skills[this.skillId].subSkills))
          return void ui.notifications.error(game.i18n.format("FFD20.ErrorSkillTagAlreadyExists", { tag: `${this.skillId}.subSkills.${this.subSkillId}` }));
      } else if (l2[this.skillId] = c2, !this.isStaticSkill && d2 !== this.skillId && (l2[`-=${d2}`] = null, this.skillId in this.object.system.skills))
        return void ui.notifications.error(game.i18n.format("FFD20.ErrorSkillTagAlreadyExists", { tag: this.skillId }));
      await this.object.update(s2);
    } else
      ui.notifications.error(game.i18n.localize("FFD20.ErrorEmptySkillTag"));
  }
  async close(...e2) {
    await super.close(...e2), this._callbacks.forEach((e3) => e3());
  }
  async _onDrop(e2) {
    e2.preventDefault();
    const t2 = TextEditor.getDragEventData(e2);
    if ("JournalEntryPage" !== t2.type && "JournalEntry" !== t2.type)
      return;
    const s2 = await CONFIG[t2.type].documentClass.implementation.fromDropData(t2);
    s2 && (await this._onSubmit(e2, { updateData: { "skill.journal": s2.uuid } }), await this.render());
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find(".compendium-page").on("click", this._openCompendiumEntry.bind(this)), e2.find(".compendium-controls a").on("click", this._onCompendiumControls.bind(this)), e2.find('button[type="submit"]').on("click", (e3) => {
      e3.preventDefault();
      this.element[0].querySelector("form").reportValidity() && this.close({ submit: true });
    });
  }
  async _openCompendiumEntry(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".compendium-entry").dataset.compendiumEntry, s2 = await fromUuid(t2);
    s2 instanceof JournalEntryPage ? s2.parent.sheet.render(true, { pageId: s2.id }) : s2.sheet.render(true);
  }
  async _onCompendiumControls(e2) {
    e2.preventDefault();
    e2.currentTarget.classList.contains("delete") && (await this._onSubmit(e2, { updateData: { "skill.journal": null } }), await this.render());
  }
}
const duplicateCombatantInitiativeDialog = function(e2, t2) {
  const s2 = e2.find((e3) => void 0 !== e3.combatants.get(t2));
  if (!s2)
    return void ui.notifications.warn(game.i18n.localize("FFD20.WarningNoCombatantFound"));
  const l2 = s2.combatants.filter((e3) => e3.id === t2)[0];
  l2 ? new Dialog({ title: `${game.i18n.localize("FFD20.DuplicateInitiative")}: ${l2.actor.name}`, content: `<div class="flexrow form-group">
      <label>${game.i18n.localize("FFD20.InitiativeOffset")}</label>
      <input type="number" name="initiativeOffset" value="0"/>
    </div>`, buttons: { confirm: { label: game.i18n.localize("FFD20.Confirm"), callback: (e3) => {
    const t3 = parseFloat(e3.find('input[name="initiativeOffset"]').val()), c2 = null != l2.initiative ? l2.initiative : 0;
    duplicateCombatantInitiative(s2, l2, c2 + t3);
  } }, cancel: { label: game.i18n.localize("Cancel") } }, default: "confirm" }, { classes: ["dialog", "ffd20", "duplicate-initiative"] }).render(true) : ui.notifications.warn(game.i18n.localize("FFD20.WarningNoCombatantFound"));
}, duplicateCombatantInitiative = function(e2, t2, s2) {
  console.debug("Duplicating combatant:", t2), e2.createEmbeddedDocuments("Combatant", [mergeObject(t2.toObject(), { initiative: s2 }, { inplace: false })]);
};
Hooks.on("getCombatTrackerEntryContext", function(e2, t2) {
  t2.push({ name: "FFD20.DuplicateInitiative", icon: '<i class="fas fa-dice-d20"></i>', callback: (e3) => duplicateCombatantInitiativeDialog.call(game.combat, game.combats, e3.data("combatant-id")) });
});
class CombatFFD20 extends Combat {
  _getInitiativeFormula(e2, t2) {
    const s2 = [t2 || "1d20", `@attributes.init.total[${game.i18n.localize("FFD20.Initiative")}]`];
    e2 && game.settings.get("ffd20", "initiativeTiebreaker") && s2.push(`(@attributes.init.total / 100)[${game.i18n.localize("FFD20.Tiebreaker")}]`);
    const l2 = CONFIG.Combat.initiative.formula ? CONFIG.Combat.initiative.formula.split(/\s*\+\s*/) : s2;
    return e2 ? l2.filter((e3) => null !== e3).join(" + ") : l2[0] || "0";
  }
  async rollInitiative(e2, { formula: t2 = null, updateTurn: s2 = true, messageOptions: l2 = {}, skipDialog: c2 = null } = {}) {
    null == c2 && (c2 = getSkipActionPrompt()), e2 = "string" == typeof e2 ? [e2] : e2;
    const u2 = this.combatant?.id;
    let m2 = game.settings.get("core", "rollMode"), d2 = "", h2 = false;
    if (!c2) {
      const e3 = await Combat.implementation.showInitiativeDialog(t2);
      m2 = e3.rollMode, d2 = e3.bonus || "", h2 = e3.stop || false, e3.d20 && e3.d20;
    }
    if (t2 || (t2 = "1d20"), h2)
      return this;
    const [p2, g2] = await e2.reduce(async (e3, s3, c3) => {
      const u3 = await e3, [h3, p3] = u3, g3 = this.combatants.get(s3);
      if (!g3 || !g3.isOwner)
        return e3;
      const y2 = g3.actor?.getRollData() ?? {};
      t2 = this._getInitiativeFormula(g3.actor ? g3.actor : null) || t2, y2.bonus = d2, d2.length > 0 && 0 === c3 && (t2 += " + @bonus");
      (g3.token?.hidden || g3.hidden) && (m2 = l2.rollMode ?? "gmroll");
      const F2 = RollFFD20.safeRoll(t2, y2);
      delete y2.bonus, F2.err && ui.notifications.warn(F2.err.message), h3.push({ _id: s3, initiative: F2.total });
      const [D2, k2] = g3.actor.getInitiativeContextNotes(), v = mergeObject({ user: game.user.id, formula: F2.formula, tooltip: await F2.getTooltip(), total: F2.total }, D2.length > 0 ? { hasExtraText: true, extraText: k2 } : {}), C2 = mergeObject({ user: game.user.id, type: CONST.CHAT_MESSAGE_TYPES.CHAT, rollMode: m2, sound: CONFIG.sounds.dice, speaker: { scene: canvas.scene?.id, actor: g3.actor ? g3.actor.id : null, token: g3.token?.id, alias: g3.token?.name }, flags: { ffd20: { subject: { core: "init" } } }, flavor: game.i18n.localize("FFD20.RollsForInitiative").format(g3.token?.name ?? g3.actor.name), roll: F2, content: await renderTemplate("systems/ffd20/templates/chat/roll-ext.hbs", v) }, l2);
      return ChatMessage.applyRollMode(C2, C2.rollMode), c3 > 0 && (C2.sound = null), p3.push(C2), e3;
    }, [[], []]);
    if (!p2.length)
      return this;
    await this.updateEmbeddedDocuments("Combatant", p2), s2 && u2 && await this.update({ turn: this.turns.findIndex((e3) => e3.id === u2) });
    return { combat: this, messages: await ChatMessage.implementation.create(g2) };
  }
  static showInitiativeDialog = function(e2 = null) {
    let t2 = game.settings.get("core", "rollMode");
    return new Promise((s2) => {
      const l2 = { formula: e2 || "", rollMode: t2, rollModes: CONFIG.Dice.rollModes }, c2 = { normal: { label: "Roll", callback: (e3) => {
        t2 = e3.find('[name="rollMode"]').val();
        const l3 = e3.find('[name="bonus"]').val(), c3 = e3.find('[name="d20"]').val();
        s2({ rollMode: t2, bonus: l3, d20: c3 });
      } } };
      renderTemplate("systems/ffd20/templates/chat/roll-dialog.hbs", l2).then((e3) => {
        new Dialog({ title: game.i18n.localize("FFD20.InitiativeBonus"), content: e3, buttons: c2, default: "normal", close: (e4) => {
          s2({ stop: true });
        } }, { classes: ["dialog", "ffd20", "roll-initiative"] }).render(true);
      });
    });
  };
  async _processCurrentCombatant() {
    try {
      this.combatant?.actor?.expireActiveEffects();
    } catch (e2) {
      console.error(e2);
    }
  }
  async nextRound() {
    const e2 = await super.nextRound();
    return await this._processCurrentCombatant(), e2;
  }
  async nextTurn() {
    const e2 = await super.nextTurn();
    return await this._processCurrentCombatant(), e2;
  }
}
class TokenFFD20 extends Token {
  async toggleEffect(e2, { active: t2, overlay: s2 = false, midUpdate: l2 } = {}) {
    let c2;
    if ("string" == typeof e2) {
      const l3 = this.actor.items.get(e2);
      c2 = l3 ? await l3.setActive(!l3.isActive) : await super.toggleEffect(e2, { active: t2, overlay: s2 });
    } else if (e2 && !l2 && Object.keys(CONFIG.FFD20.conditions).includes(e2.id)) {
      const t3 = {};
      t3["system.attributes.conditions." + e2.id] = !this.actor.system.attributes.conditions[e2.id], c2 = await this.actor.update(t3);
    } else
      e2 && (c2 = await super.toggleEffect(e2, { active: t2, overlay: s2 }));
    return this.hasActiveHUD && canvas.tokens.hud.refreshStatusIcons(), c2;
  }
  get actorVision() {
    return { lowLight: getProperty(this.actor, "system.traits.senses.ll.enabled"), lowLightMultiplier: getProperty(this.actor, "system.traits.senses.ll.multiplier.dim"), lowLightMultiplierBright: getProperty(this.actor, "system.traits.senses.ll.multiplier.bright") };
  }
  get disableLowLight() {
    return true === this.document.getFlag("ffd20", "disableLowLight");
  }
  get observer() {
    return game.user.isGM || function(e2) {
      if (!e2.actor)
        return false;
      if (e2.actor.testUserPermission(game.user, "OWNER"))
        return true;
      const t2 = e2.actor.getFlag("ffd20", "visionPermission");
      return !(!t2 || !t2.users[game.user.id]) && ("yes" === t2.users[game.user.id].level || "default" === t2.users[game.user.id].level && "yes" === t2.default);
    }(this);
  }
  _onUpdate(e2, t2, s2) {
    if (false !== t2.render)
      return hasProperty(e2, "flags.ffd20.customVisionRules") && (e2.sight ||= {}), super._onUpdate(e2, t2, s2);
  }
  updateVisionSource(...e2) {
    this.document.refreshDetectionModes(), super.updateVisionSource(...e2);
  }
  _getBarBoost(e2) {
    return "attributes.hp" === e2.attribute ? { value: this.actor.system.attributes.hp.temp, color: 12637924 } : "attributes.vigor" === e2.attribute ? { value: this.actor.system.attributes.vigor.temp, color: 12637924 } : null;
  }
  _getBarUnderline(e2) {
    return "attributes.hp" === e2.attribute ? { value: this.actor.system.attributes.hp.nonlethal, color: 8202280 } : null;
  }
  _drawBar(e2, t2, s2) {
    const l2 = this._getBarBoost(s2), c2 = this._getBarUnderline(s2), u2 = s2.max, m2 = Number(s2.value);
    s2.max = Math.max(s2.max, (l2?.value ?? 0) + m2);
    const d2 = Math.clamped(m2, 0, s2.max) / s2.max, h2 = Math.clamped(m2, 0, u2) / u2;
    let p2 = Math.max(canvas.dimensions.size / 12, 8);
    const g2 = this.w, y2 = Math.clamped(p2 / 8, 1, 2);
    this.document.height >= 2 && (p2 *= 1.6);
    let F2;
    if (F2 = 0 === e2 ? PIXI.utils.rgb2hex([1 - h2 / 2, h2, 0]) : PIXI.utils.rgb2hex([0.5 * h2, 0.7 * h2, 0.5 + h2 / 2]), t2.clear(), t2.beginFill(0, 0.5).lineStyle(y2, 0, 1).drawRoundedRect(0, 0, this.w, p2, 3), l2?.value > 0) {
      const e3 = Math.clamped(m2 + l2.value, 0, s2.max) / s2.max;
      t2.beginFill(l2.color, 1).lineStyle(y2, 0, 1).drawRoundedRect(0, 0, e3 * g2, p2, 2);
    }
    if (t2.beginFill(F2, 1).lineStyle(y2, 0, 1).drawRoundedRect(0, 0, d2 * g2, p2, 2), c2?.value > 0) {
      const e3 = Math.clamped(c2.value, 0, s2.max) / s2.max;
      t2.beginFill(c2.color, 1).lineStyle(y2, 0, 1).drawRoundedRect(0, p2 / 2, e3 * g2, p2 / 2, 2);
    }
    const D2 = 0 === e2 ? this.h - p2 : 0;
    t2.position.set(0, D2);
  }
}
class TokenDocumentFFD20 extends TokenDocument {
  _preCreate(e2, t2, s2) {
    this._preCreateSetSize();
  }
  _preCreateSetSize() {
    if (!this.actor)
      return;
    if (this.getFlag("ffd20", "staticSize"))
      return;
    const e2 = CONFIG.FFD20.tokenSizes[this.actor.system.traits?.size];
    e2 && this.updateSource({ width: e2.w, height: e2.h, texture: { scaleY: e2.scale, scaleX: e2.scale } });
  }
  getTrackedAttributes(e2, t2 = []) {
    const s2 = super.getTrackedAttributes(e2, t2);
    return 0 === t2.length && s2.value.push(["attributes", "hp", "temp"], ["attributes", "hp", "nonlethal"]), s2;
  }
  getBarAttribute(e2, { alternative: t2 = null } = {}) {
    let s2;
    try {
      s2 = super.getBarAttribute(e2, { alternative: t2 });
    } catch (e3) {
      s2 = null;
    }
    return s2?.attribute.startsWith("resources.") && (s2.editable = true), s2;
  }
  refreshDetectionModes() {
    if (!this.sight.enabled)
      return;
    if (!["character", "npc"].includes(this.actor?.type))
      return;
    if (this.getFlag("ffd20", "customVisionRules"))
      return;
    this.sight.visionMode = "basic";
    const e2 = this.sight.range, t2 = this.actor?.system?.traits?.senses?.dv ?? 0;
    if (t2 > 0) {
      this.sight.range = Math.max(e2, ffd20.utils.convertDistance(t2)[0]), this.sight.visionMode = "darkvision";
      const s3 = CONFIG.Canvas.visionModes.darkvision.vision.defaults;
      this.sight.saturation = s3.saturation, this.sight.attenuation = s3.attenuation, this.sight.brightness = s3.brightness, this.sight.contrast = s3.contrast;
    }
    const s2 = DetectionMode.BASIC_MODE_ID, l2 = this.detectionModes.find((e3) => e3.id === s2);
    l2 ? l2.range = e2 : this.detectionModes.push({ id: s2, enabled: true, range: e2 });
    const c2 = "seeInvisibility", u2 = this.detectionModes.find((e3) => e3.id === c2);
    u2 || !this.actor?.system?.traits?.senses?.si && !this.actor?.system?.traits?.senses?.tr ? null != u2 && (this.actor?.system?.traits?.senses?.si || this.actor?.system?.traits?.senses?.tr ? u2.range = this.sight.range : this.detectionModes.splice(this.detectionModes.indexOf(u2, 1))) : this.detectionModes.push({ id: c2, enabled: true, range: this.sight.range });
    const m2 = "blindSense", d2 = this.detectionModes.find((e3) => e3.id === m2), h2 = this.actor?.system?.traits?.senses?.bse;
    !d2 && h2 ? this.detectionModes.push({ id: m2, enabled: true, range: h2 }) : null != d2 && (h2 ? d2.range = h2 : this.detectionModes.splice(this.detectionModes.indexOf(d2, 1)));
    const p2 = "blindSight", g2 = this.detectionModes.find((e3) => e3.id === p2), y2 = this.actor?.system?.traits?.senses?.bs;
    !g2 && y2 ? this.detectionModes.push({ id: p2, enabled: true, range: y2 }) : null != g2 && (y2 ? g2.range = y2 : this.detectionModes.splice(this.detectionModes.indexOf(g2, 1)));
    const F2 = "feelTremor", D2 = this.detectionModes.find((e3) => e3.id === F2), k2 = this.actor?.system?.traits?.senses?.ts;
    !g2 && k2 ? this.detectionModes.push({ id: F2, enabled: true, range: k2 }) : null != D2 && (k2 ? D2.range = k2 : this.detectionModes.splice(this.detectionModes.indexOf(D2, 1))), this.detectionModes.sort(this._sortDetectionModes.bind(this));
  }
  _sortDetectionModes(e2, t2) {
    if (e2.id === DetectionMode.BASIC_MODE_ID)
      return -1;
    if (t2.id === DetectionMode.BASIC_MODE_ID)
      return 1;
    const s2 = CONFIG.Canvas.detectionModes[e2.id], l2 = CONFIG.Canvas.detectionModes[t2.id];
    return (s2.constructor.PRIORITY ?? 0) - (l2.constructor.PRIORITY ?? 0);
  }
}
class EntrySelector extends FormApplication {
  constructor(...e2) {
    super(...e2), this.isFlag = true === this.options.flag, this.isFlat = true === this.options.flat;
    const t2 = deepClone(getProperty(this.object, this.attribute) ?? (this.isFlag ? {} : []));
    this.originalEntries = t2, this.entries = this.isFlag ? this.isFlat ? Object.keys(t2).map((e3) => [e3]) : Object.entries(t2) : t2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { id: "entry-selector", classes: ["ffd20", "entry"], template: "systems/ffd20/templates/apps/entry-selector.hbs", width: 320, height: "auto", closeOnSubmit: false, submitOnClose: false });
  }
  get title() {
    return game.i18n.localize("FFD20.Application.EntrySelector.Title");
  }
  get attribute() {
    return this.options.name;
  }
  get fields() {
    return this.options.fields.split(";");
  }
  get dtypes() {
    return this.options.dtypes.split(";");
  }
  get dataCount() {
    return this.fields.length;
  }
  getData() {
    const e2 = this.entries.map((e3) => e3.map((e4, t2) => [e4, this.dtypes[t2]]));
    return { entries: e2, fields: this.fields };
  }
  activateListeners(e2) {
    e2.find(".entry-control").click(this._onEntryControl.bind(this)), e2.find('tr td input[type="text"]').change(this._onEntryChange.bind(this)), e2.find('button[type="submit"]').click(this._submitAndClose.bind(this));
  }
  async _updateObject(e2, t2) {
    const s2 = {};
    if (this.isFlag) {
      const e3 = /* @__PURE__ */ new Set();
      this.entries.forEach(([t3, l2]) => {
        e3.add(t3), s2[`${this.attribute}.${t3}`] = !!this.isFlat || l2;
      });
      Object.keys(this.originalEntries).forEach((t3) => {
        e3.has(t3) || (s2[`${this.attribute}.-=${t3}`] = null);
      });
    } else
      s2[this.attribute] = this.entries;
    return this.object.update(s2);
  }
  async _onEntryControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-entry")) {
      const e3 = [];
      for (let t3 = 0; t3 < this.dataCount; t3++) {
        "Number" === this.dtypes[t3] ? e3.push(0) : e3.push("");
      }
      return this.entries.push(e3), this.render();
    }
    if (t2.classList.contains("delete-entry")) {
      const e3 = t2.closest("tr"), s2 = parseInt(e3.dataset.index);
      return this.entries.splice(s2, 1), this.render();
    }
  }
  async _onEntryChange(e2) {
    const t2 = e2.currentTarget, s2 = t2.closest("tr.entry"), l2 = parseInt(s2.dataset.index), c2 = parseInt(t2.dataset.index), u2 = t2.value;
    if ("Number" === t2.dataset.dtype) {
      let e3 = parseFloat(u2);
      isNaN(e3) && (e3 = 0), this.entries[l2][c2] = Math.floor(100 * e3) / 100;
    } else
      this.entries[l2][c2] = u2;
  }
  async _submitAndClose(e2) {
    e2.preventDefault(), await this._onSubmit(e2), this.close();
  }
}
class ScriptEditor extends FormApplication {
  constructor(e2 = {}) {
    super(e2), this.command = e2.command || "", this.name = e2.name || null, this.parent = e2.parent, this.isScriptCall = true === e2.scriptCall, this.name ? this.options.title = this.parent ? `${this.parent.name}: ${this.name}` : this.name : this.options.title = this.parent?.name ?? game.i18n.localize("FFD20.Unknown"), this._promises = { submit: [] };
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "script-editor"], template: "systems/ffd20/templates/apps/script-editor.hbs", width: 640, height: 560 });
  }
  getData() {
    const e2 = {};
    return e2.command = this.command || "", e2.name = this.name, e2.isScriptCall = this.isScriptCall, e2.canEdit = { name: this.isScriptCall }, e2;
  }
  awaitResult() {
    let e2;
    const t2 = new Promise((t3) => {
      e2 = t3;
    });
    return this._promises.submit.push({ callback: e2, promise: t2, resolved: false }), t2;
  }
  activateListeners(e2) {
    e2.find('button[type="submit"]').click(this._onSubmit.bind(this)), e2.find("a.help-browser[data-url]").click(this._openHelpBrowser.bind(this));
  }
  _openHelpBrowser(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    ffd20.applications.helpBrowser.openUrl(t2.dataset.url);
  }
  _updateObject(e2, t2) {
    this.command = t2.command, this.name = t2.name || null;
    const s2 = { command: this.command, name: this.name };
    this.resolvePromises("submit", s2);
  }
  resolvePromises(e2, t2) {
    for (const s2 of this._promises[e2])
      s2.resolved || (s2.callback(t2), s2.resolved = true);
  }
  async close(...e2) {
    super.close(...e2), this.resolvePromises("submit", null);
  }
}
const W = { spells: "0.2.28", items: "0.2.28", bestiary: "0.2.28", feats: "0.2.28", classes: "0.2.28", races: "0.2.28", buffs: "0.2.28" }, Y = { spells: "Item", items: "Item", bestiary: "Actor", feats: "Item", classes: "Item", races: "Item", buffs: "Item" }, K = {};
class CompendiumBrowser extends Application {
  constructor(...e2) {
    super(...e2), this.items = [], this.filters = [], this.activeFilters = {}, this._data = { loaded: false, data: {}, promise: null, progress: null }, this.lazyLoadTreshold = 80, this.lazyStart = 80, this.lazyIndex = 0, this.lazyAdd = 20, this.packs = {}, this.filterQuery = /.*/, this.searchString = "";
    {
      this._savedItems = [];
      const e3 = game.settings.get("ffd20", "compendiumSaveVersions"), t2 = SemanticVersion.fromString(e3[this.type] || "0.0.1");
      if (SemanticVersion.fromString(W[this.type]).isHigherThan(t2))
        game.settings.set("ffd20", "compendiumSaveVersions", foundry.utils.mergeObject(e3, { [this.type]: game.system.version }));
      else {
        const e4 = game.settings.get("ffd20", "compendiumItems");
        e4[this.type] && (this._savedItems = e4[this.type]);
      }
    }
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/apps/compendium-browser.hbs", classes: ["ffd20", "app"], width: 720, height: window.innerHeight - 60, top: 30, left: 40 });
  }
  shouldForceRefresh() {
    let e2 = false;
    this._currentCompendiums || this.updateForceRefreshData();
    const t2 = game.settings.get("ffd20", "compendiumForceRefresh"), s2 = getProperty(t2, `diff.${this.type}`);
    if (s2) {
      const t3 = [];
      for (const e3 of [...this._currentCompendiums, ...s2])
        s2.includes(e3) && this._currentCompendiums.includes(e3) || t3.push(e3);
      t3.length > 0 && (e2 = true);
    } else
      e2 = true;
    return e2;
  }
  updateForceRefreshData(e2 = { save: false, refresh: true }) {
    if (e2.refresh && (this._currentCompendiums = game.packs.filter((e3) => e3.metadata.type === this.documentType && !this.shouldSkip(e3)).map((e3) => `${e3.metadata.package}.${e3.metadata.name}`)), e2.save) {
      const e3 = duplicate(game.settings.get("ffd20", "compendiumForceRefresh"));
      return setProperty(e3, `diff.${this.type}`, this._currentCompendiums), game.settings.set("ffd20", "compendiumForceRefresh", e3);
    }
  }
  async _createInitialElements() {
    const e2 = [];
    for (let t2 = 0; e2.length < this.lazyLoadTreshold && t2 < this.items.length; t2++) {
      const s2 = this.items[t2];
      this._passesFilters(s2.item) && e2.push(s2), this.lazyIndex = t2 + 1;
    }
    for (const t2 of e2)
      await this._addEntryElement(t2);
  }
  async _addEntryElement(e2) {
    const t2 = $(await renderTemplate("systems/ffd20/templates/internal/compendium-browser_entry.hbs", e2));
    return this.element.find(".directory-list").append(t2), this.activateEntryListeners(t2), t2;
  }
  _clearEntryElements() {
    this.element.find(".directory-list").empty();
  }
  activateEntryListeners(e2) {
    e2.find(".entry-name").click((e3) => {
      const t2 = e3.currentTarget.parentElement;
      this._onEntry(t2.getAttribute("data-collection"), t2.getAttribute("data-entry-id"));
    }), e2[0].setAttribute("draggable", true), e2[0].addEventListener("dragstart", this._onDragStart, false);
  }
  async _initLazyLoad() {
    await this._createInitialElements();
    const e2 = this.element.find(".directory-list"), lazyLoad = async () => {
      let e3 = 0;
      for (let t2 = this.lazyIndex; t2 < this.items.length && e3 < this.lazyAdd; t2++) {
        const s2 = this.items[t2];
        if (this._passesFilters(s2.item)) {
          e3++;
          const t3 = await this._addEntryElement(s2);
          $(t3).fadeIn(500);
        }
        this.lazyIndex++;
      }
    };
    $(e2).on("scroll", () => {
      e2.scrollTop() + e2.height() >= e2[0].scrollHeight - this.lazyLoadTreshold && lazyLoad();
    });
  }
  async loadData() {
    return new Promise((e2) => {
      let t2 = this._data.promise;
      null == t2 && (t2 = this._gatherData(), this._data.promise = t2), t2.then(async () => {
        this._data.loaded = true, this._data.promise = null;
        try {
          await this.saveEntries();
        } catch (e3) {
          console.error(e3), await this.clearEntries();
        }
        e2(this._data);
      });
    });
  }
  async _gatherData() {
    try {
      await this._fetchMetadata();
    } catch (e2) {
      console.warn(e2), this._savedItems = [], await this._fetchMetadata();
    }
    this._data = { filters: this.filters, collection: this.items.reduce((e2, t2) => (e2[t2.item._id] = t2, e2), {}), labels: { itemCount: game.i18n.localize("FFD20.TotalItems").format(this.items.length) } };
  }
  get typeName() {
    switch (this.type) {
      case "spells":
        return game.i18n.localize("FFD20.Spells");
      case "items":
        return game.i18n.localize("FFD20.Items");
      case "feats":
        return game.i18n.localize("FFD20.Features");
      case "bestiary":
        return game.i18n.localize("FFD20.Creatures");
      case "classes":
        return game.i18n.localize("FFD20.Classes");
      case "races":
        return game.i18n.localize("FFD20.Races");
      case "buffs":
        return game.i18n.localize("FFD20.Buffs");
    }
    return this.type;
  }
  get type() {
    return this.options.type;
  }
  get title() {
    return [this.typeName, "Browser"].join(" ");
  }
  get documentType() {
    return Y[this.type];
  }
  getBasicFilters() {
    switch (this.type) {
      case "spells":
        return [{ type: "spell" }];
      case "items":
        return [{ type: "equipment" }, { type: "weapon" }, { type: "consumable" }, { type: "loot" }, { type: "container" }];
      case "feats":
        return [{ type: "feat" }];
      case "classes":
        return [{ type: "class" }];
      case "races":
        return [{ type: "race" }];
      case "buffs":
        return [{ type: "buff" }];
    }
    return [null];
  }
  shouldSkip(e2) {
    const t2 = game.settings.get("core", "compendiumConfiguration")[e2.collection];
    return !(true !== getProperty(t2, "ffd20.disabled")) || !(!e2.private || game.user.isGM);
  }
  _onProgress(e2) {
    e2.loaded++, e2.pct = 10 * Math.round(10 * e2.loaded / e2.total), SceneNavigation.displayProgressBar({ label: e2.message, pct: e2.pct });
  }
  async loadCompendium(e2, t2 = [null]) {
    const s2 = this._data.progress;
    if ("ffd20" != e2.metadata.system)
      return console.warn(e2.metadata.label + " is incompatible with this browser and has been skipped."), void this._onProgress(s2);
    let l2 = [];
    for (const s3 of t2)
      l2.push(...await e2.getDocuments(s3));
    e2.translated && (l2 = l2.map((t3) => e2.translate(t3))), e2.clear();
    for (const t3 of l2)
      this._filterItems(t3) && (this.packs[e2.collection] = e2, this.items.push(this._mapEntry(e2, t3)));
    this._onProgress(s2);
  }
  async _fetchMetadata() {
    if (this.items = [], this.shouldForceRefresh() || 0 === this._savedItems.length) {
      const e3 = [], t2 = { pct: 0, message: game.i18n.localize("FFD20.LoadingCompendiumBrowser"), loaded: -1, total: 0 };
      for (const s2 of game.packs.values())
        s2.documentClass.documentName !== this.documentType || this.shouldSkip(s2) ? Object.hasOwnProperty.call(this.packs, s2.collection) && delete this.packs[s2.collection] : (t2.total++, e3.push(s2));
      if (0 === e3.length)
        return void (this.filters = []);
      this._data.progress = t2, this._onProgress(t2);
      for (const t3 of e3)
        await this.loadCompendium(t3, this.getBasicFilters());
      if (this.items = naturalSort(this.items, "item.name"), 0 === this.items.length)
        return;
    } else {
      for (const e3 of this._savedItems) {
        const t2 = game.packs.get(e3.collection._id);
        t2 && (this.items.push(this._mapEntry(t2, e3.item)), this.packs[e3.collection._id] = t2);
      }
      this._savedItems = [];
    }
    switch (this._fetchGeneralFilters(), this.type) {
      case "spells":
        this._fetchSpellFilters();
        break;
      case "items":
        this._fetchItemFilters();
        break;
      case "bestiary":
        this._fetchBestiaryFilters();
        break;
      case "feats":
        this._fetchFeatFilters();
        break;
      case "classes":
        this._fetchClassFilters();
        break;
      case "races":
        this._fetchRaceFilters();
        break;
      case "buffs":
        this._fetchBuffFilters();
    }
    this.activeFilters = this.filters.reduce((e3, t2) => (e3[t2.path] = [], e3), {});
    const e2 = getProperty(game.settings.get("ffd20", "compendiumFilters") || {}, `${this.type}.activeFilters`) || {};
    for (const [t2, s2] of Object.entries(e2))
      this.activeFilters[t2] && (this.activeFilters[t2] = s2);
    for (const e3 of Object.keys(this.activeFilters)) {
      const t2 = this.filters.find((t3) => t3.path === e3);
      if (t2)
        for (const s2 of this.activeFilters[e3])
          t2.active = t2.active || {}, t2.active[s2] = true;
    }
  }
  _filterItems(e2) {
    return ("spells" !== this.type || "spell" === e2.type) && (!("items" === this.type && !ItemFFD20.isInventoryItem(e2.type)) && (("feats" !== this.type || "feat" === e2.type) && (("classes" !== this.type || "class" === e2.type) && (("races" !== this.type || "race" === e2.type) && ("buffs" !== this.type || "buff" === e2.type)))));
  }
  _mapFeats(e2, t2) {
    this.extraFilters = this.extraFilters || { tags: {}, associations: { class: {} } }, e2.item.tags = (t2.system.tags || []).reduce((e3, t3) => (this.extraFilters.tags[t3[0]] = true, e3.push(t3[0]), e3), []), e2.item.assocations = { class: ("classFeat" === t2.system.featType && getProperty(t2.system, "associations.classes") || []).reduce((e3, t3) => (this.extraFilters.associations.class[t3[0]] = true, e3.push(t3[0]), e3), []) };
  }
  _mapBestiary(e2, t2) {
    if (this.extraFilters = this.extraFilters || { "system.details.cr.total": {}, subTypes: {} }, e2.item.creatureType = "", e2.item.subTypes = [], "npc" === t2.type) {
      const e3 = getProperty(t2, "system.details.cr.total");
      e3 && !this.extraFilters["system.details.cr.total"][e3] && (this.extraFilters["system.details.cr.total"][e3] = true);
    }
    if (t2.items) {
      const s2 = t2.items.filter((e3) => "race" === e3.type)[0];
      null != s2 && (e2.item.creatureType = s2.system.creatureType, e2.item.subTypes = s2.system.subTypes?.map((e3) => (this.extraFilters.subTypes[e3[0]] = true, e3[0])));
    } else
      t2.subTypes?.forEach((e3) => {
        this.extraFilters.subTypes[e3] = true;
      }), e2.item.creatureType = t2.creatureType, e2.item.subTypes = t2.subTypes;
  }
  _mapItems(e2, t2) {
    this.extraFilters = this.extraFilters || {}, e2.item.weaponProps = Object.entries(getProperty(t2.system, "system.properties") || []).reduce((e3, t3) => (t3[1] && e3.push(t3[0]), e3), []);
  }
  _mapSpells(e2, t2) {
    this.extraFilters = this.extraFilters || { "learnedAt.class": [], "learnedAt.domain": [], "learnedAt.subDomain": [], "learnedAt.elementalSchool": [], "learnedAt.bloodline": [], "system.subschool": [], spellTypes: [] }, e2.item.allSpellLevels = [], e2.item.learnedAt = { class: (getProperty(t2, "system.learnedAt.class") || []).reduce((t3, s2) => (this.extraFilters["learnedAt.class"][s2[0]] = true, e2.item.allSpellLevels.includes(s2[1]) || e2.item.allSpellLevels.push(s2[1]), t3.push(s2[0]), t3), []), domain: (getProperty(t2, "system.learnedAt.domain") || []).reduce((t3, s2) => (this.extraFilters["learnedAt.domain"][s2[0]] = true, e2.item.allSpellLevels.includes(s2[1]) || e2.item.allSpellLevels.push(s2[1]), t3.push(s2[0]), t3), []), subDomain: (getProperty(t2, "system.learnedAt.subDomain") || []).reduce((t3, s2) => (this.extraFilters["learnedAt.subDomain"][s2[0]] = true, e2.item.allSpellLevels.includes(s2[1]) || e2.item.allSpellLevels.push(s2[1]), t3.push(s2[0]), t3), []), elementalSchool: (getProperty(t2, "system.learnedAt.elementalSchool") || []).reduce((t3, s2) => (this.extraFilters["learnedAt.elementalSchool"][s2[0]] = true, e2.item.allSpellLevels.includes(s2[1]) || e2.item.allSpellLevels.push(s2[1]), t3.push(s2[0]), t3), []), bloodline: (getProperty(t2, "system.learnedAt.bloodline") || []).reduce((t3, s2) => (this.extraFilters["learnedAt.bloodline"][s2[0]] = true, e2.item.allSpellLevels.includes(s2[1]) || e2.item.allSpellLevels.push(s2[1]), t3.push(s2[0]), t3), []), spellLevel: { class: (getProperty(t2, "system.learnedAt.class") || []).reduce((e3, t3) => (e3[t3[0]] = t3[1], e3), {}), domain: (getProperty(t2, "system.learnedAt.domain") || []).reduce((e3, t3) => (e3[t3[0]] = t3[1], e3), {}), subDomain: (getProperty(t2, "system.learnedAt.subDomain") || []).reduce((e3, t3) => (e3[t3[0]] = t3[1], e3), {}), bloodline: (getProperty(t2, "system.learnedAt.bloodline") || []).reduce((e3, t3) => (e3[t3[0]] = t3[1], e3), {}) } };
    {
      const e3 = t2.system.subschool;
      e3 && (this.extraFilters["system.subschool"][e3] = true);
    }
    {
      const s2 = t2.system.types ? t2.system.types.split(CONFIG.FFD20.re.traitSeparator) : [];
      e2.item.spellTypes = s2;
      for (const e3 of s2)
        this.extraFilters.spellTypes[e3] = true;
    }
  }
  _mapClasses(e2, t2) {
    this.extraFilters = this.extraFilters || { "system.hd": {}, "system.skillsPerLevel": {}, "system.parentClass": {} };
    {
      const e3 = t2.system.hd;
      e3 && (this.extraFilters["system.hd"][e3] = true);
    }
    {
      const e3 = t2.system.skillsPerLevel;
      e3 && (this.extraFilters["system.skillsPerLevel"][e3] = true);
    }
    {
      const e3 = t2.system.parentClass;
      e3 && (this.extraFilters["system.parentClass"][e3] = true);
    }
  }
  _mapRaces(e2, t2) {
    this.extraFilters = this.extraFilters || { subTypes: {} }, e2.item.subTypes = [], e2.item.subTypes = t2.system.subTypes.map((e3) => (this.extraFilters.subTypes[e3[0]] = true, e3[0]));
  }
  _mapBuffs(e2, t2) {
    this.extraFilters = this.extraFilters || { types: {} }, this.extraFilters.types[t2.system.buffType] = true;
  }
  _mapEntry(e2, t2) {
    const s2 = { collection: { _id: e2.collection, label: e2.metadata.label }, item: { _id: t2._id, uuid: t2.uuid, name: t2.name, type: t2.type, img: t2.img, system: t2.system, pack: e2.collection } };
    switch (this.type) {
      case "feats":
        this._mapFeats(s2, t2);
        break;
      case "bestiary":
        this._mapBestiary(s2, t2);
        break;
      case "items":
        this._mapItems(s2, t2);
        break;
      case "spells":
        this._mapSpells(s2, t2);
        break;
      case "classes":
        this._mapClasses(s2, t2);
        break;
      case "races":
        this._mapRaces(s2, t2);
        break;
      case "buffs":
        this._mapBuffs(s2, t2);
    }
    return s2;
  }
  async getData() {
    this.updateForceRefreshData(), !this.shouldForceRefresh() && this._data.loaded || await this.loadData(), await this.updateForceRefreshData({ save: true, refresh: false });
    const e2 = duplicate(this._data);
    return e2.searchString = this.searchString, e2;
  }
  async refresh() {
    await this.loadData(), this.render(false);
  }
  _fetchGeneralFilters() {
    this.filters = [{ path: "pack", label: game.i18n.localize("FFD20.Compendium"), items: naturalSort(Object.entries(this.packs).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1].metadata.label }), e2), []), "name") }];
  }
  _fetchSpellFilters() {
    this.filters.push({ path: "system.school", label: game.i18n.localize("FFD20.SpellSchool"), items: naturalSort(Object.entries(CONFIG.FFD20.spellSchools).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []), "name") }, { path: "system.multischool", label: game.i18n.localize("FFD20.multiSchool"), items: naturalSort(Object.entries(CONFIG.FFD20.multiSchools).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []), "name") }, { path: "system.subschool", label: game.i18n.localize("FFD20.SubSchool"), items: naturalSort(Object.keys(this.extraFilters["system.subschool"]).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "spellTypes", label: game.i18n.localize("FFD20.DescriptorPlural"), items: naturalSort(Object.keys(this.extraFilters.spellTypes).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "learnedAt.class", label: game.i18n.localize("FFD20.ClassPlural"), items: naturalSort(Object.keys(this.extraFilters["learnedAt.class"]).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "learnedAt.domain", label: game.i18n.localize("FFD20.Domain"), items: naturalSort(Object.keys(this.extraFilters["learnedAt.domain"]).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "learnedAt.subDomain", label: game.i18n.localize("FFD20.SubDomain"), items: naturalSort(Object.keys(this.extraFilters["learnedAt.subDomain"]).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "learnedAt.bloodline", label: game.i18n.localize("FFD20.Bloodline"), items: naturalSort(Object.keys(this.extraFilters["learnedAt.bloodline"]).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "_spellLevel", label: game.i18n.localize("FFD20.SpellLevel"), items: Object.entries(CONFIG.FFD20.spellLevels).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) });
  }
  _fetchItemFilters() {
    this.filters.push({ path: "type", label: game.i18n.localize("FFD20.Type"), items: [{ key: "weapon", name: game.i18n.localize("FFD20.ItemTypeWeapon") }, { key: "equipment", name: game.i18n.localize("FFD20.ItemTypeEquipment") }, { key: "consumable", name: game.i18n.localize("FFD20.ItemTypeConsumable") }, { key: "loot", name: game.i18n.localize("FFD20.Misc") }] }, { path: "system.weaponType", label: game.i18n.localize("FFD20.WeaponType"), items: Object.entries(CONFIG.FFD20.weaponTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1]._label }), e2), []) }, { path: "system.weaponSubtype", label: game.i18n.localize("FFD20.WeaponSubtype"), items: Object.values(CONFIG.FFD20.weaponTypes).reduce((e2, t2) => (e2 = e2.concat(Object.entries(t2).filter((e3) => !e3[0].startsWith("_")).reduce((t3, s2) => (e2.filter((e3) => e3.key === s2[0]).length || t3.push({ key: s2[0], name: s2[1] }), t3), [])), e2), []) }, { path: "weaponProps", label: game.i18n.localize("FFD20.WeaponProperties"), items: Object.entries(CONFIG.FFD20.weaponProperties).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.equipmentType", label: game.i18n.localize("FFD20.EquipmentType"), items: Object.entries(CONFIG.FFD20.equipmentTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1]._label }), e2), []) }, { path: "system.equipmentSubtype", label: game.i18n.localize("FFD20.EquipmentSubtype"), items: Object.values(CONFIG.FFD20.equipmentTypes).reduce((e2, t2) => (e2 = e2.concat(Object.entries(t2).filter((e3) => !e3[0].startsWith("_")).reduce((t3, s2) => (e2.filter((e3) => e3.key === s2[0]).length || t3.push({ key: s2[0], name: s2[1] }), t3), [])), e2), []) }, { path: "system.slot", label: game.i18n.localize("FFD20.Slot"), items: Object.values(CONFIG.FFD20.equipmentSlots).reduce((e2, t2) => (e2 = e2.concat(Object.entries(t2).filter((e3) => !e3[0].startsWith("_")).reduce((t3, s2) => (e2.filter((e3) => e3.key === s2[0]).length || t3.push({ key: s2[0], name: s2[1] }), t3), [])), e2), []) }, { path: "system.consumableType", label: game.i18n.localize("FFD20.ConsumableType"), items: Object.entries(CONFIG.FFD20.consumableTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.subType", label: game.i18n.localize("FFD20.Misc"), items: Object.entries(CONFIG.FFD20.lootTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) });
  }
  _fetchBestiaryFilters() {
    this.filters.push({ path: "system.details.cr.total", label: "CR", items: naturalSort(Object.keys(this.extraFilters["system.details.cr.total"]).reduce((e2, t2) => (e2.push({ key: t2, name: l.fromNumber(t2) }), e2), []), "name") }, { path: "creatureType", label: game.i18n.localize("FFD20.CreatureType"), items: naturalSort(Object.entries(CONFIG.FFD20.creatureTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []), "name") }, { path: "subTypes", label: game.i18n.localize("FFD20.RaceSubtypePlural"), items: naturalSort(Object.keys(this.extraFilters.subTypes).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") });
  }
  _fetchFeatFilters() {
    this.filters.push({ path: "system.featType", label: game.i18n.localize("FFD20.Type"), items: Object.entries(CONFIG.FFD20.featTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "tags", label: game.i18n.localize("FFD20.Tags"), items: naturalSort(Object.keys(this.extraFilters.tags).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") }, { path: "assocations.class", label: game.i18n.localize("FFD20.ClassPlural"), items: naturalSort(Object.keys(this.extraFilters.associations.class).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") });
  }
  _fetchClassFilters() {
    this.filters.push({ path: "system.classType", label: game.i18n.localize("FFD20.ClassType"), items: Object.entries(CONFIG.FFD20.classTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.classSubType", label: game.i18n.localize("FFD20.ClassSubType"), items: Object.entries(CONFIG.FFD20.classSubTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.parentClass", label: game.i18n.localize("FFD20.ParentClass"), items: Object.keys(this.extraFilters["system.parentClass"]).reduce((e2, t2) => (e2.push({ key: t2.toString(), name: t2.toString() }), e2), []) }, { path: "system.hd", label: game.i18n.localize("FFD20.HitDie"), items: Object.keys(this.extraFilters["system.hd"]).reduce((e2, t2) => (e2.push({ key: t2.toString(), name: t2.toString() }), e2), []) }, { path: "system.classBaseMPTypes", label: game.i18n.localize("FFD20.ClassMPType"), items: Object.entries(CONFIG.FFD20.classBaseMPTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.classCastingStat", label: game.i18n.localize("FFD20.SpellcastingAbility"), items: Object.entries(CONFIG.FFD20.classCastingStats).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.bab", label: game.i18n.localize("FFD20.BAB"), items: Object.entries(CONFIG.FFD20.classBAB).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.skillsPerLevel", label: game.i18n.localize("FFD20.SkillsPerLevel"), items: Object.keys(this.extraFilters["system.skillsPerLevel"]).reduce((e2, t2) => (e2.push({ key: t2.toString(), name: t2.toString() }), e2), []) }, { path: "system.savingThrows.fort.value", label: game.i18n.localize("FFD20.SavingThrowFort"), items: Object.entries(CONFIG.FFD20.classSavingThrows).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.savingThrows.ref.value", label: game.i18n.localize("FFD20.SavingThrowRef"), items: Object.entries(CONFIG.FFD20.classSavingThrows).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) }, { path: "system.savingThrows.will.value", label: game.i18n.localize("FFD20.SavingThrowWill"), items: Object.entries(CONFIG.FFD20.classSavingThrows).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []) });
  }
  _fetchRaceFilters() {
    this.filters.push({ path: "system.creatureType", label: game.i18n.localize("FFD20.CreatureType"), items: naturalSort(Object.entries(CONFIG.FFD20.creatureTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []), "name") }, { path: "subTypes", label: game.i18n.localize("FFD20.RaceSubtypePlural"), items: naturalSort(Object.keys(this.extraFilters.subTypes).reduce((e2, t2) => (e2.push({ key: t2, name: t2 }), e2), []), "name") });
  }
  _fetchBuffFilters() {
    this.filters.push({ path: "system.buffType", label: game.i18n.localize("FFD20.Type"), items: naturalSort(Object.entries(CONFIG.FFD20.buffTypes).reduce((e2, t2) => (e2.push({ key: t2[0], name: t2[1] }), e2), []), "name") });
  }
  async _render(e2, ...t2) {
    await super._render(e2, ...t2);
    {
      const e3 = this.element.find(".filter-content");
      for (const t3 of e3) {
        const e4 = t3.closest(".filter").dataset.path;
        0 === this.activeFilters[e4].length && $(t3).css("display", "none");
      }
    }
    this._determineFilteredItemCount();
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find('input[name="search"]').keyup(this._onFilterResults.bind(this)), e2.find('.filter input[type="checkbox"]').change(this._onActivateBooleanFilter.bind(this)), e2.find(".filter h3").click(this._toggleFilterVisibility.bind(this)), e2.find("button.refresh").click(this.refresh.bind(this)), this._initLazyLoad();
  }
  async _onEntry(e2, t2) {
    const s2 = game.packs.find((t3) => t3.collection === e2);
    (await s2.getDocument(t2)).sheet.render(true, { focus: true });
  }
  _onDragStart(e2) {
    const t2 = this.getAttribute("data-collection"), s2 = game.packs.find((e3) => e3.collection === t2);
    if (!s2)
      return e2.preventDefault(), false;
    e2.dataTransfer.setData("text/plain", JSON.stringify({ type: s2.documentClass.documentName, uuid: this.getAttribute("data-uuid") }));
  }
  _toggleFilterVisibility(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(t2).siblings(".filter-content")[0];
    "none" === s2.style.display ? s2.style.display = "block" : s2.style.display = "none";
  }
  _onFilterResults(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, filter = async (e3) => {
      this.filterQuery = e3, await this._filterResults();
    }, s2 = new RegExp(RegExp.escape(t2.value), "i");
    this.searchString = t2.value, this._filterTimeout && (clearTimeout(this._filterTimeout), this._filterTimeout = null), this._filterTimeout = setTimeout(() => filter(s2), 100);
  }
  _onActivateBooleanFilter(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".filter").dataset.path, l2 = t2.name, c2 = t2.checked, u2 = this._data.filters.find((e3) => e3.path === s2);
    if (u2 && (u2.active || (u2.active = {})), c2) {
      this.activeFilters[s2].indexOf(l2) < 0 && (this.activeFilters[s2].push(l2), u2.active[l2] = true);
    } else {
      const e3 = this.activeFilters[s2].indexOf(l2);
      e3 >= 0 && (this.activeFilters[s2].splice(e3, 1), null != u2.active[l2] && delete u2.active[l2]);
    }
    {
      const e3 = game.settings.get("ffd20", "compendiumFilters");
      setProperty(e3, `${this.type}.activeFilters`, this.activeFilters), game.settings.set("ffd20", "compendiumFilters", e3);
    }
    return this._filterResults();
  }
  async _filterResults() {
    this.lazyIndex = 0, this._clearEntryElements();
    this.element.find(".directory-list")[0].scrollTop = 0, await this._createInitialElements(), this._determineFilteredItemCount();
  }
  _determineFilteredItemCount() {
    let e2 = 0;
    for (const t2 of this.items)
      this._passesFilters(t2.item) && e2++;
    this.element.find('span[data-type="filterItemCount"]').text(game.i18n.localize("FFD20.FilteredItems").format(e2));
  }
  _passesFilters(e2) {
    if (!this.filterQuery.test(e2.name))
      return false;
    for (let [t2, s2] of Object.entries(this.activeFilters)) {
      if (0 === s2.length)
        continue;
      {
        let s3 = null;
        if ("spells" === this.type && "_spellLevel" === t2) {
          s3 = false;
          let l3 = false;
          const c2 = this.activeFilters[t2], u2 = [{ path: "learnedAt.class", type: "class" }, { path: "learnedAt.domain", type: "domain" }, { path: "learnedAt.subDomain", type: "subDomain" }, { path: "learnedAt.elementalSchool", type: "elementalSchool" }, { path: "learnedAt.bloodline", type: "bloodline" }];
          for (const t3 of u2) {
            const u3 = this.activeFilters[t3.path];
            if (u3 && u3.length) {
              l3 = true;
              for (const l4 of u3) {
                const u4 = getProperty(e2, `learnedAt.spellLevel.${t3.type}`);
                for (const e3 of c2)
                  u4[l4] === parseInt(e3) && (s3 = true);
              }
            }
          }
          if (!l3)
            for (const t3 of c2)
              e2.allSpellLevels.includes(parseInt(t3)) && (s3 = true);
        }
        if (false === s3)
          return false;
        if (true === s3)
          continue;
      }
      const l2 = getProperty(e2, t2);
      if (null == l2)
        return false;
      if ("number" == typeof l2 && (s2 = s2.map((e3) => parseFloat(e3)).filter((e3) => !isNaN(e3))), l2 instanceof Array) {
        if (!s2.every((e3) => l2.includes(e3)))
          return false;
      } else if (!s2.includes(l2))
        return false;
    }
    return true;
  }
  getSaveEntries() {
    const e2 = [], t2 = ["_id", "name", "img", "uuid"];
    switch (this.type) {
      case "spells":
        t2.push("system.learnedAt.class", "system.learnedAt.domain", "system.learnedAt.subDomain", "system.learnedAt.elementalSchool", "system.learnedAt.bloodline", "system.school", "system.multischool", "system.subschool", "system.types");
        break;
      case "items":
        t2.push("type", "system.properties", "system.weaponType", "system.weaponSubtype", "system.equipmentType", "system.equipmentSubtype", "system.slot", "system.consumableType", "system.subType");
        break;
      case "feats":
        t2.push("system.featType", "system.associations.classes", "system.tags");
        break;
      case "bestiary":
        t2.push("system.details.cr.total");
        break;
      case "classes":
        t2.push("system.classType", "system.classSubTypes", "system.parentClass", "system.bab", "system.hd", "system.classBaseMPTypes", "system.classCastingStat", "system.skillsPerLevel", "system.savingThrows.fort.value", "system.savingThrows.ref.value", "system.savingThrows.will.value");
        break;
      case "races":
        t2.push("system.creatureType", "system.subTypes");
    }
    for (const s2 of this.items) {
      const l2 = { collection: s2.collection, item: {} };
      for (const e3 of Object.keys(s2.item))
        "data" !== e3 && (l2.item[e3] = s2.item[e3]);
      for (const e3 of t2)
        hasProperty(s2.item, e3) && setProperty(l2, `item.${e3}`, getProperty(s2.item, e3));
      e2.push(l2);
    }
    return e2;
  }
  saveEntries() {
    const e2 = this.getSaveEntries(), t2 = game.settings.get("ffd20", "compendiumItems") || {};
    return t2[this.type] = e2, game.settings.set("ffd20", "compendiumItems", t2);
  }
  clearEntries() {
    const e2 = game.settings.get("ffd20", "compendiumItems") || {};
    return e2[this.type] = [], game.settings.set("ffd20", "compendiumItems", e2);
  }
}
class SidebarFFD20 extends Sidebar {
  constructor(...e2) {
    super(...e2), this.compendiums = { spells: new CompendiumBrowser({ type: "spells", documentType: "Item" }), items: new CompendiumBrowser({ type: "items", documentType: "Item" }), bestiary: new CompendiumBrowser({ type: "bestiary", documentType: "Actor" }) };
  }
  async _render(...e2) {
    await super._render(...e2);
    const t2 = this.element.find("#compendium .directory-footer"), s2 = await renderTemplate("systems/ffd20/templates/sidebar/compendiums-footer.hbs", {});
    t2.append(s2), this.activateExtraListeners(t2);
  }
  activateExtraListeners(e2) {
    e2.find(".compendium-footer .compendium.spells").click((e3) => this._onBrowseCompendium(e3, "spells")), e2.find(".compendium-footer .compendium.items").click((e3) => this._onBrowseCompendium(e3, "items")), e2.find(".compendium-footer .compendium.bestiary").click((e3) => this._onBrowseCompendium(e3, "bestiary"));
  }
  _onBrowseCompendium(e2, t2) {
    e2.preventDefault(), this.compendiums[t2]._render(true);
  }
}
class ExperienceDistributor extends FormApplication {
  constructor(e2 = [], t2 = {}) {
    e2 = e2.map((e3) => ExperienceDistributor.getActorData(e3)).filter((e3) => null != e3), super(e2, t2), this.bonusXP = 0;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "xp-distributor"], title: game.i18n.localize("FFD20.Application.XPDistributor.Title"), template: "systems/ffd20/templates/apps/xp-distributor.hbs", width: 430, height: 794, resizable: true, scrollY: [".selectors"] });
  }
  getData() {
    const e2 = super.getData();
    return e2.actors = { characters: this.getCharacters(), npcs: this.getNPCs() }, e2.labels = { xp: { total: `+ ${this.getTotalExperience().toLocaleString()}`, split: `+ ${this.getSplitExperience().toLocaleString()}` } }, e2.bonusXP = this.bonusXP, e2;
  }
  getCharacters() {
    return this.object.filter((e2) => "character" === e2.actor.type);
  }
  getNPCs() {
    return this.object.filter((e2) => "npc" === e2.actor.type);
  }
  activateListeners(e2) {
    null != jQuery && e2 instanceof jQuery && (e2 = e2[0]);
    const addListener = (t2, s2, l2) => e2.querySelectorAll(t2).forEach((e3) => e3.addEventListener(s2, l2));
    addListener(".character-selector .actor, .npc-selector .actor", "click", this._onClickActor.bind(this)), addListener(".bonus-xp input", "change", (e3) => {
      e3.preventDefault(), this.bonusXP = parseInt(e3.currentTarget.value), isNaN(this.bonusXP) && (this.bonusXP = 0), this.render();
    }), e2.addEventListener("drop", this._onDrop.bind(this)), addListener('button[name="split-evenly"], button[name="give-to-all"]', "click", this._onSubmit.bind(this)), addListener('button[name="cancel"]', "click", this._onCancel.bind(this));
  }
  async _onDrop(e2) {
    e2.preventDefault();
    const t2 = TextEditor.getDragEventData(e2);
    if ("Actor" === t2.type) {
      const e3 = await Actor.implementation.fromDropData(t2);
      "character" === e3.type && null != this.object.find((t3) => t3.actor === e3) || (this.object.push(mergeObject(this.constructor.getActorData(e3), { toggled: true })), this.render(true));
    }
  }
  _onClickActor(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = e2.currentTarget.dataset.id, l2 = this.object.find((e3) => e3.id === s2);
    l2 && (l2.toggled ? (l2.toggled = false, t2.classList.remove("toggled")) : (l2.toggled = true, t2.classList.add("toggled")), this.render());
  }
  async _onSubmit(e2) {
    e2.preventDefault();
    const t2 = "split-evenly" === e2.currentTarget.name ? this.getSplitExperience() : this.getTotalExperience();
    if (t2 > 0) {
      const e3 = this.getCharacters().filter((e4) => e4.toggled);
      for (const s3 of e3) {
        const e4 = { value: t2 };
        callOldNamespaceHookAll("ffd20.gainXp", "ffd20GainXp", s3.actor, e4), Hooks.callAll("ffd20GainXp", s3.actor, e4), s3.value = e4.value;
      }
      const s2 = e3.map((e4) => 0 !== e4.value && Number.isFinite(e4.value) ? { _id: e4.actor.id, "system.details.xp.value": e4.actor.system.details.xp.value + Math.floor(e4.value) } : null).filter((e4) => null != e4);
      Actor.implementation.updateDocuments(s2);
    }
    this.close();
  }
  _onCancel(e2) {
    e2.preventDefault(), this.close();
  }
  getTotalExperience() {
    const e2 = this.getNPCs().filter((e3) => e3.toggled);
    return e2.reduce((e3, t2) => e3 + t2.xp, this.bonusXP);
  }
  getSplitExperience() {
    const e2 = this.getCharacters().filter((e3) => e3.toggled), t2 = this.getTotalExperience();
    return e2.length > 0 ? Math.floor(t2 / e2.length) : 0;
  }
  static getActorData(e2) {
    if (!(e2 instanceof Actor))
      return null;
    const t2 = "npc" === e2.type ? e2.system.details.xp.value ?? 0 : 0;
    return { id: randomID(16), actor: e2, toggled: this.shouldActorBeToggled(e2), xp: t2, xpString: t2.toLocaleString() };
  }
  static shouldActorBeToggled(e2) {
    const t2 = "character" === e2.type, s2 = e2.system.attributes.hp.value < 0;
    return !(!t2 && !s2);
  }
}
class DamageTypeSelector extends FormApplication {
  constructor(e2, t2, s2, l2 = {}) {
    super(e2, l2), this._dataPath = t2, this._data = deepClone(s2), this._data || (this._data = []);
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { width: 720, height: 580, template: "systems/ffd20/templates/apps/damage-type-selector.hbs", closeOnSubmit: true });
  }
  get title() {
    return game.i18n.localize("FFD20.DamageType");
  }
  get id() {
    return `action-${this.object.id}_${this._dataPath}`;
  }
  get damageCategorySortOrder() {
    return ["physical", "energy", "misc"];
  }
  async getData(e2) {
    const t2 = await super.getData(e2), s2 = ffd20.registry.damageTypes;
    t2.damageTypes = s2.filter((e3) => !e3.isModifier).map((e3) => e3.toJSON()), t2.damageCategories = t2.damageTypes.reduce((e3, t3) => {
      let s3 = e3.find((e4) => e4.key === t3.category);
      return s3 || (s3 = { key: t3.category, label: `FFD20.DamageTypeCategory.${t3.category}`, data: [] }, e3.push(s3)), s3.data.push(t3), e3;
    }, []);
    {
      const e3 = this.damageCategorySortOrder;
      t2.damageCategories = t2.damageCategories.sort((t3, s3) => {
        const l2 = e3.indexOf(t3.key), c2 = e3.indexOf(s3.key);
        return -1 === l2 && c2 >= 0 ? 1 : -1 === c2 && l2 >= 0 ? -1 : l2 > c2 ? 1 : l2 < c2 ? -1 : 0;
      });
    }
    return t2.damageModifiers = s2.filter((e3) => e3.isModifier).map((e3) => e3.toJSON()), t2.data = this._data, t2;
  }
  activateListeners(e2) {
    e2.find(".damage-type").on("click", this._toggleDamageType.bind(this)), e2.find("*[name]").on("change", this._onChangeData.bind(this));
  }
  _onChangeData(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.name;
    let l2 = t2.value;
    switch ("checkbox" === t2.type && (l2 = t2.checked), t2.dataset.dtype) {
      case "Boolean":
        l2 = Boolean(l2);
        break;
      case "Number":
        l2 = Number(l2);
    }
    setProperty(this._data, s2, l2);
  }
  _toggleDamageType(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.id;
    this._data.values.includes(t2) ? this._data.values.splice(this._data.values.indexOf(t2), 1) : this._data.values.push(t2), this.render();
  }
  async _updateObject(e2, t2) {
    t2 = expandObject(t2);
    const s2 = this._data;
    return this.object.update({ [this._dataPath]: s2 });
  }
}
class ActiveEffectFFD20 extends ActiveEffect {
  async create(e2, t2 = {}) {
    const s2 = this.flags?.core?.statusId, l2 = this.origin, c2 = {};
    if (s2 && false === this.parent?.system.attributes.conditions[s2]) {
      c2[`system.attributes.conditions.${s2}`] = true, await this.parent.update(c2);
      const e3 = this.parent.effects.find((e4) => e4.getFlag("core", "statusId") === s2);
      if (e3)
        return e3;
    }
    if (l2) {
      const e3 = this.parent.items.get(l2.split(".")[3]);
      e3 && !e3.system.active && await e3.setActive(true);
    }
    return super.create(e2, t2);
  }
  async delete(e2 = {}) {
    const t2 = this.getFlag("core", "statusId"), s2 = this.origin?.match(/Item\.(?<itemId>\w+)/), l2 = s2?.groups.itemId, c2 = this.parent, u2 = t2 || l2 ? { render: false } : {}, m2 = await super.delete(mergeObject(u2, e2));
    if (t2 && c2.system.attributes.conditions[t2]) {
      const s3 = { [`system.attributes.conditions.${t2}`]: false };
      await c2.update(s3, e2);
    } else if (l2) {
      const t3 = c2.items.get(l2);
      "delete" === e2.type && e2.document === t3 || t3?.setActive(false, e2);
    }
    return m2;
  }
  get isTemporary() {
    return (this.duration.seconds ?? (this.duration.rounds || this.duration.turns) ?? 0) > 0 || this.getFlag("core", "statusId") || this.getFlag("ffd20", "show");
  }
}
class ItemAttackFFD20 extends ItemFFD20 {
  getConditionalTargets() {
    const e2 = super.getConditionalTargets();
    return e2.size = game.i18n.localize(CONFIG.FFD20.conditionalTargets.size._label), e2;
  }
  prepareData() {
    super.prepareData();
    const e2 = this.system.weaponGroups || { value: [], custom: "" };
    e2.selected = e2.value.reduce((e3, t2) => (e3[t2] = CONFIG.FFD20.weaponGroups[t2], e3), {}), e2.custom && e2.custom.split(CONFIG.FFD20.re.traitSeparator).forEach((t2, s2) => e2.selected[`custom${s2 + 1}`] = t2.trim()), e2.cssClass = foundry.utils.isEmpty(e2.selected) ? "inactive" : "";
  }
  get subType() {
    return this.system.attackType;
  }
}
class ItemBuffFFD20 extends ItemFFD20 {
  async _preUpdate(e2, t2, s2) {
    return e2.system?.active && void 0 === e2.system?.duration?.start && setProperty(e2, "system.duration.start", game.time.worldTime), super._preUpdate(e2, t2, s2);
  }
  async _preDelete(e2, t2) {
    const s2 = this.effect;
    return s2 && await s2.delete({ type: "delete", document: this }), t2.id === game.user.id && this.isActive && this.executeScriptCalls("toggle", { state: false }), super._preDelete(e2, t2);
  }
  getLabels({ actionId: t2 } = {}) {
    const s2 = super.getLabels({ actionId: t2 }), l2 = this.system;
    if (s2.buffType = e.buffTypes[l2.buffType], this.system.duration) {
      const t3 = this.system.duration, l3 = e.timePeriodsShort[t3.units];
      if (l3 && t3.value) {
        const e2 = RollFFD20.safeTotal(t3.value, this.getRollData());
        s2.duration = [e2, l3].filterJoin(" ");
      } else
        s2.duration = "";
    }
    return s2;
  }
  prepareDerivedItemData() {
    super.prepareDerivedItemData();
    const e2 = this.system;
    if (e2.duration.value?.length) {
      let t2 = 0;
      const s2 = this.getRollData(), l2 = RollFFD20.safeRoll(e2.duration.value || "0", s2).total;
      switch (e2.duration.units) {
        case "hour":
          t2 = 60 * l2 * 60;
          break;
        case "minute":
          t2 = 60 * l2;
          break;
        case "round":
          t2 = l2 * CONFIG.time.roundTime;
      }
      e2.duration.totalSeconds = t2;
    }
  }
  async toEffect({ noCreate: e2 = false } = {}) {
    if (!this.parent)
      return;
    const t2 = this.parent.effects.find((e3) => e3.origin == this.uuid);
    if (t2 || e2)
      return t2;
    const s2 = { label: this.name, icon: this.img, origin: this.uuid, disabled: !this.isActive, flags: { ffd20: { show: !this.system.hideFromToken && !game.settings.get("ffd20", "hideTokenConditions"), origin: { item: this.id } } } };
    return ActiveEffect.create(s2, { parent: this.parent });
  }
  getRawEffectData() {
    const e2 = super.getRawEffectData(), t2 = this.system.hideFromToken || game.settings.get("ffd20", "hideTokenConditions");
    e2["flags.ffd20.show"] = !t2, t2 && (e2.icon = null);
    let s2 = this.system.duration.value ?? null;
    if ("number" == typeof s2 && (s2 += ""), s2) {
      let t3 = 0;
      switch (this.system.duration.units) {
        case "minute":
        case "hour":
          t3 = this.totalDurationSeconds;
          break;
        case "turn": {
          const l2 = RollFFD20.safeRoll(s2, this.getRollData()).total;
          l2 > 0 && (e2.duration.turns = l2, t3 = l2 * CONFIG.time.roundTime);
          break;
        }
        case "round": {
          const l2 = RollFFD20.safeRoll(s2, this.getRollData()).total;
          l2 > 0 && (e2.duration.rounds = l2, t3 = l2 * CONFIG.time.roundTime);
          break;
        }
      }
      t3 > 0 && (e2.duration.seconds = t3);
    }
    return e2;
  }
  getRollData() {
    const e2 = super.getRollData();
    return e2.item.level = this.system.level, e2;
  }
  get isActive() {
    return this.system.active;
  }
  get subType() {
    return this.system.buffType;
  }
  get effect() {
    return this.parentActor?.effects.find((e2) => e2.origin?.indexOf(`Item.${this.id}`) > 0);
  }
  async setActive(e2, t2) {
    return this.update({ "system.active": e2 }, t2);
  }
}
class ItemClassFFD20 extends ItemFFD20 {
  async _preUpdate(e2, t2, s2) {
    await super._preUpdate(e2, t2, s2), hasProperty(e2, "system.level") && (this._prevLevel = this.system.level);
  }
  async update(e2, t2 = {}) {
    await super.update(e2, t2);
    const s2 = e2["system.level"] || getProperty(e2, "system.level");
    if (void 0 !== s2 && this.parent) {
      const e3 = this._prevLevel;
      void 0 !== e3 && (delete this._prevLevel, await this._onLevelChange(e3, s2));
    }
  }
  async delete(e2 = {}) {
    return await this._onLevelChange(this.system.level, 0), super.delete(e2);
  }
  async _onLevelChange(e2, t2) {
    if (!this.parent)
      return;
    const s2 = this.parentActor;
    if (t2 > e2) {
      const l2 = (getProperty(this, "system.links.classAssociations") || []).filter((s3, l3) => (s3.__index = l3, s3.level > e2 && s3.level <= t2)), c2 = [];
      for (const e3 of l2) {
        const t3 = e3.id.split(".").slice(0, 2).join("."), s3 = e3.id.split(".")[2], l3 = game.packs.get(t3), u2 = await l3.getDocument(s3);
        if (!u2) {
          const t4 = `Could not find class association: ${e3.id}`;
          console.warn(e3.id, t4, this), ui.notifications?.warn(t4);
          continue;
        }
        const m2 = game.items.fromCompendium(u2);
        setProperty(m2, "flags.ffd20.__co.level", duplicate(e3.level)), delete m2._id, c2.push({ data: m2, co: e3 });
      }
      if (c2.length) {
        const e3 = await s2.createEmbeddedDocuments("Item", c2.map((e4) => e4.data)), t3 = [], l3 = { _id: this.id };
        t3.push(l3);
        for (const s3 of e3) {
          const e4 = s3.getFlag("ffd20", "__co");
          l3[`flags.ffd20.links.classAssociations.${s3.id}`] = e4.level, t3.push({ _id: s3.id, "flags.ffd20.-=__co": null });
        }
        t3.length && await s2.updateEmbeddedDocuments("Item", t3);
      }
    }
    if (t2 < e2) {
      const e3 = duplicate(this.getFlag("ffd20", "links.classAssociations") || {}), s3 = [];
      for (const [l2, c2] of Object.entries(e3)) {
        const u2 = this.parent.items.get(l2);
        u2 ? c2 > t2 && (s3.push(u2.id), delete e3[l2]) : delete e3[l2];
      }
      await this.setFlag("ffd20", "links.classAssociations", e3), await Item.implementation.deleteDocuments(s3, { parent: this.parent });
    }
    callOldNamespaceHookAll("ffd20.classLevelChange", "ffd20ClassLevelChange", this.actor, this, e2, t2), Hooks.callAll("ffd20ClassLevelChange", this.actor, this, e2, t2);
  }
  prepareBaseData() {
    super.prepareBaseData();
    const e2 = this.system;
    e2.hitDice = void 0, e2.mythicTier = void 0;
  }
  prepareDerivedData() {
    super.prepareDerivedData();
    const e2 = this.system, t2 = game.settings.get("ffd20", "useFractionalBaseBonuses");
    {
      const s3 = t2 ? CONFIG.FFD20.classFractionalSavingThrowFormulas : CONFIG.FFD20.classSavingThrowFormulas;
      for (const l2 of Object.keys(CONFIG.FFD20.savingThrows)) {
        const c2 = e2.classType || "base";
        let u2;
        const m2 = e2.savingThrows[l2], d2 = m2.value;
        u2 = "custom" === d2 ? m2.custom || "0" : s3[c2][d2], null == u2 && (u2 = "0");
        const h2 = RollFFD20.safeRoll(u2, { level: e2.level, hitDice: this.hitDice }).total;
        m2.base = h2, t2 && (m2.good = true === s3[c2].goodSave && "high" === d2);
      }
    }
    {
      const s3 = t2 ? CONFIG.FFD20.classFractionalBABFormulas : CONFIG.FFD20.classBABFormulas, l2 = e2.bab;
      let c2;
      c2 = "custom" === l2 ? e2.babFormula || "0" : s3[l2] || "0", e2.babBase = RollFFD20.safeRoll(c2, { level: e2.level, hitDice: this.hitDice }).total;
    }
    const s2 = this.actor;
    if (s2?.system) {
      s2.system;
      const e3 = this.system;
      let t3 = e3.tag;
      t3 || (t3 = createTag(this.name));
      let l2 = game.settings.get("ffd20", "healthConfig");
      const c2 = this.hasPlayerOwner;
      l2 = "racial" === e3.classType ? l2.hitdice.Racial : c2 ? l2.hitdice.PC : l2.hitdice.NPC, e3.classType || console.warn(`${this.name} lacks class type`, this);
      const u2 = "base" === (e3.classType || "base");
      if (!this.actor.classes)
        return;
      s2.classes[t3] = { level: e3.level, name: this.name, hd: e3.hd, hitDice: this.hitDice, mythicTier: this.mythicTier, bab: e3.bab, hp: l2.auto, savingThrows: { fort: e3.savingThrows.fort.base, ref: e3.savingThrows.ref.base, will: e3.savingThrows.will.base }, fc: { hp: u2 ? e3.fc.hp.value : 0, skill: u2 ? e3.fc.skill.value : 0, alt: u2 ? e3.fc.alt.value : 0 } };
    }
  }
  get subType() {
    return this.system.classType;
  }
  get hitDice() {
    const e2 = this.system;
    if (void 0 === e2.hitDice)
      if (e2.customHD?.length > 0) {
        const t2 = { item: { level: this.system.level } };
        e2.hitDice = RollFFD20.safeRoll(e2.customHD, t2).total;
      } else
        e2.hitDice = "mythic" === this.subType ? 0 : e2.level;
    return e2.hitDice;
  }
  get mythicTier() {
    const e2 = this.system;
    return void 0 === e2.mythicTier && (e2.mythicTier = "mythic" === this.subType ? e2.level : 0), e2.mythicTier;
  }
}
class ItemConsumableFFD20 extends ItemFFD20 {
  get subType() {
    return this.system.consumableType;
  }
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && this.system.quantity > 0 && this.executeScriptCalls("changeQuantity", { quantity: { previous: this.system.quantity, new: 0 } }), super._preDelete(e2, t2);
  }
}
class ItemContainerFFD20 extends ItemFFD20 {
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && this.system.quantity > 0 && this.executeScriptCalls("changeQuantity", { quantity: { previous: this.system.quantity, new: 0 } }), super._preDelete(e2, t2);
  }
  prepareBaseData() {
    super.prepareBaseData(), "object" != typeof this.system.weight && (this.system.weight = { value: this.system.weight });
    const e2 = (100 - (this.system.weightReduction ?? 0)) / 100;
    this.system.weight.currency = this._calculateCoinWeight(this.system) * e2;
  }
  prepareWeight() {
    super.prepareWeight();
    const e2 = this.system.weight;
    e2.contents = this.items.reduce((e3, t2) => e3 + t2.system.weight.total, this._calculateCoinWeight(this.system)), e2.converted.contents = ffd20.utils.convertWeight(e2.contents);
  }
  async createContainerContent(e2, t2 = { raw: false }) {
    const s2 = game.user, l2 = { temporary: false, renderSheet: false };
    let c2 = duplicate(getProperty(this, "system.inventoryItems") || []);
    if (e2 = e2 instanceof Array ? e2 : [e2], !l2.temporary && !l2.noHook)
      for (const t3 of e2) {
        if (false === Hooks.call("preCreateItem", this, t3, l2, s2.id))
          return console.debug(`${vtt} | Item creation prevented by preCreate hook`), null;
        t3._id = randomID(16);
      }
    const u2 = e2.map((e3) => t2.raw ? e3 : new ItemFFD20(e3).toObject());
    c2.push(...u2);
    {
      const e3 = [];
      c2 = c2.filter((t3) => !e3.includes(t3._id) && (e3.push(t3._id), true));
    }
    await this.update({ "system.inventoryItems": c2 });
  }
  getContainerContent(e2) {
    return this.items.get(e2);
  }
  async deleteContainerContent(e2) {
    const t2 = "ContainerContent", s2 = game.user, l2 = { noHook: false };
    e2 = e2 instanceof Array ? e2 : [e2];
    const c2 = new Set(e2), u2 = duplicate(getProperty(this, "system.inventoryItems") || []).filter((e3) => {
      if (!c2.has(e3._id))
        return true;
      if (!l2.noHook) {
        if (false === Hooks.call(`preDelete${t2}`, this, e3, l2, s2.id))
          return console.debug(`${vtt} | ${t2} update prevented by preUpdate hook`), true;
      }
      return false;
    }, []);
    await this.update({ "system.inventoryItems": u2 });
  }
  async updateContainerContents(e2) {
    const t2 = "ContainerContent", s2 = game.user, l2 = { diff: true }, c2 = /* @__PURE__ */ new Map();
    e2 = e2 instanceof Array ? e2 : [e2];
    for (const t3 of e2) {
      if (!t3._id)
        throw new Error("You must provide an id for every Embedded Document in an update operation");
      c2.set(t3._id, t3);
    }
    const u2 = this.items.reduce((e3, u3) => {
      if (!c2.has(u3.id))
        return e3;
      let m3 = c2.get(u3.id);
      if (l2.diff) {
        if (m3 = diffObject(u3, expandObject(m3)), foundry.utils.isEmpty(m3))
          return e3;
        m3._id = u3.id;
      }
      if (!l2.noHook) {
        if (false === Hooks.call(`preUpdate${t2}`, this, u3, m3, l2, s2.id))
          return console.debug(`${vtt} | ${t2} update prevented by preUpdate hook`), e3;
      }
      return e3.push(m3), e3;
    }, []);
    if (!u2.length)
      return [];
    let m2 = duplicate(this.system.inventoryItems).map((e3) => {
      for (const t3 of u2)
        if (t3._id === e3._id)
          return mergeObject(e3, t3);
      return e3;
    });
    {
      const e3 = [];
      m2 = m2.filter((t3) => !e3.includes(t3._id) && (e3.push(t3._id), true));
    }
    await this.update({ "system.inventoryItems": m2 });
  }
  getTotalCurrency({ inLowestDenomination: e2 = false } = {}) {
    const t2 = this.system.currency, s2 = 1e3 * t2.pgil + 100 * t2.gil + 10 * t2.sgil + t2.cgil;
    return e2 ? s2 : s2 / 100;
  }
  getValue({ recursive: e2 = true, sellValue: t2 = 0.5, inLowestDenomination: s2 = false, forceUnidentified: l2 = false } = {}) {
    let c2 = super.getValue(...arguments);
    return e2 ? (this.items.forEach((l3) => {
      c2 += l3.getValue({ recursive: e2, sellValue: t2, inLowestDenomination: s2 });
    }), c2) : c2;
  }
}
class ItemEquipmentFFD20 extends ItemFFD20 {
  async _preUpdate(e2, t2) {
    const s2 = e2.system?.equipmentType;
    if (void 0 !== s2 && s2 !== this.system.equipmentType) {
      const t3 = e2.system?.equipmentSubtype ?? this.system.equipmentSubtype ?? "", l2 = Object.keys(CONFIG.FFD20.equipmentTypes[s2]).filter((e3) => !e3.startsWith("_"));
      t3 && l2.includes(t3) || setProperty(e2, "system.equipmentSubtype", l2[0]);
      const c2 = e2.system?.slot ?? this.system.slot ?? "", u2 = Object.keys(CONFIG.FFD20.equipmentSlots[s2]);
      c2 && u2.includes(c2) || setProperty(e2, "system.slot", u2[0]);
    }
  }
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && (this.isActive && this.executeScriptCalls("equip", { equipped: false }), this.system.quantity > 0 && this.executeScriptCalls("changeQuantity", { quantity: { previous: this.system.quantity, new: 0 } })), super._preDelete(e2, t2);
  }
  get subType() {
    return this.system.equipmentType;
  }
  getLabels({ actionId: t2 } = {}) {
    const s2 = super.getLabels({ actionId: t2 }), l2 = this.system;
    let c2 = this.subType;
    const u2 = Object.keys(e.equipmentTypes);
    u2.includes(c2) || (c2 = u2[0]);
    let m2 = this.system.equipmentSubtype;
    const d2 = Object.keys(e.equipmentTypes[c2]).filter((e2) => !e2.startsWith("_"));
    d2.includes(m2) || (m2 = d2[0]), s2.equipmentType = e.equipmentTypes[c2]._label, s2.equipmentSubtype = e.equipmentTypes[c2][m2];
    const h2 = this.showUnidentifiedData ? l2.armor.value || 0 : (l2.armor.value || 0) + (l2.armor.enh || 0);
    return s2.armor = h2 > 0 ? `${h2} AC` : "", s2;
  }
  prepareData() {
    const e2 = super.prepareData();
    if (CONFIG.FFD20, "" === e2.armor.dex ? e2.armor.dex = null : "string" == typeof e2.armor.dex && /\d+/.test(e2.armor.dex) && (e2.armor.dex = parseInt(e2.armor.dex)), null == e2.armor.enh && (e2.armor.enh = 0), true === e2.equipped) {
      const t2 = this.actor;
      if (!t2?.system || !t2?.equipment)
        return;
      t2.system;
      const s2 = CONFIG.FFD20.shieldTypes, l2 = CONFIG.FFD20.armorTypes;
      switch (e2.equipmentType) {
        case "shield": {
          const l3 = e2.equipmentSubtype;
          let c2 = t2.equipment.shield.type;
          "other" === l3 && c2 < s2.other ? c2 = s2.other : "lightShield" === l3 && c2 < s2.light ? c2 = s2.light : "heavyShield" === l3 && c2 < s2.heavy ? c2 = s2.heavy : "towerShield" === l3 && c2 < s2.tower && (c2 = s2.tower), t2.equipment.shield.type !== c2 && (t2.equipment.shield.type = c2, t2.equipment.shield.id = this.id);
          break;
        }
        case "armor": {
          const s3 = e2.equipmentSubtype;
          let c2 = t2.equipment.armor.type;
          "lightArmor" === s3 && c2 < l2.light ? c2 = l2.light : "mediumArmor" === s3 && c2 < l2.medium ? c2 = l2.medium : "heavyArmor" === s3 && c2 < l2.heavy && (c2 = l2.heavy), c2 !== t2.equipment.armor.type && (t2.equipment.armor.type = c2, t2.equipment.armor.id = this.id);
          break;
        }
      }
    }
  }
  async setActive(e2, t2) {
    return this.update({ "system.equipped": e2 }, t2);
  }
  get isActive() {
    return this.system.equipped;
  }
}
class ItemFeatFFD20 extends ItemFFD20 {
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && this.isActive && this.executeScriptCalls("toggle", { state: false }), super._preDelete(e2, t2);
  }
  async setActive(e2, t2) {
    return this.update({ "data.disabled": !e2 }, t2);
  }
  get isActive() {
    return !this.system.disabled;
  }
  get subType() {
    return this.system.featType;
  }
  getLabels({ actionId: t2 } = {}) {
    const s2 = super.getLabels({ actionId: t2 }), { featType: l2, abilityType: c2 } = this.system;
    return s2.featType = e.featTypes[l2], c2 && "none" !== c2 ? s2.abilityType = e.abilityTypes[c2].short : s2.abilityType && delete s2.abilityType, s2;
  }
  getTypeChatData(e2, t2, s2, l2) {
    super.getTypeChatData(e2, t2, s2, l2), t2.abilityType && s2.push(t2.abilityType);
  }
}
class ItemLootFFD20 extends ItemFFD20 {
  get subType() {
    return this.system.subType;
  }
  get extraType() {
    return this.system.extraType;
  }
  async _preUpdate(e2, t2, s2) {
    await super._preUpdate(e2, t2, s2), void 0 !== e2.system?.subType && e2.system?.subType !== this.system.subType && void 0 === e2.system?.extraType && setProperty(e2, "system.extraType", "");
  }
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && (this.isActive && this.executeScriptCalls("equip", { equipped: false }), this.system.quantity > 0 && this.executeScriptCalls("changeQuantity", { quantity: { previous: this.system.quantity, new: 0 } })), super._preDelete(e2, t2);
  }
  async setActive(e2, t2) {
    return this.update({ "system.equipped": e2 }, t2);
  }
  get isActive() {
    return "gear" !== this.subType || this.system.equipped;
  }
}
class ItemRaceFFD20 extends ItemFFD20 {
  async _preCreate(e2, t2, s2) {
    const l2 = this.parent instanceof Actor ? this.parent : null;
    if (l2) {
      const e3 = l2.items.find((e4) => "race" === e4.type && e4 !== this);
      if (e3) {
        await e3.delete();
        const t3 = l2.system.traits.size;
        t3 !== this.system.size && e3.system.size;
      }
    }
  }
  async _preUpdate(e2, t2, s2) {
    if (await super._preUpdate(e2, t2, s2), "basic" === this.parent?.type)
      return;
    const l2 = getProperty(e2, "system.size");
    if (this.parent && void 0 !== l2) {
      const e3 = this.parent.system.traits.size;
      this.system.size === e3 && l2 !== e3 && (t2._ffd20SizeChanged = true);
    }
  }
  _onUpdate(e2, t2, s2) {
    if (super._onUpdate(e2, t2, s2), this.parent && t2._ffd20SizeChanged) {
      if ("basic" === this.parent.type)
        return;
      this.parent.update({ "system.traits.size": this.system.size });
    }
  }
  _onDelete(e2, t2, s2) {
    super._onDelete(e2, t2, s2), this.parent?.race === this && (this.parent._race = null);
  }
  prepareBaseData() {
    super.prepareBaseData();
    const e2 = this.actor;
    e2 && (e2._race = this);
  }
}
class ItemSpellFFD20 extends ItemFFD20 {
  getLabels({ actionId: t2, rollData: s2 } = {}) {
    const l2 = super.getLabels({ actionId: t2 }), c2 = this.system;
    return l2.level = e.spellLevels[c2.level], l2.school = e.spellSchools[c2.school], l2.components = this.getSpellComponents().map((e2) => e2[0]).join(" "), l2;
  }
  getEffectiveSpellLevel(e2 = 0) {
    const t2 = this.system.slOffset ?? 0, s2 = this.system.level;
    return Math.max(0, s2 + t2 + e2);
  }
  getEffectiveCasterLevel(e2 = 0) {
    const t2 = this.system.clOffset ?? 0, s2 = this.spellbook?.cl.total ?? 0;
    return Math.max(0, s2 + t2 + e2);
  }
  prepareDerivedItemData() {
    super.prepareDerivedItemData(), this._updateSpellDescription();
  }
  preCreateData(e2, t2, s2) {
    const l2 = super.preCreateData(e2, t2, s2);
    return this.parentActor && true === this.spellbook?.psychic && (true === this.system.components?.verbal && (l2["system.components.verbal"] = false, l2["system.components.thought"] = true), true === this.system.components?.somatic && (l2["system.components.somatic"] = false, l2["system.components.emotion"] = true)), l2;
  }
  getRollData() {
    const e2 = super.getRollData();
    if (null != this.parent) {
      const t2 = this.spellbook;
      if (null != t2) {
        const s2 = t2.ability;
        let l2 = "";
        "" !== s2 && (l2 = getProperty(this.parent, `system.abilities.${s2}.mod`)), e2.cl = this.casterLevel || 0, e2.sl = this.spellLevel || 0, e2.classLevel = "_hd" === t2.class ? e2.attributes.hd?.total ?? e2.details.level.value : t2.class?.length > 0 && getProperty(e2, `classes.${t2.class}.level`) || 0, e2.ablMod = l2;
      }
    }
    return e2;
  }
  getConditionalSubTargets(e2) {
    const t2 = super.getConditionalSubTargets(e2);
    return "effect" === e2 && (t2.cl = game.i18n.localize("FFD20.CasterLevel")), "misc" === e2 && "spell" === this.type && this.useSpellPoints() && (t2.charges = game.i18n.localize("FFD20.SpellPointsCost")), t2;
  }
  getTypeChatData(e2, t2, s2, l2) {
    l2.item.sr && s2.push(game.i18n.localize("FFD20.SpellResistance")), this.isCharged && !this.system.atWill && (this.useSpellPoints() ? s2.push(`${game.i18n.localize("FFD20.SpellPoints")}: ${this.charges}/${this.maxCharges}`) : s2.push(`${game.i18n.localize("FFD20.ChargePlural")}: ${this.charges}/${this.maxCharges}`));
  }
  async addUses(e2, t2 = null) {
    if (!this.parent)
      return;
    if (this.system.atWill)
      return;
    const s2 = this.spellbook;
    if (!s2)
      return;
    const l2 = s2.spontaneous, c2 = getProperty(this, "system.spellbook") || "primary", u2 = getProperty(this, "system.level");
    if (this.useSpellPoints()) {
      const t3 = this.getSpellUses(), s3 = {}, l3 = getProperty(this.parent, "system.attributes.mp.temp"), c3 = getProperty(this.parent, "system.attributes.mp.value");
      if (0 === l3)
        return s3["system.attributes.mp.value"] = t3 + e2, this.parent.update(s3);
      if (l3 >= -1 * e2)
        return s3["system.attributes.mp.temp"] = l3 + e2, this.parent.update(s3);
      {
        let t4 = l3 + e2;
        return s3["system.attributes.mp.temp"] = 0, s3["system.attributes.mp.value"] = c3 + t4, this.parent.update(s3);
      }
    }
    {
      const m2 = l2 ? Math.max(0, (getProperty(s2, `spells.spell${u2}.value`) || 0) + e2) : Math.max(0, (getProperty(this, "system.preparation.preparedAmount") || 0) + e2);
      if (l2) {
        const e3 = {};
        return e3[`system.attributes.spells.spellbooks.${c2}.spells.spell${u2}.value`] = m2, this.parent.update(e3);
      }
      {
        const e3 = "system.preparation.preparedAmount";
        if (null == t2)
          return (t2 = {})[e3] = m2, this.update(t2);
        t2[e3] = m2;
      }
    }
    return null;
  }
  async addCharges(e2) {
    return this.addUses(e2);
  }
  get isCharged() {
    return !this.system.atWill;
  }
  get charges() {
    return this.getSpellUses();
  }
  get maxCharges() {
    return this.getSpellUses(true);
  }
  getDefaultChargeCost({ rollData: e2 } = {}) {
    if (this.system.atWill)
      return 0;
    if (this.useSpellPoints()) {
      e2 ??= this.getRollData();
      const t2 = this.getDefaultChargeFormula();
      return RollFFD20.safeRoll(t2, e2).total;
    }
    return super.getDefaultChargeCost({ rollData: e2 });
  }
  getDefaultChargeFormula() {
    return this.useSpellPoints() ? this.system.spellPoints?.cost || "0" : super.getDefaultChargeFormula();
  }
  get spellLevel() {
    return this.system.level + (this.system.slOffset || 0);
  }
  get casterLevel() {
    const e2 = this.spellbook;
    return e2 ? e2.cl.total + (this.system.clOffset || 0) : null;
  }
  get spellbook() {
    const e2 = this.system.spellbook;
    return this.parent?.system?.attributes?.spells.spellbooks[e2];
  }
  getDC(e2 = null) {
    if (!this.parent)
      return 0;
    const t2 = this.spellbook;
    if (t2) {
      let s2 = t2.baseDCFormula;
      const l2 = (e2 = e2 ?? this.getRollData()).item;
      l2.save.dc.length > 0 && (s2 += ` + ${l2.save.dc}`);
      const c2 = e2.dcBonus ?? 0;
      return RollFFD20.safeRoll(s2, e2).total + c2;
    }
    return 10;
  }
  getSpellUses(e2 = false) {
    if (!this.parent)
      return 0;
    const t2 = this.system;
    if (t2.atWill)
      return Number.POSITIVE_INFINITY;
    const s2 = this.spellbook;
    if (!s2)
      return 0;
    const l2 = s2.spontaneous, c2 = t2.level;
    return this.useSpellPoints() ? e2 ? this.parent.system.attributes.mp.max : this.parent.system.attributes.mp.value + this.parent.system.attributes.mp.temp : l2 ? true === t2.preparation.spontaneousPrepared ? e2 ? getProperty(s2, `spells.spell${c2}.max`) || 0 : getProperty(s2, `spells.spell${c2}.value`) || 0 : 0 : e2 ? t2.preparation?.maxAmount ?? 0 : t2.preparation?.preparedAmount ?? 0;
  }
  useSpellPoints() {
    return this.spellbook?.spellPoints?.useSystem ?? false;
  }
  getSpellComponents(e2) {
    e2 || (e2 = duplicate(this.system));
    const t2 = CONFIG.FFD20.re.traitSeparator;
    let s2 = [];
    const l2 = { V: game.i18n.localize("FFD20.SpellComponentKeys.Verbal"), S: game.i18n.localize("FFD20.SpellComponentKeys.Somatic"), T: game.i18n.localize("FFD20.SpellComponentKeys.Thought"), E: game.i18n.localize("FFD20.SpellComponentKeys.Emotion"), M: game.i18n.localize("FFD20.SpellComponentKeys.Material"), F: game.i18n.localize("FFD20.SpellComponentKeys.Focus"), DF: game.i18n.localize("FFD20.SpellComponentKeys.DivineFocus") };
    for (const [c3, u3] of Object.entries(e2.components ?? {}))
      "value" === c3 && u3.length > 0 ? s2.push(...u3.split(t2)) : "verbal" === c3 && u3 ? s2.push(l2.V) : "somatic" === c3 && u3 ? s2.push(l2.S) : "thought" === c3 && u3 ? s2.push(l2.T) : "emotion" === c3 && u3 ? s2.push(l2.E) : "material" === c3 && u3 ? s2.push(l2.M) : "focus" === c3 && u3 && s2.push(l2.F);
    1 === getProperty(e2, "components.divineFocus") && s2.push(l2.DF);
    const c2 = getProperty(e2, "components.divineFocus"), u2 = [l2.V, l2.S, l2.T, l2.E, l2.M, l2.F, l2.DF];
    return s2.sort((e3, t3) => {
      const l3 = [u2.indexOf(e3), s2.indexOf(t3)];
      return -1 === l3[0] && -1 === l3[1] ? 0 : -1 === l3[0] && l3[1] >= 0 ? 1 : l3[0] >= 0 && -1 === l3[1] ? -1 : l3[0] - l3[1];
    }), s2 = s2.map((t3) => (t3 === l2.M && (2 === c2 && (t3 = `${l2.M}/${l2.DF}`), getProperty(e2, "system.materials.value") && (t3 = `${t3} (${getProperty(e2, "system.materials.value")})`)), t3 === l2.F && (3 === c2 && (t3 = `${l2.F}/${l2.DF}`), getProperty(e2, "system.materials.focus") && (t3 = `${t3} (${getProperty(e2, "system.materials.focus")})`)), t3)), s2;
  }
  static getMinimumCasterLevelBySpellData(e2) {
    const t2 = getProperty(e2, "system.learnedAt.class").reduce((e3, t3) => {
      const s3 = t3[0].split("/");
      for (const l2 of s3)
        e3.push([l2, t3[1]]);
      return e3;
    }, []), s2 = [9, 20];
    for (const e3 of t2) {
      s2[0] = Math.min(s2[0], e3[1]);
      const t3 = CONFIG.FFD20.classCasterType[e3[0]] || "high";
      "high" === t3 ? s2[1] = Math.min(s2[1], 1 + 2 * Math.max(0, e3[1] - 1)) : ("med" === t3 || "low" === t3) && (s2[1] = Math.min(s2[1], 1 + 3 * Math.max(0, e3[1] - 1)));
    }
    return s2;
  }
  static _replaceConsumableConversionString(e2, t2) {
    return e2 = (e2 = e2.replace(/@sl/g, t2.sl)).replace(/@cl/g, "@item.cl");
  }
  static async toConsumable(e2, t2) {
    const s2 = e2.system.actions?.[0] ?? {}, l2 = { type: "consumable", name: e2.name }, c2 = ffd20.components.ItemAction.defaultData, [u2, m2] = this.getMinimumCasterLevelBySpellData(e2), d2 = e2.sl ?? u2 ?? 1, h2 = e2.cl ?? m2 ?? 1, p2 = e2.system.materials?.gilValue ?? 0, g2 = e2.system;
    g2.sl = d2, g2.cl = h2, l2["system.consumableType"] = t2, "wand" === t2 ? (l2.name = game.i18n.localize("FFD20.CreateItemWandOf").format(e2.name), l2.img = "systems/ffd20/icons/items/inventory/wand-star.jpg", l2["system.price"] = 0, l2["system.uses.pricePerUse"] = Math.floor((Math.max(0.5, d2) * h2 * 750 + p2) / 50 * 100) / 100, l2["system.hardness"] = 5, l2["system.hp.max"] = 5, l2["system.hp.value"] = 5, c2.name = game.i18n.localize("FFD20.Use"), c2.img = l2.img) : "potion" === t2 ? (l2.name = game.i18n.localize("FFD20.CreateItemPotionOf").format(e2.name), l2.img = "systems/ffd20/icons/items/potions/minor-blue.jpg", l2["system.price"] = Math.max(0.5, d2) * h2 * 50 + p2, l2["system.hardness"] = 1, l2["system.hp.max"] = 1, l2["system.hp.value"] = 1, c2.range = { value: 0, units: "personal" }, c2.name = game.i18n.localize("FFD20.Drink"), c2.img = l2.img) : "scroll" === t2 && (l2.name = game.i18n.localize("FFD20.CreateItemScrollOf").format(e2.name), l2.img = "systems/ffd20/icons/items/inventory/scroll-magic.jpg", l2["system.price"] = Math.max(0.5, d2) * h2 * 25 + p2, l2["system.hardness"] = 0, l2["system.hp.max"] = 1, l2["system.hp.value"] = 1, c2.name = game.i18n.localize("FFD20.Use"), c2.img = l2.img), "wand" === t2 ? (l2["system.uses.maxFormula"] = "50", l2["system.uses.value"] = 50, l2["system.uses.max"] = 50, l2["system.uses.per"] = "charges") : l2["system.uses.per"] = "single", c2.activation.type = "standard", c2.unchainedAction.activation.type = "action", c2.unchainedAction.activation.cost = 2, "potion" !== t2 && (c2.measureTemplate = s2.measureTemplate, ["close", "medium", "long"].includes(s2.range.units) ? c2.range = { units: "ft", value: RollFFD20.safeTotal(CONFIG.FFD20.spellRangeFormulas[s2.range.units], g2).toString() } : c2.range = s2.range), c2.actionType = e2.actionType;
    for (const e3 of s2.damage?.parts ?? [])
      c2.damage.parts.push([this._replaceConsumableConversionString(e3[0], g2), e3[1]]);
    s2.save && (c2.save.description = s2.save.description, c2.save.type = s2.save.type, c2.save.dc = `10 + ${e2.sl}[${game.i18n.localize("FFD20.SpellLevel")}] + ${Math.floor(e2.sl / 2)}[${game.i18n.localize("FFD20.SpellcastingAbility")}]`), c2.actionType = s2.actionType, c2.attackNotes = s2.attackNotes, c2.effectNotes = s2.effectNotes, c2.attackBonus = s2.attackBonus, c2.critConfirmBonus = s2.critConfirmBonus;
    for (const e3 of ["attackNotes", "effectNotes"]) {
      const t3 = getProperty(c2, e3);
      if (t3)
        for (let e4 = 0; e4 < t3.length; e4++) {
          const s3 = t3[e4];
          t3[e4] = this._replaceConsumableConversionString(s3, g2);
        }
    }
    return l2["system.cl"] = h2, l2["system.aura.school"] = e2.system.school, l2["system.description.value"] = this._replaceConsumableConversionString(await renderTemplate("systems/ffd20/templates/internal/consumable-description.hbs", { origData: e2, data: l2, isWand: "wand" === t2, isPotion: "potion" === t2, isScroll: "scroll" === t2, sl: d2, cl: h2, config: CONFIG.FFD20 }), g2), l2["system.actions"] = [c2], new ItemFFD20(expandObject(l2)).toObject();
  }
  async _updateSpellDescription(e2) {
    this.system.description.value = await renderTemplate("systems/ffd20/templates/internal/spell-description.hbs", mergeObject(e2 ?? {}, this.spellDescriptionData));
  }
  get canCast() {
    if (this.system.atWill)
      return true;
    const e2 = this.charges;
    return this.isCharged && e2 > 0 || this.spellbook?.spontaneous && this.system.preparation.spontaneousPrepared && e2 > 0;
  }
  get fullDescription() {
    return super.fullDescription + this.system.shortDescription;
  }
  get spellDescriptionData() {
    const e2 = CONFIG.FFD20.re.traitSeparator, t2 = this.system, s2 = this.firstAction, l2 = s2?.data ?? {}, c2 = { school: (CONFIG.FFD20.spellSchools[getProperty(t2, "school")] || "").toLowerCase(), multi: getProperty(t2, "multi"), multischool: (CONFIG.FFD20.multiSchools[getProperty(t2, "multischool")] || "").toLowerCase(), subschool: getProperty(t2, "subschool") || "", types: "" }, u2 = { data: mergeObject(this.system, t2, { inplace: false }), label: c2 }, m2 = getProperty(t2, "types");
    "string" == typeof m2 && m2.length > 0 && (c2.types = m2.split(e2).join(", "));
    const d2 = getProperty(t2, "srinfo");
    "string" == typeof d2 && d2.length > 0 && (c2.srinfo = d2.split(e2).join(", ")), u2.learnedAt = {}, u2.learnedAt.class = (getProperty(t2, "learnedAt.class") || []).map((e3) => `${e3[0]} ${e3[1]}`).sort().join(", "), u2.learnedAt.domain = (getProperty(t2, "learnedAt.domain") || []).map((e3) => `${e3[0]} ${e3[1]}`).sort().join(", "), u2.learnedAt.subDomain = (getProperty(t2, "learnedAt.subDomain") || []).map((e3) => `${e3[0]} ${e3[1]}`).sort().join(", "), u2.learnedAt.elementalSchool = (getProperty(t2, "learnedAt.elementalSchool") || []).map((e3) => `${e3[0]} ${e3[1]}`).sort().join(", "), u2.learnedAt.bloodline = (getProperty(t2, "learnedAt.bloodline") || []).map((e3) => `${e3[0]} ${e3[1]}`).sort().join(", ");
    const h2 = game.settings.get("ffd20", "unchainedActionEconomy") ? getProperty(s2, "system.unchainedAction.activation") : getProperty(s2, "system.activation");
    if (null != h2) {
      const e3 = h2.cost, t3 = h2.type, s3 = game.settings.get("ffd20", "unchainedActionEconomy") ? CONFIG.FFD20.abilityActivationTypes_unchained : CONFIG.FFD20.abilityActivationTypes, l3 = game.settings.get("ffd20", "unchainedActionEconomy") ? CONFIG.FFD20.abilityActivationTypesPlurals_unchained : CONFIG.FFD20.abilityActivationTypesPlurals;
      t3 && (null != l3[t3] ? c2.castingTime = 1 === e3 ? `${s3[t3]}` : `${l3[t3]}` : c2.castingTime = `${s3[t3]}`), Number.isNaN(e3) || null == c2.castingTime || (c2.castingTime = `${e3} ${c2.castingTime}`), c2.castingTime && (c2.castingTime = c2.castingTime.toLowerCase());
    }
    c2.components = this.getSpellComponents(t2).join(", ");
    {
      const e3 = l2.duration?.value;
      e3 && (c2.duration = e3);
    }
    {
      const e3 = l2.spellEffect;
      e3 && (c2.effect = e3);
    }
    {
      const e3 = l2.target?.value;
      e3 && (c2.targets = e3);
    }
    {
      const e3 = l2.range?.units, t3 = l2.range?.value;
      if (null != e3 && "none" !== e3) {
        c2.range = (CONFIG.FFD20.distanceUnits[e3] || "").toLowerCase();
        let s3 = game.settings.get("ffd20", "distanceUnits");
        "default" === s3 && (s3 = game.settings.get("ffd20", "units")), "close" === e3 ? c2.range = `${c2.range} ${game.i18n.localize("metric" == s3 ? "FFD20.SpellRangeShortMetric" : "FFD20.SpellRangeShort")}` : "medium" === e3 ? c2.range = `${c2.range} ${game.i18n.localize("metric" == s3 ? "FFD20.SpellRangeMediumMetric" : "FFD20.SpellRangeMedium")}` : "long" === e3 ? c2.range = `${c2.range} ${game.i18n.localize("metric" == s3 ? "FFD20.SpellRangeLongMetric" : "FFD20.SpellRangeLong")}` : ["ft", "mi"].includes(e3) && (c2.range = t3 ? `${t3} ${c2.range}` : "");
      }
    }
    {
      const e3 = l2.spellArea;
      e3 && (c2.area = e3);
    }
    {
      const e3 = l2.save?.description;
      c2.savingThrow = e3 || "none";
      const s3 = t2.sr;
      c2.sr = (true === s3 ? game.i18n.localize("FFD20.Yes") : game.i18n.localize("FFD20.No")).toLowerCase(), "personal" !== l2.range?.units && (u2.useDCandSR = true);
    }
    return u2;
  }
}
class ItemWeaponFFD20 extends ItemFFD20 {
  async _preUpdate(e2, t2) {
    const s2 = e2.system?.weaponType;
    if (null != s2 && s2 !== this.system.weaponType) {
      const t3 = e2.system.weaponSubtype ?? this.system.weaponSubtype ?? "", l2 = Object.keys(CONFIG.FFD20.weaponTypes[s2]).filter((e3) => !e3.startsWith("_"));
      t3 && l2.includes(t3) || (e2.system.weaponSubtype = l2[0]);
    }
  }
  async _preDelete(e2, t2) {
    return t2.id === game.user.id && (this.isActive && this.executeScriptCalls("equip", { equipped: false }), this.system.quantity > 0 && this.executeScriptCalls("changeQuantity", { quantity: { previous: this.system.quantity, new: 0 } })), super._preDelete(e2, t2);
  }
  getLabels({ actionId: e2 } = {}) {
    const t2 = super.getLabels({ actionId: e2 }), { weaponTypes: s2 } = CONFIG.FFD20;
    let l2 = this.system.weaponType;
    const c2 = Object.keys(s2);
    c2.includes(l2) || (l2 = c2[0]);
    let u2 = this.system.weaponSubtype;
    const m2 = Object.keys(s2[l2]).filter((e3) => !e3.startsWith("_"));
    return m2.includes(u2) || (u2 = m2[0]), t2.weaponType = s2[l2]._label, t2.weaponSubtype = s2[l2][u2], t2;
  }
  prepareData() {
    super.prepareData(), this._prepareWeaponGroups();
  }
  async setActive(e2, t2) {
    return this.update({ "system.equipped": e2 }, t2);
  }
  get isActive() {
    return this.system.equipped;
  }
  _prepareWeaponGroups() {
    const e2 = this.system.weaponGroups || { value: [], custom: "" };
    e2.selected = e2.value.reduce((e3, t2) => (e3[t2] = CONFIG.FFD20.weaponGroups[t2], e3), {}), e2.custom && e2.custom.split(CONFIG.FFD20.re.traitSeparator).forEach((t2, s2) => e2.selected[`custom${s2 + 1}`] = t2.trim()), e2.cssClass = foundry.utils.isEmpty(e2.selected) ? "inactive" : "";
  }
}
class Widget_CategorizedItemPicker extends Application {
  constructor(e2, t2, s2, l2) {
    super(e2), this.categories = t2, this.selected = l2, this.callback = s2, this._hiddenElems = {};
  }
  get template() {
    return "systems/ffd20/templates/widgets/categorized-item-picker.hbs";
  }
  getData(e2) {
    const t2 = super.getData(e2);
    t2.categories = [], t2.items = [];
    for (const e3 of this.categories) {
      t2.categories.push({ key: e3.key, label: e3.label });
      for (const s2 of e3.items)
        t2.items.push(mergeObject({ category: e3.key }, s2));
    }
    return t2;
  }
  activateListeners(e2) {
    e2.find(".item").click(this._onClickItem.bind(this)), e2.find(".category a").click(this._onClickCategory.bind(this)), this.selected?.category && (e2.find(`.category a[data-category="${this.selected.category}"]`).click(), this.selected?.item && e2.find(`.item[data-category="${this.selected.category}"][data-value="${this.selected.item}"]`).first().addClass("pre-select")), window.setTimeout(() => {
      this._cancelCallback && document.removeEventListener("click", this._cancelCallback), this._cancelCallback = this._onCancel.bind(this), document.addEventListener("click", this._cancelCallback);
    }, 10);
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { width: 480, height: 480 });
  }
  _onClickItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.value;
    this.callback(t2), this.close();
  }
  _onClickCategory(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(this.element);
    s2.find(".item-picker-categories").children().removeClass("active"), $(t2).closest(".category").addClass("active"), s2.find(".item-picker-items").children().hide(), s2.find(`.item-picker-items .item[data-category="${t2.dataset.category}"]`).show();
  }
  _onCancel(e2) {
    e2.preventDefault();
    let t2 = e2.target;
    if (t2 !== this.element[0]) {
      for (; t2.parentNode; ) {
        if (t2 === this.element[0])
          return;
        t2 = t2.parentNode;
      }
      this.close();
    }
  }
  async close(...e2) {
    return document.removeEventListener("click", this._cancelCallback), super.close(...e2);
  }
}
Hooks.on("renderWidget_CategorizedItemPicker", (e2, t2, s2) => {
  t2.find(".pre-select")[0]?.scrollIntoView({ block: "nearest" });
});
class ItemSheetFFD20 extends ItemSheet {
  constructor(...e2) {
    super(...e2), this.items = [], this._openApplications = [], this._actionUpdates = [];
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { width: 580, classes: ["ffd20", "sheet", "item"], scrollY: [".tab", ".buff-flags", ".editor-content"], dragDrop: [{ dragSelector: "li.action-part", dropSelector: ".tab.details" }], tabs: [{ navSelector: "nav.tabs[data-group='primary']", contentSelector: "section.primary-body", initial: "description" }, { navSelector: "nav.tabs[data-group='links']", contentSelector: "section.links-body", initial: "children" }, { navSelector: "nav.tabs[data-group='description']", contentSelector: "section.description-body", initial: "identified" }] });
  }
  get template() {
    return `systems/ffd20/templates/items/${this.item.type}.hbs`;
  }
  get actor() {
    let e2 = this.item.actor, t2 = this.parentItem;
    for (; !e2 && t2; )
      e2 = t2.actor, t2 = t2.parentItem;
    return e2;
  }
  async getData() {
    const e2 = await super.getData();
    e2.system = e2.item.system, e2.flags = { flags: e2.flags };
    const t2 = this.item.getRollData();
    if (e2.labels = this.item.getLabels(), e2.items = [], null != this.item.items && (e2.items = this.item.items.map((e3) => e3.toObject())), e2.config = CONFIG.FFD20, e2.itemType = this._getItemType(e2.item), e2.itemStatus = this._getItemStatus(e2.item), e2.itemProperties = this._getItemProperties(), e2.itemName = e2.item.name, e2.isCharged = ["day", "week", "charges"].includes(e2.system.uses?.per), e2.defaultChargeFormula = this.item.getDefaultChargeFormula(), e2.isPhysical = void 0 !== e2.system.quantity, e2.isNaturalAttack = "natural" === e2.system.attackType, e2.isSpell = "spell" === this.item.type, e2.owned = null != this.item.actor, e2.parentOwned = null != this.actor, e2.owner = this.item.isOwner, e2.isGM = game.user.isGM, e2.hasAction = this.item.hasAction, e2.showIdentifyDescription = e2.isGM && e2.isPhysical, e2.isMateria = "materia" === e2.item.data.data.equipmentType, e2.showUnidentifiedData = this.item.showUnidentifiedData, e2.unchainedActionEconomy = game.settings.get("ffd20", "unchainedActionEconomy"), null != t2.item.auraStrength) {
      const s3 = t2.item.auraStrength;
      e2.auraStrength = s3, null != CONFIG.FFD20.auraStrengths[s3] && (e2.auraStrength_name = CONFIG.FFD20.auraStrengths[s3], e2.labels.identify = game.i18n.localize("FFD20.IdentifyDCNumber").format(15 + t2.item.cl));
    }
    if (e2.descriptionHTML = { identified: await TextEditor.enrichHTML(e2.system.description.value, { secrets: e2.owned, rollData: t2, async: true }), unidentified: await TextEditor.enrichHTML(e2.system.description.unidentified, { secrets: e2.owned, rollData: t2, async: true }) }, this.item.showUnidentifiedData ? e2.itemName = this.item.system.unidentified.name || this.item.system.identifiedName || this.item.name : e2.itemName = this.item.system.identifiedName || this.item.name, e2.isPhysical && (e2.descriptionAttributes = [], e2.descriptionAttributes.push({ isNumber: true, name: "system.quantity", label: game.i18n.localize("FFD20.Quantity"), value: e2.system.quantity, decimals: 0, id: "data-quantity" }), e2.descriptionAttributes.push({ isNumber: true, name: "system.weight.value", fakeName: true, label: game.i18n.localize("FFD20.Weight"), value: e2.system.weight.converted.total, inputValue: e2.system.weight.converted.value, decimals: 2, id: "data-weight-value" }), e2.showIdentifyDescription ? e2.descriptionAttributes.push({ isNumber: true, name: "system.price", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: this.item.getValue({ sellValue: 1 }), decimals: 2, id: "data-price" }, { isNumber: true, name: "system.unidentified.price", fakeName: true, label: game.i18n.localize("FFD20.UnidentifiedPriceShort"), value: this.item.getValue({ sellValue: 1, forceUnidentified: true }), decimals: 2, id: "data-unidentifiedBasePrice" }) : e2.showUnidentifiedData ? e2.descriptionAttributes.push({ isNumber: true, name: "system.unidentified.price", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: this.item.getValue({ sellValue: 1 }), decimals: 2, id: "data-price" }) : e2.descriptionAttributes.push({ isNumber: true, name: "system.price", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: this.item.getValue({ sellValue: 1 }), decimals: 2, id: "data-price" }), e2.descriptionAttributes.push({ isRange: true, label: game.i18n.localize("FFD20.HPShort"), value: { name: "system.hp.value", value: e2.system.hp.value }, max: { name: "system.hp.max", value: e2.system.hp.max } }), e2.descriptionAttributes.push({ isNumber: true, label: game.i18n.localize("FFD20.Hardness"), name: "system.hardness", decimals: 0, value: e2.system.hardness }), e2.descriptionAttributes.push({ isBoolean: true, name: "system.carried", label: game.i18n.localize("FFD20.Carried"), value: e2.system.carried })), "feat" === e2.item.type && (e2.isClassFeature = "classFeat" === getProperty(this.item, "system.featType"), e2.isTemplate = "template" === getProperty(this.item, "system.featType")), ["class", "feat", "race"].includes(e2.item.type))
      if (this.actor) {
        const t3 = mergeObject(deepClone(CONFIG.FFD20.skills), this.actor.system.skills);
        e2.skills = Object.entries(t3).reduce((e3, t4) => {
          const s3 = t4[0], l2 = null != CONFIG.FFD20.skills[s3] ? CONFIG.FFD20.skills[s3] : t4[1].name;
          return e3[t4[0]] = { name: l2, classSkill: true === getProperty(this.item, `system.classSkills.${t4[0]}`) }, e3;
        }, {});
      } else
        e2.skills = Object.entries(CONFIG.FFD20.skills).reduce((e3, t3) => (e3[t3[0]] = { name: t3[1], classSkill: true === getProperty(this.item, `system.classSkills.${t3[0]}`) }, e3), {});
    if ("weapon" === e2.item.type) {
      e2.isRanged = "ranged" === e2.system.weaponSubtype || true === e2.system.properties.thr, e2.weaponCategories = { types: {}, subTypes: {} };
      for (const [t4, s3] of Object.entries(CONFIG.FFD20.weaponTypes))
        "object" == typeof s3 && (e2.weaponCategories.types[t4] = s3._label);
      const t3 = e2.system.weaponType;
      if (hasProperty(CONFIG.FFD20.weaponTypes, t3))
        for (const [s3, l2] of Object.entries(CONFIG.FFD20.weaponTypes[t3]))
          s3.startsWith("_") || (e2.weaponCategories.subTypes[s3] = l2);
    }
    if ("equipment" === e2.item.type) {
      e2.equipmentCategories = { types: {}, subTypes: {} };
      for (const [t4, s3] of Object.entries(CONFIG.FFD20.equipmentTypes))
        "object" == typeof s3 && (e2.equipmentCategories.types[t4] = s3._label);
      const t3 = e2.system.equipmentType;
      if (hasProperty(CONFIG.FFD20.equipmentTypes, t3))
        for (const [s3, l2] of Object.entries(CONFIG.FFD20.equipmentTypes[t3]))
          s3.startsWith("_") || (e2.equipmentCategories.subTypes[s3] = l2);
      e2.equipmentSlots = CONFIG.FFD20.equipmentSlots[t3], e2.showArmorData = ["armor", "shield"].includes(t3), e2.hasMultipleSlots = Object.keys(e2.equipmentSlots).length > 1;
    }
    if ("spell" === e2.item.type) {
      let s3 = null;
      null != this.actor && (s3 = getProperty(this.actor, `system.attributes.spells.spellbooks.${this.item.system.spellbook}`)), e2.isPreparedSpell = null != s3 && (!s3.spontaneous && !s3.spellPoints?.useSystem), e2.usesSpellpoints = null != s3 && (s3.spellPoints?.useSystem ?? false), e2.isAtWill = e2.system.atWill, e2.spellbooks = deepClone(this.actor?.system.attributes?.spells?.spellbooks ?? {});
      const l2 = await renderTemplate("systems/ffd20/templates/internal/spell-description.hbs", this.document.spellDescriptionData), c2 = this.item.firstAction;
      e2.topDescription = await TextEditor.enrichHTML(l2, { rollData: c2?.getRollData() ?? t2, async: true }), null != e2.system.shortDescription && (e2.shortDescription = await TextEditor.enrichHTML(e2.system.shortDescription, { rollData: c2?.getRollData() ?? t2, secrets: e2.owner, async: true }));
    }
    if ("class" === e2.item.type) {
      e2.isMythicPath = "mythic" === e2.system.classType;
      for (const [t3, s3] of Object.entries(e2.system.savingThrows))
        s3.label = CONFIG.FFD20.savingThrows[t3];
      for (const [t3, s3] of Object.entries(e2.system.fc))
        s3.label = CONFIG.FFD20.favouredClassBonuses[t3];
      if (e2.isBaseClass = "base" === e2.system.classType, e2.isRacialHD = "racial" === e2.system.classType, null != this.actor) {
        const t3 = game.settings.get("ffd20", "healthConfig");
        e2.healthConfig = e2.isRacialHD ? t3.hitdice.Racial : "character" === this.actor.type ? t3.hitdice.PC : t3.hitdice.NPC;
      } else
        e2.healthConfig = { auto: false };
      if (this.actor) {
        const t3 = mergeObject(deepClone(CONFIG.FFD20.skills), this.actor.system.skills);
        e2.skills = Object.entries(t3).reduce((t4, s3) => {
          const l2 = s3[0], c2 = null != CONFIG.FFD20.skills[l2] ? CONFIG.FFD20.skills[l2] : s3[1].name;
          return t4[s3[0]] = { name: c2, classSkill: true === getProperty(e2, `system.classSkills.${s3[0]}`) }, t4;
        }, {});
      } else
        e2.skills = Object.entries(CONFIG.FFD20.skills).reduce((t3, s3) => (t3[s3[0]] = { name: s3[1], classSkill: true === getProperty(e2, `system.classSkills.${s3[0]}`) }, t3), {});
    }
    const s2 = { armorProf: CONFIG.FFD20.armorProficiencies, weaponProf: CONFIG.FFD20.weaponProficiencies, languages: CONFIG.FFD20.languages };
    for (const [t3, l2] of Object.entries(s2))
      if (t3 in e2.system) {
        const s3 = e2.system[t3];
        if (!s3)
          continue;
        let c2 = [];
        s3.value && (c2 = s3.value instanceof Array ? s3.value : [s3.value]), s3.selected = c2.reduce((e3, t4) => (e3[t4] = l2[t4], e3), {}), s3.custom && s3.custom.split(CONFIG.FFD20.re.traitSeparator).forEach((e3, t4) => s3.selected[`custom${t4 + 1}`] = e3.trim()), s3.cssClass = foundry.utils.isEmpty(s3.selected) ? "inactive" : "";
      }
    if (this.item.changes) {
      e2.changeGlobals = { targets: {}, modifiers: CONFIG.FFD20.bonusModifiers };
      for (const [t4, s3] of Object.entries(CONFIG.FFD20.buffTargets))
        "object" == typeof s3 && (e2.changeGlobals.targets[t4] = s3._label);
      const t3 = getBuffTargets(this.item.actor);
      e2.changes = e2.system.changes.reduce((e3, s3) => {
        const l2 = { data: s3 };
        return l2.subTargetLabel = t3[s3.subTarget]?.label, l2.isScript = "script" === l2.data.operator, e3.push(l2), e3;
      }, []);
    }
    if (e2.system.contextNotes) {
      e2.contextNotes = deepClone(e2.system.contextNotes);
      const t3 = getBuffTargets(this.item.actor, "contextNotes");
      e2.contextNotes.forEach((e3) => {
        e3.label = t3[e3.subTarget]?.label;
      });
    }
    if (e2.distanceUnits = deepClone(CONFIG.FFD20.distanceUnits), "spell" !== this.item.type)
      for (const t3 of ["close", "medium", "long"])
        delete e2.distanceUnits[t3];
    if (e2.system.attackNotes) {
      const t3 = e2.system.attackNotes;
      setProperty(e2, "notes.attack", t3);
    }
    return this._prepareItemFlags(e2), await this._prepareScriptCalls(e2), await this._prepareLinks(e2), this._prepareActions(e2), e2;
  }
  async _prepareLinks(e2) {
    e2.links = { list: [] }, e2.links.list.push({ id: "children", label: game.i18n.localize("FFD20.LinkTypeChildren"), help: game.i18n.localize("FFD20.LinkHelpChildren"), items: [] }), ["feat", "consumable", "attack", "equipment"].includes(this.item.type) && e2.links.list.push({ id: "charges", label: game.i18n.localize("FFD20.LinkTypeCharges"), help: game.i18n.localize("FFD20.LinkHelpCharges"), items: [] }), "class" === this.item.type && e2.links.list.push({ id: "classAssociations", label: game.i18n.localize("FFD20.LinkTypeClassAssociations"), help: game.i18n.localize("FFD20.LinkHelpClassAssociations"), fields: { level: { type: "Number", label: game.i18n.localize("FFD20.Level") } }, items: [] });
    for (const t2 of e2.links.list) {
      const e3 = getProperty(this.item, `system.links.${t2.id}`) || [];
      for (let s2 = 0; s2 < e3.length; s2++) {
        const l2 = e3[s2];
        l2._index = s2, t2.items.push(l2);
      }
      "classAssociations" === t2.id && (t2.items = t2.items.sort((e4, t3) => e4.level - t3.level));
    }
    await this.item.updateLinkItems();
  }
  _prepareActions(e2) {
    if (!e2.system.actions)
      return [];
    const t2 = [];
    for (const s2 of e2.system.actions) {
      const e3 = { data: s2, isSelfCharged: this.object.actions.get(s2._id).isSelfCharged };
      t2.push(e3);
    }
    e2.actions = t2;
  }
  _prepareItemFlags(e2) {
    setProperty(e2, "flags.boolean", getProperty(e2.item, "system.flags.boolean") ?? {}), setProperty(e2, "flags.dictionary", getProperty(e2.item, "system.flags.dictionary") ?? {});
  }
  async _prepareScriptCalls(e2) {
    const t2 = ffd20.registry.scriptCalls.filter((e3) => !!e3.data.itemTypes.includes(this.document.type) && !(true === e3.hidden && !game.user.isGM));
    if (!t2.length)
      return void (e2.scriptCalls = null);
    if (!game.user.can("MACRO_SCRIPT"))
      return void (e2.scriptCalls = null);
    e2.scriptCalls = {};
    const s2 = Object.hasOwnProperty.call(this.document, "scriptCalls") ? deepClone(Array.from(this.document.scriptCalls).map((e3) => e3.data)) : [];
    {
      const e3 = [];
      for (const t3 of s2)
        e3.push((async () => {
          if ("macro" === t3.type) {
            const e4 = await fromUuid(t3.value);
            null == e4 ? (t3.name = `${game.i18n.localize("FFD20.Unknown")} (${game.i18n.localize("DOCUMENT.Macro")})`, t3.img = "icons/svg/hazard.svg") : (t3.name = e4.data.name, t3.img = e4.data.img);
          }
          t3.hiddenIcon = t3.hidden ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>', t3.hide = t3.hidden && !game.user.isGM;
        })());
      await Promise.all(e3);
    }
    for (const l2 of t2)
      e2.scriptCalls[l2.id] = { name: game.i18n.localize(l2.name), info: l2.info ? game.i18n.localize(l2.info) : null, items: s2.filter((e3) => e3.category === l2.id), dataset: { category: l2.id } };
  }
  _getItemType(e2) {
    const t2 = Object.keys(CONFIG.FFD20.itemTypes);
    let s2 = e2.type;
    return t2.includes(s2) || (s2 = t2[0]), game.i18n.localize(CONFIG.FFD20.itemTypes[s2]);
  }
  _getItemStatus(e2) {
    const t2 = e2.system;
    if ("spell" === e2.type) {
      const e3 = this.item.spellbook;
      if ("prepared" === t2.preparation.mode)
        return "spontaneous" === e3?.spellPreparationMode ? t2.preparation.spontaneousPrepared ? game.i18n.localize("FFD20.SpellPrepPrepared") : game.i18n.localize("FFD20.Unprepared") : t2.preparation.preparedAmount > 0 ? game.i18n.localize("FFD20.AmountPrepared").format(t2.preparation.preparedAmount) : game.i18n.localize("FFD20.Unprepared");
      if (t2.preparation.mode)
        return t2.preparation.mode.titleCase();
    } else if (void 0 !== t2.equipped)
      return t2.equipped ? game.i18n.localize("FFD20.Equipped") : game.i18n.localize("FFD20.NotEquipped");
  }
  _getItemProperties() {
    const e2 = [], t2 = this.item, s2 = this.item.getLabels();
    "weapon" === t2.type ? e2.push(...Object.entries(t2.system.properties).filter((e3) => true === e3[1]).map((e3) => CONFIG.FFD20.weaponProperties[e3[0]])) : "spell" === t2.type ? e2.push(s2.components, s2.materials) : "equipment" === t2.type ? (t2.showUnidentifiedData && "misc" === t2.system.equipmentType ? "slotless" === t2.system.slot ? e2.push(CONFIG.FFD20.equipmentTypes[t2.system.equipmentType].other) : e2.push(CONFIG.FFD20.equipmentTypes[t2.system.equipmentType].clothing) : e2.push(CONFIG.FFD20.equipmentTypes[t2.system.equipmentType][t2.system.equipmentSubtype]), e2.push(s2.armor)) : "feat" === t2.type && e2.push(s2.featType);
    const l2 = t2.actionTypes;
    return l2 && e2.push(...l2.map((e3) => CONFIG.FFD20.itemActionTypes[e3])), "weapon" !== t2.type && t2.system.activation && !foundry.utils.isEmpty(t2.system.activation) && e2.push(s2.activation, s2.range, s2.target, s2.duration), null != getProperty(t2.system, "system.tags") && e2.push(...getProperty(t2.system, "system.tags").map((e3) => e3[0])), e2.filter((e3) => !!e3);
  }
  async _updateObject(e2, t2) {
    const s2 = Object.entries(t2).filter((e3) => e3[0].startsWith("system.links"));
    for (const e3 of s2) {
      const s3 = e3[0].split("."), l3 = s3[2], c2 = s3[3], u2 = s3.slice(4).join("."), m2 = e3[1];
      null != c2 && (delete t2[e3[0]], t2[`system.links.${l3}`] || (t2[`system.links.${l3}`] = deepClone(getProperty(this.item, `system.links.${l3}`))), setProperty(t2[`system.links.${l3}`][c2], u2, m2));
    }
    t2["system.weight.value"] && (t2["system.weight.value"] = ffd20.utils.convertWeightBack(t2["system.weight.value"]));
    const l2 = ["system.currency.pgil", "system.currency.gil", "system.currency.sgil", "system.currency.cgil"];
    for (const [e3, s3] of Object.entries(t2))
      if ("string" == typeof s3 && l2.includes(e3)) {
        const l3 = getProperty(this.item.system, e3);
        let c2 = null;
        const u2 = e3.replace(/\.value$/, ".max");
        if (u2 !== e3 && (c2 = getProperty(this.item.system, u2)), s3.match(/(\+|--?)([0-9]+)/)) {
          const s4 = RegExp.$1;
          let u3 = parseInt(RegExp.$2);
          "--" === s4 ? t2[e3] = -u3 : ("-" === s4 && (u3 = -u3), t2[e3] = l3 + u3, c2 && (t2[e3] = Math.min(t2[e3], c2)));
        } else
          s3.match(/^[0-9]+$/) ? (t2[e3] = parseInt(s3), c2 && (t2[e3] = Math.min(t2[e3], c2))) : t2[e3] = 0;
      }
    return super._updateObject(e2, t2);
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.mousemove((e3) => this._moveTooltips(e3)), e2.find(".actions .items-list .item").on("contextmenu", this._onActionEdit.bind(this)), e2.find(".item .item-name h4").on("click", (e3) => this._onItemSummary(e3)), this.isEditable ? (e2.find("textarea").change(this._onSubmit.bind(this)), e2.find("textarea, .notes input[type='text']").on("drop", this._onTextAreaDrop.bind(this)), e2.find("a.help-browser[data-url]").click(this._openHelpBrowser.bind(this)), e2.find(".change-control").click(this._onBuffControl.bind(this)), e2.find(".change .change-target").click(this._onChangeTargetControl.bind(this)), e2.find(".context-note-control").click(this._onNoteControl.bind(this)), e2.find(".context-note .context-note-target").click(this._onNoteTargetControl.bind(this)), ["weapon"].includes(this.item.type) && e2.find("button[name='create-attack']").click(this._createAttack.bind(this)), e2.find(".entry-selector").click(this._onEntrySelector.bind(this)), e2.find(".entry-control a").click(this._onEntryControl.bind(this)), e2.find('div[data-group="links"],a.item[data-tab="links"]').on("drop", this._onLinksDrop.bind(this)), e2.find(".link-control").click(this._onLinkControl.bind(this)), e2.find(".file-picker-alt").click(this._onFilePickerAlt.bind(this)), e2.find('*[data-action="input-text"]').click((e3) => this._onInputText(e3)), e2.find(".select-on-click").click(this._selectOnClick.bind(this)), e2.find(".edit-change-contents").on("click", this._onEditChangeScriptContents.bind(this)), e2.find(".trait-selector").click(this._onTraitSelector.bind(this)), e2.find(".tab[data-tab='links'] .links-item[data-link] .links-item-name").on("click", this._openLinkedItem.bind(this)), e2.find(".action-controls a").on("click", this._onActionControl.bind(this)), e2.find(".action-parts .item-uses span.text-box.value").on("wheel", this._setActionUses.bind(this)).on("click", (e3) => {
      this._onSpanTextInput(e3, this._setActionUses.bind(this));
    }), e2.find('a[data-action="compendium"]').click(this._onOpenCompendium.bind(this)), e2.find(".script-calls .item-control").click(this._onScriptCallControl.bind(this)), e2.find(".script-calls .items-list .item").contextmenu(this._onScriptCallEdit.bind(this)), e2.find(".script-calls .inventory-list[data-category]").on("drop", this._onScriptCallDrop.bind(this))) : e2.find("span.text-box").addClass("readonly");
  }
  _onSpanTextInput(e2, t2 = null) {
    const s2 = e2.currentTarget, l2 = s2.parentElement, c2 = document.createElement("INPUT");
    c2.type = "text", s2.dataset?.dtype && (c2.dataset.dtype = s2.dataset.dtype);
    let u2 = s2.innerText;
    s2.classList.contains("placeholder") && (u2 = "");
    const m2 = s2.classList.contains("no-value-cap"), d2 = s2.getAttribute("name");
    let h2;
    if (d2 && (c2.setAttribute("name", d2), u2 = getProperty(this.document, d2) ?? "", u2 && "string" != typeof u2 && (u2 = u2.toString()), d2.endsWith(".value") && !m2)) {
      const e3 = d2.replace(/\.value$/, ".max");
      h2 = getProperty(this.document, e3);
    }
    c2.value = u2;
    const p2 = ["placeholder", "direct", "allow-relative"];
    for (const e3 of s2.classList)
      p2.includes(e3) || c2.classList.add(e3);
    const g2 = s2.classList.contains("allow-relative"), y2 = parseFloat(s2.dataset.clearValue || "0");
    l2.replaceChild(c2, s2);
    let F2 = false;
    c2.addEventListener("keypress", (e3) => {
      if ("Enter" === e3.key) {
        if (F2 = true, g2) {
          const e4 = adjustNumberByStringCommand(parseFloat(u2), c2.value, h2, y2);
          c2.value = e4;
        }
        c2.value.toString() === u2.toString() ? this.render() : "function" == typeof t2 && t2.call(this, e3);
      }
    }), c2.addEventListener("focusout", (e3) => {
      if (!F2) {
        if (F2 = true, g2 && parseFloat(u2) !== parseFloat(c2.value)) {
          const e4 = adjustNumberByStringCommand(parseFloat(u2), c2.value, h2, y2);
          c2.value = e4;
        }
        c2.value.toString() === u2.toString() ? this.render() : "function" == typeof t2 && t2.call(this, e3);
      }
    }), c2.focus(), c2.select();
  }
  _mouseWheelAdd(e2, t2) {
    const s2 = "INPUT" === t2.tagName.toUpperCase(), { originalEvent: l2 } = e2;
    if (l2 && l2 instanceof WheelEvent && l2.ctrlKey) {
      e2.preventDefault();
      const c2 = (s2 ? parseFloat(t2.value) : parseFloat(t2.innerText)) || 0;
      if (Number.isNaN(c2))
        return;
      const u2 = -Math.sign(l2.deltaY), m2 = parseFloat(t2.dataset.wheelStep) || 1;
      s2 ? t2.value = c2 + m2 * u2 : t2.innerText = (c2 + m2 * u2).toString();
    }
  }
  _setActionUses(e2) {
    e2.originalEvent instanceof MouseEvent || e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.itemId, l2 = this.document.actions.get(s2);
    this._mouseWheelAdd(e2, t2);
    const c2 = "INPUT" === t2.tagName.toUpperCase() ? Number(t2.value) : Number(t2.innerText);
    if (this.setActionUpdate(l2.id, "uses.self.value", c2), e2.originalEvent instanceof MouseEvent) {
      ($._data(t2, "events")?.mouseout?.length ?? 0) > 0 || $(t2).one("mouseleave", (e3) => {
        this._updateActions();
      });
    } else
      this._updateActions();
  }
  setActionUpdate(e2, t2, s2) {
    let l2 = this._actionUpdates.filter((t3) => t3._id === e2)[0];
    null == l2 && (l2 = { _id: e2 }, this._actionUpdates.push(l2)), l2[t2] = s2;
  }
  async _updateActions() {
    const e2 = this._actionUpdates;
    this._actionUpdates = [];
    for (const t2 of e2) {
      const e3 = this.document.actions.get(t2._id);
      e3 ? await e3.update(t2) : console.error("Item update for non-existing item:", t2._id, t2);
    }
  }
  _onOpenCompendium(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.actionTarget;
    ffd20.applications.compendiums[t2].render(true, { focus: true });
  }
  async _onScriptCallControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = this.document.scriptCalls ? this.document.scriptCalls.get(t2.closest(".item")?.dataset.itemId) : null, l2 = t2.closest(".inventory-list").dataset.category;
    if (t2.classList.contains("item-create"))
      return await this._onSubmit(e2), ffd20.components.ItemScriptCall.create([{ category: l2, type: "script" }], { parent: this.item });
    if (s2 && t2.classList.contains("item-delete")) {
      const t3 = (this.document.system.scriptCalls || []).filter((e3) => e3._id !== s2.id);
      return this._onSubmit(e2, { updateData: { "system.scriptCalls": t3 } });
    }
    s2 && t2.classList.contains("item-edit") ? s2.edit() : s2 && t2.classList.contains("item-hide") && s2.update({ hidden: !s2.system.hidden });
  }
  _onScriptCallEdit(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = this.document.scriptCalls ? this.document.scriptCalls.get(t2.dataset.itemId) : null;
    s2 && s2.edit();
  }
  _moveTooltips(e2) {
    const t2 = $(e2.currentTarget), s2 = e2.clientX, l2 = e2.clientY + 24;
    t2.find(".tooltip:hover .tooltipcontent").css("left", `${s2}px`).css("top", `${l2}px`);
  }
  async _onTextAreaDrop(e2) {
    e2.preventDefault();
    const t2 = JSON.parse(e2.originalEvent.dataTransfer.getData("text/plain"));
    if (!t2)
      return;
    const s2 = e2.currentTarget;
    let l2;
    if (t2.pack) {
      const e3 = game.packs.get(t2.pack);
      if (!e3)
        return;
      const s3 = await e3.getDocument(t2.id);
      l2 = `@Compendium[${t2.pack}.${t2.id}]{${s3.name}}`;
    } else {
      const e3 = CONFIG[t2.type];
      if (!e3)
        return false;
      const s3 = e3.collection.instance.get(t2.id);
      if (!s3)
        return false;
      l2 = `@${t2.type}[${s3._id}]{${s3.name}}`;
    }
    return l2 && (s2.value = s2.value ? s2.value + "\n" + l2 : l2), this._onSubmit(e2);
  }
  async _onScriptCallDrop(e2) {
    e2.preventDefault();
    const t2 = JSON.parse(e2.originalEvent.dataTransfer.getData("text/plain"));
    if (!t2)
      return;
    const s2 = e2.currentTarget.dataset.category;
    if ("Macro" === t2.type) {
      let l2;
      if (t2.pack) {
        const e3 = game.packs.get(t2.pack);
        l2 = (await e3.getDocument(t2.id)).uuid;
      } else if (t2.id) {
        l2 = game.macros.get(t2.id).uuid;
      }
      if (l2)
        return this.document.system.scriptCalls, await this._onSubmit(e2), ffd20.components.ItemScriptCall.create([{ type: "macro", value: l2, category: s2 }], { parent: this.item });
    }
  }
  _openHelpBrowser(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    ffd20.applications.helpBrowser.openUrl(t2.dataset.url);
  }
  async _onLinksDrop(e2) {
    let t2 = e2.currentTarget.dataset.tab;
    "links" === t2 && (t2 = "children");
    const s2 = TextEditor.getDragEventData(e2.originalEvent);
    if (!s2.type)
      return;
    const l2 = await fromUuid(s2.uuid);
    if (!l2)
      return;
    let c2, u2;
    l2.pack ? (c2 = "compendium", u2 = `${l2.pack}.${l2.id}`) : l2.parent instanceof Actor && l2.parent === this.document.parentActor ? (c2 = "data", u2 = l2.id) : (c2 = "world", u2 = `world.${l2.id}`), await this.item.createItemLink(t2, c2, l2, u2);
  }
  _canDragStart(e2) {
    return true;
  }
  _onDragStart(e2) {
    const t2 = e2.currentTarget;
    if (t2.dataset?.itemId) {
      const s2 = this.object.actions.get(t2.dataset.itemId), l2 = { type: "action", source: this.object.uuid, data: s2.data };
      e2.dataTransfer.setData("text/plain", JSON.stringify(l2));
    }
  }
  async _onDrop(e2) {
    let t2, s2;
    e2.preventDefault(), e2.stopPropagation();
    try {
      t2 = JSON.parse(e2.dataTransfer.getData("text/plain")), "action" === t2.type && t2.source && (s2 = "action");
    } catch (e3) {
      return false;
    }
    const l2 = this.object;
    if ("action" === s2) {
      if (await fromUuid(t2.source) === l2) {
        const s3 = e2.target?.closest("li.action-part")?.dataset?.itemId, c2 = deepClone(l2.system.actions);
        let u2;
        u2 = s3 ? c2.indexOf(c2.find((e3) => e3._id === s3)) : c2.length - 1;
        const m2 = c2.indexOf(c2.find((e3) => e3._id === t2.data._id));
        c2.splice(m2, 1), c2.splice(u2, 0, t2.data), await this.object.update({ "system.actions": c2 });
      } else {
        const e3 = deepClone(this.object.system.actions ?? []);
        t2._id = randomID(16), e3.splice(e3.length, 0, t2.data), await this.object.update({ "system.actions": e3 });
      }
    }
  }
  async _onEditChangeScriptContents(e2) {
    const t2 = e2.currentTarget.closest(".change").dataset.change, s2 = this.item.changes.find((e3) => e3._id === t2);
    if (!s2)
      return;
    const l2 = new ScriptEditor({ command: s2.formula, parent: this.object }).render(true), c2 = await l2.awaitResult();
    return "string" == typeof c2?.command ? s2.update({ formula: c2.command }) : void 0;
  }
  _onTraitSelector(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.parentElement.querySelector("label"), l2 = { name: s2.getAttribute("for"), title: s2.innerText, subject: t2.dataset.options, choices: CONFIG.FFD20[t2.dataset.options] };
    new ActorTraitSelector(this.object, l2).render(true);
  }
  _onItemSummary(e2) {
    e2.preventDefault();
    const t2 = $(e2.currentTarget).closest(".item:not(.sheet)"), s2 = t2.attr("data-item-collection") ?? "items", l2 = this.document[s2].get(t2.attr("data-item-id")), c2 = "actions" === s2, { description: u2, actionDescription: m2, properties: d2 } = l2.getChatData();
    if (t2.hasClass("expanded")) {
      const e3 = t2.children(".item-summary");
      e3.slideUp(200, () => e3.remove());
    } else {
      const e3 = $(`<div class="item-summary">${c2 ? m2 : u2}</div>`), s3 = $('<div class="item-properties tag-list"></div>');
      d2?.forEach((e4) => s3.append(`<span class="tag">${e4}</span>`)), e3.append(s3), t2.append(e3.hide()), e3.slideDown(200);
    }
    t2.toggleClass("expanded");
  }
  _openLinkedItem(e2) {
    e2.preventDefault();
    const t2 = e2.target.closest("[data-link]").dataset.link.split("."), s2 = 3 === t2.length ? t2.slice(0, 2).join(".") : null, l2 = t2.pop();
    s2 ? game.packs.get(s2).getDocument(l2).then((e3) => e3.sheet.render(true, { focus: true })) : this.actor.items.get(l2).sheet.render(true, { focus: true });
  }
  generateInitialLinkData(e2, t2, s2, l2, c2 = null) {
    const u2 = { id: l2, dataType: t2, name: s2.name, img: s2.img };
    return "classAssociations" === e2 && (u2.level = 1), "ammunition" === e2 && (u2.recoverChance = 50), u2;
  }
  async _onActionControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-action")) {
      const t3 = { img: this.item.img, name: ["weapon", "attack"].includes(this.item.type) ? game.i18n.localize("FFD20.Attack") : game.i18n.localize("FFD20.Use") };
      return await this._onSubmit(e2), ffd20.components.ItemAction.create([t3], { parent: this.item });
    }
    if (t2.classList.contains("edit-action"))
      return this._onActionEdit(e2);
    if (t2.classList.contains("delete-action")) {
      const e3 = t2.closest(".action-part"), s2 = this.item.actions.get(e3.dataset.itemId), deleteItem = async () => s2.delete();
      if (getSkipActionPrompt())
        deleteItem();
      else {
        const e4 = `<p>${game.i18n.localize("FFD20.DeleteItemConfirmation")}</p>`;
        Dialog.confirm({ title: game.i18n.localize("FFD20.DeleteItemTitle").format(s2.name), content: e4, yes: () => {
          deleteItem();
        }, rejectClose: true });
      }
    }
    if (t2.classList.contains("duplicate-action")) {
      const s2 = t2.closest(".action-part"), l2 = deepClone(this.item.actions.get(s2.dataset.itemId).data);
      l2.name = `${l2.name} (${game.i18n.localize("FFD20.Copy")})`, l2._id = randomID(16);
      const c2 = deepClone(this.item.system.actions ?? []);
      return this._onSubmit(e2, { updateData: { "system.actions": c2.concat(l2) } });
    }
  }
  async _onActionEdit(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".action-part"), s2 = this.item.actions.get(t2.dataset.itemId);
    for (const e3 of Object.values(this.item.apps))
      if (e3.object === s2)
        return void e3.render(true, { focus: true });
    new ffd20.applications.component.ItemActionSheet(s2).render(true);
  }
  async _onBuffControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-change"))
      return await this._onSubmit(e2), ffd20.components.ItemChange.create([{}], { parent: this.item });
    if (t2.classList.contains("delete-change")) {
      const s2 = t2.closest(".change"), l2 = deepClone(this.item.system.changes), c2 = l2.find((e3) => e3._id === s2.dataset.change);
      return l2.splice(l2.indexOf(c2), 1), this._onSubmit(e2, { updateData: { "system.changes": l2 } });
    }
  }
  _onChangeTargetControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = this.item.changes.get(t2.closest(".change").dataset.change), l2 = getBuffTargetDictionary(this.item.actor), c2 = s2?.subTarget?.split(".")[0], u2 = CONFIG.FFD20.buffTargets[c2]?.category ?? c2, m2 = new Widget_CategorizedItemPicker({ title: "FFD20.Application.ChangeTargetSelector.Title" }, l2, (e3) => {
      e3 && s2.update({ subTarget: e3 });
    }, { category: u2, item: s2?.subTarget });
    this._openApplications.push(m2.appId), m2.render(true);
  }
  async _onNoteControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-note")) {
      const t3 = this.item.system.contextNotes || [];
      await this._onSubmit(e2, { updateData: { "system.contextNotes": t3.concat([ItemFFD20.defaultContextNote]) } });
    }
    if (t2.classList.contains("delete-note")) {
      const s2 = t2.closest(".context-note"), l2 = duplicate(this.item.system.contextNotes);
      l2.splice(Number(s2.dataset.note), 1), await this._onSubmit(e2, { updateData: { "system.contextNotes": l2 } });
    }
  }
  _onNoteTargetControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".context-note"), s2 = Number(t2.dataset.note), l2 = this.item.system.contextNotes[s2], c2 = getBuffTargetDictionary(this.item.actor, "contextNotes"), u2 = l2?.subTarget?.split(".")[0], m2 = CONFIG.FFD20.contextNoteTargets[u2]?.category ?? u2, d2 = new Widget_CategorizedItemPicker({ title: "FFD20.Application.ContextNoteTargetSelector.Title" }, c2, (e3) => {
      if (e3) {
        const t3 = {};
        t3[`system.contextNotes.${s2}.subTarget`] = e3, this.item.update(t3);
      }
    }, { category: m2, item: l2?.subTarget });
    this._openApplications.push(d2.appId), d2.render(true);
  }
  async _onLinkControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("delete-link")) {
      const s2 = t2.closest(".links-item"), l2 = t2.closest('div[data-group="links"]');
      let c2 = duplicate(getProperty(this.item, `system.links.${l2.dataset.tab}`) || []);
      const u2 = c2.find((e3) => e3.id === s2.dataset.link);
      c2 = c2.filter((e3) => e3 !== u2);
      const m2 = {};
      m2[`system.links.${l2.dataset.tab}`] = c2, callOldNamespaceHookAll("deleteItemLink", "ffd20DeleteItemLink", this.item, u2, l2.dataset.tab), Hooks.callAll("ffd20DeleteItemLink", this.item, u2, l2.dataset.tab), await this._onSubmit(e2, { updateData: m2 }), this.item._cleanLink(u2, l2.dataset.tab), game.socket.emit("system.ffd20", { eventType: "cleanItemLink", actorUUID: this.item.actor?.uuid, itemUUID: this.item.uuid, link: u2, linkType: l2.dataset.tab });
    }
  }
  async _onFilePickerAlt(e2) {
    const t2 = e2.currentTarget, s2 = t2.dataset.for, l2 = getProperty(this.item.system, s2), c2 = t2.form[s2];
    if (!c2)
      return;
    new FilePicker({ type: t2.dataset.type, current: l2, callback: (t3) => {
      c2.value = t3, this.options.submitOnChange && this._onSubmit(e2);
    }, top: this.position.top + 40, left: this.position.left + 10 }).browse(l2);
  }
  _onInputText(e2) {
    e2.preventDefault();
    const t2 = this.element.find(e2.currentTarget.dataset.for);
    t2.removeAttr("readonly"), t2.attr("name", e2.currentTarget.dataset.attrName);
    const { inputValue: s2 } = e2.currentTarget.dataset;
    let l2 = s2 ?? getProperty(this.item, e2.currentTarget.dataset.attrName);
    t2.attr("value", l2), t2.select(), t2.focusout((e3) => {
      "number" == typeof l2 && (l2 = l2.toString()), l2 !== t2.attr("value") ? this._onSubmit(e3) : this.render();
    });
  }
  async _createAttack(e2) {
    if (null == this.item.actor)
      throw new Error(game.i18n.localize("FFD20.ErrorItemNoOwner"));
    await this._onSubmit(e2), await this.item.actor.createAttackFromWeapon(this.item);
  }
  _onEntrySelector(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = { name: t2.getAttribute("for"), title: t2.innerText, flag: "true" === t2.dataset.flag, flat: "true" === t2.dataset.flat, fields: t2.dataset.fields, dtypes: t2.dataset.dtypes };
    new ffd20.applications.EntrySelector(this.item, s2).render(true);
  }
  _onEntryControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".notes").dataset.name;
    if (t2.classList.contains("add-entry")) {
      const t3 = getProperty(this.document, s2) ?? [], l2 = {};
      return l2[s2] = t3.concat(""), this._onSubmit(e2, { updateData: l2 });
    }
    if (t2.classList.contains("delete-entry")) {
      const l2 = t2.closest(".entry").dataset.index, c2 = duplicate(getProperty(this.document, s2));
      c2.splice(l2, 1);
      const u2 = {};
      return u2[s2] = c2, this._onSubmit(e2, { updateData: u2 });
    }
  }
  _selectOnClick(e2) {
    e2.preventDefault();
    e2.currentTarget.select();
  }
}
class ItemSheetFFD20_Container extends ItemSheetFFD20 {
  constructor(...e2) {
    super(...e2), this._filters = { search: { container: "" } }, this.searchCompositioning = false, this.searchRefresh = true, this.searchDelay = 250, this.searchDelayEvent = null, this.effectiveSearch = "", this._itemUpdates = [], this.options.tabs[0].initial = "contents", this._tabs[0].active = "contents";
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { width: 800, classes: ["ffd20", "sheet", "item"], scrollY: ["section.inventory-body"], dragDrop: [{ dragSelector: "li.item[data-item-id]", dropSelector: '.tab[data-tab="contents"]' }, { dragSelector: "label.denomination" }] });
  }
  get template() {
    return "systems/ffd20/templates/items/container.hbs";
  }
  async getData() {
    const e2 = await super.getData();
    e2.filters = this._filters, e2.items = this.item.items.reduce((e3, t3) => {
      const s3 = t3.toObject();
      return e3.push(s3), s3.document = t3, s3.labels = t3.getLabels(), s3.hasAttack = t3.hasAttack, s3.hasMultiAttack = t3.hasMultiAttack, s3.hasDamage = t3.hasDamage, s3.hasRange = t3.hasRange, s3.hasEffect = t3.hasEffect, s3.hasAction = t3.hasAction || t3.isCharged, s3.showUnidentifiedData = t3.showUnidentifiedData, t3.showUnidentifiedData ? s3.name = getProperty(t3, "system.unidentified.name") || getProperty(t3, "system.identifiedName") || t3.name : s3.name = getProperty(t3, "system.identifiedName") || t3.name, e3;
    }, []), e2.items.sort((e3, t3) => (e3.sort || 0) - (t3.sort || 0)), e2.hasCurrency = Object.values(this.object.system.currency).some((e3) => e3 > 0), this._prepareContents(e2), e2.descriptionAttributes = [], e2.descriptionAttributes.push({ isNumber: true, name: "system.weight.value", fakeName: true, label: game.i18n.localize("FFD20.Weight"), value: e2.item.system.weight.converted.total, inputValue: e2.item.system.weight.converted.value, decimals: 2, id: "data-weight-value" }), e2.showIdentifyDescription ? e2.descriptionAttributes.push({ isNumber: true, name: "system.basePrice", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: e2.item.system.price, id: "data-basePrice" }, { isNumber: true, name: "data.unidentified.basePrice", fakeName: true, label: game.i18n.localize("FFD20.UnidentifiedPriceShort"), value: getProperty(e2.item, "system.unidentified.price"), id: "data-unidentifiedBasePrice" }) : e2.showUnidentifiedData ? e2.descriptionAttributes.push({ isNumber: true, name: "system.unidentified.basePrice", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: getProperty(e2.item, "system.unidentified.price"), id: "data-basePrice" }) : e2.descriptionAttributes.push({ isNumber: true, name: "system.basePrice", fakeName: true, label: game.i18n.localize("FFD20.Price"), value: e2.item.system.price, id: "data-basePrice" }), e2.descriptionAttributes.push({ isRange: true, label: game.i18n.localize("FFD20.HPShort"), value: { name: "system.hp.value", value: getProperty(e2.item, "system.hp.value") }, max: { name: "system.hp.max", value: getProperty(e2.item, "system.hp.max") } }), e2.descriptionAttributes.push({ isNumber: true, label: game.i18n.localize("FFD20.Hardness"), name: "system.hardness", value: getProperty(e2.item, "system.hardness") }), e2.descriptionAttributes.push({ isBoolean: true, name: "system.carried", label: game.i18n.localize("FFD20.Carried"), value: e2.item.system.carried });
    let t2 = game.settings.get("ffd20", "weightUnits");
    "default" === t2 && (t2 = game.settings.get("ffd20", "units")), e2.weight = { contents: this.item.system.weight.converted.contents, units: "metric" === t2 ? game.i18n.localize("FFD20.Kgs") : game.i18n.localize("FFD20.Lbs") };
    const s2 = this.item.getValue({ sellValue: 1, inLowestDenomination: true }) - this.item.getValue({ recursive: false, sellValue: 1, inLowestDenomination: true }), l2 = this.item.getValue({ inLowestDenomination: true }) - this.item.getValue({ recursive: false, inLowestDenomination: true });
    return e2.totalValue = splitCurrency(s2), e2.sellValue = splitCurrency(l2), e2.labels || (e2.labels = {}), e2.labels.totalValue = game.i18n.localize("FFD20.ItemContainerTotalValue").format(e2.totalValue.gil, e2.totalValue.sgil, e2.totalValue.cgil), e2.labels.sellValue = game.i18n.localize("FFD20.ItemContainerSellValue").format(e2.sellValue.gil, e2.sellValue.sgil, e2.sellValue.cgil), e2;
  }
  _prepareContents(e2) {
    const t2 = { weapon: { label: game.i18n.localize("FFD20.InventoryWeapons"), canCreate: true, hasActions: true, items: [], canEquip: false, dataset: { type: "weapon" } }, equipment: { label: game.i18n.localize("FFD20.InventoryArmorEquipment"), canCreate: true, hasActions: true, items: [], canEquip: false, dataset: { type: "equipment" }, hasSlots: true }, consumable: { label: game.i18n.localize("FFD20.InventoryConsumables"), canCreate: true, hasActions: true, items: [], canEquip: false, dataset: { type: "consumable" } }, gear: { label: CONFIG.FFD20.lootTypes.gear, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeGearSingle"), "sub-type": "gear" } }, ammo: { label: CONFIG.FFD20.lootTypes.ammo, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeAmmoSingle"), "sub-type": "ammo" } }, misc: { label: CONFIG.FFD20.lootTypes.misc, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.Misc"), "sub-type": "misc" } }, tradeGoods: { label: CONFIG.FFD20.lootTypes.tradeGoods, canCreate: true, hasActions: false, items: [], canEquip: false, dataset: { type: "loot", "type-name": game.i18n.localize("FFD20.LootTypeTradeGoodsSingle"), "sub-type": "tradeGoods" } }, container: { label: game.i18n.localize("FFD20.InventoryContainers"), canCreate: true, hasActions: false, items: [], dataset: { type: "container" } } }, s2 = e2.items.reduce((e3, t3) => {
      t3.img = t3.img || DEFAULT_TOKEN, t3.isStack = !!t3.system.quantity && t3.system.quantity > 1, t3.hasUses = t3.system.uses && t3.system.uses.max > 0, t3.isCharged = ["day", "week", "charges"].includes(getProperty(t3, "system.uses.per")), t3.price = false === t3.system.identified ? t3.system.unidentified.price : t3.system.price;
      const s3 = getProperty(t3, "system.quantity") ?? 1, l2 = getProperty(t3, "system.uses.value") ?? 1;
      return t3.empty = s3 <= 0 || t3.isCharged && l2 <= 0, e3.push(t3), e3;
    }, []);
    for (const e3 of s2) {
      const s3 = "loot" === e3.type ? e3.system.subType || "gear" : e3.system.subType;
      e3.system.quantity = e3.system.quantity || 0, e3.totalWeight = Math.roundDecimals(e3.document.system.weight.converted.total, 2);
      let l2 = game.settings.get("ffd20", "weightUnits");
      "default" === l2 && (l2 = game.settings.get("ffd20", "units")), e3.units = "metric" === l2 ? game.i18n.localize("FFD20.Kgs") : game.i18n.localize("FFD20.Lbs"), null != t2[e3.type] && t2[e3.type].items.push(e3), null != s3 && null != t2[s3] && t2[s3].items.push(e3);
    }
    e2.inventory = Object.values(t2);
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find('.tab[data-tab="contents"] .item-create').click((e3) => this._onItemCreate(e3)), e2.find('.tab[data-tab="contents"] .item-edit').click(this._onItemEdit.bind(this)), e2.find('.tab[data-tab="contents"] .item-delete').click(this._onItemDelete.bind(this)), e2.find('.tab[data-tab="contents"] .item-take').click(this._onItemTake.bind(this)), e2.find(".item .item-name h4").contextmenu(this._onItemEdit.bind(this)), e2.find("a.item-control.item-identify").click((e3) => {
      this._quickIdentifyItem(e3);
    }), e2.find("a.item-control.item-duplicate").click(this._duplicateItem.bind(this)), e2.find("a.item-control.item-quantity-add").click((e3) => {
      this._quickChangeItemQuantity(e3, 1);
    }), e2.find("a.item-control.item-quantity-subtract").click((e3) => {
      this._quickChangeItemQuantity(e3, -1);
    }), e2.find(".item-actions a").click((e3) => this._quickItemActionControl(e3)), e2.find(".item-detail.item-uses input[type='text']:not(:disabled)").off("change").change(this._setItemUses.bind(this)).on("wheel", this._setItemUses.bind(this)), e2.find("a.convert-currency").click(this._convertCurrency.bind(this)), e2.find(".item .item-image").click((e3) => this._onItemRoll(e3));
    const t2 = e2.find(".search-input");
    t2.on("keyup change", this._searchFilterChange.bind(this)), t2.on("compositionstart compositionend", this._searchFilterCompositioning.bind(this)), this.searchRefresh = true, t2.each(function() {
      this.value.length > 0 && $(this).change();
    }), e2.find(".clear-search").on("click", this._clearSearch.bind(this));
  }
  _onItemCreate(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.dataset.type, l2 = { name: `New ${(t2.dataset.typeName || t2.dataset.type).capitalize()}`, type: s2, system: duplicate(t2.dataset) };
    return delete l2["system.type"], this.item.createContainerContent(l2);
  }
  _onItemEdit(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item");
    this.item.getContainerContent(t2.dataset.itemId).sheet.render(true, { focus: true });
  }
  _onItemDelete(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.disabled)
      return;
    const s2 = e2.currentTarget.closest(".item");
    if (getSkipActionPrompt())
      this.item.deleteContainerContent(s2.dataset.itemId);
    else {
      t2.disabled = true;
      const e3 = this.document.items.get(s2.dataset.itemId), l2 = `<p>${game.i18n.localize("FFD20.DeleteItemConfirmation")}</p>`;
      Dialog.confirm({ title: game.i18n.localize("FFD20.DeleteItemTitle").format(e3.name), content: l2, yes: () => {
        this.item.deleteContainerContent(s2.dataset.itemId), t2.disabled = false;
      }, no: () => t2.disabled = false, rejectClose: true }).then(null, () => t2.disabled = false);
    }
  }
  async _onItemTake(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item"), s2 = this.item.getContainerContent(t2.dataset.itemId);
    this.actor && (await this.actor.createEmbeddedDocuments("Item", [s2.toObject()]), await this.item.deleteContainerContent(s2._id));
  }
  _onDragStart(e2) {
    if (e2.target.classList.contains("entity-link"))
      return;
    const t2 = e2.currentTarget;
    let s2;
    if (t2.classList.contains("denomination")) {
      if (!this.item.testUserPermission(game.user, 3))
        return;
      s2 = { type: "Currency", alt: t2.classList.contains("alt-currency"), currency: [...t2.classList].find((e3) => /[pgsc]p/.test(e3)), containerId: this.item.id, amount: parseInt(t2.nextElementSibling.textContent || t2.nextElementSibling.value) };
    } else {
      s2 = { type: "Item", data: this.item.getContainerContent(t2.dataset.itemId).toObject(), containerId: this.item.id };
    }
    const l2 = this.item.parentActor;
    l2 && (s2.actorId = l2.id, s2.sceneId = l2.isToken ? canvas.scene?.id : null, s2.tokenId = l2.isToken ? l2.token.id : null), e2.dataTransfer.setData("text/plain", JSON.stringify(s2));
  }
  _onDrop(e2) {
    let t2;
    e2.preventDefault(), e2.stopPropagation();
    try {
      t2 = JSON.parse(e2.dataTransfer.getData("text/plain"));
    } catch (e3) {
      return false;
    }
    const s2 = this.item;
    let l2 = Hooks.call("ffd20DropContainerSheetData", s2, this, t2);
    if (l2 = callOldNamespaceHook("dropContainerSheetData", "ffd20DropContainerSheetData", l2, s2, this, t2), false !== l2)
      switch (t2.type) {
        case "Item":
          return this._onDropItem(e2, t2);
        case "Currency":
          return this._onDropCurrency(e2, t2);
      }
  }
  async _onDropCurrency(e2, t2) {
    const s2 = t2.tokenId ? game.actors.tokens[t2.tokenId] : t2.actorId;
    return new CurrencyTransfer({ actor: s2, container: t2.containerId, alt: t2.alt }, { actor: this.actor, container: this.item.id, amount: Object.fromEntries([[t2.currency, parseInt(t2.amount)]]) }).render(true);
  }
  async _onDropItem(e2, t2) {
    if (!this.item.isOwner)
      return false;
    const s2 = await ItemFFD20.fromDropData(t2), l2 = s2.parentActor, c2 = s2.toObject();
    if (t2.containerId === this.item.id)
      return this._onSortItem(e2, c2);
    if ("spell" === c2.type) {
      const e3 = await createConsumableSpellDialog(c2, { allowSpell: false });
      return !!e3 && this.item.createContainerContent(e3);
    }
    if (ItemFFD20.isInventoryItem(s2.type) && (await this.item.createContainerContent(c2), l2 && l2 === this.item.parentActor))
      if (l2.items.get(s2.id))
        await l2.deleteEmbeddedDocuments("Item", [s2.id]);
      else {
        const e3 = l2.containerItems.find((e4) => e4.id === s2.id);
        e3 && await e3.parentItem.deleteContainerContent(s2.id);
      }
  }
  async _quickIdentifyItem(e2) {
    if (e2.preventDefault(), !game.user.isGM) {
      const e3 = game.i18n.localize("FFD20.ErrorCantIdentify");
      return console.error(e3), ui.notifications.error(e3);
    }
    const t2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), s2 = this.item.getContainerContent(t2), l2 = s2.system.identified;
    if (void 0 !== l2)
      return s2.update({ "system.identified": !l2 });
  }
  async _duplicateItem(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(t2).parents(".item").attr("data-item-id"), l2 = this.item.getContainerContent(s2), c2 = duplicate(l2.data);
    return delete c2._id, c2.name = `${c2.name} (${game.i18n.localize("FFD20.Copy")})`, l2.isPhysical && (c2.identifiedName = `${l2.data.identifiedName} (${game.i18n.localize("FFD20.Copy")})`), c2.links && (c2.links = {}), this.item.createContainerContent(c2);
  }
  async _quickChangeItemQuantity(e2, t2 = 1) {
    e2.preventDefault();
    const s2 = $(e2.currentTarget).parents(".item").attr("data-item-id"), l2 = this.item.getContainerContent(s2), c2 = getProperty(l2, "system.quantity") || 0, u2 = Math.max(0, c2 + t2);
    return l2.update({ "system.quantity": u2 });
  }
  async _quickItemActionControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = $(e2.currentTarget).closest(".item").attr("data-item-id"), l2 = this.item.getContainerContent(s2);
    t2.classList.contains("item-attack") && await l2.use({ ev: e2, skipDialog: getSkipActionPrompt() });
  }
  async _setItemUses(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".item").dataset.itemId, l2 = this.item.getContainerContent(s2);
    this._mouseWheelAdd(e2.originalEvent, t2);
    const c2 = Number(t2.value);
    this.setItemUpdate(l2._id, "data.uses.value", c2), e2.originalEvent instanceof MouseEvent ? this._submitQueued || $(t2).one("mouseleave", (e3) => {
      this._updateItems();
    }) : this._updateItems();
  }
  async _updateItems() {
    const e2 = [], t2 = duplicate(this._itemUpdates);
    this._itemUpdates = [];
    for (const s2 of t2) {
      const t3 = this.item.items.filter((e3) => e3._id === s2._id)[0];
      null != t3 && (delete s2._id, t3.testUserPermission(game.user, "OWNER") && e2.push(t3.update(s2)));
    }
    return Promise.all(e2);
  }
  setItemUpdate(e2, t2, s2) {
    let l2 = this._itemUpdates.filter((t3) => t3._id === e2)[0];
    null == l2 && (l2 = { _id: e2 }, this._itemUpdates.push(l2)), l2[t2] = s2;
  }
  _mouseWheelAdd(e2, t2) {
    if (e2 && e2 instanceof WheelEvent) {
      const s2 = parseFloat(t2.value);
      if (Number.isNaN(s2))
        return;
      const l2 = -Math.sign(e2.deltaY), c2 = parseFloat(t2.dataset.wheelStep) || 1;
      t2.value = s2 + c2 * l2;
    }
  }
  _convertCurrency(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset.type;
    this.item.convertCurrency(t2);
  }
  _onSortItem(e2, t2) {
    const s2 = this.item.getContainerContent(t2._id), l2 = this._getSortSiblings(s2), c2 = e2.target.closest(".item"), u2 = c2 ? c2.dataset.itemId : null, m2 = l2.find((e3) => e3._id === u2), d2 = SortingHelpers.performIntegerSort(s2, { target: m2, siblings: l2 }).map((e3) => {
      const t3 = e3.update;
      return t3._id = e3.target._id, t3;
    });
    return this.item.updateContainerContents(d2);
  }
  _getSortSiblings(e2) {
    return this.item.items.filter((t2) => ItemFFD20.isInventoryItem(e2.type) ? ItemFFD20.isInventoryItem(t2.type) : t2.type === e2.type && t2.data._id !== e2._id);
  }
  _onItemRoll(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.closest(".item").dataset.itemId, s2 = this.item.getContainerContent(t2);
    if (null != s2)
      return s2.displayCard();
  }
  _searchFilterCommit(e2) {
    const t2 = this.item, s2 = this._filters.search.container.toLowerCase();
    if (this.effectiveSearch === s2 && !this.searchRefresh)
      return;
    this.effectiveSearch = s2, this.searchRefresh = false;
    $(e2.target).closest(".tab").find(".item-list .item").each(function() {
      const e3 = $(this);
      if (s2?.length > 0) {
        ((e4) => e4.toLowerCase().includes(s2))(t2.items.get(this.dataset.itemId).name) ? e3.show() : e3.hide();
      } else
        e3.show();
    });
  }
  _clearSearch(e2) {
    this._filters.search.container = "", $(e2.target).prev(".search-input").val("").change();
  }
  _searchFilterCompositioning(e2) {
    this.searchCompositioning = "compositionstart" === e2.type;
  }
  _searchFilterChange(e2) {
    e2.preventDefault(), e2.stopPropagation();
    const t2 = e2.target.value, s2 = this._filters.search.container !== t2;
    (this.searchCompositioning || s2) && clearTimeout(this.searchDelayEvent), this.searchCompositioning || (this._filters.search.container = t2, "keyup" === e2.type ? s2 && (this.searchDelayEvent = setTimeout(() => this._searchFilterCommit(e2), this.searchDelay)) : this._searchFilterCommit(e2));
  }
}
class CompendiumDirectoryFFD20 extends CompendiumDirectory {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/sidebar/compendium.hbs" });
  }
  async getData(e2) {
    const t2 = await super.getData(e2);
    for (const e3 of Object.values(t2.packs))
      for (const t3 of e3.packs) {
        const e4 = game.settings.get("core", "compendiumConfiguration")[t3.collection], s2 = true === getProperty(e4, "ffd20.disabled");
        setProperty(t3, "ffd20.disabled", s2);
      }
    return t2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find(".compendium-footer .compendium.spells").click((e3) => this._onBrowseCompendium(e3, "spells")), e2.find(".compendium-footer .compendium.items").click((e3) => this._onBrowseCompendium(e3, "items")), e2.find(".compendium-footer .compendium.bestiary").click((e3) => this._onBrowseCompendium(e3, "bestiary")), e2.find(".compendium-footer .compendium.feats").click((e3) => this._onBrowseCompendium(e3, "feats")), e2.find(".compendium-footer .compendium.classes").click((e3) => this._onBrowseCompendium(e3, "classes")), e2.find(".compendium-footer .compendium.races").click((e3) => this._onBrowseCompendium(e3, "races")), e2.find(".compendium-footer .compendium.buffs").click((e3) => this._onBrowseCompendium(e3, "buffs"));
  }
  _onBrowseCompendium(e2, t2) {
    if (e2.preventDefault(), ffd20.migrations.isMigrating)
      return ui.notifications.warn(game.i18n.localize("FFD20.Migration.Ongoing"));
    ffd20.applications.compendiums[t2]._render(true);
  }
}
const addLowLightVisionToLightConfig = function(e2, t2) {
  const s2 = e2.object;
  let l2 = `<div class="form-group"><label>${game.i18n.localize("FFD20.DisableLightLowLightVision")}</label>`;
  l2 += '<input type="checkbox" name="flags.ffd20.disableLowLight" data-dtype="Boolean"', s2.getFlag("ffd20", "disableLowLight") && (l2 += " checked"), l2 += "/></div>";
  const c2 = $(l2);
  t2.find('div.tab[data-tab="basic"]').append(c2);
}, addLowLightVisionToTokenConfig = function(e2, t2) {
  const s2 = e2.object;
  let l2 = `<div class="form-group"><label>${game.i18n.localize("FFD20.DisableLightLowLightVision")}</label>`;
  l2 += '<input type="checkbox" name="flags.ffd20.disableLowLight" data-dtype="Boolean"', s2.getFlag("ffd20", "disableLowLight") && (l2 += " checked"), l2 += "/></div>";
  const c2 = $(l2);
  t2.find('.tab[data-group="light"][data-tab="basic"]').append(c2);
}, patchCore = function() {
  LightSource.prototype.initialize, LightSource.prototype.initialize = function(e2 = {}) {
    const t2 = this._initializeData(e2);
    this._initializeFlags();
    const s2 = this.animation.seed ?? e2.seed ?? Math.floor(1e5 * Math.random()), l2 = foundry.utils.deepClone(CONFIG.Canvas.lightAnimations[this.data.animation.type] || {});
    this.animation = Object.assign(l2, this.data.animation, { seed: s2 });
    const { dim: c2, bright: u2 } = this.getRadius();
    this.colorRGB = Color.from(this.data.color)?.rgb, this.radius = Math.max(Math.abs(c2), Math.abs(u2)), this.ratio = Math.clamped(Math.abs(this.data.bright) / this.radius, 0, 1), this.isDarkness = this.data.luminosity < 0, this.los = this._createPolygon(), this._flags.renderSoftEdges = canvas.performance.lightSoftEdges && (!!this.los.rays?.length || this.data.angle < 360), this._initializeMeshes(this.los);
    if ("animation.type" in t2 || "walls" in t2)
      this._initializeShaders();
    else if (this.constructor._appearanceKeys.some((e3) => e3 in t2))
      for (const e3 of Object.keys(this._resetUniforms))
        this._resetUniforms[e3] = true;
    return this._initializeBlending(), this;
  }, LightSource.prototype.getRadius = function() {
    const e2 = { dim: this.data.dim, bright: this.data.bright }, t2 = { dim: 1, bright: 1 };
    if (this.object?.document.getFlag("ffd20", "disableLowLight"))
      return e2;
    const s2 = canvas.tokens.placeables.filter((e3) => e3.actor?.testUserPermission(game.user, "OBSERVER")), l2 = s2.filter((e3) => true === e3.actorVision.lowLight);
    if (game.user.isGM || game.settings.get("ffd20", "lowLightVisionMode"))
      for (const e3 of l2.filter((e4) => e4.controlled)) {
        const s3 = e3.actorVision;
        t2.dim = Math.max(t2.dim, s3.lowLightMultiplier), t2.bright = Math.max(t2.bright, s3.lowLightMultiplierBright);
      }
    else {
      const e3 = s2.filter((e4) => e4.controlled).length > 0, c2 = l2.filter((e4) => e4.controlled).length > 0, u2 = l2.length > 0;
      if (!e3 && u2 || c2)
        for (const e4 of l2) {
          const s3 = e4.actorVision;
          t2.dim = Math.max(t2.dim, s3.lowLightMultiplier), t2.bright = Math.max(t2.bright, s3.lowLightMultiplierBright);
        }
    }
    return e2.dim *= t2.dim, e2.bright *= t2.bright, e2;
  };
}, Q = Object.freeze(Object.defineProperty({ __proto__: null, addLowLightVisionToLightConfig, addLowLightVisionToTokenConfig, patchCore }, Symbol.toStringTag, { value: "Module" }));
{
  const e2 = ChatLog.parse;
  ChatLog.parse = function(t3) {
    const s2 = t3.match(/^\/(\w+)(?: +([^#]+))(?:#(.+))?/), l2 = s2?.[1];
    return ["HEAL", "H", "DAMAGE", "D"].includes(l2?.toUpperCase()) ? (s2[2] = s2[0].slice(1), ["custom", s2]) : e2.call(this, t3);
  };
  const t2 = TextEditor._onClickInlineRoll;
  TextEditor._onClickInlineRoll = function(e3) {
    e3.preventDefault();
    const s2 = e3.currentTarget;
    if (!s2.classList.contains("custom"))
      return t2.call(this, e3);
    const l2 = `/${s2.dataset.formula}`, c2 = CONFIG.ChatMessage.documentClass, u2 = c2.getSpeaker(), m2 = c2.getSpeakerActor(u2);
    let d2 = m2 ? m2.getRollData() : {};
    const h2 = s2.closest(".sheet");
    if (h2) {
      const e4 = ui.windows[h2.dataset.appid];
      ["Actor", "Item"].includes(e4?.document.documentName) && (d2 = e4.object.getRollData());
    }
    return customRolls(l2, u2, d2);
  }, $._data($("body").get(0), "events")?.click?.find((e3) => "a.inline-roll" === e3.selector) && ($("body").off("click", "a.inline-roll", t2), $("body").on("click", "a.inline-roll", TextEditor._onClickInlineRoll));
}
{
  const e2 = KeyboardManager.prototype._onAlt;
  KeyboardManager.prototype._onAlt = function(t2, s2, l2) {
    ffd20.tooltip && (s2 || (ffd20.tooltip.lock.new = true), e2.call(this, t2, s2, l2), s2 || (ffd20.tooltip.lock.new = false));
  };
}
StringTerm.prototype.evaluate = function(e2 = {}) {
  const t2 = parseRollStringVariable(this.term);
  if ("string" == typeof t2) {
    const e3 = `with (sandbox) { return ${this.term}; }`;
    try {
      const t3 = new Function("sandbox", e3);
      this._total = t3(RollFFD20.MATH_PROXY);
    } catch (e4) {
      throw e4.message = `Failed to evaluate: '${this.term}'
${e4.message}`, e4;
    }
  } else
    this._total = t2;
}, NumericTerm.prototype.getTooltipData = function() {
  return { formula: this.expression, total: this.total, flavor: this.flavor };
}, ParentheticalTerm.CLOSE_REGEXP = new RegExp(`\\)${RollTerm.FLAVOR_REGEXP_STRING}?`, "g"), OperatorTerm.REGEXP = /(?:&&|\|\||\*\*|\+|-|\*|\/|\\%|\||:|\?)|(?<![a-z])[!=<>]+/g, OperatorTerm.OPERATORS.push("\\%", "!", "?", ":", "=", "<", ">", "==", "===", "<=", ">=", "??", "||", "&&", "**");
{
  const e2 = CompendiumCollection.prototype.getIndex;
  CompendiumCollection.prototype.getIndex = async function({ fields: t2 } = {}) {
    const s2 = await e2.call(this, { fields: t2 });
    return this.fuzzyIndex = sortArrayByName([...s2]), this.index;
  };
}
{
  const e2 = TextEditor._createContentLink;
  TextEditor._createContentLink = function(t2, s2, l2, c2) {
    const u2 = e2.call(this, t2, s2, l2, c2);
    if (c2?.indexOf("::") > -1) {
      const e3 = c2.split("::"), t3 = e3.pop();
      e3.length && (e3.forEach((e4) => {
        let [t4, s3] = e4.split(/(?<!\\):/);
        switch (t4 && s3 || (s3 = t4, t4 = "extra"), t4) {
          case "icon":
            u2.firstChild.className = "fas fa-" + s3;
            break;
          case "class":
            u2.classList.add(...s3.split(" "));
            break;
          default:
            u2.setAttribute("data-" + t4, s3);
        }
      }), u2.lastChild.textContent = t3);
    }
    return u2;
  };
}
{
  const e2 = KeybindingsConfig.prototype._detectConflictingActions;
  KeybindingsConfig.prototype._detectConflictingActions = function(t2, s2, l2) {
    return t2.startsWith("ffd20.") && s2.uneditable.includes(l2) ? [] : e2.call(this, t2, s2, l2);
  };
}
Combatant.prototype.updateResource, Combatant.prototype.updateResource = function() {
  return this.actor ? this.resource = foundry.utils.getProperty(this.actor.system, this.parent.settings.resource) ?? null : this.resource = null;
};
{
  const e2 = Roll.fromData;
  Roll.fromData = function(t2, ...s2) {
    return "RollFFD20$1" === t2.class && (t2.class = "RollFFD20"), e2.call(this, t2, ...s2);
  };
}
patchCore();
class AbilityTemplate extends MeasuredTemplateFFD20 {
  static fromData(e2) {
    const t2 = e2.type, s2 = e2.distance;
    if (!t2)
      return null;
    if (!s2)
      return null;
    if (!canvas.scene)
      return null;
    if (!["cone", "circle", "rect", "ray"].includes(t2))
      return null;
    const l2 = { t: t2, user: game.user.id, distance: s2 || 5, direction: 0, x: 0, y: 0, fillColor: e2.color ? e2.color : game.user.color, texture: e2.texture ? e2.texture : null, _id: randomID(16) };
    switch (t2) {
      case "cone":
        true === game.settings.get("ffd20", "measureStyle") ? l2.angle = 90 : l2.angle = 53.13;
        break;
      case "rect":
        l2.distance = Math.sqrt(Math.pow(s2, 2) + Math.pow(s2, 2)), l2.direction = 45;
        break;
      case "ray":
        l2.width = 5;
    }
    return new this(new (0, CONFIG.MeasuredTemplate.documentClass)(l2, { parent: canvas.scene }));
  }
  async drawPreview(e2) {
    const t2 = canvas.activeLayer;
    return await this.draw(), this.active = true, this.layer.activate(), this.layer.preview.addChild(this), this.activatePreviewListeners(t2);
  }
  activatePreviewListeners(e2) {
    return new Promise((t2) => {
      const s2 = {};
      let l2 = 0;
      const c2 = true === game.settings.get("ffd20", "measureStyle"), _clear = () => {
        this.destroyed || this.destroy();
      };
      s2.mm = (e3) => {
        e3.stopPropagation();
        const t3 = Date.now();
        if (t3 - l2 <= 20)
          return;
        const s3 = e3.data.getLocalPosition(this.layer), c3 = canvas.grid.getSnappedPosition(s3.x, s3.y, 2);
        this.document.x = c3.x, this.document.y = c3.y, this.refresh(), canvas.app.render(), l2 = t3;
      }, s2.rc = (l3, c3 = true) => {
        this.layer.preview.removeChildren(), canvas.stage.off("mousemove", s2.mm), canvas.stage.off("mousedown", s2.lc), canvas.app.view.oncontextmenu = null, canvas.app.view.onwheel = null, this.active = false;
        canvas.grid.getHighlightLayer(this.highlightId).clear(), _clear(), e2.activate(), c3 && t2({ result: false });
      }, s2.lc = async (e3) => {
        s2.rc(e3, false);
        const l3 = { result: true, place: async () => {
          const e4 = (await canvas.scene.createEmbeddedDocuments("MeasuredTemplate", [this.document.toObject(false)]))[0];
          return this.document = e4, e4;
        }, delete: () => this.document.delete() };
        _clear(), t2(l3);
      }, s2.mw = (e3) => {
        let t3, s3;
        e3.ctrlKey && e3.preventDefault(), e3.stopPropagation(), e3.ctrlKey ? (t3 = "rect" === this.document.t ? Math.sqrt(canvas.dimensions.distance * canvas.dimensions.distance) : canvas.dimensions.distance, this.data.distance += t3 * -Math.sign(e3.deltaY)) : (c2 && "cone" === this.document.t ? (t3 = 90, s3 = e3.shiftKey ? t3 : 45) : (t3 = canvas.grid.type > CONST.GRID_TYPES.SQUARE ? 30 : 15, s3 = e3.shiftKey ? t3 : 5), "rect" === this.document.t ? (s3 = Math.sqrt(Math.pow(5, 2) + Math.pow(5, 2)), this.document.distance += s3 * -Math.sign(e3.deltaY)) : this.document.direction += s3 * Math.sign(e3.deltaY)), this.refresh();
      }, this.controlIcon && this.controlIcon.removeAllListeners(), canvas.stage.on("mousemove", s2.mm), canvas.stage.on("mousedown", s2.lc), canvas.app.view.oncontextmenu = s2.rc, canvas.app.view.onwheel = s2.mw, this.hitArea = new PIXI.Polygon([]);
    });
  }
  refresh() {
    if (this.template && canvas.scene)
      return super.refresh();
  }
}
class AttackDialog extends Application {
  constructor(e2, t2 = null, s2 = {}) {
    super(s2), this.object = e2, this.rollData = t2 || this.object.getRollData(), this.initAmmoUsage(), this.initAttacks(), this.base = { cl: this.rollData.cl ?? 0, sl: this.rollData.sl ?? 0 }, this.flags = { "primary-attack": true === this.object.data.naturalAttack.primaryAttack, "cl-check": true === this.object.clCheck, "measure-template": true }, this.attributes = { d20: this.rollData.d20 ?? "", "attack-bonus": "", "damage-bonus": "", "cl-offset": "0", "sl-offset": "0", rollMode: game.settings.get("core", "rollMode"), "damage-ability-multiplier": this.rollData.action?.ability?.damageMult ?? 1, held: this.rollData.item?.held ?? "normal" }, this.conditionals = {}, this.object.conditionals?.contents.forEach((e3, t3) => {
      this.conditionals[`conditional.${t3}`] = true === e3.data.default;
    }), this._callbacks = { resolve: null, reject: null };
  }
  get title() {
    return `Use: ${this.object.name}`;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/apps/attack-roll-dialog.hbs", classes: ["ffd20", "attack-dialog"], width: 440, height: "auto", closeOnSubmit: true, sheetConfig: false, submitOnChange: false, submitOnClose: false });
  }
  static get defaultAttack() {
    return { label: "", attackBonus: 0, attackBonusTotal: 0, ammo: null };
  }
  getData() {
    return { data: this.rollData, item: this.object.data, config: CONFIG.FFD20, rollMode: game.settings.get("core", "rollMode"), rollModes: CONFIG.Dice.rollModes, hasAttack: this.object.hasAttack, hasDamage: this.object.hasDamage, hasDamageAbility: this.object.data.ability?.damage ?? false, isNaturalAttack: "natural" === this.object.item.system.attackType, isWeaponAttack: "weapon" === this.object.item.system.attackType, isMeleeWeaponAttackAction: "mwak" === this.object.data.actionType, isRangedWeaponAttackAction: "rwak" === this.object.data.actionType, isAttack: "attack" === this.object.item.type, isWeapon: "weapon" === this.object.item.type, isSpell: "spell" === this.object.item.type, isFeat: "feat" === this.object.item.type, hasTemplate: this.object.hasTemplate, attacks: this.attacks, flags: this.flags, attributes: this.attributes, conditionals: this.conditionals, usesAmmo: this.object.data.usesAmmo, ammo: this.getAmmo() };
  }
  getAmmo() {
    return this.object.actor.items.filter(this._filterAmmo.bind(this)).map((e2) => ({ data: e2.toObject(), isDefault: this.object.item.getFlag("ffd20", "defaultAmmo") === e2.id }));
  }
  _filterAmmo(e2) {
    if ("loot" !== e2.type || "ammo" !== e2.system.subType)
      return false;
    if (e2.system.quantity <= 0)
      return false;
    const t2 = this.object.data.ammoType, s2 = e2.extraType;
    return !s2 || (t2 === s2 || void 0);
  }
  activateListeners(e2) {
    e2.find('.flags input[type="checkbox"]').on("change", this._onToggleFlag.bind(this)), e2.find("input.attribute").on("change", this._onChangeAttribute.bind(this)), e2.find('input[type="checkbox"][name="concentration"]').on("change", this._onToggleFlag.bind(this)), e2.find('input[type="checkbox"][name="cl-check"]').on("change", this._onToggleFlag.bind(this)), e2.find('input[type="checkbox"][name="measure-template"]').on("change", this._onToggleFlag.bind(this)), e2.find("select").on("change", this._onSelectChange.bind(this)), e2.find('.conditionals input[type="checkbox"]').on("change", this._onToggleConditional.bind(this)), e2.find(".ammo-select").on("click", this._onAmmoSelectClick.bind(this)), e2.find(".ammo-select .ammo-item .controls a").on("click", this._onAmmoControlClick.bind(this)), e2.find(".ammo-select .ammo-item").on("click", this._onAmmoClick.bind(this)), e2.on("click", this._unfocusElements.bind(this)), e2.find('button[name="attack_single"]').on("mouseenter", this._hideExtraAttacks.bind(this)), e2.find('button[name="attack_single"]').on("mouseleave", this._showExtraAttacks.bind(this)), e2.find('button[name="attack_single"]').on("click", this._onAttackSingle.bind(this)), e2.find('button[name="attack_full"]').on("click", this._onAttackFull.bind(this));
  }
  _onSelectChange(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    this.attributes[t2.name] = t2.options[t2.selectedIndex].value, this.render();
  }
  _hideExtraAttacks(e2) {
    this.element.find(".attacks .attack").filter((e3, t2) => parseInt(t2.dataset.index) > 0).addClass("disabled");
  }
  _showExtraAttacks(e2) {
    this.element.find(".attacks .attack").removeClass("disabled");
  }
  _onToggleFlag(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (this.flags[t2.name] = true === t2.checked, ["haste-attack", "rapid-shot", "manyshot"].includes(t2.name))
      if (t2.checked) {
        const e3 = { "haste-attack": "FFD20.Haste", "rapid-shot": "FFD20.RapidShot", manyshot: "FFD20.Manyshot" }, s2 = "manyshot" === t2.name ? 1 : this.attacks.length;
        this.attacks.splice(s2, 0, mergeObject(this.constructor.defaultAttack, { id: t2.name, label: game.i18n.localize(e3[t2.name]), attackBonusTotal: "" })), this.setAttackAmmo(s2, this.object.item.getFlag("ffd20", "defaultAmmo"));
      } else
        this.attacks = this.attacks.filter((e3) => e3.id !== t2.name);
    this.render();
  }
  _onToggleConditional(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    this.conditionals[t2.name] = true === t2.checked, this.render();
  }
  _onAmmoSelectClick(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.querySelector("ul");
    if (!e2.target.closest("ul")) {
      s2.classList.toggle("open");
      s2.classList.contains("open") ? t2.classList.add("focus") : t2.classList.remove("focus");
    }
  }
  _onAmmoClick(e2) {
    const t2 = e2.target;
    if (t2.closest(".controls") && !t2.classList.contains("controls"))
      return;
    e2.preventDefault();
    const s2 = t2.closest(".ammo-item").dataset.id, l2 = parseInt(t2.closest(".attack").dataset.index);
    this.setAttackAmmo(l2, "null" === s2 ? null : s2), this.render();
  }
  async _onAmmoControlClick(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".ammo-item").dataset.id;
    switch (t2.dataset.type) {
      case "set-default":
        "null" === s2 ? await this.object.item.unsetFlag("ffd20", "defaultAmmo") : await this.object.item.setFlag("ffd20", "defaultAmmo", s2), t2.closest("ul").querySelectorAll(".ammo-item").forEach((e3) => e3.classList.remove("default")), "null" !== s2 && t2.closest(".ammo-item").classList.add("default");
        break;
      case "set-all":
        for (let e3 = 0; e3 < this.attacks.length; e3++)
          this.setAttackAmmo(e3, s2);
        this.render();
    }
  }
  _unfocusElements(e2) {
    if (null != this.element[0].querySelector(".ammo-select") && !e2.target.closest(".ammo-select")) {
      const e3 = this.element[0].querySelector(".ammo-select");
      e3.classList.remove("focus"), e3.querySelector("ul").classList.remove("open");
    }
  }
  _onChangeAttribute(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    switch (this.attributes[t2.name] = t2.value, t2.name) {
      case "cl-offset":
        this.rollData.cl = this.base.cl + parseInt(t2.value);
        break;
      case "sl-offset":
        this.rollData.sl = this.base.sl + parseInt(t2.value);
        break;
      case "damage-ability-multiplier":
        setProperty(this.rollData, "item.ability.damageMult", t2.value);
        break;
      case "held":
        setProperty(this.rollData, "item.held", t2.value);
    }
    this.render();
  }
  initAttacks() {
    this.attacks = new ActionUse({ rollData: this.rollData, item: this.object.item }).generateAttacks(true).map(({ label: e3, attackBonus: t2 }) => ({ label: e3, attackBonus: t2, attackBonusTotal: RollFFD20.safeTotal(t2, this.rollData), ammo: null }));
    const e2 = this.object.item.getFlag("ffd20", "defaultAmmo");
    if (null != e2)
      for (let t2 = 0; t2 < this.attacks.length; t2++)
        this.setAttackAmmo(t2, e2);
  }
  initAmmoUsage() {
    this.ammoUsage = this.getAmmo().reduce((e2, t2) => (e2[t2.data._id] = { quantity: t2.data.system.quantity, used: 0 }, e2), {});
  }
  getFormAttacks() {
    return this.attacks.map((e2) => ({ id: e2.id, label: e2.label, attackBonus: e2.attackBonus, ammo: e2.ammo?.data._id }));
  }
  setAttackAmmo(e2, t2 = null) {
    if (!this.object.data.usesAmmo)
      return;
    const s2 = this.attacks[e2], l2 = s2.ammo?.data._id, c2 = (t2 ? this.object.actor.items.get(t2) : null)?.flags?.ffd20?.abundant ?? false;
    if (t2 && null == this.ammoUsage[t2] && (t2 = null), !t2)
      return s2.ammo = null, void (null != l2 && this.ammoUsage[l2].used--);
    !c2 && this.ammoUsage[t2].used >= this.ammoUsage[t2].quantity || (s2.ammo = this.getAmmo().find((e3) => e3.data._id === t2), null != l2 && this.ammoUsage[l2].used--, this.ammoUsage[t2].used++);
  }
  _onAttackSingle(e2) {
    e2.preventDefault();
    const t2 = this.getFormAttacks();
    return this.doAttack(t2.slice(0, 1), false);
  }
  _onAttackFull(e2) {
    e2.preventDefault();
    const t2 = this.getFormAttacks();
    return this.doAttack(t2, true);
  }
  doAttack(e2, t2 = true) {
    this._callbacks.resolve({ fullAttack: t2, attacks: e2, html: this.element }), this._callbacks.resolve = null, this.close();
  }
  async close(e2 = {}) {
    return null != this._callbacks.resolve && this._callbacks.resolve(), super.close(e2);
  }
  show() {
    return new Promise((e2, t2) => {
      this.render(true), this._callbacks.resolve = (...t3) => {
        e2(...t3);
      }, this._callbacks.reject = (...e3) => {
        t2(...e3);
      };
    });
  }
}
const Z = { fill: L("#ff0000"), border: L("#ff0000").darken(0.1) }, J = { fill: L("#ffff00"), border: L("#ffff00").darken(0.1) };
class SquareHighlight {
  constructor(e2, t2 = 65280, s2 = 0) {
    this.origin = e2, this.borderColor = s2, this.fillColor = t2, this._squares = [], this._id = randomID(), canvas.grid.addHighlightLayer(`AttackHighlight.${this._id}`);
  }
  addSquare(e2, t2) {
    this._squares.push({ x: e2, y: t2 });
  }
  clear(e2 = false) {
    const t2 = canvas.grid.getHighlightLayer(`AttackHighlight.${this._id}`);
    t2 && (t2.clear(), e2 && canvas.grid.destroyHighlightLayer(`AttackHighlight.${this._id}`));
  }
  render() {
    const e2 = canvas.grid, t2 = e2.size, s2 = canvas.grid.getHighlightLayer(`AttackHighlight.${this._id}`);
    this.clear();
    for (const l2 of this._squares) {
      const c2 = Math.floor(this.origin.x - l2.x) * t2, u2 = Math.floor(this.origin.y - l2.y) * t2;
      e2.grid.highlightGridPosition(s2, { x: c2, y: u2, border: this.borderColor, color: this.fillColor });
    }
  }
}
let X;
const showAttackReach = function(e2, t2, s2) {
  clearHighlight();
  const l2 = function(e3, t3, s3) {
    const l3 = canvas.grid.size, c2 = e3.document.width, u2 = e3.document.height, m2 = { x: Math.floor((e3.x + c2 * l3 - 0.5 * l3) / l3), y: Math.floor((e3.y + u2 * l3 - 0.5 * l3) / l3) };
    if (!s3)
      return;
    const d2 = s3.getRollData(), h2 = s3.data.range.units;
    if (!["melee", "touch", "reach", "ft", "close", "medium"].includes(h2))
      return;
    const p2 = "reach" === h2, g2 = d2.range, y2 = s3.data.range.minUnits;
    let F2 = null;
    ["melee", "touch"].includes(y2) && (F2 = g2.melee), "reach" === y2 && (F2 = g2.reach), "ft" === y2 && (F2 = RollFFD20.safeRoll(s3.data.range.minValue || "0", d2).total);
    const D2 = { normal: [], reach: [], extra: [] }, k2 = true !== game.settings.get("ffd20", "alternativeReachCornerRule");
    if (["melee", "touch", "reach"].includes(h2))
      D2.normal = getReachSquares(e3, g2.melee, F2, null, { useReachRule: k2 }), D2.reach = getReachSquares(e3, g2.reach, g2.melee, null, { useReachRule: k2 });
    else if ("ft" === h2) {
      const t4 = RollFFD20.safeRoll(s3.data.range.value || "0", d2).total;
      D2.normal = getReachSquares(e3, t4, F2, null, { useReachRule: true });
      const l4 = Math.min(60, Math.max(canvas.dimensions.width / canvas.dimensions.size * canvas.dimensions.distance, canvas.dimensions.height / canvas.dimensions.size * canvas.dimensions.distance) + convertDistance(t4)[0]), c3 = s3.data.range.maxIncrements;
      for (let s4 = 1; s4 < c3; s4++)
        (s4 + 1) * convertDistance(t4)[0] <= l4 && D2.extra.push(getReachSquares(e3, (s4 + 1) * t4, s4 * t4, null, { useReachRule: k2 }));
    } else if (["close", "medium"].includes(h2) && "spell" === t3.type) {
      let t4;
      switch (h2) {
        case "close":
          t4 = RollFFD20.safeRoll("25 + floor(@cl / 2) * 5", d2).total;
          break;
        case "medium":
          t4 = RollFFD20.safeRoll("100 + @cl * 10", d2).total;
      }
      D2.normal = getReachSquares(e3, t4, F2, null, { useReachRule: k2 });
    }
    const v = { normal: new SquareHighlight(m2, colorToInt(Z.fill), colorToInt(Z.border)), reach: new SquareHighlight(m2, colorToInt(J.fill), colorToInt(J.border)), extra: [] };
    for (const e4 of D2.normal)
      v.normal.addSquare(e4[0], e4[1]);
    if (p2)
      for (const e4 of D2.reach)
        v.reach.addSquare(e4[0], e4[1]);
    for (let e4 = 0; e4 < D2.extra.length; e4++) {
      const t4 = D2.extra[e4], s4 = { fill: e4 % 2 == 1 ? Z.fill : J.fill, border: e4 % 2 == 1 ? Z.border : J.border }, l4 = new SquareHighlight(m2, colorToInt(s4.fill), colorToInt(s4.border));
      for (const e5 of t4)
        l4.addSquare(e5[0], e5[1]);
      v.extra.push(l4);
    }
    return v;
  }(e2, t2, s2);
  l2 && (X = l2, renderHighlight());
}, clearHighlight = function() {
  if (X) {
    X.normal.clear(), X.reach.clear();
    for (const e2 of X.extra)
      e2.clear();
    X = void 0;
  }
}, renderHighlight = function() {
  if (X) {
    X.normal.render(), X.reach.render();
    for (const e2 of X.extra)
      e2.render();
  }
};
function addReachListeners(e2) {
  e2.on("mouseenter", ".card-range", onMouseEnterReach), e2.on("mouseleave", ".card-range", onMouseLeaveReach);
}
const onMouseEnterReach = (e2) => {
  e2.preventDefault();
  const t2 = e2.currentTarget.closest(".chat-card"), { tokenUuid: s2, actionId: l2, itemId: c2 } = t2.dataset;
  c2 && l2 && s2 && async function(e3) {
    if (!e3)
      return;
    const t3 = await fromUuid(e3);
    return t3 instanceof TokenDocument ? t3.object : t3?.token ?? (null != t3 ? canvas.tokens.placeables.find((e4) => e4.actor === t3) : null);
  }(s2).then((e3) => {
    if (!e3)
      return;
    const t3 = e3.actor.allItems.find((e4) => e4.id === c2);
    t3 && (game.settings.get("ffd20", "hideReachMeasurements") || showAttackReach(e3, t3, t3.actions.get(l2)));
  });
}, onMouseLeaveReach = (e2) => {
  e2.preventDefault(), clearHighlight();
}, getReachSquares = function(e2, t2, s2 = 0, l2 = null, c2) {
  t2 = convertDistance(t2)[0], "number" == typeof s2 && (s2 = convertDistance(s2)[0]);
  const u2 = [];
  if (canvas.grid.type !== CONST.GRID_TYPES.SQUARE)
    return u2;
  l2 || (l2 = shouldAddReachSquare);
  const m2 = canvas.scene.grid.distance, d2 = canvas.grid.size, h2 = [];
  for (let t3 = 0; t3 < Math.floor(e2.w / d2); t3++)
    for (let s3 = 0; s3 < Math.floor(e2.h / d2); s3++) {
      const l3 = Math.floor((e2.x + 0.5 * d2) / d2 + t3), c3 = Math.floor((e2.y + 0.5 * d2) / d2 + s3);
      h2.push([l3, c3]);
    }
  const p2 = [Math.floor((e2.x + 0.5 * d2) / d2), Math.floor((e2.y + 0.5 * d2) / d2), Math.floor(e2.w / d2), Math.floor(e2.h / d2)], getClosestTokenSquare = function(e3) {
    const t3 = { square: null, dist: null };
    for (const s3 of h2) {
      const l3 = Math.sqrt((s3[0] - e3[0]) ** 2 + (s3[1] - e3[1]) ** 2);
      (null == t3.dist || l3 < t3.dist) && (t3.square = s3, t3.dist = l3);
    }
    return t3.square;
  }, g2 = Math.round(t2 / m2), y2 = 2 * g2 + p2[2], F2 = 2 * g2 + p2[3], D2 = [p2[0] - g2, p2[1] - g2];
  for (let m3 = D2[0]; m3 < D2[0] + y2; m3++)
    for (let d3 = D2[1]; d3 < D2[1] + F2; d3++) {
      const h3 = getClosestTokenSquare([m3, d3]), g3 = [m3 - p2[0], d3 - p2[1]];
      m3 >= p2[0] && m3 < p2[0] + p2[2] && d3 >= p2[1] && d3 < p2[1] + p2[2] && null != s2 || l2(e2, [m3, d3], h3, t2, s2, p2, c2) && u2.push(g3);
    }
  return u2;
}, shouldAddReachSquare = function(e2, t2, s2, l2, c2, u2, m2 = { useReachRule: false }) {
  canvas.scene.grid.distance;
  const d2 = canvas.grid.size, h2 = { x: s2[0] * d2, y: s2[1] * d2 }, p2 = { x: t2[0] * d2, y: t2[1] * d2 }, g2 = measureDistance(h2, p2), y2 = m2.useReachRule ? measureDistance(h2, p2, { diagonalRule: "555" }) : null, F2 = convertDistance(10)[0];
  return !(g2 > l2 && (!m2.useReachRule || l2 !== F2)) && (!(null != c2 && g2 <= c2) && !(m2.useReachRule && c2 >= F2 && y2 <= F2));
}, ee = Object.freeze(Object.defineProperty({ __proto__: null, SquareHighlight, showAttackReach, clearHighlight, addReachListeners }, Symbol.toStringTag, { value: "Module" }));
class TokenQuickActions {
  static async addTop3Attacks(e2, t2, s2) {
    const l2 = canvas.tokens.get(s2._id), c2 = l2.actor;
    if (null == c2)
      return;
    if (!c2.getQuickActions)
      return;
    let u2 = '<div class="col actions"><div class="below">';
    const m2 = c2.getQuickActions();
    m2.forEach(function(e3) {
      const t3 = e3.item, s3 = t3.img ?? CONST.DEFAULT_TOKEN;
      let l3 = "";
      "attack" === t3.type ? l3 = game.i18n.localize("FFD20.AttackWith").format(t3.name) : "spell" === t3.type ? l3 = game.i18n.localize("FFD20.AttackWithSpell").format(t3.name) : "feat" === t3.type && (l3 = game.i18n.localize("FFD20.AttackWithFeat").format(t3.name));
      const c3 = t3.type;
      u2 += `<div id="${c3}-${t3.id}" class="control-icon token-quick-action" style="border: 2px solid ${e3.color1};"><img src="${s3}" width="36" height="36" title="${l3}">`, u2 += "</div >";
    }), t2.find(".col.middle").after(u2 + "</div></div>"), m2.forEach(function(e3) {
      const s3 = c2.items.get(e3.item.id), u3 = s3.type, m3 = t2.find(`#${u3}-${s3.id}`), d2 = s3.firstAction;
      d2 && (m3.on("click", (e4) => e4.ctrlKey ? s3.roll() : s3.use({ ev: e4, skipDialog: getSkipActionPrompt() })), m3.on("contextmenu", () => {
        s3.sheet.render(true, { focus: true });
      }), m3.on("mouseenter", (e4) => {
        game.settings.get("ffd20", "hideReachMeasurements") || showAttackReach(l2, s3, d2);
      }), m3.on("mouseleave", (e4) => {
        clearHighlight();
      }));
    });
  }
}
const runSocketFunction = async function(e2, t2) {
  const s2 = game.user === getFirstActiveGM(), l2 = game.users.get(t2);
  try {
    switch (e2.eventType) {
      case "cleanItemLink": {
        const t3 = await fromUuid(e2.actorUUID), s3 = await fromUuid(e2.itemUUID), l3 = t3.items.get(s3._id), c2 = e2.link, u2 = e2.linkType;
        l3._cleanLink(c2, u2);
        break;
      }
      case "redrawCanvas":
        canvas.perception.update({ initializeLighting: true, initializeVision: true }, true);
        break;
      case "currencyTransfer": {
        if (!s2)
          return;
        let t3 = await fromUuid(e2.data.sourceActor), l3 = await fromUuid(e2.data.destActor);
        e2.data.sourceContainer && (t3 = t3.items.get(e2.data.sourceContainer)), e2.data.destContainer && (l3 = l3.items.get(e2.data.destContainer));
        const c2 = e2.data.amount;
        ffd20.applications.CurrencyTransfer.transfer(t3, l3, c2, e2.data.sourceAlt, e2.data.destAlt, false);
        break;
      }
      case "alterChatTargetAttribute":
        s2 && alterChatTargetAttribute(e2);
        break;
      case "giveItem": {
        if (!s2)
          return;
        const t3 = await fromUuid(e2.item), c2 = t3.parent;
        if (!c2.testUserPermission(l2, "OWNER"))
          return;
        const u2 = await fromUuid(e2.targetActor), m2 = t3.toObject();
        await u2.createEmbeddedDocuments("Item", [m2]), await c2.deleteEmbeddedDocuments("Item", [t3.id]);
        break;
      }
      case "refreshActorSheets":
        ffd20.utils.refreshActors({ renderOnly: true });
    }
  } catch (e3) {
    console.log("FFD20 | Socket Error: ", e3);
  }
}, alterChatTargetAttribute = function(e2) {
  const t2 = game.messages.get(e2.message), s2 = $(t2.data.content);
  if (null != e2.save) {
    const l2 = s2.find(`div.attack-targets .target[data-uuid="${e2.targetUuid}"] .saving-throws .${e2.save}`).find(".value");
    return l2.html(`${e2.value}`), e2.isFailure ? l2.addClass("failure") : l2.removeClass("failure"), e2.isSuccess ? l2.addClass("success") : l2.removeClass("success"), t2.update({ content: s2.prop("outerHTML") });
  }
};
var te = { exports: {} }, se = {}, ae = { exports: {} };
ae.exports = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", amp: "&", AMP: "&", andand: "⩕", And: "⩓", and: "∧", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angmsd: "∡", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", apacir: "⩯", ap: "≈", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", barwed: "⌅", Barwed: "⌆", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", because: "∵", Because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxdl: "┐", boxdL: "╕", boxDl: "╖", boxDL: "╗", boxdr: "┌", boxdR: "╒", boxDr: "╓", boxDR: "╔", boxh: "─", boxH: "═", boxhd: "┬", boxHd: "╤", boxhD: "╥", boxHD: "╦", boxhu: "┴", boxHu: "╧", boxhU: "╨", boxHU: "╩", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxul: "┘", boxuL: "╛", boxUl: "╜", boxUL: "╝", boxur: "└", boxuR: "╘", boxUr: "╙", boxUR: "╚", boxv: "│", boxV: "║", boxvh: "┼", boxvH: "╪", boxVh: "╫", boxVH: "╬", boxvl: "┤", boxvL: "╡", boxVl: "╢", boxVL: "╣", boxvr: "├", boxvR: "╞", boxVr: "╟", boxVR: "╠", bprime: "‵", breve: "˘", Breve: "˘", brvbar: "¦", bscr: "𝒷", Bscr: "ℬ", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsolb: "⧅", bsol: "\\", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", capand: "⩄", capbrcup: "⩉", capcap: "⩋", cap: "∩", Cap: "⋒", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", centerdot: "·", CenterDot: "·", cfr: "𝔠", Cfr: "ℭ", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cir: "○", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", colon: ":", Colon: "∷", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", conint: "∮", Conint: "∯", ContourIntegral: "∮", copf: "𝕔", Copf: "ℂ", coprod: "∐", Coproduct: "∐", copy: "©", COPY: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", cross: "✗", Cross: "⨯", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", cupbrcap: "⩈", cupcap: "⩆", CupCap: "≍", cup: "∪", Cup: "⋓", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", dagger: "†", Dagger: "‡", daleth: "ℸ", darr: "↓", Darr: "↡", dArr: "⇓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", ddagger: "‡", ddarr: "⇊", DD: "ⅅ", dd: "ⅆ", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", diamond: "⋄", Diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrowBar: "⤓", downarrow: "↓", DownArrow: "↓", Downarrow: "⇓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVectorBar: "⥖", DownLeftVector: "↽", DownRightTeeVector: "⥟", DownRightVectorBar: "⥗", DownRightVector: "⇁", DownTeeArrow: "↧", DownTee: "⊤", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", Ecirc: "Ê", ecirc: "ê", ecir: "≖", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", edot: "ė", eDot: "≑", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp13: " ", emsp14: " ", emsp: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", escr: "ℯ", Escr: "ℰ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", exponentiale: "ⅇ", ExponentialE: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", forall: "∀", ForAll: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", fscr: "𝒻", Fscr: "ℱ", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", ge: "≥", gE: "≧", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", gescc: "⪩", ges: "⩾", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", gg: "≫", Gg: "⋙", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gla: "⪥", gl: "≷", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gne: "⪈", gnE: "≩", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", gtcc: "⪧", gtcir: "⩺", gt: ">", GT: ">", Gt: "≫", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", harrcir: "⥈", harr: "↔", hArr: "⇔", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", hfr: "𝔥", Hfr: "ℌ", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", hopf: "𝕙", Hopf: "ℍ", horbar: "―", HorizontalLine: "─", hscr: "𝒽", Hscr: "ℋ", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", ifr: "𝔦", Ifr: "ℑ", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", Im: "ℑ", imof: "⊷", imped: "Ƶ", Implies: "⇒", incare: "℅", in: "∈", infin: "∞", infintie: "⧝", inodot: "ı", intcal: "⊺", int: "∫", Int: "∬", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", iscr: "𝒾", Iscr: "ℐ", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", lang: "⟨", Lang: "⟪", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", larrb: "⇤", larrbfs: "⤟", larr: "←", Larr: "↞", lArr: "⇐", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", latail: "⤙", lAtail: "⤛", lat: "⪫", late: "⪭", lates: "⪭︀", lbarr: "⤌", lBarr: "⤎", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", le: "≤", lE: "≦", LeftAngleBracket: "⟨", LeftArrowBar: "⇤", leftarrow: "←", LeftArrow: "←", Leftarrow: "⇐", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVectorBar: "⥙", LeftDownVector: "⇃", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", leftrightarrow: "↔", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTeeArrow: "↤", LeftTee: "⊣", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangleBar: "⧏", LeftTriangle: "⊲", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVectorBar: "⥘", LeftUpVector: "↿", LeftVectorBar: "⥒", LeftVector: "↼", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", lescc: "⪨", les: "⩽", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", llarr: "⇇", ll: "≪", Ll: "⋘", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoustache: "⎰", lmoust: "⎰", lnap: "⪉", lnapprox: "⪉", lne: "⪇", lnE: "≨", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", longleftarrow: "⟵", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftrightarrow: "⟷", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longmapsto: "⟼", longrightarrow: "⟶", LongRightArrow: "⟶", Longrightarrow: "⟹", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", lscr: "𝓁", Lscr: "ℒ", lsh: "↰", Lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", ltcc: "⪦", ltcir: "⩹", lt: "<", LT: "<", Lt: "≪", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", midast: "*", midcir: "⫰", mid: "∣", middot: "·", minusb: "⊟", minus: "−", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", mscr: "𝓂", Mscr: "ℳ", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natural: "♮", naturals: "ℕ", natur: "♮", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", nearhk: "⤤", nearr: "↗", neArr: "⇗", nearrow: "↗", ne: "≠", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: "\n", nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nharr: "↮", nhArr: "⇎", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlarr: "↚", nlArr: "⇍", nldr: "‥", nlE: "≦̸", nle: "≰", nleftarrow: "↚", nLeftarrow: "⇍", nleftrightarrow: "↮", nLeftrightarrow: "⇎", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", nopf: "𝕟", Nopf: "ℕ", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangleBar: "⧏̸", NotLeftTriangle: "⋪", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangleBar: "⧐̸", NotRightTriangle: "⋫", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", nparallel: "∦", npar: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", nprec: "⊀", npreceq: "⪯̸", npre: "⪯̸", nrarrc: "⤳̸", nrarr: "↛", nrArr: "⇏", nrarrw: "↝̸", nrightarrow: "↛", nRightarrow: "⇏", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nvdash: "⊬", nvDash: "⊭", nVdash: "⊮", nVDash: "⊯", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwarr: "↖", nwArr: "⇖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", Ocirc: "Ô", ocirc: "ô", ocir: "⊚", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", orarr: "↻", Or: "⩔", or: "∨", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", otimesas: "⨶", Otimes: "⨷", otimes: "⊗", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", para: "¶", parallel: "∥", par: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plus: "+", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", popf: "𝕡", Popf: "ℙ", pound: "£", prap: "⪷", Pr: "⪻", pr: "≺", prcue: "≼", precapprox: "⪷", prec: "≺", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", pre: "⪯", prE: "⪳", precsim: "≾", prime: "′", Prime: "″", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportional: "∝", Proportion: "∷", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", qopf: "𝕢", Qopf: "ℚ", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", quot: '"', QUOT: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", rang: "⟩", Rang: "⟫", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarr: "→", Rarr: "↠", rArr: "⇒", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", ratail: "⤚", rAtail: "⤜", ratio: "∶", rationals: "ℚ", rbarr: "⤍", rBarr: "⤏", RBarr: "⤐", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", Re: "ℜ", rect: "▭", reg: "®", REG: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", rfr: "𝔯", Rfr: "ℜ", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrowBar: "⇥", rightarrow: "→", RightArrow: "→", Rightarrow: "⇒", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVectorBar: "⥕", RightDownVector: "⇂", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTeeArrow: "↦", RightTee: "⊢", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangleBar: "⧐", RightTriangle: "⊳", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVectorBar: "⥔", RightUpVector: "↾", RightVectorBar: "⥓", RightVector: "⇀", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoustache: "⎱", rmoust: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", ropf: "𝕣", Ropf: "ℝ", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", rscr: "𝓇", Rscr: "ℛ", rsh: "↱", Rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", scap: "⪸", Scaron: "Š", scaron: "š", Sc: "⪼", sc: "≻", sccue: "≽", sce: "⪰", scE: "⪴", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdotb: "⊡", sdot: "⋅", sdote: "⩦", searhk: "⤥", searr: "↘", seArr: "⇘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", solbar: "⌿", solb: "⧄", sol: "/", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", square: "□", Square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squ: "□", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", sub: "⊂", Sub: "⋐", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", subset: "⊂", Subset: "⋐", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succapprox: "⪸", succ: "≻", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", sum: "∑", Sum: "∑", sung: "♪", sup1: "¹", sup2: "²", sup3: "³", sup: "⊃", Sup: "⋑", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", supset: "⊃", Supset: "⋑", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swarr: "↙", swArr: "⇙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", therefore: "∴", Therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", ThinSpace: " ", thinsp: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", tilde: "˜", Tilde: "∼", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", timesbar: "⨱", timesb: "⊠", times: "×", timesd: "⨰", tint: "∭", toea: "⤨", topbot: "⌶", topcir: "⫱", top: "⊤", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", trade: "™", TRADE: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", uarr: "↑", Uarr: "↟", uArr: "⇑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrowBar: "⤒", uparrow: "↑", UpArrow: "↑", Uparrow: "⇑", UpArrowDownArrow: "⇅", updownarrow: "↕", UpDownArrow: "↕", Updownarrow: "⇕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", upsi: "υ", Upsi: "ϒ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTeeArrow: "↥", UpTee: "⊥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", varr: "↕", vArr: "⇕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", vBar: "⫨", Vbar: "⫫", vBarv: "⫩", Vcy: "В", vcy: "в", vdash: "⊢", vDash: "⊨", Vdash: "⊩", VDash: "⊫", Vdashl: "⫦", veebar: "⊻", vee: "∨", Vee: "⋁", veeeq: "≚", vellip: "⋮", verbar: "|", Verbar: "‖", vert: "|", Vert: "‖", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", wedge: "∧", Wedge: "⋀", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xharr: "⟷", xhArr: "⟺", Xi: "Ξ", xi: "ξ", xlarr: "⟵", xlArr: "⟸", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrarr: "⟶", xrArr: "⟹", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", yuml: "ÿ", Yuml: "Ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", zfr: "𝔷", Zfr: "ℨ", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", zopf: "𝕫", Zopf: "ℤ", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" };
var ie = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ne = {}, re = {};
function encode$1(e2, t2, s2) {
  var l2, c2, u2, m2, d2, h2 = "";
  for ("string" != typeof t2 && (s2 = t2, t2 = encode$1.defaultChars), void 0 === s2 && (s2 = true), d2 = function(e3) {
    var t3, s3, l3 = re[e3];
    if (l3)
      return l3;
    for (l3 = re[e3] = [], t3 = 0; t3 < 128; t3++)
      s3 = String.fromCharCode(t3), /^[0-9a-z]$/i.test(s3) ? l3.push(s3) : l3.push("%" + ("0" + t3.toString(16).toUpperCase()).slice(-2));
    for (t3 = 0; t3 < e3.length; t3++)
      l3[e3.charCodeAt(t3)] = e3[t3];
    return l3;
  }(t2), l2 = 0, c2 = e2.length; l2 < c2; l2++)
    if (u2 = e2.charCodeAt(l2), s2 && 37 === u2 && l2 + 2 < c2 && /^[0-9a-f]{2}$/i.test(e2.slice(l2 + 1, l2 + 3)))
      h2 += e2.slice(l2, l2 + 3), l2 += 2;
    else if (u2 < 128)
      h2 += d2[u2];
    else if (u2 >= 55296 && u2 <= 57343) {
      if (u2 >= 55296 && u2 <= 56319 && l2 + 1 < c2 && (m2 = e2.charCodeAt(l2 + 1)) >= 56320 && m2 <= 57343) {
        h2 += encodeURIComponent(e2[l2] + e2[l2 + 1]), l2++;
        continue;
      }
      h2 += "%EF%BF%BD";
    } else
      h2 += encodeURIComponent(e2[l2]);
  return h2;
}
encode$1.defaultChars = ";/?:@&=+$,-_.!~*'()#", encode$1.componentChars = "-_.!~*'()";
var oe = encode$1, le = {};
function decode$1(e2, t2) {
  var s2;
  return "string" != typeof t2 && (t2 = decode$1.defaultChars), s2 = function(e3) {
    var t3, s3, l2 = le[e3];
    if (l2)
      return l2;
    for (l2 = le[e3] = [], t3 = 0; t3 < 128; t3++)
      s3 = String.fromCharCode(t3), l2.push(s3);
    for (t3 = 0; t3 < e3.length; t3++)
      l2[s3 = e3.charCodeAt(t3)] = "%" + ("0" + s3.toString(16).toUpperCase()).slice(-2);
    return l2;
  }(t2), e2.replace(/(%[a-f0-9]{2})+/gi, function(e3) {
    var t3, l2, c2, u2, m2, d2, h2, p2 = "";
    for (t3 = 0, l2 = e3.length; t3 < l2; t3 += 3)
      (c2 = parseInt(e3.slice(t3 + 1, t3 + 3), 16)) < 128 ? p2 += s2[c2] : 192 == (224 & c2) && t3 + 3 < l2 && 128 == (192 & (u2 = parseInt(e3.slice(t3 + 4, t3 + 6), 16))) ? (p2 += (h2 = c2 << 6 & 1984 | 63 & u2) < 128 ? "��" : String.fromCharCode(h2), t3 += 3) : 224 == (240 & c2) && t3 + 6 < l2 && (u2 = parseInt(e3.slice(t3 + 4, t3 + 6), 16), m2 = parseInt(e3.slice(t3 + 7, t3 + 9), 16), 128 == (192 & u2) && 128 == (192 & m2)) ? (p2 += (h2 = c2 << 12 & 61440 | u2 << 6 & 4032 | 63 & m2) < 2048 || h2 >= 55296 && h2 <= 57343 ? "���" : String.fromCharCode(h2), t3 += 6) : 240 == (248 & c2) && t3 + 9 < l2 && (u2 = parseInt(e3.slice(t3 + 4, t3 + 6), 16), m2 = parseInt(e3.slice(t3 + 7, t3 + 9), 16), d2 = parseInt(e3.slice(t3 + 10, t3 + 12), 16), 128 == (192 & u2) && 128 == (192 & m2) && 128 == (192 & d2)) ? ((h2 = c2 << 18 & 1835008 | u2 << 12 & 258048 | m2 << 6 & 4032 | 63 & d2) < 65536 || h2 > 1114111 ? p2 += "����" : (h2 -= 65536, p2 += String.fromCharCode(55296 + (h2 >> 10), 56320 + (1023 & h2))), t3 += 9) : p2 += "�";
    return p2;
  });
}
decode$1.defaultChars = ";/?:@&=+$,#", decode$1.componentChars = "";
var ce = decode$1;
function Url() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var ue = /^([a-z0-9.+-]+:)/i, me = /:[0-9]*$/, de = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, he = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), pe = ["'"].concat(he), fe = ["%", "/", "?", ";", "#"].concat(pe), ge = ["/", "?", "#"], ye = /^[+a-z0-9A-Z_-]{0,63}$/, be = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Fe = { javascript: true, "javascript:": true }, De = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
Url.prototype.parse = function(e2, t2) {
  var s2, l2, c2, u2, m2, d2 = e2;
  if (d2 = d2.trim(), !t2 && 1 === e2.split("#").length) {
    var h2 = de.exec(d2);
    if (h2)
      return this.pathname = h2[1], h2[2] && (this.search = h2[2]), this;
  }
  var p2 = ue.exec(d2);
  if (p2 && (c2 = (p2 = p2[0]).toLowerCase(), this.protocol = p2, d2 = d2.substr(p2.length)), (t2 || p2 || d2.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(m2 = "//" === d2.substr(0, 2)) || p2 && Fe[p2] || (d2 = d2.substr(2), this.slashes = true)), !Fe[p2] && (m2 || p2 && !De[p2])) {
    var g2, y2, F2 = -1;
    for (s2 = 0; s2 < ge.length; s2++)
      -1 !== (u2 = d2.indexOf(ge[s2])) && (-1 === F2 || u2 < F2) && (F2 = u2);
    for (-1 !== (y2 = -1 === F2 ? d2.lastIndexOf("@") : d2.lastIndexOf("@", F2)) && (g2 = d2.slice(0, y2), d2 = d2.slice(y2 + 1), this.auth = g2), F2 = -1, s2 = 0; s2 < fe.length; s2++)
      -1 !== (u2 = d2.indexOf(fe[s2])) && (-1 === F2 || u2 < F2) && (F2 = u2);
    -1 === F2 && (F2 = d2.length), ":" === d2[F2 - 1] && F2--;
    var D2 = d2.slice(0, F2);
    d2 = d2.slice(F2), this.parseHost(D2), this.hostname = this.hostname || "";
    var k2 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!k2) {
      var v = this.hostname.split(/\./);
      for (s2 = 0, l2 = v.length; s2 < l2; s2++) {
        var C2 = v[s2];
        if (C2 && !C2.match(ye)) {
          for (var T2 = "", S2 = 0, I2 = C2.length; S2 < I2; S2++)
            C2.charCodeAt(S2) > 127 ? T2 += "x" : T2 += C2[S2];
          if (!T2.match(ye)) {
            var _2 = v.slice(0, s2), w2 = v.slice(s2 + 1), A2 = C2.match(be);
            A2 && (_2.push(A2[1]), w2.unshift(A2[2])), w2.length && (d2 = w2.join(".") + d2), this.hostname = _2.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > 255 && (this.hostname = ""), k2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var N2 = d2.indexOf("#");
  -1 !== N2 && (this.hash = d2.substr(N2), d2 = d2.slice(0, N2));
  var O2 = d2.indexOf("?");
  return -1 !== O2 && (this.search = d2.substr(O2), d2 = d2.slice(0, O2)), d2 && (this.pathname = d2), De[c2] && this.hostname && !this.pathname && (this.pathname = ""), this;
}, Url.prototype.parseHost = function(e2) {
  var t2 = me.exec(e2);
  t2 && (":" !== (t2 = t2[0]) && (this.port = t2.substr(1)), e2 = e2.substr(0, e2.length - t2.length)), e2 && (this.hostname = e2);
};
var parse = function(e2, t2) {
  if (e2 && e2 instanceof Url)
    return e2;
  var s2 = new Url();
  return s2.parse(e2, t2), s2;
};
ne.encode = oe, ne.decode = ce, ne.format = function(e2) {
  var t2 = "";
  return t2 += e2.protocol || "", t2 += e2.slashes ? "//" : "", t2 += e2.auth ? e2.auth + "@" : "", e2.hostname && -1 !== e2.hostname.indexOf(":") ? t2 += "[" + e2.hostname + "]" : t2 += e2.hostname || "", t2 += e2.port ? ":" + e2.port : "", t2 += e2.pathname || "", t2 += e2.search || "", t2 += e2.hash || "";
}, ne.parse = parse;
var ke, ve, Ce, Te, Se, Ie, _e, we, Ae, Ne = {};
function requireRegex$3() {
  return ve ? ke : (ve = 1, ke = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/);
}
function requireRegex$2() {
  return Te ? Ce : (Te = 1, Ce = /[\0-\x1F\x7F-\x9F]/);
}
function requireRegex() {
  return we ? _e : (we = 1, _e = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/);
}
function requireUc_micro() {
  return Ae || (Ae = 1, Ne.Any = requireRegex$3(), Ne.Cc = requireRegex$2(), Ne.Cf = Ie ? Se : (Ie = 1, Se = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), Ne.P = ie, Ne.Z = requireRegex()), Ne;
}
!function(e2) {
  var t2 = Object.prototype.hasOwnProperty;
  function has(e3, s3) {
    return t2.call(e3, s3);
  }
  function isValidEntityCode(e3) {
    return !(e3 >= 55296 && e3 <= 57343) && (!(e3 >= 64976 && e3 <= 65007) && (65535 != (65535 & e3) && 65534 != (65535 & e3) && (!(e3 >= 0 && e3 <= 8) && (11 !== e3 && (!(e3 >= 14 && e3 <= 31) && (!(e3 >= 127 && e3 <= 159) && !(e3 > 1114111)))))));
  }
  function fromCodePoint(e3) {
    if (e3 > 65535) {
      var t3 = 55296 + ((e3 -= 65536) >> 10), s3 = 56320 + (1023 & e3);
      return String.fromCharCode(t3, s3);
    }
    return String.fromCharCode(e3);
  }
  var s2 = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l2 = new RegExp(s2.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), c2 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, u2 = ae.exports;
  var m2 = /[&<>"]/, d2 = /[&<>"]/g, h2 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function replaceUnsafeChar(e3) {
    return h2[e3];
  }
  var p2 = /[.?*+^$[\]\\(){}|-]/g;
  var g2 = ie;
  e2.lib = {}, e2.lib.mdurl = ne, e2.lib.ucmicro = requireUc_micro(), e2.assign = function(e3) {
    var t3 = Array.prototype.slice.call(arguments, 1);
    return t3.forEach(function(t4) {
      if (t4) {
        if ("object" != typeof t4)
          throw new TypeError(t4 + "must be object");
        Object.keys(t4).forEach(function(s3) {
          e3[s3] = t4[s3];
        });
      }
    }), e3;
  }, e2.isString = function(e3) {
    return "[object String]" === function(e4) {
      return Object.prototype.toString.call(e4);
    }(e3);
  }, e2.has = has, e2.unescapeMd = function(e3) {
    return e3.indexOf("\\") < 0 ? e3 : e3.replace(s2, "$1");
  }, e2.unescapeAll = function(e3) {
    return e3.indexOf("\\") < 0 && e3.indexOf("&") < 0 ? e3 : e3.replace(l2, function(e4, t3, s3) {
      return t3 || function(e5, t4) {
        var s4 = 0;
        return has(u2, t4) ? u2[t4] : 35 === t4.charCodeAt(0) && c2.test(t4) && isValidEntityCode(s4 = "x" === t4[1].toLowerCase() ? parseInt(t4.slice(2), 16) : parseInt(t4.slice(1), 10)) ? fromCodePoint(s4) : e5;
      }(e4, s3);
    });
  }, e2.isValidEntityCode = isValidEntityCode, e2.fromCodePoint = fromCodePoint, e2.escapeHtml = function(e3) {
    return m2.test(e3) ? e3.replace(d2, replaceUnsafeChar) : e3;
  }, e2.arrayReplaceAt = function(e3, t3, s3) {
    return [].concat(e3.slice(0, t3), s3, e3.slice(t3 + 1));
  }, e2.isSpace = function(e3) {
    switch (e3) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }, e2.isWhiteSpace = function(e3) {
    if (e3 >= 8192 && e3 <= 8202)
      return true;
    switch (e3) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }, e2.isMdAsciiPunct = function(e3) {
    switch (e3) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }, e2.isPunctChar = function(e3) {
    return g2.test(e3);
  }, e2.escapeRE = function(e3) {
    return e3.replace(p2, "\\$&");
  }, e2.normalizeReference = function(e3) {
    return e3 = e3.trim().replace(/\s+/g, " "), "Ṿ" === "ẞ".toLowerCase() && (e3 = e3.replace(/ẞ/g, "ß")), e3.toLowerCase().toUpperCase();
  };
}(se);
var Oe = {}, xe = se.unescapeAll, Pe = se.unescapeAll;
Oe.parseLinkLabel = function(e2, t2, s2) {
  var l2, c2, u2, m2, d2 = -1, h2 = e2.posMax, p2 = e2.pos;
  for (e2.pos = t2 + 1, l2 = 1; e2.pos < h2; ) {
    if (93 === (u2 = e2.src.charCodeAt(e2.pos)) && 0 === --l2) {
      c2 = true;
      break;
    }
    if (m2 = e2.pos, e2.md.inline.skipToken(e2), 91 === u2) {
      if (m2 === e2.pos - 1)
        l2++;
      else if (s2)
        return e2.pos = p2, -1;
    }
  }
  return c2 && (d2 = e2.pos), e2.pos = p2, d2;
}, Oe.parseLinkDestination = function(e2, t2, s2) {
  var l2, c2, u2 = t2, m2 = { ok: false, pos: 0, lines: 0, str: "" };
  if (60 === e2.charCodeAt(t2)) {
    for (t2++; t2 < s2; ) {
      if (10 === (l2 = e2.charCodeAt(t2)))
        return m2;
      if (60 === l2)
        return m2;
      if (62 === l2)
        return m2.pos = t2 + 1, m2.str = xe(e2.slice(u2 + 1, t2)), m2.ok = true, m2;
      92 === l2 && t2 + 1 < s2 ? t2 += 2 : t2++;
    }
    return m2;
  }
  for (c2 = 0; t2 < s2 && 32 !== (l2 = e2.charCodeAt(t2)) && !(l2 < 32 || 127 === l2); )
    if (92 === l2 && t2 + 1 < s2) {
      if (32 === e2.charCodeAt(t2 + 1))
        break;
      t2 += 2;
    } else {
      if (40 === l2 && ++c2 > 32)
        return m2;
      if (41 === l2) {
        if (0 === c2)
          break;
        c2--;
      }
      t2++;
    }
  return u2 === t2 || 0 !== c2 || (m2.str = xe(e2.slice(u2, t2)), m2.lines = 0, m2.pos = t2, m2.ok = true), m2;
}, Oe.parseLinkTitle = function(e2, t2, s2) {
  var l2, c2, u2 = 0, m2 = t2, d2 = { ok: false, pos: 0, lines: 0, str: "" };
  if (t2 >= s2)
    return d2;
  if (34 !== (c2 = e2.charCodeAt(t2)) && 39 !== c2 && 40 !== c2)
    return d2;
  for (t2++, 40 === c2 && (c2 = 41); t2 < s2; ) {
    if ((l2 = e2.charCodeAt(t2)) === c2)
      return d2.pos = t2 + 1, d2.lines = u2, d2.str = Pe(e2.slice(m2 + 1, t2)), d2.ok = true, d2;
    if (40 === l2 && 41 === c2)
      return d2;
    10 === l2 ? u2++ : 92 === l2 && t2 + 1 < s2 && (t2++, 10 === e2.charCodeAt(t2) && u2++), t2++;
  }
  return d2;
};
var Ee = se.assign, Me = se.unescapeAll, Re = se.escapeHtml, Le = {};
function Renderer$1() {
  this.rules = Ee({}, Le);
}
Le.code_inline = function(e2, t2, s2, l2, c2) {
  var u2 = e2[t2];
  return "<code" + c2.renderAttrs(u2) + ">" + Re(e2[t2].content) + "</code>";
}, Le.code_block = function(e2, t2, s2, l2, c2) {
  var u2 = e2[t2];
  return "<pre" + c2.renderAttrs(u2) + "><code>" + Re(e2[t2].content) + "</code></pre>\n";
}, Le.fence = function(e2, t2, s2, l2, c2) {
  var u2, m2, d2, h2, p2, g2 = e2[t2], y2 = g2.info ? Me(g2.info).trim() : "", F2 = "", D2 = "";
  return y2 && (F2 = (d2 = y2.split(/(\s+)/g))[0], D2 = d2.slice(2).join("")), 0 === (u2 = s2.highlight && s2.highlight(g2.content, F2, D2) || Re(g2.content)).indexOf("<pre") ? u2 + "\n" : y2 ? (m2 = g2.attrIndex("class"), h2 = g2.attrs ? g2.attrs.slice() : [], m2 < 0 ? h2.push(["class", s2.langPrefix + F2]) : (h2[m2] = h2[m2].slice(), h2[m2][1] += " " + s2.langPrefix + F2), p2 = { attrs: h2 }, "<pre><code" + c2.renderAttrs(p2) + ">" + u2 + "</code></pre>\n") : "<pre><code" + c2.renderAttrs(g2) + ">" + u2 + "</code></pre>\n";
}, Le.image = function(e2, t2, s2, l2, c2) {
  var u2 = e2[t2];
  return u2.attrs[u2.attrIndex("alt")][1] = c2.renderInlineAsText(u2.children, s2, l2), c2.renderToken(e2, t2, s2);
}, Le.hardbreak = function(e2, t2, s2) {
  return s2.xhtmlOut ? "<br />\n" : "<br>\n";
}, Le.softbreak = function(e2, t2, s2) {
  return s2.breaks ? s2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
}, Le.text = function(e2, t2) {
  return Re(e2[t2].content);
}, Le.html_block = function(e2, t2) {
  return e2[t2].content;
}, Le.html_inline = function(e2, t2) {
  return e2[t2].content;
}, Renderer$1.prototype.renderAttrs = function(e2) {
  var t2, s2, l2;
  if (!e2.attrs)
    return "";
  for (l2 = "", t2 = 0, s2 = e2.attrs.length; t2 < s2; t2++)
    l2 += " " + Re(e2.attrs[t2][0]) + '="' + Re(e2.attrs[t2][1]) + '"';
  return l2;
}, Renderer$1.prototype.renderToken = function(e2, t2, s2) {
  var l2, c2 = "", u2 = false, m2 = e2[t2];
  return m2.hidden ? "" : (m2.block && -1 !== m2.nesting && t2 && e2[t2 - 1].hidden && (c2 += "\n"), c2 += (-1 === m2.nesting ? "</" : "<") + m2.tag, c2 += this.renderAttrs(m2), 0 === m2.nesting && s2.xhtmlOut && (c2 += " /"), m2.block && (u2 = true, 1 === m2.nesting && t2 + 1 < e2.length && ("inline" === (l2 = e2[t2 + 1]).type || l2.hidden || -1 === l2.nesting && l2.tag === m2.tag) && (u2 = false)), c2 += u2 ? ">\n" : ">");
}, Renderer$1.prototype.renderInline = function(e2, t2, s2) {
  for (var l2, c2 = "", u2 = this.rules, m2 = 0, d2 = e2.length; m2 < d2; m2++)
    void 0 !== u2[l2 = e2[m2].type] ? c2 += u2[l2](e2, m2, t2, s2, this) : c2 += this.renderToken(e2, m2, t2);
  return c2;
}, Renderer$1.prototype.renderInlineAsText = function(e2, t2, s2) {
  for (var l2 = "", c2 = 0, u2 = e2.length; c2 < u2; c2++)
    "text" === e2[c2].type ? l2 += e2[c2].content : "image" === e2[c2].type ? l2 += this.renderInlineAsText(e2[c2].children, t2, s2) : "softbreak" === e2[c2].type && (l2 += "\n");
  return l2;
}, Renderer$1.prototype.render = function(e2, t2, s2) {
  var l2, c2, u2, m2 = "", d2 = this.rules;
  for (l2 = 0, c2 = e2.length; l2 < c2; l2++)
    "inline" === (u2 = e2[l2].type) ? m2 += this.renderInline(e2[l2].children, t2, s2) : void 0 !== d2[u2] ? m2 += d2[e2[l2].type](e2, l2, t2, s2, this) : m2 += this.renderToken(e2, l2, t2, s2);
  return m2;
};
var ze = Renderer$1;
function Ruler$3() {
  this.__rules__ = [], this.__cache__ = null;
}
Ruler$3.prototype.__find__ = function(e2) {
  for (var t2 = 0; t2 < this.__rules__.length; t2++)
    if (this.__rules__[t2].name === e2)
      return t2;
  return -1;
}, Ruler$3.prototype.__compile__ = function() {
  var e2 = this, t2 = [""];
  e2.__rules__.forEach(function(e3) {
    e3.enabled && e3.alt.forEach(function(e4) {
      t2.indexOf(e4) < 0 && t2.push(e4);
    });
  }), e2.__cache__ = {}, t2.forEach(function(t3) {
    e2.__cache__[t3] = [], e2.__rules__.forEach(function(s2) {
      s2.enabled && (t3 && s2.alt.indexOf(t3) < 0 || e2.__cache__[t3].push(s2.fn));
    });
  });
}, Ruler$3.prototype.at = function(e2, t2, s2) {
  var l2 = this.__find__(e2), c2 = s2 || {};
  if (-1 === l2)
    throw new Error("Parser rule not found: " + e2);
  this.__rules__[l2].fn = t2, this.__rules__[l2].alt = c2.alt || [], this.__cache__ = null;
}, Ruler$3.prototype.before = function(e2, t2, s2, l2) {
  var c2 = this.__find__(e2), u2 = l2 || {};
  if (-1 === c2)
    throw new Error("Parser rule not found: " + e2);
  this.__rules__.splice(c2, 0, { name: t2, enabled: true, fn: s2, alt: u2.alt || [] }), this.__cache__ = null;
}, Ruler$3.prototype.after = function(e2, t2, s2, l2) {
  var c2 = this.__find__(e2), u2 = l2 || {};
  if (-1 === c2)
    throw new Error("Parser rule not found: " + e2);
  this.__rules__.splice(c2 + 1, 0, { name: t2, enabled: true, fn: s2, alt: u2.alt || [] }), this.__cache__ = null;
}, Ruler$3.prototype.push = function(e2, t2, s2) {
  var l2 = s2 || {};
  this.__rules__.push({ name: e2, enabled: true, fn: t2, alt: l2.alt || [] }), this.__cache__ = null;
}, Ruler$3.prototype.enable = function(e2, t2) {
  Array.isArray(e2) || (e2 = [e2]);
  var s2 = [];
  return e2.forEach(function(e3) {
    var l2 = this.__find__(e3);
    if (l2 < 0) {
      if (t2)
        return;
      throw new Error("Rules manager: invalid rule name " + e3);
    }
    this.__rules__[l2].enabled = true, s2.push(e3);
  }, this), this.__cache__ = null, s2;
}, Ruler$3.prototype.enableOnly = function(e2, t2) {
  Array.isArray(e2) || (e2 = [e2]), this.__rules__.forEach(function(e3) {
    e3.enabled = false;
  }), this.enable(e2, t2);
}, Ruler$3.prototype.disable = function(e2, t2) {
  Array.isArray(e2) || (e2 = [e2]);
  var s2 = [];
  return e2.forEach(function(e3) {
    var l2 = this.__find__(e3);
    if (l2 < 0) {
      if (t2)
        return;
      throw new Error("Rules manager: invalid rule name " + e3);
    }
    this.__rules__[l2].enabled = false, s2.push(e3);
  }, this), this.__cache__ = null, s2;
}, Ruler$3.prototype.getRules = function(e2) {
  return null === this.__cache__ && this.__compile__(), this.__cache__[e2] || [];
};
var je = Ruler$3, $e = /\r\n?|\n/g, Be = /\0/g, Ge = se.arrayReplaceAt;
function isLinkClose$1(e2) {
  return /^<\/a\s*>/i.test(e2);
}
var qe = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, He = /\((c|tm|r)\)/i, Ue = /\((c|tm|r)\)/gi, Ve = { c: "©", r: "®", tm: "™" };
function replaceFn(e2, t2) {
  return Ve[t2.toLowerCase()];
}
function replace_scoped(e2) {
  var t2, s2, l2 = 0;
  for (t2 = e2.length - 1; t2 >= 0; t2--)
    "text" !== (s2 = e2[t2]).type || l2 || (s2.content = s2.content.replace(Ue, replaceFn)), "link_open" === s2.type && "auto" === s2.info && l2--, "link_close" === s2.type && "auto" === s2.info && l2++;
}
function replace_rare(e2) {
  var t2, s2, l2 = 0;
  for (t2 = e2.length - 1; t2 >= 0; t2--)
    "text" !== (s2 = e2[t2]).type || l2 || qe.test(s2.content) && (s2.content = s2.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–")), "link_open" === s2.type && "auto" === s2.info && l2--, "link_close" === s2.type && "auto" === s2.info && l2++;
}
var We = se.isWhiteSpace, Ye = se.isPunctChar, Ke = se.isMdAsciiPunct, Qe = /['"]/, Ze = /['"]/g;
function replaceAt(e2, t2, s2) {
  return e2.slice(0, t2) + s2 + e2.slice(t2 + 1);
}
function process_inlines(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2, _2, w2, A2;
  for (_2 = [], s2 = 0; s2 < e2.length; s2++) {
    for (l2 = e2[s2], h2 = e2[s2].level, S2 = _2.length - 1; S2 >= 0 && !(_2[S2].level <= h2); S2--)
      ;
    if (_2.length = S2 + 1, "text" === l2.type) {
      m2 = 0, d2 = (c2 = l2.content).length;
      e:
        for (; m2 < d2 && (Ze.lastIndex = m2, u2 = Ze.exec(c2)); ) {
          if (C2 = T2 = true, m2 = u2.index + 1, I2 = "'" === u2[0], g2 = 32, u2.index - 1 >= 0)
            g2 = c2.charCodeAt(u2.index - 1);
          else
            for (S2 = s2 - 1; S2 >= 0 && ("softbreak" !== e2[S2].type && "hardbreak" !== e2[S2].type); S2--)
              if (e2[S2].content) {
                g2 = e2[S2].content.charCodeAt(e2[S2].content.length - 1);
                break;
              }
          if (y2 = 32, m2 < d2)
            y2 = c2.charCodeAt(m2);
          else
            for (S2 = s2 + 1; S2 < e2.length && ("softbreak" !== e2[S2].type && "hardbreak" !== e2[S2].type); S2++)
              if (e2[S2].content) {
                y2 = e2[S2].content.charCodeAt(0);
                break;
              }
          if (F2 = Ke(g2) || Ye(String.fromCharCode(g2)), D2 = Ke(y2) || Ye(String.fromCharCode(y2)), k2 = We(g2), (v = We(y2)) ? C2 = false : D2 && (k2 || F2 || (C2 = false)), k2 ? T2 = false : F2 && (v || D2 || (T2 = false)), 34 === y2 && '"' === u2[0] && g2 >= 48 && g2 <= 57 && (T2 = C2 = false), C2 && T2 && (C2 = F2, T2 = D2), C2 || T2) {
            if (T2) {
              for (S2 = _2.length - 1; S2 >= 0 && (p2 = _2[S2], !(_2[S2].level < h2)); S2--)
                if (p2.single === I2 && _2[S2].level === h2) {
                  p2 = _2[S2], I2 ? (w2 = t2.md.options.quotes[2], A2 = t2.md.options.quotes[3]) : (w2 = t2.md.options.quotes[0], A2 = t2.md.options.quotes[1]), l2.content = replaceAt(l2.content, u2.index, A2), e2[p2.token].content = replaceAt(e2[p2.token].content, p2.pos, w2), m2 += A2.length - 1, p2.token === s2 && (m2 += w2.length - 1), d2 = (c2 = l2.content).length, _2.length = S2;
                  continue e;
                }
            }
            C2 ? _2.push({ token: s2, pos: u2.index, single: I2, level: h2 }) : T2 && I2 && (l2.content = replaceAt(l2.content, u2.index, "’"));
          } else
            I2 && (l2.content = replaceAt(l2.content, u2.index, "’"));
        }
    }
  }
}
function Token$4(e2, t2, s2) {
  this.type = e2, this.tag = t2, this.attrs = null, this.map = null, this.nesting = s2, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
}
Token$4.prototype.attrIndex = function(e2) {
  var t2, s2, l2;
  if (!this.attrs)
    return -1;
  for (s2 = 0, l2 = (t2 = this.attrs).length; s2 < l2; s2++)
    if (t2[s2][0] === e2)
      return s2;
  return -1;
}, Token$4.prototype.attrPush = function(e2) {
  this.attrs ? this.attrs.push(e2) : this.attrs = [e2];
}, Token$4.prototype.attrSet = function(e2, t2) {
  var s2 = this.attrIndex(e2), l2 = [e2, t2];
  s2 < 0 ? this.attrPush(l2) : this.attrs[s2] = l2;
}, Token$4.prototype.attrGet = function(e2) {
  var t2 = this.attrIndex(e2), s2 = null;
  return t2 >= 0 && (s2 = this.attrs[t2][1]), s2;
}, Token$4.prototype.attrJoin = function(e2, t2) {
  var s2 = this.attrIndex(e2);
  s2 < 0 ? this.attrPush([e2, t2]) : this.attrs[s2][1] = this.attrs[s2][1] + " " + t2;
};
var Je = Token$4, Xe = Je;
function StateCore(e2, t2, s2) {
  this.src = e2, this.env = s2, this.tokens = [], this.inlineMode = false, this.md = t2;
}
StateCore.prototype.Token = Xe;
var et = StateCore, tt = je, st = [["normalize", function(e2) {
  var t2;
  t2 = (t2 = e2.src.replace($e, "\n")).replace(Be, "�"), e2.src = t2;
}], ["block", function(e2) {
  var t2;
  e2.inlineMode ? ((t2 = new e2.Token("inline", "", 0)).content = e2.src, t2.map = [0, 1], t2.children = [], e2.tokens.push(t2)) : e2.md.block.parse(e2.src, e2.md, e2.env, e2.tokens);
}], ["inline", function(e2) {
  var t2, s2, l2, c2 = e2.tokens;
  for (s2 = 0, l2 = c2.length; s2 < l2; s2++)
    "inline" === (t2 = c2[s2]).type && e2.md.inline.parse(t2.content, e2.md, e2.env, t2.children);
}], ["linkify", function(e2) {
  var t2, s2, l2, c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2 = e2.tokens;
  if (e2.md.options.linkify) {
    for (s2 = 0, l2 = I2.length; s2 < l2; s2++)
      if ("inline" === I2[s2].type && e2.md.linkify.pretest(I2[s2].content))
        for (D2 = 0, t2 = (c2 = I2[s2].children).length - 1; t2 >= 0; t2--)
          if ("link_close" !== (m2 = c2[t2]).type) {
            if ("html_inline" === m2.type && (S2 = m2.content, /^<a[>\s]/i.test(S2) && D2 > 0 && D2--, isLinkClose$1(m2.content) && D2++), !(D2 > 0) && "text" === m2.type && e2.md.linkify.test(m2.content)) {
              for (p2 = m2.content, T2 = e2.md.linkify.match(p2), d2 = [], F2 = m2.level, y2 = 0, T2.length > 0 && 0 === T2[0].index && t2 > 0 && "text_special" === c2[t2 - 1].type && (T2 = T2.slice(1)), h2 = 0; h2 < T2.length; h2++)
                k2 = T2[h2].url, v = e2.md.normalizeLink(k2), e2.md.validateLink(v) && (C2 = T2[h2].text, C2 = T2[h2].schema ? "mailto:" !== T2[h2].schema || /^mailto:/i.test(C2) ? e2.md.normalizeLinkText(C2) : e2.md.normalizeLinkText("mailto:" + C2).replace(/^mailto:/, "") : e2.md.normalizeLinkText("http://" + C2).replace(/^http:\/\//, ""), (g2 = T2[h2].index) > y2 && ((u2 = new e2.Token("text", "", 0)).content = p2.slice(y2, g2), u2.level = F2, d2.push(u2)), (u2 = new e2.Token("link_open", "a", 1)).attrs = [["href", v]], u2.level = F2++, u2.markup = "linkify", u2.info = "auto", d2.push(u2), (u2 = new e2.Token("text", "", 0)).content = C2, u2.level = F2, d2.push(u2), (u2 = new e2.Token("link_close", "a", -1)).level = --F2, u2.markup = "linkify", u2.info = "auto", d2.push(u2), y2 = T2[h2].lastIndex);
              y2 < p2.length && ((u2 = new e2.Token("text", "", 0)).content = p2.slice(y2), u2.level = F2, d2.push(u2)), I2[s2].children = c2 = Ge(c2, t2, d2);
            }
          } else
            for (t2--; c2[t2].level !== m2.level && "link_open" !== c2[t2].type; )
              t2--;
  }
}], ["replacements", function(e2) {
  var t2;
  if (e2.md.options.typographer)
    for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
      "inline" === e2.tokens[t2].type && (He.test(e2.tokens[t2].content) && replace_scoped(e2.tokens[t2].children), qe.test(e2.tokens[t2].content) && replace_rare(e2.tokens[t2].children));
}], ["smartquotes", function(e2) {
  var t2;
  if (e2.md.options.typographer)
    for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
      "inline" === e2.tokens[t2].type && Qe.test(e2.tokens[t2].content) && process_inlines(e2.tokens[t2].children, e2);
}], ["text_join", function(e2) {
  var t2, s2, l2, c2, u2, m2, d2 = e2.tokens;
  for (t2 = 0, s2 = d2.length; t2 < s2; t2++)
    if ("inline" === d2[t2].type) {
      for (u2 = (l2 = d2[t2].children).length, c2 = 0; c2 < u2; c2++)
        "text_special" === l2[c2].type && (l2[c2].type = "text");
      for (c2 = m2 = 0; c2 < u2; c2++)
        "text" === l2[c2].type && c2 + 1 < u2 && "text" === l2[c2 + 1].type ? l2[c2 + 1].content = l2[c2].content + l2[c2 + 1].content : (c2 !== m2 && (l2[m2] = l2[c2]), m2++);
      c2 !== m2 && (l2.length = m2);
    }
}]];
function Core() {
  this.ruler = new tt();
  for (var e2 = 0; e2 < st.length; e2++)
    this.ruler.push(st[e2][0], st[e2][1]);
}
Core.prototype.process = function(e2) {
  var t2, s2, l2;
  for (t2 = 0, s2 = (l2 = this.ruler.getRules("")).length; t2 < s2; t2++)
    l2[t2](e2);
}, Core.prototype.State = et;
var at = Core, it = se.isSpace;
function getLine(e2, t2) {
  var s2 = e2.bMarks[t2] + e2.tShift[t2], l2 = e2.eMarks[t2];
  return e2.src.slice(s2, l2);
}
function escapedSplit(e2) {
  var t2, s2 = [], l2 = 0, c2 = e2.length, u2 = false, m2 = 0, d2 = "";
  for (t2 = e2.charCodeAt(l2); l2 < c2; )
    124 === t2 && (u2 ? (d2 += e2.substring(m2, l2 - 1), m2 = l2) : (s2.push(d2 + e2.substring(m2, l2)), d2 = "", m2 = l2 + 1)), u2 = 92 === t2, l2++, t2 = e2.charCodeAt(l2);
  return s2.push(d2 + e2.substring(m2)), s2;
}
var nt = se.isSpace, rt = se.isSpace, ot = se.isSpace;
function skipBulletListMarker(e2, t2) {
  var s2, l2, c2, u2;
  return l2 = e2.bMarks[t2] + e2.tShift[t2], c2 = e2.eMarks[t2], 42 !== (s2 = e2.src.charCodeAt(l2++)) && 45 !== s2 && 43 !== s2 || l2 < c2 && (u2 = e2.src.charCodeAt(l2), !ot(u2)) ? -1 : l2;
}
function skipOrderedListMarker(e2, t2) {
  var s2, l2 = e2.bMarks[t2] + e2.tShift[t2], c2 = l2, u2 = e2.eMarks[t2];
  if (c2 + 1 >= u2)
    return -1;
  if ((s2 = e2.src.charCodeAt(c2++)) < 48 || s2 > 57)
    return -1;
  for (; ; ) {
    if (c2 >= u2)
      return -1;
    if (!((s2 = e2.src.charCodeAt(c2++)) >= 48 && s2 <= 57)) {
      if (41 === s2 || 46 === s2)
        break;
      return -1;
    }
    if (c2 - l2 >= 10)
      return -1;
  }
  return c2 < u2 && (s2 = e2.src.charCodeAt(c2), !ot(s2)) ? -1 : c2;
}
var lt = se.normalizeReference, ct = se.isSpace, ut = {}, mt = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, dt = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", ht = new RegExp("^(?:" + mt + "|" + dt + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), pt = new RegExp("^(?:" + mt + "|" + dt + ")");
ut.HTML_TAG_RE = ht, ut.HTML_OPEN_CLOSE_TAG_RE = pt;
var ft = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], gt = ut.HTML_OPEN_CLOSE_TAG_RE, yt = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + ft.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(gt.source + "\\s*$"), /^$/, false]], bt = se.isSpace, Ft = Je, Dt = se.isSpace;
function StateBlock(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2;
  for (this.src = e2, this.md = t2, this.env = s2, this.tokens = l2, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", y2 = false, m2 = d2 = p2 = g2 = 0, h2 = (u2 = this.src).length; d2 < h2; d2++) {
    if (c2 = u2.charCodeAt(d2), !y2) {
      if (Dt(c2)) {
        p2++, 9 === c2 ? g2 += 4 - g2 % 4 : g2++;
        continue;
      }
      y2 = true;
    }
    10 !== c2 && d2 !== h2 - 1 || (10 !== c2 && d2++, this.bMarks.push(m2), this.eMarks.push(d2), this.tShift.push(p2), this.sCount.push(g2), this.bsCount.push(0), y2 = false, p2 = 0, g2 = 0, m2 = d2 + 1);
  }
  this.bMarks.push(u2.length), this.eMarks.push(u2.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.push = function(e2, t2, s2) {
  var l2 = new Ft(e2, t2, s2);
  return l2.block = true, s2 < 0 && this.level--, l2.level = this.level, s2 > 0 && this.level++, this.tokens.push(l2), l2;
}, StateBlock.prototype.isEmpty = function(e2) {
  return this.bMarks[e2] + this.tShift[e2] >= this.eMarks[e2];
}, StateBlock.prototype.skipEmptyLines = function(e2) {
  for (var t2 = this.lineMax; e2 < t2 && !(this.bMarks[e2] + this.tShift[e2] < this.eMarks[e2]); e2++)
    ;
  return e2;
}, StateBlock.prototype.skipSpaces = function(e2) {
  for (var t2, s2 = this.src.length; e2 < s2 && (t2 = this.src.charCodeAt(e2), Dt(t2)); e2++)
    ;
  return e2;
}, StateBlock.prototype.skipSpacesBack = function(e2, t2) {
  if (e2 <= t2)
    return e2;
  for (; e2 > t2; )
    if (!Dt(this.src.charCodeAt(--e2)))
      return e2 + 1;
  return e2;
}, StateBlock.prototype.skipChars = function(e2, t2) {
  for (var s2 = this.src.length; e2 < s2 && this.src.charCodeAt(e2) === t2; e2++)
    ;
  return e2;
}, StateBlock.prototype.skipCharsBack = function(e2, t2, s2) {
  if (e2 <= s2)
    return e2;
  for (; e2 > s2; )
    if (t2 !== this.src.charCodeAt(--e2))
      return e2 + 1;
  return e2;
}, StateBlock.prototype.getLines = function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2 = e2;
  if (e2 >= t2)
    return "";
  for (p2 = new Array(t2 - e2), c2 = 0; y2 < t2; y2++, c2++) {
    for (u2 = 0, g2 = d2 = this.bMarks[y2], h2 = y2 + 1 < t2 || l2 ? this.eMarks[y2] + 1 : this.eMarks[y2]; d2 < h2 && u2 < s2; ) {
      if (m2 = this.src.charCodeAt(d2), Dt(m2))
        9 === m2 ? u2 += 4 - (u2 + this.bsCount[y2]) % 4 : u2++;
      else {
        if (!(d2 - g2 < this.tShift[y2]))
          break;
        u2++;
      }
      d2++;
    }
    p2[c2] = u2 > s2 ? new Array(u2 - s2 + 1).join(" ") + this.src.slice(d2, h2) : this.src.slice(d2, h2);
  }
  return p2.join("");
}, StateBlock.prototype.Token = Ft;
var kt = StateBlock, vt = je, Ct = [["table", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2, _2, w2;
  if (t2 + 2 > s2)
    return false;
  if (p2 = t2 + 1, e2.sCount[p2] < e2.blkIndent)
    return false;
  if (e2.sCount[p2] - e2.blkIndent >= 4)
    return false;
  if ((m2 = e2.bMarks[p2] + e2.tShift[p2]) >= e2.eMarks[p2])
    return false;
  if (124 !== (_2 = e2.src.charCodeAt(m2++)) && 45 !== _2 && 58 !== _2)
    return false;
  if (m2 >= e2.eMarks[p2])
    return false;
  if (124 !== (w2 = e2.src.charCodeAt(m2++)) && 45 !== w2 && 58 !== w2 && !it(w2))
    return false;
  if (45 === _2 && it(w2))
    return false;
  for (; m2 < e2.eMarks[p2]; ) {
    if (124 !== (c2 = e2.src.charCodeAt(m2)) && 45 !== c2 && 58 !== c2 && !it(c2))
      return false;
    m2++;
  }
  for (g2 = (u2 = getLine(e2, t2 + 1)).split("|"), D2 = [], d2 = 0; d2 < g2.length; d2++) {
    if (!(k2 = g2[d2].trim())) {
      if (0 === d2 || d2 === g2.length - 1)
        continue;
      return false;
    }
    if (!/^:?-+:?$/.test(k2))
      return false;
    58 === k2.charCodeAt(k2.length - 1) ? D2.push(58 === k2.charCodeAt(0) ? "center" : "right") : 58 === k2.charCodeAt(0) ? D2.push("left") : D2.push("");
  }
  if (-1 === (u2 = getLine(e2, t2).trim()).indexOf("|"))
    return false;
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if ((g2 = escapedSplit(u2)).length && "" === g2[0] && g2.shift(), g2.length && "" === g2[g2.length - 1] && g2.pop(), 0 === (y2 = g2.length) || y2 !== D2.length)
    return false;
  if (l2)
    return true;
  for (T2 = e2.parentType, e2.parentType = "table", I2 = e2.md.block.ruler.getRules("blockquote"), (F2 = e2.push("table_open", "table", 1)).map = v = [t2, 0], (F2 = e2.push("thead_open", "thead", 1)).map = [t2, t2 + 1], (F2 = e2.push("tr_open", "tr", 1)).map = [t2, t2 + 1], d2 = 0; d2 < g2.length; d2++)
    F2 = e2.push("th_open", "th", 1), D2[d2] && (F2.attrs = [["style", "text-align:" + D2[d2]]]), (F2 = e2.push("inline", "", 0)).content = g2[d2].trim(), F2.children = [], F2 = e2.push("th_close", "th", -1);
  for (F2 = e2.push("tr_close", "tr", -1), F2 = e2.push("thead_close", "thead", -1), p2 = t2 + 2; p2 < s2 && !(e2.sCount[p2] < e2.blkIndent); p2++) {
    for (S2 = false, d2 = 0, h2 = I2.length; d2 < h2; d2++)
      if (I2[d2](e2, p2, s2, true)) {
        S2 = true;
        break;
      }
    if (S2)
      break;
    if (!(u2 = getLine(e2, p2).trim()))
      break;
    if (e2.sCount[p2] - e2.blkIndent >= 4)
      break;
    for ((g2 = escapedSplit(u2)).length && "" === g2[0] && g2.shift(), g2.length && "" === g2[g2.length - 1] && g2.pop(), p2 === t2 + 2 && ((F2 = e2.push("tbody_open", "tbody", 1)).map = C2 = [t2 + 2, 0]), (F2 = e2.push("tr_open", "tr", 1)).map = [p2, p2 + 1], d2 = 0; d2 < y2; d2++)
      F2 = e2.push("td_open", "td", 1), D2[d2] && (F2.attrs = [["style", "text-align:" + D2[d2]]]), (F2 = e2.push("inline", "", 0)).content = g2[d2] ? g2[d2].trim() : "", F2.children = [], F2 = e2.push("td_close", "td", -1);
    F2 = e2.push("tr_close", "tr", -1);
  }
  return C2 && (F2 = e2.push("tbody_close", "tbody", -1), C2[1] = p2), F2 = e2.push("table_close", "table", -1), v[1] = p2, e2.parentType = T2, e2.line = p2, true;
}, ["paragraph", "reference"]], ["code", function(e2, t2, s2) {
  var l2, c2, u2;
  if (e2.sCount[t2] - e2.blkIndent < 4)
    return false;
  for (c2 = l2 = t2 + 1; l2 < s2; )
    if (e2.isEmpty(l2))
      l2++;
    else {
      if (!(e2.sCount[l2] - e2.blkIndent >= 4))
        break;
      c2 = ++l2;
    }
  return e2.line = c2, (u2 = e2.push("code_block", "code", 0)).content = e2.getLines(t2, c2, 4 + e2.blkIndent, false) + "\n", u2.map = [t2, e2.line], true;
}], ["fence", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2 = false, F2 = e2.bMarks[t2] + e2.tShift[t2], D2 = e2.eMarks[t2];
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (F2 + 3 > D2)
    return false;
  if (126 !== (c2 = e2.src.charCodeAt(F2)) && 96 !== c2)
    return false;
  if (h2 = F2, (u2 = (F2 = e2.skipChars(F2, c2)) - h2) < 3)
    return false;
  if (g2 = e2.src.slice(h2, F2), m2 = e2.src.slice(F2, D2), 96 === c2 && m2.indexOf(String.fromCharCode(c2)) >= 0)
    return false;
  if (l2)
    return true;
  for (d2 = t2; !(++d2 >= s2) && !((F2 = h2 = e2.bMarks[d2] + e2.tShift[d2]) < (D2 = e2.eMarks[d2]) && e2.sCount[d2] < e2.blkIndent); )
    if (e2.src.charCodeAt(F2) === c2 && !(e2.sCount[d2] - e2.blkIndent >= 4 || (F2 = e2.skipChars(F2, c2)) - h2 < u2 || (F2 = e2.skipSpaces(F2)) < D2)) {
      y2 = true;
      break;
    }
  return u2 = e2.sCount[t2], e2.line = d2 + (y2 ? 1 : 0), (p2 = e2.push("fence", "code", 0)).info = m2, p2.content = e2.getLines(t2 + 1, d2, u2, true), p2.markup = g2, p2.map = [t2, e2.line], true;
}, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2, _2, w2, A2, N2, O2 = e2.lineMax, x2 = e2.bMarks[t2] + e2.tShift[t2], P2 = e2.eMarks[t2];
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (62 !== e2.src.charCodeAt(x2++))
    return false;
  if (l2)
    return true;
  for (d2 = F2 = e2.sCount[t2] + 1, 32 === e2.src.charCodeAt(x2) ? (x2++, d2++, F2++, c2 = false, I2 = true) : 9 === e2.src.charCodeAt(x2) ? (I2 = true, (e2.bsCount[t2] + F2) % 4 == 3 ? (x2++, d2++, F2++, c2 = false) : c2 = true) : I2 = false, D2 = [e2.bMarks[t2]], e2.bMarks[t2] = x2; x2 < P2 && (u2 = e2.src.charCodeAt(x2), nt(u2)); )
    9 === u2 ? F2 += 4 - (F2 + e2.bsCount[t2] + (c2 ? 1 : 0)) % 4 : F2++, x2++;
  for (k2 = [e2.bsCount[t2]], e2.bsCount[t2] = e2.sCount[t2] + 1 + (I2 ? 1 : 0), p2 = x2 >= P2, T2 = [e2.sCount[t2]], e2.sCount[t2] = F2 - d2, S2 = [e2.tShift[t2]], e2.tShift[t2] = x2 - e2.bMarks[t2], w2 = e2.md.block.ruler.getRules("blockquote"), C2 = e2.parentType, e2.parentType = "blockquote", y2 = t2 + 1; y2 < s2 && (N2 = e2.sCount[y2] < e2.blkIndent, !((x2 = e2.bMarks[y2] + e2.tShift[y2]) >= (P2 = e2.eMarks[y2]))); y2++)
    if (62 !== e2.src.charCodeAt(x2++) || N2) {
      if (p2)
        break;
      for (_2 = false, m2 = 0, h2 = w2.length; m2 < h2; m2++)
        if (w2[m2](e2, y2, s2, true)) {
          _2 = true;
          break;
        }
      if (_2) {
        e2.lineMax = y2, 0 !== e2.blkIndent && (D2.push(e2.bMarks[y2]), k2.push(e2.bsCount[y2]), S2.push(e2.tShift[y2]), T2.push(e2.sCount[y2]), e2.sCount[y2] -= e2.blkIndent);
        break;
      }
      D2.push(e2.bMarks[y2]), k2.push(e2.bsCount[y2]), S2.push(e2.tShift[y2]), T2.push(e2.sCount[y2]), e2.sCount[y2] = -1;
    } else {
      for (d2 = F2 = e2.sCount[y2] + 1, 32 === e2.src.charCodeAt(x2) ? (x2++, d2++, F2++, c2 = false, I2 = true) : 9 === e2.src.charCodeAt(x2) ? (I2 = true, (e2.bsCount[y2] + F2) % 4 == 3 ? (x2++, d2++, F2++, c2 = false) : c2 = true) : I2 = false, D2.push(e2.bMarks[y2]), e2.bMarks[y2] = x2; x2 < P2 && (u2 = e2.src.charCodeAt(x2), nt(u2)); )
        9 === u2 ? F2 += 4 - (F2 + e2.bsCount[y2] + (c2 ? 1 : 0)) % 4 : F2++, x2++;
      p2 = x2 >= P2, k2.push(e2.bsCount[y2]), e2.bsCount[y2] = e2.sCount[y2] + 1 + (I2 ? 1 : 0), T2.push(e2.sCount[y2]), e2.sCount[y2] = F2 - d2, S2.push(e2.tShift[y2]), e2.tShift[y2] = x2 - e2.bMarks[y2];
    }
  for (v = e2.blkIndent, e2.blkIndent = 0, (A2 = e2.push("blockquote_open", "blockquote", 1)).markup = ">", A2.map = g2 = [t2, 0], e2.md.block.tokenize(e2, t2, y2), (A2 = e2.push("blockquote_close", "blockquote", -1)).markup = ">", e2.lineMax = O2, e2.parentType = C2, g2[1] = e2.line, m2 = 0; m2 < S2.length; m2++)
    e2.bMarks[m2 + t2] = D2[m2], e2.tShift[m2 + t2] = S2[m2], e2.sCount[m2 + t2] = T2[m2], e2.bsCount[m2 + t2] = k2[m2];
  return e2.blkIndent = v, true;
}, ["paragraph", "reference", "blockquote", "list"]], ["hr", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2 = e2.bMarks[t2] + e2.tShift[t2], p2 = e2.eMarks[t2];
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (42 !== (c2 = e2.src.charCodeAt(h2++)) && 45 !== c2 && 95 !== c2)
    return false;
  for (u2 = 1; h2 < p2; ) {
    if ((m2 = e2.src.charCodeAt(h2++)) !== c2 && !rt(m2))
      return false;
    m2 === c2 && u2++;
  }
  return !(u2 < 3) && (l2 || (e2.line = t2 + 1, (d2 = e2.push("hr", "hr", 0)).map = [t2, e2.line], d2.markup = Array(u2 + 1).join(String.fromCharCode(c2))), true);
}, ["paragraph", "reference", "blockquote", "list"]], ["list", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2, _2, w2, A2, N2, O2, x2, P2, E2, M2, R2, L2, z2, j2 = false, $2 = true;
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (e2.listIndent >= 0 && e2.sCount[t2] - e2.listIndent >= 4 && e2.sCount[t2] < e2.blkIndent)
    return false;
  if (l2 && "paragraph" === e2.parentType && e2.sCount[t2] >= e2.blkIndent && (j2 = true), (P2 = skipOrderedListMarker(e2, t2)) >= 0) {
    if (g2 = true, M2 = e2.bMarks[t2] + e2.tShift[t2], C2 = Number(e2.src.slice(M2, P2 - 1)), j2 && 1 !== C2)
      return false;
  } else {
    if (!((P2 = skipBulletListMarker(e2, t2)) >= 0))
      return false;
    g2 = false;
  }
  if (j2 && e2.skipSpaces(P2) >= e2.eMarks[t2])
    return false;
  if (v = e2.src.charCodeAt(P2 - 1), l2)
    return true;
  for (k2 = e2.tokens.length, g2 ? (z2 = e2.push("ordered_list_open", "ol", 1), 1 !== C2 && (z2.attrs = [["start", C2]])) : z2 = e2.push("bullet_list_open", "ul", 1), z2.map = D2 = [t2, 0], z2.markup = String.fromCharCode(v), S2 = t2, E2 = false, L2 = e2.md.block.ruler.getRules("list"), w2 = e2.parentType, e2.parentType = "list"; S2 < s2; ) {
    for (x2 = P2, T2 = e2.eMarks[S2], p2 = I2 = e2.sCount[S2] + P2 - (e2.bMarks[t2] + e2.tShift[t2]); x2 < T2; ) {
      if (9 === (c2 = e2.src.charCodeAt(x2)))
        I2 += 4 - (I2 + e2.bsCount[S2]) % 4;
      else {
        if (32 !== c2)
          break;
        I2++;
      }
      x2++;
    }
    if ((h2 = (u2 = x2) >= T2 ? 1 : I2 - p2) > 4 && (h2 = 1), d2 = p2 + h2, (z2 = e2.push("list_item_open", "li", 1)).markup = String.fromCharCode(v), z2.map = y2 = [t2, 0], g2 && (z2.info = e2.src.slice(M2, P2 - 1)), O2 = e2.tight, N2 = e2.tShift[t2], A2 = e2.sCount[t2], _2 = e2.listIndent, e2.listIndent = e2.blkIndent, e2.blkIndent = d2, e2.tight = true, e2.tShift[t2] = u2 - e2.bMarks[t2], e2.sCount[t2] = I2, u2 >= T2 && e2.isEmpty(t2 + 1) ? e2.line = Math.min(e2.line + 2, s2) : e2.md.block.tokenize(e2, t2, s2, true), e2.tight && !E2 || ($2 = false), E2 = e2.line - t2 > 1 && e2.isEmpty(e2.line - 1), e2.blkIndent = e2.listIndent, e2.listIndent = _2, e2.tShift[t2] = N2, e2.sCount[t2] = A2, e2.tight = O2, (z2 = e2.push("list_item_close", "li", -1)).markup = String.fromCharCode(v), S2 = t2 = e2.line, y2[1] = S2, u2 = e2.bMarks[t2], S2 >= s2)
      break;
    if (e2.sCount[S2] < e2.blkIndent)
      break;
    if (e2.sCount[t2] - e2.blkIndent >= 4)
      break;
    for (R2 = false, m2 = 0, F2 = L2.length; m2 < F2; m2++)
      if (L2[m2](e2, S2, s2, true)) {
        R2 = true;
        break;
      }
    if (R2)
      break;
    if (g2) {
      if ((P2 = skipOrderedListMarker(e2, S2)) < 0)
        break;
      M2 = e2.bMarks[S2] + e2.tShift[S2];
    } else if ((P2 = skipBulletListMarker(e2, S2)) < 0)
      break;
    if (v !== e2.src.charCodeAt(P2 - 1))
      break;
  }
  return (z2 = g2 ? e2.push("ordered_list_close", "ol", -1) : e2.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(v), D2[1] = S2, e2.line = S2, e2.parentType = w2, $2 && function(e3, t3) {
    var s3, l3, c3 = e3.level + 2;
    for (s3 = t3 + 2, l3 = e3.tokens.length - 2; s3 < l3; s3++)
      e3.tokens[s3].level === c3 && "paragraph_open" === e3.tokens[s3].type && (e3.tokens[s3 + 2].hidden = true, e3.tokens[s3].hidden = true, s3 += 2);
  }(e2, k2), true;
}, ["paragraph", "reference", "blockquote"]], ["reference", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v, C2, T2, S2, I2, _2 = 0, w2 = e2.bMarks[t2] + e2.tShift[t2], A2 = e2.eMarks[t2], N2 = t2 + 1;
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (91 !== e2.src.charCodeAt(w2))
    return false;
  for (; ++w2 < A2; )
    if (93 === e2.src.charCodeAt(w2) && 92 !== e2.src.charCodeAt(w2 - 1)) {
      if (w2 + 1 === A2)
        return false;
      if (58 !== e2.src.charCodeAt(w2 + 1))
        return false;
      break;
    }
  for (d2 = e2.lineMax, S2 = e2.md.block.ruler.getRules("reference"), D2 = e2.parentType, e2.parentType = "reference"; N2 < d2 && !e2.isEmpty(N2); N2++)
    if (!(e2.sCount[N2] - e2.blkIndent > 3 || e2.sCount[N2] < 0)) {
      for (T2 = false, p2 = 0, g2 = S2.length; p2 < g2; p2++)
        if (S2[p2](e2, N2, d2, true)) {
          T2 = true;
          break;
        }
      if (T2)
        break;
    }
  for (A2 = (C2 = e2.getLines(t2, N2, e2.blkIndent, false).trim()).length, w2 = 1; w2 < A2; w2++) {
    if (91 === (c2 = C2.charCodeAt(w2)))
      return false;
    if (93 === c2) {
      F2 = w2;
      break;
    }
    (10 === c2 || 92 === c2 && ++w2 < A2 && 10 === C2.charCodeAt(w2)) && _2++;
  }
  if (F2 < 0 || 58 !== C2.charCodeAt(F2 + 1))
    return false;
  for (w2 = F2 + 2; w2 < A2; w2++)
    if (10 === (c2 = C2.charCodeAt(w2)))
      _2++;
    else if (!ct(c2))
      break;
  if (!(k2 = e2.md.helpers.parseLinkDestination(C2, w2, A2)).ok)
    return false;
  if (h2 = e2.md.normalizeLink(k2.str), !e2.md.validateLink(h2))
    return false;
  for (u2 = w2 = k2.pos, m2 = _2 += k2.lines, v = w2; w2 < A2; w2++)
    if (10 === (c2 = C2.charCodeAt(w2)))
      _2++;
    else if (!ct(c2))
      break;
  for (k2 = e2.md.helpers.parseLinkTitle(C2, w2, A2), w2 < A2 && v !== w2 && k2.ok ? (I2 = k2.str, w2 = k2.pos, _2 += k2.lines) : (I2 = "", w2 = u2, _2 = m2); w2 < A2 && (c2 = C2.charCodeAt(w2), ct(c2)); )
    w2++;
  if (w2 < A2 && 10 !== C2.charCodeAt(w2) && I2)
    for (I2 = "", w2 = u2, _2 = m2; w2 < A2 && (c2 = C2.charCodeAt(w2), ct(c2)); )
      w2++;
  return !(w2 < A2 && 10 !== C2.charCodeAt(w2)) && (!!(y2 = lt(C2.slice(1, F2))) && (l2 || (void 0 === e2.env.references && (e2.env.references = {}), void 0 === e2.env.references[y2] && (e2.env.references[y2] = { title: I2, href: h2 }), e2.parentType = D2, e2.line = t2 + _2 + 1), true));
}], ["html_block", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2 = e2.bMarks[t2] + e2.tShift[t2], p2 = e2.eMarks[t2];
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (!e2.md.options.html)
    return false;
  if (60 !== e2.src.charCodeAt(h2))
    return false;
  for (d2 = e2.src.slice(h2, p2), c2 = 0; c2 < yt.length && !yt[c2][0].test(d2); c2++)
    ;
  if (c2 === yt.length)
    return false;
  if (l2)
    return yt[c2][2];
  if (u2 = t2 + 1, !yt[c2][1].test(d2)) {
    for (; u2 < s2 && !(e2.sCount[u2] < e2.blkIndent); u2++)
      if (h2 = e2.bMarks[u2] + e2.tShift[u2], p2 = e2.eMarks[u2], d2 = e2.src.slice(h2, p2), yt[c2][1].test(d2)) {
        0 !== d2.length && u2++;
        break;
      }
  }
  return e2.line = u2, (m2 = e2.push("html_block", "", 0)).map = [t2, u2], m2.content = e2.getLines(t2, u2, e2.blkIndent, true), true;
}, ["paragraph", "reference", "blockquote"]], ["heading", function(e2, t2, s2, l2) {
  var c2, u2, m2, d2, h2 = e2.bMarks[t2] + e2.tShift[t2], p2 = e2.eMarks[t2];
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  if (35 !== (c2 = e2.src.charCodeAt(h2)) || h2 >= p2)
    return false;
  for (u2 = 1, c2 = e2.src.charCodeAt(++h2); 35 === c2 && h2 < p2 && u2 <= 6; )
    u2++, c2 = e2.src.charCodeAt(++h2);
  return !(u2 > 6 || h2 < p2 && !bt(c2)) && (l2 || (p2 = e2.skipSpacesBack(p2, h2), (m2 = e2.skipCharsBack(p2, 35, h2)) > h2 && bt(e2.src.charCodeAt(m2 - 1)) && (p2 = m2), e2.line = t2 + 1, (d2 = e2.push("heading_open", "h" + String(u2), 1)).markup = "########".slice(0, u2), d2.map = [t2, e2.line], (d2 = e2.push("inline", "", 0)).content = e2.src.slice(h2, p2).trim(), d2.map = [t2, e2.line], d2.children = [], (d2 = e2.push("heading_close", "h" + String(u2), -1)).markup = "########".slice(0, u2)), true);
}, ["paragraph", "reference", "blockquote"]], ["lheading", function(e2, t2, s2) {
  var l2, c2, u2, m2, d2, h2, p2, g2, y2, F2, D2 = t2 + 1, k2 = e2.md.block.ruler.getRules("paragraph");
  if (e2.sCount[t2] - e2.blkIndent >= 4)
    return false;
  for (F2 = e2.parentType, e2.parentType = "paragraph"; D2 < s2 && !e2.isEmpty(D2); D2++)
    if (!(e2.sCount[D2] - e2.blkIndent > 3)) {
      if (e2.sCount[D2] >= e2.blkIndent && (h2 = e2.bMarks[D2] + e2.tShift[D2]) < (p2 = e2.eMarks[D2]) && (45 === (y2 = e2.src.charCodeAt(h2)) || 61 === y2) && (h2 = e2.skipChars(h2, y2), (h2 = e2.skipSpaces(h2)) >= p2)) {
        g2 = 61 === y2 ? 1 : 2;
        break;
      }
      if (!(e2.sCount[D2] < 0)) {
        for (c2 = false, u2 = 0, m2 = k2.length; u2 < m2; u2++)
          if (k2[u2](e2, D2, s2, true)) {
            c2 = true;
            break;
          }
        if (c2)
          break;
      }
    }
  return !!g2 && (l2 = e2.getLines(t2, D2, e2.blkIndent, false).trim(), e2.line = D2 + 1, (d2 = e2.push("heading_open", "h" + String(g2), 1)).markup = String.fromCharCode(y2), d2.map = [t2, e2.line], (d2 = e2.push("inline", "", 0)).content = l2, d2.map = [t2, e2.line - 1], d2.children = [], (d2 = e2.push("heading_close", "h" + String(g2), -1)).markup = String.fromCharCode(y2), e2.parentType = F2, true);
}], ["paragraph", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2 = t2 + 1, p2 = e2.md.block.ruler.getRules("paragraph"), g2 = e2.lineMax;
  for (d2 = e2.parentType, e2.parentType = "paragraph"; h2 < g2 && !e2.isEmpty(h2); h2++)
    if (!(e2.sCount[h2] - e2.blkIndent > 3 || e2.sCount[h2] < 0)) {
      for (l2 = false, c2 = 0, u2 = p2.length; c2 < u2; c2++)
        if (p2[c2](e2, h2, g2, true)) {
          l2 = true;
          break;
        }
      if (l2)
        break;
    }
  return s2 = e2.getLines(t2, h2, e2.blkIndent, false).trim(), e2.line = h2, (m2 = e2.push("paragraph_open", "p", 1)).map = [t2, e2.line], (m2 = e2.push("inline", "", 0)).content = s2, m2.map = [t2, e2.line], m2.children = [], m2 = e2.push("paragraph_close", "p", -1), e2.parentType = d2, true;
}]];
function ParserBlock$1() {
  this.ruler = new vt();
  for (var e2 = 0; e2 < Ct.length; e2++)
    this.ruler.push(Ct[e2][0], Ct[e2][1], { alt: (Ct[e2][2] || []).slice() });
}
ParserBlock$1.prototype.tokenize = function(e2, t2, s2) {
  for (var l2, c2 = this.ruler.getRules(""), u2 = c2.length, m2 = t2, d2 = false, h2 = e2.md.options.maxNesting; m2 < s2 && (e2.line = m2 = e2.skipEmptyLines(m2), !(m2 >= s2)) && !(e2.sCount[m2] < e2.blkIndent); ) {
    if (e2.level >= h2) {
      e2.line = s2;
      break;
    }
    for (l2 = 0; l2 < u2 && !c2[l2](e2, m2, s2, false); l2++)
      ;
    e2.tight = !d2, e2.isEmpty(e2.line - 1) && (d2 = true), (m2 = e2.line) < s2 && e2.isEmpty(m2) && (d2 = true, m2++, e2.line = m2);
  }
}, ParserBlock$1.prototype.parse = function(e2, t2, s2, l2) {
  var c2;
  e2 && (c2 = new this.State(e2, t2, s2, l2), this.tokenize(c2, c2.line, c2.lineMax));
}, ParserBlock$1.prototype.State = kt;
var Tt = ParserBlock$1;
function isTerminatorChar(e2) {
  switch (e2) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
for (var St = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, It = se.isSpace, _t = se.isSpace, wt = [], At = 0; At < 256; At++)
  wt.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e2) {
  wt[e2.charCodeAt(0)] = 1;
});
var Nt = {};
function postProcess$1(e2, t2) {
  var s2, l2, c2, u2, m2, d2 = [], h2 = t2.length;
  for (s2 = 0; s2 < h2; s2++)
    126 === (c2 = t2[s2]).marker && -1 !== c2.end && (u2 = t2[c2.end], (m2 = e2.tokens[c2.token]).type = "s_open", m2.tag = "s", m2.nesting = 1, m2.markup = "~~", m2.content = "", (m2 = e2.tokens[u2.token]).type = "s_close", m2.tag = "s", m2.nesting = -1, m2.markup = "~~", m2.content = "", "text" === e2.tokens[u2.token - 1].type && "~" === e2.tokens[u2.token - 1].content && d2.push(u2.token - 1));
  for (; d2.length; ) {
    for (l2 = (s2 = d2.pop()) + 1; l2 < e2.tokens.length && "s_close" === e2.tokens[l2].type; )
      l2++;
    s2 !== --l2 && (m2 = e2.tokens[l2], e2.tokens[l2] = e2.tokens[s2], e2.tokens[s2] = m2);
  }
}
Nt.tokenize = function(e2, t2) {
  var s2, l2, c2, u2, m2 = e2.pos, d2 = e2.src.charCodeAt(m2);
  if (t2)
    return false;
  if (126 !== d2)
    return false;
  if (c2 = (l2 = e2.scanDelims(e2.pos, true)).length, u2 = String.fromCharCode(d2), c2 < 2)
    return false;
  for (c2 % 2 && (e2.push("text", "", 0).content = u2, c2--), s2 = 0; s2 < c2; s2 += 2)
    e2.push("text", "", 0).content = u2 + u2, e2.delimiters.push({ marker: d2, length: 0, token: e2.tokens.length - 1, end: -1, open: l2.can_open, close: l2.can_close });
  return e2.pos += l2.length, true;
}, Nt.postProcess = function(e2) {
  var t2, s2 = e2.tokens_meta, l2 = e2.tokens_meta.length;
  for (postProcess$1(e2, e2.delimiters), t2 = 0; t2 < l2; t2++)
    s2[t2] && s2[t2].delimiters && postProcess$1(e2, s2[t2].delimiters);
};
var Ot = {};
function postProcess(e2, t2) {
  var s2, l2, c2, u2, m2, d2;
  for (s2 = t2.length - 1; s2 >= 0; s2--)
    95 !== (l2 = t2[s2]).marker && 42 !== l2.marker || -1 !== l2.end && (c2 = t2[l2.end], d2 = s2 > 0 && t2[s2 - 1].end === l2.end + 1 && t2[s2 - 1].marker === l2.marker && t2[s2 - 1].token === l2.token - 1 && t2[l2.end + 1].token === c2.token + 1, m2 = String.fromCharCode(l2.marker), (u2 = e2.tokens[l2.token]).type = d2 ? "strong_open" : "em_open", u2.tag = d2 ? "strong" : "em", u2.nesting = 1, u2.markup = d2 ? m2 + m2 : m2, u2.content = "", (u2 = e2.tokens[c2.token]).type = d2 ? "strong_close" : "em_close", u2.tag = d2 ? "strong" : "em", u2.nesting = -1, u2.markup = d2 ? m2 + m2 : m2, u2.content = "", d2 && (e2.tokens[t2[s2 - 1].token].content = "", e2.tokens[t2[l2.end + 1].token].content = "", s2--));
}
Ot.tokenize = function(e2, t2) {
  var s2, l2, c2 = e2.pos, u2 = e2.src.charCodeAt(c2);
  if (t2)
    return false;
  if (95 !== u2 && 42 !== u2)
    return false;
  for (l2 = e2.scanDelims(e2.pos, 42 === u2), s2 = 0; s2 < l2.length; s2++)
    e2.push("text", "", 0).content = String.fromCharCode(u2), e2.delimiters.push({ marker: u2, length: l2.length, token: e2.tokens.length - 1, end: -1, open: l2.can_open, close: l2.can_close });
  return e2.pos += l2.length, true;
}, Ot.postProcess = function(e2) {
  var t2, s2 = e2.tokens_meta, l2 = e2.tokens_meta.length;
  for (postProcess(e2, e2.delimiters), t2 = 0; t2 < l2; t2++)
    s2[t2] && s2[t2].delimiters && postProcess(e2, s2[t2].delimiters);
};
var xt = se.normalizeReference, Pt = se.isSpace, Et = se.normalizeReference, Mt = se.isSpace, Rt = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Lt = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, zt = ut.HTML_TAG_RE;
var jt = ae.exports, $t = se.has, Bt = se.isValidEntityCode, Gt = se.fromCodePoint, qt = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Ht = /^&([a-z][a-z0-9]{1,31});/i;
function processDelimiters(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2 = {}, y2 = t2.length;
  if (y2) {
    var F2 = 0, D2 = -2, k2 = [];
    for (s2 = 0; s2 < y2; s2++)
      if (c2 = t2[s2], k2.push(0), t2[F2].marker === c2.marker && D2 === c2.token - 1 || (F2 = s2), D2 = c2.token, c2.length = c2.length || 0, c2.close) {
        for (g2.hasOwnProperty(c2.marker) || (g2[c2.marker] = [-1, -1, -1, -1, -1, -1]), m2 = g2[c2.marker][(c2.open ? 3 : 0) + c2.length % 3], d2 = l2 = F2 - k2[F2] - 1; l2 > m2; l2 -= k2[l2] + 1)
          if ((u2 = t2[l2]).marker === c2.marker && u2.open && u2.end < 0 && (h2 = false, (u2.close || c2.open) && (u2.length + c2.length) % 3 == 0 && (u2.length % 3 == 0 && c2.length % 3 == 0 || (h2 = true)), !h2)) {
            p2 = l2 > 0 && !t2[l2 - 1].open ? k2[l2 - 1] + 1 : 0, k2[s2] = s2 - l2 + p2, k2[l2] = p2, c2.open = false, u2.end = s2, u2.close = false, d2 = -1, D2 = -2;
            break;
          }
        -1 !== d2 && (g2[c2.marker][(c2.open ? 3 : 0) + (c2.length || 0) % 3] = d2);
      }
  }
}
var Ut = Je, Vt = se.isWhiteSpace, Wt = se.isPunctChar, Yt = se.isMdAsciiPunct;
function StateInline(e2, t2, s2, l2) {
  this.src = e2, this.env = s2, this.md = t2, this.tokens = l2, this.tokens_meta = Array(l2.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
}
StateInline.prototype.pushPending = function() {
  var e2 = new Ut("text", "", 0);
  return e2.content = this.pending, e2.level = this.pendingLevel, this.tokens.push(e2), this.pending = "", e2;
}, StateInline.prototype.push = function(e2, t2, s2) {
  this.pending && this.pushPending();
  var l2 = new Ut(e2, t2, s2), c2 = null;
  return s2 < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), l2.level = this.level, s2 > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], c2 = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(l2), this.tokens_meta.push(c2), l2;
}, StateInline.prototype.scanDelims = function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2, y2 = e2, F2 = true, D2 = true, k2 = this.posMax, v = this.src.charCodeAt(e2);
  for (s2 = e2 > 0 ? this.src.charCodeAt(e2 - 1) : 32; y2 < k2 && this.src.charCodeAt(y2) === v; )
    y2++;
  return c2 = y2 - e2, l2 = y2 < k2 ? this.src.charCodeAt(y2) : 32, h2 = Yt(s2) || Wt(String.fromCharCode(s2)), g2 = Yt(l2) || Wt(String.fromCharCode(l2)), d2 = Vt(s2), (p2 = Vt(l2)) ? F2 = false : g2 && (d2 || h2 || (F2 = false)), d2 ? D2 = false : h2 && (p2 || g2 || (D2 = false)), t2 ? (u2 = F2, m2 = D2) : (u2 = F2 && (!D2 || h2), m2 = D2 && (!F2 || g2)), { can_open: u2, can_close: m2, length: c2 };
}, StateInline.prototype.Token = Ut;
var Kt = StateInline, Qt = je, Zt = [["text", function(e2, t2) {
  for (var s2 = e2.pos; s2 < e2.posMax && !isTerminatorChar(e2.src.charCodeAt(s2)); )
    s2++;
  return s2 !== e2.pos && (t2 || (e2.pending += e2.src.slice(e2.pos, s2)), e2.pos = s2, true);
}], ["linkify", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2;
  return !!e2.md.options.linkify && (!(e2.linkLevel > 0) && (!((s2 = e2.pos) + 3 > e2.posMax) && (58 === e2.src.charCodeAt(s2) && (47 === e2.src.charCodeAt(s2 + 1) && (47 === e2.src.charCodeAt(s2 + 2) && (!!(l2 = e2.pending.match(St)) && (c2 = l2[1], !!(u2 = e2.md.linkify.matchAtStart(e2.src.slice(s2 - c2.length))) && (m2 = (m2 = u2.url).replace(/\*+$/, ""), d2 = e2.md.normalizeLink(m2), !!e2.md.validateLink(d2) && (t2 || (e2.pending = e2.pending.slice(0, -c2.length), (h2 = e2.push("link_open", "a", 1)).attrs = [["href", d2]], h2.markup = "linkify", h2.info = "auto", (h2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(m2), (h2 = e2.push("link_close", "a", -1)).markup = "linkify", h2.info = "auto"), e2.pos += m2.length - c2.length, true)))))))));
}], ["newline", function(e2, t2) {
  var s2, l2, c2, u2 = e2.pos;
  if (10 !== e2.src.charCodeAt(u2))
    return false;
  if (s2 = e2.pending.length - 1, l2 = e2.posMax, !t2)
    if (s2 >= 0 && 32 === e2.pending.charCodeAt(s2))
      if (s2 >= 1 && 32 === e2.pending.charCodeAt(s2 - 1)) {
        for (c2 = s2 - 1; c2 >= 1 && 32 === e2.pending.charCodeAt(c2 - 1); )
          c2--;
        e2.pending = e2.pending.slice(0, c2), e2.push("hardbreak", "br", 0);
      } else
        e2.pending = e2.pending.slice(0, -1), e2.push("softbreak", "br", 0);
    else
      e2.push("softbreak", "br", 0);
  for (u2++; u2 < l2 && It(e2.src.charCodeAt(u2)); )
    u2++;
  return e2.pos = u2, true;
}], ["escape", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2 = e2.pos, h2 = e2.posMax;
  if (92 !== e2.src.charCodeAt(d2))
    return false;
  if (++d2 >= h2)
    return false;
  if (10 === (s2 = e2.src.charCodeAt(d2))) {
    for (t2 || e2.push("hardbreak", "br", 0), d2++; d2 < h2 && (s2 = e2.src.charCodeAt(d2), _t(s2)); )
      d2++;
    return e2.pos = d2, true;
  }
  return u2 = e2.src[d2], s2 >= 55296 && s2 <= 56319 && d2 + 1 < h2 && (l2 = e2.src.charCodeAt(d2 + 1)) >= 56320 && l2 <= 57343 && (u2 += e2.src[d2 + 1], d2++), c2 = "\\" + u2, t2 || (m2 = e2.push("text_special", "", 0), s2 < 256 && 0 !== wt[s2] ? m2.content = u2 : m2.content = c2, m2.markup = c2, m2.info = "escape"), e2.pos = d2 + 1, true;
}], ["backticks", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2 = e2.pos;
  if (96 !== e2.src.charCodeAt(g2))
    return false;
  for (s2 = g2, g2++, l2 = e2.posMax; g2 < l2 && 96 === e2.src.charCodeAt(g2); )
    g2++;
  if (h2 = (c2 = e2.src.slice(s2, g2)).length, e2.backticksScanned && (e2.backticks[h2] || 0) <= s2)
    return t2 || (e2.pending += c2), e2.pos += h2, true;
  for (m2 = d2 = g2; -1 !== (m2 = e2.src.indexOf("`", d2)); ) {
    for (d2 = m2 + 1; d2 < l2 && 96 === e2.src.charCodeAt(d2); )
      d2++;
    if ((p2 = d2 - m2) === h2)
      return t2 || ((u2 = e2.push("code_inline", "code", 0)).markup = c2, u2.content = e2.src.slice(g2, m2).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e2.pos = d2, true;
    e2.backticks[p2] = m2;
  }
  return e2.backticksScanned = true, t2 || (e2.pending += c2), e2.pos += h2, true;
}], ["strikethrough", Nt.tokenize], ["emphasis", Ot.tokenize], ["link", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2 = "", y2 = "", F2 = e2.pos, D2 = e2.posMax, k2 = e2.pos, v = true;
  if (91 !== e2.src.charCodeAt(e2.pos))
    return false;
  if (m2 = e2.pos + 1, (u2 = e2.md.helpers.parseLinkLabel(e2, e2.pos, true)) < 0)
    return false;
  if ((d2 = u2 + 1) < D2 && 40 === e2.src.charCodeAt(d2)) {
    for (v = false, d2++; d2 < D2 && (l2 = e2.src.charCodeAt(d2), Pt(l2) || 10 === l2); d2++)
      ;
    if (d2 >= D2)
      return false;
    if (k2 = d2, (h2 = e2.md.helpers.parseLinkDestination(e2.src, d2, e2.posMax)).ok) {
      for (g2 = e2.md.normalizeLink(h2.str), e2.md.validateLink(g2) ? d2 = h2.pos : g2 = "", k2 = d2; d2 < D2 && (l2 = e2.src.charCodeAt(d2), Pt(l2) || 10 === l2); d2++)
        ;
      if (h2 = e2.md.helpers.parseLinkTitle(e2.src, d2, e2.posMax), d2 < D2 && k2 !== d2 && h2.ok)
        for (y2 = h2.str, d2 = h2.pos; d2 < D2 && (l2 = e2.src.charCodeAt(d2), Pt(l2) || 10 === l2); d2++)
          ;
    }
    (d2 >= D2 || 41 !== e2.src.charCodeAt(d2)) && (v = true), d2++;
  }
  if (v) {
    if (void 0 === e2.env.references)
      return false;
    if (d2 < D2 && 91 === e2.src.charCodeAt(d2) ? (k2 = d2 + 1, (d2 = e2.md.helpers.parseLinkLabel(e2, d2)) >= 0 ? c2 = e2.src.slice(k2, d2++) : d2 = u2 + 1) : d2 = u2 + 1, c2 || (c2 = e2.src.slice(m2, u2)), !(p2 = e2.env.references[xt(c2)]))
      return e2.pos = F2, false;
    g2 = p2.href, y2 = p2.title;
  }
  return t2 || (e2.pos = m2, e2.posMax = u2, e2.push("link_open", "a", 1).attrs = s2 = [["href", g2]], y2 && s2.push(["title", y2]), e2.linkLevel++, e2.md.inline.tokenize(e2), e2.linkLevel--, e2.push("link_close", "a", -1)), e2.pos = d2, e2.posMax = D2, true;
}], ["image", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2, p2, g2, y2, F2, D2, k2, v = "", C2 = e2.pos, T2 = e2.posMax;
  if (33 !== e2.src.charCodeAt(e2.pos))
    return false;
  if (91 !== e2.src.charCodeAt(e2.pos + 1))
    return false;
  if (d2 = e2.pos + 2, (m2 = e2.md.helpers.parseLinkLabel(e2, e2.pos + 1, false)) < 0)
    return false;
  if ((h2 = m2 + 1) < T2 && 40 === e2.src.charCodeAt(h2)) {
    for (h2++; h2 < T2 && (l2 = e2.src.charCodeAt(h2), Mt(l2) || 10 === l2); h2++)
      ;
    if (h2 >= T2)
      return false;
    for (k2 = h2, (g2 = e2.md.helpers.parseLinkDestination(e2.src, h2, e2.posMax)).ok && (v = e2.md.normalizeLink(g2.str), e2.md.validateLink(v) ? h2 = g2.pos : v = ""), k2 = h2; h2 < T2 && (l2 = e2.src.charCodeAt(h2), Mt(l2) || 10 === l2); h2++)
      ;
    if (g2 = e2.md.helpers.parseLinkTitle(e2.src, h2, e2.posMax), h2 < T2 && k2 !== h2 && g2.ok)
      for (y2 = g2.str, h2 = g2.pos; h2 < T2 && (l2 = e2.src.charCodeAt(h2), Mt(l2) || 10 === l2); h2++)
        ;
    else
      y2 = "";
    if (h2 >= T2 || 41 !== e2.src.charCodeAt(h2))
      return e2.pos = C2, false;
    h2++;
  } else {
    if (void 0 === e2.env.references)
      return false;
    if (h2 < T2 && 91 === e2.src.charCodeAt(h2) ? (k2 = h2 + 1, (h2 = e2.md.helpers.parseLinkLabel(e2, h2)) >= 0 ? u2 = e2.src.slice(k2, h2++) : h2 = m2 + 1) : h2 = m2 + 1, u2 || (u2 = e2.src.slice(d2, m2)), !(p2 = e2.env.references[Et(u2)]))
      return e2.pos = C2, false;
    v = p2.href, y2 = p2.title;
  }
  return t2 || (c2 = e2.src.slice(d2, m2), e2.md.inline.parse(c2, e2.md, e2.env, D2 = []), (F2 = e2.push("image", "img", 0)).attrs = s2 = [["src", v], ["alt", ""]], F2.children = D2, F2.content = c2, y2 && s2.push(["title", y2])), e2.pos = h2, e2.posMax = T2, true;
}], ["autolink", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2, h2 = e2.pos;
  if (60 !== e2.src.charCodeAt(h2))
    return false;
  for (m2 = e2.pos, d2 = e2.posMax; ; ) {
    if (++h2 >= d2)
      return false;
    if (60 === (u2 = e2.src.charCodeAt(h2)))
      return false;
    if (62 === u2)
      break;
  }
  return s2 = e2.src.slice(m2 + 1, h2), Lt.test(s2) ? (l2 = e2.md.normalizeLink(s2), !!e2.md.validateLink(l2) && (t2 || ((c2 = e2.push("link_open", "a", 1)).attrs = [["href", l2]], c2.markup = "autolink", c2.info = "auto", (c2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(s2), (c2 = e2.push("link_close", "a", -1)).markup = "autolink", c2.info = "auto"), e2.pos += s2.length + 2, true)) : !!Rt.test(s2) && (l2 = e2.md.normalizeLink("mailto:" + s2), !!e2.md.validateLink(l2) && (t2 || ((c2 = e2.push("link_open", "a", 1)).attrs = [["href", l2]], c2.markup = "autolink", c2.info = "auto", (c2 = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(s2), (c2 = e2.push("link_close", "a", -1)).markup = "autolink", c2.info = "auto"), e2.pos += s2.length + 2, true));
}], ["html_inline", function(e2, t2) {
  var s2, l2, c2, u2, m2, d2 = e2.pos;
  return !!e2.md.options.html && (c2 = e2.posMax, !(60 !== e2.src.charCodeAt(d2) || d2 + 2 >= c2) && (!(33 !== (s2 = e2.src.charCodeAt(d2 + 1)) && 63 !== s2 && 47 !== s2 && !function(e3) {
    var t3 = 32 | e3;
    return t3 >= 97 && t3 <= 122;
  }(s2)) && (!!(l2 = e2.src.slice(d2).match(zt)) && (t2 || ((u2 = e2.push("html_inline", "", 0)).content = e2.src.slice(d2, d2 + l2[0].length), m2 = u2.content, /^<a[>\s]/i.test(m2) && e2.linkLevel++, function(e3) {
    return /^<\/a\s*>/i.test(e3);
  }(u2.content) && e2.linkLevel--), e2.pos += l2[0].length, true))));
}], ["entity", function(e2, t2) {
  var s2, l2, c2, u2 = e2.pos, m2 = e2.posMax;
  if (38 !== e2.src.charCodeAt(u2))
    return false;
  if (u2 + 1 >= m2)
    return false;
  if (35 === e2.src.charCodeAt(u2 + 1)) {
    if (l2 = e2.src.slice(u2).match(qt))
      return t2 || (s2 = "x" === l2[1][0].toLowerCase() ? parseInt(l2[1].slice(1), 16) : parseInt(l2[1], 10), (c2 = e2.push("text_special", "", 0)).content = Bt(s2) ? Gt(s2) : Gt(65533), c2.markup = l2[0], c2.info = "entity"), e2.pos += l2[0].length, true;
  } else if ((l2 = e2.src.slice(u2).match(Ht)) && $t(jt, l2[1]))
    return t2 || ((c2 = e2.push("text_special", "", 0)).content = jt[l2[1]], c2.markup = l2[0], c2.info = "entity"), e2.pos += l2[0].length, true;
  return false;
}]], Jt = [["balance_pairs", function(e2) {
  var t2, s2 = e2.tokens_meta, l2 = e2.tokens_meta.length;
  for (processDelimiters(0, e2.delimiters), t2 = 0; t2 < l2; t2++)
    s2[t2] && s2[t2].delimiters && processDelimiters(0, s2[t2].delimiters);
}], ["strikethrough", Nt.postProcess], ["emphasis", Ot.postProcess], ["fragments_join", function(e2) {
  var t2, s2, l2 = 0, c2 = e2.tokens, u2 = e2.tokens.length;
  for (t2 = s2 = 0; t2 < u2; t2++)
    c2[t2].nesting < 0 && l2--, c2[t2].level = l2, c2[t2].nesting > 0 && l2++, "text" === c2[t2].type && t2 + 1 < u2 && "text" === c2[t2 + 1].type ? c2[t2 + 1].content = c2[t2].content + c2[t2 + 1].content : (t2 !== s2 && (c2[s2] = c2[t2]), s2++);
  t2 !== s2 && (c2.length = s2);
}]];
function ParserInline$1() {
  var e2;
  for (this.ruler = new Qt(), e2 = 0; e2 < Zt.length; e2++)
    this.ruler.push(Zt[e2][0], Zt[e2][1]);
  for (this.ruler2 = new Qt(), e2 = 0; e2 < Jt.length; e2++)
    this.ruler2.push(Jt[e2][0], Jt[e2][1]);
}
ParserInline$1.prototype.skipToken = function(e2) {
  var t2, s2, l2 = e2.pos, c2 = this.ruler.getRules(""), u2 = c2.length, m2 = e2.md.options.maxNesting, d2 = e2.cache;
  if (void 0 === d2[l2]) {
    if (e2.level < m2)
      for (s2 = 0; s2 < u2 && (e2.level++, t2 = c2[s2](e2, true), e2.level--, !t2); s2++)
        ;
    else
      e2.pos = e2.posMax;
    t2 || e2.pos++, d2[l2] = e2.pos;
  } else
    e2.pos = d2[l2];
}, ParserInline$1.prototype.tokenize = function(e2) {
  for (var t2, s2, l2 = this.ruler.getRules(""), c2 = l2.length, u2 = e2.posMax, m2 = e2.md.options.maxNesting; e2.pos < u2; ) {
    if (e2.level < m2)
      for (s2 = 0; s2 < c2 && !(t2 = l2[s2](e2, false)); s2++)
        ;
    if (t2) {
      if (e2.pos >= u2)
        break;
    } else
      e2.pending += e2.src[e2.pos++];
  }
  e2.pending && e2.pushPending();
}, ParserInline$1.prototype.parse = function(e2, t2, s2, l2) {
  var c2, u2, m2, d2 = new this.State(e2, t2, s2, l2);
  for (this.tokenize(d2), m2 = (u2 = this.ruler2.getRules("")).length, c2 = 0; c2 < m2; c2++)
    u2[c2](d2);
}, ParserInline$1.prototype.State = Kt;
var Xt, es, ts = ParserInline$1;
function requireRe() {
  return es ? Xt : (es = 1, Xt = function(e2) {
    var t2 = {};
    e2 = e2 || {}, t2.src_Any = requireRegex$3().source, t2.src_Cc = requireRegex$2().source, t2.src_Z = requireRegex().source, t2.src_P = ie.source, t2.src_ZPCc = [t2.src_Z, t2.src_P, t2.src_Cc].join("|"), t2.src_ZCc = [t2.src_Z, t2.src_Cc].join("|");
    return t2.src_pseudo_letter = "(?:(?![><｜]|" + t2.src_ZPCc + ")" + t2.src_Any + ")", t2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t2.src_auth = "(?:(?:(?!" + t2.src_ZCc + "|[@/\\[\\]()]).)+@)?", t2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t2.src_host_terminator = "(?=$|[><｜]|" + t2.src_ZPCc + ")(?!" + (e2["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t2.src_ZPCc + "))", t2.src_path = "(?:[/?#](?:(?!" + t2.src_ZCc + `|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t2.src_ZCc + "|[']).)+\\'|\\'(?=" + t2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t2.src_ZCc + "|[.]|$)|" + (e2["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t2.src_ZCc + "|$)|;(?!" + t2.src_ZCc + "|$)|\\!+(?!" + t2.src_ZCc + "|[!]|$)|\\?(?!" + t2.src_ZCc + "|[?]|$))+|\\/)?", t2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t2.src_xn = "xn--[a-z0-9\\-]{1,59}", t2.src_domain_root = "(?:" + t2.src_xn + "|" + t2.src_pseudo_letter + "{1,63})", t2.src_domain = "(?:" + t2.src_xn + "|(?:" + t2.src_pseudo_letter + ")|(?:" + t2.src_pseudo_letter + "(?:-|" + t2.src_pseudo_letter + "){0,61}" + t2.src_pseudo_letter + "))", t2.src_host = "(?:(?:(?:(?:" + t2.src_domain + ")\\.)*" + t2.src_domain + "))", t2.tpl_host_fuzzy = "(?:" + t2.src_ip4 + "|(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%)))", t2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%))", t2.src_host_strict = t2.src_host + t2.src_host_terminator, t2.tpl_host_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_host_terminator, t2.src_host_port_strict = t2.src_host + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_no_ip_fuzzy_strict = t2.tpl_host_no_ip_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t2.src_ZPCc + "|>|$))", t2.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t2.src_ZCc + ")(" + t2.src_email_name + "@" + t2.tpl_host_fuzzy_strict + ")", t2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t2.src_ZPCc + "))((?![$+<=>^`|｜])" + t2.tpl_host_port_fuzzy_strict + t2.src_path + ")", t2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t2.src_ZPCc + "))((?![$+<=>^`|｜])" + t2.tpl_host_port_no_ip_fuzzy_strict + t2.src_path + ")", t2;
  });
}
function assign(e2) {
  var t2 = Array.prototype.slice.call(arguments, 1);
  return t2.forEach(function(t3) {
    t3 && Object.keys(t3).forEach(function(s2) {
      e2[s2] = t3[s2];
    });
  }), e2;
}
function _class(e2) {
  return Object.prototype.toString.call(e2);
}
function isFunction(e2) {
  return "[object Function]" === _class(e2);
}
function escapeRE(e2) {
  return e2.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var ss = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
var as = { "http:": { validate: function(e2, t2, s2) {
  var l2 = e2.slice(t2);
  return s2.re.http || (s2.re.http = new RegExp("^\\/\\/" + s2.re.src_auth + s2.re.src_host_port_strict + s2.re.src_path, "i")), s2.re.http.test(l2) ? l2.match(s2.re.http)[0].length : 0;
} }, "https:": "http:", "ftp:": "http:", "//": { validate: function(e2, t2, s2) {
  var l2 = e2.slice(t2);
  return s2.re.no_http || (s2.re.no_http = new RegExp("^" + s2.re.src_auth + "(?:localhost|(?:(?:" + s2.re.src_domain + ")\\.)+" + s2.re.src_domain_root + ")" + s2.re.src_port + s2.re.src_host_terminator + s2.re.src_path, "i")), s2.re.no_http.test(l2) ? t2 >= 3 && ":" === e2[t2 - 3] || t2 >= 3 && "/" === e2[t2 - 3] ? 0 : l2.match(s2.re.no_http)[0].length : 0;
} }, "mailto:": { validate: function(e2, t2, s2) {
  var l2 = e2.slice(t2);
  return s2.re.mailto || (s2.re.mailto = new RegExp("^" + s2.re.src_email_name + "@" + s2.re.src_host_strict, "i")), s2.re.mailto.test(l2) ? l2.match(s2.re.mailto)[0].length : 0;
} } }, is = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function compile(e2) {
  var t2 = e2.re = requireRe()(e2.__opts__), s2 = e2.__tlds__.slice();
  function untpl(e3) {
    return e3.replace("%TLDS%", t2.src_tlds);
  }
  e2.onCompile(), e2.__tlds_replaced__ || s2.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), s2.push(t2.src_xn), t2.src_tlds = s2.join("|"), t2.email_fuzzy = RegExp(untpl(t2.tpl_email_fuzzy), "i"), t2.link_fuzzy = RegExp(untpl(t2.tpl_link_fuzzy), "i"), t2.link_no_ip_fuzzy = RegExp(untpl(t2.tpl_link_no_ip_fuzzy), "i"), t2.host_fuzzy_test = RegExp(untpl(t2.tpl_host_fuzzy_test), "i");
  var l2 = [];
  function schemaError(e3, t3) {
    throw new Error('(LinkifyIt) Invalid schema "' + e3 + '": ' + t3);
  }
  e2.__compiled__ = {}, Object.keys(e2.__schemas__).forEach(function(t3) {
    var s3 = e2.__schemas__[t3];
    if (null !== s3) {
      var c3 = { validate: null, link: null };
      if (e2.__compiled__[t3] = c3, "[object Object]" === _class(s3))
        return !function(e3) {
          return "[object RegExp]" === _class(e3);
        }(s3.validate) ? isFunction(s3.validate) ? c3.validate = s3.validate : schemaError(t3, s3) : c3.validate = function(e3) {
          return function(t4, s4) {
            var l3 = t4.slice(s4);
            return e3.test(l3) ? l3.match(e3)[0].length : 0;
          };
        }(s3.validate), void (isFunction(s3.normalize) ? c3.normalize = s3.normalize : s3.normalize ? schemaError(t3, s3) : c3.normalize = function(e3, t4) {
          t4.normalize(e3);
        });
      !function(e3) {
        return "[object String]" === _class(e3);
      }(s3) ? schemaError(t3, s3) : l2.push(t3);
    }
  }), l2.forEach(function(t3) {
    e2.__compiled__[e2.__schemas__[t3]] && (e2.__compiled__[t3].validate = e2.__compiled__[e2.__schemas__[t3]].validate, e2.__compiled__[t3].normalize = e2.__compiled__[e2.__schemas__[t3]].normalize);
  }), e2.__compiled__[""] = { validate: null, normalize: function(e3, t3) {
    t3.normalize(e3);
  } };
  var c2 = Object.keys(e2.__compiled__).filter(function(t3) {
    return t3.length > 0 && e2.__compiled__[t3];
  }).map(escapeRE).join("|");
  e2.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t2.src_ZPCc + "))(" + c2 + ")", "i"), e2.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t2.src_ZPCc + "))(" + c2 + ")", "ig"), e2.re.schema_at_start = RegExp("^" + e2.re.schema_search.source, "i"), e2.re.pretest = RegExp("(" + e2.re.schema_test.source + ")|(" + e2.re.host_fuzzy_test.source + ")|@", "i"), function(e3) {
    e3.__index__ = -1, e3.__text_cache__ = "";
  }(e2);
}
function Match(e2, t2) {
  var s2 = e2.__index__, l2 = e2.__last_index__, c2 = e2.__text_cache__.slice(s2, l2);
  this.schema = e2.__schema__.toLowerCase(), this.index = s2 + t2, this.lastIndex = l2 + t2, this.raw = c2, this.text = c2, this.url = c2;
}
function createMatch(e2, t2) {
  var s2 = new Match(e2, t2);
  return e2.__compiled__[s2.schema].normalize(s2, e2), s2;
}
function LinkifyIt$1(e2, t2) {
  if (!(this instanceof LinkifyIt$1))
    return new LinkifyIt$1(e2, t2);
  var s2;
  t2 || (s2 = e2, Object.keys(s2 || {}).reduce(function(e3, t3) {
    return e3 || ss.hasOwnProperty(t3);
  }, false) && (t2 = e2, e2 = {})), this.__opts__ = assign({}, ss, t2), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = assign({}, as, e2), this.__compiled__ = {}, this.__tlds__ = is, this.__tlds_replaced__ = false, this.re = {}, compile(this);
}
LinkifyIt$1.prototype.add = function(e2, t2) {
  return this.__schemas__[e2] = t2, compile(this), this;
}, LinkifyIt$1.prototype.set = function(e2) {
  return this.__opts__ = assign(this.__opts__, e2), this;
}, LinkifyIt$1.prototype.test = function(e2) {
  if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
    return false;
  var t2, s2, l2, c2, u2, m2, d2, h2;
  if (this.re.schema_test.test(e2)) {
    for ((d2 = this.re.schema_search).lastIndex = 0; null !== (t2 = d2.exec(e2)); )
      if (c2 = this.testSchemaAt(e2, t2[2], d2.lastIndex)) {
        this.__schema__ = t2[2], this.__index__ = t2.index + t2[1].length, this.__last_index__ = t2.index + t2[0].length + c2;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (h2 = e2.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || h2 < this.__index__) && null !== (s2 = e2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (u2 = s2.index + s2[1].length, (this.__index__ < 0 || u2 < this.__index__) && (this.__schema__ = "", this.__index__ = u2, this.__last_index__ = s2.index + s2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e2.indexOf("@") >= 0 && null !== (l2 = e2.match(this.re.email_fuzzy)) && (u2 = l2.index + l2[1].length, m2 = l2.index + l2[0].length, (this.__index__ < 0 || u2 < this.__index__ || u2 === this.__index__ && m2 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = u2, this.__last_index__ = m2)), this.__index__ >= 0;
}, LinkifyIt$1.prototype.pretest = function(e2) {
  return this.re.pretest.test(e2);
}, LinkifyIt$1.prototype.testSchemaAt = function(e2, t2, s2) {
  return this.__compiled__[t2.toLowerCase()] ? this.__compiled__[t2.toLowerCase()].validate(e2, s2, this) : 0;
}, LinkifyIt$1.prototype.match = function(e2) {
  var t2 = 0, s2 = [];
  this.__index__ >= 0 && this.__text_cache__ === e2 && (s2.push(createMatch(this, t2)), t2 = this.__last_index__);
  for (var l2 = t2 ? e2.slice(t2) : e2; this.test(l2); )
    s2.push(createMatch(this, t2)), l2 = l2.slice(this.__last_index__), t2 += this.__last_index__;
  return s2.length ? s2 : null;
}, LinkifyIt$1.prototype.matchAtStart = function(e2) {
  if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
    return null;
  var t2 = this.re.schema_at_start.exec(e2);
  if (!t2)
    return null;
  var s2 = this.testSchemaAt(e2, t2[2], t2[0].length);
  return s2 ? (this.__schema__ = t2[2], this.__index__ = t2.index + t2[1].length, this.__last_index__ = t2.index + t2[0].length + s2, createMatch(this, 0)) : null;
}, LinkifyIt$1.prototype.tlds = function(e2, t2) {
  return e2 = Array.isArray(e2) ? e2 : [e2], t2 ? (this.__tlds__ = this.__tlds__.concat(e2).sort().filter(function(e3, t3, s2) {
    return e3 !== s2[t3 - 1];
  }).reverse(), compile(this), this) : (this.__tlds__ = e2.slice(), this.__tlds_replaced__ = true, compile(this), this);
}, LinkifyIt$1.prototype.normalize = function(e2) {
  e2.schema || (e2.url = "http://" + e2.url), "mailto:" !== e2.schema || /^mailto:/i.test(e2.url) || (e2.url = "mailto:" + e2.url);
}, LinkifyIt$1.prototype.onCompile = function() {
};
var ns = LinkifyIt$1;
const rs = 2147483647, os = /^xn--/, ls = /[^\0-\x7E]/, cs = /[\x2E\u3002\uFF0E\uFF61]/g, us = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, ms = Math.floor, ds = String.fromCharCode;
function error(e2) {
  throw new RangeError(us[e2]);
}
function mapDomain(e2, t2) {
  const s2 = e2.split("@");
  let l2 = "";
  s2.length > 1 && (l2 = s2[0] + "@", e2 = s2[1]);
  const c2 = function(e3, t3) {
    const s3 = [];
    let l3 = e3.length;
    for (; l3--; )
      s3[l3] = t3(e3[l3]);
    return s3;
  }((e2 = e2.replace(cs, ".")).split("."), t2).join(".");
  return l2 + c2;
}
function ucs2decode(e2) {
  const t2 = [];
  let s2 = 0;
  const l2 = e2.length;
  for (; s2 < l2; ) {
    const c2 = e2.charCodeAt(s2++);
    if (c2 >= 55296 && c2 <= 56319 && s2 < l2) {
      const l3 = e2.charCodeAt(s2++);
      56320 == (64512 & l3) ? t2.push(((1023 & c2) << 10) + (1023 & l3) + 65536) : (t2.push(c2), s2--);
    } else
      t2.push(c2);
  }
  return t2;
}
const ucs2encode = (e2) => String.fromCodePoint(...e2), digitToBasic = function(e2, t2) {
  return e2 + 22 + 75 * (e2 < 26) - ((0 != t2) << 5);
}, adapt = function(e2, t2, s2) {
  let l2 = 0;
  for (e2 = s2 ? ms(e2 / 700) : e2 >> 1, e2 += ms(e2 / t2); e2 > 455; l2 += 36)
    e2 = ms(e2 / 35);
  return ms(l2 + 36 * e2 / (e2 + 38));
}, decode = function(e2) {
  const t2 = [], s2 = e2.length;
  let l2 = 0, c2 = 128, u2 = 72, m2 = e2.lastIndexOf("-");
  m2 < 0 && (m2 = 0);
  for (let s3 = 0; s3 < m2; ++s3)
    e2.charCodeAt(s3) >= 128 && error("not-basic"), t2.push(e2.charCodeAt(s3));
  for (let h2 = m2 > 0 ? m2 + 1 : 0; h2 < s2; ) {
    let m3 = l2;
    for (let t3 = 1, c3 = 36; ; c3 += 36) {
      h2 >= s2 && error("invalid-input");
      const m4 = (d2 = e2.charCodeAt(h2++)) - 48 < 10 ? d2 - 22 : d2 - 65 < 26 ? d2 - 65 : d2 - 97 < 26 ? d2 - 97 : 36;
      (m4 >= 36 || m4 > ms((rs - l2) / t3)) && error("overflow"), l2 += m4 * t3;
      const p3 = c3 <= u2 ? 1 : c3 >= u2 + 26 ? 26 : c3 - u2;
      if (m4 < p3)
        break;
      const g2 = 36 - p3;
      t3 > ms(rs / g2) && error("overflow"), t3 *= g2;
    }
    const p2 = t2.length + 1;
    u2 = adapt(l2 - m3, p2, 0 == m3), ms(l2 / p2) > rs - c2 && error("overflow"), c2 += ms(l2 / p2), l2 %= p2, t2.splice(l2++, 0, c2);
  }
  var d2;
  return String.fromCodePoint(...t2);
}, encode = function(e2) {
  const t2 = [];
  let s2 = (e2 = ucs2decode(e2)).length, l2 = 128, c2 = 0, u2 = 72;
  for (const s3 of e2)
    s3 < 128 && t2.push(ds(s3));
  let m2 = t2.length, d2 = m2;
  for (m2 && t2.push("-"); d2 < s2; ) {
    let s3 = rs;
    for (const t3 of e2)
      t3 >= l2 && t3 < s3 && (s3 = t3);
    const h2 = d2 + 1;
    s3 - l2 > ms((rs - c2) / h2) && error("overflow"), c2 += (s3 - l2) * h2, l2 = s3;
    for (const s4 of e2)
      if (s4 < l2 && ++c2 > rs && error("overflow"), s4 == l2) {
        let e3 = c2;
        for (let s5 = 36; ; s5 += 36) {
          const l3 = s5 <= u2 ? 1 : s5 >= u2 + 26 ? 26 : s5 - u2;
          if (e3 < l3)
            break;
          const c3 = e3 - l3, m3 = 36 - l3;
          t2.push(ds(digitToBasic(l3 + c3 % m3, 0))), e3 = ms(c3 / m3);
        }
        t2.push(ds(digitToBasic(e3, 0))), u2 = adapt(c2, h2, d2 == m2), c2 = 0, ++d2;
      }
    ++c2, ++l2;
  }
  return t2.join("");
}, toUnicode = function(e2) {
  return mapDomain(e2, function(e3) {
    return os.test(e3) ? decode(e3.slice(4).toLowerCase()) : e3;
  });
}, toASCII = function(e2) {
  return mapDomain(e2, function(e3) {
    return ls.test(e3) ? "xn--" + encode(e3) : e3;
  });
}, hs = { version: "2.1.0", ucs2: { decode: ucs2decode, encode: ucs2encode }, decode, encode, toASCII, toUnicode }, ps = Object.freeze(Object.defineProperty({ __proto__: null, ucs2decode, ucs2encode, decode, encode, toASCII, toUnicode, default: hs }, Symbol.toStringTag, { value: "Module" }));
var fs = se, gs = Oe, ys = ze, bs = at, Fs = Tt, Ds = ts, ks = ns, vs = ne, Cs = getAugmentedNamespace(ps), Ts = { default: { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } }, zero: { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "fragments_join"] } } }, commonmark: { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "“”‘’", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline", "text_join"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "fragments_join"] } } } }, Ss = /^(vbscript|javascript|file|data):/, Is = /^data:image\/(gif|png|jpeg|webp);/;
function validateLink(e2) {
  var t2 = e2.trim().toLowerCase();
  return !Ss.test(t2) || !!Is.test(t2);
}
var _s = ["http:", "https:", "mailto:"];
function normalizeLink(e2) {
  var t2 = vs.parse(e2, true);
  if (t2.hostname && (!t2.protocol || _s.indexOf(t2.protocol) >= 0))
    try {
      t2.hostname = Cs.toASCII(t2.hostname);
    } catch (e3) {
    }
  return vs.encode(vs.format(t2));
}
function normalizeLinkText(e2) {
  var t2 = vs.parse(e2, true);
  if (t2.hostname && (!t2.protocol || _s.indexOf(t2.protocol) >= 0))
    try {
      t2.hostname = Cs.toUnicode(t2.hostname);
    } catch (e3) {
    }
  return vs.decode(vs.format(t2), vs.decode.defaultChars + "%");
}
function MarkdownIt$1(e2, t2) {
  if (!(this instanceof MarkdownIt$1))
    return new MarkdownIt$1(e2, t2);
  t2 || fs.isString(e2) || (t2 = e2 || {}, e2 = "default"), this.inline = new Ds(), this.block = new Fs(), this.core = new bs(), this.renderer = new ys(), this.linkify = new ks(), this.validateLink = validateLink, this.normalizeLink = normalizeLink, this.normalizeLinkText = normalizeLinkText, this.utils = fs, this.helpers = fs.assign({}, gs), this.options = {}, this.configure(e2), t2 && this.set(t2);
}
MarkdownIt$1.prototype.set = function(e2) {
  return fs.assign(this.options, e2), this;
}, MarkdownIt$1.prototype.configure = function(e2) {
  var t2, s2 = this;
  if (fs.isString(e2) && !(e2 = Ts[t2 = e2]))
    throw new Error('Wrong `markdown-it` preset "' + t2 + '", check name');
  if (!e2)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e2.options && s2.set(e2.options), e2.components && Object.keys(e2.components).forEach(function(t3) {
    e2.components[t3].rules && s2[t3].ruler.enableOnly(e2.components[t3].rules), e2.components[t3].rules2 && s2[t3].ruler2.enableOnly(e2.components[t3].rules2);
  }), this;
}, MarkdownIt$1.prototype.enable = function(e2, t2) {
  var s2 = [];
  Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
    s2 = s2.concat(this[t3].ruler.enable(e2, true));
  }, this), s2 = s2.concat(this.inline.ruler2.enable(e2, true));
  var l2 = e2.filter(function(e3) {
    return s2.indexOf(e3) < 0;
  });
  if (l2.length && !t2)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + l2);
  return this;
}, MarkdownIt$1.prototype.disable = function(e2, t2) {
  var s2 = [];
  Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
    s2 = s2.concat(this[t3].ruler.disable(e2, true));
  }, this), s2 = s2.concat(this.inline.ruler2.disable(e2, true));
  var l2 = e2.filter(function(e3) {
    return s2.indexOf(e3) < 0;
  });
  if (l2.length && !t2)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + l2);
  return this;
}, MarkdownIt$1.prototype.use = function(e2) {
  var t2 = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e2.apply(e2, t2), this;
}, MarkdownIt$1.prototype.parse = function(e2, t2) {
  if ("string" != typeof e2)
    throw new Error("Input data should be a String");
  var s2 = new this.core.State(e2, this, t2);
  return this.core.process(s2), s2.tokens;
}, MarkdownIt$1.prototype.render = function(e2, t2) {
  return t2 = t2 || {}, this.renderer.render(this.parse(e2, t2), this.options, t2);
}, MarkdownIt$1.prototype.parseInline = function(e2, t2) {
  var s2 = new this.core.State(e2, this, t2);
  return s2.inlineMode = true, this.core.process(s2), s2.tokens;
}, MarkdownIt$1.prototype.renderInline = function(e2, t2) {
  return t2 = t2 || {}, this.renderer.render(this.parseInline(e2, t2), this.options, t2);
};
const ws = getDefaultExportFromCjs(te.exports = MarkdownIt$1);
class ChangeLogWindow extends FormApplication {
  constructor(e2) {
    super({}, {}), this.lastVersion = e2;
  }
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return mergeObject(e2, { id: "changelog", classes: ["ffd20", "changelog"], template: "systems/ffd20/templates/apps/changelog.hbs", width: 500, submitOnChange: true, closeOnSubmit: false });
  }
  get title() {
    return `${game.i18n.localize("FFD20.title")} ~ ${game.i18n.localize("FFD20.Changelog")}`;
  }
  async getData() {
    const e2 = await super.getData();
    e2.dontShowAgain = game.settings.get("ffd20", "dontShowChangelog");
    const t2 = new XMLHttpRequest();
    t2.open("GET", "systems/ffd20/CHANGELOG.md");
    const s2 = new Promise((s3) => {
      t2.onload = () => {
        200 === t2.status && (e2.changelog = this._processChangelog(t2.response), s3(e2));
      };
    });
    return t2.send(null), s2;
  }
  _processChangelog(e2) {
    const t2 = new ws();
    let s2 = e2.split(/[\n\r]/);
    if (this.lastVersion)
      for (let e3 = 0; e3 < s2.length; e3++) {
        if (s2[e3].match(/##\s+([0-9]+\.[0-9]+\.[0-9]+)/)) {
          if (!SemanticVersion.fromString(RegExp.$1).isHigherThan(this.lastVersion)) {
            s2 = s2.slice(0, e3);
            break;
          }
        }
      }
    return t2.render(s2.join("\n"));
  }
  async _updateObject(e2, t2) {
    null != t2.dontShowAgain && await game.settings.set("ffd20", "dontShowChangelog", t2.dontShowAgain);
  }
}
var As = false, Ns = { false: "push", true: "unshift", after: "push", before: "unshift" }, Os = { isPermalinkSymbol: true };
function r(e2, t2, s2, l2) {
  var c2;
  if (!As) {
    var u2 = "Using deprecated markdown-it-anchor permalink option, see https://github.com/valeriangalliat/markdown-it-anchor#todo-anchor-or-file";
    "object" == typeof process && process && process.emitWarning ? process.emitWarning(u2) : console.warn(u2), As = true;
  }
  var m2 = [Object.assign(new s2.Token("link_open", "a", 1), { attrs: [].concat(t2.permalinkClass ? [["class", t2.permalinkClass]] : [], [["href", t2.permalinkHref(e2, s2)]], Object.entries(t2.permalinkAttrs(e2, s2))) }), Object.assign(new s2.Token("html_block", "", 0), { content: t2.permalinkSymbol, meta: Os }), new s2.Token("link_close", "a", -1)];
  t2.permalinkSpace && s2.tokens[l2 + 1].children[Ns[t2.permalinkBefore]](Object.assign(new s2.Token("text", "", 0), { content: " " })), (c2 = s2.tokens[l2 + 1].children)[Ns[t2.permalinkBefore]].apply(c2, m2);
}
function a(e2) {
  return "#" + e2;
}
function i(e2) {
  return {};
}
var xs = { class: "header-anchor", symbol: "#", renderHref: a, renderAttrs: i };
function o(e2) {
  function n(t2) {
    return t2 = Object.assign({}, n.defaults, t2), function(s2, l2, c2, u2) {
      return e2(s2, t2, l2, c2, u2);
    };
  }
  return n.defaults = Object.assign({}, xs), n.renderPermalinkImpl = e2, n;
}
var Ps = o(function(e2, t2, s2, l2, c2) {
  var u2, m2 = [Object.assign(new l2.Token("link_open", "a", 1), { attrs: [].concat(t2.class ? [["class", t2.class]] : [], [["href", t2.renderHref(e2, l2)]], t2.ariaHidden ? [["aria-hidden", "true"]] : [], Object.entries(t2.renderAttrs(e2, l2))) }), Object.assign(new l2.Token("html_inline", "", 0), { content: t2.symbol, meta: Os }), new l2.Token("link_close", "a", -1)];
  if (t2.space) {
    var d2 = "string" == typeof t2.space ? t2.space : " ";
    l2.tokens[c2 + 1].children[Ns[t2.placement]](Object.assign(new l2.Token("string" == typeof t2.space ? "html_inline" : "text", "", 0), { content: d2 }));
  }
  (u2 = l2.tokens[c2 + 1].children)[Ns[t2.placement]].apply(u2, m2);
});
Object.assign(Ps.defaults, { space: true, placement: "after", ariaHidden: false });
var Es = o(Ps.renderPermalinkImpl);
Es.defaults = Object.assign({}, Ps.defaults, { ariaHidden: true });
var Ms = o(function(e2, t2, s2, l2, c2) {
  var u2 = [Object.assign(new l2.Token("link_open", "a", 1), { attrs: [].concat(t2.class ? [["class", t2.class]] : [], [["href", t2.renderHref(e2, l2)]], Object.entries(t2.renderAttrs(e2, l2))) })].concat(t2.safariReaderFix ? [new l2.Token("span_open", "span", 1)] : [], l2.tokens[c2 + 1].children, t2.safariReaderFix ? [new l2.Token("span_close", "span", -1)] : [], [new l2.Token("link_close", "a", -1)]);
  l2.tokens[c2 + 1] = Object.assign(new l2.Token("inline", "", 0), { children: u2 });
});
Object.assign(Ms.defaults, { safariReaderFix: false });
var Rs = o(function(e2, t2, s2, l2, c2) {
  var u2;
  if (!["visually-hidden", "aria-label", "aria-describedby", "aria-labelledby"].includes(t2.style))
    throw new Error("`permalink.linkAfterHeader` called with unknown style option `" + t2.style + "`");
  if (!["aria-describedby", "aria-labelledby"].includes(t2.style) && !t2.assistiveText)
    throw new Error("`permalink.linkAfterHeader` called without the `assistiveText` option in `" + t2.style + "` style");
  if ("visually-hidden" === t2.style && !t2.visuallyHiddenClass)
    throw new Error("`permalink.linkAfterHeader` called without the `visuallyHiddenClass` option in `visually-hidden` style");
  var m2 = l2.tokens[c2 + 1].children.filter(function(e3) {
    return "text" === e3.type || "code_inline" === e3.type;
  }).reduce(function(e3, t3) {
    return e3 + t3.content;
  }, ""), d2 = [], h2 = [];
  if (t2.class && h2.push(["class", t2.class]), h2.push(["href", t2.renderHref(e2, l2)]), h2.push.apply(h2, Object.entries(t2.renderAttrs(e2, l2))), "visually-hidden" === t2.style) {
    if (d2.push(Object.assign(new l2.Token("span_open", "span", 1), { attrs: [["class", t2.visuallyHiddenClass]] }), Object.assign(new l2.Token("text", "", 0), { content: t2.assistiveText(m2) }), new l2.Token("span_close", "span", -1)), t2.space) {
      var p2 = "string" == typeof t2.space ? t2.space : " ";
      d2[Ns[t2.placement]](Object.assign(new l2.Token("string" == typeof t2.space ? "html_inline" : "text", "", 0), { content: p2 }));
    }
    d2[Ns[t2.placement]](Object.assign(new l2.Token("span_open", "span", 1), { attrs: [["aria-hidden", "true"]] }), Object.assign(new l2.Token("html_inline", "", 0), { content: t2.symbol, meta: Os }), new l2.Token("span_close", "span", -1));
  } else
    d2.push(Object.assign(new l2.Token("html_inline", "", 0), { content: t2.symbol, meta: Os }));
  "aria-label" === t2.style ? h2.push(["aria-label", t2.assistiveText(m2)]) : ["aria-describedby", "aria-labelledby"].includes(t2.style) && h2.push([t2.style, e2]);
  var g2 = [Object.assign(new l2.Token("link_open", "a", 1), { attrs: h2 })].concat(d2, [new l2.Token("link_close", "a", -1)]);
  (u2 = l2.tokens).splice.apply(u2, [c2 + 3, 0].concat(g2)), t2.wrapper && (l2.tokens.splice(c2, 0, Object.assign(new l2.Token("html_block", "", 0), { content: t2.wrapper[0] + "\n" })), l2.tokens.splice(c2 + 3 + g2.length + 1, 0, Object.assign(new l2.Token("html_block", "", 0), { content: t2.wrapper[1] + "\n" })));
});
function f(e2, t2, s2, l2) {
  var c2 = e2, u2 = l2;
  if (s2 && Object.prototype.hasOwnProperty.call(t2, c2))
    throw new Error("User defined `id` attribute `" + e2 + "` is not unique. Please fix it in your Markdown to continue.");
  for (; Object.prototype.hasOwnProperty.call(t2, c2); )
    c2 = e2 + "-" + u2, u2 += 1;
  return t2[c2] = true, c2;
}
function b(e2, t2) {
  t2 = Object.assign({}, b.defaults, t2), e2.core.ruler.push("anchor", function(e3) {
    for (var s2, l2 = {}, c2 = e3.tokens, u2 = Array.isArray(t2.level) ? (s2 = t2.level, function(e4) {
      return s2.includes(e4);
    }) : function(e4) {
      return function(t3) {
        return t3 >= e4;
      };
    }(t2.level), m2 = 0; m2 < c2.length; m2++) {
      var d2 = c2[m2];
      if ("heading_open" === d2.type && u2(Number(d2.tag.substr(1)))) {
        var h2 = t2.getTokensText(c2[m2 + 1].children), p2 = d2.attrGet("id");
        p2 = null == p2 ? f(t2.slugify(h2), l2, false, t2.uniqueSlugStartIndex) : f(p2, l2, true, t2.uniqueSlugStartIndex), d2.attrSet("id", p2), false !== t2.tabIndex && d2.attrSet("tabindex", "" + t2.tabIndex), "function" == typeof t2.permalink ? t2.permalink(p2, t2, e3, m2) : (t2.permalink || t2.renderPermalink && t2.renderPermalink !== r) && t2.renderPermalink(p2, t2, e3, m2), m2 = c2.indexOf(d2), t2.callback && t2.callback(d2, { slug: p2, title: h2 });
      }
    }
  });
}
Object.assign(Rs.defaults, { style: "visually-hidden", space: true, placement: "after", wrapper: null }), b.permalink = { __proto__: null, legacy: r, renderHref: a, renderAttrs: i, makePermalink: o, linkInsideHeader: Ps, ariaHidden: Es, headerLink: Ms, linkAfterHeader: Rs }, b.defaults = { level: 1, slugify: function(e2) {
  return encodeURIComponent(String(e2).trim().toLowerCase().replace(/\s+/g, "-"));
}, uniqueSlugStartIndex: 1, tabIndex: "-1", getTokensText: function(e2) {
  return e2.filter(function(e3) {
    return ["text", "code_inline"].includes(e3.type);
  }).map(function(e3) {
    return e3.content;
  }).join("");
}, permalink: false, renderPermalink: r, permalinkClass: Es.defaults.class, permalinkSpace: Es.defaults.space, permalinkSymbol: "¶", permalinkBefore: "before" === Es.defaults.placement, permalinkHref: Es.defaults.renderHref, permalinkAttrs: Es.defaults.renderAttrs }, b.default = b;
class HelpBrowserFFD20 extends Application {
  _backwardHistory = [];
  _forwardHistory = [];
  _currentPage = { url: "" };
  _md;
  constructor(...e2) {
    return super(...e2), this._initMarkdown(), this;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { classes: ["ffd20", "help-browser"], template: "systems/ffd20/templates/apps/help-browser.hbs", minWidth: 800, minHeight: 450, width: 960, height: 600, resizable: true, id: "ffd20-help-browser" });
  }
  get title() {
    return game.i18n.localize("FFD20.Help.Label");
  }
  get currentUrl() {
    return this._currentPage.url;
  }
  _initMarkdown() {
    const e2 = new ws().use(b, { tabIndex: false, slugify: (e3) => `ffd20-help-browser.${e3.slugify()}` }), t2 = e2.renderer.rules.image;
    e2.renderer.rules.image = ffd20HelpImageRenderer(t2), this._md = e2;
  }
  async getData() {
    const e2 = await super.getData();
    return this.nav ??= this._md.render(game.i18n.localize("FFD20.Help/Home")), e2.hasHistoryBack = this._backwardHistory.length > 0, e2.hasHistoryForward = this._forwardHistory.length > 0, e2.nav = this.nav, e2.pageContent = this._md.render(game.i18n.localize(`FFD20.${this.currentUrl}`)), e2;
  }
  openUrl(e2) {
    let t2;
    e2.startsWith("/") && (e2 = e2.slice(1)), [e2, t2] = e2.split("#"), this.currentUrl && e2 !== this.currentUrl && (this._backwardHistory.push(this.getCurrentHistoryObject()), this._forwardHistory.splice(0, this._forwardHistory.length)), this._currentPage = { url: e2 }, this.render(true, { header: t2 });
  }
  async _render(e2, t2) {
    await super._render(t2);
    const s2 = this.element.find(".content")[0];
    if (this._currentPage.scrollTop)
      setTimeout(() => {
        s2.scrollTop = this._currentPage.scrollTop;
      }, 0);
    else if (t2.header) {
      const e3 = document.getElementById(`ffd20-help-browser.${t2.header}`);
      e3 && setTimeout(() => {
        const t3 = Number.parseFloat(getComputedStyle(e3).fontSize);
        s2.scrollTop = e3.offsetTop - (45 + 1.5 * t3);
      }, 0);
    }
  }
  getCurrentHistoryObject() {
    const e2 = this.element.find(".content")[0]?.scrollTop ?? 0;
    return { url: this.currentUrl, scrollTop: e2 };
  }
  backInHistory() {
    this._backwardHistory.length && (this._forwardHistory.push(this.getCurrentHistoryObject()), this._currentPage = this._backwardHistory.pop(), this.render());
  }
  forwardInHistory() {
    this._forwardHistory.length && (this._backwardHistory.push(this.getCurrentHistoryObject()), this._currentPage = this._forwardHistory.pop(), this.render());
  }
  activateListeners(e2) {
    const t2 = e2.find("a[href]");
    for (const e3 of t2) {
      const t3 = e3.getAttribute("href");
      e3.removeAttribute("href"), e3.dataset.url = t3;
    }
    e2.on("click", "a", (e3) => {
      e3.preventDefault();
      const t3 = e3.currentTarget.dataset.url;
      t3 && this.openUrl(t3);
    }), e2.find(".history-back").on("click", this.backInHistory.bind(this)), e2.find(".history-forward").on("click", this.forwardInHistory.bind(this));
  }
}
const ffd20HelpImageRenderer = (e2) => (t2, s2, l2, c2, u2) => {
  const m2 = t2[s2];
  let d2 = m2.attrGet("src");
  d2.startsWith("/") && (d2 = d2.slice(1));
  const h2 = game.i18n.localize(`FFD20.${d2}`);
  return m2.attrSet("src", foundry.utils.getRoute(`systems/ffd20/${h2}`)), e2(t2, s2, l2, c2, u2);
}, Ls = new HelpBrowserFFD20();
const migrateWorld = async function() {
  if (!game.user.isGM) {
    const e3 = game.i18n.localize("FFD20.ErrorUnauthorizedAction");
    return console.error(e3), ui.notifications.error(e3);
  }
  if (ffd20.migrations.isMigrating) {
    const e3 = game.i18n.localize("FFD20.Migration.AlreadyInProgress");
    return ui.notifications.error(e3);
  }
  ffd20.migrations.isMigrating = true, Hooks.callAll("ffd20MigrationStarted");
  const e2 = game.i18n.format("FFD20.Migration.Start", { version: game.system.version });
  ui.notifications.info(e2, { permanent: true }), console.log("System Migration starting.");
  await _migrateWorldSettings(), console.log("Migrating Actor documents");
  for (const e3 of game.actors.contents)
    try {
      const t3 = migrateActorData(e3.toObject());
      foundry.utils.isEmpty(t3) || (console.log(`Migrating Actor document ${e3.name}`), await e3.update(t3, { enforceTypes: false }));
    } catch (t3) {
      console.error(`Error migrating actor document ${e3.name}`, t3);
    }
  console.log("Migrating Item documents.");
  for (const e3 of game.items.contents)
    try {
      const t3 = migrateItemData(e3.toObject());
      foundry.utils.isEmpty(t3) || (console.log(`Migrating Item document ${e3.name}`), await e3.update(t3, { enforceTypes: false }));
    } catch (t3) {
      console.error(`Error migrating item document ${e3.name}`, t3);
    }
  console.log("Migrating Scene documents.");
  for (const e3 of game.scenes.contents)
    try {
      const t3 = await migrateSceneData(e3.toObject());
      foundry.utils.isEmpty(t3) || (console.log(`Migrating Scene document ${e3.name}`), await e3.update(t3, { enforceTypes: false }), e3.tokens.contents.forEach((e4) => {
        e4._actor = null;
      }));
    } catch (t3) {
      console.error(`Error migrating scene document ${e3.name}`, t3);
    }
  const t2 = game.packs.filter((e3) => (["world", "ffd20"].includes(e3.metadata.package) || "ffd20" === e3.metadata.system) && ["Actor", "Item", "Scene"].includes(e3.metadata.type) && !e3.locked);
  for (const e3 of t2)
    await migrateCompendium(e3);
  await game.settings.set("ffd20", "systemMigrationVersion", game.system.version);
  const s2 = ui.notifications.queue.find((t3) => t3.permanent && t3.message == e2) || ui.notifications.active.find((t3) => t3.hasClass("permanent") && t3[0].innerText === e2);
  var l2;
  s2 && ((l2 = s2).fadeOut ? (l2.fadeOut(66, () => l2.remove()), ui.notifications.active = ui.notifications.active.filter((e3) => e3 != l2), ui.notifications.fetch()) : ui.notifications.queue = ui.notifications.queue.filter((e3) => e3 != l2)), ui.notifications.info(game.i18n.format("FFD20.Migration.End", { version: game.system.version })), console.log("System Migration completed."), ffd20.migrations.isMigrating = false, callOldNamespaceHookAll("ffd20.migrationFinished", "ffd20MigrationFinished"), Hooks.callAll("ffd20MigrationFinished");
}, migrateCompendium = async function(e2) {
  const t2 = e2.metadata.type;
  if (!["Actor", "Item", "Scene"].includes(t2))
    return;
  await e2.migrate();
  const s2 = await e2.getDocuments();
  console.log(`Migrating ${t2} documents in Compendium ${e2.collection}`);
  const l2 = [];
  for (const c2 of s2)
    try {
      let e3 = null;
      "Item" === t2 ? e3 = migrateItemData(c2.toObject()) : "Actor" === t2 ? e3 = migrateActorData(c2.toObject()) : "Scene" === t2 && (e3 = await migrateSceneData(c2.toObject())), expandObject(e3), e3._id = c2.id, l2.push(e3);
    } catch (s3) {
      console.error(`Error migrating ${t2} document ${c2.name} in Compendium ${e2.collection}`, s3);
    }
  try {
    "Item" === t2 ? await Item.updateDocuments(l2, { pack: e2.collection }) : "Actor" === t2 ? await Actor.updateDocuments(l2, { pack: e2.collection }) : "Scene" === t2 && await Scene.updateDocuments(l2, { pack: e2.collection });
  } catch (t3) {
    console.error(`Error migrating Compendium ${e2.collection}`, t3);
  }
  console.log(`Migrated all ${t2} documents from Compendium ${e2.collection}`);
}, _migrateWorldSettings = async function() {
  const e2 = game.settings.get("ffd20", "experienceRate");
  if ("" !== e2 && null != e2) {
    const t3 = game.settings.get("ffd20", "experienceConfig") || ExperienceConfig.defaultSettings;
    t3.track = e2, await game.settings.set("ffd20", "experienceConfig", t3), void 0 !== game.settings.settings.get("ffd20", "experienceRate") && game.settings.settings.delete("ffd20.experienceRate");
  }
  const t2 = game.settings.get("ffd20", "tooltipWorldConfig");
  void 0 !== t2.hideActorName && (t2.hideActorNameByDisposition, t2.hideActorName, game.settings.set("ffd20", "tooltipWorldConfig", t2));
}, migrateActorData = function(e2, t2) {
  if ("basic" === e2.type)
    return {};
  const s2 = {}, l2 = t2?.isLinked ?? true;
  if (_migrateCharacterLevel(e2, s2, l2), _migrateActorEncumbrance(e2, s2), _migrateActorNoteArrays(e2, s2), _migrateActorSpeed(e2, s2, l2), _migrateSpellDivineFocus(e2, s2), _migrateActorConcentration(e2, s2), _migrateActorSpellbookCL(e2, s2), _migrateActorSpellbookSlots(e2, s2, l2), _migrateActorConcentration(e2, s2), _migrateActorBaseStats(e2, s2), _migrateUnusedActorCreatureType(e2, s2), _migrateActorSpellbookDCFormula(e2, s2, l2), _migrateActorHPAbility(e2, s2), _migrateActorCR(e2, s2, l2), _migrateAttackAbility(e2, s2, l2), _migrateActorDefenseAbility(e2, s2), _migrateActorTokenVision(e2, s2), _migrateActorSpellbookUsage(e2, s2), _migrateActorNullValues(e2, s2), _migrateActorSpellbookDomainSlots(e2, s2), _migrateActorStatures(e2, s2), _migrateActorInitAbility(e2, s2), _migrateActorChangeRevamp(e2, s2), _migrateActorCMBRevamp(e2, s2), _migrateActorConditions(e2, s2), _migrateActorSkillRanks(e2, s2, l2), _migrateCarryBonus(e2, s2, l2), _migrateBuggedValues(e2, s2), _migrateSpellbookUsage(e2, s2), _migrateActorHP(e2, s2), _migrateActorSenses(e2, s2, l2, t2), _migrateActorSkillJournals(e2, s2), !e2.items)
    return s2;
  const c2 = e2.items.reduce((t3, s3) => {
    const l3 = s3 instanceof CONFIG.Item.documentClass ? s3.toObject() : s3, c3 = migrateItemData(l3, e2);
    return foundry.utils.isEmpty(c3) || (c3._id = l3._id, t3.push(expandObject(c3))), t3;
  }, []);
  return c2.length > 0 && (s2.items = c2), s2;
}, migrateItemData = function(e2, t2 = null, s2 = 0) {
  const l2 = {};
  null == e2.system && null != e2.data && ((e2 = deepClone(e2)).system = e2.data, delete e2.data), _migrateItemArrayTypes(e2, l2), _migrateItemSpellUses(e2, l2), _migrateFlagsArrayToObject(e2, l2), _migrateWeaponImprovised(e2, l2), _migrateSpellDescription(e2, l2), _migrateClassDynamics(e2, l2), _migrateClassType(e2, l2), _migrateWeaponCategories(e2, l2), _migrateEquipmentCategories(e2, l2), _migrateItemSize(e2, l2), _migrateAbilityTypes(e2, l2), _migrateClassLevels(e2, l2), _migrateSavingThrowTypes(e2, l2), _migrateCR(e2, l2), _migrateItemChanges(e2, l2), _migrateTemplateSize(e2, l2), _migrateEquipmentSize(e2, l2), _migrateTags(e2, l2), _migrateSpellCosts(e2, l2), _migrateLootEquip(e2, l2), _migrateUnchainedActionEconomy(e2, l2), _migrateItemRange(e2, l2), _migrateWeaponData(e2, l2), _migrateItemLinks(e2, l2), _migrateClassAssociations(e2, l2), _migrateProficiencies(e2, l2), _migrateItemNotes(e2, l2), _migrateSpellData(e2, l2), _migrateItemActions(e2, l2, t2), _migrateItemChargeCost(e2, l2), _migrateItemWeight(e2, l2), _migrateItemHealth(e2, l2);
  const c2 = e2.system.actions instanceof Array && e2.system.actions.length > 0 ? e2.system.actions : l2["system.actions"];
  if (c2 instanceof Array) {
    const t3 = [];
    for (const s3 of c2)
      t3.push(migrateItemActionData(s3, e2));
    l2["system.actions"] = t3.filter(filterItemActions);
  }
  return e2.system?.inventoryItems instanceof Array && (l2["system.inventoryItems"] = e2.system.inventoryItems.map((e3) => {
    const l3 = mergeObject(e3, migrateItemData(e3, t2, s2 + 1), { inplace: false, performDeletions: true });
    return null != l3.data && (l3.system = mergeObject(l3.data, l3.system), delete l3.data), l3;
  })), l2;
}, migrateItemActionData = function(e2, t2) {
  return e2 = foundry.utils.mergeObject(ffd20.components.ItemAction.defaultData, e2), _migrateActionDamageType(e2), _migrateActionConditionals(e2), _migrateActionEnhOverride(e2), _migrateActionPrimaryAttack(e2, t2), _migrateActionChargeUsage(e2), e2;
}, migrateSceneData = async function(e2) {
  const t2 = [];
  for (const s2 of e2.tokens) {
    const e3 = deepClone(s2);
    if (!e3.actorId || e3.actorLink)
      e3.actorData = {};
    else if (game.actors.has(e3.actorId)) {
      if (!e3.actorLink) {
        const t3 = foundry.utils.mergeObject(game.actors.get(e3.actorId).toObject(), e3.actorData, { inplace: false }), l2 = migrateActorData(t3, s2);
        ["items", "effects"].forEach((e4) => {
          if (!l2[e4]?.length)
            return;
          const s3 = new Map(l2[e4].map((e5) => [e5._id, e5]));
          t3[e4].forEach((e5) => {
            const t4 = s3.get(e5._id);
            t4 && foundry.utils.mergeObject(e5, t4);
          }), delete l2[e4];
        }), foundry.utils.mergeObject(e3.actorData, l2);
      }
    } else
      e3.actorId = null, e3.actorData = {};
    t2.push(e3);
  }
  return { tokens: t2 };
}, _migrateCharacterLevel = function(e2, t2, s2) {
  const l2 = ["details.level.value", "details.level.min", "details.level.max", "details.mythicTier"];
  if (s2)
    for (const s3 of l2) {
      null == getProperty(e2.system, s3) && (t2["system." + s3] = 0);
    }
}, _migrateActorEncumbrance = function(e2, t2, s2) {
  const l2 = { "system.attributes.encumbrance.level": "attributes.encumbrance.-=level", "system.attributes.encumbrance.levels.light": "attributes.encumbrance.levels.-=light", "system.attributes.encumbrance.levels.medium": "attributes.encumbrance.levels.-=medium", "system.attributes.encumbrance.levels.heavy": "attributes.encumbrance.levels.-=heavy", "system.attributes.encumbrance.levels.carry": "attributes.encumbrance.levels.-=carry", "system.attributes.encumbrance.levels.drag": "attributes.encumbrance.levels.-=drag", "system.attributes.encumbrance.carriedWeight": "attributes.encumbrance.-=carriedWeight" };
  for (const [s3, c2] of Object.entries(l2)) {
    void 0 !== getProperty(e2, s3) && (t2["system." + c2] = null);
  }
}, _migrateFlagsArrayToObject = function(e2, t2) {
  const s2 = e2.system.flags;
  if (!s2)
    return;
  const l2 = s2.boolean, c2 = s2.dictionary;
  Array.isArray(l2) && (t2["system.flags.boolean"] = l2.reduce((e3, t3) => (e3[t3] = true, e3), {})), Array.isArray(c2) && (t2["system.flags.dictionary"] = c2.reduce((e3, [t3, s3]) => (e3[t3] = s3, e3), {}));
}, _migrateActorNoteArrays = function(e2, t2) {
  const s2 = ["system.attributes.acNotes", "system.attributes.cmdNotes", "system.attributes.srNotes"];
  for (const l2 of s2) {
    const s3 = getProperty(e2, l2);
    hasProperty(e2, l2) && s3 instanceof Array && (t2[l2] = s3.join("\n"));
  }
}, _migrateActorSpeed = function(e2, t2, s2) {
  const l2 = ["attributes.speed.land", "attributes.speed.climb", "attributes.speed.swim", "attributes.speed.fly", "attributes.speed.burrow"];
  for (const c2 of l2) {
    let l3 = getProperty(e2.system, c2);
    (s2 || void 0 !== l3) && ("string" == typeof l3 && (l3 = parseInt(l3)), "number" == typeof l3 ? t2[`system.${c2}.base`] = l3 : null === l3 ? t2[`system.${c2}.base`] = 0 : void 0 !== l3?.total && (t2[`system.${c2}.-=total`] = null), "attributes.speed.fly" === c2 && void 0 === getProperty(e2.system, `${c2}.maneuverability`) && (t2[`system.${c2}.maneuverability`] = "average"));
  }
}, _migrateActorSpellbookSlots = function(e2, t2, s2) {
  for (const l2 of Object.keys(getProperty(e2, "system.attributes.spells.spellbooks") || {})) {
    null == getProperty(e2, `system.attributes.spells.spellbooks.${l2}.autoSpellLevels`) && (t2[`system.attributes.spells.spellbooks.${l2}.autoSpellLevels`] = true);
    for (let c2 = 0; c2 < 10; c2++) {
      const u2 = `system.attributes.spells.spellbooks.${l2}.spells.spell${c2}.base`, m2 = `system.attributes.spells.spellbooks.${l2}.spells.spell${c2}.max`, d2 = getProperty(e2, u2), h2 = getProperty(e2, m2);
      if (void 0 === d2) {
        if (!s2)
          continue;
        "number" == typeof h2 && h2 > 0 && (t2[u2] = h2.toString());
      } else {
        const e3 = parseInt(d2);
        e3 > 0 ? e3 !== d2 && (t2[u2] = e3) : t2[`system.attributes.spells.spellbooks.${l2}.spells.spell${c2}.-=base`] = null;
      }
    }
  }
}, _migrateActorBaseStats = function(e2, t2) {
  const s2 = ["system.attributes.hp.base", "system.attributes.hd.base", "system.attributes.mp.base", "system.attributes.savingThrows.fort.value", "system.attributes.savingThrows.ref.value", "system.attributes.savingThrows.will.value"];
  for (const l2 of s2)
    if (("system.attributes.hp.base" !== l2 || (getProperty(e2, "items") || []).filter((e3) => "class" === e3.type).length) && ("system.attributes.mp.base" !== l2 || (getProperty(e2, "items") || []).filter((e3) => "class" === e3.type).length) && void 0 !== getProperty(e2, l2)) {
      const e3 = l2.split(".");
      e3[e3.length - 1] = `-=${e3[e3.length - 1]}`, t2[e3.join(".")] = null;
    }
}, _migrateUnusedActorCreatureType = function(e2, t2) {
  null != getProperty(e2, "system.attributes.creatureType") && (t2["system.attributes.-=creatureType"] = null);
}, _migrateActorSpellbookDCFormula = function(e2, t2, s2) {
  const l2 = Object.keys(getProperty(e2, "system.attributes.spells.spellbooks") || {});
  for (const c2 of l2) {
    const l3 = `system.attributes.spells.spellbooks.${c2}.baseDCFormula`, u2 = getProperty(e2, l3);
    (s2 || void 0 !== u2) && (null == u2 && (t2[l3] = "10 + @sl + @ablMod"));
  }
}, _migrateActorSpellbookCL = function(e2, t2) {
  const s2 = Object.keys(getProperty(e2, "system.attributes.spells.spellbooks") || {});
  for (const l2 of s2) {
    const s3 = `system.attributes.spells.spellbooks.${l2}.cl`, c2 = parseInt(getProperty(e2, s3 + ".base")), u2 = getProperty(e2, s3 + ".formula");
    c2 > 0 && (u2.length > 0 ? t2[`${s3}.formula`] = u2 + " + " + c2 : t2[`${s3}.formula`] = u2 + c2, t2[`${s3}.base`] = 0);
  }
}, _migrateActorConcentration = function(e2, t2) {
  const s2 = Object.keys(getProperty(e2, "system.attributes.spells.spellbooks") || {});
  for (const l2 of s2) {
    const s3 = `system.attributes.spells.spellbooks.${l2}`, c2 = getProperty(e2, `${s3}.concentration`), u2 = "string" == typeof c2;
    if ((Number.isFinite(c2) || u2) && (t2[`${s3}.-=concentration`] = null), u2) {
      const l3 = `${s3}.concentrationFormula`, u3 = [c2];
      u3.push(getProperty(e2, l3) || ""), t2[l3] = u3.filter((e3) => 0 !== e3 && e3?.toString().trim().length).join(" + ");
    }
  }
}, _migrateActorHPAbility = function(e2, t2) {
  void 0 === getProperty(e2, "system.attributes.hpAbility") && (t2["system.attributes.hpAbility"] = "con"), void 0 === getProperty(e2, "system.attributes.savingThrows.fort.ability") && (t2["system.attributes.savingThrows.fort.ability"] = "con"), void 0 === getProperty(e2, "system.attributes.savingThrows.ref.ability") && (t2["system.attributes.savingThrows.ref.ability"] = "dex"), void 0 === getProperty(e2, "system.attributes.savingThrows.will.ability") && (t2["system.attributes.savingThrows.will.ability"] = "wis");
}, _migrateItemArrayTypes = function(e2, t2) {
  const s2 = getProperty(e2, "system.conditionals");
  null == s2 || s2 instanceof Array || (t2["system.conditionals"] = []);
  const l2 = getProperty(e2, "system.contextNotes");
  null == l2 || l2 instanceof Array || (t2["system.contextNotes"] = l2 instanceof Object ? Object.values(l2) : []);
}, _migrateItemSpellUses = function(e2, t2) {
  if (void 0 === getProperty(e2.system, "preparation"))
    return;
  "number" != typeof getProperty(e2.system, "preparation.maxAmount") && (t2["system.preparation.maxAmount"] = 0);
}, _migrateWeaponImprovised = function(e2, t2) {
  if ("weapon" !== e2.type)
    return;
  "improv" === getProperty(e2.system, "weaponType") && (t2["system.weaponType"] = "misc", t2["system.properties.imp"] = true);
}, _migrateWeaponData = function(e2, t2) {
  if ("weapon" === e2.type && void 0 !== getProperty(e2.system, "weaponData")) {
    const s2 = e2.system.weaponSubtype, l2 = "ranged" !== s2, c2 = getProperty(e2, "system.ability.attack");
    null != c2 && "" !== c2 || (t2["system.ability.attack"] = l2 ? "str" : "dex");
    const u2 = getProperty(e2, "system.ability.damage");
    if (null != u2 && "" !== u2 || (t2["system.ability.damage"] = "str"), null == getProperty(e2, "system.ability.damageMult") && (t2["system.ability.damageMult"] = "2h" === s2 ? 1.5 : 1), null == getProperty(e2, "system.attackType") && (t2["system.attackType"] = "weapon"), t2["system.actionType"] = l2 ? "mwak" : "rwak", t2["system.activation.type"] = "attack", t2["system.duration.units"] = "inst", t2["system.formulaicAttacks.count.formula"] = "ceil(@attributes.bab.total / 5) - 1", t2["system.formulaicAttacks.bonus.formula"] = "@formulaicAttack * -5", t2["system.ability.critRange"] = getProperty(e2, "system.weaponData.critRange") ?? 20, t2["system.ability.critMult"] = getProperty(e2, "system.weaponData.critMult") ?? 2, l2) {
      const s3 = getProperty(e2, "system.properties.rch") ?? false;
      t2["system.range.units"] = s3 ? "reach" : "melee";
    } else
      t2["system.range.units"] = "ft";
    const m2 = getProperty(e2, "system.weaponData.range") ?? null;
    void 0 !== m2 && (t2["system.range.value"] = m2);
    const d2 = getProperty(e2, "system.weaponData.maxRangeIncrements");
    void 0 !== d2 && (t2["system.range.maxIncrements"] = d2);
    const h2 = getProperty(e2, "system.weaponData.damageRoll")?.trim(), p2 = getProperty(e2, "system.weaponData.damageType")?.trim(), g2 = getProperty(e2, "system.weaponData.damageFormula")?.trim();
    if (void 0 !== h2) {
      let e3 = h2 || "1d4", s3 = 1, l3 = 4;
      e3.match(/^([0-9]+)d([0-9]+)$/) && (s3 = parseInt(RegExp.$1), l3 = parseInt(RegExp.$2), e3 = `sizeRoll(${s3}, ${l3}, @size)`), null != g2 && g2.length && (e3 = `${e3} + ${g2}`), t2["system.damage.parts"] = [[e3, p2 || ""]];
    }
    t2["system.attackBonus"] = getProperty(e2, "system.weaponData.attackFormula")?.trim() ?? "", t2["system.showInQuickbar"] = false, t2["system.-=weaponData"] = null;
  }
}, _migrateSpellDescription = function(e2, t2) {
  if ("spell" !== e2.type)
    return;
  if (null != getProperty(e2, "system.shortDescription"))
    return;
  const s2 = getProperty(e2, "system.description.value");
  if ("string" != typeof s2)
    return;
  const l2 = $(`<div>${s2}</div>`), c2 = l2.find("h2").next();
  1 === c2.length ? t2["system.shortDescription"] = c2.prop("outerHTML") : t2["system.shortDescription"] = l2.prop("innerHTML");
}, _migrateSpellDivineFocus = function(e2, t2) {
  if ("spell" !== e2.type)
    return;
  const s2 = getProperty(e2, "system.components.divineFocus");
  "boolean" == typeof s2 && (t2["system.components.divineFocus"] = true === s2 ? 1 : 0);
}, _migrateClassDynamics = function(e2, t2) {
  if ("class" !== e2.type)
    return;
  "number" == typeof getProperty(e2, "system.bab") && (t2["system.bab"] = "low");
  const s2 = ["system.savingThrows.fort.value", "system.savingThrows.ref.value", "system.savingThrows.will.value"];
  for (const l2 of s2) {
    "number" == typeof getProperty(e2, l2) && (t2[l2] = "low");
  }
}, _migrateClassType = function(e2, t2) {
  "class" === e2.type && null == getProperty(e2, "system.classType") && (t2["system.classType"] = "base");
}, _migrateWeaponCategories = function(e2, t2) {
  if ("weapon" !== e2.type)
    return;
  const s2 = getProperty(e2, "system.weaponType");
  "misc" === s2 ? (t2["system.weaponType"] = "misc", t2["system.weaponSubtype"] = "other") : "splash" === s2 && (t2["system.weaponType"] = "misc", t2["system.weaponSubtype"] = "splash");
  const l2 = ["simple", "martial", "exotic", "chef", "power"].includes(s2);
  l2 && null == getProperty(e2, "system.weaponSubtype") && (t2["system.weaponSubtype"] = "1h");
  const c2 = getProperty(e2, "system.properties.lgt");
  null != c2 && (t2["system.properties.-=lgt"] = null, true === c2 && l2 && (t2["system.weaponSubtype"] = "light"));
  const u2 = getProperty(e2, "system.properties.two");
  null != u2 && (t2["system.properties.-=two"] = null, true === u2 && l2 && (t2["system.weaponSubtype"] = "2h"));
  const m2 = getProperty(e2, "system.weaponData.isMelee");
  null != m2 && (t2["system.weaponData.-=isMelee"] = null, false === m2 && l2 && (t2["system.weaponSubtype"] = "ranged"));
}, _migrateEquipmentCategories = function(e2, t2) {
  if ("equipment" !== e2.type)
    return;
  const s2 = getProperty(e2, "system.armor.type");
  null != s2 && ("clothing" === s2 ? (t2["system.equipmentType"] = "misc", t2["system.equipmentSubtype"] = "clothing") : "shield" === s2 ? (t2["system.equipmentType"] = "shield", t2["system.equipmentSubtype"] = "lightShield", t2["system.slot"] = "shield") : "misc" === s2 ? (t2["system.equipmentType"] = "misc", t2["system.equipmentSubtype"] = "wondrous") : ["light", "medium", "heavy"].includes(s2) && (t2["system.equipmentType"] = "armor", t2["system.equipmentSubtype"] = `${s2}Armor`), t2["system.armor.-=type"] = null);
}, _migrateItemSize = function(e2, t2, s2) {
  if ("weapon" === e2.type) {
    const s3 = getProperty(e2, "system.weaponData.size");
    if (s3)
      return t2["system.size"] = s3, void (t2["system.weaponData.-=size"] = null);
  }
  const l2 = getProperty(e2, "system.size");
  ["spell", "class", "buff", "feat"].includes(e2.type) ? void 0 !== l2 && (t2["system.-=size"] = null) : void 0 === l2 && (t2["system.size"] = "med");
}, _migrateAbilityTypes = function(e2, t2) {
  "feat" === e2.type && (null == getProperty(e2, "system.abilityType") && (t2["system.abilityType"] = "none"), "n/a" === getProperty(e2, "system.abilityType") && (t2["system.abilityType"] = "none"));
}, _migrateClassLevels = function(e2, t2) {
  const s2 = getProperty(e2, "system.levels");
  "number" == typeof s2 && null == getProperty(e2, "system.level") && (t2["system.level"] = s2, t2["system.-=levels"] = null);
}, _migrateSavingThrowTypes = function(e2, t2) {
  if (null == getProperty(e2, "system.save.type") && "string" == typeof getProperty(e2, "system.save.description")) {
    const s2 = getProperty(e2, "system.save.description");
    s2.match(/REF/i) ? t2["system.save.type"] = "ref" : s2.match(/FORT/i) ? t2["system.save.type"] = "fort" : s2.match(/WILL/i) && (t2["system.save.type"] = "will");
  }
}, _migrateCR = function(e2, t2) {
  const s2 = getProperty(e2, "system.crOffset");
  "number" == typeof s2 && (t2["system.crOffset"] = s2.toString());
}, _migrateItemChanges = function(e2, t2) {
  const s2 = getProperty(e2, "system.changes");
  if (null != s2 && s2 instanceof Array) {
    const e3 = [];
    for (const t3 of s2)
      if (t3 instanceof Array) {
        const s3 = new ItemChange({ formula: t3[0], target: t3[1], subTarget: t3[2], modifier: t3[3], value: t3[4] }, null);
        e3.push(s3.data);
      } else {
        const s3 = new ItemChange(t3, null);
        e3.push(s3.data);
      }
    0 !== e3.length && 0 !== s2.length && (t2["system.changes"] = e3);
  }
  const l2 = getProperty(e2, "system.contextNotes");
  if (null != l2 && l2 instanceof Array) {
    const e3 = [];
    for (const t3 of l2)
      t3 instanceof Array ? e3.push(foundry.utils.mergeObject(ItemFFD20.defaultContextNote, { text: t3[0], subTarget: t3[2] }, { inplace: false })) : e3.push(t3), "spell" === t3.target && "effect" === t3.subTarget && (t3.subTarget = "spellEffect");
    0 !== e3.length && 0 !== l2.length && (t2["system.contextNotes"] = e3);
  }
}, _migrateTemplateSize = function(e2, t2) {
  const s2 = getProperty(e2, "system.measureTemplate.size");
  "number" == typeof s2 && (t2["system.measureTemplate.size"] = s2.toString());
}, _migrateEquipmentSize = function(e2, t2) {
  if ("equipment" !== e2.type)
    return;
  getProperty(e2, "system.size") || (t2["system.size"] = "med");
}, _migrateItemWeight = function(e2, t2) {
  const s2 = getProperty(e2, "system.baseWeight"), l2 = getProperty(e2, "system.weight");
  game.system.template.Item[e2.type].templates.includes("physicalItem") ? (Number.isFinite(l2) ? t2["system.weight.value"] = l2 : null != l2 && "object" == typeof l2 || (t2["system.weight.value"] = 0), void 0 !== s2 && (Number.isFinite(s2) && s2 > 0 && (t2["system.weight.value"] = s2), t2["system.-=baseWeight"] = null)) : void 0 !== l2 && (t2["system.-=weight"] = null);
}, _migrateItemHealth = function(e2, t2) {
  const s2 = getProperty(e2, "system.hp");
  void 0 !== s2 && ("string" == typeof s2.max && (t2["system.hp.max"] = parseInt(s2.max)), "string" == typeof s2.value && (t2["system.hp.value"] = parseInt(s2.value)));
}, _migrateTags = function(e2, t2) {
  if (!["class"].includes(e2.type))
    return;
  !getProperty(e2, "system.tag") && e2.name && (t2["system.tag"] = createTag(e2.name));
}, _migrateSpellCosts = function(e2, t2) {
  if ("spell" !== e2.type)
    return;
  null == getProperty(e2, "system.spellPoints.cost") && (t2["system.spellPoints.cost"] = "1 + @sl");
  null == getProperty(e2, "system.slotCost") && (t2["system.slotCost"] = 1);
  const s2 = e2.system.preparation?.autoDeductCharges;
  void 0 !== s2 && (false === s2 && (t2["system.uses.autoDeductChargesCost"] = "0"), t2["system.preparation.-=autoDeductCharges"] = null);
}, _migrateLootEquip = function(e2, t2) {
  "loot" !== e2.type || hasProperty(e2, "system.equipped") || (t2["system.equipped"] = false);
}, _migrateUnchainedActionEconomy = function(e2, t2) {
  const s2 = getProperty(e2, "system.activation"), l2 = getProperty(e2, "system.unchainedAction.activation");
  !s2 || s2 && !s2.type || l2 && l2.type || (null != CONFIG.FFD20.abilityActivationTypes_unchained[s2.type] && (t2["system.unchainedAction.activation.cost"] = s2.cost, t2["system.unchainedAction.activation.type"] = s2.type), ["swift", "attack"].includes(s2.type) && (t2["system.unchainedAction.activation.cost"] = 1, t2["system.unchainedAction.activation.type"] = "attack" === s2.type ? "attack" : "action"), "standard" === s2.type && (t2["system.unchainedAction.activation.cost"] = 2, t2["system.unchainedAction.activation.type"] = "action"), "full" !== s2.type && "round" !== s2.type || (t2["system.unchainedAction.activation.cost"] = 3 * (s2.cost || 1), t2["system.unchainedAction.activation.type"] = "action"), "immediate" === s2.type && (t2["system.unchainedAction.activation.type"] = "reaction", t2["system.unchainedAction.activation.cost"] = 1));
}, _migrateItemRange = function(e2, t2) {
  void 0 === getProperty(e2, "system.range.maxIncrements") && (t2["system.range.maxIncrements"] = 1);
}, _migrateItemLinks = function(e2, t2) {
  ["attack", "consumable", "equipment"].includes(e2.type) && !hasProperty(e2, "system.links.charges") && (t2["system.links.charges"] = []);
}, _migrateClassAssociations = function(e2, t2) {
  if ("class" !== e2.type)
    return;
  const s2 = e2.system?.links?.classAssociations;
  if (void 0 === s2)
    return;
  let l2 = false;
  const c2 = deepClone(s2);
  for (const e3 of c2)
    void 0 !== e3.hiddenLinks && (delete e3.hiddenLinks, l2 = true);
  l2 && (t2["system.links.classAssociations"] = c2);
}, _migrateProficiencies = function(e2, t2) {
  if (["feat", "class", "race"].includes(e2.type))
    for (const s2 of ["armorProf", "weaponProf"])
      hasProperty(e2, `system.${s2}`) || (t2[`system.${s2}`] = { value: [], custom: "" });
}, _migrateItemNotes = function(e2, t2) {
  const s2 = ["system.attackNotes", "system.effectNotes"];
  for (const l2 of s2) {
    const s3 = getProperty(e2, l2);
    !hasProperty(e2, l2) || s3 instanceof Array || (t2[l2] = [], "string" == typeof s3 && s3.length > 0 && (t2[l2] = s3.trim().split(/[\n\r]/)));
  }
}, _migrateSpellData = function(e2, t2) {
  "spell" === e2.type && void 0 !== e2.system.description?.value && (t2["system.description.-=value"] = null);
}, _migrateItemActions = function(e2, t2, s2 = null) {
  const l2 = !!e2.system.actionType || !!e2.system.activation?.type || !!e2.system.measureTemplate?.type, c2 = e2.system.actions instanceof Array && e2.system.actions.length > 0;
  if (!l2 && "spell" !== e2.type || c2)
    return;
  const u2 = ffd20.components.ItemAction.defaultData, m2 = ["_id", "name", "img"];
  for (const t3 of Object.keys(u2))
    m2.includes(t3) || null != e2.system[t3] && (u2[t3] = deepClone(e2.system[t3]));
  if (["weapon", "attack"].includes(e2.type) ? u2.name = game.i18n.localize("FFD20.Attack") : u2.name = game.i18n.localize("FFD20.Use"), u2.img = e2.img, u2.description = "", "spell" === e2.type && (u2.activation.type ||= "standard", u2.duration.value = e2.system.spellDuration, null != s2)) {
    const t3 = e2.system.spellbook, l3 = s2.system.attributes?.spells?.spellbooks?.[t3];
    if (l3.spellPoints?.useSystem) {
      const t4 = e2.system.spellPoints?.cost;
      t4 && (u2.uses.autoDeductChargesCost = t4);
    }
  }
  t2["system.attackNotes"] = [], t2["system.effectNotes"] = [], t2["system.actions"] = [u2];
}, _migrateActionChargeUsage = function(e2, t2) {
  void 0 !== e2.uses?.autoDeductCharges && (false === e2.uses.autoDeductCharges ? e2.uses.autoDeductChargesCost = "0" : "1" === e2.uses.autoDeductChargesCost && (e2.uses.autoDeductChargesCost = ""), delete e2.uses.autoDeductCharges);
}, _migrateItemChargeCost = function(e2, t2) {
  const s2 = e2.system.uses?.autoDeductCharges;
  if (void 0 !== s2)
    false === s2 && (t2["system.uses.autoDeductChargesCost"] = "0"), t2["system.uses.-=autoDeductCharges"] = null;
  else if (0 === e2.system.level && void 0 === e2.system.uses?.autoDeductChargesCost) {
    const s3 = e2.system.actions?.[0];
    true === s3?.uses.autoDeductCharges && void 0 === t2["system.uses.autoDeductChargesCost"] && (t2["system.uses.autoDeductChargesCost"] = "0");
  }
}, _migrateActionDamageType = function(e2, t2) {
  const s2 = ["damage.parts", "damage.critParts", "damage.nonCritParts"];
  for (const t3 of s2) {
    const s3 = getProperty(e2, t3);
    for (const e3 of s3) {
      const t4 = e3[1];
      if ("string" == typeof t4) {
        const s4 = ffd20.components.ItemAction.defaultDamageType;
        s4.values = _Action_ConvertDamageType(t4), 0 === s4.values.length && (s4.custom = t4), e3[1] = s4;
      } else if (t4 instanceof Array) {
        const s4 = ffd20.components.ItemAction.defaultDamageType;
        s4.values = t4, e3[1] = s4;
      }
    }
  }
}, _migrateActionConditionals = function(e2, t2) {
  for (const t3 of e2.conditionals ?? []) {
    t3._id || (t3._id = randomID(16));
    for (const e3 of t3.modifiers) {
      let t4;
      if (e3._id || (e3._id = randomID(16)), (t4 = e3.subTarget.match(/^attack\.([0-9]+)/)) && (e3.subTarget = `attack_${t4[1]}`), "damage" === e3.target && !e3.damageType) {
        const t5 = ffd20.components.ItemAction.defaultDamageType;
        t5.values = _Action_ConvertDamageType(e3.type), 0 === t5.values.length && (t5.custom = e3.type), e3.damageType = t5, e3.type = "";
      }
    }
  }
}, _migrateActionEnhOverride = function(e2, t2) {
  "object" != typeof e2.enh && (e2.enh = { value: e2.enh ?? null }), (0 == e2.enh.override || null !== e2.enh.value && "number" != typeof e2.enh.value) && (e2.enh.value = null), delete e2.enh.override;
}, _migrateActionPrimaryAttack = function(e2, t2) {
  void 0 === e2.naturalAttack?.primaryAttack && setProperty(e2, "naturalAttack.primaryAttack", t2.system.primaryAttack);
}, _migrateActorCR = function(e2, t2, s2) {
  const l2 = getProperty(e2, "system.details.cr");
  (s2 || void 0 !== l2) && ("number" == typeof l2 ? t2["system.details.cr.base"] = l2 : null == l2 && (t2["system.details.cr.base"] = 1), void 0 !== getProperty(e2, "system.details.cr.total") && (t2["system.details.cr.-=total"] = null));
}, _migrateAttackAbility = function(e2, t2, s2) {
  void 0 === getProperty(e2, "system.attributes.cmbAbility") && s2 && (t2["system.attributes.cmbAbility"] = "str");
  void 0 === getProperty(e2, "system.attributes.attack.meleeAbility") && s2 && (t2["system.attributes.attack.meleeAbility"] = "str");
  void 0 === getProperty(e2, "system.attributes.attack.rangedAbility") && s2 && (t2["system.attributes.attack.rangedAbility"] = "dex");
}, _migrateActorTokenVision = function(e2, t2) {
  const s2 = getProperty(e2, "system.attributes.vision");
  s2 && (t2["system.attributes.-=vision"] = null, t2["token.flags.ffd20.lowLightVision"] = s2.lowLight, getProperty(e2, "token.brightSight") || (t2["token.brightSight"] = s2.darkvision ?? 0));
}, _migrateActorSpellbookUsage = function(e2, t2, s2) {
  void 0 !== getProperty(e2, "system.attributes.spells.usedSpellbooks") && (t2["system.attributes.spells.-=usedSpellbooks"] = null);
}, _migrateActorNullValues = function(e2, t2) {
  const s2 = { "system.attributes.energyDrain": getProperty(e2, "system.attributes.energyDrain") };
  for (const [t3, l2] of Object.entries(getProperty(e2, "system.abilities") || {}))
    s2[`system.abilities.${t3}.damage`] = l2.damage, s2[`system.abilities.${t3}.drain`] = l2.drain, s2[`system.abilities.${t3}.penalty`] = l2.penalty;
  for (const [e3, l2] of Object.entries(s2))
    null === l2 && (t2[e3] = 0);
}, _migrateActorSpellbookDomainSlots = function(e2, t2) {
  const s2 = getProperty(e2, "system.attributes.spells.spellbooks") || {};
  for (const [e3, l2] of Object.entries(s2)) {
    if (void 0 !== l2.domainSlotValue)
      continue;
    t2[`system.attributes.spells.spellbooks.${e3}.domainSlotValue`] = 1;
  }
}, _migrateActorStatures = function(e2, t2) {
  void 0 === getProperty(e2, "system.traits.stature") && (t2["system.traits.stature"] = "tall");
}, _migrateActorDefenseAbility = function(e2, t2) {
  void 0 === getProperty(e2, "system.attributes.ac.normal.ability") && (t2["system.attributes.ac.normal.ability"] = "dex");
  void 0 === getProperty(e2, "system.attributes.ac.touch.ability") && (t2["system.attributes.ac.touch.ability"] = "dex");
  void 0 === getProperty(e2, "system.attributes.cmd.dexAbility") && (t2["system.attributes.cmd.dexAbility"] = "dex");
  void 0 === getProperty(e2, "system.attributes.cmd.strAbility") && (t2["system.attributes.cmd.strAbility"] = "str");
}, _migrateActorInitAbility = function(e2, t2) {
  void 0 === getProperty(e2, "system.attributes.init.ability") && (t2["system.attributes.init.ability"] = "dex");
}, _migrateActorCMBRevamp = function(e2, t2, s2) {
  void 0 !== getProperty(e2, "system.attributes.cmb.total") && (t2["system.attributes.cmb.-=total"] = null);
}, _migrateActorChangeRevamp = function(e2, t2) {
  Object.keys(getProperty(e2, "system.skills") ?? {}).forEach((s2) => {
    const l2 = `system.skills.${s2}.`;
    void 0 !== getProperty(e2, l2 + "changeBonus") && (t2[l2 + "-=changeBonus"] = null), Object.keys(getProperty(e2, `system.skills.${s2}.subSkills`) ?? {}).forEach((l3) => {
      const c2 = `system.skills.${s2}.subSkills.${l3}.`;
      void 0 !== getProperty(e2, c2 + "changeBonus") && (t2[c2 + "-=changeBonus"] = null);
    });
  });
  Object.entries({ "system.attributes.hp.max": "attributes.hp.-=max", "system.attributes.mp.max": "attributes.mp.-=max", "system.attributes.ac.normal.total": "attributes.ac.normal.-=total", "system.attributes.ac.touch.total": "attributes.ac.touch.-=total", "system.attributes.ac.flatFooted.total": "attributes.ac.flatFooted.-=total", "system.attributes.cmd.total": "attributes.cmd.-=total", "system.attributes.cmd.flatFootedTotal": "attributes.cmd.-=flatFootedTotal", "system.attributes.sr.total": "attributes.sr.-=total", "system.attributes.init.total": "attributes.init.-=total" }).forEach(([s2, l2]) => {
    void 0 !== getProperty(e2, s2) && (t2["system." + l2] = null);
  });
}, _migrateActorConditions = function(e2, t2) {
  {
    const s2 = getProperty(e2, "system.conditions.fear");
    void 0 !== s2 && (true === s2 && (t2["system.attributes.conditions.shaken"] = true), t2["system.conditions.-=fear"] = null);
    const l2 = getProperty(e2, "system.attributes.conditions.fear");
    void 0 !== l2 && (true === l2 && (t2["system.attributes.conditions.shaken"] = true), t2["system.attributes.conditions.-=fear"] = null);
  }
}, _migrateActorSkillRanks = function(e2, t2, s2) {
  const l2 = getProperty(e2, "system.skills");
  if (l2) {
    for (const [e3, c2] of Object.entries(l2))
      if (s2 || void 0 !== c2.rank) {
        Number.isFinite(c2.rank) || (t2[`system.skills.${e3}.rank`] = 0);
        for (const [l3, u2] of Object.entries(c2.subSkills ?? {}))
          (s2 || void 0 !== u2.rank) && (Number.isFinite(u2.rank) || (t2[`system.skills.${e3}.subSkills.${l3}.rank`] = 0));
      }
  }
}, _migrateCarryBonus = function(e2, t2, s2) {
  if (void 0 === getProperty(e2, "system.details.carryCapacity.bonus.user")) {
    let l2 = getProperty(e2, "system.abilities.str.carryBonus");
    (void 0 !== l2 || s2) && (l2 = l2 || 0, t2["system.details.carryCapacity.bonus.user"] = l2), t2["system.abilities.str.-=carryBonus"] = null;
  }
  if (void 0 === getProperty(e2, "system.details.carryCapacity.multiplier.user")) {
    let l2 = getProperty(e2, "system.abilities.str.carryMultiplier");
    (void 0 !== l2 || s2) && (l2 = l2 || 1, t2["system.details.carryCapacity.multiplier.user"] = l2 - 1), t2["system.abilities.str.-=carryMultiplier"] = null;
  }
}, _migrateBuggedValues = function(e2, t2, s2) {
  const l2 = ["system.details.xp.value", "system.currency.pgil", "system.currency.gil", "system.currency.sgil", "system.currency.cgil", "system.altCurrency.pgil", "system.altCurrency.gil", "system.altCurrency.sgil", "system.altCurrency.cgil"];
  for (const s3 of l2) {
    const l3 = getProperty(e2, s3), c2 = parseInt(l3 ?? 0);
    l3 !== c2 && (t2[s3] = c2);
  }
}, _migrateSpellbookUsage = function(e2, t2, s2) {
  const l2 = e2.items.filter((e3) => "spell" === e3.type).reduce((e3, t3) => t3.system.spellbook ? (e3.includes(t3.system.spellbook) || e3.push(t3.system.spellbook), e3) : e3, []);
  for (const s3 of l2) {
    const l3 = `system.attributes.spells.spellbooks.${s3}.inUse`;
    true !== getProperty(e2, l3) && (t2[l3] = true);
  }
}, _migrateActorHP = function(e2, t2, s2) {
  for (const s3 of ["system.attributes.hp", "system.attributes.wounds", "system.attributes.vigor", "system.attributes.mp"])
    if (null == getProperty(e2, `${s3}.offset`)) {
      const l2 = getProperty(e2, `${s3}.max`) ?? 0, c2 = getProperty(e2, `${s3}.value`) ?? 0;
      t2[`${s3}.offset`] = c2 - l2;
    }
}, _migrateActorSenses = function(e2, t2, s2, l2) {
  const c2 = getProperty(e2, "system.traits.senses");
  if ("string" == typeof c2) {
    const s3 = l2 ?? e2.prototypeToken;
    t2["system.traits.senses"] = { dv: s3.brightSight, ts: 0, bs: 0, bse: 0, ll: { enabled: s3.flags?.ffd20?.lowLightVision, multiplier: { dim: s3.flags?.ffd20?.lowLightVisionMultiplier ?? 2, bright: s3.flags?.ffd20?.lowLightVisionMultiplierBright ?? 2 } }, sid: false, tr: false, si: false, sc: false, custom: c2 };
  }
}, _migrateActorSkillJournals = function(e2, t2, s2) {
  const l2 = /^[a-zA-Z0-9]+$/;
  for (const [s3, c2] of Object.entries(e2.system.skills ?? {})) {
    for (const [e3, u2] of Object.entries(c2.subSkills ?? {}))
      u2.journal?.match(l2) && (t2[`system.skills.${s3}.subSkills.${e3}.journal`] = `JournalEntry.${u2.journal}`);
    c2.journal?.match(l2) && (t2[`system.skills.${s3}.journal`] = `JournalEntry.${c2.journal}`);
  }
}, _Action_ConvertDamageType = function(e2) {
  const t2 = [{ tests: ["b", "blunt", "bludgeoning"], result: "bludgeoning" }, { tests: ["p", "pierce", "piercing"], result: "piercing" }, { tests: ["s", "slash", "slashing"], result: "slashing" }, { tests: ["f", "fire"], result: "fire" }, { tests: ["ice", "i"], result: "ice" }, { tests: ["e", "l", "lightning", "electricity", "electrical"], result: "lightning" }, { tests: ["wind"], result: "wind" }, { tests: ["earth"], result: "earth" }, { tests: ["water"], result: "water" }, { tests: ["force"], result: "force" }, { tests: ["dark", "neg", "negative"], result: "dark" }, { tests: ["light", "pos", "positive"], result: "light" }, { tests: ["u", "untyped", "untype"], result: "untyped" }, { tests: ["n", "nonelemental", "non"], result: "nonelemental" }], s2 = e2.split(/(?:\s*\/\s*|\s+and\s+|\s+or\s+)/i).map((e3) => e3.toLowerCase()), l2 = [];
  for (const e3 of t2)
    for (const t3 of e3.tests)
      s2.includes(t3) && l2.push(e3.result);
  return l2.length > 0 ? l2 : [];
}, filterItemActions = function(e2) {
  return !!e2.activation?.type || !!e2.actionType;
}, zs = Object.freeze(Object.defineProperty({ __proto__: null, isMigrating: false, migrateWorld, migrateCompendium, migrateActorData, migrateItemData, migrateItemActionData, migrateSceneData, filterItemActions }, Symbol.toStringTag, { value: "Module" })), createItemMacro = async function(e2, t2) {
  const s2 = await fromUuid(e2.uuid), l2 = `(await fromUuid("${s2.uuid}")).use();`;
  let c2 = game.macros.contents.find((e3) => e3.name === s2.name && e3.data.command === l2);
  return c2 || (c2 = await Macro.create({ name: s2.name, type: "script", img: s2.img, command: l2, flags: { "ffd20.itemMacro": true } }, { displaySheet: false })), game.user.assignHotbarMacro(c2, t2);
}, createSkillMacro = async function(e2, t2, s2) {
  const l2 = getActorFromId(t2);
  if (!l2)
    return;
  const c2 = l2.getSkillInfo(e2), u2 = `const actor = await fromUuid("${l2.uuid}");
return actor.rollSkill("${e2}");`, m2 = game.i18n.format("FFD20.RollSkillMacroName", { 0: l2.name, 1: c2.name });
  let d2 = game.macros.contents.find((e3) => e3.name === m2 && e3.data.command === u2);
  return d2 || (d2 = await Macro.create({ name: m2, type: "script", img: "systems/ffd20/icons/items/inventory/dice.jpg", command: u2, flags: { "ffd20.skillMacro": true } }, { displaySheet: false })), game.user.assignHotbarMacro(d2, s2);
}, createSaveMacro = async function(e2, t2, s2) {
  const l2 = getActorFromId(t2), c2 = game.i18n.localize("FFD20.SavingThrow" + e2.substr(0, 1).toUpperCase() + e2.substr(1));
  if (!l2)
    return;
  const u2 = `const actor = await fromUuid("${l2.uuid}");
return actor.rollSavingThrow("${e2}");`, m2 = game.i18n.format("FFD20.RollSaveMacroName", { 0: l2.name, 1: c2 });
  let d2 = game.macros.contents.find((e3) => e3.name === m2 && e3.data.command === u2);
  return d2 || (d2 = await Macro.create({ name: m2, type: "script", img: "systems/ffd20/icons/items/inventory/dice.jpg", command: u2, flags: { "ffd20.saveMacro": true } }, { displaySheet: false })), game.user.assignHotbarMacro(d2, s2);
}, createMiscActorMacro = async function(e2, t2, s2, l2 = null) {
  const c2 = getActorFromId(t2);
  if (!c2)
    return;
  let u2 = "";
  switch (l2) {
    case "primary":
      u2 = "Primary";
      break;
    case "secondary":
      u2 = "Secondary";
      break;
    case "tertiary":
      u2 = "Tertiary";
      break;
    case "quaternary":
      u2 = "Quaternary";
      break;
    case "spelllike":
      u2 = "Spell-like";
  }
  let m2, d2, h2 = `const actor = await fromUuid("${c2.uuid}");
`;
  switch (e2) {
    case "defenses":
      h2 += "return actor.rollDefenses();", m2 = game.i18n.format("FFD20.RollDefensesMacroName", { 0: c2.name }), d2 = "systems/ffd20/icons/items/armor/shield-light-metal.png";
      break;
    case "cmb":
      h2 += "return actor.rollCMB();", m2 = game.i18n.format("FFD20.RollCMBMacroName", { 0: c2.name }), d2 = "systems/ffd20/icons/feats/improved-grapple.jpg";
      break;
    case "cl":
      h2 += `return actor.rollCL("${l2}");`, m2 = game.i18n.format("FFD20.RollCLMacroName", { 0: c2.name, 1: u2 }), d2 = "systems/ffd20/icons/spells/wind-grasp-eerie-3.jpg";
      break;
    case "concentration":
      h2 += `return actor.rollConcentration("${l2}");`, m2 = game.i18n.format("FFD20.RollConcentrationMacroName", { 0: c2.name, 1: u2 }), d2 = "systems/ffd20/icons/skills/light_01.jpg";
      break;
    case "bab":
      h2 += "return actor.rollBAB();", m2 = game.i18n.format("FFD20.RollBABMacroName", { 0: c2.name }), d2 = "systems/ffd20/icons/skills/yellow_08.jpg";
  }
  if (!m2)
    return;
  let p2 = game.macros.contents.find((e3) => e3.name === m2 && e3.data.command === h2);
  return p2 || (p2 = await Macro.create({ name: m2, type: "script", img: d2, command: h2, flags: { "ffd20.miscMacro": true } }, { displaySheet: false })), game.user.assignHotbarMacro(p2, s2);
}, rollItemMacro = function(e2, { itemId: t2, itemType: s2, actorId: l2 } = {}) {
  const c2 = getActorFromId(l2);
  if (c2 && !c2.testUserPermission(game.user, "OWNER")) {
    const e3 = game.i18n.localize("FFD20.ErrorNoActorPermission");
    return console.warn(e3), ui.notifications.warn(e3);
  }
  const u2 = c2 ? c2.items.find((l3) => (null == t2 || l3.id === t2) && ((null == s2 || l3.type === s2) && l3.name === e2)) : null;
  if (!u2) {
    const t3 = game.i18n.format("FFD20.WarningNoItemOnActor", { 0: c2?.name, 1: e2 });
    return console.warn(t3), ui.notifications.warn(t3);
  }
  return !ffd20.forceShowItem && u2.hasAction ? u2.use({ skipDialog: getSkipActionPrompt() }) : u2.roll();
}, rollSkillMacro = function(e2, t2) {
  const s2 = getActorFromId(e2);
  if (!s2) {
    const t3 = game.i18n.format("FFD20.ErrorActorNotFound", { 0: e2 });
    return console.warn(t3), ui.notifications.error(t3);
  }
  return s2.rollSkill(t2, { skipDialog: getSkipActionPrompt() });
}, rollSaveMacro = function(e2, t2) {
  const s2 = getActorFromId(e2);
  if (!s2) {
    const t3 = game.i18n.format("FFD20.ErrorActorNotFound", { 0: e2 });
    return console.warn(t3), ui.notifications.error(t3);
  }
  return s2.rollSavingThrow(t2, { skipDialog: getSkipActionPrompt() });
}, rollDefenses = function({ actorName: e2 = null, actorId: t2 = null, rollMode: s2 = null } = {}) {
  const l2 = ActorFFD20.getActiveActor({ actorName: e2, actorId: t2 });
  if (!l2) {
    const e3 = game.i18n.format("FFD20.ErrorNoApplicableActorFoundForAction", { 0: game.i18n.localize("FFD20.Action_RollDefenses") });
    return console.warn(e3), ui.notifications.warn(e3);
  }
  return l2.rollDefenses({ rollMode: s2 });
}, rollActorAttributeMacro = function(e2, t2, s2 = null) {
  const l2 = getActorFromId(e2);
  if (!l2) {
    const t3 = game.i18n.format("FFD20.ErrorActorNotFound", { 0: e2 });
    return console.error(t3), ui.notifications.error(t3);
  }
  switch (t2) {
    case "defenses":
      return l2.rollDefenses();
    case "cmb":
      return l2.rollCMB();
    case "cl":
      return l2.rollCL(s2);
    case "concentration":
      return l2.rollConcentration(s2);
    case "bab":
      return l2.rollBAB();
  }
}, js = Object.freeze(Object.defineProperty({ __proto__: null, createItemMacro, createSkillMacro, createSaveMacro, createMiscActorMacro, rollItemMacro, rollSkillMacro, rollSaveMacro, rollDefenses, rollActorAttributeMacro }, Symbol.toStringTag, { value: "Module" })), getLeftRight = (e2) => [`${e2}Left`, `${e2}Right`].map((e3) => ({ key: e3 })), $s = getLeftRight("Shift"), Bs = getLeftRight("Control"), registerSystemControls = () => {
  game.keybindings.register("ffd20", "skipConfirmPrompt", { name: "FFD20.KEYBINDINGS.SkipConfirmPrompt.Name", uneditable: $s, onDown: () => {
    ffd20.skipConfirmPrompt = true;
  }, onUp: () => {
    ffd20.skipConfirmPrompt = false;
  } }), game.keybindings.register("ffd20", "forceShowItem", { name: "FFD20.KEYBINDINGS.ForceShowItem.Name", hint: game.i18n.localize("FFD20.KEYBINDINGS.ForceShowItem.Hint"), uneditable: Bs, onDown: () => {
    ffd20.forceShowItem = true;
  }, onUp: () => {
    ffd20.forceShowItem = false;
  } }), game.keybindings.register("ffd20", "hideTokenTooltip", { name: "FFD20.KEYBINDINGS.HideTokenTooltip.Name", hint: game.i18n.localize("FFD20.KEYBINDINGS.HideTokenTooltip.Hint"), uneditable: Bs, onDown: () => ffd20.documents.controls._hideTokenTooltip(true), onUp: () => ffd20.documents.controls._hideTokenTooltip(false) }), game.keybindings.register("ffd20", "hideTokenTooltipGMInfo", { name: "FFD20.KEYBINDINGS.HideTokenTooltipGMInfo.Name", uneditable: $s, restricted: true, onDown: () => ffd20.documents.controls._hideTokenTooltipGMInfo(true), onUp: () => ffd20.documents.controls._hideTokenTooltipGMInfo(false) });
}, Gs = Object.freeze(Object.defineProperty({ __proto__: null, registerSystemControls, _hideTokenTooltipGMInfo: (e2) => {
  if (ffd20.tooltip)
    return ffd20.tooltip.forceHideGMInfo = e2, ffd20.tooltip?.refresh();
}, _hideTokenTooltip: (e2) => {
  if (ffd20.tooltip)
    return true === game.settings.get("ffd20", "tooltipConfig")?.hideWithoutKey ? ffd20.tooltip.forceHide = !e2 : ffd20.tooltip.forceHide = e2, ffd20.tooltip?.refresh();
} }, Symbol.toStringTag, { value: "Module" }));
class ItemScriptCall {
  static AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  constructor(e2, t2) {
    this.data = mergeObject(this.constructor.defaultData, e2), this.parent = t2;
  }
  static async create(e2, t2) {
    const { parent: s2 } = t2;
    if (s2 instanceof ffd20.documents.item.ItemFFD20) {
      e2 = e2.map((e3) => mergeObject(this.defaultData, e3));
      const t3 = deepClone(s2.system.scriptCalls || []);
      return t3.push(...e2), await s2.update({ "system.scriptCalls": t3 }), e2.map((e3) => s2.scriptCalls.get(e3._id));
    }
    return [];
  }
  static get defaultData() {
    return { _id: randomID(16), name: game.i18n.localize("FFD20.ScriptCalls.NewName"), img: "icons/svg/dice-target.svg", type: "script", value: "", category: "", hidden: false };
  }
  get id() {
    return this.data._id;
  }
  get type() {
    return this.data.type;
  }
  get value() {
    return this.data.value;
  }
  get category() {
    return this.data.category;
  }
  get name() {
    return this.data.name;
  }
  get hidden() {
    return this.data.hidden;
  }
  async getScriptBody() {
    return "script" === this.type ? this.value : (await fromUuid(this.value))?.data.command ?? "";
  }
  async update(e2, t2 = {}) {
    if (null != this.parent) {
      const s2 = this.parent.system.scriptCalls.find((e3) => e3._id === this.id), l2 = this.parent.system.scriptCalls.indexOf(s2);
      if (l2 >= 0)
        return e2 = Object.entries(e2).reduce((e3, t3) => (e3[`system.scriptCalls.${l2}.${t3[0]}`] = t3[1], e3), {}), this.parent.update(e2, t2);
    }
  }
  async edit() {
    if ("macro" === this.type) {
      const e2 = await fromUuid(this.value);
      let t2;
      e2 ? e2.testUserPermission(game.user, "OBSERVER") ? e2.sheet.render(true, { focus: true }) : t2 = game.i18n.format("DOCUMENT.SheetPermissionWarn", { document: e2.documentName }) : t2 = game.i18n.format("FFD20.ErrorNoMacroID", { id: this.value }), t2 && (console.error(t2), ui.notifications.error(t2));
    } else {
      const e2 = new ScriptEditor({ command: this.value, name: this.name, parent: this.parent, scriptCall: true }).render(true), t2 = await e2.awaitResult();
      if (t2)
        return this.update({ value: t2.command, name: t2.name });
    }
  }
  async execute(e2, t2 = {}) {
    const s2 = this.parent, l2 = s2.parentActor, c2 = l2?.token?.object ?? (l2 ? canvas.tokens.placeables.find((e3) => e3.actor?.id === l2.id) : null), u2 = `await (async () => {
      ${await this.getScriptBody()}
    })()`, m2 = this.constructor.AsyncFunction("item", "actor", "token", "shared", ...Object.keys(t2), u2);
    try {
      return await m2.call(this, s2, l2, c2, e2, ...Object.values(t2));
    } catch (e3) {
      ui.notifications.error("There was an error in your script/macro syntax. See the console (F12) for details"), console.error(e3);
    }
  }
}
class ItemActionSheet extends FormApplication {
  constructor(...e2) {
    super(...e2), this.item.apps[this.appId] = this, this.action.apps[this.appId] = this, this.action.sheet = this;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/apps/item-action.hbs", classes: ["ffd20", "item", "sheet", "item-action"], width: 580, height: 720, closeOnSubmit: false, submitOnClose: true, submitOnChange: true, resizable: true, scrollY: [".tab"], tabs: [{ navSelector: "nav.tabs[data-group='primary']", contentSelector: "section.primary-body", initial: "description" }], dragDrop: [{ dragSelector: "li.conditional", dropSelector: 'div[data-tab="conditionals"]' }] });
  }
  get title() {
    return `${this.item.name}: ${this.action.name}`;
  }
  get id() {
    return this.actor ? `actor-${this.actor.id}-item-${this.item.id}-action-${this.action.id}` : `item-${this.item.id}-action-${this.action.id}`;
  }
  get action() {
    return this.object;
  }
  get item() {
    return this.action.item;
  }
  get actor() {
    return this.item.parentActor;
  }
  async getData() {
    const e2 = await super.getData();
    if (e2.action = this.action, e2.item = this.item, e2.actor = this.actor, e2.data = foundry.utils.mergeObject(this.action.constructor.defaultData, this.action.data, { inplace: false }), e2.damageTypes = ffd20.registry.damageTypes.toRecord(), e2.rollData = this.object.getRollData(), e2.tag = createTag(e2.action.name), e2.config = CONFIG.FFD20, e2.hasAttackRoll = this.action.hasAttack, e2.isHealing = "heal" === e2.data.actionType, e2.isCombatManeuver = ["mcman", "rcman"].includes(e2.data.actionType), e2.isCharged = this.action.isCharged, e2.isSelfCharged = this.action.isSelfCharged, e2.showMaxChargeFormula = ["day", "week", "charges"].includes(e2.data.uses.self.per), this.action.hasRange && (e2.canInputRange = ["ft", "mi", "spec"].includes(e2.data.range.units), e2.canInputMinRange = ["ft", "mi", "spec"].includes(e2.data.range.minUnits)), null != e2.data.duration && (e2.canInputDuration = !["", "inst", "perm", "seeText"].includes(e2.data.duration.units)), e2.itemName = e2.item.name, e2.itemEnh = e2.item.system.enh || 0, e2.isSpell = "spell" === this.item.type, e2.usesSpellPoints = this.item.spellbook?.spellPoints.useSystem, e2.defaultChargeFormula = this.item.getDefaultChargeFormula(), e2.canUseAmmo = void 0 !== this.action.data.usesAmmo, e2.owned = null != this.item.actor, e2.parentOwned = null != this.actor, e2.owner = this.item.isOwner, e2.isGM = game.user.isGM, e2.unchainedActionEconomy = game.settings.get("ffd20", "unchainedActionEconomy"), e2.hasActivationType = game.settings.get("ffd20", "unchainedActionEconomy") && e2.data.unchainedAction.activation.type || !game.settings.get("ffd20", "unchainedActionEconomy") && e2.data.activation.type, e2.descriptionHTML = await TextEditor.enrichHTML(e2.data.description, { secrets: e2.owner, rollData: e2.rollData, async: true }), e2.showMaxRangeIncrements = "ft" === e2.data.range.units, "attack" === e2.item.type && (e2.isWeaponAttack = "weapon" === e2.item.system.attackType, e2.isNaturalAttack = "natural" === e2.item.system.attackType), e2.distanceUnits = deepClone(CONFIG.FFD20.distanceUnits), "spell" !== this.item.type)
      for (const t2 of ["close", "medium", "long"])
        delete e2.distanceUnits[t2];
    if (e2.data.conditionals)
      for (const t2 of e2.data.conditionals)
        for (const e3 of t2.modifiers)
          e3.targets = this.object.getConditionalTargets(), e3.subTargets = this.object.getConditionalSubTargets(e3.target), e3.conditionalModifierTypes = this.object.getConditionalModifierTypes(e3.target), e3.conditionalCritical = this.object.getConditionalCritical(e3.target);
    return e2;
  }
  get isEditable() {
    let e2 = this.options.editable && this.object.parent.isOwner;
    if (this.object.parent.pack) {
      game.packs.get(this.object.parent.pack).locked && (e2 = false);
    }
    return e2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), this.isEditable && (e2.find('img[data-edit="img"]').on("click", this._onEditImage.bind(this)), e2.find("textarea, .notes input[type='text']").on("drop", this._onTextAreaDrop.bind(this)), e2.find(".attack-control").click(this._onAttackControl.bind(this)), e2.find(".damage-control").click(this._onDamageControl.bind(this)), e2.find(".damage-type-visual").on("click", this._onClickDamageType.bind(this)), e2.find(".entry-selector").click(this._onEntrySelector.bind(this)), e2.find(".entry-control a").click(this._onEntryControl.bind(this)), e2.find(".conditional-control").click(this._onConditionalControl.bind(this)), e2.find(".file-picker-alt").click(this._onFilePickerAlt.bind(this)));
  }
  _onDragStart(e2) {
    const t2 = e2.currentTarget;
    if (t2.dataset?.conditional) {
      const s2 = this.object.conditionals.get(t2.dataset?.conditional);
      e2.dataTransfer.setData("text/plain", JSON.stringify(s2.data));
    }
  }
  _canDragStart(e2) {
    return this.isEditable;
  }
  _canDragDrop(e2) {
    return this.isEditable;
  }
  async _onDrop(e2) {
    let t2, s2;
    e2.preventDefault(), e2.stopPropagation();
    try {
      t2 = JSON.parse(e2.dataTransfer.getData("text/plain")), null != t2.default && "string" == typeof t2.name && Array.isArray(t2.modifiers) && (s2 = "conditional");
    } catch (e3) {
      return false;
    }
    const l2 = this.object;
    if ("conditional" === s2) {
      for (const e4 of t2.modifiers) {
        let t3;
        Object.keys(l2.getConditionalTargets()).includes(e4.target) || (e4.target = "");
        for (let [s3, c2] of Object.entries(e4)) {
          switch (s3) {
            case "subTarget":
              t3 = Object.keys(l2.getConditionalSubTargets(e4.target));
              break;
            case "type":
              t3 = Object.keys(l2.getConditionalModifierTypes(e4.target));
              break;
            case "critical":
              t3 = Object.keys(l2.getConditionalCritical(e4.target));
          }
          t3?.includes(c2) || (c2 = t3?.[0] ?? "");
        }
      }
      t2._id = randomID(16);
      const e3 = deepClone(l2.data.conditionals || []).concat(t2);
      await this.object.update({ conditionals: e3 });
    }
  }
  _onEntrySelector(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = { name: t2.getAttribute("for"), title: t2.innerText, flag: "true" === t2.dataset.flag, flat: "true" === t2.dataset.flat, fields: t2.dataset.fields, dtypes: t2.dataset.dtypes };
    new ffd20.applications.EntrySelector(this.object, s2).render(true);
  }
  _onEntryControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".notes").dataset.name;
    if (t2.classList.contains("add-entry")) {
      const t3 = { [s2]: deepClone(getProperty(this.object.data, s2) ?? []).concat("") };
      return this._onSubmit(e2, { updateData: t3 });
    }
    if (t2.classList.contains("delete-entry")) {
      const l2 = t2.closest(".entry").dataset.index, c2 = deepClone(getProperty(this.object.data, s2));
      c2.splice(l2, 1);
      const u2 = {};
      return u2[s2] = c2, this._onSubmit(e2, { updateData: u2 });
    }
  }
  async _onConditionalControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-conditional"))
      return await this._onSubmit(e2), ffd20.components.ItemConditional.create([{}], { parent: this.object });
    if (t2.classList.contains("delete-conditional")) {
      await this._onSubmit(e2);
      const s2 = t2.closest(".conditional");
      return this.object.conditionals.get(s2.dataset.conditional).delete();
    }
    if (t2.classList.contains("add-conditional-modifier")) {
      await this._onSubmit(e2);
      const s2 = t2.closest(".conditional"), l2 = this.object.conditionals.get(s2.dataset.conditional);
      return ffd20.components.ItemConditionalModifier.create([{}], { parent: l2 });
    }
    if (t2.classList.contains("delete-conditional-modifier")) {
      await this._onSubmit(e2);
      const s2 = t2.closest(".conditional-modifier");
      return this.object.conditionals.get(s2.dataset.conditional).modifiers.get(s2.dataset.modifier).delete();
    }
  }
  async _onDamageControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".damage").dataset.key || "damage.parts", l2 = s2.split(".").slice(0, -1).join("."), c2 = s2.split(".").slice(-1).join(".");
    if (t2.classList.contains("add-damage")) {
      const t3 = ["", ffd20.components.ItemAction.defaultDamageType], u2 = getProperty(this.action.data, l2), m2 = {};
      return m2[s2] = getProperty(u2, c2).concat([t3]), this._onSubmit(e2, { updateData: m2 });
    }
    if (t2.classList.contains("delete-damage")) {
      const u2 = t2.closest(".damage-part"), m2 = deepClone(getProperty(this.action.data, l2));
      getProperty(m2, c2).splice(Number(u2.dataset.damagePart), 1);
      const d2 = {};
      return d2[s2] = getProperty(m2, c2), this._onSubmit(e2, { updateData: d2 });
    }
  }
  async _onClickDamageType(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget, s2 = t2.closest(".damage-part")?.dataset.damagePart, l2 = t2.closest(".damage")?.dataset.key;
    if (null != s2 && null != l2) {
      return new ffd20.applications.DamageTypeSelector(this.object, `${l2}.${s2}.1`, getProperty(this.object.data, l2)[s2][1]).render(true);
    }
    const c2 = t2.closest(".conditional"), u2 = t2.closest(".conditional-modifier");
    if (c2 && u2) {
      const e3 = this.object.conditionals.get(c2.dataset.conditional).modifiers.get(u2.dataset.modifier);
      return new ffd20.applications.DamageTypeSelector(e3, "damageType", e3.data.damageType).render(true);
    }
  }
  async _onAttackControl(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget;
    if (t2.classList.contains("add-attack")) {
      const t3 = this.action.data.attackParts;
      return this._onSubmit(e2, { updateData: { attackParts: t3.concat([["", ""]]) } });
    }
    if (t2.classList.contains("delete-attack")) {
      const s2 = t2.closest(".attack-part"), l2 = deepClone(this.action.data.attackParts);
      return l2.splice(Number(s2.dataset.attackPart), 1), this._onSubmit(e2, { updateData: { attackParts: l2 } });
    }
  }
  async _onFilePickerAlt(e2) {
    const t2 = e2.currentTarget, s2 = t2.dataset.for, l2 = getProperty(this.item.data, s2), c2 = t2.form[s2];
    if (!c2)
      return;
    new FilePicker({ type: t2.dataset.type, current: l2, callback: (t3) => {
      c2.value = t3, this.options.submitOnChange && this._onSubmit(e2);
    }, top: this.position.top + 40, left: this.position.left + 10 }).browse(l2);
  }
  async _onEditImage(e2) {
    e2.preventDefault();
    new FilePicker({ type: "image", current: this.action.data.img, callback: async (e3) => (await this.action.update({ img: e3 }), this.render()) }).render();
  }
  async _onTextAreaDrop(e2) {
    e2.preventDefault();
    const t2 = JSON.parse(e2.originalEvent.dataTransfer.getData("text/plain"));
    if (!t2)
      return;
    const s2 = e2.currentTarget;
    let l2;
    if (t2.pack) {
      const e3 = game.packs.get(t2.pack);
      if (!e3)
        return;
      const s3 = await e3.getDocument(t2.id);
      l2 = `@Compendium[${t2.pack}.${t2.id}]{${s3.name}}`;
    } else {
      const e3 = CONFIG[t2.type];
      if (!e3)
        return false;
      const s3 = e3.collection.instance.get(t2.id);
      if (!s3)
        return false;
      l2 = `@${t2.type}[${s3._id}]{${s3.name}}`;
    }
    return l2 && (s2.value = s2.value ? s2.value + "\n" + l2 : l2), this._onSubmit(e2);
  }
  async _updateObject(e2, t2) {
    const s2 = deepClone(this.object.data.conditionals);
    return Object.entries(t2).filter((e3) => e3[0].startsWith("conditionals")).forEach((e3) => {
      let t3;
      if (t3 = e3[0].match(/^conditionals.([0-9]+).modifiers.([0-9]+).(.+)$/)) {
        const l2 = parseInt(t3[1]), c2 = parseInt(t3[2]), u2 = s2[l2] ?? deepClone(this.object.data.conditionals[l2]), m2 = t3[3];
        setProperty(u2.modifiers[c2], m2, e3[1]);
      } else if (t3 = e3[0].match(/^conditionals.([0-9]+).(.+)$/)) {
        const l2 = parseInt(t3[1]), c2 = s2[l2] ?? deepClone(this.object.data.conditionals[l2]), u2 = t3[2];
        setProperty(c2, u2, e3[1]);
      }
    }), t2.conditionals = s2, t2 = expandObject(t2), this.action.update(t2);
  }
  async close(e2) {
    return delete this.item.apps[this.appId], delete this.action.apps[this.appId], this.action.sheet = null, super.close(e2);
  }
}
class ItemConditional {
  constructor(e2, t2) {
    this.data = e2, this.parent = t2, this.prepareData();
  }
  static async create(e2, t2 = {}) {
    const { parent: s2 } = t2;
    if (s2 instanceof ffd20.components.ItemAction) {
      e2 = e2.map((e3) => mergeObject(this.defaultData, e3));
      const t3 = deepClone(s2.data.conditionals || []);
      return t3.push(...e2), await s2.update({ conditionals: t3 }), e2.map((e3) => s2.conditionals.get(e3._id));
    }
    return [];
  }
  static get defaultData() {
    return { _id: randomID(16), default: false, name: "", modifiers: [] };
  }
  get id() {
    return this.data._id;
  }
  prepareData() {
    this.data.modifiers instanceof Array && (this.modifiers = this._prepareModifiers(this.data.modifiers));
  }
  _prepareModifiers(e2) {
    const t2 = this.modifiers, s2 = new Collection();
    for (const l2 of e2) {
      let e3 = null;
      t2 && t2.has(l2._id) ? (e3 = t2.get(l2._id), e3.data = l2, e3.prepareData()) : e3 = new ffd20.components.ItemConditionalModifier(l2, this), s2.set(l2._id || e3.data._id, e3);
    }
    return s2;
  }
  async update(e2, t2 = {}) {
    const s2 = this.parent.data.conditionals.indexOf(this.data), l2 = deepClone(this.data), c2 = flattenObject(mergeObject(l2, e2));
    if (keepUpdateArray(this.data, c2, "modifiers"), t2.dryRun)
      return c2;
    await this.parent.update({ [`conditionals.${s2}`]: expandObject(c2) });
  }
  async delete() {
    const e2 = foundry.utils.deepClone(this.parent.data.conditionals);
    return e2.findSplice((e3) => e3._id === this.id), this.parent.update({ conditionals: e2 });
  }
}
class ItemConditionalModifier {
  constructor(e2, t2) {
    this.data = e2, this.parent = t2, this.prepareData();
  }
  static async create(e2, t2 = {}) {
    const { parent: s2 } = t2;
    if (s2 instanceof ffd20.components.ItemConditional) {
      e2 = e2.map((e3) => mergeObject(this.defaultData, e3));
      const t3 = deepClone(s2.data.modifiers || []);
      return t3.push(...e2), await s2.update({ modifiers: t3 }), e2.map((e3) => s2.modifiers.get(e3._id));
    }
    return [];
  }
  static get defaultData() {
    return { _id: randomID(16), formula: "", target: "", subTarget: "", type: "", damageType: ffd20.components.ItemAction.defaultDamageType, critical: "" };
  }
  get id() {
    return this.data._id;
  }
  prepareData() {
  }
  async update(e2, t2 = {}) {
    const s2 = this.parent.data.modifiers.indexOf(this.data), l2 = deepClone(this.data), c2 = flattenObject(mergeObject(l2, e2));
    if (t2.dryRun)
      return c2;
    await this.parent.update({ [`modifiers.${s2}`]: expandObject(c2) });
  }
  async delete() {
    const e2 = this.parent.data.modifiers.indexOf(this.data);
    if (e2 < 0)
      throw new Error(`Modifier not found in parent ${this.parent.name}`);
    const t2 = duplicate(this.parent.data.modifiers);
    return t2.splice(e2, 1), this.parent.update({ modifiers: t2 });
  }
}
class ActionChooser extends Application {
  constructor(e2, t2 = {}) {
    super(t2), this.item = e2;
  }
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { template: "systems/ffd20/templates/apps/action-chooser.hbs", classes: ["ffd20", "action-chooser"], width: 400 });
  }
  get title() {
    return game.i18n.format("FFD20.Application.ActionChooser.Title", { actor: this.item.parentActor.name ?? "", item: this.item.name });
  }
  async getData(e2) {
    const t2 = await super.getData(e2);
    return t2.item = this.item.toObject(), t2.actions = this.item.system.actions, t2;
  }
  activateListeners(e2) {
    super.activateListeners(e2), e2.find(".action").on("click", this._onClickAction.bind(this));
  }
  _onClickAction(e2) {
    e2.preventDefault();
    const t2 = e2.currentTarget.dataset?.action;
    this.item.use({ actionID: t2, skipDialog: getSkipActionPrompt() }), this.close();
  }
}
const qs = Object.freeze(Object.defineProperty({ __proto__: null, ActorSheetFFD20, ActorSheetFFD20Basic, ActorSheetFFD20Character, ActorSheetFFD20NPCLite, ActorSheetFFD20NPCLoot, ActorSheetFFD20NPC, ActorSheetFlags, ActorRestDialog }, Symbol.toStringTag, { value: "Module" })), Hs = Object.freeze(Object.defineProperty({ __proto__: null, ItemSheetFFD20_Container, ItemSheetFFD20 }, Symbol.toStringTag, { value: "Module" })), Us = Object.freeze(Object.defineProperty({ __proto__: null, ItemActionSheet }, Symbol.toStringTag, { value: "Module" })), Vs = Object.freeze(Object.defineProperty({ __proto__: null, ExperienceConfig, HealthConfig, TooltipConfig, TooltipWorldConfig }, Symbol.toStringTag, { value: "Module" }));
class LinkOptions extends FormApplication {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, { id: "link-options", classes: ["ffd20"], title: game.i18n.localize("FFD20.LinkOptionsTitle"), template: "systems/ffd20/templates/apps/link-options.hbs", width: 320, height: "auto", submitOnClose: true, closeOnSubmit: true });
  }
  getData() {
    const e2 = this.object, t2 = q.getLinkTypes(e2.source(), e2.target()), s2 = t2.reduce((e3, t3) => (e3[t3] = `Link_${t3}`, e3), {}), l2 = this._getLinkTypeCommandOptions(e2, t2[0]);
    return { linkTypes: s2, options: l2, isNumber: null != l2 && "number" === l2.type, isString: null != l2 && "string" === l2.type };
  }
  _getLinkTypeCommandOptions(e2, t2) {
    return "minLevel" === (e2.data("type") || t2) ? { type: "number", min: 1, max: 20, initial: e2.data("value") || 1 } : null;
  }
}
class ItemDirectoryFFD20 extends ItemDirectory {
  static get defaultOptions() {
    const e2 = super.defaultOptions;
    return e2.renderUpdateKeys.push("system.identifiedName", "system.unidentified.name", "system.identified"), e2;
  }
  async _render(e2 = false, t2 = {}) {
    const { action: s2, data: l2, documentType: c2 } = t2;
    return s2 && !["create", "update", "delete"].includes(s2) ? this : "Folder" === c2 || "update" !== s2 || l2.some((e3) => this.options.renderUpdateKeys.some((t3) => void 0 !== getProperty(e3, t3))) ? (this.initialize(), SidebarTab.prototype._render.call(this, e2, t2)) : void 0;
  }
}
const Ws = Object.freeze(Object.defineProperty({ __proto__: null, actor: qs, item: Hs, component: Us, settings: Vs, ActionChooser, AttackDialog, Widget_CategorizedItemPicker, ChangeLogWindow, CompendiumBrowser, CurrencyTransfer, DamageTypeSelector, EntrySelector, HelpBrowserFFD20, Widget_ItemPicker, LevelUpForm, LinkOptions, PointBuyCalculator, ScriptEditor, SensesSelector, SidebarFFD20, SkillEditor, TooltipFFD20, ActorTraitSelector, VisionPermissionSheet, ExperienceDistributor, ItemDirectoryFFD20, compendiums: K, helpBrowser: Ls }, Symbol.toStringTag, { value: "Module" }));
class BaseRegistry extends foundry.utils.Collection {
  static contentClass = null;
  static _defaultData = [];
  constructor(e2 = []) {
    super(), this._initialize(e2);
  }
  get name() {
    return this.constructor.name;
  }
  get contentClass() {
    return this.constructor.contentClass;
  }
  get contentName() {
    return this.contentClass.typeName;
  }
  _initialize() {
    this.clear();
    for (const e2 of this.constructor._defaultData) {
      let t2;
      try {
        t2 = new this.contentClass(e2), super.set(t2.id, t2);
      } catch (e3) {
        console.error(e3);
      }
    }
    Hooks.callAll(`ffd20.register${this.name}`, this, this.contentClass);
  }
  set(e2, t2) {
    const s2 = this.contentClass;
    if (!(t2 instanceof s2))
      throw new Error(`Registry '${this.contentName}' can only register ${s2.typeName}`);
    return super.set(e2, t2);
  }
  register(e2, t2, s2) {
    if (!e2)
      throw new Error("Registering requires a module name");
    if (this.has(t2))
      throw new Error(`Registry '${this.contentName}' already has a key '${t2}'`);
    return this.set(t2, new this.contentClass({ module: e2, _id: t2, ...s2 }));
  }
  unregister(e2, t2) {
    if (!e2)
      throw new Error("Unregistering requires a module name");
    if (t2)
      this.find((s2) => s2.data.module === e2 && s2.id === t2) && this.delete(t2);
    else {
      const t3 = this.filter((t4) => t4.data.module === e2).map((e3) => e3.id);
      for (const e3 of t3)
        this.delete(e3);
    }
  }
  toRecord(e2 = "id", t2 = true) {
    return this.reduce((s2, l2) => (s2[getProperty(l2, e2)] = t2 ? l2.data : l2, s2), {});
  }
}
class BaseRegistryObject {
  constructor(e2) {
    this.data = foundry.utils.mergeObject(this.constructor._baseData, e2);
  }
  static get _baseData() {
    return { _id: randomID(16), name: `New ${this.constructor.name}`, flags: {} };
  }
  static get typeName() {
    throw new Error("A class extending BaseRegistryObject must implement typeName");
  }
  get id() {
    return this.data._id;
  }
  get name() {
    return this.data.name;
  }
  toJSON() {
    const e2 = deepClone(this.data);
    return "module" in e2 && delete e2.module, e2;
  }
}
class DamageType extends BaseRegistryObject {
  static typeName = "Damage Type";
  static get _baseData() {
    return foundry.utils.mergeObject(super._baseData, { img: "", icon: "", color: "black", category: "misc" });
  }
  get isModifier() {
    return true === this.data.flags?.modifier;
  }
}
class DamageTypes extends BaseRegistry {
  static contentClass = DamageType;
  static _defaultData = [{ _id: "untyped", name: "FFD20.DamageTypeUntyped", icon: "ra ra-uncertainty", category: "misc" }, { _id: "slashing", name: "FFD20.DamageTypeSlashing", icon: "ra ra-sword", color: "yellow", category: "physical" }, { _id: "piercing", name: "FFD20.DamageTypePiercing", icon: "ra ra-spear-head", color: "blue", category: "physical" }, { _id: "bludgeoning", name: "FFD20.DamageTypeBludgeoning", icon: "ra ra-large-hammer", color: "red", category: "physical" }, { _id: "fire", name: "FFD20.DamageTypeFire", icon: "ra ra-fire", color: "orange", category: "energy" }, { _id: "ice", name: "FFD20.DamageTypeIce", icon: "ra ra-frost-emblem", color: "aqua", category: "energy" }, { _id: "wind", name: "FFD20.DamageTypeWind", icon: "ra ra-slash-ring", color: "#04e0ce", category: "energy" }, { _id: "earth", name: "FFD20.DamageTypeEarth", icon: "ra ra-groundbreaker", color: "#664a02", category: "energy" }, { _id: "lightning", name: "FFD20.DamageTypeLightning", icon: "ra ra-lightning-bolt", color: "yellow", category: "energy" }, { _id: "water", name: "FFD20.DamageTypeWater", icon: "ra ra-droplet", color: "blue", category: "energy" }, { _id: "light", name: "FFD20.DamageTypeLight", icon: "ra ra-sunbeams", color: "#defffc", category: "energy" }, { _id: "dark", name: "FFD20.DamageTypeDark", icon: "ra ra-skull", color: "#765898", category: "energy" }, { _id: "nonelemental", name: "FFD20.DamageTypeNonElemental", icon: "ra ra-doubled", color: "#a200ff", category: "energy" }, { _id: "precision", name: "FFD20.Precision", icon: "ra ra-archery-target", flags: { modifier: true } }, { _id: "nonlethal", name: "FFD20.Nonlethal", icon: "ra ra-hand", flags: { modifier: true } }].map((e2) => ({ ...e2, module: "ffd20" }));
}
const Ys = new DamageTypes();
class ScriptCall extends BaseRegistryObject {
  static typeName = "Script Call";
  static get _baseData() {
    return mergeObject(super._baseData, { itemTypes: [], name: null, info: null });
  }
}
class ScriptCalls extends BaseRegistry {
  static contentClass = ScriptCall;
  static _defaultData = [{ _id: "use", itemTypes: ["attack", "feat", "equipment", "consumable", "spell", "weapon"], name: "FFD20.ScriptCalls.Use.Name", info: "FFD20.ScriptCalls.Use.Info" }, { _id: "equip", itemTypes: ["weapon", "equipment", "loot"], name: "FFD20.ScriptCalls.Equip.Name", info: "FFD20.ScriptCalls.Equip.Info" }, { _id: "toggle", itemTypes: ["buff", "feat"], name: "FFD20.ScriptCalls.Toggle.Name", info: "FFD20.ScriptCalls.Toggle.Info" }, { _id: "changeQuantity", itemTypes: ["loot", "equipment", "weapon", "consumable", "container"], name: "FFD20.ScriptCalls.ChangeQuantity.Name", info: "FFD20.ScriptCalls.ChangeQuantity.Info" }, { _id: "changeLevel", itemTypes: ["buff", "class"], name: "FFD20.ScriptCalls.ChangeLevel.Name", info: "FFD20.ScriptCalls.ChangeLevel.Info" }].map((e2) => ({ ...e2, module: "ffd20" }));
}
const Ks = new ScriptCalls(), Qs = Object.freeze(Object.defineProperty({ __proto__: null, ActorBaseFFD20, BasicActorFFD20, ActorCharacterFFD20, ActorNPCFFD20, ActorFFD20, changes: j, spellbook: U }, Symbol.toStringTag, { value: "Module" })), Zs = Object.freeze(Object.defineProperty({ __proto__: null, ItemAttackFFD20, ItemBaseFFD20, ItemBuffFFD20, ItemClassFFD20, ItemConsumableFFD20, ItemContainerFFD20, ItemEquipmentFFD20, ItemFeatFFD20, ItemLootFFD20, ItemFFD20, ItemRaceFFD20, ItemSpellFFD20, ItemWeaponFFD20 }, Symbol.toStringTag, { value: "Module" })), Js = Object.freeze(Object.defineProperty({ __proto__: null, ActiveEffectFFD20, ChatMessageFFD20, customRolls, CombatFFD20, duplicateCombatantInitiative, addChatMessageContextOptions: function(e2, t2) {
  const canApply = (e3) => canvas.tokens.controlled.length && e3.find(".damage-roll .dice-total").length, canApplyCritical = (e3) => canvas.tokens.controlled.length && e3.find(".crit-damage-roll .dice-total").length;
  return t2.push({ name: game.i18n.localize("FFD20.ApplyDamage"), icon: '<i class="fas fa-user-minus"></i>', condition: canApply, callback: (e3) => ActorFFD20.applyDamage(e3, 1) }, { name: game.i18n.localize("FFD20.ApplyHealing"), icon: '<i class="fas fa-user-plus"></i>', condition: canApply, callback: (e3) => ActorFFD20.applyDamage(e3, -1) }, { name: game.i18n.localize("FFD20.ApplyCriticalDamage"), icon: '<i class="fas fa-user-minus"></i>', condition: canApplyCritical, callback: (e3) => ActorFFD20.applyDamage(e3, 1, true) }, { name: game.i18n.localize("FFD20.ApplyCriticalHealing"), icon: '<i class="fas fa-user-minus"></i>', condition: canApplyCritical, callback: (e3) => ActorFFD20.applyDamage(e3, -1, true) }), t2;
}, controls: Gs, macros: js, settings: s, TokenDocumentFFD20, actor: Qs, item: Zs }, Symbol.toStringTag, { value: "Module" })), Xs = Object.freeze(Object.defineProperty({ __proto__: null, ActionUse, ERR_REQUIREMENT: B, ChatAttack, DamagePart: class {
  constructor(e2, t2, s2, l2 = "normal") {
    this.amount = e2, this.damageType = t2 ?? "Untyped", this.type = l2, this.roll = s2;
  }
} }, Symbol.toStringTag, { value: "Module" }));
class DetectionModeInvisibilityFFD20 extends DetectionModeInvisibility {
  static ID = "seeInvisibility";
  static LABEL = "DETECTION.SeeInvisibility";
  static PRIORITY = 1e5;
  _testPoint(e2, t2, s2, l2) {
    if (!this._testLOS(e2, t2, s2, l2))
      return false;
    if (this._testRange(e2, t2, s2, l2))
      return true;
    for (const e3 of canvas.effects.lightSources.values())
      if (e3.active && !e3.disabled && e3.los.contains(l2.point.x, l2.point.y))
        return true;
    return false;
  }
}
class DetectionModeBlindSenseFFD20 extends DetectionMode {
  static ID = "blindSense";
  static LABEL = "FFD20.SenseBSense";
  static DETECTION_TYPE = DetectionMode.DETECTION_TYPES.OTHER;
  static PRIORITY = 200100;
  constructor(e2 = {}, ...t2) {
    e2.walls = true, super(e2, ...t2);
  }
  static getDetectionFilter() {
    return this._detectionFilter ??= OutlineOverlayFilter.create({ outlineColor: [0, 0.33, 0.6, 1], knockout: false, wave: "blindSense" === this.ID });
  }
  _canDetect(e2, t2) {
    return true;
  }
}
class DetectionModeBlindSightFFD20 extends DetectionModeBlindSenseFFD20 {
  static ID = "blindSight";
  static LABEL = "FFD20.SenseBS";
  static DETECTION_TYPE = DetectionMode.DETECTION_TYPES.OTHER;
  static PRIORITY = 2e5;
  static getDetectionFilter() {
    return this._detectionFilter ??= OutlineOverlayFilter.create({ outlineColor: [0, 0.33, 0.6, 1], knockout: false, wave: false });
  }
}
class DetectionModeTremorFFD20 extends DetectionModeTremor {
  static ID = "feelTremor";
  static LABEL = "DETECTION.FeelTremor";
  static DETECTION_TYPE = DetectionMode.DETECTION_TYPES.MOVE;
  static PRIORITY = 201e3;
  constructor(e2 = {}, ...t2) {
    e2.walls = false, super(e2, ...t2);
  }
}
const ea = Object.freeze(Object.defineProperty({ __proto__: null, DetectionModeInvisibilityFFD20, DetectionModeBlindSenseFFD20, DetectionModeBlindSightFFD20, DetectionModeTremorFFD20 }, Symbol.toStringTag, { value: "Module" })), ta = Object.freeze(Object.defineProperty({ __proto__: null, AbilityTemplate, attackReach: ee, lowLightVision: Q, MeasuredTemplateFFD20, TemplateLayerFFD20, TokenFFD20, TokenQuickActions, detectionModes: ea }, Symbol.toStringTag, { value: "Module" }));
class SizeRollTerm extends RollTerm {
  constructor({ terms: e2 = [], roll: t2, options: s2 }) {
    super({ options: s2 }), e2 && (e2[0] instanceof RollTerm ? this.terms = e2 : "string" == typeof e2[0] ? (this._terms = e2, this.terms = e2.reduce((e3, t3) => {
      const s3 = RollFFD20.parse(t3);
      return s3.length > 1 ? e3.push(ParentheticalTerm.fromTerms(s3)) : e3.push(s3[0]), e3;
    }, [])) : this.terms = e2.map((e3) => RollTerm.fromData(e3))), this.roll = t2 ? t2 instanceof Roll ? t2 : Roll.fromData(t2) : void 0;
  }
  _terms = [];
  terms = [];
  roll = void 0;
  isIntermediate = false;
  static SERIALIZE_ATTRIBUTES = ["terms", "roll"];
  static MODIFIERS = {};
  get total() {
    return this.roll.total;
  }
  get dice() {
    return this.roll?.dice;
  }
  get formula() {
    return this.simplify ?? super.formula;
  }
  get expression() {
    return `sizeRoll(${this.terms.map((e2) => e2.formula).join(", ")})`;
  }
  get simplify() {
    return this.roll?.formula;
  }
  get isDeterministic() {
    return false;
  }
  _evaluateSync({ minimize: e2 = false, maximize: t2 = false } = {}) {
    const s2 = { minimize: e2, maximize: t2, async: false };
    for (const e3 of this.terms)
      e3._evaluated || e3.evaluate(s2);
    const l2 = !this.roll, c2 = l2 ? ffd20.utils.rollPreProcess.sizeRoll(...this.terms.map((e3) => e3.total)) : null;
    c2 && this.flavor && (c2[0].options.flavor = this.flavor);
    const u2 = l2 ? RollFFD20.fromTerms(c2) : this.roll;
    return this.flavor && (u2.options.flavor = this.flavor), this.roll = u2._evaluated ? u2 : u2.evaluate(s2), this;
  }
  async _evaluate({ minimize: e2 = false, maximize: t2 = false } = {}) {
    const s2 = { minimize: e2, maximize: t2, async: true };
    for (const e3 of this.terms)
      e3._evaluated || await e3.evaluate(s2);
    const l2 = !this.roll, c2 = l2 ? ffd20.utils.rollPreProcess.sizeRoll(...this.terms.map((e3) => e3.total)) : null;
    c2 && this.flavor && (c2[0].options.flavor = this.flavor);
    const u2 = l2 ? RollFFD20.fromTerms(c2) : this.roll;
    return this.flavor && (u2.options.flavor = this.flavor), this.roll = u2._evaluated ? u2 : await u2.evaluate(s2), this;
  }
  toJSON() {
    return { ...super.toJSON(), roll: this.roll?.toJSON() };
  }
}
const sa = Object.freeze(Object.defineProperty({ __proto__: null, SizeRollTerm }, Symbol.toStringTag, { value: "Module" })), aa = Object.freeze(Object.defineProperty({ __proto__: null, DiceFFD20, formulaHasDice, RollFFD20, parseRollStringVariable, D20RollFFD20, d20Roll: async function(e2 = {}) {
  const { skipDialog: t2 = false, staticRoll: s2 = null, chatTemplateData: l2 = {}, chatMessage: c2 = true, compendium: u2, noSound: m2 = false, flavor: d2 = "", parts: h2 = [], dice: p2 = "1d20", rollData: g2 = {}, subject: y2, rollMode: F2, bonus: D2 = "", speaker: k2 } = e2, v = [p2, ...h2].join("+"), C2 = new CONFIG.Dice.rolls.D20RollFFD20(v, g2, { flavor: d2, staticRoll: s2, bonus: D2 });
  if (!t2) {
    const e3 = k2?.alias ? `${k2.alias}: ${d2}` : d2;
    if (null === await C2.promptDialog({ title: e3, rollMode: F2, subject: y2 }))
      return;
  }
  return C2.toMessage({ speaker: k2 }, { create: c2, noSound: m2, chatTemplateData: l2, compendium: u2, subject: y2 });
}, DamageRoll, terms: sa }, Symbol.toStringTag, { value: "Module" })), ia = Object.freeze(Object.defineProperty({ __proto__: null, ItemAction, ItemChange, ItemConditional, ItemConditionalModifier, ItemScriptCall }, Symbol.toStringTag, { value: "Module" })), na = Object.freeze(Object.defineProperty({ __proto__: null, registerHandlebarsHelpers, preloadHandlebarsTemplates }, Symbol.toStringTag, { value: "Module" })), ra = Object.freeze(Object.defineProperty({ __proto__: null, sizeRoll: function(e2, t2, s2 = "M", l2 = "M") {
  const _getSizeIndex = function(e3) {
    return "string" == typeof e3 ? Object.values(CONFIG.FFD20.sizeChart).indexOf(e3.toUpperCase()) : e3;
  };
  s2 = _getSizeIndex(s2), l2 = _getSizeIndex(l2);
  let c2 = false;
  if (e2 > 1 && 10 === t2 && (e2 % 2 == 0 || 3 === e2)) {
    c2 = true;
    const u3 = [{ orig: [2, 10], larger: [4, 8], smaller: [2, 8] }, { orig: [3, 10], larger: [6, 8], smaller: [3, 8] }, { orig: [4, 10], larger: [8, 8], smaller: [4, 8] }, { orig: [6, 10], larger: [12, 8], smaller: [6, 8] }, { orig: [8, 10], larger: [16, 8], smaller: [8, 8] }];
    for (const c3 of u3)
      c3.orig[0] === e2 && c3.orig[1] === t2 && (s2 < l2 ? (l2--, e2 = c3.smaller[0], t2 = c3.smaller[1]) : s2 > l2 && (l2++, e2 = c3.larger[0], t2 = c3.larger[1]));
  }
  const u2 = `${e2}d${t2}`, m2 = e2 * t2;
  let d2 = duplicate(CONFIG.FFD20.sizeDie);
  -1 === d2.indexOf(u2) && (d2 = d2.map((e3) => {
    if (e3.match(/^([0-9]+)d([0-9]+)$/)) {
      if (parseInt(RegExp.$1) * parseInt(RegExp.$2) === m2)
        return u2;
    }
    return e3;
  }));
  let h2 = d2.indexOf(u2), p2 = u2;
  if (h2 >= 0) {
    const e3 = d2.indexOf("1d6");
    let t3 = d2.indexOf("1d8");
    -1 === t3 && (t3 = d2.indexOf("2d4"));
    let c3 = l2 - s2, u3 = l2;
    for (; c3 > 0; )
      u3 <= 4 || h2 <= t3 ? (h2--, c3--, u3--) : (h2 -= 2, c3--, u3--);
    for (; c3 < 0; )
      u3 <= 3 || h2 <= e3 ? (h2++, c3++, u3++) : (h2 += 2, c3++, u3++);
    h2 = Math.max(0, Math.min(d2.length - 1, h2)), p2 = d2[h2];
  }
  if (-1 === h2 && !c2) {
    const e3 = game.i18n.localize("FFD20.WarningNoSizeDie").format(u2, p2);
    console.warn(e3), ui.notifications.warn(e3);
  }
  const g2 = p2.split("d");
  return 1 === g2.length ? [new NumericTerm({ number: parseInt(g2[0]) })] : [new Die({ number: parseInt(g2[0]), faces: parseInt(g2[1]) })];
}, sizeReach: function(e2 = "M", t2 = false, s2 = "tall") {
  return "number" == typeof e2 && (e2 = Object.values(CONFIG.FFD20.sizeChart)[e2]), e2 = Object.entries(CONFIG.FFD20.sizeChart).find((t3) => t3[1] === e2)[0], [new NumericTerm({ number: CONFIG.Actor.documentClasses.default.getReach(e2, s2)[t2 ? "reach" : "melee"] })];
} }, Symbol.toStringTag, { value: "Module" })), oa = Object.freeze(Object.defineProperty({ __proto__: null, handlebars: na, canvas: u, chat: z, dialog: V, links: H, rollPreProcess: ra, SemanticVersion, binarySearch, convertDistance, convertDistanceBack, convertWeight, convertWeightBack, createTag, diffObjectAndArray, findInCompendia, getAbilityModifier, getActorFromId, getFirstActiveGM, getItemOwner, isMinimumCoreVersion, measureDistance, refreshActors, sortArrayByName }, Symbol.toStringTag, { value: "Module" })), la = Object.freeze(Object.defineProperty({ __proto__: null, BaseRegistry, BaseRegistryObject, damageTypes: Ys, DamageType, DamageTypes, ScriptCall, ScriptCalls, scriptCalls: Ks }, Symbol.toStringTag, { value: "Module" }));
globalThis.ffd20 = function moduleToObject(e2) {
  const t2 = {};
  for (const s2 in e2)
    "[object Module]" === Object.prototype.toString.call(e2[s2]) ? t2[s2] = moduleToObject(e2[s2]) : t2[s2] = e2[s2];
  return t2;
}({ actionUse: Xs, applications: Ws, canvas: ta, components: ia, config: e, dice: aa, documents: Js, migrations: zs, registry: la, tooltip: null, utils: oa }), String.prototype.format || (String.prototype.format = function(...e2) {
  return this.replace(/{(\d+)}/g, function(t2, s2) {
    return null != e2[s2] ? e2[s2] : t2;
  });
}), Hooks.once("init", function() {
  console.log("FFD20 | Initializing Final Fantasy D20 System"), ui.notifications = { info: console.log, warn: console.warn, error: console.error }, registerClientSettings();
  const t2 = { polymorphism: { ActorBaseFFD20, ItemBaseFFD20 }, documents: { ActorFFD20, ItemFFD20, TokenDocumentFFD20 }, get entities() {
    return console.error("game.ffd20.entities is obsolete; please use game.ffd20.documents instead."), this.documents;
  }, applications: { ActorSheetFFD20, ActorSheetFFD20Character, ActorSheetFFD20NPC, ActorSheetFFD20NPCLite, ActorSheetFFD20NPCLoot, ItemSheetFFD20, ItemSheetFFD20_Container, ItemActionSheet, AttackDialog, ActorSheetFlags, ActorRestDialog, ActorTraitSelector, SensesSelector, CompendiumDirectoryFFD20, CompendiumBrowser, EntrySelector, LevelUpForm, PointBuyCalculator, ScriptEditor, SidebarFFD20, TooltipFFD20, HelpBrowserFFD20, ExperienceDistributor, SkillEditor, DamageTypeSelector, ActionChooser, Widget_CategorizedItemPicker, CurrencyTransfer }, compendiums: K, DiceFFD20, rollPreProcess: { ...ra }, chat: { ChatAttack, ChatMessageFFD20, events: { targetACClick, targetSavingThrowClick } }, utils: { createTag, getItemOwner, getActorFromId, getAbilityModifier, getChangeFlat, getSourceInfo, convertDistance, convertDistanceBack, convertWeight, convertWeightBack, measureDistance, measureDistances, measureReachDistance: (e2, t3, s2 = false) => (console.warn('measureReachDistance is obsolete, please use measureDistance with diagonalRule set to "555" instead'), measureDistance(e2, t3, { diagonalRule: s2 ? "555" : "5105" })), dialogGetActor, dialogGetNumber, SemanticVersion, isMinimumCoreVersion, binarySearch, sortArrayByName, findInCompendia, getFirstActiveGM, refreshActors, diffObjectAndArray }, documentComponents: { ItemChange, ItemAction, ItemConditional, ItemConditionalModifier, ItemScriptCall }, baseRegistry: BaseRegistry, damageTypes: new DamageTypes(), scriptCalls: new ScriptCalls(), macros: js, rollItemMacro, rollSkillMacro, rollSaveMacro, rollDefenses, rollActorAttributeMacro, migrations: zs, migrateWorld, get isMigrating() {
    return ffd20.migrations.isMigrating;
  }, config: e, tooltip: null, AbilityTemplate, ItemAttack: { ...G }, controls: Gs, skipConfirmPrompt: false, tokenTooltip: { get hide() {
    return console.warn("game.ffd20.tokenTooltip.hide is obsolete. Use ffd20.tooltip.forceHide instead."), ffd20.tooltip.forceHide;
  }, set hide(e2) {
    console.warn("game.ffd20.tokenTooltip.hide is obsolete. Use ffd20.tooltip.forceHide instead."), ffd20.tooltip.forceHide = e2;
  }, get hideGMInfo() {
    return console.warn("game.ffd20.tokenTooltip.hideGMInfo is obsolete. Use ffd20.tooltip.forceHideGMInfo instead."), ffd20.tooltip.forceHideGMInfo;
  }, set hideGMInfo(e2) {
    console.warn("game.ffd20.tokenTooltip.hideGMInfo is obsolete. Use ffd20.tooltip.forceHideGMInfo instead."), ffd20.tooltip.forceHideGMInfo = e2;
  } }, forceShowItem: false, functions: { getBuffTargets, getBuffTargetDictionary }, helpBrowser: new HelpBrowserFFD20() };
  game.ffd20 = new Proxy(t2, { get: (e2, t3) => (foundry.utils.logCompatibilityWarning(["You are accessing game.ffd20, which will be restructured to match globalThis.ffd20 in the future.", `Please check whether ${t3} and its contents are still available, or use globalThis.ffd20 instead.`].join("\n"), { since: "FFD20 10.2.0", until: "FFD20 10.3.0" }), Reflect.get(e2, t3)), set: (e2, t3, s2) => (foundry.utils.logCompatibilityWarning(["You are accessing game.ffd20, which will be restructured to match globalThis.ffd20 in the future.", `Please check whether ${t3} and its contents are still available, or use globalThis.ffd20 instead.`].join("\n"), { since: "FFD20 10.2.0", until: "FFD20 10.3.0" }), Reflect.set(e2, t3, s2)) }), globalThis.RollFFD20 = RollFFD20, CONFIG.ui.items = ItemDirectoryFFD20, CONFIG.FFD20 = e, CONFIG.Canvas.layers.templates.layerClass = TemplateLayerFFD20, CONFIG.MeasuredTemplate.objectClass = MeasuredTemplateFFD20, CONFIG.MeasuredTemplate.defaults.angle = 90, CONFIG.Actor.documentClass = ActorBaseFFD20, CONFIG.Actor.documentClasses = { default: ActorFFD20, character: ActorCharacterFFD20, npc: ActorNPCFFD20, basic: BasicActorFFD20 }, CONFIG.Token.documentClass = TokenDocumentFFD20, CONFIG.Token.objectClass = TokenFFD20, CONFIG.ActiveEffect.documentClass = ActiveEffectFFD20, CONFIG.Item.documentClass = ItemBaseFFD20, CONFIG.Item.documentClasses = { default: ItemFFD20, attack: ItemAttackFFD20, buff: ItemBuffFFD20, class: ItemClassFFD20, consumable: ItemConsumableFFD20, container: ItemContainerFFD20, equipment: ItemEquipmentFFD20, feat: ItemFeatFFD20, loot: ItemLootFFD20, race: ItemRaceFFD20, spell: ItemSpellFFD20, weapon: ItemWeaponFFD20 }, CONFIG.Combat.documentClass = CombatFFD20, CONFIG.ui.compendium = CompendiumDirectoryFFD20, CONFIG.ChatMessage.documentClass = ChatMessageFFD20, CONFIG.Dice.rolls.splice(0, 0, RollFFD20), CONFIG.Dice.termTypes.SizeRollTerm = SizeRollTerm, CONFIG.Dice.RollFFD20 = RollFFD20, CONFIG.Dice.rolls.push(D20RollFFD20), CONFIG.Dice.rolls.D20RollFFD20 = D20RollFFD20, CONFIG.Dice.rolls.push(DamageRoll), CONFIG.Dice.rolls.DamageRoll = DamageRoll, CONFIG.time.roundTime = 6, registerSystemSettings(), CONFIG.statusEffects = getConditions(), preloadHandlebarsTemplates(), registerHandlebarsHelpers(), Actors.unregisterSheet("core", ActorSheet), Actors.registerSheet("ffd20", ActorSheetFFD20Character, { label: "FFD20.Sheet.PC", types: ["character"], makeDefault: true }), Actors.registerSheet("ffd20", ActorSheetFFD20NPC, { label: "FFD20.Sheet.NPC", types: ["npc"], makeDefault: true }), Actors.registerSheet("ffd20", ActorSheetFFD20NPCLite, { label: "FFD20.Sheet.NPCLite", types: ["npc"], makeDefault: false }), Actors.registerSheet("ffd20", ActorSheetFFD20NPCLoot, { label: "FFD20.Sheet.NPCLoot", types: ["npc"], makeDefault: false }), Actors.registerSheet("ffd20", ActorSheetFFD20Basic, { label: "FFD20.Sheet.Basic", types: ["basic"], makeDefault: true }), Items.unregisterSheet("core", ItemSheet), Items.registerSheet("ffd20", ItemSheetFFD20, { label: "FFD20.Sheet.Item", types: ["class", "feat", "spell", "consumable", "equipment", "loot", "weapon", "buff", "attack", "race"], makeDefault: true }), Items.registerSheet("ffd20", ItemSheetFFD20_Container, { label: "FFD20.Sheet.Container", types: ["container"], makeDefault: true }), CONFIG.specialStatusEffects.BLIND = "ffd20_blind";
  for (const e2 of Object.values(ffd20.canvas.detectionModes))
    CONFIG.Canvas.detectionModes[e2.ID] = new e2({ id: e2.ID, label: e2.LABEL, type: e2.DETECTION_TYPE || DetectionMode.DETECTION_TYPES.SIGHT });
  game.socket.on("system.ffd20", runSocketFunction), Hooks.once("dragRuler.ready", (e2) => {
    const t3 = game.modules.get("enhanced-terrain-layer")?.active;
    dragRuler.registerSystem("ffd20", class extends e2 {
      get colors() {
        return [{ id: "walk", default: 65280, name: "SETTINGS.ffd20DragRulerWalk" }, { id: "dash", default: 16776960, name: "SETTINGS.ffd20DragRulerDash" }, { id: "run", default: 16744448, name: "SETTINGS.ffd20DragRulerRun" }];
      }
      getRanges(e3) {
        const t4 = convertDistance(this.getBaseSpeed(e3))[0], s2 = e3.actor.getRollData(), l2 = s2.armor.type >= ffd20.config.armorTypes.heavy, c2 = s2.attributes.encumbrance.level >= ffd20.config.encumbranceLevels.heavy;
        let u2 = 4;
        return (l2 || c2) && (u2 = 3), [{ range: t4, color: "walk" }, { range: 2 * t4, color: "dash" }, { range: t4 * u2, color: "run" }];
      }
      getBaseSpeed(e3) {
        const [s2, l2] = canvas.grid.grid.getGridPositionFromPixels(e3.x, e3.y), c2 = this.getSetting("useElevation"), u2 = e3.actor.system.attributes.speed;
        if (c2 && e3.document.elevation > 0) {
          const e4 = u2.fly.total;
          if (e4 > 0)
            return e4;
        }
        if (t3 && canvas.terrain.terrainFromGrid(l2, s2).some((e4) => "water" === e4.data.environment)) {
          const e4 = u2.swim.total;
          if (e4 > 0)
            return e4;
        }
        if (c2 && e3.document.elevation < 0) {
          const e4 = u2.burrow.total;
          if (e4 > 0)
            return e4;
        }
        return u2.land.total;
      }
      get settings() {
        return [{ id: "useElevation", name: "SETTINGS.ffd20DragRulerUseElevationName", hint: "SETTINGS.ffd20DragRulerUseElevationHint", scope: "world", type: Boolean, default: true }];
      }
    });
  }), callOldNamespaceHookAll("ffd20.postInit", "ffd20PostInit"), Hooks.callAll("ffd20PostInit");
}), Hooks.once("setup", function() {
  const e2 = ["abilities", "abilitiesShort", "alignments", "currencies", "distanceUnits", "itemActionTypes", "senses", "skills", "targetTypes", "timePeriods", "timePeriodsShort", "savingThrows", "ac", "acValueLabels", "featTypes", "featTypesPlurals", "conditions", "lootTypes", "flyManeuverabilities", "abilityTypes", "spellPreparationModes", "weaponGroups", "weaponTypes", "weaponProperties", "spellComponents", "spellSchools", "multiSchools", "spellLevels", "conditionTypes", "favouredClassBonuses", "armorProficiencies", "weaponProficiencies", "actorSizes", "abilityActivationTypes", "abilityActivationTypesPlurals", "limitedUsePeriods", "equipmentTypes", "equipmentSlots", "consumableTypes", "attackTypes", "buffTypes", "healingTypes", "divineFocus", "classSavingThrows", "classBAB", "classTypes", "measureTemplateTypes", "creatureTypes", "measureUnits", "measureUnitsShort", "languages", "weaponHoldTypes", "auraStrengths", "conditionalTargets", "bonusModifiers", "abilityActivationTypes_unchained", "abilityActivationTypesPlurals_unchained", "actorStatures", "ammoTypes", "classBaseMPTypes", "classSubTypes", "classBaseMPauto", "classCastingStats", "countforexp", "materiaAdvancement", "materiaRarity"], t2 = ["skills", "conditions", "conditionTypes", "consumableTypes", "creatureTypes", "featTypes", "weaponProperties", "spellSchools", "languages", "multiSchools"], doLocalize = (e3, s3) => {
    const l2 = Object.entries(e3).reduce((e4, t3) => ("string" == typeof t3[1] ? e4.push([t3[0], game.i18n.localize(t3[1])]) : "object" == typeof t3[1] && e4.push([t3[0], doLocalize(t3[1], `${s3}.${t3[0]}`)]), e4), []);
    return t2.includes(s3) && l2.sort((e4, t3) => {
      const s4 = "string" == typeof e4?.[1] ? e4[1] : e4[1]?._label, l3 = "string" == typeof t3?.[1] ? t3[1] : t3[1]?._label;
      return "misc" === e4[0] ? 1 : "misc" === t3[0] ? -1 : s4.localeCompare(l3);
    }), l2.reduce((e4, t3) => (e4[t3[0]] = t3[1], e4), {});
  };
  for (const t3 of e2)
    CONFIG.FFD20[t3] = doLocalize(CONFIG.FFD20[t3], t3);
  const s2 = ["buffTargets", "buffTargetCategories", "contextNoteTargets", "contextNoteCategories"];
  for (const e3 of s2)
    for (const [t3, s3] of Object.entries(CONFIG.FFD20[e3]))
      CONFIG.FFD20[e3][t3].label = game.i18n.localize(s3.label);
  tinyMCEInit(), registerSystemControls(), callOldNamespaceHookAll("ffd20.postSetup", "ffd20PostSetup"), Hooks.callAll("ffd20PostSetup");
}), Hooks.once("ready", async function() {
  const e2 = game.settings.get("ffd20", "tooltipConfig"), t2 = game.settings.get("ffd20", "tooltipWorldConfig");
  e2.disable || t2.disable || TooltipFFD20.toggle(true), window.addEventListener("resize", () => {
    ffd20.tooltip?.setPosition();
  });
  let s2 = game.settings.get("ffd20", "systemMigrationVersion");
  "number" == typeof s2 ? s2 = s2.toString() + ".0" : "string" == typeof s2 && s2.match(/^([0-9]+)\.([0-9]+)$/) && (s2 = `${s2}.0`);
  if (SemanticVersion.fromString("9.2.1").isHigherThan(SemanticVersion.fromString(s2)) && game.user.isGM && await migrateWorld(), await migrateSystemSettings(), function() {
    for (const e3 of Object.keys(Y))
      K[e3] = new CompendiumBrowser({ type: e3 });
  }(), !game.settings.get("ffd20", "dontShowChangelog")) {
    const e3 = game.settings.get("ffd20", "changelogVersion") || "0.0.1", t3 = SemanticVersion.fromString(e3), s3 = SemanticVersion.fromString(game.system.version);
    if (s3.isHigherThan(t3)) {
      new ChangeLogWindow(t3).render(true, { focus: true }), game.settings.set("ffd20", "changelogVersion", s3.toString());
    }
  }
  callOldNamespaceHookAll("ffd20.postReady", "ffd20PostReady"), Hooks.callAll("ffd20PostReady");
}), Hooks.on("canvasInit", function() {
  canvas.grid.diagonalRule = game.settings.get("ffd20", "diagonalMovement"), SquareGrid.prototype.measureDistances = measureDistances;
}), Hooks.on("renderChatMessage", (e2, t2, s2) => {
  hideRollInfo(e2, t2), hideGMSensitiveInfo(e2, t2), game.user.isGM || hideInvisibleTargets(0, t2), addTargetCallbacks(e2, t2), alterTargetDefense(e2, t2), game.settings.get("ffd20", "autoCollapseItemCards") && t2.find(".card-content").hide(), game.settings.get("ffd20", "hideChatButtons") && t2.find(".card-buttons").hide(), game.settings.get("ffd20", "accessibilityConfig"), addChatCardTitleGradient(0, t2), alterAmmoRecovery(e2, t2), t2.find(".tooltip").on("mousemove", (e3) => handleChatTooltips(e3));
}), Hooks.on("renderChatPopout", (e2, t2, s2) => {
  game.settings.get("ffd20", "autoCollapseItemCards") && t2.find(".card-content").hide(), game.settings.get("ffd20", "hideChatButtons") && t2.find(".card-buttons").hide();
}), Hooks.on("renderChatLog", (e2, t2) => ItemFFD20.chatListeners(t2)), Hooks.on("renderChatLog", (e2, t2) => ActorFFD20.chatListeners(t2)), Hooks.on("renderChatLog", (e2, t2) => addReachListeners(t2)), Hooks.on("renderChatPopout", (e2, t2) => ItemFFD20.chatListeners(t2)), Hooks.on("renderChatPopout", (e2, t2) => ActorFFD20.chatListeners(t2)), Hooks.on("renderAmbientLightConfig", (e2, t2) => {
  addLowLightVisionToLightConfig(e2, t2);
}), Hooks.on("renderTokenHUD", (e2, t2, s2) => {
  TokenQuickActions.addTop3Attacks(e2, t2, s2);
}), Hooks.on("updateActor", (e2, t2, s2, l2) => {
  {
    const s3 = t2.system?.attributes?.conditions || {};
    for (const [t3, l3] of Object.entries(s3))
      callOldNamespaceHookAll("ffd20.toggleActorCondition", "ffd20ToggleActorCondition", e2, t3, l3), Hooks.callAll("ffd20ToggleActorCondition", e2, t3, l3);
  }
}), Hooks.on("preCreateToken", async (e2, t2, s2, l2) => {
  const c2 = game.actors.get(t2.actorId);
  if (!c2?._calcBuffActiveEffects)
    return;
  const u2 = Object.values(c2?._calcBuffActiveEffects() ?? []).map((e3) => e3.icon);
  for (const e3 of u2)
    e3 && await loadTexture(e3);
}), Hooks.on("createToken", (e2, t2, s2) => {
  if (game.user.id === s2 && e2.actor.effects?.size) {
    const t3 = [];
    for (const s3 of e2.actor.effects) {
      if (!s3.origin)
        continue;
      const l2 = s3.origin.match(/Item\.(\w+)/)?.pop(), c2 = e2.actor.items.get(l2);
      c2 && t3.push({ _id: s3.id, origin: c2.uuid });
    }
    e2.actor.updateEmbeddedDocuments("ActiveEffect", t3, { render: false });
  }
}), Hooks.on("preDeleteToken", (e2, t2, s2) => {
  ffd20.tooltip?.unbind(e2.object);
}), Hooks.on("updateToken", function(e2, t2, s2, l2) {
  ffd20.tooltip?.unbind(e2), e2.actor?.sheet?.render();
}), Hooks.on("createItem", (e2, t2, s2) => {
  const l2 = e2.parent instanceof ActorFFD20 ? e2.parent : null;
  if (s2 === game.user.id) {
    if ("buff" === e2.type && true === getProperty(e2, "system.active") && (l2 && (callOldNamespaceHookAll("ffd20.toggleActorBuff", "ffd20ToggleActorBuff", l2, e2, true), Hooks.callAll("ffd20ToggleActorBuff", l2, e2, true)), e2.executeScriptCalls("toggle", { state: true })), "feat" === e2.type) {
      false === getProperty(e2, "system.disabled") && e2.executeScriptCalls("toggle", { state: true });
    }
    true === getProperty(e2, "system.equipped") && e2.executeScriptCalls("equip", { equipped: true });
    {
      const t3 = getProperty(e2, "system.quantity");
      "number" == typeof t3 && t3 > 0 && e2.executeScriptCalls("changeQuantity", { quantity: { previous: 0, new: t3 } });
    }
  }
}), Hooks.on("preDeleteItem", (e2, t2, s2) => {
  if (e2.actor) {
    const _getChildren = function(e3) {
      const t3 = [], s4 = getProperty(e3, "system.links");
      if (s4) {
        for (const [l3, c2] of Object.entries(s4))
          for (const s5 of c2)
            if ("children" === l3) {
              const l4 = e3.actor.items.get(s5.id);
              if (t3.push(s5.id), l4) {
                const e4 = _getChildren(l4);
                t3.push(...e4);
              }
            }
      }
      return t3;
    }, s3 = _getChildren(e2), l2 = [e2.id, ...s3].reduce((e3, t3) => (e3.includes(t3) || e3.push(t3), e3), []).filter((t3) => e2.actor.items.has(t3));
    if (s3.length > 0 && !t2.handledChildren)
      return CONFIG.Item.documentClass.deleteDocuments(l2, { parent: e2.actor, handledChildren: true }), false;
  }
}), Hooks.on("deleteItem", async (e2, t2, s2) => {
  if (s2 !== game.user.id)
    return;
  const l2 = e2.parent instanceof ActorFFD20 ? e2.parent : null;
  if (l2) {
    const t3 = getProperty(e2, "system.links");
    if (t3)
      for (const [e3, s3] of Object.entries(t3))
        for (const t4 of s3) {
          const s4 = l2.items.get(t4.id)?.links || {};
          s4[e3] && delete s4[e3];
        }
    "buff" === e2.type && true === getProperty(e2, "system.active") && (callOldNamespaceHookAll("ffd20.toggleActorBuff", "ffd20ToggleActorBuff", l2, e2, false), Hooks.callAll("ffd20ToggleActorBuff", l2, e2, false));
  }
}), Hooks.on("updateItem", async (e2, t2, s2, l2) => {
  if (l2 !== game.user.id)
    return;
  const c2 = e2.parent instanceof ActorFFD20 ? e2.parent : null;
  c2 && "buff" === e2.type && void 0 !== getProperty(t2, "system.active") && (callOldNamespaceHookAll("ffd20.toggleActorBuff", "ffd20ToggleActorBuff", c2, e2, getProperty(t2, "system.active")), Hooks.callAll("ffd20ToggleActorBuff", c2, e2, getProperty(t2, "system.active")));
}), Hooks.on("chatMessage", (e2, t2, s2) => !customRolls(t2, s2.speaker)), Hooks.on("renderActorDirectory", (e2, t2, s2) => {
  t2.find("li.actor").each((e3, t3) => {
    t3.addEventListener("drop", CurrencyTransfer._directoryDrop.bind(void 0, t3.getAttribute("data-document-id")));
  });
}), Hooks.on("renderItemDirectory", (e2, t2, s2) => {
  t2.find("li.item").each((e3, t3) => {
    t3.addEventListener("drop", CurrencyTransfer._directoryDrop.bind(void 0, t3.getAttribute("data-document-id")));
  });
}), Hooks.on("dropActorSheetData", (e2, t2, s2) => {
  "Currency" === s2.type && t2._onDropCurrency(event, s2);
}), Hooks.on("hotbarDrop", (e2, t2, s2) => {
  let l2;
  if ("Item" === t2.type)
    l2 = createItemMacro(t2, s2);
  else if ("skill" === t2.type)
    l2 = createSkillMacro(t2.skill, t2.actor, s2);
  else if ("save" === t2.type)
    l2 = createSaveMacro(t2.altType, t2.actor, s2);
  else {
    if (!["defenses", "cmb", "concentration", "cl", "bab"].includes(t2.type))
      return true;
    l2 = createMiscActorMacro(t2.type, t2.actor, s2, t2.altType);
  }
  if (null == l2 || l2 instanceof Promise)
    return false;
}), Hooks.on("renderTokenConfig", async (e2, t2) => {
  let s2 = e2.object;
  s2 instanceof Actor && (s2 = s2.prototypeToken);
  let l2 = `<div class="form-group"><label>${game.i18n.localize("FFD20.StaticSize")}</label><input type="checkbox" name="flags.ffd20.staticSize" data-dtype="Boolean"`;
  getProperty(s2, "flags.ffd20.staticSize") && (l2 += " checked"), l2 += "/></div>", t2.find('.tab[data-tab="appearance"] > *:nth-child(3)').after(l2);
  const c2 = true === getProperty(s2, "flags.ffd20.customVisionRules");
  if (!c2) {
    const e3 = t2.find('.tab[data-tab="vision"]');
    e3.find("select[name='sight.visionMode']").prop("disabled", true);
    const s3 = e3.find(".tab[data-tab='detection']");
    s3.find("input,select").prop("disabled", true), s3.find("a.action-button").unbind();
  }
  l2 = `<div class="form-group" title="${game.i18n.localize("FFD20.CustomVisionRules.Description")}"><label>${game.i18n.localize("FFD20.CustomVisionRules.Label")}</label><input type="checkbox" name="flags.ffd20.customVisionRules" data-dtype="Boolean"`, c2 && (l2 += " checked"), l2 += "/></div>", t2.find('.tab[data-tab="vision"]').append(l2), t2.find('.tab[data-tab="vision"] input[name="flags.ffd20.customVisionRules"]').on("change", async (t3) => (await e2._onSubmit(t3, { preventClose: true }), e2.render())), addLowLightVisionToTokenConfig(e2, t2), e2.setPosition();
}), Hooks.on("renderSidebarTab", (e2, t2) => {
  if (e2 instanceof Settings) {
    const e3 = $(`<button>${game.i18n.localize("FFD20.Changelog")}</button>`), s2 = $(`<button>${game.i18n.localize("FFD20.Help.Label")}</button>`);
    t2.find("#game-details").after($(`<h2>${game.i18n.localize("FFD20.title")}</h2>`), $("<div id='ffd20-details'>").append(e3, s2)), e3.click(() => {
      const e4 = Object.values(ui.windows).find((e5) => "changelog" == e5.id) ?? new ChangeLogWindow();
      e4.render(true, { focus: true });
    }), s2.click(() => ffd20.applications.helpBrowser.openUrl("Help/Home"));
  }
}), Hooks.on("getCompendiumDirectoryFFD20EntryContext", (e2, t2) => {
  t2.push({ name: game.i18n.localize("FFD20.Disable"), icon: '<i class="fas fa-low-vision"></i>', callback: (e3) => {
    const t3 = game.packs.get(e3.data("pack")), s2 = game.settings.get("core", "compendiumConfiguration")[t3.collection], l2 = true === getProperty(s2, "ffd20.disabled");
    t3.configure({ "ffd20.disabled": !l2 });
  } });
}), Hooks.on("deleteCombat", (e2, t2, s2) => {
  const l2 = game.user.isGM, c2 = getSkipActionPrompt(), { disableExperienceTracking: u2, openXpDistributor: m2 } = game.settings.get("ffd20", "experienceConfig");
  if (l2 && !u2 && e2.started && (m2 && !c2 || !m2 && c2)) {
    const t3 = e2.combatants.map((e3) => e3.actor), s3 = new ExperienceDistributor(t3);
    s3.getCharacters().length > 0 ? s3.render(true) : s3.close();
  }
}), Hooks.on("controlToken", () => {
  canvas.perception.update({ initializeLighting: true }, true);
});
{
  const expireFromTokens = function() {
    if (getFirstActiveGM() === game.user)
      for (const e2 of canvas.tokens.placeables)
        e2.combatant?.combat?.started || e2.actor?.expireActiveEffects && e2.actor.expireActiveEffects();
  };
  Hooks.on("updateWorldTime", () => {
    expireFromTokens();
  }), Hooks.on("canvasReady", () => {
    expireFromTokens();
  });
}
const handleChatTooltips = function(e2) {
  const t2 = $(e2.currentTarget), s2 = e2.currentTarget.getBoundingClientRect(), l2 = s2.x, c2 = s2.y, u2 = s2.width;
  t2.find(".tooltipcontent").css("left", `${l2}px`).css("top", `${c2}px`).css("width", `${u2}px`);
};
export {
  ActorBaseFFD20,
  ActorCharacterFFD20,
  ActorFFD20,
  ActorNPCFFD20,
  ActorSheetFFD20,
  ActorSheetFFD20Basic,
  ActorSheetFFD20Character,
  ActorSheetFFD20NPC,
  ActorSheetFFD20NPCLite,
  ActorSheetFFD20NPCLoot,
  BasicActorFFD20,
  ChatMessageFFD20,
  ItemAction,
  ItemActionSheet,
  ItemAttackFFD20,
  ItemBaseFFD20,
  ItemBuffFFD20,
  ItemChange,
  ItemClassFFD20,
  ItemConsumableFFD20,
  ItemContainerFFD20,
  ItemEquipmentFFD20,
  ItemFFD20,
  ItemFeatFFD20,
  ItemLootFFD20,
  ItemRaceFFD20,
  ItemSheetFFD20,
  ItemSheetFFD20_Container,
  ItemSpellFFD20,
  ItemWeaponFFD20,
  MeasuredTemplateFFD20,
  TokenDocumentFFD20,
  TokenFFD20,
  Xs as actionUse,
  Ws as applications,
  ta as canvas,
  ia as components,
  e as config,
  aa as dice,
  Js as documents,
  zs as migrations,
  la as registry,
  oa as utils
};
//# sourceMappingURL=ffd20.js.map
