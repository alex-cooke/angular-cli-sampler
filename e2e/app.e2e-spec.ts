import { AngularCliSamplerPage } from './app.po';

describe('angular-cli-sampler App', () => {
  let page: AngularCliSamplerPage;

  beforeEach(() => {
    page = new AngularCliSamplerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Welcome to Angular CLI Sampler');
  });
});
