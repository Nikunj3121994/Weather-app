define(['calculationSun'], function (calculationSun) {
  describe('calculationSun', function () {
    var calculation;
    beforeAll(function () {
      calculation = new calculationSun();
    })
    it('should be defined', function () {
      expect(calculationSun).toBeDefined();
    });
    it('should be constructor', function () {
      expect(typeof calculation).toEqual('object');
    });
    it('should have methods to calculate radius etc.', function () {
      expect(calculation.radius).toBeDefined();
      expect(calculation.alpha).toBeDefined();
      expect(calculation.gamma).toBeDefined();
      expect(calculation.sigma).toBeDefined();
      expect(calculation.betta).toBeDefined();
      expect(calculation.centerX).toBeDefined();
      expect(calculation.centerY).toBeDefined();
    });

    it('radius should be a number', function () {
      expect(typeof calculation.radius()).toEqual('number');
      expect(calculation.radius() > 0).toEqual(true);
    });

    it('alpha should be a number', function () {
      expect(typeof calculation.alpha()).toEqual('number');
      expect(calculation.alpha() > 0).toEqual(true);
    });

    it('gamma should be a number', function () {
      expect(typeof calculation.gamma()).toEqual('number');
      expect(calculation.gamma() > 0).toEqual(true);
    });

    it('sigma should be a number', function () {
      expect(typeof calculation.sigma()).toEqual('number');
      expect(calculation.sigma() > 0).toEqual(true);
    });

    it('betta should be a number', function () {
      expect(typeof calculation.betta()).toEqual('number');
      expect(calculation.betta() > 0).toEqual(true);
    });

    it('centerX should be a number', function () {
      expect(typeof calculation.centerX()).toEqual('number');
      expect(calculation.centerX() > 0).toEqual(true);
    });

    it('centerY should be a number', function () {
      expect(typeof calculation.centerY()).toEqual('number');
      expect(calculation.centerY() > 0).toEqual(true);
    });
  })

});
