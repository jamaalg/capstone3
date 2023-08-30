import React, { useEffect, useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { Footer } from './Footer.js';
import { EventCard } from './EventCard.js';
import './Styles/Search.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from 'react-bootstrap';
import { DataContext } from './context/DataContext.js';
import { SearchHero } from './SearchHero.js';
import * as moment from 'moment';
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
  const [searchItem, setSearchItem] = useState('');
  const [filterSearchToggle, setFilterSearchToggle] = useState(true);

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    updateAllEvents();
  }, [allEvents]);

  const updateAllEvents = async (arg) => {
    const response = await axios
      .get('http://localhost:4000/getEvents')
      .then((res) => setEvents(res.data));
  };

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = allEvents.filter((event) =>
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterSearchToggle(false);
    setEvents(filteredItems);
  };

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
    let filteredEventsByLocation = allEvents.filter((event) => {
      return (
        event.location.state === locale.state &&
        event.location.city === locale.city
      );
    });

    if (filteredEventsByLocation.length >= 1) {
      setEvents(filteredEventsByLocation);
      setCategorie(`Events in ${locale.city}, ${locale.state}`);
      setFilterSearchToggle(true);

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
      setFilterSearchToggle(true);

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
        setFilterSearchToggle(true);

        return;
      }
    }

    let filteredEventsByCategory = allEvents.filter((event) => {
      return event.category === category;
    });
    if (filteredEventsByCategory.length >= 1) {
      setEvents(filteredEventsByCategory);
      setCategorie(`${category}`);
      setFilterSearchToggle(true);

      return;
    }
  };

  const handleDateSelection = async (dateSelected) => {
    try {
      const formattedDate = moment(dateSelected).format('YYYY-MM-DD');
      const response = await axios
        .get('http://localhost:4000/api/getEventsByDate', {
          params: { date: formattedDate },
        })
        .then((res) => res.data);
      setCategorie(`Events on: ${formattedDate}`);
      setEvents(response);
      setFilterSearchToggle(true);
    } catch (error) {}
  };

  return (
    <div>
      <SearchHero handleInputChange={handleInputChange} />
      <div className='search-main-container'>
        <div className='search-filters'>
          <div className='date-filter-container'>
            <label>Date</label>
            <DatePicker
              className='date-picker'
              selected={startDate}
              onChange={(date) => handleDateSelection(date)}
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
            <h1 className='search-results-header'>
              {filterSearchToggle ? categorie : `Search: ${searchItem}`}
            </h1>
          </div>
          <div className='search-results'>
            {events.length >= 1 ? (
              events.map((item) => {
                return <EventCard key={item._id} event={item} />;
              })
            ) : (
              <div>No Events Available</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
