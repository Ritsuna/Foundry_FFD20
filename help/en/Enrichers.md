# Text Enrichers

Common input format: `@Command[key;options]{label}`

Options format: `key=value` pairs separated with semicolon (`;`)

Label adds a prefix to the button, for example `@Ability[str]{Flex}` would show up as `Flex: Strength`. Some enrichers deviate from this however.

Roll data is drawn from the card speaker by default.

## Common Options

| Option    | Example                                   | Explanation                                                                                                                                                                                                   |
| :-------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `speaker` | `@Use[Cure Light Wounds;speaker]`         | Limit activation to card speaker. Alias of `as=speaker`.                                                                                                                                                      |
| `as`      | `@Use[Cure Light Wounds;as=speaker]`      | Limit or guide activation.<br>`speaker`, `sheet`, and `auto` are the only valid options for now. Speaker is for chat cards, sheet is for sheets, and auto tries to automatically choose either of the former. |
| `bonus`   | `@Skill[per;bonus=15]`                    | Bonus to the roll.                                                                                                                                                                                            |
| `roll`    | `@Skill[dip;roll=10]`                     | Roll replacement, e.g. for Take 10 or fortune effect.                                                                                                                                                         |
| `vars`    | `@Heal[@attributes.hd.total;vars=target]` | Roll data is pulled from something else than speaker.<br>`target` is only valid option for now.                                                                                                               |

## Button Enrichers

These enrichers provide buttons you may press.

### `@Ability`

| Input           | Explanation                         |
| :-------------- | :---------------------------------- |
| `@Ability[str]` | Roll strength with any valid actor. |

### `@Action`

Trigger action from same item as the card is for.

Meant as a shorthand for `@Use` when you don't need to refer to different items.

#### Examples

| Input                     | Explanation                           |
| :------------------------ | :------------------------------------ |
| `@Action[Grab]{Followup}` | Trigger Grab action on the same item. |

### `@Apply`

Apply defined buff (by UUID or name) to actors. The buff is set to active state automatically.

If the item is found, displays the item name as default label.

If name is defined instead of UUID, item is searched from items directory and compendiums.

#### Examples

| Input                                                              | Explanation                                                         |
| :----------------------------------------------------------------- | :------------------------------------------------------------------ |
| `@Apply[Special Mood]`                                             | Add custom buff with level untouched.                               |
| `@Apply[Compendium.ffd20.commonbuffs.Item.IlO0CNpAIKZtNYu8;level=5]` | Add Mage Armor with buff level set to 5.                            |
| `@Apply[Rage;level=3]`                                             | Add Rage with buff level set to 10.                                 |
| `@Apply[Shield;level=@cl]`                                         | Add Shield at caster level as defined by action at time of casting. |

#### Special Options

- `level` for setting buff level.

### `@Toggle`

Toggle existing buff by defined name on selected actors.

#### Examples

| Input                                     | Explanation                                                                       |
| :---------------------------------------- | :-------------------------------------------------------------------------------- |
| `@Toggle[Mage Armor;level=@cl;type=buff]` | Toggle existing Mage Armor buff and set its level to `@cl` if it's being enabled. |
| `@Toggle[Rage;type=buff;disable]`         | Toggle off Rage buff.                                                             |
| `@Toggle[Bless;enable;level=5;type=buff]` | Toggle on Bless buff with level of 5.                                             |

#### Special Options

- `level` for setting buff level.
- `type` item type to toggle

### `@Browse`

Open specified compendium browser.

Currently only supports raw IDs as they appear in `ffd20.applications.compendiums`.

Unlike other enrichers, custom label replaces the text entirely.

#### Special Options

- `tag` for a tag to filter by. Can be repeated for multiple tags.

#### Examples

| Input                                             | Explanation                                                                                                                    |
| :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `@Browse[feats]`                                  | Open feats browser.                                                                                                            |
| `@Browse[items;tag=Mundane]`                      | Open items browser for mundane items.                                                                                          |
| `@Browse[feats;tag=Sneak Attack;tag=Ninja Trick]` | Open feats browser for sneak attack talents that are also ninja tricks. Plus is used here since comma is present in some tags. |

### `@Condition`

Add, remove, toggle or link conditions.

If toggle or removal is not defined, the condition is added.

Label replaces the entire text unlike with most enrichers.

#### Examples

| Input                               | Explanation                            |
| :---------------------------------- | :------------------------------------- |
| `@Condition[nauseated]`             | Add nauseated condition.               |
| `@Condition[grappled;toggle]`       | Toggle grappled condition.             |
| `@Condition[dazed;disable]{Undaze}` | Remove dazed condition.                |
| `@Condition[fatigued;info]`         | Link sleep condition compendium entry. |
| `@Condition[fatigued;duration=10m]` | Add fatigued condition for 10 minutes. |
| `@Condition[blind;duration=3d6]`    | Add blinded condition for 3d6 rounds.  |

#### Special Options

- `toggle` - Toggle condition.
- `remove` - Remove condition.
- `disable` - Alias for remove.
- `info` - Link compendium entry as defined in
- `duration` - Simple duration (e.g. 15s) or duration formula. Formula result is always treated as rounds.

### `@Damage`

Damages selected tokens by defined amount.

The key is damage formula instead.

#### Examples

| Input                  | Explanation                                    |
| :--------------------- | :--------------------------------------------- |
| `@Damage[2d4]`         | Rolls 2d4 and damages the actors by that much. |
| `@Damage[6;nonlethal]` | Causes 6 nonlethal damage.                     |

#### Special Options

- `nonlethal` - Adds nonlethal damage.
- `card` - Generates a card for use instead of applying directly. No targeting is required.

### `@Draw`

Draws an entry from the given Roll Table.

#### Examples

| Input                                                          | Explanation                                                                 |
| :------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `@Draw[Your Roll Table]`                                       | Draws from the tabled named "Your Roll Table" within your world.            |
| `@Draw[Compendium.ffd20.roll-tables.RollTable.NQ3T7rnXC5agjl6D]` | Draws from the system's Confusion table.                                    |
| `@Draw[Your Roll Table]{Displayed Name}`                       | Draws from "Your Roll Table" but the button shows "Displayed Name" instead. |

### `@Heal`

Heals selected tokens by defined amount.

The key is heal formula instead.

**Note!** Label replaces formula display instead of becoming a prefix.

#### Examples

| Input                | Explanation                                  |
| :------------------- | :------------------------------------------- |
| `@Heal[3d6]`         | Rolls 3d6 and heals the actors by that much. |
| `@Heal[6;nonlethal]` | Heals 6 nonlethal damage.                    |
| `@Heal[17;dual]`     | Heals 17 health _and_ nonlethal damage.      |

#### Special Options

- `nonlethal` - Heals nonlethal damage.
- `dual` - Heals both normal health and nonlethal.
- `card` - Generates a card for use instead of applying directly. No targeting is required.

### `@Save`

#### Examples

| Input                       | Explanation                                                               |
| :-------------------------- | :------------------------------------------------------------------------ |
| `@Save[ref]{Dodge!}`        | Roll reflex saving throw with any valid actor.                            |
| `@Save[fort;dc=15]{Resist}` | Roll fortitude save, displaying DC 15 as additional detail in the button. |

#### Special Options

- `dc` - Defines DC for the roll. Only used for display.

### `@Skill`

Skill roll button.

#### Examples

| Input                                   | Explanation                                                                                  |
| :-------------------------------------- | :------------------------------------------------------------------------------------------- |
| `@Skill[acr]`                           | Roll acrobatics with any valid actor.                                                        |
| `@Skill[acr;bonus=15;roll=10]{Take 10}` | Roll acrobatics with Take 10, +15 bonus, and with extra Take 10 label, with any valid actor. |
| `@Skill[acr;speaker]`                   | Roll acrobatics as card's speaker.                                                           |
| `@Skill[per;info]`                      | Link to perception's compendium entry.                                                       |
| `@Skill[hea;dc=15]`                     | Roll Heal, display DC 15 threshold.                                                          |

#### Special Options

- `info` - Button instead links to the compendium entry as configured in `ffd20.config.skillCompendiumEntries`
- `dc` - Defines DC for the roll. Only used for display.

#### Limitations

- Subskills and custom skills are not supported.

### `@Use`

Item use button.

#### Examples

| Input                                              | Explanation                                                                                             |
| :------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| `@Use[Hero Points]`                                | Use hero points item's default action as any valid actor.                                               |
| `@Use[Fireball#cast;type=spell;speaker]{Cast}`     | Use Fireball spell's cast action as card's speaker.                                                     |
| `@Use[Fireball#tag:cast;type=spell;speaker]{Cast}` | Use Fireball spell's cast action with card's speaker, using action tag instead of name to match action. |

#### Special Options

| Option     | Description                                     |
| :--------- | :---------------------------------------------- |
| `type`     | Item type                                       |
| `#tag:TAG` | Action tag, needs to be part of the item name.  |
| `#id:ID`   | Action ID, needs to be part of the item name.   |
| `#name`    | Action name, needs to be part of the item name. |

## Information Enrichers

These enhance provided information.

### `@Distance`

Informational distance conversion and display.

Format: `@Distance[value;options]`

Value parameter can either be a formula, or a number with `ft` or `m` unit.

Default unit is imperial feet unless otherwise specified.

#### Examples

Examples outputs are with imperial unit system enabled.

| Input                     | Explanation                                                                  | Output        |
| :------------------------ | :--------------------------------------------------------------------------- | :------------ |
| `@Distance[100]`          | Convert and display 100 feet.                                                | `100 ft`      |
| `@Distance[9 * 4;metric]` | Convert and display result of 9×4, treating the math result to be in meters. | `120 ft`      |
| `@Distance[30 ft;dual]`   | Convert and display 30 feet in both imperial and metric.                     | `30 ft (9 m)` |

#### Special Options

| Options    | Description                                  |
| :--------- | :------------------------------------------- |
| `dual`     | Displays both imperial and metric distances. |
| `metric`   | Treats provided distance as meters.          |
| `imperial` | Treats provided distance as feet.            |

### `@Source`

Source book display.

Format: `@Source[ID;options]`

#### Examples

| Input                        | Explanation                            | Output                     |
| :--------------------------- | :------------------------------------- | :------------------------- |
| `@Source[CRB]`               | Book abbreviation.                     | `Core Rulebook`            |
| `@Source[CRB;pages=198-201]` | Book abbreviation with page reference. | `Core Rulebook p. 198-201` |
| `@Source[PZO1135;pages=182]` | Book ID with page reference.           | `Horror Adventures p. 182` |

#### Special Options

| Options | Description                                                        |
| :------ | :----------------------------------------------------------------- |
| `pages` | Display pages alongside source name. Has no special functionality. |

### `@Weight`

Informational weight conversion and display.

Format: `@Weight[value;options]`

Value parameter can either be a formula, or a number with or without `lbs` or `kg` unit attached.

Default unit is imperial pounds unless otherwise specified.

#### Examples

Examples outputs are with imperial unit system enabled.

| Input                   | Explanation                                                                     | Output           |
| :---------------------- | :------------------------------------------------------------------------------ | :--------------- |
| `@Weight[100]`          | Convert and display 100 lbs.                                                    | `100 lbs`        |
| `@Weight[3 * 5;metric]` | Convert and display result of 3×5, treating the math result to be in kilograms. | `30 lbs`         |
| `@Weight[30 lbs;dual]`  | Convert and display 30 lbs in both imperial and metric.                         | `30 lbs (15 kg)` |

#### Special Options

| Options    | Description                                |
| :--------- | :----------------------------------------- |
| `dual`     | Displays both imperial and metric weights. |
| `metric`   | Treats provided weight as kilograms.       |
| `imperial` | Treats provided weight as pounds.          |
