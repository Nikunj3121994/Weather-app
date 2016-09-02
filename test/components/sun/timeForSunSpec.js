define(['timeForSun'], function (timeForSun) {
  var activeSlide = '<div class="swiper-slide swiper-slide-active" style="width: 779px;"> <div class="current-day-container"> <div class="head-and-current-container"> <header> <div class="last-update-time"> 2:35 <span class="icon icon-refresh"></span></div><h1>Madrid</h1> <h2>Saturday, June 17</h2> </header> <div class="weather-block"> <span class="icon icon-partly-cloudy current-weather-js" data="partly-cloudy"></span> <span class="today-temerature">8°<span class="weather-name">//Partly Cloudy</span></span> <span class="icon icon-almost-full moon-phase"><span class="time-of-moon"> 6:45 </span></span> </div></div><div class="week-and-day-container"> <div class="weather-today-container mCustomScrollbar _mCS_4"><div id="mCSB_4" class="mCustomScrollBox mCS-dark mCSB_horizontal mCSB_inside" style="max-height: 123.937px;" tabindex="0"><div id="mCSB_4_container" class="mCSB_container" style="position: relative; top: 0px; left: 0px; width: 2126px;" dir="ltr"> <div class="interval"> <div class="hours">3:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">9°</div></div><div class="interval"> <div class="hours">4:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">8°</div></div><div class="interval"> <div class="hours">5:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">8°</div></div><div class="interval"> <div class="hours">6:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">9°</div></div><div class="interval"> <div class="hours">7:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">9°</div></div><div class="interval"> <div class="hours">8:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">9°</div></div><div class="interval"> <div class="hours">9:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">10°</div></div><div class="interval"> <div class="hours">10:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">11°</div></div><div class="interval"> <div class="hours">11:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">12°</div></div><div class="interval"> <div class="hours">12:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">14°</div></div><div class="interval"> <div class="hours">13:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">16°</div></div><div class="interval"> <div class="hours">14:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">18°</div></div><div class="interval"> <div class="hours">15:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">20°</div></div><div class="interval"> <div class="hours">16:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">21°</div></div><div class="interval"> <div class="hours">17:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">22°</div></div><div class="interval"> <div class="hours">18:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">22°</div></div><div class="interval"> <div class="hours">19:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">22°</div></div><div class="interval"> <div class="hours">20:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">21°</div></div><div class="interval"> <div class="hours">21:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">20°</div></div><div class="interval"> <div class="hours">22:00</div><div class="icon icon-partly-cloudy"></div><div class="tepmperature-hours">18°</div></div><div class="interval"> <div class="hours">23:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">15°</div></div><div class="interval"> <div class="hours">0:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">13°</div></div><div class="interval"> <div class="hours">1:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">12°</div></div><div class="interval"> <div class="hours">2:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">11°</div></div><div class="interval"> <div class="hours">3:00</div><div class="icon icon-clear"></div><div class="tepmperature-hours">10°</div></div></div><div id="mCSB_4_scrollbar_horizontal" class="mCSB_scrollTools mCSB_4_scrollbar mCS-dark mCSB_scrollTools_horizontal" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_4_dragger_horizontal" class="mCSB_dragger" style="position: absolute; min-width: 30px; display: block; width: 58px; max-width: 341px; left: 0px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div><div class="day-information-container"> <div class="day-discr"> <div class="icon icon-humidity"></div><div class="icon-descr">71%</div></div><div class="day-discr"> <span class="windBearingLetter N-W">N/W</span> <div class="icon icon-wind-direction" style="transform: rotate(293deg)"></div><div class="icon-descr">5<sup>m/c</sup></div></div><div class="day-discr"> <div class="icon icon-sunrise"></div><div class="icon-descr sunrise-time">6:45</div></div><div class="day-discr"> <div class="icon icon-sunset"></div><div class="icon-descr sunset-time">21:48</div></div></div></div></div><div class="week-weather-container"> <div class="week-weather-day"> <span class="day-of-week">today</span> <span class="icon icon-partly-cloudy"></span> <div class="ranger-block"> <span class="temperature_min">8°</span> <div class="ranger"> </div><span class="temperature_max">22°</span> </div></div><div class="week-weather-day"> <span class="day-of-week">sun</span> <span class="icon icon-partly-cloudy"></span> <div class="ranger-block"> <span class="temperature_min">9°</span> <div class="ranger"> </div><span class="temperature_max">24°</span> </div></div><div class="week-weather-day"> <span class="day-of-week">mon</span> <span class="icon icon-partly-cloudy"></span> <div class="ranger-block"> <span class="temperature_min">8°</span> <div class="ranger"> </div><span class="temperature_max">27°</span> </div></div><div class="week-weather-day"> <span class="day-of-week">tue</span> <span class="icon icon-clear"></span> <div class="ranger-block"> <span class="temperature_min">10°</span> <div class="ranger"> </div><span class="temperature_max">30°</span> </div></div><div class="week-weather-day"> <span class="day-of-week">wed</span> <span class="icon icon-clear"></span> <div class="ranger-block"> <span class="temperature_min">13°</span> <div class="ranger"> </div><span class="temperature_max">31°</span> </div></div><div class="week-weather-day hidden"> <span class="day-of-week">thu</span> <span class="icon icon-clear"></span> <div class="ranger-block"> <span class="temperature_min">15°</span> <div class="ranger"> </div><span class="temperature_max">33°</span> </div></div><div class="week-weather-day hidden"> <span class="day-of-week">fri</span> <span class="icon icon-clear"></span> <div class="ranger-block"> <span class="temperature_min">16°</span> <div class="ranger"> </div><span class="temperature_max">34°</span> </div></div></div></div>';
  document.body.insertAdjacentHTML('beforeBegin', activeSlide);
  describe('timeforSub', function () {
    var timeCalc = timeForSun();
    it('should be defined with all needed methods', function () {
      expect(timeForSun).toBeDefined();
      expect(timeCalc.currentTime).toBeDefined();
      expect(timeCalc.sunSetTime).toBeDefined();
      expect(timeCalc.sunRiseTime).toBeDefined();
      expect(timeCalc.timeCoefficient).toBeDefined();
      expect(timeCalc.timeCoefficient).toBeDefined();
      expect(timeCalc.previousTimeChecking).toBeDefined();
      expect(timeCalc.currentTimeChecking).toBeDefined();
    });
    it('should return time in hours in current slide', function () {
      var time = timeCalc.currentTime();
      expect(time).toEqual(2);
    });
    it('should return timeCoefficient ', function () {
      var timeCoefficient = timeCalc.timeCoefficient();
      expect(timeCoefficient < 1).toEqual(true);
    });
    it('should return sunSetTime  in hours in current slide', function () {
      var sunSetTime  = timeCalc.sunSetTime();
      expect(sunSetTime).toEqual(21);
    });
    it('should return time in hours in current slide', function () {
      var sunRiseTime  = timeCalc.sunRiseTime();
      expect(sunRiseTime).toEqual(6);
    });
    it('previousTimeChecking should return 0 if previousTime is less then 0 or grater then 1', function () {
      expect(timeCalc.previousTimeChecking(2)).toEqual(0);
      expect(timeCalc.previousTimeChecking(4)).toEqual(0);
      expect(timeCalc.previousTimeChecking(-900)).toEqual(0);
      expect(timeCalc.previousTimeChecking(999999999999999)).toEqual(0);
    });
    it('previousTimeChecking should return previousTime if it is normal', function () {
      expect(timeCalc.previousTimeChecking(0.3)).toEqual(0.3);
      expect(timeCalc.previousTimeChecking(0.123)).toEqual(0.123);
      expect(timeCalc.previousTimeChecking(0.9875)).toEqual(0.9875);
    });
    it('currentTimeChecking return 0 ', function () {
      expect(timeCalc.currentTimeChecking(0, -1)).toEqual(0);
      expect(timeCalc.currentTimeChecking(0, 1.1)).toEqual(0);
      expect(timeCalc.currentTimeChecking(0, 244)).toEqual(0);
      expect(timeCalc.currentTimeChecking(0, 98765432)).toEqual(0);
    });
    it('currentTimeChecking not return 0 ', function () {
      expect(timeCalc.currentTimeChecking(0.7, 0.7)).toEqual(0.7);
      expect(timeCalc.currentTimeChecking(0.3, 0.1)).toEqual(0.1);
      expect(timeCalc.currentTimeChecking(0.5, 0.123)).toEqual(0.123);
      expect(timeCalc.currentTimeChecking(0.1, 0.1)).toEqual(0.1);
    });

  })
});
