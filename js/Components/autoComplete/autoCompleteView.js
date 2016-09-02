define(
  [
    'googleVendor',
    'lodash',
    'text!autoCompleteHTML',
    'autoCompleteController'
  ],
  function (google, _, autocompleteHTML, autoCompleteController) {
    function autoCompleteView() {
      var input = $('#autocomplete');
      var auto = $('.pac-container.pac-logo');
      var btnDelete = document.querySelector('.btn-delete');
      var checkboxes;
      var boolean;
      var lat;
      var lng;
      var cityName;
      var vendorName;
      var service = new google.maps.places.AutocompleteService();
      var geocoder = new google.maps.Geocoder();
      input.on('keyup', eventAutoComplete);

      function addGeoCodes(event) {
        var target = event.target;
        if (!target.dataset.lat || !target.dataset.lng) {
          geocoder.geocode({
            placeId: target.dataset.placeid
          }, function (results) {
            target.dataset.lat = results[0].geometry.location.lat();
            target.dataset.lng = results[0].geometry.location.lng();
          });
        }
        watcher();
      }

      function watcher() {
        checkboxes = document.querySelectorAll('.cityAutoComplete');
        boolean = Array.prototype.some.call(checkboxes, function (checkbox) {
          return checkbox.checked;
        });
        if (boolean) {
          btnDelete.className = 'btn-delete icon icon-check';
          btnDelete.addEventListener('click', chooseComplete);
        } else {
          btnDelete.className = 'btn-delete icon icon-delete';
          btnDelete.removeEventListener('click', chooseComplete);
        }
      }

      function chooseComplete(event) {
        checkboxes = document.querySelectorAll('.cityAutoComplete');
        Array.prototype.forEach.call(checkboxes, function (checkbox) {
          if (checkbox.checked) {
            lat = checkbox.dataset.lat;
            lng = checkbox.dataset.lng;
            cityName = checkbox.dataset.name;
            vendorName = 'forecast';
            autoCompleteController.getChooses(lat, lng, cityName, vendorName);
            checkbox.checked = false;
          }
        });
        event.target.className = 'btn-delete icon icon-delete';
        event.target.removeEventListener('click', chooseComplete);
      }

      function eventAutoComplete(event) {
        if (event.target.value) {
          service.getPlacePredictions({
            input: event.target.value,
            types: ['(cities)']
          }, displaySuggestions);
        }
      }

      function displaySuggestions(predictions) {
        var matched = {
          matching: predictions
        };

        auto.html(_.template(autocompleteHTML)(matched));

        checkboxes = document.querySelectorAll('.cityAutoComplete');
        Array.prototype.forEach.call(checkboxes, function (checkbox) {
          checkbox.addEventListener('click', addGeoCodes);
        });
      }
    }

    return autoCompleteView;
  });
