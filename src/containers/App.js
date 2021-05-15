import React, { useState } from 'react';
import './App.css'
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from '../components/About.jsx';
import City from '../components/City.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(r => r.json())
      .then((data) => {
        if(data.main !== undefined){
          const city = {
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
            img: data.weather[0].icon,
            id: data.id,
            wind: data.wind.speed,
            temp: data.main.temp,
            name: data.name,
            weather: data.weather[0].main,
            clouds: data.clouds.all,
            latitude: data.coord.lat,
            longitude: data.coord.lon
          };
          if (onFilter(city.id) === null) {
            setCities(oldCities => [...oldCities, city]);
          }
          else {
            alert('City was already searched')
          }
        } 
        else {
          alert("City not found");
        }
      });
  }
  function onFilter(cityId) {
    let city = cities.filter(c => c.id === parseInt(cityId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route
      path='/'
      render={() => <Nav onSearch={onSearch} />}
      />
      <Route
      path='/about'
      component={About}
      />
      <Route
      exact path='/city/:cityId'
      render={({match}) => <City city={onFilter(match.params.cityId)}/>}
      />
      <Route
      exact path='/'
      render={() => <Cards
        cities={cities}
        onClose={onClose} />}
      />
    </div>
  );
}

export default App;
