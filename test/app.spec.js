import app from '../src/components/app';

describe('app', () => {
  it('Should create a div element with the correct innerHTML', () => {
    const appElement = app();
    expect(appElement.tagName).toBe('DIV');
    expect(appElement.innerHTML).toContain('<h1>MOVIE CHALLENGE</h1>');
    expect(appElement.innerHTML).toContain('<h3>Millones de películas, en la palma de tu mano. Explora ahora.</h3>');
  });
});
