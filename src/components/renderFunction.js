/* eslint-disable*/
export const renderItems = (data) => {
  const ul = document.createElement('ul');
  ul.classList.add('flex-container');

  data.forEach((movie) => {
    const movieLi = document.createElement('li');
    // paso 1 
    // agregarle un evento al darle clicl al li
    /// console.log e imprimir el id de la pelicula
    // paso 3 es invocar la funcion navigateTo para navegar al detalle de la pelicula


    movieLi.setAttribute('itemscope', '');
    movieLi.setAttribute('itemtype', movie.id);

    const semanticHTML = `
      <dl itemscope itemtype="MovieChallenge">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <dd itemprop="name">${movie.title}</dd>
      <dd itemprop="releaseDate">${movie.release_date}</dd>
      </dl>  
       `;
    movieLi.innerHTML = semanticHTML;
    movieLi.classList.add('flex-item');

    ul.append(movieLi);
  });
  return ul;
};
