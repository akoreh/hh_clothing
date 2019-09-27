import React from 'react';

import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import GlobalStyle from './global.styles';

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <NavBar />
    <Switch>
      <Route exact path="/" render={()=> <h1>HomePage</h1>}/>
    </Switch>
  </React.Fragment>
);

export default App;
