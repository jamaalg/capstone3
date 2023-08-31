import './Styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='sub-container'>
        <ul className='list'>
          <li> </li>
          <li>
            {' '}
            <hr></hr>
          </li>
          <h2>About Us</h2>
          <a href='Home.js' ><li> Buy tickets</li></a>
          <a href='Home.js' ><li> Contact Us</li></a>
          <a href='Home.js' ><li> Careers</li></a>
          <a href='Home.js' ><li> Customer Service</li></a>
        
        </ul>
      </div>
      <div className='sub-container'>
        <ul className='list'>
          <li> </li>
          <li>
            {' '}
            <hr></hr>
            <h2>Social Media</h2>
          </li>
         <a href='Home.js'><li> Connect with us on Facebook</li></a>
          <a href='Home.js' ><li> Connect with us on Tik Tok</li></a>
          <a href='Home.js' > <li> Connect with us on Instagram</li></a>
          <a href='Home.js' ><li> Connect with us on Youtube </li></a>
          
        </ul>
      </div>
      <div className='sub-container'>
        <ul className='list'>
          <li> </li>
          <li>
            {' '}
            <hr></hr>
            <h2>Find Events </h2>
          </li>
          <a href='Home.js' ><li> Chicago Events</li></a>
          <a href='Home.js' ><li> San Francisco Events </li></a>
          <a href='Home.js' ><li> Los Angeles Events  </li></a>
          <a href='Home.js' ><li> New York Events </li></a>
          
        </ul>
      </div>
    </div>
  );
};
