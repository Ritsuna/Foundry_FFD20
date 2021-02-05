export const tinyMCEInit = function () {
  CONFIG.TinyMCE.content_css.push("/systems/ffd20lnrw/module/mce/mce.css");

  CONFIG.TinyMCE.style_formats[0].items.push(
    {
      title: game.i18n.localize("ffd20lnrw.NotImplemented"),
      inline: "span",
      classes: "notImp",
      attributes: { title: game.i18n.localize("ffd20lnrw.NotImplemented") },
      remove: "all",
    },
    {
      title: game.i18n.localize("ffd20lnrw.StepsRequired"),
      inline: "span",
      classes: "needSteps",
      attributes: { title: game.i18n.localize("ffd20lnrw.StepsRequired") },
      remove: "all",
    }
  );
  CONFIG.TinyMCE.formats = Object.assign({}, CONFIG.TinyMCE.formats, {
    removeFormat: [{ selector: "span", classes: "notImp,needSteps", remove: "all" }],
  });

  tinyMCE.on("addeditor", (ev) => {
    registerContextMenu(ev.editor);
  });
};

function registerContextMenu(editor) {
  var isInfoElement = function (node) {
    return (
      node.nodeName.toLowerCase() === "span" &&
      (node.classList.contains("notImp") || node.classList.contains("needSteps"))
    );
  };

  var getInfoElement = function () {
    var node = editor.selection.getNode();
    return isInfoElement(node) ? node : null;
  };

  editor.ui.registry.addContextForm("info-form", {
    launch: {
      type: "contextformtogglebutton",
      icon: "warning",
    },
    label: "Info",
    predicate: isInfoElement,
    initValue: function () {
      var elm = getInfoElement();
      return elm ? elm.title : "";
    },
    commands: [
      {
        type: "contextformtogglebutton",
        icon: "warning",
        tooltip: game.i18n.localize("ffd20lnrw.NotImplemented"),
        onSetup: function (buttonApi) {
          buttonApi.setActive(!!getInfoElement()?.classList.contains("notImp"));
          var nodeChangeHandler = function () {
            buttonApi.setActive(!editor.readonly && getInfoElement()?.classList.contains("notImp"));
          };
          editor.on("nodechange", nodeChangeHandler);
          return function () {
            editor.off("nodechange", nodeChangeHandler);
          };
        },
        onAction: function (formApi) {
          var value = formApi.getValue(),
            node = getInfoElement();
          editor.setDirty(true);
          editor.dom.setAttribs(node, { title: value, class: "notImp" });
          formApi.hide();
        },
      },
      {
        type: "contextformtogglebutton",
        icon: "selected",
        tooltip: game.i18n.localize("ffd20lnrw.StepsRequired"),
        onSetup: function (buttonApi) {
          buttonApi.setActive(!!getInfoElement()?.classList.contains("needSteps"));
          var nodeChangeHandler = function () {
            buttonApi.setActive(!editor.readonly && getInfoElement()?.classList.contains("needSteps"));
          };
          editor.on("nodechange", nodeChangeHandler);
          return function () {
            editor.off("nodechange", nodeChangeHandler);
          };
        },
        onAction: function (formApi) {
          var value = formApi.getValue(),
            node = getInfoElement();
          editor.setDirty(true);
          editor.dom.setAttribs(node, { title: value, class: "needSteps" });
          formApi.hide();
        },
      },
      {
        type: "contextformtogglebutton",
        icon: "close",
        tooltip: game.i18n.localize("ffd20lnrw.RemoveInfo"),
        onAction: function (formApi) {
          var node = getInfoElement();
          editor.setDirty(true);
          editor.dom.remove(node, true);
          formApi.hide();
        },
      },
    ],
  });
}
