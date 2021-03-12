# Custom Changes

In order to add custom change targets in e.g. a module, you will have to do two things.

1. Alter the appropriate configuration object.
2. Add a hook to determine change targets.

## Alter configuration object

In your module, make a hook for "init", and alter the FFD20 configuration object. In this tutorial we'll add a change for an actor's carried GP (useless, most likely, but just for the tutorial's sake).

```js
Hooks.once("init", () => {
  CONFIG.FFD20.buffTargets.misc.gp = "Gold Pieces";
});
```

Or, you could add a whole new base category for the changes.

```js
Hooks.once("init", () => {
  CONFIG.FFD20.buffTargets.currency = {
    _label: "Currency",
    gp: "Gold Pieces",
  };
});
```

Alternatively, if you want the change to be present internally, but hidden from manual usage, you can add a `~` in front of its key.

```js
Hooks.once("init", () => {
  CONFIG.FFD20.buffTargets.misc["~gp"] = "Gold Pieces";
});
```

## Add hook

Next, we have to add a hook that actually changes the actor's data.

```js
Hooks.on("ffd20.getChangeFlat", (target, modifier, result) => {
  if (target === "gp") {
    result.keys.push("data.currency.gp");
  }
});
```

After that's all done, you can create a change, select the new target (assuming you didn't flag it as hidden), and see the actor's gold pieces reduce (or increase) as appropriate.
