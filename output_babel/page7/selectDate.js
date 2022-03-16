"use strict";

require("../main.scss");

require("../orderDivs.scss");

var _brElement = require("../brElement");

var _calendar = _interopRequireDefault(require("../images/calendar.gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  bar
} = require("../bar.js"); //Colocar body


const body = document.body; //Hacer un div para colocar elementos

const div = document.createElement('div');
const divTitle = document.createElement('div'); //Crear elemento para colocar titulo

const title = document.createElement('h1'); //Crear elemento para subtitulo 

const subtitle = document.createElement('h2'); //Crear elemento para img

const img = document.createElement('img'); //texto para subtitulo de pregunta

const subQuestion = document.createElement('h2'); //div para colocar pregunta

const divQ = document.createElement('div');
const btnDate1 = document.createElement('button');
const btnDate2 = document.createElement('button');
const btnDate3 = document.createElement('button');
const btnDate4 = document.createElement('button'); //tag bold para pregunta

const bold = document.createElement('b');
const imgD = document.createElement('div');
body.append(div); //Colocar titulo

div.append(divTitle);
divTitle.append(title);
title.append('Segunda búsqueda. Encuentra la fecha');
div.append(imgD);
img.setAttribute('src', _calendar.default);
imgD.appendChild(img);
body.append(divQ);
divQ.append(bold);
divQ.append(btnDate1);
btnDate1.append("6 de Octubre");
divQ.append((0, _brElement.brElement)());
divQ.append((0, _brElement.brElement)());
divQ.append(btnDate2);
btnDate2.append("19 de Noviembre");
divQ.append((0, _brElement.brElement)());
divQ.append((0, _brElement.brElement)());
divQ.append(btnDate3);
btnDate3.append("11 de Julio");
divQ.append((0, _brElement.brElement)());
divQ.append((0, _brElement.brElement)());
divQ.append(btnDate4);
btnDate4.append("7 de Junio");
divQ.append((0, _brElement.brElement)());
divQ.append((0, _brElement.brElement)());
divQ.append(bar(50));
bold.append(subQuestion);
subQuestion.append('Basandote en la pista anterior, ¿Qué fecha es?');
btnDate1.setAttribute('id', 'date1Btn');
btnDate2.setAttribute('id', 'date2Btn');
btnDate3.setAttribute('id', 'date3Btn');
btnDate4.setAttribute('id', 'date4Btn');

document.getElementById("date1Btn").onclick = function () {
  location.href = "../page8.html";
};

document.getElementById("date2Btn").onclick = function () {
  location.href = "../page10.html";
};

document.getElementById("date3Btn").onclick = function () {
  location.href = "../page8.html";
};

document.getElementById("date4Btn").onclick = function () {
  location.href = "../page8.html";
};

divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
imgD.setAttribute('id', 'divImg');