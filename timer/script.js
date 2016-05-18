
(function () {
  'use strict';

  var
  $min = $('.minute').html(),

  $sec = $('.second').html(),

  $btnstart = $('.btn-start'),

  endGame = function () {
    console.log('endGame');

  },

  startTime = function() {
    console.log('startTime');

    while ($sec != 0) {
      $sec --;
      updateTime ();
      if ($sec == 0) {
        $min --;
        updateTime ();
        if ($min == 0 ) {
          endGame();
        }
        else {
          $sec = 60;
          updateTime ();
        }
      }
    }
  },

  updateTime = function () {
    console.log('updateTime');

    
  },

  start = function () {
    console.log('start');
    $btnstart.click(startTime);
  },

  main = function () {
    console.log('Timer, Init ;)');
    start ();
  }
  ;

  main();
})();
