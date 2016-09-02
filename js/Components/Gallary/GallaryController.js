define(
  [
    'cityController',
    'cityCollectionController',
    'settingsController',
    'swiperInit',
    'scrollers',
    'GarbageView',
    'pubsub'
  ], function (cityController, collectionController, settingsController, swiperInit, scrollBar, GarbageView, PubSub) {
    var swiper = swiperInit();
    var GallaryController = function () {
      if (GallaryController.instance) {
        return GallaryController.instance;
      }
      GallaryController.instance = this;
    };

    GallaryController.prototype.renderGallary = function () {
      var collection = collectionController.getCollection();
      collection.forEach(function (city) {
        swiper.appendSlide(cityController.renderCity(city));
      });
      settingsController.weekWeather();
      scrollBar();
      collectionController.renderCollection();
      PubSub.publish('changeType', null);
    };

    GallaryController.prototype.cityAdding = function (lat, lng, cityName, vendor) {
      cityController.saveCityToModel(lat, lng, cityName, vendor);
      collectionController.addToCollection(cityName);
      function waiting() {
        var city = cityController.getCity(cityName);
        swiper.appendSlide(cityController.renderCity(city));
        collectionController.renderCollection();
        settingsController.weekWeather();
        scrollBar();
        PubSub.publish('changeType', null);
      }

      setTimeout(waiting, 1500);
    };

    GallaryController.prototype.deleting = function () {
      var gc = new GallaryController();
      var indexes = GarbageView.findIndexesToDelete();
      var citiesToDelete = GarbageView.findCitiesToDelete();
      var citiesList = document.querySelector('.places-list');
      var list = citiesList.querySelector('.mCSB_container');
      var sities = list.querySelectorAll('.place');
      if (indexes.length > 0) {
        gc.removeCity(indexes);
        collectionController.deleteFromCollection(citiesToDelete);
        indexes.forEach(function (index) {
          list.removeChild(sities[index]);
        });
      }
    };

    GallaryController.prototype.addGarbageListner = function () {
      var that = this;
      $('.icon-delete').on('click', that.deleting);
    };

    GallaryController.prototype.removeCity = function (array) {
      swiper.removeSlide(array);
    };

    GallaryController.prototype.updateGallaryData = function () {
      var collection = collectionController.getCollection();
      var contr = GallaryController();
      $('.swiper-pagination').css({opacity: 0});
      var refr = $('<span></span>').addClass('icon icon-refresh load');
      collection.forEach(function (city) {
        var lat = city.lat;
        var lng = city.lng;
        var name = city.cityName;
        var vendor = city.vendor;
        cityController.updateInfo(lat, lng, name, vendor);
      });
      swiper.removeAllSlides();
      $('#app').append(refr);
      setTimeout(contr.renderGallary, 1500);
      setTimeout(function () {
        $('.swiper-pagination').css({opacity: 1});
        $('#app').find(refr).remove();
      }, 1500);
    };


    GallaryController.prototype.moveToSlide = function (event) {
      var places = $('.place');
      if ($(event.target).hasClass('.custom-checkbox') || $(event.target).hasClass('check-icon')) {
        return true;
      }
      if (places.index($(event.target).parents('.place')) === -1) {
        swiper.slideTo(places.index($(event.target)));
      } else {
        swiper.slideTo(places.index($(event.target).parents('.place')));
      }
    };

    GallaryController.prototype.interval = null;

    function reload(event, minutes) {
      var gC = new GallaryController();
      var interval = gC.interval;
      var goTo;
      if (typeof interval === 'number') {
        gC.interval = interval;
        clearInterval(interval);
      }
      goTo = minutes * 60 * 1000;
      gC.interval = setInterval(gC.updateGallaryData, goTo);
    }

    GallaryController.prototype.sortGallary = function () {
      swiper.removeAllSlides();
      this.renderGallary();
    };

    PubSub.subscribe('CollectionHaveBeenSorted', function () {
      var gallary = new GallaryController();
      gallary.sortGallary();
    });

    PubSub.subscribe('reloadTime', reload);

    return new GallaryController();
  });
