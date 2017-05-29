import { MatesPage } from './app.po';

describe('mates App', () => {
  let page: MatesPage;

  beforeEach(() => {
    page = new MatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
