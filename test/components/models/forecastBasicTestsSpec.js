define(['forecast','jquery'], function (forecast,$) {


  describe('forecast Vendor basic tests', function () {
    var forecastVendor;
    beforeAll(function () {
      forecastVendor = forecast;
    })
    it('Vendor should be an singletone', function () {
      expect(forecastVendor).toEqual(forecast)
    });
    it('all methods should be functions', function () {
      expect(typeof forecastVendor.GetInfo).toEqual('function');
      expect(typeof forecastVendor.forecastVendorGenerateNeededData).toEqual('function');
      expect(typeof forecastVendor.currentForecastVendor).toEqual('function');
      expect(typeof forecastVendor.windBearingLetter).toEqual('function');
      expect(typeof forecastVendor.temperatureToCelciusAndForenheitsForecastVendor).toEqual('function');
      expect(typeof forecastVendor.weatherIconToNormalForecastVendor).toEqual('function');
      expect(typeof forecastVendor.sunRiseOrSunSetForecastVendor).toEqual('function');
      expect(typeof forecastVendor.dailyInformationToNeededForecastVendor).toEqual('function');
      expect(typeof forecastVendor.oneDayInfoForecastVendor).toEqual('function');
      expect(typeof forecastVendor.hourlyInformationToNeededForecastVendor).toEqual('function');
      expect(typeof forecastVendor.oneHourInfoForecastVendor).toEqual('function');
    });
    it('Should return right WindDirrection ', function () {
      expect(forecastVendor.windBearingLetter(34)).toEqual('N/E');
      expect(forecastVendor.windBearingLetter(12)).toEqual('N');
      expect(forecastVendor.windBearingLetter(176)).toEqual('S');
      expect(forecastVendor.windBearingLetter(195)).toEqual('S');
      expect(forecastVendor.windBearingLetter(340)).toEqual('N/W');
      expect(forecastVendor.windBearingLetter(268)).toEqual('W');
      expect(forecastVendor.windBearingLetter(301)).toEqual('N/W');
      expect(forecastVendor.windBearingLetter(208)).toEqual('S/W');
      expect(forecastVendor.windBearingLetter(130)).toEqual('S/E');
      expect(forecastVendor.windBearingLetter(100)).toEqual('E');
      expect(forecastVendor.windBearingLetter(99)).toEqual('E');
      expect(forecastVendor.windBearingLetter(67)).toEqual('N/E');
      expect(forecastVendor.windBearingLetter(0)).toEqual('N');
      expect(forecastVendor.windBearingLetter(265)).toEqual('W');
      expect(forecastVendor.windBearingLetter(255)).toEqual('S/W');
    });
    it('Should return right moon-icon ', function () {
      expect(forecastVendor.moonPhaseIco(0.12)).toEqual('empty-moon');
      expect(forecastVendor.moonPhaseIco(0.18)).toEqual('grow-moon');
      expect(forecastVendor.moonPhaseIco(0.36)).toEqual('almost-full');
      expect(forecastVendor.moonPhaseIco(0.5)).toEqual('full-moon');
      expect(forecastVendor.moonPhaseIco(0.66)).toEqual('almost-old');
      expect(forecastVendor.moonPhaseIco(0.9)).toEqual('old-moon');
    });
    it('Should return promise ', function () {
      expect(typeof forecastVendor.GetInfo(50.937531, 6.960278600000038)).toEqual('object');
    });
    it('JSON spy ', function () {
      spyOn($, 'getJSON').and.callFake(function () {
        return 1001;
      });
      forecastVendor.GetInfo(50.937531, 6.960278600000038);
      expect($.getJSON).toHaveBeenCalled();
    });
    it("tests getJSON call", function () {
      spyOn($, 'getJSON').and.callFake(function (url, success) {
        success({
          "nine": 9
        });
        return {
          fail: function() {}
        }
      });
      forecastVendor.GetInfo(50.937531, 6.960278600000038);
    });
  });


});










