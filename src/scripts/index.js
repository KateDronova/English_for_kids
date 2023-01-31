import '../css/normalize.css';
import '../css/style.css';

import '../../public/img/main/sun.png';
import '../../public/img/main/act-dance.jpg';
import '../../public/img/main/act1.png';
import '../../public/img/main/animals1.png';
import '../../public/img/main/animals3.png';
import '../../public/img/main/body_nose.png';
import '../../public/img/main/clothes1.jpg';
import '../../public/img/main/emot3.png';
import '../../public/img/main/food0.jpg';
import '../../public/img/main/food3.png';

import '../../public/img/0click.png';
import '../../public/img/1errorLeaf1.png';
import '../../public/img/1goodResult.gif';
import '../../public/img/2correctLeaf.png';
import '../../public/img/2wrongResult.gif';

import '../../public/img/angry.jpg';
import '../../public/img/apple.jpg';
import '../../public/img/banana.jpg';
import '../../public/img/bird.jpg';
import '../../public/img/blouse.jpg';
import '../../public/img/boot.jpg';
import '../../public/img/bread.jpg';
import '../../public/img/cake.jpg';
import '../../public/img/carrot.jpg';
import '../../public/img/cat.jpg';
import '../../public/img/cherry.jpg';
import '../../public/img/chick.jpg';
import '../../public/img/chicken (animal).jpg';
import '../../public/img/chicken (food).jpg';
import '../../public/img/coat.jpg';
import '../../public/img/cry.jpg';
import '../../public/img/dance.jpg';
import '../../public/img/dive.jpg';
import '../../public/img/dog.jpg';
import '../../public/img/dolphin.jpg';
import '../../public/img/draw.jpg';
import '../../public/img/dress.jpg';
import '../../public/img/ear.jpg';
import '../../public/img/earth.png';
import '../../public/img/eye.jpg';
import '../../public/img/fish (action).jpg';
import '../../public/img/fish (animal).jpg';
import '../../public/img/flower.jpeg';
import '../../public/img/fly.jpg';
import '../../public/img/forest.jpg';
import '../../public/img/frog.jpg';
import '../../public/img/giraffe.jpg';
import '../../public/img/grass1.png';
import '../../public/img/hand.jpg';
import '../../public/img/happy.jpg';
import '../../public/img/head.jpg';
import '../../public/img/horse.jpg';
import '../../public/img/hug.jpg';
import '../../public/img/jump.jpg';
import '../../public/img/laugh.jpg';
import '../../public/img/leg.jpg';
import '../../public/img/lion.jpg';
import '../../public/img/meat.jpg';
import '../../public/img/moon.jpg';
import '../../public/img/mouse.jpg';
import '../../public/img/mouth.jpg';
import '../../public/img/nose.jpg';
import '../../public/img/onion.jpg';
import '../../public/img/open.jpg';
import '../../public/img/orange.png';
import '../../public/img/pants.jpg';
import '../../public/img/pasta.jpg';
import '../../public/img/pig.jpg';
import '../../public/img/play.jpg';
import '../../public/img/point.jpg';
import '../../public/img/porridge.jpeg';
import '../../public/img/potato.jpg';
import '../../public/img/rabbit.jpg';
import '../../public/img/ride.jpg';
import '../../public/img/run.jpg';
import '../../public/img/sad.jpg';
import '../../public/img/sausage.jpg';
import '../../public/img/scared.jpg';
import '../../public/img/sheep.jpg';
import '../../public/img/shirt.jpg';
import '../../public/img/shoe.jpg';
import '../../public/img/sing.jpg';
import '../../public/img/skip.jpg';
import '../../public/img/skirt.jpg';
import '../../public/img/sky.jpg';
import '../../public/img/smile.jpg';
import '../../public/img/soup.jpg';
import '../../public/img/stomach.jpg';
import '../../public/img/sun.jpg';
import '../../public/img/surprised.jpg';
import '../../public/img/swim.jpg';
import '../../public/img/tired.jpg';
import '../../public/img/tomato.jpg';
import '../../public/img/tree.jpg';
import '../../public/img/turtle.jpg';


import { menuItems } from './router.js';
import { playGame } from './section.js';
import setRoutes from './app.js';
setRoutes();

///// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
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
  menu.addEventListener('transitionend', function () {
    menu.style.display = 'none';
    menu.hidden = true;
  });
}

burger.addEventListener('click', function () {
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

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((item) => item.classList.remove('active'));
    item.classList.add('active');
  });
  item.addEventListener('click', closeTheMenu);
});

///// Toggle
document.getElementById('toggle').addEventListener('change', function () {
  this.setAttribute('aria-checked', this.checked);
  playGame();
});
