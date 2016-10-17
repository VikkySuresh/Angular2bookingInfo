
describe('checkin Application E2E Tests', function () {

 beforeEach(function () {
    browser.get('');
  });

  it('should display form with heading checkin', function () {  
      expect(element(by.css('h3')).getText()).toEqual("CHECK-IN");    
  });

it('should display disabled submit button', function () {  
      expect(element(by.className('col-xs-12 retrieve_booking')).isEnabled()).toBe(false);    
  });

it('should display form with two fields', function () {  
    element(By.name('bookingcode')).sendKeys('SJH456');
    element(By.name('familyname')).sendKeys('test');
    expect(element(by.className('col-xs-12 retrieve_booking')).isEnabled()).toBe(true);
  });

  it('should disable submit button ', function () {   
    element(By.name('bookingcode')).sendKeys('');
    element(By.name('familyname')).sendKeys('test');
    expect(element(by.className('col-xs-12 retrieve_booking')).isEnabled()).toBe(false);
  });
});

