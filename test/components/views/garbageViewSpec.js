define(['GarbageView'], function (GarbageView) {
  "use strict";
  describe('GarbageView', function () {
    it('should be defined and have needed methods', function () {
      expect(GarbageView).toBeDefined();
      expect(GarbageView.findIndexesToDelete ).toBeDefined();
      expect(GarbageView.findCitiesToDelete).toBeDefined();
    });
    it('should return array of numbers', function () {
      var numbers = GarbageView.findIndexesToDelete();
      expect(numbers).toEqual([5]);
      expect(numbers).not.toEqual([0]);
    });
    it('should return array of cities', function () {
      var cities = GarbageView.findCitiesToDelete ();
      expect(cities).toEqual(['Ирпень']);
      expect(cities).not.toEqual(['Ирпень,']);
    });
  })
});
