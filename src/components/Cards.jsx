import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}){
  if(cities.length > 0){
    return (
      <div className= 'weatherCards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } 
  else{
    return(
      <div className= 'noCities'>No cities</div>
    )
  }
}
