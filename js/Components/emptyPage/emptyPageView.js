define(
  [
    'lodash',
    'text!emptyPageHTML'
  ], function (_, page) {
     document.getElementById('app').innerHTML = _.template(page)({});
});
