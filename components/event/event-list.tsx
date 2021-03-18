import React from 'react';
import { Event } from '../../interfaces/envent';

interface EventListProps {
events: Event[];
}

export const EventList : React.FC<EventListProps> = ({events}) => {
    return (
        <ul>
            {events.map((event) => {
                return (
                    <li key={event.id}>{event.title}</li>
                )
            })
            }
            
        </ul>
    )
}
