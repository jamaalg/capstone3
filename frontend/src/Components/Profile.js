import React, { useState } from 'react';
import './Styles/Profile.css';
import { ProfileCardRound } from './ProfileCardRound';
import { useLocation } from 'react-router-dom';
import bgPhoto1 from './img/bmx-bike-event-flyer-single-page-715069027.png';
import bgPhoto2 from './img/rock-concert-flyer-653240672.png';
import bgPhoto3 from './img/flyer-for-gamer-night-english-language-130416461.png';
import bgPhoto4 from './img/wine-tasting-event-398854859.png';
import { Footer } from './Footer.js';
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
          <p className='bio-info'>
            Motto to live by: "Cherish every moment, embrace every hug"
          </p>
          <p></p>
        </div>
      </div>
      <>
        <p className='recent-events'>Recently Attended Events</p>

        <div className='profile-rsvp-container'>
          <ProfileCardRound picture={bgPhoto1} />
          <ProfileCardRound picture={bgPhoto2} />
          <ProfileCardRound picture={bgPhoto3} />
          <ProfileCardRound picture={bgPhoto4} />
        </div>
      </>
      <Footer />
    </div>
  );
};
