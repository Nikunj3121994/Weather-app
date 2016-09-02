define(['cityController', 'cityModel', 'cityView'], function (cityController, cityModel, cityView) {

  describe('cityController basic tests', function () {

    it('should be defined with all needed methods', function () {
      expect(cityController).toBeDefined();
      expect(cityController.saveCityToModel).toBeDefined();
      expect(cityController.getCity).toBeDefined();
      expect(cityController.renderCity).toBeDefined();
      expect(cityController.updateInfo).toBeDefined();
    });

    it('should call model to save city', function () {
      spyOn(cityModel, 'saveCity');
      cityController.saveCityToModel();
      expect(cityModel.saveCity).toHaveBeenCalled();
    });

    it('should call model to get City', function () {
      spyOn(cityModel, 'getCity');
      cityController.getCity();
      expect(cityModel.getCity).toHaveBeenCalled();
    });

    it('should call model to get City and return it', function () {
      var test = cityModel.getCity();
      expect(cityController.getCity()).toEqual(test);
    });

    it('should call model to update city', function () {
      spyOn(cityModel, 'updateData');
      cityController.updateInfo();
      expect(cityModel.updateData).toHaveBeenCalled();
    });

    it('should render city', function () {
      spyOn(cityView, 'renderSlide');
      cityController.renderCity();
      expect(cityView.renderSlide).toHaveBeenCalled();
    });

  });
});
