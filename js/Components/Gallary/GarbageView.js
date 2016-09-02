define(function () {
  var Garbage = function () {
    if (Garbage.instance) {
      return Garbage.instance;
    }
    Garbage.instance = this;
  };


  Garbage.prototype.findCitiesToDelete = function () {
    var sidebar = document.querySelector('.sidebar');
    var citiesList = sidebar.querySelector('.places-list');
    var cheboxes = citiesList.querySelectorAll('.checkbox-place');
    var sities = sidebar.querySelectorAll('.place');
    var cityToDelte;
    return Array.prototype.map.call(cheboxes, function (checkbox, index) {
      if (checkbox.checked) {
        cityToDelte = sities[index].querySelector('.city-name').innerText;
        return cityToDelte;
      }
    }).filter(function (val) {
      return val;
    });
  };

  Garbage.prototype.findIndexesToDelete = function () {
    var sidebar = document.querySelector('.sidebar');
    var citiesList = sidebar.querySelector('.places-list');
    var cheboxes = citiesList.querySelectorAll('.checkbox-place');
    return Array.prototype.map.call(cheboxes, function (checkbox, index) {
      if (checkbox.checked) {
        return index;
      }
    }).filter(function (val) {
      return typeof val === 'number';
    });
  };


  return new Garbage();
});
