export class ThoughtramDemosPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('thoughtram-demos-app h1')).getText();
  }
}
