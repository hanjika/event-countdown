import { removeEvent } from "./remove";

export function isFutureDate(timestamp, listItem) {
    if (timestamp <= 0) {
        removeEvent(listItem);
    }
}

export function eventAlreadyNamed(event) {
    let allStoredEvents = JSON.parse(localStorage.getItem('allStoredEvents'));

    if (allStoredEvents !== null) {
        for (const storedEvent of allStoredEvents) {
            if (storedEvent.Event === event) {
                return true;
            }
        }
    }
    return false;
}