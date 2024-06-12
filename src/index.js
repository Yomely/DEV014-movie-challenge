import Home from './views/Home.js';
import Detail from './views/Detail.js';
import Error from './views/Error.js';

// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/detail': Detail,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
const root = document.querySelector('#app');
window.addEventListener('DOMContentLoaded', () => {
  setRootEl(root);
  onURLChange(window.location.pathname);
});
