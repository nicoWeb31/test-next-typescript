import React from 'react'
import { EventList } from '../../components/event/event-list';
import { getFeaturedEvents } from '../../dummy-data';
import { Event } from '../../interfaces/envent';

const allEventPage : React.FC = () => {

    const featuredEvent : Event[] = getFeaturedEvents();

    return (
        <div>
            <EventList events={featuredEvent}/>

        </div>
    )
}

export default allEventPage
