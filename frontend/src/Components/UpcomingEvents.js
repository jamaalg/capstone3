import './Styles/UpcomingEvents.css';
import { EventCard } from './EventCard.js';

export const UpcomingEvents = ({ events }) => {
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
