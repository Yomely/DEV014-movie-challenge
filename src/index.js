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
console.log(Detail);
// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
const root = document.querySelector('#app');
setRootEl(root);
window.onpopstate = () => {
  onURLChange(window.location.pathname);
};
window.addEventListener('DOMContentLoaded', () => {
  onURLChange(window.location.pathname);
});

/*const btnBack = document.querySelector('#buttonBack');
console.log(btnBack);
btnBack.addEventListener('click', () => {
  console.log(btnBack.location.pathname);
  setRootEl(root);
  onURLChange(btnBack.location.pathname);
});*/
