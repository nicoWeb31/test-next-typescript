import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import { EventList } from "../../components/event/eventList/event-list";


const EventBySlug: React.FC = () => {
    const router = useRouter();

    //return an array with queryData ["2021", "5"]
    const filterData = router.query.slug;
    if (!filterData) {
        return <p className="center">Loading....</p>;
    }

    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if (
        isNaN(filterYear) ||
        isNaN(filterMonth) ||
        filterYear > 2030 ||
        filterMonth < 1 ||
        filterMonth > 12
    ) {
        return <p>Invalid filter, please adjust your value.</p>
    }

    const filteredEvents = getFilteredEvents({ year:filterYear, month:filterMonth });

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">no event found ! </p>;
    }

    return (
        <div>
            <h1>filter events by slug</h1>
            <EventList events={filteredEvents}/>
        </div>
    );
};

export default EventBySlug;
