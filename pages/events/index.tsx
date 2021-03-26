import React from "react";
import { useRouter } from "next/router";
import { EventList } from "../../components/event/eventList/event-list";
import EventSearch from "../../components/event/eventSearch/EventSearch";
// import { getAllEvents, getFeaturedEvents } from "../../data/dummy-data";
import { Event } from "../../interfaces/envent";
import { getDataEvents } from "../../utils/getEventApi";

interface AllEventPageProps {
    events: Event[];
}

const AllEventPage: React.FC<AllEventPageProps> = ({ events }) => {
    // const featuredEvent: Event[] = getFeaturedEvents();
    const router = useRouter();
    // const events = getAllEvents();

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
            <EventList events={events} />
        </div>
    );
};

export const getStaticProps = async() => {
    const events = await getDataEvents();
    return { props :{ events }, revalidate : 1800}
};

export default AllEventPage;
