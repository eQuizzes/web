import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import NewRegister from '../pages/NewRegister';
import Login from '../pages/Login';
import About from '../pages/About';
import RecoveryPassword from '../pages/RecoveryPassword';
import RecoveryPasswordCode from '../pages/RecoveryPassword/pages/Code';
import RecoveryPasswordNew from '../pages/RecoveryPassword/pages/New';

import Quiz from '../pages/Quiz';

function LogoffRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/newRegister" component={NewRegister} />
        <Route path="/login" component={Login} />
        <Route path="/recoveryPassword/code" component={RecoveryPasswordCode} />
        <Route path="/recoveryPassword/new" component={RecoveryPasswordNew} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />
        <Route path="/about" component={About} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default LogoffRoutes;
