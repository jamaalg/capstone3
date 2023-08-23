import './App.css';
import { Home } from './Components/Home.js';
import { Search } from './Components/Search.js';
import { Rsvp } from './Components/Rsvp.js';
import { Event } from './Components/Event.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log('mounted');
    } else {
      console.log('mounting');
      isMounted.current = true;
    }
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get('http://localhost:4000/')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <Router>
        <div className='App'>
          <nav className='nav-container'>
            <ul>
              <li>
                <Link to='/home'>Home </Link>
              </li>
              <li>
                <Link to='/search'>Search </Link>
              </li>
              <li>
                <Link to='/Event'>Event </Link>
              </li>
              <li>
                <Link to='/rsvp'>Rsvp </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/home' element={<Home categories={categories} />} />
            <Route path='/search' element={<Search />} />
            <Route path='/event' element={<Event />} />
            <Route path='/rsvp' element={<Rsvp />} />
          </Routes>
          <Outlet />
        </div>
      </Router>
    </div>
  );
}

export default App;
