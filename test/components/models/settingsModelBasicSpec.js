define(['settingsModel'], function (settingsModel) {
  describe('Settings basic tests', function () {
    var settings;
    beforeAll(function () {
      settings = settingsModel;

    });
    it('cityModel should be an singletone', function () {
      expect(settings).toEqual(settingsModel);
    });
    it('all methods should be functions', function () {
      expect(typeof settings.setDaysQuantity).toEqual('function');
      expect(typeof settings.getDaysQuantity).toEqual('function');
      expect(typeof settings.setMinutesQuantity).toEqual('function');
      expect(typeof settings.getMinutesQuantity).toEqual('function');
    });
    it('setDaysQuantity should save days number to LS', function () {
      settings.setDaysQuantity(4);
      expect(settings.daysQuantity).toEqual(4);
    });
    it('getDaysQuantity should return days number ', function () {
      expect(settings.getDaysQuantity()).toEqual(4);
    });
    it('setMinutesQuantity should save minutes number to LS', function () {
      settings.setMinutesQuantity(30);
      expect(+settings.minutesQuantity).toEqual(30);
    });
    it('getMinutesQuantity should return minutes number ', function () {
      expect(+settings.getMinutesQuantity()).toEqual(30);
    });
  });

});





