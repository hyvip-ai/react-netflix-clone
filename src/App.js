import Extended from "./Pages/Extended";
import Trailer from "./Pages/Trailer"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pages/:genre">
          <Extended />
        </Route>
        <Route path="/trailer/:trailerName">
          <Trailer/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
