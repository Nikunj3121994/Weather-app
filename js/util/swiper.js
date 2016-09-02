define(
  [
    'swiper',
    'bgAndSun'
  ],
  function (Swiper, bgAndSun) {
    function sw() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        nested: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        keyboardControl: true,
        onSlideChangeEnd: bgAndSun
      });
      return mySwiper;
    }
    return sw;
  });
