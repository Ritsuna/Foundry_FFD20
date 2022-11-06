# Script Calls

Most items have certain categories of script calls, which are a combination of macros and inline scripts which run at specific events for that item.

## Using Macros as Script Calls

In order to use Macros as Script Calls, simply drag a macro over from somewhere to the category of Script Calls you wish to run them on.

## Variables

The variable availability differs somewhat from what's available in regular Macros.
Below you will find a list of variables which are present within Script Calls.
| Name | Description |
| ------ | ------ |
| `item` | The item from which this event was called. |
| `actor` | The actor which owns the calling item. Can be `null` if the item is not on an actor. |
| `shared` | An object which starts out as empty, but is shared between all script calls of a single event, after which it is returned to the calling function, which may or may not do something with it. |

## Categories

### Use

Called when an item has been used.
If an item has at least one script call under this category, it's usable no matter what.
This call will have an additional variable `shared.attackData.action` which refers to the specific action being used. You can use `shared.attackData.action.tag` to differentiate between actions.
Optionally, `shared.reject` can be set to `true` to cancel the item's use.

### Equip

Called when an item has been equipped or unequipped.
This call will have an additional variable `equipped` which is either `true` if it has just been equipped, or `false` if it has just been unequipped.

### Toggle

Called when a buff or feature has been toggled on/off.
This call will have an additional variable `state` which is either `true` if it has just been enabled or `false` if it has just been disabled.

### Change Quantity

Called when the quantity of a physical item has been changed.
This call will have the additional variables `quantity.previous` and `quantity.new`, which contains the quantity numbers before and after the update respectively.

### Change Level

Called when the level of a item has been changed.
This call will have the additional variables `level.previous` and `level.new`, which contains the numbers before and after the update respectively.
