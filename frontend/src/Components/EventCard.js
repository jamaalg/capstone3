import './Styles/EventCard.css';

export const EventCard = ({ event }) => {
  return (
    <div className='event-card-container'>
      <div className='card-img'></div>

      <div className='card-body'>
        <h5 className='event-name'>{event.name}</h5>
        <p className='event-location'>{event.location}</p>
        <p className='event-date'>{event.date}</p>
        <p className='event-ticketprice'>{event.ticketprice}</p>
        <p className='event-attendees'>{event.attendees}</p>
      </div>
    </div>
  );
};