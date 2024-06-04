const ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  Object.assign(ROUTES, routes);
};

const queryStringToObject = (queryString) => { // falta terminar
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
};

const renderView = (pathname, props = {}) => { // falta usar
  // clear the root element
  rootEl.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  const correctRoute = ROUTES[pathname];
  // in case not found render the error view
  if (!correctRoute) {
    rootEl.innerHTML = 'Error 404 ruta no existe';
  }
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  rootEl.append(correctRoute()); // aqui falta mandarle la propiedad, la propiedad del id de la pelicula
};

export const navigateTo = (pathname, props = {}) => { // Aqui falta
  // paso 2
  // update window history with pushState
  // render the view with the pathname and props
};

export const onURLChange = (location = '/') => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location);
};
