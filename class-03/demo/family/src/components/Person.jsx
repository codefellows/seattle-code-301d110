import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Person( props ) {

  function vote() {
     // Call a method in the parent that does the voting...
     props.handleVote(props.name);
  }

  return (
    <Card style={{ width: '18rem', margin:"1em"}}>
      <Card.Img variant="top" src="https://placehold.co/100x100" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Votes: {props.votes}
        </Card.Text>
        <Button onClick={vote} variant="primary">Vote for {props.name}</Button>
      </Card.Body>
    </Card>
  );

}

export default Person;
