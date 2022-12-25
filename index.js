"use strict";

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

navButton.addEventListener("click", () => {
  menu.classList.toggle(".visible");
})