import cardsInfoList from "./cards.js";

///// Fill in the section for Training mode
function fillInTheContent(j) {
  const subheader = document.getElementById("subHead");
  const cardImages = document.querySelectorAll(".front img");
  const cardNames = document.querySelectorAll(".front h3");
  const cardSounds = document.querySelectorAll(".front audio");
  const cardBackImages = document.querySelectorAll(".back img");
  const cardBackNames = document.querySelectorAll(".back h3");

  subheader.textContent = cardsInfoList[j][0];

  let i = 1;
  for (let cardImg of cardImages) {
    cardImg.setAttribute("src", cardsInfoList[j][i].image);
    i++;
  }

  i = 1;
  for (let cardName of cardNames) {
    cardName.innerHTML = cardsInfoList[j][i].word;
    i++;
  }

  i = 1;
  for (let cardBackImg of cardBackImages) {
    cardBackImg.setAttribute("src", cardsInfoList[j][i].image);
    i++;
  }

  i = 1;
  for (let cardBackName of cardBackNames) {
    cardBackName.innerHTML = cardsInfoList[j][i].translation;
    i++;
  }

  i = 1;
  for (let cardSound of cardSounds) {
    cardSound.setAttribute("src", cardsInfoList[j][i].audioSrc);
    i++;
    cardSound.closest("div").addEventListener("click", function (event) {
      if (!event.target.closest("button")) {
        cardSound.play();
      }
    });
  }
}

function addFlipEffect() {
  const flipButtons = document.querySelectorAll("div button");

  for (let flipButton of flipButtons) {
    flipButton.addEventListener("click", function () {
      flipButton.closest("div").classList.add("clicked");
      flipButton.closest("div").nextElementSibling.classList.remove("clicked");
    });
    flipButton
      .closest("div")
      .nextElementSibling.addEventListener("mouseout", function () {
        if (!flipButton.closest("div").nextElementSibling.hidden) {
          flipButton.closest("div").hidden = false;
          flipButton.closest("div").classList.remove("clicked");
          flipButton.closest("div").nextElementSibling.classList.add("clicked");
        }
      });
  }
}

export{ fillInTheContent, addFlipEffect };

// ///// Playing mode

// const toggle = document.getElementById('toggle');

// if (toggle.getAttribute('aria-checked') !== 'false') {
//   for (let flipButton of flipButtons) {
//     flipButton.hidden = true;
//   }
//   for (let cardName of cardNames) {
//     cardName.hidden = true;
//   }
// }
