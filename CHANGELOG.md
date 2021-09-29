# Changelog
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
- Updated to match PF1e version 0.79.0 and to be compatable with Foundry 0.8.9

## 0.2.0
### Change Log
- Updated to match PF1e version 0.78.18 and to be compatable with Foundry 0.8.8

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
- added ffxiv fan kit inmages

## 0.1.11

### Change Log
- fixes for a few backend problems

## 0.1.10

### Change Log
- Updated to match PF1 version 0.77.21 4/16/2012 sans step 4.5 as it breaks mp
- Cleaned a few more errors
- added status effects to the information
- updated skills with more correct information

## 0.1.9

### Change Log
- Updated to match PF1 version 0.77.20
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
- fixed bonus mp for non-casters, you dont get any

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
- updated from the Pathfinder 1 github on 3/6/2021

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
- updated from the Pathfinder 1 github

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