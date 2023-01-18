import cardsInfoList from './cards.js';

function fillInTheTableBasicInfo() {
  const tableBody = document.querySelector('table');
  const tableRows = document.createDocumentFragment();
  let arrOfNo = arrOfNo || [];
  let arrOfCategories = arrOfCategories || [];
  let arrOfWords = arrOfWords || [];
  let arrOfTranslations = arrOfTranslations || [];
  let arrOfClicksWhole = arrOfTranslations || [];
  let arrOfCorrectsWhole = arrOfTranslations || [];
  let arrOfPercentsWhole = arrOfTranslations || [];
  let arrOfErrorsWhole = arrOfTranslations || [];

  const descendingButtons = Array.from(
    document.querySelectorAll('.descending')
  );
  descendingButtons.forEach(
    (item) =>
      (item.onclick = () => {
        switch (descendingButtons.indexOf(item)) {
        //   case 0:
        //     arrOfNo = arrOfNo.sort(sortNumbersDescending);
        //     console.log(arrOfNo);
        //     break;
          case 0:
            arrOfCategories = arrOfCategories.sort(sortStringsDescending);
            console.log(arrOfCategories);
            break;
          case 1:
            arrOfWords = arrOfWords.sort(sortStringsDescending);
            console.log(arrOfWords);
            break;
          case 2:
            arrOfTranslations = arrOfTranslations.sort(sortStringsDescending);
            console.log(arrOfTranslations);
            break;
          case 3:
            arrOfClicksWhole.sort(sortNumbersDescending);
            console.log(arrOfClicksWhole);
            break;
          case 4:
            arrOfCorrectsWhole.sort(sortNumbersDescending);
            console.log(arrOfCorrectsWhole);
            break;
          case 5:
            arrOfPercentsWhole.sort(sortNumbersDescending);
            console.log(arrOfPercentsWhole);
            break;
          case 6:
            arrOfErrorsWhole.sort(sortNumbersDescending);
            console.log(arrOfErrorsWhole);
            break;
        }
      })
  );

  const ascendingButtons = Array.from(document.querySelectorAll('.ascending'));
  ascendingButtons.forEach(
    (item) =>
      (item.onclick = () => {
        switch (ascendingButtons.indexOf(item)) {
        //   case 0:
        //     arrOfNo = arrOfNo.sort(sortNumbersAscending);
        //     console.log(arrOfNo);
        //     break;
          case 0:
            arrOfCategories = arrOfCategories.sort(sortStringsAscending);
            console.log(arrOfCategories);
            break;
          case 1:
            arrOfWords = arrOfWords.sort(sortStringsAscending);
            console.log(arrOfWords);
            break;
          case 2:
            arrOfTranslations = arrOfTranslations.sort(sortStringsAscending);
            console.log(arrOfTranslations);
            break;
          case 3:
            arrOfClicksWhole.sort(sortNumbersAscending);
            console.log(arrOfClicksWhole);
            break;
          case 4:
            arrOfCorrectsWhole.sort(sortNumbersAscending);
            console.log(arrOfCorrectsWhole);
            break;
          case 5:
            arrOfPercentsWhole.sort(sortNumbersAscending);
            console.log(arrOfPercentsWhole);
            break;
          case 6:
            arrOfErrorsWhole.sort(sortNumbersAscending);
            console.log(arrOfErrorsWhole);
            break;
        }
      })
  );
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
    arrOfNo.push(td1.innerText);

    td2.append(cardsInfoList[j][0]);
    td2.classList.add(`category${j}`);
    arrOfCategories.push(td2.innerText);

    td3.append(cardsInfoList[j][k].word);
    arrOfWords.push(td3.innerText);

    td4.append(cardsInfoList[j][k].translation);
    arrOfTranslations.push(td4.innerText);

    const arrOfClicks = localStorage.getItem(`${cardsInfoList[j][k].word}0`);
    td5.append(arrOfClicks || 0);
    arrOfClicksWhole.push(td5.innerText);

    const arrOfCorrects = localStorage.getItem(cardsInfoList[j][k].word);
    td6.append(arrOfCorrects || 0);
    arrOfCorrectsWhole.push(td6.innerText);

    const arrOfProc = localStorage.getItem(`${cardsInfoList[j][k].word}2`);
    td7.append(arrOfProc || '0%');
    arrOfPercentsWhole.push(td7.innerText);

    const arrOfMistakes = localStorage.getItem(`${cardsInfoList[j][k].word}1`);
    td8.append(arrOfMistakes || 0); //wrong clicks
    arrOfErrorsWhole.push(td8.innerText);

    newRow.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tableRows.append(newRow);
    k++;
    if (i % 8 === 0) {
      j++;
      k = 1;
    }
  }
  tableBody.append(tableRows);

  const resetButton = document.querySelector('.stat2');
  resetButton.onclick = () => localStorage.clear();
}

// function sortTheTable() {
//     let resultArr;
//     // const sortingRows = document.querySelectorAll('tr');
//         if (num >= 4) {
//             resultArr = arr.sort(sortNumbers);
//             //   console.log(arr[1]);
//         } else {
//             resultArr = arr.sort(sortStrings);
//             let i = 0;
//             arr.forEach(element => {
//                 element.textContent = `${resultArr[i].textContent}`;
//                 resultArr[i].textContent = element.textContent;
//                 // element.textContent = resultArr[i].textContent;
//                 console.log( resultArr[i].textContent);
//                 i++;
//             });
//         }
//     return resultArr;
// }

function sortNumbersDescending(a, b) {
  return a - b;
}
function sortNumbersAscending(a, b) {
  return b - a;
}

function sortStringsAscending(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return 1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}

function sortStringsDescending(a, b) {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  // a должно быть равным b
  return 0;
}

export { fillInTheTableBasicInfo };
