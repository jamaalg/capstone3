import "./App.css";
import { Home } from "./Components/Home.js";
import { Search } from "./Components/Search.js";
import { Rsvp } from "./Components/Rsvp.js";
import { Event } from "./Components/Event.js";
import { RsvpForm } from "./Components/RsvpForm";
import { NotFound } from "./Components/NotFound";
import axios from "axios";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { AuthContext } from "./Components/context/AuthContext";
import { DataContext } from "./Components/context/DataContext";
import { DataContextProvider } from "./Components/context/DataContextProvider";

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
  useEffect(() => {
    /*  if (isMounted.current) {
      console.log('mounted');
    } else {
      console.log('mounting');
      isMounted.current = true;
    }

    const getCategories = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getCategories')
          .then((res) => res.data);
        console.log('Fetched Categories');
        categories.current = response;
        return response;
      } catch (err) {
        console.error(err);
      }
    };

    const getEvents = async () => {
      try {
        const response = await axios
          .get('http://localhost:4000/getEvents')
          .then((res) => res.data);
        console.log('Fetched Events');
        events.current = response;
      } catch (err) {
        console.error(err);
      }
    };
    
    
      getCategories();
    getEvents();
    console.log(events.current);
    console.log(categories.current);*/
    // console.log(yourDate);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <DataContextProvider>
        <div className="App">
          <nav className="nav-container">
            <ul className="nav-list">
              <li>
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/search">Search </Link>
              </li>
              <li>
                <Link to="/event/:id">Event </Link>
              </li>
              {/* <li>
                <Link to="/rsvp">Rsvp </Link>
              </li> */}
              <li>
                <Link to="/form">Form </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/event/:id" element={<Event />} />
            
            <Route path="/rsvpform" element={<RsvpForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Outlet />
        </div>
      </DataContextProvider>
    </AuthContext.Provider>
  );
}

export default App;
