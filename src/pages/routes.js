import HomeRoutes from './home/routes';
import ParentARoutes from './parent_a/routes';
import ParentBRoutes from './parent_b/routes';

const routes = [...HomeRoutes, ...ParentARoutes, ...ParentBRoutes];

export default routes;