import React, { Component } from 'react';
import Converter from './components/Converter';
import Palette from './components/Palette';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename="/hex-to-rgba">
        <div>
          <Route path="/" exact component={Converter} />
          <Route path="/:color/" component={Palette} />
        </div>
      </Router>
    );
  }
}

export default App;
