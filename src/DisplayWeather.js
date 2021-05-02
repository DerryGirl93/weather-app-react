import React, {useState}  from 'react';
import axios from 'axios';

export default function DisplayWeatherElement() {
const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);

function handleResponse(response){
  setTemperature(Math.round(response.data.main.temp));
  setReady(true);
  }

  if (ready) {
    return(
    <div className="DisplayWeatherElement">
          <h1>New York</h1>
          <h2 className="celcius">{temperature}°C | 68°F </h2>
          <br />
        <p>
        <strong>Humidity:</strong> 50%
        </p>
        <p>
        <strong>Wind Speed:</strong> 5 mph
        </p>
      </div>
    )
  } else {
  const apiKey = "00579ce2b45dcca0b61cea4da9a1d794";
  let city = "New York";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}
