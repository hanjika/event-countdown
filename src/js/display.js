import { PERIODS } from './periods';
import { createLiButton } from './create';

let periodsRequired;

export function displayEvent(timestamp, listItem, event) {
    fromNow(timestamp, listItem);
    listItem.innerText += ' until ' + event;
}

function fromNow(timestamp, listItem) {
    const resultArr = [];

    for (let i = 0; i < PERIODS.length; i++) {
        while (timestamp >= PERIODS[i].value) {
            resultArr.push(PERIODS[i].name);
            timestamp -= PERIODS[i].value;
        }
    }
    const resultFormatted = checkDuplicate(resultArr);
    printTime(resultFormatted, listItem);
}

function checkDuplicate(array) {
    let weeks = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    const condensed = [];

    for (const period of array) {
        if (period === 'week') {
            weeks++;
        } else if (period === 'day') {
            days++;
        } else if (period === 'hour') {
            hours++;
        } else if (period === 'minute') {
            minutes++;
        }
    }
    condensed.push(weeks, days, hours, minutes, seconds, milliseconds);
    return arrayWithoutZero(condensed);
}

function arrayWithoutZero(array) {
    periodsRequired = [];

    for (const period of PERIODS) {
        periodsRequired.push(period);
    }

    for (let i = 0; i < array.length; i++) {
        while (array[i] === 0) {
            array.splice(i, 1);
            periodsRequired.splice(i, 1);
        }
    }
    return array;
}


function printTime(finalArray, listItem) {
    const numOfPeriod = finalArray.length;

    for (let i = 0; i < finalArray.length; i++) {
        if (numOfPeriod > 1 && numOfPeriod === i + 1) {
            listItem.innerText += ' and';
        } else if (numOfPeriod > 1 && i > 0) {
            listItem.innerText += ',';
        }
        listItem.innerText += ' ' + finalArray[i] + ' ' + periodsRequired[i].name;
        if (finalArray[i] > 1) {
            listItem.innerText += 's';
        }
    }
}

export function displayNewTimes(timestamp, event) {
    const storedEventLi = document.getElementById(event);

    storedEventLi.innerText = '';
    
    displayEvent(timestamp, storedEventLi, event)

    createLiButton(storedEventLi);
}