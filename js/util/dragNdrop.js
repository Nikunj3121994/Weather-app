define(
  [
    'jquery',
    'pubsub'
  ],
  function ($, PubSub) {
    function dragNdrop() {
      var numbers = {
        start: 0,
        end: 0
      };
      $("#mCSB_1_container").sortable({
        placeholder: 'ui-state-highlight',
        stop: function (event, ui) {
          var places = $('.place');
          numbers.end = places.index($(ui.item));
          PubSub.publish('placeDragged', numbers);
        },
        start: function (event, ui) {
          var places = $('.place');
          numbers.start = places.index($(ui.item));
        }
      });
    }

    return dragNdrop;
  });
