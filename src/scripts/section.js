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
  const playList = setSoundList();
  const playButton = document.getElementById('startGameButton');
  const cards = document.querySelectorAll('.front');

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

    play(playList);
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

    endGame(playButton, cards, playList);
  }
}

function play(playList) {
  const playButton = document.getElementById('startGameButton');

  playButton.addEventListener('click', () => {
    const correctSound = document.querySelector('audio.correct');
    const errorSound = document.querySelector('audio.error');
    const correctSign = document.querySelector('img.correct');
    const errorSign = document.querySelector('img.error');
    const pointsScale = document.querySelector('.points');
    const cards = document.querySelectorAll('.front');
    let i = 0;
    if (!playButton.classList.contains('repeat')) {
      playButton.textContent = 'repeat';
      playButton.classList.add('repeat');
      playList[i].muted = false;
      playList[i].play();
      cards.forEach((item) => {
        item.addEventListener('click', () => {
          if (!item.classList.contains('inactive')) {
            if (playList[i] === item.children[2]) {
              displayCorrectAnswer(
                item,
                correctSound,
                correctSign,
                pointsScale
              );
              playList[i].muted = true;
              i++;
              if (playList[i]) {
                playList[i].muted = false;
                playList[i].play();
              }
              if (
                Array.from(cards).every((item) =>
                  item.classList.contains('inactive')
                )
              ) {
                showResult(pointsScale, playList);
              }
            } else {
              errorSound.play();
              pointsScale.prepend(errorSign.cloneNode(false));
            }
          }
        });
      });
    } else {
      playList[i].play();
    }
  });
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

function displayCorrectAnswer(item, sound, sign, container) {
  sound.play();
  item.classList.add('inactive');
  container.prepend(sign.cloneNode(false));
}

function showResult(container, playList) {
  const cards = document.querySelectorAll('.front');
  const playButton = document.getElementById('startGameButton');
  const errors = Array.from(container.children).filter((item) =>
    item.classList.contains('error')
  );
  const resultText = document.querySelector('.results');
  const successImg = document.querySelector('.goodResult');
  const failImg = document.querySelector('.failResult');

  document.querySelector('.cover').hidden = false;

  if (errors.length === 0) {
    resultText.append('Success! No Wrong answers!');
    document.querySelector('main').append(successImg, resultText);
  } else {
    resultText.append(
      `Try again! ${errors.length} wrong answe${
        errors.length === 1 ? 'r' : 'rs'
      }`
    );
    document.querySelector('main').append(failImg, resultText);
  }
  setTimeout(
    dropResult,
    5000,
    successImg,
    failImg,
    resultText,
    playButton,
    cards,
    playList
  );
}

function dropResult(
  successImg,
  failImg,
  resultText,
  playButton,
  cards,
  playList
) {
  const hidingPlace = document.querySelector('.playAssets');
  resultText.textContent = '';
  hidingPlace.append(successImg, failImg, resultText);
  document.querySelector('.cover').hidden = true;

  endGame(playButton, cards, playList);
}

function endGame(button, cards, playList) {
  const correctSound = document.querySelector('audio.correct');
  const errorSound = document.querySelector('audio.error');
  const correctSign = document.querySelector('img.correct');
  const errorSign = document.querySelector('img.error');
  const pointsScale = document.querySelector('.points');
  let i = 0;
  Array.from(pointsScale.children).forEach((item) => item.remove());
  button.classList.remove('repeat');
  button.textContent = 'Start';
  cards.forEach((item) => {
    item.classList.remove('inactive');
    item.removeEventListener('click', () => {
      if (!item.classList.contains('inactive')) {
        if (playList[i] === item.children[2]) {
          displayCorrectAnswer(item, correctSound, correctSign, pointsScale);
          playList[i].muted = true;
          i++;
          if (playList[i]) {
            playList[i].muted = false;
            playList[i].play();
          }
          if (
            Array.from(cards).every((item) =>
              item.classList.contains('inactive')
            )
          ) {
            showResult(pointsScale, playList);
          }
        } else {
          errorSound.play();
          pointsScale.prepend(errorSign.cloneNode(false));
        }
      }
    });
  });
  playList.length = 0;
}

function returnToTrainMode() {
  // const playList = setSoundList();
  // const playButton = document.getElementById('startGameButton');
  // const cards = document.querySelectorAll('.front');
  if (document.getElementById('toggle').checked) {
    document.getElementById('toggle').checked = false;
  }
  prepareForGame();
  // endGame(playButton, cards, playList);
}

export { fillInTheContent, addFlipEffect, prepareForGame, returnToTrainMode };
