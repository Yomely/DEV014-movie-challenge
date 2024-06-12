/* eslint-disable no-undef */
import { connectDetails } from '../lib/connect';

const Detail = () => {
  const id = window.location.search.split('=')[1];
  const div = document.createElement('div');
  connectDetails(id)
    .then((res) => {
      console.log(res);
      div.textContent = 'Soy el detalle de la pelicula';
      const template = `
      <div><h1>${res.title}</h1></div>
      <img src="https://image.tmdb.org/t/p/w500${res.poster_path}" alt="${res.title}" />
      <div><p>${res.release_date}</p></div>
      <div>${res.with_genres}</div>
      <div>${res.vote_average}</div>
      `;
      div.innerHTML = template;
    })
    .catch((err) => console.log(err));
  return div;
};
export default Detail;
