import { Color } from "../lib/color/color.js";
import { colorToInt, convertDistance } from "../lib.js";

const rangeColor = {
  fill: Color("#ff0000"),
  border: Color("#ff0000").darken(0.1),
};
const reachColor = {
  fill: Color("#ffff00"),
  border: Color("#ffff00").darken(0.1),
};

export class SquareHighlight {
  constructor(origin, fillColor = 0x00ff00, borderColor = 0x000000) {
    this.origin = origin;
    this.borderColor = borderColor;
    this.fillColor = fillColor;
    this._squares = [];

    this._id = randomID();

    canvas.grid.addHighlightLayer(`AttackHighlight.${this._id}`);
  }

  addSquare(x, y) {
    this._squares.push({ x: x, y: y });
  }

  clear(permanent = false) {
    const hl = canvas.grid.getHighlightLayer(`AttackHighlight.${this._id}`);
    if (!hl) return;
    hl.clear();

    if (permanent) canvas.grid.destroyHighlightLayer(`AttackHighlight.${this._id}`);
  }

  render() {
    const grid = canvas.grid;
    const gridSize = grid.size;
    const hl = canvas.grid.getHighlightLayer(`AttackHighlight.${this._id}`);

    this.clear();

    // Highlight squares
    for (let s of this._squares) {
      const x = Math.floor(this.origin.x - s.x) * gridSize;
      const y = Math.floor(this.origin.y - s.y) * gridSize;
      grid.grid.highlightGridPosition(hl, { x: x, y: y, border: this.borderColor, color: this.fillColor });
    }
  }
}

/**
 * Highlights the reach of an attack for a token.
 * @param {Token} token
 * @param {ItemPF} attack
 * @returns SquareHighlight
 */
export const showAttackReach = function (token, attack) {
  const grid = canvas.grid;
  const gridSize = grid.size;
  const tw = token.data.width;
  const th = token.data.height;
  const origin = {
    x: Math.floor((token.x + tw * gridSize - 0.5 * gridSize) / gridSize),
    y: Math.floor((token.y + th * gridSize - 0.5 * gridSize) / gridSize),
  };

  const rollData = attack.getRollData();

  // Determine whether reach
  const rangeKey = getProperty(attack.data, "data.range.units");
  if (!["melee", "touch", "reach", "ft", "close", "medium"].includes(rangeKey)) return;
  const isReach = rangeKey === "reach";
  const range = rollData.range;

  // Determine minimum range
  const minRangeKey = getProperty(attack.data, "data.range.minUnits");
  let minRange = null;
  if (["melee", "touch"].includes(minRangeKey)) minRange = range.melee;
  if (minRangeKey === "reach") minRange = range.reach;
  if (minRangeKey === "ft") {
    minRange = new Roll(getProperty(attack.data, "data.range.minValue") || "0", rollData).roll().total;
  }

  let squares = {
    normal: [],
    reach: [],
    extra: [],
  };

  if (["melee", "touch", "reach"].includes(rangeKey)) {
    squares.normal = getReachSquares(token, range.melee, minRange, null, { useReachRule: true });
    squares.reach = getReachSquares(token, range.reach, range.melee, null, { useReachRule: true });
  } else if (rangeKey === "ft") {
    const r = new Roll(getProperty(attack.data, "data.range.value") || "0", rollData).roll().total;
    squares.normal = getReachSquares(token, r, minRange, null, { useReachRule: true });

    // Add range increments
    const maxSquareRange = Math.min(
      400,
      Math.max(
        (canvas.dimensions.width / canvas.dimensions.size) * canvas.dimensions.distance,
        (canvas.dimensions.height / canvas.dimensions.size) * canvas.dimensions.distance
      ) + convertDistance(r)[0]
    );
    const rangeIncrements = getProperty(attack.data, "data.range.maxIncrements") || 1;
    for (let a = 1; a < rangeIncrements; a++) {
      if ((a + 1) * convertDistance(r)[0] <= maxSquareRange) {
        squares.extra.push(getReachSquares(token, (a + 1) * r, a * r, null, { useReachRule: true }));
      }
    }
  } else if (["close", "medium"].includes(rangeKey) && attack.type === "spell") {
    let r;
    switch (rangeKey) {
      case "close":
        r = new Roll("25 + floor(@cl / 2) * 5", rollData).roll().total;
        break;
      case "medium":
        r = new Roll("100 + @cl * 10", rollData).roll().total;
        break;
    }
    squares.normal = getReachSquares(token, r, minRange, null, { useReachRule: true });
  }

  const result = {
    normal: new SquareHighlight(origin, colorToInt(rangeColor.fill), colorToInt(rangeColor.border)),
    reach: new SquareHighlight(origin, colorToInt(reachColor.fill), colorToInt(reachColor.border)),
    extra: [],
  };
  for (let s of squares.normal) {
    result.normal.addSquare(s[0], s[1]);
  }
  if (isReach) {
    for (let s of squares.reach) {
      result.reach.addSquare(s[0], s[1]);
    }
  }

  // Add extra range squares
  {
    for (let a = 0; a < squares.extra.length; a++) {
      let squaresExtra = squares.extra[a];

      const color = {
        fill: a % 2 === 1 ? rangeColor.fill : reachColor.fill,
        border: a % 2 === 1 ? rangeColor.border : reachColor.border,
      };

      const hl = new SquareHighlight(origin, colorToInt(color.fill), colorToInt(color.border));
      for (let s of squaresExtra) {
        hl.addSquare(s[0], s[1]);
      }
      result.extra.push(hl);
    }
  }

  return result;
};

export const addReachCallback = function (data, html) {
  let results = [];

  // Don't do anything under certain circumstances
  const itemID = getProperty(data, "flags.pf1.metadata.item");
  if (!itemID) return results;

  const speakerData = data.speaker;
  if (!canvas.scene || canvas.scene._id !== speakerData.scene) return results;

  const token = canvas.tokens.placeables.find((o) => o.id === speakerData.token);
  if (!token) return results;

  const item = token.actor.items.find((o) => o._id === itemID);
  if (!item) return results;

  let highlight;
  // Add mouse enter callback
  const mouseEnterCallback = function () {
    if (token._destroyed) return;
    if (!game.settings.get("pf1", "hideReachMeasurements")) highlight = showAttackReach(token, item);

    if (!highlight) return;

    highlight.normal.render();
    highlight.reach.render();
    highlight.extra.forEach((hl) => {
      hl.render();
    });
  };
  const rangeElems = html.find(".card-range");
  rangeElems.on("mouseenter", mouseEnterCallback);

  // Add mouse leave callback
  const mouseLeaveCallback = function () {
    if (token._destroyed) return;
    if (!highlight) return;

    highlight.normal.clear(true);
    highlight.reach.clear(true);
    highlight.extra.forEach((hl) => {
      hl.clear(true);
    });
  };
  rangeElems.on("mouseleave", mouseLeaveCallback);
  // Add 'click' event as a safeguard to remove highlights
  // html.on("click", mouseLeaveCallback);

  // Clear highlights when chat messages are rendered
  Hooks.on("renderChatMessage", () => {
    if (!highlight) return;

    highlight.normal.clear(true);
    highlight.reach.clear(true);
    highlight.extra.forEach((hl) => {
      hl.clear(true);
    });
  });

  // Add results
  results.push(
    {
      event: "mouseenter",
      callback: mouseEnterCallback,
      elem: html,
    },
    {
      event: "mouseleave",
      callback: mouseLeaveCallback,
      elem: html,
    },
    {
      event: "click",
      callback: mouseLeaveCallback,
      elem: html,
    }
  );

  return results;
};

const getReachSquares = function (token, range, minRange = 0, addSquareFunction = null, options) {
  range = convertDistance(range)[0];
  if (typeof minRange === "number") minRange = convertDistance(minRange)[0];

  let result = [];

  if (canvas.grid.type !== CONST.GRID_TYPES.SQUARE) return result;
  if (!addSquareFunction) addSquareFunction = shouldAddReachSquare;

  // Initialize variables
  const gridDist = canvas.scene.data.gridDistance;
  const gridSize = canvas.grid.size;

  // Determine token squares
  let tokenSquares = [];
  for (let a = 0; a < Math.floor(token.w / gridSize); a++) {
    for (let b = 0; b < Math.floor(token.h / gridSize); b++) {
      const x = Math.floor((token.x + gridSize * 0.5) / gridSize + a);
      const y = Math.floor((token.y + gridSize * 0.5) / gridSize + b);
      tokenSquares.push([x, y]);
    }
  }

  // Determine token-based variables
  let tokenRect = [
    Math.floor((token.x + gridSize * 0.5) / gridSize),
    Math.floor((token.y + gridSize * 0.5) / gridSize),
    Math.floor(token.w / gridSize),
    Math.floor(token.h / gridSize),
  ];

  // Create function to determine closest token square
  const getClosestTokenSquare = function (pos) {
    const lowest = { square: null, dist: null };
    for (let s of tokenSquares) {
      const dist = Math.sqrt((s[0] - pos[0]) ** 2 + (s[1] - pos[1]) ** 2);
      if (lowest.dist == null || dist < lowest.dist) {
        lowest.square = s;
        lowest.dist = dist;
      }
    }

    return lowest.square;
  };

  // Gather potential squares
  const squareRange = Math.round(range / gridDist);
  const wMax = squareRange * 2 + tokenRect[2];
  const hMax = squareRange * 2 + tokenRect[3];
  const tl = [tokenRect[0] - squareRange, tokenRect[1] - squareRange];
  for (let a = tl[0]; a < tl[0] + wMax; a++) {
    for (let b = tl[1]; b < tl[1] + hMax; b++) {
      const closestSquare = getClosestTokenSquare([a, b]);

      const offset = [a - tokenRect[0], b - tokenRect[1]];
      if (
        !(
          a >= tokenRect[0] &&
          a < tokenRect[0] + tokenRect[2] &&
          b >= tokenRect[1] &&
          b < tokenRect[1] + tokenRect[2] &&
          minRange != null
        )
      ) {
        if (addSquareFunction(token, [a, b], closestSquare, range, minRange, tokenRect, options)) {
          result.push(offset);
        }
      }
    }
  }

  return result;
};

const shouldAddReachSquare = function (
  token,
  pos,
  closestTokenSquare,
  range,
  minRange,
  tokenRect,
  options = { useReachRule: false }
) {
  const gridDist = canvas.scene.data.gridDistance;
  const gridSize = canvas.grid.size;
  const p0 = { x: closestTokenSquare[0] * gridSize, y: closestTokenSquare[1] * gridSize };
  const p1 = { x: pos[0] * gridSize, y: pos[1] * gridSize };

  const dist = measureReachDistance(p0, p1);
  const dist2 = measureReachDistance(p0, p1, true);
  const reachRuleRange = convertDistance(10)[0];
  if (dist > range) {
    // Special rule for 10-ft. reach
    if (!(options.useReachRule && range === reachRuleRange)) {
      return false;
    }
  }

  if (minRange != null && dist <= minRange) {
    return false;
  }

  // Special rule for minimum ranges >= 10-ft.
  if (options.useReachRule && minRange >= reachRuleRange && dist2 <= reachRuleRange) {
    return false;
  }

  return true;
};

export const measureReachDistance = function (p0, p1, alt = false) {
  let gs = canvas.dimensions.size,
    ray = new Ray(p0, p1),
    nx = Math.abs(Math.ceil(ray.dx / gs)),
    ny = Math.abs(Math.ceil(ray.dy / gs));

  // Get the number of straight and diagonal moves
  let nDiagonal = Math.min(nx, ny),
    nStraight = Math.abs(ny - nx);

  // Return distance
  if (!alt) {
    let nd10 = Math.floor(nDiagonal / 2);
    let spaces = nd10 * 2 + (nDiagonal - nd10) + nStraight;
    return spaces * canvas.dimensions.distance;
  }

  return (nStraight + nDiagonal) * canvas.scene.data.gridDistance;
};
