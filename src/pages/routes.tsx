import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import NewRegister from './NewRegister';
import Login from './Login';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/newRegister" component={NewRegister} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default Routes;
