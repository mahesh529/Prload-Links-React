import { lazy } from 'react';

import ParentB from './parent_b';





const routes = [
  {
    path: '/b',
    component: ParentB,
    routes: [
      {
        path: '/b/a',
        fetchComponent: () => import('./child_a/child_a')
      },
      {
        path: '/b/b',
        fetchComponent: () => import('./child_b/child_b')
      }
    ]
  }
];

export default routes;