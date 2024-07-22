/* eslint-disable no-undef */
import { connectDetails } from '../lib/connect';
import { navigateTo } from '../router';

const Detail = () => {
  const id = window.location.search.split('=')[1];
  const div = document.createElement('div');
  connectDetails(id)
    .then((res) => {
      console.log(res);
      // div.textContent = 'Soy el detalle de la pelicula';
      const template = `
      <dl itemscope itemtype="MovieChallenge">
      
      <div class="viewDetail">
      <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" />
        <dd itemprop="title">${res.title}</dd>
        <dt>Estreno:</dt><dd itemprop="release_date">${res.release_date}</dd>
        <dt>Género:</dt><dd itemprop="genre">${res.genres.map((gen) => `${gen.name}`).join(', ')}</dd>
        <dt>Voto promedio:</dt><dd itemprop="vote_average">${res.vote_average}</dd>
        <button id="buttonBack">Volver</button>
      </div>
      </dl>
      `;
      div.innerHTML = template;
      console.log(window.location);
      const btnBack = document.querySelector('#buttonBack');
      console.log(btnBack);
      // darle un evento que redirija al home, llamar a ToNavigate
      btnBack.addEventListener('click', () => {
        console.log(navigateTo('/home'));
        navigateTo('/home');
      });
    })
    .catch((err) => console.log(err));
  return div;
};
export default Detail;
