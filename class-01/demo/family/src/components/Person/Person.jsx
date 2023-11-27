import React from 'react';

// "attributes" come in as "props"
// So ... <Person name="Fred" age="23" />
function Person(props) {

  return (
    <li>
      {props.name} is {props.age} years old.
    </li>
  )

}

export default Person;
