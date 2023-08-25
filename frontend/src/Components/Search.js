import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { EventCard } from "./EventCard.js";
import "./Styles/Search.css";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

export const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [promoters, setPromoters] = useState([]);
  const [promoter, setPromoter] = useState("");
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState("");
  const [events, setEvents] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const response = await axios
      .get("http://localhost:4000/")
      .then((res) => res.data);
    setPromoters(response.promoters);
    setEvents(response.events);
    setCategories(response.categories);
    setDates(response.date);

    setLocations(response.locations);

    console.log(response);
  };

  const handleLocationClick = (event) => {
    console.log(event);
    let locationData = locations.filter((location) => {
      return location.name === event.target.dataset.id;
    });

    console.log(locationData);
    setLocation(locationData);
  };

  return (
    <div>
      <div className="search-box-container">
        <input className="search-bar" type="search"></input>
        <button>Search</button>
      </div>
      <div className="search-main-container">
        <div className="search-filters">
          <div className="date-filter-container">
            <label>Date</label>
            <DatePicker
              className="date-picker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="category-filter-container">
            <label>Category</label>
            <div className="radio-container">
              <div className="individual-radio">
                <input type="radio" name="category" value="Sports" />
                <label>Sports</label>
              </div>
              <div className="individual-radio">
                <input type="radio" name="category" value="Theater" />
                <label>Theater</label>
              </div>
              <div className="individual-radio">
                <input type="radio" name="category" value="Business" />
                <label>Business</label>
              </div>
              <div className="individual-radio">
                <input type="radio" name="category" value="Concerts" />
                <label>Concerts</label>
              </div>
            </div>
          </div>
          <div className="promoter-filter-container">
            <label>Promoter</label>
            <Dropdown>
              <Dropdown.Toggle
                className="search-button"
                variant="success"
                id="dropdown-basic"
              >
                Promoter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {promoters.map((p) => {
                  return (
                    <Dropdown.Item data-id={p} onClick={handleLocationClick}>
                      {p}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="location-filter-container">
            <div className="dropdown-container">
              <label>Location</label>

              <Dropdown>
                <Dropdown.Toggle
                  className="search-button"
                  variant="success"
                  id="dropdown-basic"
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
        <div className="search-results">
          {events.map((item) => {
            return <EventCard event={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
