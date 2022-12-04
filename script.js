
///// Toggle
document.getElementById("toggle").addEventListener("change", function() {
    this.setAttribute("aria-checked", this.checked);
  });

// // fetch request
// const data = fetch('./data/cards.js')
//   .then(response => response.json());

// //// Sections
// const sections = document.querySelectorAll('section');
// for (let section of sections) {
//   section.addEventListener('click', function() {
//     //.....
//   });
// }

//// Mobile menu
const burger = document.querySelector('svg.burger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('nav li');
const cover = document.querySelector('.cover');
const burgerDown = document.getElementById('down');
const burgerSalad = document.getElementById('salad');
const burgerCutlet = document.getElementById('cutlet');
const burgerTomato = document.getElementById('tomato');

burger.addEventListener('mouseover', function() {
  burgerSalad.setAttribute('cy', 50);
})

// function closeTheMenu() {
//   cover.hidden = true;
//   document.body.style.overflow = "";
//   burger.classList.toggle('rotate');
//   menu.classList.remove('move');
//   menu.addEventListener('transitionend', function(event) {
//       menu.style.display = 'none';
//       menu.hidden = true;
//   });
// }

// burger.addEventListener('click', function() {
//     if (menu.hidden) {
//         menu.hidden = false;
//         cover.hidden = false;
//         document.body.style.overflow = "hidden";
//         menu.style.display = 'block';
//         menu.classList.add('move');
//         burger.classList.toggle('rotate');
//     } else {
//         closeTheMenu();
//     }
// });
// cover.addEventListener('click', closeTheMenu);

// for (let item of menuItems) {
//   item.addEventListener('click', closeTheMenu);
// }
