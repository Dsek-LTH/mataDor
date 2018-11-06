import React from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import AdminRoute from './AdminRoute';
import HomeRoute from './HomeRoute';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/admin" component={AdminRoute} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>
);
export default App;
