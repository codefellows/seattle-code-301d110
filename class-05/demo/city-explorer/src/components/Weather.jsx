import {useState} from 'react';

import weatherData from '../data/weather.json';

function Weather(props) {
  // I can do it myself!
  // given props.lat, props.lon fetch the data ourselves ...
  // const [weather, setWeather] = useState(weatherData.data);

  return (
    <>
      <h2>5 Day Forecast</h2>
      <ul>
        {
          props.weather.map( (day,idx) =>
            <li key={`weather-${idx}`}>{day.valid_date} - {day.weather.description}</li>
          )
        }
      </ul>
    </>
  )
}

export default Weather;
