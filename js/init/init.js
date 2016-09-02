define(
  [
    'emptyPageView',
    'sidebarView',
    'settingsView',
    'autoCompleteView',
    'swiperInit',
    'GallaryController',
    'bgAndSun',
    'dragNdrop',
    'funMode/weather-app-additional-mode',

  ],
  function (emptyPageView, sideBarView, settingsView, autoCompleteView, swiper, GallaryController, bgAndSun, dragNdrop) {
    sideBarView();
    settingsView();
    autoCompleteView();
    GallaryController.updateGallaryData();
    GallaryController.addGarbageListner();
    $('#app').on('click', '.icon-refresh', GallaryController.updateGallaryData);
    $('#place-view').on('click', GallaryController.moveToSlide);
    setTimeout(bgAndSun, 1500);
    setTimeout(dragNdrop, 1500);
  });
