import React, { Fragment } from "react";
import { useRouter } from "next/router";
// import { getFilteredEvents } from "../../data/dummy-data";
import { getFilteredEvents } from "../../utils/getEventApi";
import { EventList } from "../../components/event/eventList/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button/button";
import ErrorAlert from "../../components/error-alert/error-alert";
import { Event } from "../../interfaces/envent";
import Head from "next/head";

interface EventBySlug {
    hasError: boolean;
    filteredEvents: Event[];
    datetm: { filterYear: number; filterMonth: number };
}

const EventBySlug: React.FC<EventBySlug> = ({
    hasError,
    filteredEvents,
    datetm,
}) => {
    if (hasError) {
        return (
            <Fragment>
                <ErrorAlert alert="alert">
                    <p>Invalid filter, please adjust your value.</p>;
                </ErrorAlert>
                <div className="center">
                    <Button refLink="/events"> Show all events</Button>
                </div>
            </Fragment>
        );
    }

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert alert="alert">
                    <p>no event found !</p>
                </ErrorAlert>
                <div className="center">
                    <Button refLink="/events"> Show all events</Button>
                </div>
            </Fragment>
        );
    }

    if (!filteredEvents) {
        return <p className="center">Loading....</p>;
    }
    
    const date = new Date(datetm?.filterYear, datetm?.filterMonth - 1);

    return (
        <>
            <Head>
                <title>filtered Event </title>
                <meta name="description" content="very test nextjs ;)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="center">filter events by slug</h1>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </>
    );
};

//get server side props_________________________________________________________
export const getServerSideProps = async (context: any) => {
    const { params } = context;

    const filterData = params.slug;

    const filterYear = +filterData[0];
    const filterMonth = +filterData[1];

    if (
        isNaN(filterYear) ||
        isNaN(filterMonth) ||
        filterYear > 2030 ||
        filterMonth < 1 ||
        filterMonth > 12
    ) {
        return {
            props: { hasError: true },
        };
    }

    const filteredEvents = await getFilteredEvents({
        year: filterYear,
        month: filterMonth,
    });

    return {
        props: {
            filteredEvents,
            date: {
                filterYear,
                filterMonth,
            },
        },
    };
};

export default EventBySlug;
