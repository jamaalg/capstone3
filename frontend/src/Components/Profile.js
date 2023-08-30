import React, {useState} from 'react';
import './Styles/Profile.css'
import { ProfileCardRound } from './ProfileCardRound';
export const Profile = () => {

  const [events, setEvents] = useState(
    [{ id: 1 },
    { id: 4 },
    { id: 3 },
    { id: 6 },
    { id: 7 },


    ]

  )
  return (
    <div className='profile-main-container'>

      <div className='profile-info-container'>
        <div className='profile-pic-container'>

        </div>
        <div className='profile-bio-container'>
          <p> Name: Gloria Doe </p>
          <p>Hometown: Chicago, IL </p>
          <p>Favorite Events: Comedy Shows </p>
          <p> Favorite Band: Outkast</p>
          <p>Motto to live by: "Cherish every moment, embrace every hug"</p>
        </div>

      </div>
      <div className='profile-rsvp-container' >
        {events.map(event => {

          return (
            <ProfileCardRound event= {event}/>
          )
        })}

      </div>
      

      
    </div>
  );
};

