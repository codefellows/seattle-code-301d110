import { useState } from 'react'
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

function App() {

  const [data, setData] = useState([])

  async function getData(listType) {
    // Use axios to fetch data from our web server
    try {
      let response = await axios.get(`${API}/shopping-list?type=${listType}`);
      console.log(response);
      setData( response.data );
      setLatitude( response.data[0].latitude);

      // Do not depend on state, feed in the lat/lon directly from the request data
      showWeather(response.data[0].latitude, response.data[0].longitude)
      // showMovies(response.data[0].latitude, response.data[0].longitude)
      // showRestaurants(response.data[0].latitude, response.data[0].longitude)

    } catch(e) {
      console.error(e.message);
    }
  }

  async function showWeather(latidude, longitude) {
    axios.get( "http://server.com",
      {
         params: {
           latitude: latidude,
           longitude: longitude
         }
      }
    );
  }

  function getFood() {
    // ?type=food
    getData("food");
  }

  function getSupplies() {
    // type=supplies
    getData("supplies");
  }

  return (
    <>
      <button onClick={getFood}>Get Food List</button>
      <button onClick={getSupplies}>Get Supplies List</button>
      <ul>
        {
          data.map( (thing,idx) =>
            <li key={idx}>{thing.name}</li>
          )
        }
      </ul>
    </>
  )
}

export default App
