import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import NewRegister from './NewRegister';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/newRegister" component={NewRegister} />
    </BrowserRouter>
  );
}

export default Routes;
