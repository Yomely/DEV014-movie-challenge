// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import { connectApi, connectDetails } from './lib/connect.js';
// eslint-disable-next-line import/no-unresolved
import app from './components/app.js';
import { renderItems } from './components/renderFunction.js';
// import Header from "./components/header";

const HTMLResponse = document.querySelector('#app');

const init = () => {
  window.addEventListener('hashchange', () => {
    HTMLResponse.innerHTML = ' ';
    switch (window.location.hash) {
    case '#home':
      HTMLResponse.appendChild(app());
      break;
    /* case '#detail':
      HTMLResponse.appendChild(detail());
      break; */
    default:
      HTMLResponse.appendChild(app());
    }
  });
};

window.addEventListener('load', () => {
  HTMLResponse.appendChild(app());
  init();
});
connectApi().then((res) => {
  HTMLResponse.appendChild(renderItems(res));
});

connectDetails().then((res) => {
  console.log(renderItems(res));
});
