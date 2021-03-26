import React from "react";
import DateIcon from "../../icone/date-icon";
import AdressIcon from "../../icone/address-icon";
import ArrowRightIcon from "../../icone/arrow-right-icon";
import { Event } from "../../../interfaces/envent";
import style from "./event-item.module.scss";
import Button from "../../ui/button/button";
import Image from 'next/image';

interface EventItemsProps {
    event: Event;
}

const EventItem: React.FC<EventItemsProps> = ({ event }) => {
    const dateRedable = new Date(event.date).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formatAdress: string = event.location.replace(",", "\n");
    return (
        <li className={style.item}>
            <Image src={`/${event.image}`} alt={event.title} width={340} height={160}/>
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{event.title}</h2>
                    <div className={style.Date}>
                        <span className={style.icon}>
                            <DateIcon />
                        </span>
                        <time>{dateRedable}</time>
                    </div>
                    <div className={style.adress}>
                        <span className={style.icon}>
                        <AdressIcon />

                        </span>
                        <address>{formatAdress}</address>
                    </div>
                </div>
                <div className={style.actions}>
                    <Button refLink={`/events/${event.id}`}>
                        <span>Explore event</span>
                        <span className={style.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
