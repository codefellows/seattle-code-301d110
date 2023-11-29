import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Child(props) {

  function withdraw() {
    // I need to run that transfer method in the parent...
    props.handleTransfer(props.name, 10);
  }

  return (
    <Card style={{width:"15rem"}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          I have {props.money} available to me
        </Card.Text>
        <Button onClick={withdraw}>Give me $10</Button>
      </Card.Body>
    </Card>
  );

}

export default Child;
