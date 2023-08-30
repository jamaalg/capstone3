import './Styles/Home.css';
import { HomeHero } from './HomeHero';
import { CardRound } from './CardRound';
import { Footer } from './Footer';
import { UpcomingEvents } from './UpcomingEvents';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './context/DataContext';
import axios from 'axios';
export const Home = () => {
  const [shouldUpdate, setShouldUpdate] = useState(true);

  const [events, setEvents] = useState([]);

  const dataContext = useContext(DataContext);
  const categories = dataContext.categories.current;
  useEffect(() => {
    const getUpcomingEvents = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/api/upcomingEvents')
          .then((res) => res.data);
        setEvents(response);
      } catch (err) {
        console.error(err);
      }
    };

    getUpcomingEvents();
  }, []);

  return (
    <div className='home-container'>
      <HomeHero />
      <div className='categories-container'>
        {categories.map((c) => (
          <CardRound key={c} categorie={c} />
        ))}
      </div>
      <UpcomingEvents events={events} />
      <div className='home-footer-container'>
        <Footer />
      </div>
    </div>
  );
};
