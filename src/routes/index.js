import collectRoute from './route-collect';
import baseRoute from './route-base';

const allRoutes = [...baseRoute, ...collectRoute];

export default allRoutes;
