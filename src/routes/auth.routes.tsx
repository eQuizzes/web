import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Student/Home';
import Account from '../pages/Student/Account';

const AuthRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/account',
      component: Account,
    },
  ].concat();

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/home`}>
          <Redirect to="/" />
        </Route>
        <Route path={`/login`}>
          <Redirect to="/" />
        </Route>

        {routes.map((entry) => (
          <Route key={entry.path} exact {...entry} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
