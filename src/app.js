/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { applyStyles } from "@popperjs/core";

window.onload = function() {};
let logos = ["♦", "♥", "♠", "♣"];
let randomlogos = Math.floor(Math.random() * logos.length);
let showLogo = logos[randomlogos];

let pinta = document.querySelectorAll(".logo");
pinta[0].innerHTML = showLogo;
pinta[1].innerHTML = showLogo;

let showred = document.querySelectorAll(".logo");
if (showLogo == "♦" || showLogo == "♥") {
  (showred[0].style.color = "red") && (showred[1].style.color = "red");
} else {
  (showred[0].style.color = "black") && (showred[0].style.color = "black");
}

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let randomNumbers = Math.floor(Math.random() * numbers.length);
let shownumber = numbers[randomNumbers];
document.querySelector(".number").innerHTML = shownumber;
