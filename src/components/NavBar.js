import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink className="nav-links" to="/">Home</NavLink>
      <NavLink className="nav-links" to="/actors">Actors</NavLink>
      <NavLink className="nav-links" to="/directors">Directors</NavLink>
      <NavLink className="nav-links" to="/movies">Movies</NavLink>
    </div>
    
  );
};

export default NavBar;
