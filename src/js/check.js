import { removeEvent } from "./remove";

export function isFutureDate(timestamp, listItem) {
    if (timestamp <= 0) {
        removeEvent(listItem);
    }
}