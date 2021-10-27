import { displayEvent } from "./display";
import { removeEvent } from "./remove";

export function createLi(event) {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', event);

    document.querySelector('.list-of-events').appendChild(listItem);
    
    return listItem;
}

export function createLiButton(listItem) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '×';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        removeEvent(listItem);
    });
}

export function makeEvent(timestamp, event) {
    const listItem = createLi(event);
    
    displayEvent(timestamp, listItem, event);

    createLiButton(listItem);
}