import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
