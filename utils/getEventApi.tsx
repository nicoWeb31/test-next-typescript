import axios from "axios";
import { Event } from "../interfaces/envent";

export const getDataEvents = async ()  => {
    const { data } = await axios.get(
        "https://nexts-js-course-default-rtdb.firebaseio.com/events.json"
    );

    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }

    return events;
};

export const getFeaturedEvent = async () => {
    const allEvents : Event[] = await getDataEvents();
    return allEvents.filter((event) => event.isFeatured);
};


export async function getEventById(id: string | undefined) {
    const allEvents : Event[] = await getDataEvents();
    return allEvents.find((event) => event.id === id);
}


export async function getFilteredEvents(dateFilter: any) {
    const { year, month } = dateFilter;

    const allEvents : Event[] = await getDataEvents();

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });

    return filteredEvents;
}
