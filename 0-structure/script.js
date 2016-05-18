
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
    while ($sec === 0) {
      $sec --;
      if ($sec === 0) {
        $min --;
        if ($min === 0 ) {
          endGame();
        }
        $sec = 60;
      }
    }
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
