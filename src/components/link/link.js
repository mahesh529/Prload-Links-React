import React, { useContext, useEffect } from 'react';
import { Link as ReactLink, matchPath } from 'react-router-dom';

import  RouteContext  from "../../common/contexts/RouteContext";
const Link = ({ to, ...rest }) => {
  const routes = useContext(RouteContext);
  useEffect(() => {
    // using filter ensures we get all matches, so if we have
    // a link to /a/b/c we'll also get routes /a/b and /a
    const targetRoutes = routes.filter(route => matchPath(to, route));
    targetRoutes.forEach(({ fetchComponent }) => {
      if (fetchComponent) {
        fetchComponent();
      }
    });
  }, [routes]);
  return <ReactLink to={to} {...rest} />;
};

export default Link;