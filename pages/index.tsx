import Head from 'next/head';
import React from 'react';
import { EventList } from '../components/event/event-list';
import { getFeaturedEvents } from '../dummy-data';



const Home : React.FC = () =>{

  const featuredEvent = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <EventList events={featuredEvent}/>
        </div>
      </main>

      
    </div>
  )
}
export default Home;