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
  });

  i = 1;
  cardNames.forEach((item) => {
    item.innerHTML = cardsInfoList[j][i].word;
    i++;
  });

  i = 1;
  cardBackImages.forEach((item) => {
    item.setAttribute('src', cardsInfoList[j][i].image);
    i++;
  });

  i = 1;
  cardBackNames.forEach((item) => {
    item.innerHTML = cardsInfoList[j][i].translation;
    i++;
  });

  i = 1;
  cardSounds.forEach((item) => {
    item.setAttribute('src', cardsInfoList[j][i].audioSrc);
    i++;
    item.closest('div').addEventListener('click', function (event) {
      if (!event.target.closest('button')) {
        item.play();
      }
    });
  });

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
    });
    document.querySelectorAll('.front button').forEach((item) => {
      item.hidden = true;
    });
    document.querySelectorAll('.card .front img').forEach((item) => {
      item.classList.add('down');
    });
    document.querySelectorAll('.front audio').forEach((item) => {
      item.muted = true;
    });
    document.querySelectorAll('.card').forEach((item) => {
      item.classList.add('down');
    });
    document.querySelector('.gameSet').classList.remove('down2');
    play();
  } else {
    document.querySelectorAll('h3').forEach((item) => {
      item.hidden = false;
    });
    document.querySelectorAll('.front button').forEach((item) => {
      item.hidden = false;
    });
    document.querySelectorAll('.card .front img').forEach((item) => {
      item.classList.remove('down');
    });
    document.querySelectorAll('.front audio').forEach((item) => {
      item.muted = false;
    });
    document.querySelectorAll('.card').forEach((item) => {
      item.classList.remove('down');
    });
    document.querySelector('.gameSet').classList.add('down2');
  }
}

function returnToTrainMode() {
  if (document.getElementById('toggle').checked) {
    document.getElementById('toggle').checked = false;
  }
}

function setSoundList() {
  const currentSoundList = Array.from(
    document.querySelectorAll('.front audio')
  );
  const randomPlayList = [];
  while (randomPlayList.length < 8) {
    const randomSound = currentSoundList[Math.floor(Math.random() * 8)];
    if (!randomPlayList.includes(randomSound)) {
      randomPlayList.push(randomSound);
    }
  }
  return randomPlayList;
}

function play() {
  const playList = setSoundList();
  const playButton = document.getElementById('startGameButton');
  const correctSound = document.querySelector('audio.correct');
  const errorSound = document.querySelector('audio.error');
  const correctSign = document.querySelector('img.correct');
  const errorSign = document.querySelector('img.error');
  const pointsScale = document.querySelector('.points');

  playButton.addEventListener('click', () => {
    playButton.classList.add('repeat');
    playButton.textContent = 'repeat';
    playList[0].muted = false;
    playList[0].play();
    document.querySelectorAll('.front').forEach((item) => {
      item.addEventListener('click', () => {
        // console.log(item);
        if (playList[0] === item.children[2]) {
          correctSound.play();
          item.classList.add('inactive');
          console.log(correctSign, pointsScale);
          pointsScale.prepend(correctSign.cloneNode(false));
        } else {
          errorSound.play();
          pointsScale.prepend(errorSign.cloneNode(false));
        }
      });
    });
  });

  // endGame(); ////////
}

// function endGame() {
//   document.getElementById('startGameButton').classList.remove('repeat'); //////////////SEE
//   document.getElementById('startGameButton').textContent = 'Start';
//   document.querySelectorAll('.front').forEach((item) => {
//     item.classList.remove('inactive');
//   });
// }

export { fillInTheContent, addFlipEffect, prepareForGame, returnToTrainMode };
