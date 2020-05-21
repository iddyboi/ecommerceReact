import React from "react";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
