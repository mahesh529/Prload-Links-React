import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './pages/routes';
import  Menu  from './components/menu/menu';
import Router  from './components/router/router';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">App Root</header>
        <Menu />
        <Router routes={routes} />
      </div>
    </BrowserRouter>
  );
};

export default App;