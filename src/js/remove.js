let allStoredEvents = JSON.parse(localStorage.getItem('allStoredEvents'));

export function removeFromStorage(listItem) {
    const id = listItem.id;
    for (let i = 0; i < allStoredEvents.length; i++) {
        if (allStoredEvents[i].Event === id) {
            allStoredEvents.splice(i, 1);
            localStorage.setItem('allStoredEvents', JSON.stringify(allStoredEvents));
        }
    }
}

export function removeEvent(listItem) {
    document.querySelector('.list-of-events').removeChild(listItem);
    removeFromStorage(listItem);
}