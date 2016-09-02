define(['collectionModel', 'pubsub'], function (CityCollectionModel, PubSub) {

  describe('CityCollectionModel basic tests', function () {
    var collect, collection, temp, local;
    beforeEach(function () {
      window.localStorage.setItem('collection', '');
      collection = CityCollectionModel;
      collect = collection.collection;
      local = window.localStorage.getItem('collection');
    });
    it('CityCollectionModel should be an singletone', function () {
      expect(collection).toEqual(CityCollectionModel);
    });
    it('all methods should be functions', function () {
      expect(typeof collection.checkingCollection).toEqual('function');
      expect(typeof collection.addToCollection).toEqual('function');
      expect(typeof collection.getCollection).toEqual('function');
      expect(typeof collection.deleteItems).toEqual('function');
    });
    it('collection should be an array', function () {
      expect(collect.length).toEqual(0);
    });
    it('addToCollection should save value to LS', function () {
      collection.addToCollection('test');
      expect(window.localStorage.getItem('collection')).toEqual('test,');
      collection.addToCollection('test-test');
      expect(window.localStorage.getItem('collection')).toEqual('test,test-test,');
    });
    it('getCollection should return collection of cities if it has', function () {
      temp = collection.getCollection();
      expect(temp).toEqual([]);
    });
    it('deleteItems should delete item from collection of cities', function () {
      expect(collection.deleteItems(['test'])).toEqual(['']);
      expect(collection.deleteItems([])).toEqual();
    });
    it('sorting should change positions for element in collection when it was called', function () {
      window.localStorage.setItem('collection', 'test,test-test,');
      collection.addToCollection('test');
      collection.sortCollection({ start: 0, end: 1 });
      collection.sortCollection({ start: 1, end: 0 });
      local = window.localStorage.getItem('collection');
      expect(local).toEqual('test,test-test,');
    });
  });


});
