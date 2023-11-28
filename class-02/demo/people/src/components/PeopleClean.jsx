import React from 'react';

import Person from './Person.jsx';

function People(props) {

  return (
    <>
      {
        props.list.map( (person,index) =>
          <Person
            key={index}
            name={person.name}
            hair={person.hair} />
        )
      }

    </>
  )

}

export default People;
