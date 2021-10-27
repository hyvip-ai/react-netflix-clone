import Extended from "./Components/Extended";
import Trailer from "./Components/Trailer"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Shared-Folder/Home";
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
