import { timeUntilEvent } from './time';

import { 
    displayEvent
} from './display';

import {
    createLi,
    createLiButton,
    makeEvent
} from './create';

import { 
    isFutureDate,
    eventAlreadyNamed
} from './check';

import { refreshCountdown } from './refresh';

let allStoredEvents = JSON.parse(localStorage.getItem('allStoredEvents'));

window.onload = () => {
    if (allStoredEvents !== null) {
        for (const storedEvent of allStoredEvents) {
            const listItem = createLi(storedEvent.Event);
            
            const timestamp = timeUntilEvent(storedEvent.Date);
            isFutureDate(timestamp, listItem);

            displayEvent(timestamp, listItem, storedEvent.Event)

            createLiButton(listItem);
        }

    } else {
        allStoredEvents = [];
    }
}

window.submitForm = function submitForm(form) {
    const date = form.eventdate.value;
    const event = form.eventname.value;

    const timestamp = timeUntilEvent(date);
    if (timestamp <= 0) {
        alert('Event has already occurred so cannot be added to countdown list.');
    } else if (eventAlreadyNamed(event)) {
        alert('This event name has already been taken. Please choose a unique event name.');
    } else {
        allStoredEvents.push({Event:event, Date:date});
        localStorage.setItem('allStoredEvents', JSON.stringify(allStoredEvents));

        makeEvent(timestamp, event);
    }
};

/* Refresh dates every second */

setInterval(refreshCountdown, 1000);