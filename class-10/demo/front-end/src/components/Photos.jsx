import {useState, useEffect} from 'react';
import axios from 'axios';

function Photos(props) {

  return (
    <section>
      {
        props.photos.map( (element, index) =>
          <img key={index} src={element.url} alt={element.name} />
        )
      }
    </section>
  );

}

export default Photos;
