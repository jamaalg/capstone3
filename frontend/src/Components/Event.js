import { Hero } from "./Hero";
import "./Styles/Event.css";

export const Event = () => {
  return (
    <div>
      <div className="image-container">
        <img
          className="event-image"
          src="../images/hip-hop-concert-flyer-english-443476958.png"
        ></img>
      </div>
      <div className="event-info-container">
        <p className="event-date">September 30, 2023</p>
        <h2 className="event-title">
          Musical Whimsy Wonderland: Melody Mayhem Extravaganza
        </h2>

        <button className="event-submit-button">RSVP</button>
      </div>
      <div className="footer-container"></div>
    </div>
  );
};
