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
import Fab from '@mui/material/Fab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Profile } from './Components/Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        user,
        setUser,
      }}
    >
      <DataContextProvider>
        <div className='App'>
          <nav className='nav-container'>
            <ul className='nav-list'>
              {isLoggedIn ? (
                <li>
                  <Link to='/profile'>
                    <Fab
                      className='floating-action-btn'
                      size='large'
                      color='primary'
                      aria-label='add'
                    >
                      <AccountCircleIcon fontSize='large' />
                    </Fab>
                  </Link>
                </li>
              ) : (
                <></>
              )}
              <li>
                <Link to='/'>Home </Link>
              </li>
              <li>
                <Link to='/search'>Search </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link to='/logout' onClick={logout}>
                    Logout{' '}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to='/login'>Login </Link>
                </li>
              )}
              {isLoggedIn ? (
                <></>
              ) : (
                <li>
                  <Link to='/register'>Register </Link>
                </li>
              )}
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/event/:id' element={<Event />} />

            <Route path='/rsvpform' element={<RsvpForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Home />} />

            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
          <Outlet />
        </div>
      </DataContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
