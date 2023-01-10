
import '../css/normalize.css';
import '../css/style.css';
import setRoutes from './app.js';
setRoutes();
import { setSection, fillInTheContent, addFlipEffect } from './section.js';

///// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('nav li');
const cover = document.querySelector('.cover');
const burgerDown = document.getElementById('down');
const burgerSalad = document.getElementById('salad');
const burgerCutlet = document.getElementById('cutlet');
const burgerTomato = document.getElementById('tomato');

function closeTheMenu() {
  cover.hidden = true;
  burgerDown.classList.toggle('unpack1');
  burgerSalad.classList.toggle('unpack2');
  burgerCutlet.classList.toggle('unpack3');
  burgerTomato.classList.toggle('unpack4');
  menu.classList.toggle('move');
  menu.addEventListener('transitionend', function() {
      menu.style.display = 'none';
      menu.hidden = true;
  });
}

burger.addEventListener('click', function() {
    if (menu.hidden) {
        menu.hidden = false;
        cover.hidden = false;
        menu.style.display = 'block';
        menu.classList.toggle('move');
        burgerDown.classList.toggle('unpack1');
        burgerSalad.classList.toggle('unpack2');
        burgerCutlet.classList.toggle('unpack3');
        burgerTomato.classList.toggle('unpack4');
    } else {
        closeTheMenu();
    }
});
cover.addEventListener('click', closeTheMenu);

for (let item of menuItems) {
  item.addEventListener('click', closeTheMenu);
}

///// Toggle
document.getElementById("toggle").addEventListener("change", function() {
    this.setAttribute("aria-checked", this.checked);
  });

///// Href
// const hrefs = document.querySelectorAll('a');
// hrefs.forEach((href) => href.onclick(setSection()));