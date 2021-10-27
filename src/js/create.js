import { displayEvent } from "./display";
import { removeEvent } from "./remove";

export function createLi(event) {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', event);
    listItem.setAttribute('draggable', true);

    listItem.addEventListener('dragstart', dragLiStart);
    listItem.addEventListener('dragend', dragLiEnd);

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

function dragLiStart(e) {
    setTimeout(() => {
        e.target.classList.add('invisible');
    }, 0); 
}

function dragLiEnd(e) {
    e.target.classList.remove('invisible');
}