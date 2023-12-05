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
    } catch(e) {
      console.error(e.message);
    }
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
