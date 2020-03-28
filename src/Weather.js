import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    temperature: 22,
    date: "Wednesday 18:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 20,
    wind: 10,
    sunsetTime: "19:30"
  };

  return (
    <div className="Weather">
      <div className="weather-app">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                id="enter-city"
                placeholder="Search for a city"
                autofocus="on"
                autocomplete="off"
                className="form"
              />
            </div>
            <div className="col-3">
              <button className="btn" id="btn">
                <i className="fas fa-search"></i>
              </button>
              <button
                className="current-location-button"
                id="current-location-button"
              >
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </div>
          </div>
        </form>
        <h1 id="city">
          <strong>{weatherData.city}</strong>
        </h1>
        <h2 id="date">{weatherData.date}</h2>
        <h3 id="time"></h3>
        <div className="mid">
          <div className="float-left">
            <span className="temperature" id="temperature">
              {weatherData.temperature}
            </span>
            <span className="units">
              <a href="#" id="celsius-link">
                °C
              </a>{" "}
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
            <ul>
              <li className="description" id="description">
                {weatherData.description}
              </li>
            </ul>
            <img src={weatherData.imgUrl} alt="" id="icon" />
          </div>
          <div className="float-right">
            <ul>
              <li>
                <p className="sunset">Sunset Time</p>
                <p id="sunset">{weatherData.sunsetTime}</p>
                <br />
              </li>
              <li>
                <p className="hum">Humidity</p>
                <p id="hum">{weatherData.humidity}%</p>
                <br />
              </li>
              <li>
                <p className="win">Wind</p>
                <p id="win">{weatherData.wind} km/h</p>
                <br />
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row" id="forecast"></div>
      </div>
      <p className="link">
        <a href="https://github.com/sara-santos/my-app">Open-source code</a>, by
        Sara Santos
      </p>
    </div>
  );
}
