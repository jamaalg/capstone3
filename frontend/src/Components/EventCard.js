import './Styles/EventCard.css';
import {
  faLocationDot,
  faCalendarDays,
  faDollarSign,
  faEye,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
export const EventCard = ({ event }) => {
  return (
    <div className='event-card-container'>
      <div className='card-img'></div>
      <Link to='/event/:id' state={{ eventData: event }}>
        <h6 className='card-body-event-name'>{event.name}</h6>
      </Link>
      <div className='card-body'>
        <p className='card-body-event-promoter'>
          <span className='card-icon'>
            <FontAwesomeIcon icon={faEye} />
          </span>
          {event.promoter}
        </p>
        <p className='card-body-event-location'>
          <span className='card-icon'>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {event.location.city}, {event.location.state}{' '}
        </p>

        <p className='card-body-event-date'>
          <span className='card-icon'>
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          {event.date}
        </p>
        <p className='card-body-event-ticketprice'>
          <span className='card-icon'>
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
          ${event.ticketPrice}
        </p>
        <p className='card-body-event-attendees'>
          <span className='card-icon'>
            <FontAwesomeIcon icon={faUsers} />
          </span>
          {event.attendees.length}
        </p>
      </div>
    </div>
  );
};
