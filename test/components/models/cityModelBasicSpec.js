define(['cityModel'], function (CityModel) {

  describe('cityModel basic tests', function () {
    var cityModel;
    beforeAll(function () {
      cityModel = CityModel;
    });

    it('cityModel should be an singletone', function () {
      expect(cityModel).toEqual(CityModel);
    });

    it('all methods should be functions', function () {
      expect(typeof cityModel.saveCity).toEqual('function');
      expect(typeof cityModel.getCity).toEqual('function');
      expect(typeof cityModel.updateData).toEqual('function');
    });

    it('saveCity should throw an error', function () {
      expect(function () {
        cityModel.saveCity(5, 5, 'test', 'test');
      }).toThrowError('There is no Vendor like :test');
    });

    it('saveCity should not to throw an error', function () {
      expect(function () {
        cityModel.saveCity(49.9935, 36.230383000000074, 'test', 'forecast');
      }).not.toThrowError();
    });

    it('getCity should return object', function () {
      expect(typeof cityModel.getCity('Kharkiv ')).toEqual('object');
    });

    it('updateData should call saveCity', function () {
      spyOn(cityModel, 'saveCity');
      cityModel.updateData(49.9935, 36.230383000000074, 'test', 'forecast');
      expect(cityModel.saveCity).toHaveBeenCalled();
    });
  });

});





