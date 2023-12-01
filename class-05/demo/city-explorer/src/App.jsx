import { useState } from 'react'

import Header from "./components/Header.jsx";
import Map from "./components/Map.jsx";
import CityForm from "./components/CityForm.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Weather from "./components/Weather.jsx";

import location from './data/location.json';
import weatherData from './data/weather.json';
import restaurantData from './data/restaurants.json';
import mapImage from './assets/map.png';

function App() {

  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [map, setMap] = useState('');

  function changeCity(newCity) {

    // The city as typed in is "newCity"
    // Get the Lat/Lon from an API using newCity as the way to find it...

    //   update that in state, and then
    //   Option 1: Send that to the components and they can fetch their data
         setCity( location.formatted_query );
         setLatitude(location.latitude);
         setLongitude(location.longitude); // FAKE!

    //   Option 2: Do it all here
    //     Fetch map image, restaurants list, weather data and pass THAT to the children
           fetchWeather();
           fetchRestaurants();
           fetchMap();
  }

  function fetchMap() {
    // Use an API to get a proper map image link
    // Call our server to ask for data based on lat/lon
    // ????
    setMap(mapImage);
  }

  function fetchWeather() {
    // Use an API to get some weather
    setWeather(weatherData.data);
  }

  function fetchRestaurants() {
    // Use an API to get soem restaurant suggestions
    setRestaurants(restaurantData);
  }

  return (
    <>
      <Header />
      <CityForm city={city} handleChangeCity={changeCity} />
      <Map map={map}/>
      <section className="results">
        <Weather weather={weather} />
        {/* <Weather lat={latitude} lon={longitude} /> */}
        <Restaurants restaurants={restaurants} />
      </section>
    </>
  )
}

export default App
