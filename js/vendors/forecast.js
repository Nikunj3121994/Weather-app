define(
  [
    'jquery',
    'promise'
  ],
  function ($, Q) {
    var forecast = function () {
      if (forecast.instance) {
        return forecast.instance;
      }
      forecast.instance = this;
    };


    forecast.prototype.GetInfo = function (lat, lng) {
      return Q.promise(function (resolve) {
        $.getJSON('https://api.forecast.io/forecast/7f115475461c1e5ff7c0c1c3882f7ae4/' + lat + ',' + lng + '?callback=?', function (data1) {
          resolve(data1);
        });
      });
    };

    forecast.prototype.forecastVendorGenerateNeededData = function (obj, city) {
      var weather = {
        vendor: 'forecast',
        offset: obj.offset,
        lat: obj.latitude,
        lng: obj.longitude,
        cityName: city,
        current: obj.currently,
        daily: obj.daily.data.slice(0, -1),
        hourly: obj.hourly.data.slice(0, 25)
      };
      this.currentForecastVendor(weather);

      this.temperatureToCelciusAndForenheitsForecastVendor([weather.current]);
      this.sunRiseOrSunSetForecastVendor(weather.current, weather.daily[0].sunriseTime, 'sunrise', weather.offset);
      this.sunRiseOrSunSetForecastVendor(weather.current, weather.daily[0].sunsetTime, 'sunset', weather.offset);
      weather.daily = this.dailyInformationToNeededForecastVendor(weather.daily);
      weather.hourly = this.hourlyInformationToNeededForecastVendor(weather.hourly);
      return weather;
    };

    forecast.prototype.currentForecastVendor = function (obj) {
      var fullNamesOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var shortNamesOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      var Monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
      var time = new Date(obj.current.time * 1000);
      obj.current = {
        humidity: Math.floor(+obj.current.humidity * 100),
        icon: this.weatherIconToNormalForecastVendor(obj.current.icon),
        temperature: obj.current.temperature,
        time: obj.current.time,
        windBearing: obj.current.windBearing,
        windSpeed: Math.floor(+obj.current.windSpeed),
        moonPhase: obj.daily[0].moonPhase,
        sunrise: obj.daily[0].moonPhase,
        timeInHour: this.getUTCTime(obj.current.time * 1000, obj.offset),
        minutes: time.getMinutes().toString().length === 1 ? '0' + time.getMinutes().toString() : time.getMinutes(),
        month: Monthes[time.getMonth()],
        date: time.getDate(),
        fullDay: fullNamesOfWeek[time.getDay()],
        shortDay: shortNamesOfWeek[time.getDay()],
        summary: obj.current.summary,
        windBearingLetter: this.windBearingLetter(obj.current.windBearing),
        moonPhaseIcon: this.moonPhaseIco(obj.daily[0].moonPhase)
      };
    };

    forecast.prototype.getUTCTime = function (timestamp, offset) {
      var d = new Date(timestamp);
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      var nd = new Date(utc + (3600000 * offset));
      return nd.getHours();
    };
    forecast.prototype.moonPhaseIco = function (moon) {
      if (moon <= 0.16) {
        return 'empty-moon';
      } else if (moon > 0.16 && moon <= 0.32) {
        return 'grow-moon';
      } else if (moon > 0.32 && moon <= 0.48) {
        return 'almost-full';
      } else if (moon > 0.48 && moon <= 0.64) {
        return 'full-moon';
      } else if (moon > 0.64 && moon <= 0.8) {
        return 'almost-old';
      } else if (moon > 0.8) {
        return 'old-moon';
      }
    };
    forecast.prototype.windBearingLetter = function (windBearing) {
      if (windBearing >= 345 || windBearing <= 30) {
        return 'N';
      } else if (windBearing > 30 && windBearing <= 75) {
        return 'N/E';
      } else if (windBearing > 75 && windBearing <= 105) {
        return 'E';
      } else if (windBearing > 105 && windBearing <= 165) {
        return 'S/E';
      } else if (windBearing > 165 && windBearing <= 195) {
        return 'S';
      } else if (windBearing > 195 && windBearing <= 255) {
        return 'S/W';
      } else if (windBearing > 255 && windBearing <= 285) {
        return 'W';
      } else if (windBearing > 285 && windBearing < 345) {
        return 'N/W';
      }
    };

    forecast.prototype.temperatureToCelciusAndForenheitsForecastVendor = function (array) {
      array.forEach(function (hour) {
        hour.temperatureCelcius = Math.floor(((+hour.temperature - 32) / 2) * 1.1);
        hour.temperatureForenheits = Math.floor(+hour.temperature);
      });
    };

    forecast.prototype.weatherIconToNormalForecastVendor = function (str) {
      var regexp = /\-(day|night)/gim;
      return str.replace(regexp, '');
    };

    forecast.prototype.sunRiseOrSunSetForecastVendor = function (obj, timeStemp, typeForTime, offset) {
      var date = new Date(timeStemp * 1000);
      obj[typeForTime + 'Minutes'] = date.getMinutes();
      if (date.getMinutes().toString().length === 1) {
        obj[typeForTime + 'Minutes'] = '0' + date.getMinutes().toString();
      }
      obj[typeForTime + 'Hours'] = this.getUTCTime(timeStemp * 1000, offset);
    };

    forecast.prototype.dailyInformationToNeededForecastVendor = function (array) {
      var that = this;
      return array.map(function (day, index) {
        return that.oneDayInfoForecastVendor(day, index);
      });
    };

    forecast.prototype.oneDayInfoForecastVendor = function (day, index) {
      var shortNamesOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      var time = new Date(day.time * 1000);
      day = {
        today: shortNamesOfWeek[time.getDay()],
        icon: this.weatherIconToNormalForecastVendor(day.icon),
        temperatureCelciusMax: Math.floor(((+day.temperatureMax - 32) / 2) * 1.1),
        temperatureForenheitsMax: Math.floor(+day.temperatureMax),
        temperatureCelciusMin: Math.floor(((+day.temperatureMin - 32) / 2) * 1.1),
        temperatureForenheitsMin: Math.floor(+day.temperatureMin)
      };
      if (index === 0) {
        day.today = 'today';
      }
      return day;
    };

    forecast.prototype.hourlyInformationToNeededForecastVendor = function (array) {
      var that = this;
      return array.map(function (hour) {
        return that.oneHourInfoForecastVendor(hour);
      });
    };

    forecast.prototype.oneHourInfoForecastVendor = function (hour) {
      var time = new Date(hour.time * 1000);
      var hourNeeded = {
        icon: this.weatherIconToNormalForecastVendor(hour.icon),
        timeInHour: time.getHours(),
        temperatureCelcius: Math.floor(((+hour.temperature - 32) / 2) * 1.1),
        temperatureForenheits: Math.floor(+hour.temperature)
      };
      return hourNeeded;
    };

    return new forecast();
  });
