import cardsInfoList from './cards.js';

///// Fill in the section for Training mode
function fillInTheContent(j) {
  const subheader = document.getElementById('subHead');
  const cardImages = document.querySelectorAll('.front img');
  const cardNames = document.querySelectorAll('.front h3');
  const cardSounds = document.querySelectorAll('.front audio');
  const cardBackImages = document.querySelectorAll('.back img');
  const cardBackNames = document.querySelectorAll('.back h3');

  subheader.textContent = cardsInfoList[j][0];

  let i = 1;
  cardImages.forEach((item) => {
    item.setAttribute('src', cardsInfoList[j][i].image);
    i++;
  })

  i = 1;
  cardNames.forEach((item) => {
    item.innerHTML = cardsInfoList[j][i].word;
    i++;
  })

  i = 1;
  cardBackImages.forEach((item) => {
    item.setAttribute('src', cardsInfoList[j][i].image);
    i++;
  })

  i = 1;
  cardBackNames.forEach((item) => {
    item.innerHTML = cardsInfoList[j][i].translation;
    i++;
  })

  i = 1;
  cardSounds.forEach((item) => {
    item.setAttribute('src', cardsInfoList[j][i].audioSrc);
    i++;
    item.closest('div').addEventListener('click', function (event) {
      if (!event.target.closest('button')) {
        item.play();
      }
    });
  })

  addFlipEffect();
}

function addFlipEffect() {
  const flipButtons = document.querySelectorAll('div button');

  for (let flipButton of flipButtons) {
    flipButton.addEventListener('click', function () {
      flipButton.closest('div').classList.add('clicked');
      flipButton.closest('div').nextElementSibling.classList.remove('clicked');
    });
    flipButton
      .closest('div')
      .nextElementSibling.addEventListener('mouseout', function () {
        if (!flipButton.closest('div').nextElementSibling.hidden) {
          flipButton.closest('div').hidden = false;
          flipButton.closest('div').classList.remove('clicked');
          flipButton.closest('div').nextElementSibling.classList.add('clicked');
        }
      });
  }
}

function prepareForGame() {
  if (document.getElementById('toggle').checked) {
    document.querySelectorAll('h3').forEach((item) => {
      item.hidden = true;
    })
    document.querySelectorAll('div button').forEach((item) => {
      item.hidden = true;
    })
    document.querySelectorAll('.card .front img').forEach((item) => {
      item.classList.add('down');
    })
    document.querySelectorAll('.front audio').forEach((item) => {
      item.muted = true;
    })
    document.querySelectorAll('.card').forEach((item) => {
      item.classList.add('down');
    })
    document.getElementById('startGameButton').hidden = false;
    play();
  } else {
    document.querySelectorAll('h3').forEach((item) => {
      item.hidden = false;
    })
    document.querySelectorAll('div button').forEach((item) => {
      item.hidden = false;
    })
    document.querySelectorAll('.card .front img').forEach((item) => {
      item.classList.remove('down');
    })
    document.querySelectorAll('.front audio').forEach((item) => {
      item.muted = false;
    })
    document.querySelectorAll('.card').forEach((item) => {
      item.classList.remove('down');
    })
    document.getElementById('startGameButton').hidden = true;
  }
}

function returnToTrainMode() {
  if (document.getElementById('toggle').checked) {
    document.getElementById('toggle').checked = false;
  }
}

function play() {
  const playButton = document.getElementById('startGameButton');
  playButton.addEventListener('click', () => {
    playButton.classList.add('repeat');
    playButton.textContent = 'repeat';
  })
  endGame(); ////////
}

function endGame() {
  document.getElementById('startGameButton').classList.remove('repeat'); //////////////SEE
  document.getElementById('startGameButton').textContent = 'Start';
}

export { fillInTheContent, addFlipEffect, prepareForGame, returnToTrainMode };
