"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bsGrid = void 0;

const bsGrid = (img1, img2, img3, d1, d2, d3) => {
  const bsGrid = document.createElement('div');
  bsGrid.setAttribute('class', 'container');
  const gridRow = document.createElement('div');
  gridRow.setAttribute('class', 'row');
  const bsCol1 = document.createElement('div');
  bsCol1.setAttribute('class', 'col');
  const bsCol2 = document.createElement('div');
  bsCol2.setAttribute('class', 'col');
  const bsCol3 = document.createElement('div');
  bsCol3.setAttribute('class', 'col');
  bsGrid.append(gridRow);
  gridRow.append(bsCol1);
  gridRow.append(bsCol2);
  gridRow.append(bsCol3);
  bsCol1.append(img1);
  bsCol2.append(img2);
  bsCol3.append(img3);
  return bsGrid;
};

exports.bsGrid = bsGrid;