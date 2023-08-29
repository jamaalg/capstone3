import './App.css';
import { Home } from './Components/Home.js';
import { Search } from './Components/Search.js';
import { Event } from './Components/Event.js';
import { RsvpForm } from './Components/RsvpForm';
import { NotFound } from './Components/NotFound';
import { Login } from './Components/Login';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { AuthContext } from './Components/context/AuthContext';
import { DataContextProvider } from './Components/context/DataContextProvider';
import { Register } from './Components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  /*  const isMounted = useRef(false);
  const events = useRef([]);
  const categories = useRef([]);

 */
  useEffect(() => { }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <DataContextProvider>
        <div className='App'>
          <nav className='nav-container'>
            <ul className='nav-list'>
              <li>
                <Link to='/'>Home </Link>
              </li>
              <li>
                <Link to='/search'>Search </Link>
              </li>
              <li>
                <Link to='/login'>Login </Link>
              </li>
              <li>
                <Link to='/register'>Register </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/event/:id' element={<Event />} />

            <Route path='/rsvpform' element={<RsvpForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Outlet />
        </div>
      </DataContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
