export const renderItems = (data) => {
    // crear un elemento ul
    const ul = document.createElement("ul");
    //agregar un metodo que permite poner estilos al elemento ul
    ul.classList.add('flex-container');
    //utilizar método forEach para iterar sobre la data
    data.forEach(movie => {
      const movieLi = document.createElement("li");
      
      movieLi.setAttribute('itemscope', '')
      movieLi.setAttribute('itemtype', movie.id)
      
      const semanticHTML= `
      <dl itemscope itemtype="MovieChallenge">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}" />
      <dd itemprop="name">${movie.original_title}</dd>
      <dd itemprop="releaseYear">${movie.release_date}</dd>
      </dl>  
       `
      movieLi.innerHTML=semanticHTML;
      movieLi.classList.add('flex-item');
  
      ul.append(movieLi);  
    })
    return ul;
  };
  