import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Styles/Event.css';
import axios from 'axios';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

export const Event = () => {
  const eventData = useLocation();
  const { _id, date, name, description, promoter, location } =
    eventData.state.eventData;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const getGeoLocationCoordinates = async () => {
    try {
      const response = await axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location.city}%20${location.state}&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => res.data);

      const { lat, lng } = response.results[0].geometry.location;
      console.log({
        coordinates: {
          lat,
          lng,
        },
      });
      setPosition({
        lat,
        lng,
      });
    } catch (error) {
      console.log({
        message: error.message,
      });
    }
  };

  const Google = new GoogleMap();
  useEffect(() => {
    getGeoLocationCoordinates();
    console.log(eventData);
  }, []);

  return (
    <div>
      <div className='image-container'>
        <img
          className='event-image'
          src='../images/hip-hop-concert-flyer-english-443476958.png'
        ></img>
      </div>

      <div className='event-info-container'>
        <p className='event-date'>{date}</p>
        <h6> {promoter}</h6>
        <h2 className='event-title'>{name}</h2>
        <p> {description} </p>
        <section>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </section>
        <button className='event-submit-button'>RSVP</button>
      </div>
      <div className='footer-container'></div>
    </div>
  );
};
