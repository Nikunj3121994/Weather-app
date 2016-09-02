define(
  [
    'lodash',
    'text!collectionHTML'
  ], function (_, cityPlaceHTML) {
    function renderCity(city) {
      return _.template(cityPlaceHTML)(city);
    }

    return { renderCity : renderCity };
  });
