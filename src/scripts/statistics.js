import cardsInfoList from './cards.js';

function fillInTheTableBasicInfo() {
    const tableBody = document.querySelector('table');
    const tableRows = document.createDocumentFragment();
    const arrOfNo = [];
    const arrOfCategories = [];
    const arrOfWords = [];
    const arrOfTranslations = [];
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
        arrOfNo.push(td1);

        td2.append(cardsInfoList[j][0]);
        td2.classList.add(`category${j}`);
        arrOfCategories.push(td2);

        td3.append(cardsInfoList[j][k].word);
        arrOfWords.push(td3);
        
        td4.append(cardsInfoList[j][k].translation);
        arrOfTranslations.push(td4);

        const arrOfClicks = localStorage.getItem(
            `${cardsInfoList[j][k].word}0`
        );
        td5.append(arrOfClicks || 0);

        const arrOfCorrects = localStorage.getItem(cardsInfoList[j][k].word);
        td6.append(arrOfCorrects || 0);

        const arrOfProc = localStorage.getItem(`${cardsInfoList[j][k].word}2`);
        td7.append(arrOfProc || '0%');

        const arrOfMistakes = localStorage.getItem(
            `${cardsInfoList[j][k].word}1`
        );
        td8.append(arrOfMistakes || 0); //wrong clicks

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

    const ascendingButtons = document.querySelectorAll('.ascending');
    const descendingButton = document.querySelectorAll('.descending');
    ascendingButtons.forEach((item) => item.onclick = () => sortTheTable);
    descendingButton.forEach((item) => item.onclick = () => sortTheTable);
}

function sortTheTable() {
    let resultArr;
    // const sortingRows = document.querySelectorAll('tr');
        if (num >= 4) {
            resultArr = arr.sort(sortNumbers);
            //   console.log(arr[1]);
        } else {
            resultArr = arr.sort(sortStrings);
            let i = 0;
            arr.forEach(element => {
                element.textContent = `${resultArr[i].textContent}`;
                resultArr[i].textContent = element.textContent;
                // element.textContent = resultArr[i].textContent;
                console.log( resultArr[i].textContent);
                i++;
            });
        }
    return resultArr;
}

function sortNumbers(a, b) {
    return b - a;
}

function sortStrings(a, b) {
    // console.log(a.textContent);
    // console.log(b.textContent);
    if (a.textContent > b.textContent) {
        return 1;
    }
    if (a.textContent < b.textContent) {
        return -1;
    }
    // a должно быть равным b
    return 0;
}

export { fillInTheTableBasicInfo };
