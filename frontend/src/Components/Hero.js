import './Styles/Hero.css';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className='hero-container'>
      <div className='button-container'>
        <button onClick={() => navigate('/nationalparks')}>Button1</button>
        <button onClick={() => navigate('/mountains')}>Button2</button>
      </div>
    </div>
  );
};
