# Flags

Flags can be used for arbitrary purposes.

## Roll formulas

The flag contents are used as-is in formulas. Foundry does not do recursive variable resolution. That is, any `@var` references will remain unresolved.

Flag that is not defined or if the item is disabled will cause the variables to resolve as zero (`0`) as per Foundry's normal non-existing variable resolution.

### Dictionary Flags

You can access Dictionary Flags within rolls by using `@dFlags.(itemTag).(flagName)`<sup>1</sup>, or with `@item.dFlags.(flagName)` within the current item.

For example: `@dFlags.rageHeart.feels`

<sup>1</sup> Item tag here refers to the identifier defined at bottom of item's details tab.

### Boolean Flags

Boolean flags are available via `@bFlags.(flagName)` or item specific flags with `@item.bFlags.(flagName)` within the item.

These resolve as `0` for false and `1` for true.

For example: `@bFlags.bombIsSet`

## Raw Data

In macros and modules `item.system.flags.dictionary` and `item.system.flags.boolean` respectively contain the flag data, though unlike in roll data, these are always present if defined regardless if the item is active.
