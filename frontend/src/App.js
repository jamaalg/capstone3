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
  const cats = ['Sports', 'Concerts', 'Business', 'Performing/Visual Arts'];

  const [categories, setCategories] = useState(cats);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log('mounted');
    } else {
      console.log('mounting');
      isMounted.current = true;
    }

    return () => {
      console.log('Clean up');
    };
  }, [categories]);

  const getCategories = async () => {
    try {
      const response = await axios
        .get('http://localhost:4000/')
        .then((res) => res.data);
      setCategories(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='App'>
      <Router>
        <div className='App'>
          <nav className='nav-container'>
            <ul className='nav-list'>
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
            <Route path='/home' element={<Home categories={cats} />} />
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
