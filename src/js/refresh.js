import { timeUntilEvent } from "./time";
import { removeEvent } from "./remove";
import { displayNewTimes } from "./display";

export function refreshCountdown() {
    const stored = JSON.parse(localStorage.getItem('allStoredEvents'));
    if (stored !== null) {
        for (let i = 0; i < stored.length; i++) {
            let timestamp = timeUntilEvent(stored[i].Date);
            if (timestamp <= 0) {
                const listItem = document.getElementById(stored[i].Event);
                removeEvent(listItem);
            } else {
                displayNewTimes(timestamp, stored[i].Event);
            }
        }
    }   
}