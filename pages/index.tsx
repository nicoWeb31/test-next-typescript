import Head from "next/head";
import React from "react";
import { EventList } from "../components/event/eventList/event-list";
import { Event } from "../interfaces/envent";
import { getFeaturedEvent } from "../utils/getEventApi";

interface HomeProps {
    featuredEvent: Event[];
}

const Home: React.FC<HomeProps> = ({ featuredEvent }) => {

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div>
                    <EventList events={featuredEvent} />
                </div>
            </main>
        </div>
    );
};


//prerendering page
export async function getStaticProps() {
    const featuredEvent = await getFeaturedEvent();
    return { props: { featuredEvent } };
}


export default Home;
