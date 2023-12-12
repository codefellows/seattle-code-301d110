import React from 'react';
import axios from 'axios';

// This should actually be in .env.local
let SERVER = 'http://localhost:3000';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      count:0,
    }
  }

  fetchBooks = async () => {
    const response = await axios.get(`${SERVER}/books`);
    console.log(response.data);
    this.setState( { books: response.data} );
  }

  // Runs at component 1st render (like on create)
  componentDidMount() {
    this.fetchBooks();
    console.log("Mount Up!");
  }

  // Runs when the component goes away (like we leave the page)
  componentWillUnmount() {
    console.log("Unmounted");
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <p>My Essential Lifelong Learning &amp; Formation Shelf</p>
        <button onClick={ () => this.setState( {count: this.state.count+1 })}>Update Count</button>

        <p>{this.state.count}</p>

        {this.state.books.length ? (
          <ul>
            {
              this.state.books.map( book => 
                <li key={book.title}>{book.title}</li>
              )
            }
          </ul>
        ) : (
          <p>No Books Found :(</p>
        )}
      </>
    )
  }
}

export default BestBooks;
