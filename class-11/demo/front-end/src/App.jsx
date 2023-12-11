import { useState } from 'react'
import axios from 'axios';

import Dogs from './components/Dogs.jsx';

let SERVER = import.meta.env.VITE_SERVER;

function App() {
  const [dogs, setDogs] = useState([]);

  async function fetchDogs() {
    try {
      let response = await axios.get(`${SERVER}/dogs`) 
      setDogs( response.data );
    } catch(e) { console.error(e.message); }
  }

  return (
    <>
      <button onClick={fetchDogs}>Get Some Dogs</button> 
      <Dogs dogs={dogs} />
    </>
  )
}

export default App
