define(
  [
    'lodash',
    'text!sidebarHTML',
    'jquery',
    'jqueryUI'
  ], function (_, sidebarHTML, $) {
  function render() {
    var sidebar  = $('.sidebar');
    var templ = _.template(sidebarHTML)({});
    sidebar.html(templ);

    sidebar.find('.menu').click(function () {
      $(this).toggleClass('active');
      sidebar.toggleClass('open');
    });

    sidebar.find('.btn-add').click(function () {
      $(this).toggleClass('red');
      sidebar.find('.pac-container').toggleClass('hide');
      sidebar.find('#autocomplete').trigger('focus');
      sidebar.find('.search').toggleClass('visible');
    });

    sidebar.find('.icon-delete').click(function () {
      $(this).toggleClass('red');
      sidebar.find('.checkbox-area').toggleClass('show-checkbox');
    });

    sidebar.find('.icon-settings').click(function () {
      $(this).toggleClass('clecked');
    });
  }

  return render;
});
