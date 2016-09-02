define(['calculationSun', 'timeForSun', 'jquery'], function sunView(CalculateGeometry, TimeCalculator, $) {
  function sunView(start) {
    var calculate = new CalculateGeometry();
    var betta = calculate.betta();
    var radius = calculate.radius();
    var sigma = calculate.sigma();
    var centerX = calculate.centerX();
    var centerY = calculate.centerY();

    var timeCalculate = new TimeCalculator();
    var time = timeCalculate.timeCoefficient();
    var previousTime = start || +localStorage.getItem('previoustime');
    var previousTimeChecked = timeCalculate.previousTimeChecking(previousTime);
    var currentTimeChecked = timeCalculate.currentTimeChecking(previousTimeChecked, time);
    $('.sun-box').css({ fontSize: previousTimeChecked }).stop().animate({
      fontSize: currentTimeChecked
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (delta) {
        var Xt = centerX - (radius * (Math.cos(betta + (sigma * delta))));
        var Yt = centerY - (radius * (Math.sin(betta + (sigma * delta))));
        $(this).css({ left: Xt, top: Yt });
      }
    });
    localStorage.setItem('previoustime', currentTimeChecked);
    return sunView;
  }
  return sunView;
});
