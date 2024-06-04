import { connectApi } from '../lib/connect.js';
import app from '../components/app.js';
import { renderItems } from '../components/renderFunction.js';

const Home = () => {
  const div = document.createElement('div');
  div.appendChild(app());
  connectApi().then((res) => {
    div.appendChild(renderItems(res));
  });
  return div;
};

export default Home;
