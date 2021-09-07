import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './pages/home';
import { LANDING_ROUTE } from './utils/routes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={LANDING_ROUTE} component={home} />
    </Switch>
  );
};

export default Routes;
