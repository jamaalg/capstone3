import './Styles/UpcomingEvents.css';
import { EventCard } from './EventCard.js';
import { useState } from 'react';

export const UpcomingEvents = ({ events }) => {
  let yourDate = new Date();

  const [date, setDate] = useState(yourDate.toISOString().split('T')[0]);

  const sortedActivities = events.slice().sort((a, b) => b.date - a.date);

  console.log({ sorted: sortedActivities });
  return (
    <div className='upcoming-events-container'>
      <h1 className='upcoming-events-header'>Upcoming Events</h1>
      <div className='events-card-container'>
        {events.map((item) => {
          return <EventCard event={item} />;
        })}
      </div>
    </div>
  );
};
