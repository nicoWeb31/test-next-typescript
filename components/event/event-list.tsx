import React from 'react';
import { Event } from '../../interfaces/envent';
import EventItem from './EventItem';

interface EventListProps {
events: Event[];
}

export const EventList : React.FC<EventListProps> = ({events}) => {
    return (
        <ul>
            {events.map((event) => {
                return (
                    <EventItem event={event} key={event.id}/>
                )
            })
            }
            
        </ul>
    )
}
