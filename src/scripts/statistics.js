import cardsInfoList from './cards.js';
import { addFlipEffect } from './section.js';

function fillInTheTableBasicInfo() {
	const tableBody = document.querySelector('table');
	const tableFragment = document.createDocumentFragment();

	let j = 1;
	let k = 1;
	for (let i = 1; i <= 80; i++) {
		const newRow = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');
		const td4 = document.createElement('td');
		const td5 = document.createElement('td');
		const td6 = document.createElement('td');
		const td7 = document.createElement('td');
		const td8 = document.createElement('td');

		td1.append(i);
		td1.classList.add(`category${j}`);

		td2.append(cardsInfoList[j][0]);
		td2.classList.add(`category${j}`);

		td3.append(cardsInfoList[j][k].word);

		td4.append(cardsInfoList[j][k].translation);

		const arrOfClicks = localStorage.getItem(`${cardsInfoList[j][k].word}0`);
		td5.append(arrOfClicks || 0);

		const arrOfCorrects = localStorage.getItem(cardsInfoList[j][k].word);
		td6.append(arrOfCorrects || 0);

		const arrOfProc = localStorage.getItem(`${cardsInfoList[j][k].word}2`);
		td7.append(arrOfProc || '0%');

		const arrOfMistakes = localStorage.getItem(`${cardsInfoList[j][k].word}1`);
		td8.append(arrOfMistakes || 0);

		newRow.append(td1, td2, td3, td4, td5, td6, td7, td8);
		tableFragment.append(newRow);
		k++;
		if (i % 8 === 0) {
			j++;
			k = 1;
		}
	}
	tableBody.append(tableFragment);

	const descendingButtons = Array.from(
		document.querySelectorAll('.descending')
	);
	descendingButtons.forEach(
		(item) =>
			(item.onclick = () => {
				sortTheTableDescending(descendingButtons, item);
			})
	);

	const ascendingButtons = Array.from(document.querySelectorAll('.ascending'));
	ascendingButtons.forEach(
		(item) =>
			(item.onclick = () => {
				sortTheTableAscending(ascendingButtons, item);
			})
	);

	const resetButton = document.querySelector('.stat2');
	resetButton.onclick = () => localStorage.clear();

	repeatDifficultWords();
}

function repeatDifficultWords() {
	const table = document.querySelector('table');
	const sortedRows = Array.from(table.rows)
		.slice(1)
		.sort((rowA, rowB) => {
			return rowB.cells[7].innerHTML - rowA.cells[7].innerHTML;
		});
	table.tBodies[0].append(...sortedRows);

	const arrOfWordsToRepeat = [];
	sortedRows.map((item) => {
		if (arrOfWordsToRepeat.length < 8 && item.cells[7].innerHTML !== '0') {
			arrOfWordsToRepeat.push(item.cells[2].innerHTML);
		}
	});
	console.log(arrOfWordsToRepeat); /////

	const event = new MouseEvent('click'); ///return list to right view
	Array.from(document.querySelectorAll('.descending'))[0].dispatchEvent(event);

	const trainMistakesButton = document.querySelector('.stat1');
	if (arrOfWordsToRepeat.length !== 0) {
		trainMistakesButton.classList.add('ready');
		trainMistakesButton.textContent = 'Repeat difficult words';
    let temporaryCards;
		trainMistakesButton.onclick = () => {
      if (trainMistakesButton.innerHTML !== 'Finish trainig 👍') {
        trainMistakesButton.innerHTML = 'Finish trainig &#128077;';
        trainMistakesButton.classList.add('finish');
        table.hidden = true;
        temporaryCards = workOutWords(arrOfWordsToRepeat);
        console.log(trainMistakesButton.innerHTML);
      } else {
        trainMistakesButton.innerHTML = 'Repeat difficult words';
        trainMistakesButton.classList.remove('finish');
        table.hidden = false;
        temporaryCards.forEach((item) => item.remove());
      }
		};
	}
}

function workOutWords(arrOfWordsToRepeat) {
	const main = document.querySelector('main');
  const cards = [];
	// const arrOfCardsToRepeat = cardsInfoList.filter(
	// 	(item) => item === cardsInfoList[1][1].word
	// );
	// console.log(arrOfWordsToRepeat);
	arrOfWordsToRepeat.forEach((item) => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.setAttribute('style', 'margin-top:50px');
    cards.push(card);

		const back = document.createElement('div');
		back.classList.add('back,clicked');
		const image = document.createElement('img');
		image.setAttribute('src', '');
		const name = document.createElement('h3');
		back.append(image, name);

		const front = document.createElement('div');
		front.classList.add('front');
		const audio = document.createElement('audio');
		audio.setAttribute('src', '');
		// audio.closest('div').addEventListener('click', (event) => {
		// 	if (!event.target.closest('button')) {
		// 		item.play();
		// 	}
		// });
		const button = document.createElement('button');
		button.insertAdjacentHTML('beforeend', '<div>&#8634;</div>');
		front.append(image.cloneNode(false), name.cloneNode(false), audio, button);

		card.append(front, back);
		main.append(card);
	});

	// const cardImages = document.querySelectorAll('.front img');
	// const cardNames = document.querySelectorAll('.front h3');
	// const cardSounds = document.querySelectorAll('.front audio');
	// const cardBackImages = document.querySelectorAll('.back img');
	// const cardBackNames = document.querySelectorAll('.back h3');

	// let i = 1;
	// cardImages.forEach((item) => {
	// 	item.setAttribute('src', cardsInfoList[j][i].image);
	// 	i++;
	// });

	// i = 1;
	// cardSounds.forEach((item) => {
	// 	item.setAttribute('src', cardsInfoList[j][i].audioSrc);
	// 	i++;
	// 	item.closest('div').addEventListener('click', (event) => {
	// 		if (!event.target.closest('button')) {
	// 			item.play();
	// 		}
	// 	});
	// });

	addFlipEffect();
  console.log(cards);
  return cards;
}

function sortTheTableDescending(descendingButtons, item) {
	const table = document.querySelector('table');
	const numOfCell = descendingButtons.indexOf(item);
	let sortedRows = Array.from(table.rows).slice(1);
	if (numOfCell > 0 && numOfCell < 4) {
		sortedRows = sortedRows.sort(function sortStringsDescending(rowA, rowB) {
			if (
				rowA.cells[numOfCell].innerHTML.toLowerCase() >
				rowB.cells[numOfCell].innerHTML.toLowerCase()
			) {
				return 1;
			}
			if (
				rowA.cells[numOfCell].innerHTML.toLowerCase() <
				rowB.cells[numOfCell].innerHTML.toLowerCase()
			) {
				return -1;
			}
			return 0;
		});
	} else {
		sortedRows = sortedRows.sort(function sortNumbersDescending(rowA, rowB) {
			return (
				parseInt(rowA.cells[numOfCell].innerHTML) -
				parseInt(rowB.cells[numOfCell].innerHTML)
			);
		});
	}
	table.tBodies[0].append(...sortedRows);
}

function sortTheTableAscending(ascendingButtons, item) {
	const table = document.querySelector('table');
	const numOfCell = ascendingButtons.indexOf(item) + 1;
	let sortedRows = Array.from(table.rows).slice(1);
	if (numOfCell > 0 && numOfCell < 4) {
		sortedRows = sortedRows.sort((rowA, rowB) => {
			if (
				rowA.cells[numOfCell].innerHTML.toLowerCase() <
				rowB.cells[numOfCell].innerHTML.toLowerCase()
			) {
				return 1;
			}
			if (
				rowA.cells[numOfCell].innerHTML.toLowerCase() >
				rowB.cells[numOfCell].innerHTML.toLowerCase()
			) {
				return -1;
			}
			return 0;
		});
	} else {
		sortedRows = sortedRows.sort((rowA, rowB) => {
			return (
				parseInt(rowB.cells[numOfCell].innerHTML) -
				parseInt(rowA.cells[numOfCell].innerHTML)
			);
		});
	}
	table.tBodies[0].append(...sortedRows);
}

export { fillInTheTableBasicInfo };
