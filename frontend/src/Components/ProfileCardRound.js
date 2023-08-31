import './Styles/ProfileCardRound.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgphoto from './img/picture-of-grandmother-341637084.png'

const filenames = [
  'band-concert-flyer-936944700.png',
  'baseball-tournament-flyer-single-page-188018434.png',
  'baseball-tournament-flyer-single-page-53836191.png',
  'basketball-event-flyer-217720146.png',
  'bmx-bike-event-flyer-single-page-655942894.png',
  'bmx-bike-event-flyer-single-page-715069027.png',
  'bmx-bike-event-flyer-single-page-948738779.png',
  'business-seminar-flyer-22282236.png',
  'car-show-flyer-single-page-445067413.png',
  'car-show-flyer-single-page-445884394.png',
  'car-show-flyer-single-page-564363469 (1).png',
  'car-show-flyer-single-page-564363469.png',
  'car-show-flyer-single-page-59750668.png',
  'circus-flyer-single-page-768341690.png',
  'circus-flyer-single-page-993661896.png',
  'construction-company-flyer-676845912.png',
  'cooking-classes-event-flyer-single-page-530893435.png',
  'cooking-classes-flyer-single-page-533600856.png',
  'cooking-classes-flyer-single-page-962481052.png',
  'cooking-classes-flyer-single-page-991986664.png',
  'cosplay-event-flyer-614145320.png',
  'dirt-bike-racing-event-flyer-138643664.png',
  'fitness-expo-flyer-single-page-270773890.png',
  'fitness-expo-flyer-single-page-299285756.png',
  'fitness-expo-flyer-single-page-323093140.png',
  'fitness-expo-flyer-single-page-3387920.png',
  'fitness-expo-flyer-single-page-387555134.png',
  'fitness-expo-flyer-single-page-39417753.png',
  'fitness-expo-flyer-single-page-509149750.png',
  'fitness-expo-flyer-single-page-647730547.png',
  'fitness-expo-flyer-single-page-887998737.png',
  'food-festival-flyer-single-page-112277090.png',
  'food-festival-flyer-single-page-245720077.png',
  'food-festival-flyer-single-page-276215874.png',
  'food-festival-flyer-single-page-285647744.png',
  'food-festival-flyer-single-page-412813479.png',
  'food-festival-flyer-single-page-449406834.png',
  'food-festival-flyer-single-page-487109314.png',
  'food-festival-flyer-single-page-682598251.png',
  'football-game-event-flyer-single-page-585796750.png',
  'go-kart-racing-event-flyer-875793448.png',
  'hip-hop-concert-flyer-460471686.png',
  'hip-hop-concert-flyer-755816940.png',
  'hip-hop-concert-flyer-781883933.png',
  'hip-hop-concert-flyer-838997206.png',
  'hip-hop-concert-flyer-929892640.png',
  'home-theater-expo-flyer-single-page-595096288.png',
  'home-theater-expo-flyer-single-page-680825297.png',
  'home-theater-expo-flyer-single-page-915064015.png',
  'home-theater-expo-flyer-single-page-940850535.png',
  'job-fair-flyer-300275428.png',
  'job-fair-flyer-single-page-354027311.png',
  'job-fair-flyer-single-page-453543440.png',
  'job-fair-flyer-single-page-460110875.png',
  'marching-band-event-flyer-single-page-580272362.png',
  'marching-band-event-flyer-single-page-727534797.png',
  'marching-band-event-flyer-single-page-748481592.png',
  'motorcycle-racing-event-flyer-920689438.png',
  'plant-expo-flyer-single-page-374615988.png',
  'plant-expo-flyer-single-page-465844711.png',
  'plant-expo-flyer-single-page-649051934.png',
  'plant-expo-flyer-single-page-962597437.png',
  'pop-concert-flyer-single-page-176436461.png',
  'pop-concert-flyer-single-page-231569558.png',
  'pop-concert-flyer-single-page-475652645.png',
  'pop-concert-flyer-single-page-499368735.png',
  'pop-concert-flyer-single-page-521144866.png',
  'pop-concert-flyer-single-page-640885839.png',
  'pop-concert-flyer-single-page-656943647.png',
  'pop-concert-flyer-single-page-713931304.png',
  'public-speaker-flyer-674416.png',
  'racing-event-flyer-874026202.png',
  'racquetball-tournament-flyer-single-page-253349581.png',
  'rap-concert-flyer-single-page-271779360.png',
  'rap-concert-flyer-single-page-41062164.png',
  'real-estate-flyer-298099201.png',
  'real-estate-seminar-101149995.png',
  'reptile-expo-flyer-single-page-429511921.png',
  'reptile-expo-flyer-single-page-469116443.png',
  'reptile-expo-flyer-single-page-63954488.png',
  'reptile-expo-flyer-single-page-790368775.png',
  'rock-concert-flyer-489918956.png',
  'rock-concert-flyer-807537115.png',
  'rock-concert-flyer-829466445.png',
  'rock-concert-flyer-829699888.png',
  'rock-concert-flyer-single-page-261834918.png',
  'rock-concert-flyer-single-page-772808039.png',
  'rock-concert-flyer-single-page-8240330.png',
  'skateboard-event-flyer-single-page-306536880.png',
  'skateboard-event-flyer-single-page-546531479.png',
  'skateboard-event-flyer-single-page-887671310.png',
  'symphony-event-flyer-single-page-141712751.png',
  'symphony-event-flyer-single-page-36958716.png',
  'symphony-event-flyer-single-page-765571348.png',
  'symphony-flyer-single-page-204442462.png',
  'tennis-event-flyer-827489383.png',
  'tennis-tournament-flyer-67248210.png',
  'wine-tasting-event-398854859.png',
  'wine-tasting-event-753517217.png',
  'wine-tasting-event-flyer-55209959.png',
];

export const ProfileCardRound = ({ event }) => {




  const selectRandomPicture = () => {
    const randomIndex = Math.floor(Math.random() * filenames.length);
    return filenames[randomIndex];
  };

  const profileStyles = {


    backgroundImage: `url(${bgphoto})`,
    height: '250px',
    width: '250px',
    borderRadius: '50%',
    alignItems: 'center',
    marginRight: '100px',
    backgroundSize: 'cover',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'







  };




  return <div style={profileStyles}>

  </div>;
};
