import { lazy } from 'react';

import Home from './home';





const routes = [
  {
    path: '/Home',
    component: Home,
    routes: [
      {
        path: '/home/a',
        fetchComponent: () => import('./child_a/child_a')
      },
      {
        path: '/home/b',
        fetchComponent: () => import('./child_b/child_b')
      }
    ]
  }
];

export default routes;