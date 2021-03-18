import React from "react";
import Link from 'next/link';
import { Event } from "../../interfaces/envent";

interface EventItemsProps {
    event: Event;
}

const EventItem: React.FC<EventItemsProps> = ({ event }) => {


    const dateRedable  = new Date(event.date).toLocaleString('en-US',{
        day: 'numeric',
        month: 'long',
        year : 'numeric',
    }) ; 

    const formatAdress : string = event.location.replace(',','\n')
    return (
        <li>
            <img src={`/${event.image}`} alt={event.title}></img>
            <div>
                <div>
                    <h2>{event.title}</h2>
                    <div>
                        <time>{dateRedable}</time>
                    </div>
                    <div>
                        <address>{formatAdress}</address>
                    </div>
                </div>
                <div>
                    <Link href={`/event/${event.id}`}> 
                        Explore
                    
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
