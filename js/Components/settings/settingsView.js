/* globals $ */
define(
  [
    'settingsController',
    'weekWeatherView',
    'TypeOfTemperatureView',
    'pubsub',
    'jqueryUI'
  ], function (controller, weekWeatherView, TypeOfTemperatureView, PubSub) {
    function init() {
      var celsius = $('.celsius');
      var forenheits = $('.forenheits');

      celsius.on('click', function () {
        PubSub.publish('changeType', 'celcius');
      });
      forenheits.on('click', function () {
        PubSub.publish('changeType', 'forenheit');
      });

      $(document).ready(function () {
        $('.slider-minutes').slider({
          range: 'max',
          min: 15,
          max: 60,
          value: controller.giveMinutes(),
          step: 15,
          slide: function (event, ui) {
            $(this).parents('.bar').find('input').val(ui.value + 'min');
            controller.setMinutes(ui.value);
          }
        });
        $('#minutes').val($('.slider-minutes').slider('value') + ' min');
//View Days
        $('.slider-days').slider({
          range: 'max',
          min: 1,
          max: 7,
          value: controller.giveDays(),
          step: 1,
          slide: function (event, ui) {
            $(this).parents('.bar').find('input').val(ui.value + 'days');
            controller.setDays(ui.value);
            weekWeatherView(ui.value);
          }
        });
        $('#days').val($('.slider-days').slider('value') + ' days');
      });
    }

    return init;

  });
