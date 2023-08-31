import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Styles/Event.css';
import axios from 'axios';
import { RsvpForm } from './RsvpForm.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Footer } from './Footer';
import { useJsApiLoader } from '@react-google-maps/api';

export const Event = () => {
  const eventData = useLocation();
  const {
    _id,
    date,
    name,
    description,
    promoter,
    location,
    ticketPrice,
    attendees,
  } = eventData.state.eventData;

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

  useEffect(() => {
    getGeoLocationCoordinates();
    console.log(eventData);
  }, []);

  const handleRSVP = () => {
    console.log('RSVP Handler');
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='master-container'>
      <div className='image-container'>
        <img
          className='event-image'
          src='../images/hip-hop-concert-flyer-english-443476958.png'
        ></img>
      </div>

      <div className='event-info-container'>
        <br />
        <hr width='65%' color='black' />
        <p className='event-promoter'> {promoter}</p>
        <p className='event-title'>{name}</p>

        <p className='event-date'>{date}</p>

        <section className='event-description'>
          <p> {description}</p>
          <br />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <>
            <ul className='attendees-list'>
              Attendees:
              {attendees.map((a) => {
                return <li className='attendees-list-item'>{a}</li>;
              })}
            </ul>
          </>
        </section>

        <button onClick={handleShow} className='event-submit-button'>
          RSVP
        </button>

        <div
          className='modal show'
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-container'>
              <RsvpForm ticketPrice={ticketPrice} eventId={_id} />{' '}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};
