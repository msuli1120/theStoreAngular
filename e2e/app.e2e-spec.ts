import { TheStorePage } from './app.po';

describe('the-store App', () => {
  let page: TheStorePage;

  beforeEach(() => {
    page = new TheStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
