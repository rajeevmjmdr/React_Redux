import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

import Account from "./features/Account/Account";
import Bonus from "./features/Bonus/Bonus";
import Reward from "./features/Reward/Reward";
import Admin from "./features/Admin/Admin";

function App() {
  return (
    <Container>
      <Row>
        <Col className="border border-primary">
          <Account></Account>
          <Bonus></Bonus>
          <Reward></Reward>
        </Col>
        <Col className="border border-primary">
          <Admin></Admin>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
