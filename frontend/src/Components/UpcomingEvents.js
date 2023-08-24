import './Styles/UpcomingEvents.css';
import { EventCard } from './EventCard.js';

export const UpcomingEvents = ({ events }) => {
    return (
        <div className='upcoming-events-container'>
            <p className='upcoming-events-header'>
                Upcoming Events
            </p>
            <div className= 'events-card-container'>
                {
                    events.map(item => {

                        return (
                            <EventCard event={item} />
                        )
                    })
                }

            </div>


        </div>
    );
};