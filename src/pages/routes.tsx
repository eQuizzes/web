import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Account from './Student/Account';
import Class from './Student/Class';
import Live from './Student/Live';

function Routes() {
  const subdomainStudent = 'student';

  return (
    <BrowserRouter>
      <Route path={`/${subdomainStudent}/account`} component={Account} />
      <Route path={`/${subdomainStudent}/class`} component={Class} />
      <Route path={`/${subdomainStudent}/live`} component={Live} />
    </BrowserRouter>
  );
}

export default Routes;
