define(function () {
  var BackgroundChangingView = function () {
    var elemPerent = document.querySelector('.swiper-slide-active');
    var weatherAnimation = document.querySelector('.animation');
    var findWeatherParent = elemPerent.querySelector('.current-weather-js');
    var currentMiddleTemperature = elemPerent.querySelector('.today-temerature');
    var temperature;
    var body = document.body;

    function findMiddleTemperature() {
      temperature = +currentMiddleTemperature.innerText.slice(0, 2);
      if (temperature > 12) {
        return '-hot';
      } else {
        return '-cold';
      }
    }

    function findTime() {
      var timeChild = elemPerent.querySelector('.last-update-time');
      var time = +timeChild.innerText.trim().split(':')[0];
      return time;
    }

    function findSunSetTime() {
      return +elemPerent.querySelector('.sunset-time').innerText.trim().split(':')[0];
    }

    function findSunRiseTime() {
      return +elemPerent.querySelector('.sunrise-time').innerText.trim().split(':')[0];
    }

    function timeChecking(time, temperature) {
      var sunrise = findSunRiseTime();
      var sunset = findSunSetTime();
      if (time > 6 && time <= 10) {
        body.className = 'morning' + temperature;
      } else if (time > 10 && time < 18) {
        body.className = 'day' + temperature;
      } else if (time >= 18 && time < 22) {
        body.className = 'sunset' + temperature;
      } else if (time >= sunset || time <= sunrise) {
        body.className = 'night';
      }
    }

    function findWeather() {
      var iconWeather = findWeatherParent.attributes.data.value.replace('-', '');
      return iconWeather;
    }

    function sleetrainWeatherAnimation() {
      weatherAnimation.className = 'animation rain';
    }

    function snowWeatherAnimation() {
      weatherAnimation.className = 'animation snow';
    }

    function cloudWeatherAnimation() {
      weatherAnimation.className = 'animation cloud';
    }

    function weatherToNothing() {
      weatherAnimation.className = 'animation nothing';
    }

    function anyWeather(weather) {
      if (!this[weather]) {
        this.nothing();
      } else {
        this[weather]();
      }
    }

    function changeBackground() {
      var currentCityTime = findTime();
      var temperature = findMiddleTemperature();
      timeChecking(currentCityTime, temperature);
    }

    return {
      findTime: findTime,
      timeChecking: timeChecking,
      findWeather: findWeather,
      rain: sleetrainWeatherAnimation,
      sleetrain: sleetrainWeatherAnimation,
      nothing: weatherToNothing,
      snow: snowWeatherAnimation,
      fog: cloudWeatherAnimation,
      anyWeather: anyWeather,
      findMiddleTemperature: findMiddleTemperature,
      changeBackground: changeBackground
    };
  };

  return BackgroundChangingView;
});
