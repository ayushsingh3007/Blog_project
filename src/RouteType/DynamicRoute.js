import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'; // Importing the hamburger menu icon
import Home from '../Compo/Home';
import Bollywood from '../Compo/Bollywood';
import Hollywood from '../Compo/Hollywood';
import Tech from '../Compo/Tech';
import Food from '../Compo/Food';
import Fitness from '../Compo/Fitness';
import { Storing } from '../ContextStore/Storing';
import './RouteStyle.css';
import Details from './Detail';

const DynamicRoute = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="navbar-set">
        <div className="toggle-button" onClick={toggleMenu}>
          <AiOutlineMenu />
        </div>
        <div className={`menu-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className="link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/bollywood" className="link" onClick={closeMenu}>
            Bollywood
          </NavLink>
          <NavLink to="/hollywood" className="link" onClick={closeMenu}>
            Hollywood
          </NavLink>
          <NavLink to="/tech" className="link" onClick={closeMenu}>
            Tech
          </NavLink>
          <NavLink to="/food" className="link" onClick={closeMenu}>
            Food
          </NavLink>
          <NavLink to="/fitness" className="link" onClick={closeMenu}>
            Fitness
          </NavLink>
        </div>
      </div>
      <Storing>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/food" element={<Food />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/details/:id/:category" element={<Details />} />
        </Routes>
      </Storing>
    </BrowserRouter>
  );
}

export default DynamicRoute;
