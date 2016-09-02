define(['cityCollectionController', 'collectionView', 'collectionModel'], function (cityCollectionController, collectionView, CollectionModel) {

  describe('cityCollectionController basic tests', function () {
    it('should be defined with all needed methods', function () {
      expect(cityCollectionController.deleteFromCollection).toBeDefined();
      expect(cityCollectionController.addToCollection).toBeDefined();
      expect(cityCollectionController.getCollection).toBeDefined();
      expect(cityCollectionController.deleteFromCollection).toBeDefined();
      expect(cityCollectionController.sortToCollection).toBeDefined();
      expect(cityCollectionController.renderCollection).toBeDefined();
    });

    it('should call collection model sorting', function () {
      spyOn(CollectionModel, 'sortCollection');
      cityCollectionController.sortToCollection();
      expect(CollectionModel.sortCollection).toHaveBeenCalled();
    });

    it('should call collection model deleting', function () {
      spyOn(CollectionModel, 'deleteItems');
      cityCollectionController.deleteFromCollection();
      expect(CollectionModel.deleteItems).toHaveBeenCalled();
    });

    it('should call collection model to add something', function () {
      spyOn(CollectionModel, 'addToCollection');
      cityCollectionController.addToCollection();
      expect(CollectionModel.addToCollection).toHaveBeenCalled();
    });

    it('should call collection model to give collection', function () {
      spyOn(CollectionModel, 'getCollection');
      cityCollectionController.getCollection();
      expect(CollectionModel.getCollection).toHaveBeenCalled();
    });

    it('should call collection model to give collection and return it', function () {
      var test = CollectionModel.getCollection();
      expect(cityCollectionController.getCollection()).toEqual(test);
    });

    it('should render collection', function () {
      spyOn(collectionView, 'renderCity');
      cityCollectionController.renderCollection();
      expect(collectionView.renderCity).not.toHaveBeenCalled();
    });

  });
});
