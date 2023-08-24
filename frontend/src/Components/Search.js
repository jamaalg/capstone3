import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { UpcomingEvents } from "./UpcomingEvents";
import "./Styles/Search.css";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown } from "react-bootstrap";

export const Search = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [local, setLocation] = useState([]);

  const locations = [
    {
      id: 1,
      city: "Seattle",
      state: "WA",
    },
    {
      id: 2,
      city: "Chicago",
      state: "IL",
    },
    {
      id: 3,
      city: "New Jersey",
      state: "NY",
    },
    {
      id: 4,
      city: "Dallas",
      state: "TX",
    },
  ];

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
          <h1>Filters</h1>
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
                <input type="radio" value="Sports" />
                <label>Sports</label>
              </div>
              <div className="individual-radio">
                <input type="radio" value="Theater" />
                <label>Theater</label>
              </div>
              <div className="individual-radio">
                <input type="radio" value="Business" />
                <label>Business</label>
              </div>
              <div className="individual-radio">
                <input type="radio" value="Concerts" />
                <label>Concerts</label>
              </div>
            </div>
          </div>
          <div className="promoter-filter-container">
            <label>Promoter</label>
          </div>
          <div className="location-filter-container">
            <div className="dropdown-container">
              <label>Location</label>

              <Dropdown className="Mnt-dropdownbtn">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Locations
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {locations.map((location) => {
                    return (
                      <Dropdown.Item
                        data-id={location.id}
                        onClick={handleLocationClick}
                      >
                        {location.city}, {location.state}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="search-results">2</div>
      </div>
    </div>
  );
};
