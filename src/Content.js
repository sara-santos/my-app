import React from "react";
import RealDate from "./RealDate";
import Temp from "./Temp";
import WeatherIcon from "./WeatherIcon";

export default function Content(props) {
  return (
    <div className="Content">
      <h1 id="city">
        <strong>{props.info.city}</strong>
      </h1>
      <h2 id="date">
        <RealDate date={props.info.date} />
      </h2>
      <h3 id="time"></h3>
      <div className="mid">
        <div className="float-left">
          <Temp celsius={props.info.temperature} />
          <ul>
            <li className="text-capitalize" id="description">
              {props.info.description}
            </li>
          </ul>
          <WeatherIcon code={props.info.icon} />
        </div>
        <div className="float-right">
          <ul>
            <li>
              <p className="sunset">Feels Like</p>
              <p id="sunset">{Math.round(props.info.feelsLike)} °C</p>
              <br />
            </li>
            <li>
              <p className="hum">Humidity</p>
              <p id="hum">{props.info.humidity} %</p>
              <br />
            </li>
            <li>
              <p className="win">Wind</p>
              <p id="win">{Math.round(props.info.wind)} km/h</p>
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
  );
}
