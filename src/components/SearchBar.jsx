import React, {useState} from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  const [city, setCity] = useState('');
  return (
    <div className= 'searchCityBar'>
      <form onSubmit= {(a) => {
        a.preventDefault();
        props.onSearch(city);
        setCity('');
        }}>
          <input className= 'input' type= 'text' 
          placeholder= 'City' 
          value= {city} 
          onChange= {(b) => setCity(b.target.value)}/>
          <input className= 'searchButton' type= 'submit' 
          value= 'Search'/>
      </form>
    </div>
  )
};
