# Changes

![Changes examples](/Help/img/item-changes.webp)

## Flags

- **Unaffected by Heavy Encumbrance**: While an item with this change is active, its actor will not be slowed down by being in a medium load.
- **Unaffected by Heavy Encumbrance**: While an item with this change is active, its actor will not be slowed down by being in a heavy load.
- **Full Speed in Medium Armor**: While an item with this change is active, its actor will not be slowed down by wearing medium armor.
- **Full Speed in Heavy Armor**: While an item with this change is active, its actor will not be slowed down by wearing heavy armor.
- **Lose Dex to AC**: While an item with this change is active, a character loses his Dexterity bonuses to Armor Class.

## Changes

This is a list of changes which affect the actor owning the item directly.

From left to right:

- **Operator**: The operators are '±' (relative) or '=' (absolute). Relative values add to an attribute, while absolute values set the attribute to the result of the formula.
- **Target**: The attribute or attribute set to alter with this change.
- **Type**: The bonus type of this change.
- **Priority**: The priority of this change. Changes with lower priorities will be processed later. In rare cases, a lower priority is necessary.
- **Formula**: The formula by which to affect this particular change. The way this alters an actor's attribute depends on the operator (see next). See this page for more details.

## Context Notes

This a list of contextual notes, which are shown in appropriate situations.

From left to right:

- **Text**: The text to show in appropriate situations. Every newline adds a new note block to the same target without needing to multiply notes for same target. The contents are enriched so inline rolls and enrichers work in these.
- **Target**: The context in which the text is to be provided in.
