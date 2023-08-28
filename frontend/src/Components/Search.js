import React, { useEffect, useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { EventCard } from './EventCard.js';
import './Styles/Search.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from 'react-bootstrap';
import { DataContext } from './context/DataContext.js';
import axios from 'axios';

export const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [promoters, setPromoters] = useState([]);
  const [promoter, setPromoter] = useState('');
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState('');
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [dates, setDates] = useState([]);
  const d = useContext(DataContext);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const response = await axios
      .get('http://localhost:4000/')
      .then((res) => res.data);
    setPromoters(response.promoters);
    setAllEvents(response.events);
    setDates(response.date);
    setLocations(response.locations);
    setEvents(allEvents);

    console.log('Getting Info for page.');
  };

  const handleLocationClick = (event) => {
    const targetLocation = event.target.dataset.id.split(', ');
    const locale = {
      city: targetLocation[0],
      state: targetLocation[1],
    };
    console.log(location);

    let filteredEventsByLocation = allEvents.filter((event) => {
      return (
        event.location.state === locale.state &&
        event.location.city === locale.city
      );
    });

    if (filteredEventsByLocation.length >= 1) {
      setEvents(filteredEventsByLocation);
      setCategorie(`Events in ${locale.city}, ${locale.state}`);
      return;
    }
  };

  const handlePromoterClick = (event) => {
    const targetPromoter = event.target.dataset.id;
    let filteredEventsByPromoter = allEvents.filter((event) => {
      return event.promoter === targetPromoter;
    });

    if (filteredEventsByPromoter.length >= 1) {
      setEvents(filteredEventsByPromoter);
      setCategorie(`Events by ${targetPromoter}`);

      return;
    }
  };

  const handleCategoryClick = async (event) => {
    let category = event.target.value;

    if (category === 'Theater') {
      category = 'Performing/Visual Arts';
      let filteredEventsByCategory = allEvents.filter((event) => {
        return event.category === category;
      });
      if (filteredEventsByCategory.length >= 1) {
        setEvents(filteredEventsByCategory);
        setCategorie('Performing/Visual Arts');
        return;
      }
    }

    let filteredEventsByCategory = allEvents.filter((event) => {
      return event.category === category;
    });
    if (filteredEventsByCategory.length >= 1) {
      setEvents(filteredEventsByCategory);
      setCategorie(`${category}`);
      return;
    }
  };

  const handleDateSelection = () => {
    console.log('Selection Handler');
  };

  return (
    <div>
      <div className='search-box-container'>
        <input className='search-bar' type='search'></input>
        <button>Search</button>
      </div>
      <div className='search-main-container'>
        <div className='search-filters'>
          <div className='date-filter-container'>
            <label>Date</label>
            <DatePicker
              className='date-picker'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='category-filter-container'>
            <label>Category</label>
            <div className='radio-container'>
              <div className='individual-radio'>
                <input
                  type='radio'
                  name='category'
                  value='Sports'
                  onClick={handleCategoryClick}
                />
                <label>Sports</label>
              </div>
              <div className='individual-radio'>
                <input
                  type='radio'
                  name='category'
                  value='Theater'
                  onClick={handleCategoryClick}
                />
                <label>Theater</label>
              </div>
              <div className='individual-radio'>
                <input
                  type='radio'
                  name='category'
                  value='Business'
                  onClick={handleCategoryClick}
                />
                <label>Business</label>
              </div>
              <div className='individual-radio'>
                <input
                  type='radio'
                  name='category'
                  value='Concerts'
                  onClick={handleCategoryClick}
                />
                <label>Concerts</label>
              </div>
            </div>
          </div>
          <div className='promoter-filter-container'>
            <label>Promoter</label>
            <Dropdown>
              <Dropdown.Toggle
                className='search-button'
                variant='success'
                id='dropdown-basic'
              >
                Promoter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {promoters.map((p) => {
                  return (
                    <Dropdown.Item data-id={p} onClick={handlePromoterClick}>
                      {p}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='location-filter-container'>
            <div className='dropdown-container'>
              <label>Location</label>

              <Dropdown>
                <Dropdown.Toggle
                  className='search-button'
                  variant='success'
                  id='dropdown-basic'
                >
                  Locations
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {locations.map((location) => {
                    return (
                      <Dropdown.Item
                        data-id={location}
                        onClick={handleLocationClick}
                      >
                        {location}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className='seach-results-container'>
          <div>
            <h1 className='search-results-header'>{categorie}</h1>
          </div>
          <div className='search-results'>
            {events.length >= 1 ? (
              events.map((item) => {
                return <EventCard event={item} />;
              })
            ) : (
              <div>No Events Available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
