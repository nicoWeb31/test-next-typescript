import React from "react";
import { useRouter } from "next/router";
import { EventList } from "../../components/event/eventList/event-list";
import EventSearch from "../../components/event/eventSearch/EventSearch";
import { getAllEvents, getFeaturedEvents } from "../../components/data/dummy-data";
import { Event } from "../../interfaces/envent";

const AllEventPage: React.FC = () => {
    const featuredEvent: Event[] = getFeaturedEvents();
    const router = useRouter();
    const events = getAllEvents();

    const findEneventHandler = (
        year: string | undefined,
        month: string | undefined
    ) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
        
    };

    return (
        <div>
            <EventSearch searchEvent={findEneventHandler} />
            <EventList events={featuredEvent} />
        </div>
    );
};

export default AllEventPage;
