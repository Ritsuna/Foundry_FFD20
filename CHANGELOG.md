# Changelog
## 12.11.7.0 - 2025-06-16

### Match PF1e v11.7

## 12.11.6.0 - 2025-05-20

### Match PF1e v11.6

## 12.11.5.0 - 2025-05-10

### Match PF1e v11.5

## 12.11.4.0 - 2025-04-30

### Match PF1e v11.4

## 12.11.3.0 - 2025-03-12
### Changelog
- update to pf1e v11.3
- fixed mp damage error
- fixed materia item layout

## 12.11.0.0 - 2025-02-01

### Important Notice: Formula Syntax Changes

Due to core Foundry VTT updates, some previously supported formula syntax will no longer function in the Pathfinder 1e system.

- For **existing worlds**, the module [**Better Roll Formulas**](https://foundryvtt.com/packages/better-roll-formulas) (by KitKat) is recommended to ensure legacy content immediately remains compatible.
- For **new worlds**, the system now provides additional formula functions as replacements. Refer to the system documentation (linked in the settings sidebar) for details.

### Changelog
- update to pf1e v11.0

## 11.10.7.0 - 2024-09-01

### Changelog

- update to pf1e v10.7
- changed version numbering to aa.bb.c.d for aa is the lowest version of foundry this system will work with, bb.c is the version of pathfinder 1e that it is in line with, and d is personal version.
- got mp calculations worked out as well as mp recoverry finally programmed in

## 10.2.7 - 2023-11-15

### Changelog

- update to pf1e v9.5
- moved a few small back end things around for easier adjustments
- fixed bonus mp from items(was not being counted before)
- added mp on spellbook tab
- shifting gil back to gp on backend to make migration to module easier later, gil in containers might disappear. for itempiles just change pgil to pp, gil to gp, sgil to sp, and cgil to cp

## 10.2.2 to 10.2.6 - 2023-09-13

### Changelog

- fixed small errors and added the drag and drop fix from pf1e

## 10.2.1 - 2023-08-30

### Changelog

- fixed missing div tag

## 10.2.0 - 2023-08-30

### Changelog

- updated to v10/11 and pf1e v9.4 and prepping for change over to module rather then standalone system

## 10.1.7 - 2023-03-30

### Changelog

- added the ability to add harmless and object to spell resistance notes on spells

## 10.1.6 - 2023-03-12

### Changelog

- readded old images, migrating to better folder structure

## 10.1.5 - 2023-03-12

### Changelog

- updated to match with Pathfinder 1e version 0.82.5

## 10.1.4 - 2022-11-10

### Changelog

- fixed buff error when trying to apply a buff to caster level or concentration

## 10.1.3 - 2022-11-10

### Changelog

- fixed invisibility
- fixed damage types
- still broken is the tags for weapon, armor and languages outside of character interface(they still work, just not easily visible)

# Changelog

## 10.1.2 - 2022-10-20

### Changelog

- update to foundry v10 and pf1 0.82.2

# Changelog

## 10.1.0 - 2022-10-20

### Changelog

- update to pf1 0.82.0

# Changelog

## 9.1.0 - 2022-10-20

### Changelog

- update to pf1 0.80.0

## 0.2.26 - 2022-10-18

### Changelog

- update to pf1 0.79.2

## 0.2.25

### Bug Fixes

- CMB and CMD bug fix

## 0.2.24

### Change Log

- Updated to follow 0.79.1

### Bug Fixes

- Attack display doubling sometimes in combat tab (!258 by mkahvi)
- `/damage` and `/heal` still triggered Dice So Nice to roll dice twice (#1015)
- Proficiency penalty was incorrect when rolling (!260 by mkahvi)
- Wound thresholds were ignoring temp HP (!264 by mkahvi) (#1032)
- Skill lock button was invisible on NPC sheets (!268 by mkahvi) (#1036)
- Dice modifiers could break if they had special characters `<>`
- World migrations reset the max HP of lite sheet using actors to 0 (#1031)
- Some attack bonuses/penalties weren't shown (!272 by mkahvi) (#784)
- Some maneuver bonuses/penalties weren't shown (!271 by mkahvi) (#714, #481)
- Various fixes to attack tooltips (!270 by mkahvi) (#1034)
- Attack, Feat and Spell DC labels weren't being shown anymore (#988) (!292)
- Token elevation handling was handling relative negative values as positive (#1047) (!295)
- Item tags were visible to players while unidentified, possibly revealing its actual name (#1057) (!293)
- Sources which set an actor's maximum dexterity bonus to 0 weren't being shown (#1039) (!289 by mkahvi)
- Skills incorrectly added zero ACP values to their sources (!287 by mkahvi)
- Changing a buff's icon didn't update the icon on tokens for that actor (!280)

### Pathfinder Changelog

- Container item deletion confirmation dialog says what is being deleted (!259 by mkahvi) (#1004)
- Add conditionals and buffs to damage preview on actor sheets (!262 by mkahvi)
- Add more spell details (!277 by mkahvi)
- Allow translating sheet names (!273 by mkahvi)
- Added a dialog for distributing experience points after a combat (!284)

### API

- Added Hook `itemUse`:`postAttack` before chat message is generated (!267 by mkahvi) (#487)

### Compendium

- Wild Shape's casts per day formula was incorrect (!283 by scapegoat57)

## 0.2.23

### Change Log

- small updates

## 0.2.2

### Change Log

- fixed missing materia information

## 0.2.1

### Change Log

- fixed a few bugs
- Updated to match PF1e version 0.79.0 and to be compatible with Foundry 0.8.9

## 0.2.0

### Change Log

- Updated to match PF1e version 0.78.18 and to be compatible with Foundry 0.8.8

## 0.1.25

### Change Log

- added more spell class combos

## 0.1.24

### Change Log

- added more spell class combos

## 0.1.23

### Change Log

- MP bug, again

## 0.1.18 to 0.1.22

### Change Log

- added another school combo
- fixed a few small bugs
- Fixed bonus mp bug
- fixed base template

## 0.1.17

### Change Log

- Updated to pf1e 77.24
- filled out a bit more on schools
- smaller coins added

## 0.1.16

### Change Log

- upped Encumbrance limits to STR 50
- This system will not be getting updated to 0.8.6 for some time

## 0.1.14

### Change Log

- Added divination school type

## 0.1.14

### Change Log

- Added luck and unluck
- added another multi-school type

## 0.1.13

### Change Log

- added fields for up to 4 extra resources
- added information to be entered for multi-school spells

## 0.1.12

### Change Log

- added ffxiv fan kit images

## 0.1.11

### Change Log

- fixes for a few backend problems

## 0.1.10

### Change Log

- Updated to match PF1e version 0.77.21 4/16/2012 sans step 4.5 as it breaks mp
- Cleaned a few more errors
- added status effects to the information
- updated skills with more correct information

## 0.1.9

### Change Log

- Updated to match PF1e version 0.77.20
- Cleaned a few errors

## 0.1.8

### Bug Fixes

- fixed some backend code for meteria

## 0.1.7

### Bug Fixes

- fixed some backend code for alchemicals

## 0.1.6

### Bug Fixes

- more fixed  backend code

## 0.1.5

### Bug Fixes

- fixed some backend code

## 0.1.4

### Bug Fixes

- handling of currency
- a few small cleanups of calls

## 0.1.3

### Bug Fixes

- fixed bonus mp for non-casters, you don't get any

## 0.1.2

### Bug Fixes

- fixed bonus mp to calculate after all modifications to stats are done

## 0.1.1

### Bug Fixes

- corrected some spell casting mp information

## 0.1.0

### WARNINGS and WORKAROUNDS

- Currently Limitbreaks are fussy, current workaround is to link it to the @attributes.limitbreak.max with charges but this can cause too many charges. please ask your players to remember this and not abuse it
- Materia exp is using the full value of combat exp gained, this is to reduce the amount of math the player needs to do. I dont know how exp distribution works so im not touching it yet.

### Bug Fixes

- character sheet error fixed

### Change Log

- Got MP calculations to work
- cleaned up some

### Update log

- updated from the pf1 github on 3/6/2021

### Database work

- cleaned up some possable errors

## 0.0.9

### Bug Fixes

- more localization files updated and corrected
- corrected most image links

### Changelog

- updated compendium search function for classes

## 0.0.8

### Bug Fixes

- localization files updated and corrected

### Changelog

- added other mana progression
- made Verbal and Somatic default true
- added compendium lookups for skills, need to create and add repair

## 0.0.7

### Bug Fixes

- localization files updated

## 0.0.6

### Bug Fixes

- fixed exp and non-exp class calclations

## 0.0.5

### Bug Fixes

- Certain elements on sheets not updating
- localization files updated

### Changelog

- got MP working, auto MP backburnered until code can be cleaned up
- updated from the Final Fantasy D20 github

## 0.0.4

### Bug Fixes

- localization files updated

### Changelog

- added class types to account for core, base and hybrid as well as archatypes

## 0.0.3

### Bug Fixes

- localization files updated

### Changelog

- so many changes will be better about this in the future

## 0.0.2

### Bug Fixes

- localization files updated

### Changelog

- so many changes will be better about this in the future

## 0.0.1

### Changelog

- started building the system off PF1
