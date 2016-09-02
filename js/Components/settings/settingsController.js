define(
  [
    'settingsModel',
    'weekWeatherView',
    'pubsub'
  ], function (model, weekWeatherView, PubSub) {
    var ControllerSettings = function () {
      if (ControllerSettings.instance) {
        return ControllerSettings.instance;
      }
      ControllerSettings.instance = this;
    };

    ControllerSettings.prototype.giveDays = function () {
      return model.getDaysQuantity();
    };

    ControllerSettings.prototype.setDays = function (qtn) {
      model.setDaysQuantity(qtn);
    };

    ControllerSettings.prototype.giveMinutes = function () {
      return model.getMinutesQuantity();
    };

    ControllerSettings.prototype.setMinutes = function (qtn) {
      model.setMinutesQuantity(qtn);
      PubSub.publish('reloadTime', qtn);
    };

    ControllerSettings.prototype.weekWeather = function () {
      weekWeatherView(model.getDaysQuantity());
    };

    return new ControllerSettings();
  });
