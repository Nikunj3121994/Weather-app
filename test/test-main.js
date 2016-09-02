var TEST_REGEXP = /(spec|test)\.js$/i;
var tests = [];

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    tests.push(normalizedTestModule);
  }
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: 'base/',

  paths: {
    jquery: 'js/libs/jquery',
    jqueryui: 'js/libs/jquery-ui',
    scrollBar: 'js/libs/jquery.mCustomScrollbar',
    swiper: 'js/libs/swiper',
    mouseWheel: 'js/libs/jquery.mousewheel',
    lodash: 'js/libs/lodash.min',
    pubsub: 'js/libs/pubsub',
    promise: 'js/libs/q',
    text: 'js/libs/text',
    sunController: 'js/components/sun/sunController',
    sun: 'js/helpers/sun',
    backgroundChanging: 'js/util/backgroundChanging',
    bgAndSun: 'js/util/bgAndSun',
    scrollers: 'js/util/scrollBar',
    swiperInit: 'test/mock/swiperMock',
    temperatureMinMaxPositionChanging: 'js/util/temperatureMinMaxPositionChanging',
    anyVendor: 'js/vendors/anyVendor',
    forecast: 'js/vendors/forecast',
    googleVendor: 'test/mock/googleMOCK',
    init: 'js/init/init',
    calculationSun: 'js/Components/Sun/calculationSun',
    sunAnimation: 'js/Components/Sun/sunAnimation',
    timeForSun: 'js/Components/Sun/timeForSun',
    cityController: 'js/Components/Slide/cityController',
    cityModel: 'js/Components/Slide/cityModel',
    cityView: 'js/Components/Slide/slideView',
    slideHTML: 'js/Components/Slide/slide.html',
    sidebarView: 'js/Components/sideBar/sidebarView',
    weekWeatherView : 'js/Components/settings/weekWeatherView',
    settingsController: 'js/Components/settings/settingsController',
    settingsModel: 'js/Components/settings/settingsModel',
    settingsView: 'js/Components/settings/settingsView',
    TypeOfTemperatureView: 'js/Components/settings/TypeOfTemperatureView',
    GallaryController : 'js/Components/Gallary/GallaryController',
    GarbageView : 'js/Components/Gallary/GarbageView',
    emptyPageView : 'js/Components/emptyPage/emptyPageView',
    cityCollectionController : 'js/Components/cityCollection/cityCollectionController',
    collectionModel : 'js/Components/cityCollection/cityCollectionModel',
    collectionView : 'js/Components/cityCollection/cityCollectionView',
    collectionHTML :'js/Components/cityCollection/cityPlaceHTML.html',
    autoCompleteController : 'js/Components/autoComplete/autoCompleteController',
    autoCompleteView : 'js/Components/autoComplete/autoCompleteView',
    autoCompleteHTML: 'js/Components/autoComplete/autocompleteHTML.html',
    fullPageMock : 'test/mock/fullPageMock'
  },
  shim: {
    cityModel : { deps : ['anyVendor'] },
    jqueryUI : { deps : ['jquery'] },
    scrollBar : { deps : ['jquery', 'mouseWheel'] }
  },
  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
