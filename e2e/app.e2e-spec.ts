import { BeetrootTestPage } from './app.po';

describe('beetroot-test App', () => {
  let page: BeetrootTestPage;

  beforeEach(() => {
    page = new BeetrootTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
