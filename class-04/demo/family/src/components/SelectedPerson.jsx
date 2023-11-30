import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Person(props) {



  return (
    <Modal show={props.show} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.person.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Votes: {props.person.votes}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={() => props.handleVote(props.person)}>
        Vote For Me
      </Button>
    </Modal.Footer>
    </Modal>

  )

}

export default Person;
