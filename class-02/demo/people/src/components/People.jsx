import React from 'react';

import Person from './Person.jsx';

// Bringing our data from an external source puts THAT source in
// control of it, so it can change independently of this component
// import people from "../assets/family.json";

// Declaring a people array in the component is cool but
// only this component can show them, and this component is
// now a "God Component"

// let people = [
//   {
//     name: "John",
//     hair: "Black"
//   },
//   {
//     name:"Cathy",
//     hair:"Blonde",
//   },
//   {
//     name: "Allie",
//     hair: "Dark Brown"
//   }
// ]

// When the <Person /> components were hard-coded ...
//    <Person name="John" hair="None" />
// This component is not scalable


// If we're going to loop over the names, you can, but keep
// this rule in mind:
// REACT ONLY RENDERS WHAT IS RETURNED from inside a {}!

function People(props) {

  return (
    <>
      {/* <Person name={people[0].name} hair={people[0].hair} />
      <Person name={people[1].name} hair={people[1].hair} />
      <Person name={people[2].name} hair={people[2].hair} /> */}

      {
        props.list.map( (person,index) => {
          return <Person key={index} name={person.name} hair={person.hair} />
        })
      }

    </>
  )

}

export default People;
