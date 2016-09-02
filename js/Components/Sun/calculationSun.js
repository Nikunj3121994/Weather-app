define(function () {
  var CalculateVariablesForSun = function () {
    var width = window.screen.width;
    var H = window.screen.height;
    var h = H / 2;
    var stageValue;
    if (width < H) {
      h = H / 3;
    }

    function radiusMovement() {
      return (h / 2) + (width * width) / (8 * h);
    }

    function alpha() {
      var radius = radiusMovement();
      stageValue = (radius - h) / radius;
      return 2 * Math.acos(stageValue);
    }

    function gamma() {
      var radius = radiusMovement();
      stageValue = 37.5 / (2 * radius);
      stageValue = Math.asin(stageValue);
      return 2 * stageValue;
    }

    function sigma() {
      return alpha() + 2 * gamma();
    }

    function betta() {
      return 1.5708 - (sigma() / 2);
    }

    function centerX() {
      return (width / 2) - 75;
    }

    function centerY() {
      var radius = radiusMovement();
      return H + (radius - h);
    }
    return {
      radius: radiusMovement,
      alpha: alpha,
      gamma: gamma,
      sigma: sigma,
      betta: betta,
      centerX: centerX,
      centerY: centerY
    };
  };
  return CalculateVariablesForSun;
});
