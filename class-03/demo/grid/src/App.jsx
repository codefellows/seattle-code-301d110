import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ResponsiveAutoExample() {
  const [name, setName] = useState('');

  function handleChange(event) {
    let search = event.target.value;
    setName(search);

    let names = ["John", "Cathy", "Zach", "Allie"];
    let found = names.filter( (value) => {
      return value === search;
    })
    console.log(found);

  }

  return (
    <>
      <h1>Welcome, {name}</h1>
      <input onChange={handleChange} />
      <Container>
        <Row>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
        </Row>
      </Container>
    </>
  );
}

export default ResponsiveAutoExample;
