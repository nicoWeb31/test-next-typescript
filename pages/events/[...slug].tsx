import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../components/data/dummy-data";
import { EventList } from "../../components/event/eventList/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/button/button";
import ErrorAlert from "../../components/error-alert/error-alert";

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

    const filteredEvents = getFilteredEvents({
        year: filterYear,
        month: filterMonth,
    });

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

    const date = new Date(filterYear, filterMonth - 1);

    return (
        <div>
            <h1>filter events by slug</h1>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </div>
    );
};

export default EventBySlug;
