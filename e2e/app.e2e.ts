import { ThoughtramDemosPage } from './app.po';

describe('thoughtram-demos App', function() {
  let page: ThoughtramDemosPage;

  beforeEach(() => {
    page = new ThoughtramDemosPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('thoughtram-demos works!');
  });
});
