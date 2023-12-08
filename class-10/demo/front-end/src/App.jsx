import { useState } from 'react'
import axios from 'axios';

import Photos from './components/Photos.jsx';
import Form from './components/Form.jsx';

import './styles.css';

const API = import.meta.env.VITE_API_SERVER;

function App() {

  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState([]);

  function handleForm(searchTerm) {
    setSearch(searchTerm);
    fetchPhotos(searchTerm);
  }

  async function fetchPhotos(searchTerm) {
    try {
      let queryObject = { params: { search: searchTerm } };
      let response = await axios.get( `${API}/photos`, queryObject);
      setPhotos( response.data );
    } catch(e) {
      console.error( e.message );
    }
  }

  return (
    <>
      <h1>Photo Search</h1>
      <Form handleSubmit={handleForm} />
      <Photos photos={photos} />

      {/* <Weather location={} />
      <Movies location={} />
      <Map location={} /> */}
    </>
  )
}

export default App
