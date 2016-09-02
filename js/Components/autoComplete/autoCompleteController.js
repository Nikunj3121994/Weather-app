define(
  [
    'GallaryController'
  ], function (GallaryController) {
    var AutoCompleteController = function () {
      if (AutoCompleteController.instance) {
        return AutoCompleteController.instance;
      }
      AutoCompleteController.instance = this;
    };

    AutoCompleteController.prototype.getChooses = function (lat, lng, cityName, vendor) {
      this.sendChooses(lat, lng, cityName, vendor);
    };
    AutoCompleteController.prototype.sendChooses = function (lat, lng, cityName, vendor) {
      GallaryController.cityAdding(lat, lng, cityName, vendor);
    };

    return new AutoCompleteController();
  });
