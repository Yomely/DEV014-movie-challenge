function connectApi() {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=228814320f157771c719d14dab842e9e`)
        .then((response) => {

            return response.json().then(res => {
                console.log(res.results)
                return res.results
            })

        });
}
export default connectApi;
