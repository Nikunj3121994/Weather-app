define(
  [
    'backgroundChanging',
    'sunAnimation',
    'temperatureMinMaxPositionChanging'
  ], function (backgroundChanging, sunAnimation, temperatureMinMaxPositionChanging) {
    function showBgSun(val) {
      var back = new backgroundChanging();
      sunAnimation(val);
      var weather = back.findWeather();
      back.changeBackground();
      back.anyWeather(weather);
      temperatureMinMaxPositionChanging('.swiper-slide-active');
    }

    return showBgSun;
  });
