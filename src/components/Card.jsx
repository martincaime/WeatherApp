import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  let img = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  return (
    <div className= 'weatherCard'>
      <button onClick={props.onClose} className = 'xButton'>X</button>
      <Link className='link' to={`/city/${props.id}`}>
      <h3 className= 'country'>{props.name}</h3>
      </Link>
      <div>
        <img src= {img} alt= 'Weather icon'></img>
        <div className= 'temperatures'>
          <div>
            <p>Min</p>
            <p>{props.min - 273}°</p>
          </div>
          <div>
            <p>Max</p>
            <p>{props.max - 273}°</p>
          </div>
        </div>
      </div>
    </div>
  )
};
