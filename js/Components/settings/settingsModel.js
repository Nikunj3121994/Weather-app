define(function () {
  var ModelSettings = function () {
    if (ModelSettings.instance) {
      return ModelSettings.instance;
    }
    ModelSettings.instance = this;
  };

  ModelSettings.prototype.daysQuantity = localStorage.getItem('daysquantity') || 1;
  ModelSettings.prototype.minutesQuantity = localStorage.getItem('minutesquantity') || 30;

  ModelSettings.prototype.setDaysQuantity = function (quantity) {
    localStorage.setItem('daysquantity', quantity);
    this.daysQuantity = +localStorage.getItem('daysquantity');
  };

  ModelSettings.prototype.getDaysQuantity = function () {
    return this.daysQuantity;
  };

  ModelSettings.prototype.setMinutesQuantity = function (quantity) {
    localStorage.setItem('minutesquantity', quantity);
    this.daysQuantity = +localStorage.getItem('minutesquantity');
  };

  ModelSettings.prototype.getMinutesQuantity = function () {
    return this.minutesQuantity;
  };


  return new ModelSettings();
});
