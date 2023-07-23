import { Button, Col, Container, Row } from "react-bootstrap";

const Account = () => {
  return (
    <Container className="text-center">
      <Row >
        <Col className="mt-20">  Value</Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
            <Button>Increment</Button>
        </Col>
        <Col>
            <Button>Decrement</Button>
        </Col>
        <Col>
            <Button>IncrementByAmt</Button>
        </Col>
      </Row>
      </Container>
  );
};
export default Account;
