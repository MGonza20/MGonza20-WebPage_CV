"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = void 0;

const bar = val => {
  let bar = document.createElement('progress');
  bar.setAttribute('value', "".concat(val));
  bar.setAttribute('max', '100');
  bar.append("".concat(val, "%"));
  return bar;
};

exports.bar = bar;