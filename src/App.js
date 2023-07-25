import { Container } from "react-bootstrap";
import "./App.css";

import Account from "./features/Account/Account";
import Bonus from "./features/Bonus/Bonus";
import Reward from "./features/Reward/Reward";

function App() {
  return (
    <Container>
      <Account></Account>
      <Bonus></Bonus>
      <Reward></Reward>
    </Container>
  );
}

export default App;
