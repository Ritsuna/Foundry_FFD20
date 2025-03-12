# Flags

Flags can be used by modules, macros and in roll formulas.

The flag contents are used as-is in formulas, they do not get treated as sub-formulas so variable resolution for example does not happen for their contents since they themselves are variables, that is: Foundry does not do recursive variable resolution.

## Dictionary Flags

You can access Dictionary Flags within rolls by using `@dFlags.(itemTag).(flagName)`, or with `@item.dFlags.(flagName)` within the current item.

## Boolean Flags

Boolean flags are available via `@bFlags.(flagName)` or item specific flags with `@item.bFlags.(flagName)` within the item.
