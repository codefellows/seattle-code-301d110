import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function ResponsiveAutoExample() {
  return (
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
  );
}

export default ResponsiveAutoExample;
