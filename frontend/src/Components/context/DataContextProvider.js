import { DataContext } from './DataContext';
import { useRef, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContextProvider = ({ children }) => {
  const dataContext = useContext(DataContext);
  const events = useRef([]);
  const categories = useRef([]);
  /* 
  const setDate = () => {
    let yourDate = new Date();
    yourDate = yourDate.toISOString().split('T')[0];
    date.current = yourDate;
    return;
  };
 */
  useEffect(() => {
    const setEvents = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getEvents')
          .then((res) => res.data);
        console.log('Fetched Events');
        events.current = response;
        dataContext.events.current = events;
      } catch (err) {
        console.error(err);
      }
    };

    const setCategories = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getCategories')
          .then((res) => res.data);
        console.log('Fetched Categories');
        categories.current = response;
        dataContext.categories.current = categories.current;
      } catch (err) {
        console.error(err);
      }
    };

    setCategories();
    setEvents();
    // use user._id
  }, []);
  return (
    <DataContext.Provider value={{ events, categories }}>
      {children}
    </DataContext.Provider>
  );
};
