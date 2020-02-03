import React, { Fragment, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Loader = <div>Loading route...</div>;

const Router = ({ routes }) => {
  return (
    <Switch>
      <Suspense fallback={Loader}>
        {routes.map(
          ({ path, component: Component, routes: children, ...rest }) => (
            <Route
              key={path}
              path={path}
              component={props => (
                <Fragment>
                  <Component {...props} />
                  {children && children.length > 0 ? (
                    <Router {...props} routes={children} />
                  ) : null}
                </Fragment>
              )}
              {...rest}
            />
          )
        )}
      </Suspense>
    </Switch>
  );
};

export default Router;