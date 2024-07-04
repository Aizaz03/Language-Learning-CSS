"use strict";

var dropdown = document.querySelector(".dropdown");
var select = dropdown.querySelector(".select");
var caret = dropdown.querySelector(".caret");
var menu = dropdown.querySelector(".menu");
var options = dropdown.querySelectorAll(".menu li");
var selected = dropdown.querySelector(".selected");
select.addEventListener("click", function () {
  select.classList.toggle("select-clicked");
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
});
options.forEach(function (option) {
  option.addEventListener("click", function () {
    selected.innerText = option.innerText;
    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");
    options.forEach(function (option) {
      option.classList.remove("active");
    });
    option.classList.add("active");
  });
});
//# sourceMappingURL=script.dev.js.map
