define(
  [
    'GallaryController',
    'fullPageMock',
    'cityController',
    'cityCollectionController',
    'settingsController',
    'GarbageView',
    'swiperInit',
    'pubsub'
  ], function (GallaryController, fullPageMock, cityController, cityCollectionController, settingsController, GarbageView, swiperInit, PubSub) {
    document.body.insertAdjacentHTML(
      'afterbegin',
      fullPageMock);
    describe('GallaryController ', function () {
      it('should be defined and have needed methods', function () {
        expect(GallaryController).toBeDefined();
        expect(GallaryController.renderGallary).toBeDefined();
        expect(GallaryController.cityAdding).toBeDefined();
        expect(GallaryController.addGarbageListner).toBeDefined();
        expect(GallaryController.removeCity).toBeDefined();
        expect(GallaryController.updateGallaryData).toBeDefined();
        expect(GallaryController.moveToSlide).toBeDefined();
        expect(GallaryController.sortGallary).toBeDefined();
      });
      it('cityAdding should call city controller collection controller and settings', function () {
        spyOn(cityController, 'saveCityToModel');
        spyOn(cityCollectionController, 'addToCollection');
        spyOn(settingsController, 'weekWeather');
        GallaryController.cityAdding();
        expect(cityController.saveCityToModel).toHaveBeenCalled();
        expect(cityCollectionController.addToCollection).toHaveBeenCalled();
      });
      it('addGarbageListner should add listner to btn', function () {
        GallaryController.addGarbageListner();
      });

      it('should remove slides from removeCity', function () {
        var swiper = swiperInit();
        spyOn(swiper, 'removeSlide');
        swiper.removeSlide([1, 2, 3]);
        GallaryController.removeCity ([1, 2, 3]);
        expect(swiper.removeSlide).toHaveBeenCalledWith([1, 2, 3]);
      });

      it('should should move gallary to needed slide', function () {
        GallaryController.moveToSlide({target: 'true'});
      });
      it('should reload all data in interval', function () {
        PubSub.publish('reloadTime', 90000);
      });
      it('delete should delete item from gallary and city list', function () {
        expect(function () { GallaryController.deleting(); }).not.toThrow();
      });
      it('should should update gallary', function () {
        expect(function () { GallaryController.updateGallaryData(); }).not.toThrow();
      });
      it('should reload', function () {
        PubSub.publish('reloadTime', 10);

      })
    });
  });
