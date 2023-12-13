import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {If, Then, Else} from 'react-if';
import UpdateDog from './UpdateDog.jsx';

// This should actually be in .env.local
let SERVER = 'http://localhost:3000';

function Dogs(props) {

  const [dogs, setDogs] = useState([]);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);

  const selectDog = (dog) => {
    setSelectedDog(dog);
  }

  const handleUpdateDog = async (dog) => {
    console.log("Sending updated dog to server", dog);
    let response = await axios.put(`${SERVER}/dogs/${dog._id}`, dog);
    let updatedDog = response.data;
    console.log("From the server, the dog is:", updatedDog);

    // Update the list ....
    let newDogsList = dogs.map( dog => {
      if( dog._id === updatedDog._id ) { return updatedDog; }
      else { return dog; }
    });

    setDogs( newDogsList );
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if( name === "name" ) { setName(value); }
    if( name === "breed" ) { setBreed(value); }
  }

  // Send the new Dogs data to the server ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create an object that looks like a Dog to send to the server
    let dog = { name, breed };
    console.log("Sending Dog to server", dog);

    // 2. Use axios to make a POST request to the server with OBJ as body
    let response = await axios.post( `${SERVER}/dogs`, dog); 
    console.log( "Server Response", response.data );

    // 3. Add the new dog from the server to our state (dogs)
    setDogs( [...dogs, response.data])
  }

  const handleDelete = async (e) => {
    // delete the dog
    console.log("Delete", e.target.id);
    let response = await axios.delete(`${SERVER}/dogs/${event.target.id}`)
    let dog = response.data; // {}

    let newDogs = dogs.filter( (dog) => {
      return dog._id !== e.target.id;
    });

    setDogs(newDogs);
  }

  const fetchDogs = async () => {
    const response = await axios.get(`${SERVER}/dogs`);
    console.log(response.data);
    setDogs(response.data);
  }

  // Runs at component 1st render (like on create)
  useEffect( () => {
    console.log("Mounted Up!");
    fetchDogs();
  
    return () => {
     console.log("Unmounted");
    }

  }, []);

  return (
    <>
      <p>My Dogs</p>

      <hr />

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Dogs Name" onChange={handleChange} />
        <input name="breed" placeholder="Dog Breed" onChange={handleChange} />
        <button type="submit">Save Dog</button>
      </form>

      <hr />

      <If condition={dogs.length}>
        <Then>
          <ul>
            {
              dogs.map( dog => 
                <li key={dog._id}>
                  <span style={{cursor:"pointer"}} onClick={ () => selectDog(dog) }>{dog.name} is a {dog.breed}</span>
                  <span id={dog._id} onClick={handleDelete} style={{ marginLeft:".5em", color:"red", cursor:"pointer"}}>X</span>
               </li>
             )
            }
          </ul>
        </Then>
        <Else>
          <p>No Dogs Found :(</p>
        </Else>
      </If>

      <UpdateDog handleSubmit={handleUpdateDog} dog={selectedDog} />

    </>
  );
}

export default Dogs;
