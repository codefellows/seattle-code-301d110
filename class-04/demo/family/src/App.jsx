// useState is a "hook"
// It's a function that returns state and an update function
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import People from './components/People.jsx';
import SelectedPerson from './components/SelectedPerson.jsx';

import originalFamilyData from "./assets/family.json";

function App() {

  const [family, setFamily] = useState(originalFamilyData);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [isSelectedPersonVisible, setIsSelectedPersonVisible] = useState(false);

  // In the future (tomorrow)
  // Instead of reading a file, we will run a database query or an API call to fetch data
  // as soon as the application starts.

  function addFamilyMember() {
    let newPerson = {
      _id: Math.random(),
      name: "Fred",
      hair: "Grey",
      pets: [],
      age: 42,
      votes: 0
    };
    // This will NOT update application state
    // familyData.push(newPerson);

    // The right way is to use the state setting function (setFamily) to do this.
    // let copyOfFamily = [...family];
    // copyOfFamily.push(newPerson);
    // setFamily( copyOfFamily ); // changes state AND re-renders
    setFamily( [...family, newPerson] ); // changes state AND re-renders

  }

  function selectPerson(person) {
    setSelectedPerson(person);
    setIsSelectedPersonVisible(true);
  }

  function handleCloseModal() {
    setIsSelectedPersonVisible(false);
  }

  function handleVote(data) {
    let newFamily = family.map( person => {
      if( data._id === person._id) {
        person.votes++;
      }
      return person;
    });

    setFamily( newFamily );
    handleCloseModal();
  }

  return (
    <>
      <div>Family Members: {family.length}</div>
      <button onClick={addFamilyMember}>Add One</button>
      <People handleSelectPerson={selectPerson} list={family} />
      <SelectedPerson
        show={isSelectedPersonVisible}
        handleClose={handleCloseModal}
        handleVote={handleVote}
        person={selectedPerson}
      />
    </>
  )
}

export default App


/*

Thisis a pretend version of how useState works

function useState( defaultValue ) {
  let state = defaultValue;

  function changeState(nextState) {
    state = nextState;
    // re-render the page
  }

  return [state, changeState];

}

*/
