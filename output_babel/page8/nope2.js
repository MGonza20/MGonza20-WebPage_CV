"use strict";

require("../main.scss");

require("../orderDivs.scss");

var _nope = _interopRequireDefault(require("../images/nope.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Colocar body
const body = document.body; //Hacer un div para colocar elementos

const div = document.createElement('div');
const divTitle = document.createElement('div'); //Crear elemento para colocar titulo

const title = document.createElement('h1'); //Crear elemento para img

const img = document.createElement('img');
const imgD = document.createElement('div');
body.append(div); //Colocar titulo

div.append(divTitle);
divTitle.append(title);
title.append('Opción incorrecta. Has perdido tu oportunidad');
div.append(imgD);
imgD.append(img);
img.setAttribute('src', _nope.default);
img.setAttribute('width', '320px');