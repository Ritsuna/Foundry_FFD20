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
| `action` | The action that triggered this. Can be `null` if there's no action. |
| `token` | Token associated with unlinked actor, or the first active token for linked actor on currently viewed scene. |
| `shared` | An object which starts out as empty, but is shared between all script calls of a single event, after which it is returned to the calling function, which may or may not do something with it. |

## Categories

### Use

Called when an item has been used.

If an item has at least one script call under this category, it's usable no matter what.

| Special Variables | Description                                                                         |
| :---------------- | :---------------------------------------------------------------------------------- |
| `action`          | refers to the specific action being used.                                           |
| `shared.reject`   | can be set to `true` to cancel the item's use similar to cancelling the use dialog. |
| `shared.hideChat` | can be set to `true` to eliminate the action's normal chat message creation.        |

You can use `action.tag` to differentiate between actions.

### Post-Use

Called after an item has been used and all its processing has completed, including the chat message creation.

| Special Variables | Description                                     |
| :---------------- | :---------------------------------------------- |
| `shared.message`  | Reference to the chat message created (if any). |

### Equip

Called when an item has been equipped or unequipped.

| Special Variables | Description                                                                                     |
| :---------------- | :---------------------------------------------------------------------------------------------- |
| `equipped`        | which is either `true` if it has just been equipped, or `false` if it has just been unequipped. |

### Implant

Called when an item has been implanted or unimplanted. Works nearly identically to _Equip_ script.

| Special Variables | Description                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------------ |
| `implanted`       | works identically to _Equip_ script's `equipped` variable. A boolean representing the new implantation state. |

### Toggle

Called when a buff or feature has been toggled on/off.

| Special Variables | Description                                                                   |
| :---------------- | :---------------------------------------------------------------------------- |
| `state`           | Representation of the buff's state, `false` for disabled, `true` for enabled. |

### Change Quantity

Called when the quantity of a physical item has been changed.

| Special Variables   | Description                 |
| :------------------ | :-------------------------- |
| `quantity.previous` | Quantity before the update. |
| `quantity.new`      | Quantity after the update.  |

### Change Level

Called when the level of a item has been changed.

| Special Variables | Description              |
| :---------------- | :----------------------- |
| `level.previous`  | Level before the update. |
| `level.new`       | Level after the update.  |

## Shared Data Object

You can control item use workflow by altering the `shared` object.

The shared object contains additional data based on use that you can investigate via normal JS debugging methods, such as `console.log(shared)` or `debugger`. It is too expansive and variable to describe here.
