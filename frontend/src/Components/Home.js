import './Styles/Home.css';
import { HomeHero } from './HomeHero';
import { CardRound } from './CardRound';
import { Footer } from './Footer';
import { UpcomingEvents } from './UpcomingEvents';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from './context/DataContext';

export const Home = () => {
  const [shouldUpdate, setShouldUpdate] = useState(true);

  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([
    'Sports',
    'Concerts',
    'Business',
    'Performing/Visual Arts',
  ]);

  const dataContext = useContext(DataContext);

  useEffect(() => {
    /*  const getCategories = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getCategories')
          .then((res) => res.data);
        console.log('Fetched Categories');
        dataContext.setCategoriesRef(response);
      } catch (err) {
        console.error(err);
      }
    };

    const getEvents = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getEvents')
          .then((res) => res.data);
        console.log('Fetched Categories');
        dataContext.(response);
      } catch (err) {
        console.error(err);
      }
    };
    getEvents();
    getCategories(); */
    console.log({
      dataContext: dataContext,
    });
    setEvents(dataContext.events.current);
    //setCategories(dataContext.categories.current);
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
