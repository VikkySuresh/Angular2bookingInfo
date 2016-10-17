
describe('checkin Application E2E Tests', function () {

 beforeEach(function () {
    browser.get('');
  });

  it('should display', function () {
    expect(element(by.id('retrieve_booking')).isEnabled()).toBe(false);
  });

});
