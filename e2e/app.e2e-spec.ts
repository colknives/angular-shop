import { AngularShopPage } from './app.po';

describe('angular-shop App', () => {
  let page: AngularShopPage;

  beforeEach(() => {
    page = new AngularShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
