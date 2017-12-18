import { AngFormTemplateAppPage } from './app.po';

describe('ang-form-template-app App', () => {
  let page: AngFormTemplateAppPage;

  beforeEach(() => {
    page = new AngFormTemplateAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
