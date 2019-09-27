import React from 'react';

import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './global.styles';

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" render={()=> <h1>HomePage</h1>}/>
    </Switch>
  </React.Fragment>
);

export default App;
