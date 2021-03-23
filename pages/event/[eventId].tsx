import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-detail/event-content";


const EventDetail: React.FC = () => {
    const { query } = useRouter();
    const id = query.eventId?.toString();
    const event = getEventById(id);

    if (!event){
      return <p> not found event</p>;
    } 

    return (
        <>
            <EventSummary title={event?.title} />

            {event && (
                <EventLogistics
                    date={event?.date}
                    address={event?.location}
                    image={event?.image}
                    imageAlt={event?.title}
                />
            )}
            <EventContent>
                <p>{event?.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetail;
