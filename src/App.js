import React, { Component } from "react";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInSignOut from "./pages/sign-in-sign-out/SignInSignOut";

import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInSignOut} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
