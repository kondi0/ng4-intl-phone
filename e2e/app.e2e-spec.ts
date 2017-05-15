import { PruebaPage } from './app.po';

describe('prueba App', () => {
  let page: PruebaPage;

  beforeEach(() => {
    page = new PruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
