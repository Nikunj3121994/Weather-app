define(
  [
    'jquery',
    'scrollBar'
  ],
  function ($) {
    function scroll() {
      $('.places-list').mCustomScrollbar({
        axis: 'y',
        theme: 'dark'
      });

      $('.weather-today-container').mCustomScrollbar({
        axis: 'x',
        theme: 'dark'
      });

    }

    return scroll;
  });
