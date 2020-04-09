import React, { useState } from "react";
import Content from "./Content";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "35ad5c50f3767c513dfb701635cba385";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "01cfeb5e2b1834069e5680d99ea862b7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app">
            <form
              className="search-form"
              id="search-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    id="enter-city"
                    placeholder="Search for a city"
                    autofocus="on"
                    autocomplete="off"
                    className="form"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-3">
                  <button className="btn" id="btn" onSubmit={handleSubmit}>
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    className="current-location-button"
                    id="current-location-button"
                    onSubmit={getCurrentLocation}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </div>
            </form>
            <Content info={weatherData} />
            <WeatherForecast city={weatherData.city} />
          </div>
        </div>
        <div className="link">
          <p className="link">
            <a href="https://github.com/sara-santos/my-app">Open-source code</a>
            , by Sara Santos
          </p>
        </div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
