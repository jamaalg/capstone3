import './Styles/HomeHero.css';
import { useNavigate } from 'react-router-dom';
import BgVideo from './img/pexels.mp4';
export const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero2-container'>
      <div className='video-overlay'>
        <p> bored?</p>
        find out <span className='whats-happening'> whats happening</span>
      </div>
      <video loop muted autoPlay preload='auto' className='video-bg'>
        <source src={BgVideo} />
      </video>
    </div>
  );
};
