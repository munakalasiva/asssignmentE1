import { Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const App = () => (
  <>
    <Route exact path="/" component={Login} />
    <Route exact path="/home" component={Home} />
  </>
);

export default App;
