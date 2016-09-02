define(
  [
    'lodash',
    'text!slideHTML'
  ], function (_, slideHMTL) {
    var template = _.template(slideHMTL);

    function renderSlide(obj) {
      return template(obj);
    }

    return {
      renderSlide: renderSlide
    };
  });
