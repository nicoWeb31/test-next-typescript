import axios from "axios";

export const getDataEvents = async () => {
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
    const allEvents = await getDataEvents();
    return allEvents.filter((event) => event.isFeatured);
};
