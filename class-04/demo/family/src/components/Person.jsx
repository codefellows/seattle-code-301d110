import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


/*
  This component uses a Ternary to conditionally render the vote button:

  statement ? true do this : false do this

  1===1 ? console.log("Yes") : console.log("no");

*/

function Person(props) {

  function handleClick() {
    // props.person is "me"
    // Tell App.jsx that this person was selected
    props.handleSelectPerson( props.person );
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.person.name}</Card.Title>
        <Card.Text>
          Votes: {props.person.votes}
        </Card.Text>
        {
          props.person.votes >= 1 ? null : <Button variant="primary" onClick={handleClick}>Pick Me!</Button>
        }
      </Card.Body>
    </Card>
  )

}

export default Person;

