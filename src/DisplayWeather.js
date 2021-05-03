import React, {useState}  from 'react';
import axios from 'axios';

export default function DisplayWeather(props) {
const [weatherData, setWeatherData,] = useState({ready:false});

function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    date:"Wednesday 9:00am",
  });
  }

  if (weatherData.ready) {
    return(
    <div className="DisplayWeather">
          <h1>{weatherData.city}</h1>
          <h2 className="text-capitalize">{weatherData.description}</h2>
          <h2 className="celcius">{weatherData.temperature}°C | 68°F </h2>
          <p>Last updated: {weatherData.date} </p>
          <br />
        <p>
        <strong>Humidity: </strong>{weatherData.humidity}%
        </p>
        <p>
        <strong>Wind Speed: </strong>{weatherData.wind}
        </p>
      </div>
    )
  } else {
  const apiKey = "00579ce2b45dcca0b61cea4da9a1d794";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
  }
}
