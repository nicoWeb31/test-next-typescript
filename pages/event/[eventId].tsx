import React from 'react';

interface EventDetailProps {
    eventId: string;
}


const EventDetail : React.FC<EventDetailProps> = ({ eventId }) => {
  return (
    <div>
      <h1>event detail</h1>
      <h3>{eventId}</h3>
    </div>
  );
};


export default EventDetail;