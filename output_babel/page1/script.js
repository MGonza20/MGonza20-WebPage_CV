"use strict";

require("../main.scss");

require("../orderDivs.scss");

const {
  bar
} = require("../bar.js");

const {
  brElement
} = require("../brElement.js"); //Colocar body


const body = document.body; //Hacer un div para colocar elementos

const div = document.createElement('div');
const divTitle = document.createElement('div'); //Crear elemento para colocar titulo

const title = document.createElement('h1'); //Crear elemento para subtitulo 

const subtitle = document.createElement('h2'); //Crear elemento para img

const img = document.createElement('img'); //Crear elemento para colocar texto

const text = document.createElement('p'); //Div para texto

const textDiv = document.createElement('div'); //texto para subtitulo de pregunta

const subQuestion = document.createElement('text'); //div para colocar pregunta

const divQ = document.createElement('div');
const btnYes = document.createElement('button');
const btnNo = document.createElement('button'); //tag bold para pregunta

const bold = document.createElement('b');
const imgD = document.createElement('div');
body.append(div); //Colocar titulo

div.append(divTitle);
divTitle.append(title);
title.append('Morning´s surprise');
div.append(imgD);
div.setAttribute('id', 'page1'); //Colocar div donde se colocara texto

div.append(textDiv); //Colocar texto dentro del div de texto

textDiv.append(text);
text.append('Te levantas un jueves por la mañana. Es una mañana calurosa de verano, \
vas en el tráfico hacia el supermercado y algo que dice el locutor en la radio te llama la atención... \
"Solo llama y quiza te puedas ganar la oportunidad de obtener el viaje de tus sueños, \
solo llama y quizas puedas ganar el viaje misterioso". Pero piensas, siempre hay un truco, ¿No? ');
textDiv.setAttribute('width', '50px');
imgD.append(img);
img.setAttribute('src', 'https://media.giphy.com/media/kL9x7l4nvVl0eMeLoV/giphy.gif');
img.setAttribute('width', '300px'); //Pregunta

body.append(divQ);
divQ.append(bold);
divQ.append(brElement());
divQ.append(btnYes);
btnYes.append("Si");
divQ.append(btnNo);
btnNo.append("No");
bold.append(subQuestion);
subQuestion.append('¿Decides llamar?');
btnYes.setAttribute('id', 'yesBtn');
btnNo.setAttribute('id', 'nopBtn');
divQ.append(brElement());
divQ.append(brElement());
divQ.append(bar(0));

document.getElementById("yesBtn").onclick = function () {
  location.href = "../page2.html";
};

document.getElementById("nopBtn").onclick = function () {
  location.href = "../page3.html";
};

divQ.setAttribute('id', 'divQ');
divTitle.setAttribute('id', 'divT');
textDiv.setAttribute('id', 'divText');
imgD.setAttribute('id', 'divImg');
text.setAttribute('id', 'text');
subQuestion.setAttribute('id', 'questionText');