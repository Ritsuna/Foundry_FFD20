"use strict";

import { isArrayish } from "./is-arrayish.js";

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

export const swizzle = function (args) {
  // var swizzle = module.exports = function swizzle(args) {
  var results = [];

  for (var i = 0, len = args.length; i < len; i++) {
    var arg = args[i];

    if (isArrayish(arg)) {
      // http://jsperf.com/javascript-array-concat-vs-push/98
      results = concat.call(results, slice.call(arg));
    } else {
      results.push(arg);
    }
  }

  return results;
};

swizzle.wrap = function (fn) {
  return function () {
    return fn(swizzle(arguments));
  };
};
