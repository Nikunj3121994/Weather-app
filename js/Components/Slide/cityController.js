define(
  [
    'cityModel',
    'cityView'
  ], function (model, slideView) {
    var CityController = function () {
      if (CityController.instance) {
        return CityController.instance;
      }
      CityController.instance = this;
    };

    CityController.prototype.saveCityToModel = function (lat, lng, cityName, vendor) {
      return model.saveCity(lat, lng, cityName, vendor);
    };

    CityController.prototype.getCity = function (cityName) {
      return model.getCity(cityName);
    };

    CityController.prototype.renderCity = function (city) {
      return slideView.renderSlide(city);
    };

    CityController.prototype.updateInfo = function (lat, lng, cityName, vendor) {
      model.updateData(lat, lng, cityName, vendor);
    };

    return new CityController();
  });
