define(
  [
    'jquery'
  ], function ($) {
    function showDays(quantity) {
      var weekWeather = $('.week-weather-container');
      var daysShow;
      var day;
      var slide;
      for (slide = 0; slide < weekWeather.length; slide++) {
        daysShow = $(weekWeather[slide]).find('.week-weather-day');
        for (day = 0; day < 7; day++) {
          $(daysShow[day]).addClass('week-weather-day hidden');
        }
      }
      for (slide = 0; slide < weekWeather.length; slide++) {
        daysShow = $(weekWeather[slide]).find('.week-weather-day');
        for (day = 0; day < quantity; day++) {
          $(daysShow[day]).removeClass('hidden');
        }
      }
    }

    return showDays;
  });
