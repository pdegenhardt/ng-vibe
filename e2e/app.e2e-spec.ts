import { NgVibePage } from './app.po';

describe('ng-vibe App', () => {
  let page: NgVibePage;

  beforeEach(() => {
    page = new NgVibePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
