import React from "react";
import './City.css';

export default function City({city}) {
    return (
        <div className="city">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp - 273} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Clouds: {city.clouds}</div>
                        <div>Latitude: {city.latitude}º</div>
                        <div>Longitude: {city.longitude}º</div>
                    </div>
            </div>
        </div>
    )
}