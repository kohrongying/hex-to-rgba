import React, { Component } from 'react';
import Converter from './components/Converter';
import Palette from './components/Palette';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Converter} />
          <Route path={process.env.PUBLIC_URL + '/:color'} component={Palette} />
        </div>
      </Router>
    );
  }
}

export default App;
