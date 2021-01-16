import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MatrixFill from "./components/MatrixFill";
import Nav from "./components/Nav";
import Screen from "./components/Screen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/task2" component={MatrixFill} />
          <Route path="/" component={Screen} />
        </Switch>
      </div>
    );
  }
}

export default App;
