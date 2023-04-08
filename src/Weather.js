import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temp, tempState] = useState(null);
  let [humidity, humidityState] = useState(null);
  let [speed, speedState] = useState(null);
  let [type, typeState] = useState(null);
  let [foto, fotoState] = useState(null);

  function showTemp(response) {
    tempState(Math.round(response.data.main.temp));
    humidityState(Math.round(response.data.main.humidity));
    speedState(response.data.wind.speed);
    typeState(response.data.weather[0].main);
    fotoState(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (props.answer) {
    let apiKey = "1b6496837420c9603d7b34a746743618";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

    axios.get(url).then(showTemp);

    return (
      <div className="Weather">
        The weather in {props.city}
        <ul>
          <li>Temperature: {temp} °C</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {speed} km/m</li>
          <li>Type of weather: {type}</li>
          <li>
            {" "}
            <img src={foto} alt={type} />
          </li>
        </ul>
      </div>
    );
  } else {
    return;
  }
}
