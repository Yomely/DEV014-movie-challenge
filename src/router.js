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

const queryStringToObject = (queryString) => {
  if (!queryString) {
    return {};
  }
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  const urlToObject = Object.fromEntries(params);
  // return the object
  return urlToObject;
};

const renderView = (pathname, props = {}) => {
  // clear the root element
  rootEl.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  const correctRoute = ROUTES[pathname];
  console.log(correctRoute);
  // in case not found render the error view
  if (!correctRoute) {
    rootEl.innerHTML = 'Error 404 ruta no existe';
  }
  // render the correct view passing the value of props
  // add the view element to the DOM root element

  // aqui falta mandarle la propiedad, la propiedad del id de la pelicula
  rootEl.appendChild(correctRoute(props));
};

export const navigateTo = (pathname, props = {}) => { // Aqui falta
  // paso 2
  // update window history with pushState
  window.history.pushState({}, pathname, `${window.location.origin + pathname}${props ? `?${new URLSearchParams(props)}` : ''}`);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location = '/', props = {}) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  const params = { ...props, ...queryStringToObject(window.location.search) };
  renderView(location, params);
};
