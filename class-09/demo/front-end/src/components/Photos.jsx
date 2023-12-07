import {useState, useEffect} from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_SERVER;

function Photos(props) {

  const [photos, setPhotos] = useState([]);

  useEffect( () => {

    console.log("CHange!", props.search);

    async function fetchPhotos() {
      try {
        let queryObject = { params: { search: props.search } };
        let response = await axios.get( `${API}/photos`, queryObject);
        setPhotos( response.data );
      } catch(e) { 
        console.error( e.message );
      }
    }

    fetchPhotos();

  },[props.search]);

  return (
    <section>
      {
        photos.map( (element, index) => 
          <img key={index} src={element.url} alt={element.name} />
        )
      }
    </section>
  );

}

export default Photos;