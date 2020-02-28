import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lightblue',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {


  return (
    <div className="navbar">
      <NavLink to='/' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}>Home</NavLink> |


      <NavLink to='/actors' exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Actors</NavLink> | 


      <NavLink to='/directors'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Directors</NavLink> | 


      <NavLink to='/movies'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Movies</NavLink> | 

    </div>
  );
};

export default NavBar;
