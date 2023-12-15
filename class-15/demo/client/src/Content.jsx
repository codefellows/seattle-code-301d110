import {useState, useEffect} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function Content(props) {

  const [books, setBooks] = useState([]);

  useEffect( () => {

    async function getBooks() {

      let claim = await props.auth0.getIdTokenClaims();
      let token = claim.__raw;

      const config = {
        headers: { "Authorization": `Bearer ${token}` },
        method: "get",
        url: 'http://localhost:3000/books',
      }

      let resposne = await axios(config);
      let data = resposne.data;
      setBooks(data);
    }

    getBooks();

  }, []);

  return (
    <ul>
      {
        books.map( book => <li key={book._id}>{book.title}</li> )
      }
    </ul>
  )

}

export default withAuth0(Content);
