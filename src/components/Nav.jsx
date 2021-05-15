import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className= 'navBar'>
      <Link to='/' className='text link'>
      <h3 className= 'title'>
        WeatherApp
        </h3>
        </Link>
      <Link className='link' to='/about'>
        <span className= 'about'>About</span>
      </Link >
      <div className= 'searchBarNav'>
        <SearchBar onSearch ={onSearch}/>
      </div>
    </nav>
  );
};

export default Nav;
