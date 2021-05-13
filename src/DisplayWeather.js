import React, {useState}  from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import './DisplayWeather.css'
import DisplayForecast from './DisplayForecast';

export default function DisplayWeather(props) {
const [weatherData, setWeatherData,] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  });
  }

  function search(){
   const apiKey = "00579ce2b45dcca0b61cea4da9a1d794";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
   event.preventDefault();
   search();

  }

  function handleCityChange(event){
    setCity(event.target.value);
    
  }

  if (weatherData.ready) {
    return(
    <div className="DisplayWeather">
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <input
            type="search"
            placeholder="Search for a City"
            className="form-control"
            id="exampleInputEmail1"
            autoFocus="on" 
            onChange = {handleCityChange}
          />
      </div>
        <button type="submit">Change City</button>
      </form>
      <WeatherInfo data={weatherData} />
      <DisplayForecast coordinates={weatherData.coordinates} />
      </div>
    )
  } else {
   search();
  return "Loading...";
  }
}
