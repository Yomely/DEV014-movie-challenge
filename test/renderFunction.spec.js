/* eslint-disable no-undef */
import { renderItems } from '../src/components/renderFunction.js';
import fakeData from './mockData.js';

describe('renderItems', () => {
  let root;
  beforeEach(() => {
    document.body.innerHTML += '<div id="app"> </div>';
    root = document.querySelector('#app');
    root.appendChild(renderItems(fakeData));
  });

  // sobre  root escribir una prueba que combruebe que hay 3 li en el componente
  // ecribir tu test
  // hacer una variable que tennga un query selector all
  // hacer una asercion de que su logitud sea 3
  // Matchers, al proposito de los test, el patron AAA en test

  it('Should show there are 3 movies like length', () => {
    const liElements = document.querySelectorAll('li');
    expect(liElements.length).toBe(3);
  });

  it('Should take a picture 3 movies', () => {
    expect(root).toMatchSnapshot();
  });
});
