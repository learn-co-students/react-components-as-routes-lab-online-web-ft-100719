import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink 
            to='/'
            exact 
            activeStyle={{
              background: 'darkpurple'
            }}
          >Home</NavLink>
        </li>
        <li>
          <NavLink 
            to='/actors'
            exact 
            activeStyle={{
              background: 'darkpurple'
            }}
          >Actors</NavLink>
        </li>
        <li>
          <NavLink 
            to='/directors'
            exact 
            activeStyle={{
              background: 'darkpurple'
            }}
          >Directors</NavLink>
        </li>
        <li>
          <NavLink 
            to='/movies'
            exact 
            activeStyle={{
              background: 'darkpurple'
            }}
          >Movies</NavLink>
        </li>
      </ul>  
    </div>
  );
};

export default NavBar;
