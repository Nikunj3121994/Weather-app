define(
  [
    'collectionModel',
    'collectionView',
    'pubsub'
  ], function (CollectionModel, cityCollectionView, PubSub) {
    var dragController;
    var CityCollectionController = function () {
      if (CityCollectionController.instance) {
        return CityCollectionController.instance;
      }
      CityCollectionController.instance = this;
    };

    CityCollectionController.prototype.addToCollection = function (cityName) {
      CollectionModel.addToCollection(cityName);
    };

    CityCollectionController.prototype.getCollection = function () {
      return CollectionModel.getCollection();
    };

    CityCollectionController.prototype.deleteFromCollection = function (arrayToDelete) {
      CollectionModel.deleteItems(arrayToDelete);
    };

    CityCollectionController.prototype.sortToCollection = function (msg, sortObj) {
      CollectionModel.sortCollection(sortObj);
    };

    CityCollectionController.prototype.renderCollection = function () {
      var sidebar = document.querySelector('.sidebar');
      var placesList = sidebar.querySelector('.mCSB_container');
      var collection = this.getCollection();
      placesList.innerHTML = '';
      collection.forEach(function (city) {
        placesList.innerHTML += cityCollectionView.renderCity(city);
      });
    };

    dragController = new CityCollectionController();
    PubSub.subscribe('placeDragged', dragController.sortToCollection);

    return new CityCollectionController();
  });
