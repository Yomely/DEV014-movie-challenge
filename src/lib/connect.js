export const connectApi = () => fetch('https://api.themoviedb.org/3/discover/movie?api_key=228814320f157771c719d14dab842e9e')
  .then((response) => response.json()
    .then((res) => {
      console.log(res.results);
      return res.results;
    }));

export const connectDetails = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=228814320f157771c719d14dab842e9e`)
  .then((response) => response.json()
    .then((res) => res));
