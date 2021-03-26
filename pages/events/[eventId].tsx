import React from "react";
// import { useRouter } from "next/router";
// import { getEventById } from "../../data/dummy-data";
import { getEventById, getDataEvents } from "../../utils/getEventApi";
import EventSummary from "../../components/event-detail/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import { Event } from "../../interfaces/envent";

interface EventDetailProps {
    event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({event}) => {
    // const { query } = useRouter();
    // const id = query.eventId?.toString();
    // const event = getEventById(id);

    if (!event) {
        return (
            <ErrorAlert alert="">
                <p> not found event</p>;
            </ErrorAlert>
        );
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

export async function getStaticProps(context: any) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props : {
            event,
        }
    }

}

//path
export async function getStaticPaths() {
    const events : Event[] = await getDataEvents();
    const ids = events.map((event: Event) => event.id);

    const pathWithParams = ids.map((id: string) => {
        return {
            params: { eventId: id },
        };
    });

    return {
        paths: pathWithParams,
        fallback: true,
    };
}

export default EventDetail;
