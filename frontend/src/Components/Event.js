import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Styles/Event.css';
import { RsvpForm } from './RsvpForm.js';
import { Footer } from './Footer';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const fileNames = [
  'broadway-flyer-107416260.png',
  'broadway-flyer-253973267.png',
  'broadway-performance-flyer-59923965.png',
  'broadway-performance-flyer-8507921.png',
  'business-convention-flyer-327022266.png',
  'business-event-flyer-357283510.png',
  'business-event-flyer-360671840.png',
  'business-event-flyer-468828390.png',
  'business-event-flyer-890516959.png',
  'business-event-flyer-905353253.png',
  'concert-flyer-advertisement-293732232.png',
  'electronics-advertisement-conference-flyer--303148463.png',
  'electronics-advertisement-flyer--917380758.png',
  'explosive-rock-concert-flyer-english-730897177.png',
  'flyer-for-gamer-night-388954196.png',
  'flyer-for-gamer-night-english-language-130416461.png',
  'flyer-for-gamer-night-english-language-686941367.png',
  'generate a party flyer_.png',
  'hip-hop-concert-flyer-english-443476958.png',
  'hip-hop-concert-flyer-english-500020135.png',
  'musical-flyer-291950.png',
  'pop-artist-concert-flyer-english-103973788.png',
  'pop-artist-concert-flyer-english-163941680.png',
  'real-estate-advertisement-flyer--544345881.png',
  'rock-concert-flyer-521943609.png',
  'rock-concert-flyer-653240672.png',
  'rock-concert-flyer-908888011.png',
  'sports-event-flyer-baseball-599126480.png',
  'sports-event-flyer-basketball-tournament-842403090.png',
  'sports-event-flyer-football-169532468.png',
  'sports-event-flyer-hockey-tournament-445959614.png',
  'sports-event-flyer-soccer-855213610.png',
  'sports-event-flyer-tennis-tournament-90673898.png',
  'theatrical-performance-flyer-847369908.png',
  'theatrical-play-flyer-665943031.png',
];
export const Event = () => {
  const eventData = useLocation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
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

  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  /*   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });


  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
 */
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

  const selectRandomPicture = () => {
    const randomIndex = Math.floor(Math.random() * fileNames.length);
    return `../images/${fileNames[randomIndex]}`;
  };

  useEffect(() => {
    getGeoLocationCoordinates();
    console.log(eventData);
  }, []);

  const imageStyle = {
    width: '45%',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
  };

  return (
    <div className='master-container'>
      <div className='image-container'>
        <img
          style={imageStyle}
          className='event-image'
          src={selectRandomPicture()}
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
              <RsvpForm ticketPrice={ticketPrice} eventId={_id} />
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

      <div className='attendees-div'>
        <ul className='attendees-list'>
          <h3 className='list-header'>Attendees</h3>
          <br></br>
          {attendees.map((a) => {
            return (
              <li className='attendees-list-item'>
                {a}, <span className='span'></span>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
