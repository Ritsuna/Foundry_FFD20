# Classes

Class item covers base PC classes, NPC classes, racial HD, prestige classes, and mythic paths.

## Homebrew

Custom BAB and saving throw formulas accept only few special variables:

| Variable   | Description                                 |
| :--------- | :------------------------------------------ |
| `@level`   | Same as `@item.level` but only used here.   |
| `@hitDice` | Same as `@item.hitDice` but only used here. |

No other variables are available for these as they're resolved before anything else is calculated.
