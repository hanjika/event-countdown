export function timeUntilEvent(date) {
    const now = new Date();
    const eventDate = new Date(date);

    return eventDate.getTime() - now.getTime();
}