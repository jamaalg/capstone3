import React, { useState } from 'react';
import './Styles/Profile.css';
import { ProfileCardRound } from './ProfileCardRound';
import { useLocation } from 'react-router-dom';

export const Profile = () => {
  const [events, setEvents] = useState([
    { id: 1 },
    { id: 4 },
    { id: 3 },
    { id: 6 },
    { id: 7 },
  ]);
  const { state } = useLocation();
  const { user } = state;
  const { data, token } = user;
  console.log({ state });

  return (
    <div className='profile-main-container'>
      <div className='profile-copy-info-container'>
        <div className='profile-copy-pic-container'>
          <p>{data.username}</p>
        </div>
        <div className='profile-copy-bio-container'></div>
      </div>
      <div className='profile-info-container'>
        <div className='profile-pic-container'></div>
        <div className='profile-bio-container'>
          <p className='bio-info'> Name: Gloria Doe </p>
          <p className='bio-info'>
            Hometown: {data.location.city}, {data.location.state}{' '}
          </p>
          <p className='bio-info'>Favorite Events: Comedy Shows </p>
          <p className='bio-info'> Favorite Band: Outkast</p>
          <p className='bio-info'>Motto to live by: "Cherish every moment, embrace every hug"</p>
          <p></p>
        </div>
      </div>
      <>
        <p className="recent-events">Recently Attended Events</p>
        <div className='profile-rsvp-container'>

          {events.map((event) => {
            return <ProfileCardRound event={event} />;
          })}
        </div>
      </>

    </div>
  );
};
