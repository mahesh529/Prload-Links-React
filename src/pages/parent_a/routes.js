import { lazy } from 'react';

import ParentA from './parent_a';





const routes = [
  {
    path: '/a',
    component: ParentA,
    routes: [
      {
        path: '/a/a',
        fetchComponent: () => import('./child_a/child_a')
      },
      {
        path: '/a/b',
        fetchComponent: () => import('./child_b/child_b')
      }
    ]
  }
];

export default routes;