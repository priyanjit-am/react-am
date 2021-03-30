import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Landing from "./pages/Landing";

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/meeting/create">
            <Landing />
          </Route>
          <Route path="/meeting/join">
            <Landing />
          </Route>
          <Route path="/meeting/:id">
            meeting
          </Route>
          <Redirect to="/meeting/create" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
