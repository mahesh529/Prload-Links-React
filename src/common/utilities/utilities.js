function flattenRoutes(routes = []) {
    let flattenedRoutes = [];
    routes.forEach(route => {
      flattenedRoutes.push(route);
      if (route.routes) {
        flattenedRoutes = flattenedRoutes.concat(route.routes);
      }
    });
    return flattenedRoutes;
  }
  
  export default flattenRoutes;