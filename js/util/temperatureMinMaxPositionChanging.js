define(function () {
  var temperatureMinMaxRangerPosition = function (slideSelector) {
    var slide =  document.querySelector(slideSelector);
    var temperatureMin = slide.querySelectorAll('.temperature_min');
    var temperatureMax = slide.querySelectorAll('.temperature_max');
    var rangersArray = slide.querySelectorAll('.ranger-block');
    var minTemp;
    var maxTemp;
    var difference;

    minTemp = Array.prototype.map.call(temperatureMin, function (dayMinTemp) {
      return parseInt(dayMinTemp.innerText);
    }).sort(function (a, b) {
      return a - b;
    })[0];

    maxTemp = Array.prototype.map.call(temperatureMax, function (dayMinTemp) {
      return parseInt(dayMinTemp.innerText);
    }).sort(function (a, b) {
      return a - b;
    })[temperatureMax.length - 1];

    difference = maxTemp - minTemp;
    if (difference < 14) {
      difference = 14;
    }

    Array.prototype.forEach.call(rangersArray, function (ranger, index) {
      var s = ((parseInt(temperatureMin[index].innerText, 10) - minTemp) / difference) * 60;
      var o = ((parseInt(temperatureMax[index].innerText, 10) - minTemp) / difference) * 60;
      ranger.style.left = s + '%';
      ranger.style.right = o + '%';
    });
  };

  return temperatureMinMaxRangerPosition;
});
