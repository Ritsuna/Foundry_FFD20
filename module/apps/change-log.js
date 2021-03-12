import "../lib/markdown/markdown-it.js";
import { SemanticVersion } from "../semver.js";

export class ChangeLogWindow extends FormApplication {
  constructor(lastVersion) {
    super({}, {});

    this.lastVersion = lastVersion;
  }

  static get defaultOptions() {
    const options = super.defaultOptions;
    return mergeObject(options, {
      id: "changelog",
      classes: ["ffd20", "changelog"],
      template: "systems/ffd20/templates/apps/changelog.hbs",
      width: 500,
      submitOnChange: true,
      closeOnSubmit: false,
    });
  }

  get title() {
    return `${game.i18n.localize("FFD20.title")} ~ ${game.i18n.localize("FFD20.Changelog")}`;
  }

  async getData() {
    let data = await super.getData();

    data.dontShowAgain = game.settings.get("ffd20", "dontShowChangelog");

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "systems/ffd20/CHANGELOG.md");

    let promise = new Promise((resolve) => {
      xhr.onload = () => {
        if (xhr.status === 200) {
          data.changelog = this._processChangelog(xhr.response);
          resolve(data);
        }
      };
    });
    xhr.send(null);

    return promise;
  }

  _processChangelog(md) {
    const MD = window.markdownit();

    // Cut off irrelevant changelog entries
    let lines = md.split(/[\n\r]/);
    if (this.lastVersion) {
      for (let a = 0; a < lines.length; a++) {
        let line = lines[a];
        if (line.match(/##\s+([0-9]+\.[0-9]+\.[0-9]+)/)) {
          const version = SemanticVersion.fromString(RegExp.$1);
          if (!version.isHigherThan(this.lastVersion)) {
            lines = lines.slice(0, a);
            break;
          }
        }
      }
    }

    return MD.render(lines.join("\n"));
  }

  async _updateObject(event, formData) {
    if (formData.dontShowAgain != null) {
      await game.settings.set("ffd20", "dontShowChangelog", formData.dontShowAgain);
    }
  }
}
