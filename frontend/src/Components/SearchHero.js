import './Styles/SearchHero.css';
import { useNavigate } from 'react-router-dom';
import BgVideo from './img/streetFair.mp4';
export const SearchHero = ({ handleInputChange }) => {
  const navigate = useNavigate();

  return (
    <div className='search-hero-container'>
      <div className='video-overlay2'>
        <p> Find your next event</p>
        <input
          className='search-bar'
          type='search'
          onChange={handleInputChange}
          placeholder='Type to search'
        ></input>
      </div>
      <video loop muted autoPlay preload='auto' className='video-bg2'>
        <source src={BgVideo} />
      </video>
    </div>
  );
};
