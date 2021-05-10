import React from 'react';


export default function WeatherForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }


    return(
    <div>
      <p className= "Forecast-day">{day()}</p>
      <img className="forecast-icon" src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather icon"/> <br/>
      <span className="forecast-temp-max"> {maxTemp()} | </span>
      <span className="forecast-temp-min">{minTemp()}</span>
    </div>
    );
}