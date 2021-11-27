import React from 'react';
import { Route, Switch, BrowserRouter as Routes } from 'react-router-dom';

import Home from '../pages/Home';

const RoutesComponent = () => (
  <Routes>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Routes>
);

export default RoutesComponent;
