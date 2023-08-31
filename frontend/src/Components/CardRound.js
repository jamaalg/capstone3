import './Styles/CardRound.css';
import { Link } from 'react-router-dom';
import sportsImg from './img/sports.jpeg';
import businessImg from './img/business.jpeg';
import concertImg from './img/concert2.jpeg';
import theaterImg from './img/theater.jpeg';

export const CardRound = ({ categorie }) => {
  const catStyles = {
    sports: {
      backgroundImage: `url(${sportsImg})`,
      backgroundSize: 'cover',
      height: '250px',
      width: '250px',
      borderRadius: '20%',
      color: 'white',
      alignItems: 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    },
    business: {
      backgroundImage: `url(${businessImg})`,
      backgroundSize: 'cover',
      height: '250px',
      width: '250px',
      borderRadius: '20%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
      'object-fit': 'contain',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    },
    concert: {
      backgroundImage: `url(${concertImg})`,
      backgroundSize: 'cover',
      height: '250px',
      width: '250px',
      'border-radius': '20%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
      'object-fit': 'contain',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    },
    performing: {
      backgroundImage: `url(${theaterImg})`,
      backgroundSize: 'cover',
      height: '250px',
      width: '250px',
      'border-radius': '20%',
      color: 'white',
      'align-items': 'center',
      display: 'flex',
      'justify-content': 'center',
      'font-size': '50px',
      'margin-right': '100px',
      'object-fit': 'cover',
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
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
