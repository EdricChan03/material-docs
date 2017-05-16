import { Material2DocsPage } from './app.po';

describe('material2-docs App', () => {
  let page: Material2DocsPage;

  beforeEach(() => {
    page = new Material2DocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
