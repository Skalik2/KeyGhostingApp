"use strict";
const lightMode = document.querySelector(".lightMode");
const darkMode = document.querySelector(".darkMode");
const btn = document.querySelectorAll(".btn");
const main = document.querySelector(".main");
const body = document.querySelector("body");

function addClass(variable, className) {
  variable.classList.add(className);
}

function removeClass(variable, className) {
  variable.classList.remove(className);
}

let help = false;

function switchMode() {
  if (!help) {
    addClass(lightMode, "displayNone");
    removeClass(darkMode, "displayNone");
    for (let i = 0; i < btn.length; i++) {
      removeClass(btn[i], "light");
      addClass(btn[i], "dark");
    }
    removeClass(main, "light");
    addClass(main, "dark");
    removeClass(body, "light");
    addClass(body, "dark");
    help = true;
  } else {
    addClass(darkMode, "displayNone");
    removeClass(lightMode, "displayNone");
    for (let i = 0; i < btn.length; i++) {
      removeClass(btn[i], "dark");
      addClass(btn[i], "light");
    }
    removeClass(main, "dark");
    addClass(main, "light");
    removeClass(body, "dark");
    addClass(body, "light");
    help = false;
  }
}

lightMode.addEventListener("click", switchMode);
darkMode.addEventListener("click", switchMode);
