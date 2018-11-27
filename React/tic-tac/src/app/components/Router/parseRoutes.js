import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes from '@const/routes';

const parseRoutes = ({ auth, ...props }) =>
  routes.map(route => {
    let status;
    if (route.protected && !auth.user) {
      status = <Redirect to="/" />;
    } else if (!route.protected && auth.user) {
      status = <Redirect to="/game" />;
    } else {
      status = <route.renderComponent {...props} />;
    }
    return <Route key={route.pathname} render={() => status} {...route} />;
  });

export default parseRoutes;
