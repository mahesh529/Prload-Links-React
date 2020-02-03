

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './pages/routes';
import  Menu  from './components/menu/menu';
import Router  from './components/router/router';

import  flattenRoutes  from './common/utilities/utilities';
import RouteContext  from './common/contexts/RouteContext';

const flattenedRoutes = flattenRoutes(routes);

const App = () => {
  return (
    <RouteContext.Provider value={flattenedRoutes}>
      <BrowserRouter>
        <div className="app">
          <header className="app-header">App Root</header>
          <Menu />
          <Router routes={routes} />
        </div>
      </BrowserRouter>
    </RouteContext.Provider>
  );
};

export default App;
