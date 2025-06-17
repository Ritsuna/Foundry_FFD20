# Formulas

This section is currently a Work In Progress (WIP).

Formulas are an important aspect in the Pathfinder 1e system. They can be as simple as a single numerical value, or as complex as single lines of code. They play a great role in item changes.

## Variables

### General Actor Variables

For a quick reference, you can find a lot of this information in tooltips on actor sheets as well.

#### `@abilities.X.total`

The total value of an ability score. Replace `X` with one of the following: `str`, `dex`, `con`, `int`, `wis`, `cha`.

#### `@abilities.X.mod`

The modifier of an ability score. Replace `X` with one of the following: `str`, `dex`, `con`, `int`, `wis`, `cha`.

#### `@attributes.hd.total`

The total hit die the actor has. This is a combination of class levels and racial hit die, and it excludes mythic tiers.

#### `@attributes.savingThrows.X.total`

The total bonus of the appropriate saving throw for that actor. X can be either 'fort' (Fortitude), 'ref' (Reflex) or 'will' (Will)

#### `@attributes.savingThrows.X.base`

The total bonus of the appropriate saving throw for that actor. X can be either 'fort' (Fortitude), 'ref' (Reflex) or 'will' (Will)

#### `@attributes.encumbrance.level`

The current encumbrance level of the actor.

- `0`: Light Load
- `1`: Medium Load
- `2`: Heavy Load

#### `@armor.type`

The type of armor the actor is wearing.

- `0`: No Armor
- `1`: Light Armor
- `2`: Medium Armor
- `3`: Heavy Armor

#### `@shield.type`

The type of shield the actor is holding.

- `0`: No Shield
- `1`: Miscellaneous Shield (such as a buckler)
- `2`: Light Shield
- `3`: Heavy Shield
- `4`: Tower Shield

#### `@combat.round`

The current round of combat, or `0` if not in combat.

### Attack & Damage Variables

These are only available in attack and damage rolls. Some may be more limited in availability than others.

These are not documented or easily discoverable otherwise than this documentation.

#### `@critMult`

The critical multiplier of the attack, or `1` if the attack is not a critical threat.
Only appropriate for use in damage rolls and attack and effect notes.

#### `@sizeBonus`

Effective attack roll bonus or penalty from size.

#### `@powerAttackBonus`

Base bonus damage given by power attack to individual damage. E.g. two-handed attack at level 2 would always give 3 for this.

Defaults to `0` if power attack is disabled.

#### `@powerAttackPenalty`

Attack penalty power attacking causes. Goes hand in hand with `@powerAttackBonus`.

For example furious focus is easy to implement with conditional attack roll modifier of `-@powerAttackPenalty` on the first attack.

Defaults to `0` if power attack is disabled.

#### `@attackCount`

Zero-indexed counter for which attack is being processed. So if this was placed as damage bonus, it would give you `0`, `1`, `2`, `3`, etc. bonus to damage as the attacks progress.

Can also be used for ternaries to add modifications to specific attack, e.g. `eq(@attackCount, 0) * 4` would add 4 to first attack but no other.

#### `@base` & `@previous`

Damage rolls have additional `@base` and `@previous` data. Both have identical format, but `@base` records the first damage roll instance, while `@previous` is always the one preceding the one currently being processed.

Following is with the example damage formula of `sizeRoll(2, 6, @size)` for medium creature.

| Variable          | Description                                                        | Example Output |
| :---------------- | :----------------------------------------------------------------- | :------------- |
| `@base.total`     | Total damage rolled with base dice.                                | `9`            |
| `@base.dice`      | Dice used for the base roll. Only first die expression is counted. | `2d6`          |
| `@base.die.size`  | Die size in `@base.dice`.                                          | `6`            |
| `@base.die.count` | Dice count in `@base.dice`.                                        | `2`            |

So, for example, if you have `sizeRoll(2, 6, @size)` as the first one, second one having plain `1d8` as baseline.

Entering your third damage instance:

- `@base.dice` would give `2d6` since it is referring to the base damage declared in the first instance.
- `@previous.dice` would give `1d8` since that was the one preceding the current one.

## Functions

Foundry (and by extension this system) allow using JavaScript's [`Math` functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in its formulas.
Information about writing formulas using such expressions and referencing actor and item data can be found in [Foundry's Knowledge Base](https://foundryvtt.com/article/dice-advanced/).
In addition to the functions mentioned there, the Pathfinder 1e system provides some specific helpers available for use in some formulas.

Note on booleans: zero (`0`) is false, any non-zero is true.

### `sizeRoll`

Alters a damage roll to that of another size category.

**Format**: `sizeRoll(count, size, target, origin)`

| Parameter | Optional | Default | Notes                                         |
| :-------- | :------- | :------ | :-------------------------------------------- |
| count     | No       |         |                                               |
| size      | No       |         |                                               |
| target    | Yes      | `4`     | Target size to transform to.                  |
| origin    | Yes      | `4`     | Origin size that `count` and `size` describe. |

**Example:** `sizeRoll(1, 8, @size)` – Rolls 1d8 for medium actors, and alters the damage formula according to the calling actor's current size.

**Example:** `sizeRoll(1, 4, 6, 2)` – Translates a damage roll of `1d4` from a tiny actor (size `2`) to a huge actor (size `6`); Output: `3d6`

| `@size` | Actual     |
| :------ | :--------- |
| `0`     | Fine       |
| `1`     | Diminutive |
| `2`     | Tiny       |
| `3`     | Small      |
| `4`     | Small      |
| `5`     | Large      |
| `6`     | Huge       |
| `7`     | Gargantuan |
| `8`     | Colossal   |

Normally you should not need the fourth parameter. It's mainly useful if you have damage for non-medium character and use that info to fill the first two parameters, then the fourth parameter should include the size for which the first two were for.

The function does not really do anything useful with less than 3 parameters provided.

You can also use `@item.size` to use the item's own size instead of `@size` which refers to actor's size.

Example of common uses:

- `sizeReach(1, 8, @size)`
- `sizeReach(2, 6, @size, 5)`

### `sizeReach`

Generates a number equal to the reach of a creature of a certain size and stature.

**Format**: `sizeReach(size, reach, tall)`

| Parameter | Optional | Default |
| :-------- | :------- | :------ |
| size      | No       |         |
| reach     | Yes      | false   |
| tall      | Yes      | true    |

**Example:** `sizeReach(@size + 1, false, @traits.stature)` – Returns the normal melee reach as if the actor was 1 size category higher.

**Example:** `sizeReach(6, true, "long")` – Returns the reach a huge, long actor would have with a reach weapon.

### `ifelse`

If-Else logic, serving similar purpose to what ternary syntax did before, providing a method to have conditional numbers in the formulas.

**Format**: `ifelse(condition, if-true, if-false)`

| Parameters | Optional | Notes               |
| :--------- | :------- | :------------------ |
| condition  | No       |                     |
| if-true    | No       |                     |
| if-false   | No       | The else condition. |

**Example:** `ifelse(gt(@class.level, 7), 4, 2)` – Returns 4 if class level is greater than 7, and 2 otherwise.

### `if`

Alias for `ifelse()` with `if(a, b)` being equivalent of `ifelse(a, b, 0)`, the else statement set to zero.

**Format**: `if(condition, if-true)`

| Parameter | Optional |
| :-------- | :------- |
| condition | No       |
| if-true   | No       |

**Example:** `if(gt(@attributes.hd.total, 5), 2)` – gives 2 if HD is greater than 5, and zero otherwise.

### `lookup`

Lookup function when none of the above provide meaningful solution.

**Format**: `lookup(search, fallback, results...)`

| Parameter | Optional | Notes                                          |
| :-------- | :------- | :--------------------------------------------- |
| search    | No       |                                                |
| fallback  | No       | Returned if search fails or goes out of range. |
| results   | No       | Any number of results                          |

Fallback value is provided if the search formula goes off bounds. If other form of bounding is desired, include it in your formula.

The results are 1-indexed, so 1 will give the first result. You can also treat the parameters as 0 indexed by using the fallback as result for 0, tho this does not strictly follow the underlying logic.

**Example**: `lookup(1d6, 0, 0, 2, 2, 4, 4, 5)` -
Resulting in 1d6 roll turning into [1=0, 1=2, 3=2, 4=4, 5=4, 6=5] mapping.

**Example**: `lookup(min(@class.level, 7), 0, 1, 1, 1, 2, 2, 2, 4)` -
Resulting in 1 to 4 range from level being 1 to 7 or higher with 7 or higher giving 1 more than previous increments.

### Basic Logic Functions

These return one (`1`) if the comparison is true, and zero (`0`) if not, allowing simple math logic.

| Function              | Name  | Math | Example                                                         | Example Explanation                                                   |
| :-------------------- | :---- | :--- | :-------------------------------------------------------------- | :-------------------------------------------------------------------- |
| Equal                 | `eq`  | `=`  | `eq(@attributes.hd.total, 5)`                                   | HD equal to 5                                                         |
| Not equal             | `ne`  | `!=` | `ne(@attributes.hd.total, 5)`                                   | HD not equal to 5                                                     |
| Less than             | `lt`  | `<`  | `lt(@class.level, 5)`                                           | Class level is less than 5                                            |
| Less or equal than    | `lte` | `<=` | `lte(@class.level, 9)`                                          | Class level is 9 or less                                              |
| Greater than          | `gt`  | `>`  | `gt(@class.level, 5)`                                           | Class level is greater than 5                                         |
| Greater or equal than | `gte` | `>=` | `gte(@class.level, 9)`                                          | Class level is 9 or greater                                           |
| And                   | `and` |      | `and(lt(@attributes.encumbrance.level, 2), lt(@armor.type, 3))` | Encumbrance level is lesser than 2 and worn armor type is less than 3 |
| Or                    | `or`  |      | `or(@armor.type, @shield.type)`                                 | Is equipped with any armor or shield (types is non-zero)              |
| Exclusive or          | `xor` |      | `xor(@armor.type, @shield.type)`                                | Is wearing armor or shield, but not both.                             |
| Not                   | `not` |      | `not(@armor.type)`                                              | Is not wearing armor (armor type is non-zero)                         |

🛈 Note! And, Or, and Exclusive Or functions allow any number of parameters.
