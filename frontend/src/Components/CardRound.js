import './Styles/CardRound.css';

import sportsImg from './img/sports.jpeg';
import businessImg from './img/business-conference.jpeg';
import concertImg from './img/concert.jpeg';
import theaterImg from './img/theater.jpeg';

export const CardRound = ({ categorie }) => {
  const catStyles = {
    sports: {
      backgroundImage: `url(${sportsImg})`,
      height: '250px',
      width: '250px',
      'border-radius': '50%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '50px',
      'object-fit': 'contain',
      border: '2px solid #000',
    },
    business: {
      backgroundImage: `url(${businessImg})`,
      height: '250px',
      width: '250px',
      'border-radius': '50%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '50px',
      'object-fit': 'contain',
      border: '2px solid #000',
    },
    concert: {
      backgroundImage: `url(${concertImg})`,
      height: '250px',
      width: '250px',
      'border-radius': '50%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '50px',
      'object-fit': 'contain',
      border: '2px solid #000',
    },
    performing: {
      backgroundImage: `url(${theaterImg})`,
      height: '250px',
      width: '250px',
      'border-radius': '50%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '50px',
      'object-fit': 'cover',
      border: '2px solid #000',
    },
  };

  const renderComponent = () => {
    switch (categorie) {
      case 'Sports':
        return <p style={catStyles.sports}>{categorie}</p>;
      case 'Concerts':
        return <p style={catStyles.concert}>{categorie}</p>;
      case 'Business':
        return <p style={catStyles.business}>{categorie}</p>;
      case 'Performing Visual Arts':
        return <p style={catStyles.performing}>{categorie}</p>;
      default:
        <p style={catStyles.performing}>{categorie}</p>;
    }
  };
  return <div>{renderComponent()}</div>;
};
