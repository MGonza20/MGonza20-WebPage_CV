"use strict";

require("../main.scss");

const {
  brElement
} = require("../brElement.js"); //Colocar body


const body = document.body; //Hacer un div para colocar elementos

const div = document.createElement('div'); //Crear elemento para img

const img = document.createElement('img'); //div para colocar pregunta

const divQ = document.createElement('div');
const btnTrip = document.createElement('button');
const btnNo = document.createElement('button');
const imgD = document.createElement('div');
body.append(div);
div.append(imgD);
img.setAttribute('src', 'https://media.giphy.com/media/ehJ4vNWRhinhMMvLxp/giphy.gif');
img.setAttribute('width', '500px');
imgD.appendChild(img); //Pregunta

body.append(divQ);
divQ.append(brElement());
divQ.append(btnTrip);
btnTrip.append("Back");
btnTrip.setAttribute('id', 'backBtn');

document.getElementById("backBtn").onclick = function () {
  location.href = "../index.html";
};