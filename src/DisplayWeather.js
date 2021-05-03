import React, {useState}  from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import './DisplayWeather.css'

export default function DisplayWeather(props) {
const [weatherData, setWeatherData,] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
  });
  }

  function search(){
   const apiKey = "00579ce2b45dcca0b61cea4da9a1d794";
   let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
        <div className="form-group">
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
        <button type="submit">Current Location</button>
      </form>
      <WeatherInfo data={weatherData} />
      </div>
    )
  } else {
   search();
  return "Loading...";
  }
}
