import { connectApi } from '../lib/connect.js';
import app from '../components/app.js';
import { renderItems } from '../components/renderFunction.js';
import selectByYear from '../components/SelectByYear.js';

const Home = () => {
  const div = document.createElement('div');
  div.append(app(), selectByYear());
  connectApi().then((res) => {
    div.appendChild(renderItems(res));
  });
  return div;
};

export default Home;
