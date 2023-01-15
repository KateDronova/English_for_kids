import cardsInfoList from './cards.js';

function fillInTheTableBasicInfo() {
	const tableBody = document.querySelector('table');
	const tableRows = document.createDocumentFragment();
    const arrOfNo = [];
    const arrOfCategories = [];
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
            td4.append(cardsInfoList[j][k].translation);
            td5.append(0);
            td6.append(0);
            td7.append(0);
            td8.append(0);
            newRow.append(td1, td2, td3, td4, td5, td6, td7, td8);
            tableRows.append(newRow);
            k++;
            if (i % 8 === 0) {
                j++;
                k = 1;
            }
        }

    // console.log(arrOfNo, arrOfCategories);

	tableBody.append(tableRows);
}

export { fillInTheTableBasicInfo };
