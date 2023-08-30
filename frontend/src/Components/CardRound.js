import './Styles/CardRound.css';
import { Link } from 'react-router-dom';
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
      borderRadius: '50%',
      color: 'white',
      alignItems: 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
      'object-fit': 'contain',
      border: '2px solid #000',
    },
    business: {
      backgroundImage: `url(${businessImg})`,
      height: '250px',
      width: '250px',
      borderRadius: '50%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
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
      'margin-right': '100px',
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
      'margin-right': '100px',
      'object-fit': 'cover',
      border: '2px solid #000',
    },
  };

  const renderComponent = () => {
    switch (categorie) {
      case 'Sports':
        return (
          <Link style={{ textDecoration: 'none' }} to='/search'>
            <p className='card-font' style={catStyles.sports}>
              {categorie}
            </p>
          </Link>
        );
      case 'Concerts':
        return (
          <Link style={{ textDecoration: 'none' }} to='/search'>
            <p className='card-font' style={catStyles.concert}>
              {categorie}
            </p>
          </Link>
        );
      case 'Business':
        return (
          <Link style={{ textDecoration: 'none' }} to='/search'>
            <p className='card-font' style={catStyles.business}>
              {categorie}
            </p>
          </Link>
        );
      case 'Performing/Visual Arts':
        return (
          <Link style={{ textDecoration: 'none' }} to='/search'>
            <p style={catStyles.performing}>Theater</p>
          </Link>
        );
      default:
        <p className='card-font' style={catStyles.performing}>
          {categorie}
        </p>;
    }
  };
  return <div>{renderComponent()}</div>;
};
