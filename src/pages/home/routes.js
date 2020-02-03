import { lazy } from 'react';

import Home from './home';





const routes = [
  {
    path: '/Home',
    component: Home,
    routes: [
      {
        path: '/home/a',
        component: lazy(() => import('./child_a/child_a'))
      },
      {
        path: '/home/b',
        component: lazy(() => import('./child_b/child_b'))
      }
    ]
  }
];

export default routes;