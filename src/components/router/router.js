import React, { Fragment, Suspense,useEffect,useState,lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Loader = <div>Loading route...</div>;

const Router = ({ routes }) => {
    const [routesWithPreload, setRoutesWithPreload] = useState(routes);
    useEffect(() => {
      setRoutesWithPreload(
        routesWithPreload.map(route => {
          const copy = { ...route };
          const { fetchComponent } = copy;
          if (fetchComponent) {
            const preloadedComponent = fetchComponent();
            copy.component = lazy(() => preloadedComponent);
          }
          return copy;
        })
      );
    }, []);
    return (
      <Switch>
        <Suspense fallback={Loader}>
          {routesWithPreload.map(
            ({ path, component: Component, routes: children, ...rest }) => (
              <Route
                key={path}
                path={path}
                component={props => (
                  <Fragment>
                    {/*
                      This is so that we don't get errors
                      if we initialy go to a route that
                      is dynamically imported
                    */}
                    {Component ? <Component {...props} /> : null}
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