import React from "react";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
