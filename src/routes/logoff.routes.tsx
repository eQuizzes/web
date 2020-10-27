import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import NewRegister from '../pages/NewRegister';
import Login from '../pages/Login';
import About from '../pages/About';

import Quiz from './quiz.routes';
import RecoveryPassword from './logoff/recoveryPassword.routes';

function LogoffRoutes() {
  const routes = Quiz.concat(RecoveryPassword);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/newRegister" component={NewRegister} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />

        {routes.map((entry) => (
          <Route key={entry.path} exact {...entry} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default LogoffRoutes;
