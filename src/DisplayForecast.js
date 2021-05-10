import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./DisplayForecast.css";
import WeatherForecastDay from './WeatherForecastDay';


export default function DisplayForecast(props) {
  let [loaded, setloaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setloaded(false);
  }, [props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.daily);
    setloaded(true);
  }
  if(loaded){
    return(
       <div className="DisplayForecast">
      <div className="container">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
              if (index < 5) {
              return(
                <div className="col">
                  <WeatherForecastDay data={dailyForecast}/>
                </div>
              );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </div>
    );
  } else{
  const apiKey = "00579ce2b45dcca0b61cea4da9a1d794";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;
  }
 
}
