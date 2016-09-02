define(
  [
    'jquery',
    'pubsub'
  ], function ($, PubSub) {
  var ChangingTypeOfTemperature = (function () {
    var regExp = /\d+/gm;
    function changeTemp(type) {
      $('[data-celcius]').each(function (iter, item) {
        var toNeed = $(item).html().replace(regExp, $(item).data(type));
        $(item).html(toNeed);
      });
    }
    function changeTo(msg, toChange) {
      var type = toChange || localStorage.getItem('tempType') || 'celcius';
      localStorage.setItem('tempType', type);
      changeTemp(type);
    }
    return {
      changeTo: changeTo
    };
  })();

    PubSub.subscribe('changeType', ChangingTypeOfTemperature.changeTo);

    return ChangingTypeOfTemperature;
});
