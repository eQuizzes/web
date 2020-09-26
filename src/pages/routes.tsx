import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import NewRegister from './NewRegister';
import Login from './Login';
import RecoveryPasswordCode from './RecoveryPassword/pages/Code';
import RecoveryPasswordNew from './RecoveryPassword/pages/New';
import RecoveryPassword from './RecoveryPassword';
import About from './About';

import Account from './Student/Account';
import Class from './Student/Class';

function Routes() {
  const subdomainStudent = 'student';

  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/newRegister" component={NewRegister} />
      <Route path="/login" component={Login} />
      <Route path="/recoveryPassword/code" component={RecoveryPasswordCode} />
      <Route path="/recoveryPassword/new" component={RecoveryPasswordNew} />
      <Route path="/recoveryPassword" component={RecoveryPassword} />
      <Route path="/about" component={About} />
      <Route path={`/${subdomainStudent}/account`} component={Account} />
      <Route path={`/${subdomainStudent}/class`} component={Class} />
    </BrowserRouter>
  );
}

export default Routes;
