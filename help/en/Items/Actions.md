# Actions

Each action defines singular way to use an item. Although most usable items have only one action associated with them, some may have more, such as a dagger might have stab and throw actions.

## Usage Tab

Usage tab defines how the action is used, action cost, charge cost, its targeting, range, duration, area, ammunition usage and similar information. Anything that is needed to know _before_ you can resolve the effects of the action.

## Action Tab

Here you define the actual effects of the action.

### Attack

Attack Roll Bonus is used to define any modifiers specific to this attack, such as two-weapon fighting penalty

### Extra Attacks

You configure iteratives and other additional attacks that are performed on full-attack here.

You can add static extra attacks here with specific modifiers that are performed on full attack always, for example if you have multiple identical claw attacks, defining them in the static top part is an easy way to deal with them.

The formula-based extra attacks below is for more advanced cases that previously were used for BAB iterative handling or other similar complex or automatically scaling cases.

#### Options

| Option                      | Details                                                                                                                         |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| Iteratives                  | BAB based extra attacks are automatically accounted for.                                                                        |
| Flurry of Blows (Chained)   | Original _monk_ two-weapon fighting style _Flurry of Blows_. Requires _BAB override_ to be configured. See below for details.   |
| Flurry of Blows (Unchained) | Unchained Monk's Flurry of Blows. See below for details.                                                                        |
| Iteratives + Custom         | Same as the first option but with additional customization options.                                                             |
| Custom                      | Fully customizable, no automatically handled iteratives. Most useful for spells and natural attacks with specific requirements. |

##### Flurry

Chained flurry will display the two-weapon fighting penalty (`-2`) in attack dialog always as it is integrated. This will not be applied when performing singular attacks.

Chained flurry is easiest to handle for single class monk, ensuring the ability is linked to monk class at bottom of details tab, and adding BAB override in the attack simply as `@class.level`.

Both chained and unchained flurry require you set class association for the attack item to the monk class at bottom of the item's details tab.

#### Formula-based extra attacks

**Variables**

| Variable       | Use                                                                                             |
| :------------- | :---------------------------------------------------------------------------------------------- |
| `@bab`         | Short-hand for `@attributes.bab.total` and may later has more meaning.                          |
| `@attackCount` | How manyth attack in the defined set it is, starting with `0`. Only accounting for the formula. |

Historically the following were the BAB iterative formulas.

| Use          | Formula                                       |
| :----------- | :-------------------------------------------- |
| Attack count | `min(3, ceil(@attributes.bab.total / 5) - 1)` |
| Attack bonus | `@formulaicAttack * -5`                       |

### Damage / Healing

**Base Formula** is for the base damage or healing of the action. This is multiplied on critical if the action has an attack roll.

**On-critical Bonus Formula** is damage added _only_ to critical damage rolls. This is multiplied by critical multiplier with one subtracted, so _Flaming Burst_ for example should be entered simply as `1d10` for all weapons.

**Non-multiplying Bonus Formula** is damage added to base damage that is unaffected by critical hits, usually this is elemental and precision bonus damge, such as from magical weapon qualities.

_Historical note: Formerly these were labeled in order: Damage Formula, Critical Damage Bonus Formula, and Non-critical Damage Bonus Formula_

See [Formulas](Help/Formulas) article for more help in how to write damage formulas.

#### Special Variables

| Variable       | Description                                        |
| :------------- | :------------------------------------------------- |
| `@critCount`   | Which critical multiplier pass is being processed. |
| `@attackCount` | Which attack is being processed.                   |

#### Advanced Formulas

Critical-only bonus damage that is not multiplied:
`if(eq(@critCount, 1), 1d6)`

Damage only on the second attack:
`if(eq(@attackCount, 1), 2d8)`

## Miscellaneous

This allows you to define a template for the action or sound effect.

The template size formula should resolve to number of feet.

Non-square rectangles are not possible, nor placing multiple templates.

## Conditional Modifiers

Conditional Modifiers are useful for any modifiers that affect specific attack or are only occasionally true.

The available options here depend on the action and item they're used on.

These are presented as choices in the attack dialog. Any default on conditionals are enabled even when skipping the dialog.
