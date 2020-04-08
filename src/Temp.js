import React, { useState } from "react";

export default function Temp(props) {
  const [units, setUnits] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (units === "celsius") {
    return (
      <div className="Temp">
        <span className="temperature" id="temperature">
          {Math.round(props.celsius)}
        </span>
        <span className="units">
          <a href="#" id="celsius-link">
            °C
          </a>{" "}
          <a href="#" id="fahrenheit-link" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temp">
        <span className="temperature" id="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="units">
          <a href="#" id="celsius-link" onClick={convertToCelsius}>
            °C
          </a>
          |{" "}
          <a href="#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    );
  }
}
