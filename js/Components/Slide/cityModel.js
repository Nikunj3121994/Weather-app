define(
  [
    'anyVendor',
    'promise'
  ],
  function (anyVendor) {
    var CityModel = function () {
      if (CityModel.instance) {
        return CityModel.instance;
      }
      CityModel.instance = this;
    };

    CityModel.prototype.saveCity = function (lat, lng, cityName, vendor) {
      if (anyVendor[vendor]) {
        var weather;
        anyVendor[vendor].GetInfo(lat, lng, cityName).then(function (data) {
          weather = anyVendor[vendor][vendor + 'VendorGenerateNeededData'](data, cityName);
          localStorage.setItem(cityName, JSON.stringify(weather));
        });
        return true;
      } else {
        throw new Error('There is no Vendor like :' + vendor);
      }
    };

    CityModel.prototype.getCity = function (cityName) {
      return JSON.parse(localStorage.getItem(cityName));
    };

    CityModel.prototype.updateData = function (lat, lng, cityName, vendor) {
      this.saveCity(lat, lng, cityName, vendor);
    };

    return new CityModel();
  });
