import React from "react"
import FormattedDate from './FormattedDate'
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props){
 return(
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2 className="text-capitalize">{props.data.description}</h2>
      <WeatherTemperature celsius={props.data.temperature}/>
      <img src={props.data.iconUrl} alt={props.data.description}/>
      <FormattedDate date={props.data.date}/>
      <br />
      <p>
      <strong>Humidity: </strong>{props.data.humidity}%
      </p>
      <p>
      <strong>Wind Speed: </strong>{props.data.wind} km/h
      </p>
     </div>

    );

};