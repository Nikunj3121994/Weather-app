define(
  [
    'pubsub'
  ], function (PubSub) {
    var CityCollectionModel = function () {
      if (CityCollectionModel.instance) {
        return CityCollectionModel.instance;
      }
      CityCollectionModel.instance = this;
    };

    CityCollectionModel.prototype.collection = [];

    CityCollectionModel.prototype.checkingCollection = function (cityName) {
      var collectionArray = this.collection.split(',').filter(function (val) {
        return val;
      });
      if (collectionArray.indexOf(cityName) === -1) {
        return true;
      }
      return false;
    };

    CityCollectionModel.prototype.addToCollection = function (cityName) {
      this.collection = localStorage.getItem('collection') || '';
      if (this.checkingCollection(cityName)) {
        this.collection += cityName + ',';
      }
      localStorage.setItem('collection', this.collection);
    };

    CityCollectionModel.prototype.getCollection = function () {
      this.collection = localStorage.getItem('collection') || '';
      return this.collection
        .split(',')
        .map(function (val) {
          if (localStorage.getItem(val)) {
            return JSON.parse(localStorage.getItem(val));
          }
          return null;
        })
        .filter(function (val) {
          return val;
        });
    };

    CityCollectionModel.prototype.deleteItems = function (arrayToDelete) {
      var regExpToDelete;
      var collectionArray;
      if (arrayToDelete.length === 0) {
        return;
      }
      arrayToDelete.forEach(function (city) {
        localStorage.removeItem(city);
      });
      regExpToDelete = new RegExp(arrayToDelete.map(function (val) {
        return '(' + val + ')';
      }).join('|'), 'gim');

      collectionArray = this.collection.replace(regExpToDelete, 'toDelete').split(',').filter(function (val) {
        return val !== 'toDelete';
      });
      localStorage.setItem('collection', collectionArray.join(','));
      return collectionArray;
    };

    CityCollectionModel.prototype.sortCollection = function (FromToObj) {
      var collection = localStorage.getItem('collection')
        .split(',')
        .filter(function (val) {
          return val;
        });
      var start = collection[FromToObj.start];
      collection[FromToObj.start] = 'remove';
      if (FromToObj.start > FromToObj.end) {
        collection.splice(FromToObj.end, 0, start);
      } else {
        collection.splice(FromToObj.end + 1, 0, start);
      }
      collection = collection.filter(function (item) { return item !== 'remove'; });
      localStorage.setItem('collection', collection.join(',') + ',');
      PubSub.publish('CollectionHaveBeenSorted', true);
    };


    return new CityCollectionModel();
  });
