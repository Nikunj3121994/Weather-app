define(function () {
  var TimeCalculator = function () {
    var elemPerent = document.querySelector('.swiper-slide-active');

    function findCurrentTime() {
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

    function timeCoefficient() {
      return (findCurrentTime() - findSunRiseTime()) / (findSunSetTime() - findSunRiseTime());
    }

    function previousTimeChecking(previousTime) {
      if (previousTime > 1 || previousTime < 0) {
        return 0;
      }
      return previousTime;
    }

    function currentTimeChecking(previousTime, currentTime) {
      if (previousTime === 0 && currentTime < 0 || previousTime === 0 && currentTime > 1) {
        return 0;
      }
      return currentTime;
    }
    return {
      currentTime : findCurrentTime,
      sunSetTime : findSunSetTime,
      sunRiseTime : findSunRiseTime,
      timeCoefficient : timeCoefficient,
      previousTimeChecking : previousTimeChecking,
      currentTimeChecking : currentTimeChecking
    };
  };
  return TimeCalculator;
});
