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
	const flipButtons = document.querySelectorAll('.front button');

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

function prepareForGame(cards) {
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
		cards.forEach((item) => {
			item.classList.add('down');
		});
		document.querySelector('.gameSet').classList.remove('down2');
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

function playGame() {
	const cards = document.querySelectorAll('.card .front');
	const playButton = document.getElementById('startGameButton');
	const pointsScale = document.querySelector('.points');
	const correctSound = document.querySelector('audio.correct');
	const errorSound = document.querySelector('audio.error');
	const correctSign = document.querySelector('img.correct');
	const errorSign = document.querySelector('img.error');

	prepareForGame(cards);
	if (document.getElementById('toggle').checked) {
		playOneRound(playButton, cards, errorSound, errorSign, pointsScale, correctSound, correctSign);
		} else {
		endGame(playButton, cards, pointsScale);
	}
}

function playOneRound(playButton,	cards, errorSound, errorSign,	pointsScale, correctSound, correctSign) {
  let i = 0;
  let playList;
	playButton.addEventListener('click', () => {
    if (!playButton.classList.contains('repeat')) {
      playButton.textContent = 'repeat';
      playButton.classList.add('repeat');
      playList = setSoundList();
			playList[i].muted = false;
			playList[i].play();
			cards.forEach((item) => {
				item.addEventListener('click', () => {
					if (!item.classList.contains('inactive')) {
						if (playList[i] === item.children[2]) {
							displayCorrectAnswer(item, pointsScale, correctSound,	correctSign);
							playList[i].muted = true;
							i++;
							if (playList[i]) {
								playList[i].muted = false;
								playList[i].play();
							}
						} else if (playList[i]) {
              displayWrongAnswer(pointsScale, errorSound, errorSign);
						}
					}
          if (Array.from(cards).every((item) => item.classList.contains('inactive'))) {
            showResult(playButton, cards, playList, pointsScale);
            i = 0;
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

function displayCorrectAnswer(item, pointsScale, correctSound, correctSign) {
	correctSound.play();
	pointsScale.prepend(correctSign.cloneNode(false));
	item.classList.add('inactive');
}

function displayWrongAnswer(pointsScale, errorSound, errorSign) {
	errorSound.play();
	pointsScale.prepend(errorSign.cloneNode(false));
}

function showResult(playButton, cards, playList, pointsScale) {
	const errors = Array.from(pointsScale.children).filter((item) =>
		item.classList.contains('error')
	);
	const resultText = document.querySelector('.results');
	const successImg = document.querySelector('.goodResult');
	const failImg = document.querySelector('.failResult');
  
  resultText.textContent = '';
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
	setTimeout(dropResult, 5000, successImg, failImg, resultText, playButton, cards, playList, pointsScale);
}

function dropResult(successImg, failImg, resultText, playButton, cards, playList, pointsScale) {
	const hidingPlace = document.querySelector('.playAssets');
	resultText.textContent = '';
  console.log(resultText, resultText.textContent);
	hidingPlace.append(successImg, failImg, resultText);
	document.querySelector('.cover').hidden = true;

	endGame(playButton, cards, playList, pointsScale);
}

function endGame(playButton, cards, playList, pointsScale) {
  const correctSound = document.querySelector('audio.correct');
	const errorSound = document.querySelector('audio.error');
	const correctSign = document.querySelector('img.correct');
	const errorSign = document.querySelector('img.error');
  let i = 0;
	Array.from(pointsScale.children).forEach((item) => item.remove());
	playButton.classList.remove('repeat');
	playButton.textContent = 'Start';
  cards.forEach((item) => {
    item.classList.remove('inactive');
    item.removeEventListener('click', () => {
      if (!item.classList.contains('inactive')) {
        if (playList[i] === item.children[2]) {
          displayCorrectAnswer(item, pointsScale, correctSound,	correctSign);
          playList[i].muted = true;
          i++;
          if (playList[i]) {
            playList[i].muted = false;
            playList[i].play();
          }
        } else if (playList[i]) {
          displayWrongAnswer(pointsScale, errorSound, errorSign);
        }
      }
      if (Array.from(cards).every((item) => item.classList.contains('inactive'))) {
        showResult(playButton, cards, playList, pointsScale);
        i = 0;
      }
    });
  });
	playList.length = 0;
}

function returnToTrainMode() {
  const cards = document.querySelectorAll('.card .front');
	if (document.getElementById('toggle').checked) {
		document.getElementById('toggle').checked = false;
	}
	prepareForGame(cards);
// 	endGame();
}

export { fillInTheContent, addFlipEffect, playGame, returnToTrainMode };
