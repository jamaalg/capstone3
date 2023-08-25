import './Styles/Home.css';
import { Hero } from './Hero';
import { CardRound } from './CardRound';
import { Footer } from './Footer';
import { UpcomingEvents } from './UpcomingEvents';

const data = [
  {
    name: 'bob',
    ticketprice: '76',
    attendees: '5',
    location: 'chicago',
    date: 'august 5',
  },
  {
    name: 'tina',
    ticketprice: '76',
    attendees: '5',
    location: 'chicago',
    date: 'august 5',
  },
  {
    name: 'bob',
    ticketprice: '76',
    attendees: '5',
    location: 'chicago',
    date: 'august 5',
  },
  {
    name: 'bob',
    ticketprice: '76',
    attendees: '5',
    location: 'chicago',
    date: 'august 5',
  },
  {
    name: 'bob',
    ticketprice: '76',
    attendees: '5',
    location: 'chicago',
    date: 'august 5',
  },
];
export const Home = ({ categories }) => {
  return (
    <div className='home-container'>
      <Hero />
      <div className='categories-container'>
        {categories.map((c) => (
          <CardRound key={c} categorie={c} />
        ))}
      </div>
      <UpcomingEvents events={data} />
      <div className='home-footer-container'>
        <Footer />
      </div>
    </div>
  );
};
