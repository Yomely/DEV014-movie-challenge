export default () => {
    const appElement = document.createElement('div');
    const template = `
    <h1>MOVIE CHALLENGE</h1>
    <h3>Millones de películas, en la palma de tu mano. Explora ahora.</h3>
    `;

    appElement.innerHTML = template;

    return appElement;
}