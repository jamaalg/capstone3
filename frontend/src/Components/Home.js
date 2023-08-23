import './Styles/Home.css';
import { Hero } from './Hero';
import { CardRound } from './CardRound';
import { Footer } from './Footer';
import { locations } from '../Data/data';
export const Home = ({ categories }) => {
  return (
    <div className='home-container'>
      <Hero />
      <div className='categories-container'>
        {categories.map((c) => (
          <CardRound categorie={c} />
        ))}
      </div>

      <div className='home-footer-container'>
        <Footer />
      </div>
    </div>
  );
};
