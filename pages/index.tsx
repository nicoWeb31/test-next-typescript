import Head from "next/head";
import React from "react";
import { EventList } from "../components/event/eventList/event-list";
// import { getFeaturedEvents } from "../data/dummy-data";
import { Event } from "../interfaces/envent";
import { getFeaturedEvent } from "../utils/getEventApi";


interface HomeProps {
  featuredEvent : Event[];
}

const Home: React.FC<HomeProps> = ({ featuredEvent }) => {
    // const featuredEvent = getFeaturedEvents();

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

export async function getStaticProps() {
    const featuredEvent = await getFeaturedEvent();
    return { props: {featuredEvent} };
}
export default Home;
