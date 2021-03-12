# Pathfinder 1 Hooks

## ffd20.prepareBaseActorData

### Parameters

- actor<ActorPF> - The calling actor.

### Description

Called when an actor calls its `prepareBaseData` method.

## ffd20.prepareDerivedActorData

### Parameters

- actor<ActorPF> - The calling actor.

### Description

Called when an actor calls its `prepareDerivedData` method.

## ffd20.migrationFinished

### Description

Called once world migration is finished. Is only called for the GM.

## actorRoll

### Parameters

- actor<ActorPF> - The calling actor.
- type<string> - Either "skill", "bab", "cmb", "cl", "concentration", "save" or "ability".
- subType<string | null> - Depends on type. For "skill": the skill's ID. For "cl" and "concentration": the spellbook key. For "save": the saving throw ID. For "ability": the ability ID. Is `null` for others.

### Description

Called when an actor rolls one of its rollable attributes.

### Special

Can be prevented by returning `false`.

## actorRest

### Parameters

- actor<ActorPF> - The calling actor.
- restOptions<Object> - An object containing options used in the rest.

### Description

Called when an actor confirms the dialog from its Rest option.

### Special

Can be prevented by returning `false`.

## itemUse

### Parameters

- item<ItemPF> - The calling item.
- type<string> - A string representing the way this item is being used. Either "description", "attack", "consumable".
- options<Object> - The options passed to the calling function. Depends on type.

### Description

Called when an item is used in a certain way. If it's just being shown to chat, the type is "description".

### Special

Can be prevented by returning `false`.

## createItemLink

### Parameters

- item<ItemPF> - The item on which the link is created. This is the item whose Links tab had something dragged onto it.
- link<Object> - The newly created link data object.
- linkType<string> - The type of link that was just created. Will be something like "children", "charges", "classAssociations" or "ammunition".

### Description

Called when an item link has been created.

## deleteItemLink

### Parameters

- item<ItemPF> - The item from which the link was removed.
- link<Object> - The link data object associated with the (now removed) link.
- linkType<string> - The type of link that was just deleted. Will be something like "children", "charges", "classAssociations" or "ammunition".

## dropContainerSheetData

### Parameters

- item<ItemPF> - The associated container.
- sheet<ItemSheetPF_Container> - The container's sheet.
- data<Object> - The event's transfer data.

## ffd20.addDefaultChanges

### Parameters

- actor<ActorPF> - The associated actor.
- changes<ItemChange[]> - An array to add changes to.

### Description

Called when default changes are being determined and added for an actor. You can add your own changes into the `changes` array, which will also be added.

## ffd20.getChangeFlat

### Parameters

- changeTarget<string> - The unique target of the change. Something like "damage", "aac", etc.
- modifier<string | null> - The modifier used in the change. Something like "base", "enhancement", etc.
- result<Object> - An object which contains an array by the name "keys". Add data paths to this array to make the change do something.

### Description

If you want to add custom change targets, this is a vital hook. Add strings to the 3rd parameter's `keys` array to be able to change those attributes.

See the `custom-changes.md` file next to this one to see how something like this might be accomplished.
