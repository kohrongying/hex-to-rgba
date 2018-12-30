import React, { Component } from 'react';
import Converter from './components/Converter';
import Palette from './components/Palette';
import MyPalette from './components/MyPalette';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Converter} />
          <Route path={process.env.PUBLIC_URL + '/my-palette'} exact component={MyPalette} />
          <Route path={process.env.PUBLIC_URL + '/:color'} component={Palette} />
        </Switch>
      </Router>
    );
  }
}

export default App;
