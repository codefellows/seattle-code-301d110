import { useState } from 'react'
import axios from 'axios';

const API = import.meta.env.VITE_API;

function App() {

  const [photos, setPhotos] = useState([]);
  const [keywords, setKeywords] = useState('');

  function handleChange( event ) { 
    setKeywords( event.target.value );
  }

  async function fetchImages(e) {
    e.preventDefault();
    try {
      let response = await axios.get(`${API}/photos`, 
        {
          params: { keywords: keywords }
        }
      );

      setPhotos(response.data);

    } catch(e) { console.error(e.message); }
  }

  return (
    <>
      <form onSubmit={fetchImages}>
        <input 
          placeholder="Type of Images to fetch ..." 
          onChange={handleChange}
        />
      </form>
      <ul>
        {
          photos.map( (photo,idx) => 
            <li key={idx}>
              <img src={photo.url} alt={photo.name} />
            </li>
          )
        }
      </ul>
    </>
  )
}

export default App
