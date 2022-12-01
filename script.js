document.getElementById("toggle").addEventListener("change", function() {
    this.setAttribute("aria-checked", this.checked);
  });

// fetch request
const data = fetch('./data/cards.js')
  .then(response => response.json());


//// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('nav li');
const cover = document.querySelector('.cover');

function closeTheMenu() {
  cover.hidden = true;
  document.body.style.overflow = "";
  burger.classList.toggle('rotate');
  menu.classList.remove('move');
  menu.addEventListener('transitionend', function(event) {
      menu.style.display = 'none';
      menu.hidden = true;
  });
}

burger.addEventListener('click', function() {
    if (menu.hidden) {
        menu.hidden = false;
        cover.hidden = false;
        document.body.style.overflow = "hidden";
        menu.style.display = 'block';
        menu.classList.add('move');
        burger.classList.toggle('rotate');
    } else {
        closeTheMenu();
    }
});
cover.addEventListener('click', closeTheMenu);

for (let item of menuItems) {
  item.addEventListener('click', closeTheMenu);
}
