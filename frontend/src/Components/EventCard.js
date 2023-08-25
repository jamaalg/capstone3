import "./Styles/EventCard.css";
import {
  faLocationDot,
  faCalendarDays,
  faDollarSign,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const EventCard = ({ event }) => {
  return (
    <div className="event-card-container">
      <div className="card-img"></div>

      <div className="card-body">
        <h6 className="card-body-event-name">{event.name}</h6>
        <hr></hr>
        <p className="card-body-event-location">
          <span className="card-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          {event.location.city}, {event.location.state}{" "}
        </p>
        <p className="card-body-event-date">
          <span className="card-icon">
            <FontAwesomeIcon icon={faCalendarDays} />
          </span>
          {event.date}
        </p>
        <p className="card-body-event-ticketprice">
          <span className="card-icon">
            <FontAwesomeIcon icon={faDollarSign} />
          </span>
          ${event.ticketPrice}
        </p>
        <p className="card-body-event-attendees">
          <span className="card-icon">
            <FontAwesomeIcon icon={faPerson} />
          </span>
          {event.attendees.length}
        </p>
      </div>
    </div>
  );
};
