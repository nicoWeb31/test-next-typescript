import React from 'react';
import { Event } from '../../../interfaces/envent';
import EventItem from '../EventItem/EventItem';
import styles from './event-list.module.scss';

interface EventListProps {
events: Event[];
}

export const EventList : React.FC<EventListProps> = ({events}) => {
    return (
        <ul className={styles.list}>
            {events.map((event) => {
                return (
                    <EventItem event={event} key={event.id}/>
                )
            })
            }
            
        </ul>
    )
}
