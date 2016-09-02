define(['anyVendor'], function (anyVendor) {

  describe('anyVendor basic tests', function () {
    var vendors;
    beforeAll(function () {
      vendors = anyVendor;
    });
    it('anyVendor should be an object', function () {
      expect(typeof  vendors).toEqual('object');
    });
  });
});
