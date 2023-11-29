import { useState } from 'react'

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import People from './components/People.jsx';

import database from './assets/family.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [people, setPeople] = useState(database);

  function voteFor(person) {

    console.log('People', people);

    // Iterate the people array and find "person"
    let newPeople = people.map( (obj, idx) => {
      // Increase their vote count
      if( obj.name === person ) {
        obj.votes++;
        return obj;
      }
      return obj;
    });

    console.log("newPeople", newPeople);

    // Update State
    setPeople(newPeople);

    console.log(people);
  }

  return (
    <main>
      <Header title="Our Family!" members={people.length} />
      <People list={people} handleVote={voteFor} />
      <Footer content="Copyright 2023: John and the 301's" />
    </main>
  )

}

export default App;
