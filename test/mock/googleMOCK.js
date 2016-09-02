define(
  function () {
    var google = {
      maps: {
        Geocoder: function () {
          this.geocode = function (placeId, callback) {
            callback(placeData);
          };
        },
        places: {
          AutocompleteService: function () {
            this.getPlacePredictions = function (args, callback) {
              if (!args || !args.input) {
                return callback(predictions, null);
              } else if (args.input === 'asdfgb') {
                return callback(predictions, 'ZERO_RESULTS');
              } else {
                return callback(predictions, 'OK');
              }
            };
          },
          PlacesServiceStatus: {
            OK: 'OK'
          }
        }
      }
    };

    return window.google = google;
  });


