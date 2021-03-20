import React from "react";
import Link from 'next/link';
import { Event } from "../../../interfaces/envent";
import style from './event-item.module.scss';

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
        <li className={style.item}>
            <img src={`/${event.image}`} alt={event.title}></img>
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{event.title}</h2>
                    <div className={style.Date}>
                        <time>{dateRedable}</time>
                    </div>
                    <div className={style.adress}>
                        <address>{formatAdress}</address>
                    </div>
                </div>
                <div className={style.actions}>
                    <Link href={`/event/${event.id}`}> 
                        Explore
                    
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
