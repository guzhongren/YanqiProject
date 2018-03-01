import React from 'react';
import { Switch, HashRouter  as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from '../components/Home';
import Loading from '../components/Loading';
// import Index2 from './index2';

const AsyncIndex2 = importedComponent(
  () => import(/* webpackChunkName:'DynamicPage' */ './index2'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ '../components/NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dynamic" component={AsyncIndex2} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;