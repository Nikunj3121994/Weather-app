define(['sunAnimation'],function (sunview) {
  function newBall() {
    var maxX = window.innerWidth;
    var maxY = window.innerHeight - 100;
    var min = 100;
    var colorMin = 0;
    var colorMax = 255;
    var x = Math.floor(Math.random() * (maxX - min + 1)) + min;
    var y = Math.floor(Math.random() * (maxY - min + 1)) + min;
    var red = Math.floor(Math.random() * (colorMax - colorMin + 1)) + colorMin;
    var green = Math.floor(Math.random() * (colorMax - colorMin + 1)) + colorMin;
    var blue = Math.floor(Math.random() * (colorMax - colorMin + 1)) + colorMin;
    var elem = document.createElement('div');
    elem.className = 'ball';
    document.body.appendChild(elem);
    elem.style.top = y + 'px';
    elem.style.left = x + 'px';
    elem.attributes.dataX = x;
    elem.attributes.dataY = y;
    elem.style.background = 'rgba(' + red + ',' + green + ',' + blue + ',' + '1)';
  }
  function round10(x) {
    var i;
    for (i = 0; i < 10; i++) {
      if (x % 10 === 0) {
        return x;
      }
      x++;
    }
    return true;
  }
  document.onkeydown = function (e) {
    var sun = document.querySelector('.sun-box');
    var i;
    var ball;
    var x;
    var y;
    var eshik = document.querySelector('.eshik');
    // SHIFT + ALT + U
    if (e.altKey && e.shiftKey && e.keyCode === 85) {
      newBall();
      document.body.style.cursor = 'none';
      document.onmousemove = function (evt) {
        ball = document.querySelectorAll('.ball');
        eshik.style.opacity = '1';
        sun.attributes.dataG = sun.attributes.dataG || 'plus';
        sun.style.width = sun.style.width || '150px';
        sun.style.height = sun.style.height || '150px';
        evt = (evt || event);
        sun.style.top = evt.clientY - parseInt(sun.style.width, 10) / 2 + 'px';
        sun.style.left = evt.clientX - parseInt(sun.style.height, 10) / 2 + 'px';
        for (i = 0; i < ball.length; i++) {
          x = +ball[i].attributes.dataX;
          y = +ball[i].attributes.dataY;
          if (Math.abs(round10(evt.clientY) - round10(y))  < 25  && Math.abs(round10(evt.clientX) - round10(x)) < 25) {
            document.body.removeChild(ball[i]);
            eshik.classList.toggle('rotate-5');
            newBall();
          }
        }
      };
    }
    // SHIFT + ALT + J
    if (e.altKey && e.shiftKey && e.keyCode === 74) {
      ball = document.querySelectorAll('.ball');
      document.body.style.cursor = 'default';
      eshik.style.opacity = '0';
      sunview();
      for (i = 0; i < ball.length; i++) {
        document.body.removeChild(ball[i]);
      }
      document.onmousemove = function () {
      };
    }
  };
});
