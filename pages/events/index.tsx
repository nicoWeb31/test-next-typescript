import React from 'react'
import { EventList } from '../../components/event/eventList/event-list';
import EventSearch from '../../components/event/eventSearch/EventSearch';
import { getFeaturedEvents } from '../../dummy-data';
import { Event } from '../../interfaces/envent';

const AllEventPage : React.FC = () => {

    const featuredEvent : Event[] = getFeaturedEvents();

    return (
        <div>
            <EventSearch/>
            <EventList events={featuredEvent}/>

        </div>
    )
}

export default AllEventPage
