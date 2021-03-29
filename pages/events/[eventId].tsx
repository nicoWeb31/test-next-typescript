import React from "react";
// import { useRouter } from "next/router";
// import { getEventById } from "../../data/dummy-data";
import { getEventById, getFeaturedEvent } from "../../utils/getEventApi";
import EventSummary from "../../components/event-detail/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";
import { Event } from "../../interfaces/envent";
import Head from "next/head";
import Comments from "../../components/input/comments";

interface EventDetailProps {
    event: Event;
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
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
            <Head>
                <title>{event.title} </title>
                <meta name="description" content={event.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
            <Comments eventId={event.id}/>
        </>
    );
};

export async function getStaticProps(context: any) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            event,
        },
        revalidate: 30,
    };
}

//path
export async function getStaticPaths() {
    const events: Event[] = await getFeaturedEvent();
    const ids = events.map((event: Event) => event.id);

    const pathWithParams = ids.map((id: string) => {
        return {
            params: { eventId: id },
        };
    });

    return {
        paths: pathWithParams,
        fallback: "blocking",
    };
}

export default EventDetail;
