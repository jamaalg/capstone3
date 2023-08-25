import './Styles/EventCard.css';

export const EventCard = ({ event }) => {
  return (
    <div className='event-card-container'>
      <div className='card-img'></div>

      <div className='card-body'>
        <h6 className='card-body-event-name'>{event.name}</h6>
        <p className='card-body-event-location'>
          {event.location.city}, {event.location.state}{' '}
        </p>
        <p className='card-body-event-date'>{event.date}</p>
        <p className='card-body-event-ticketprice'>${event.ticketPrice}</p>
        <p className='card-body-event-attendees'>{event.attendees.length}</p>
      </div>
    </div>
  );
};
