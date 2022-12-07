
import cardsInfoList from './data/cards';
import sections from './main_script';

const cards = document.querySelectorAll('.card');
const cardImages = document.querySelectorAll('.card img');
const cardNames = document.querySelectorAll('.card h2');

const card1 = document.querySelector('.card.n1');
const card2 = document.querySelector('.card.n2');
const card3 = document.querySelector('.card.n3');
const card4 = document.querySelector('.card.n4');
const card5 = document.querySelector('.card.n5');
const card6 = document.querySelector('.card.n6');
const card7 = document.querySelector('.card.n7');
const card8 = document.querySelector('.card.n8');

for (let cardImage of cardImages) {
    cardImage.setAttribute = ('src', cardsInfoList[1].image);
    // word: 'cry',
    // translation: 'плакать',
    // image: 'img/cry.jpg',
    // audioSrc: 'audio/cry.mp3'
}

// const cardImg1 = document.querySelector('.card.n1 img');
// const cardImg2 = document.querySelector('.card.n2 img');
// const cardImg3 = document.querySelector('.card.n3 img');
// const cardImg4 = document.querySelector('.card.n4 img');
// const cardImg5 = document.querySelector('.card.n5 img');
// const cardImg6 = document.querySelector('.card.n6 img');
// const cardImg7 = document.querySelector('.card.n7 img');
// const cardImg8 = document.querySelector('.card.n8 img');

// const cardName1 = document.querySelector('.card.n1 h2');
// const cardName2 = document.querySelector('.card.n2 h2');
// const cardName3 = document.querySelector('.card.n3 h2');
// const cardName4 = document.querySelector('.card.n4 h2');
// const cardName5 = document.querySelector('.card.n5 h2');
// const cardName6 = document.querySelector('.card.n6 h2');
// const cardName7 = document.querySelector('.card.n7 h2');
// const cardName8 = document.querySelector('.card.n8 h2');

// ///// Go to sections
// for (let section of sections) {
//     section.addEventListener('click', function() {
//       switch (section.id) {
//         case 'action-1':
            
//         cardsInfoList[1];
//             break;
//       }
//     });
// }

// for (let card of cards) {

//     card.addEventListener('click', function() {
//         //.....
//     });
// }
