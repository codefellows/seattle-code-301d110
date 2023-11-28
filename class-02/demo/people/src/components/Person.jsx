import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Person( props ) {

  const [color, setColor] = useState("grey");
  const [visible, setVisible] = useState("block");

  function vote() {
     setVisible("none");
  }

  return (
    <Card style={{ width: '18rem', margin:"1em", display: `${visible}` }}>
      <Card.Img variant="top" src="https://placehold.co/100x100" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Hair Color: {props.hair}
        </Card.Text>
        <Button onClick={vote} variant="primary">Vote for {props.name}</Button>
      </Card.Body>
    </Card>
  );

}

export default Person;
