import { Container } from "react-bootstrap";
import "./App.css";

import Account from "./features/Account/Account";
import Bonus from "./features/Bonus/Bonus";

function App() {
  return (
    <Container>
      <Account></Account>
      <Bonus></Bonus>
    </Container>
  );
}

export default App;
