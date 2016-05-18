
(function () {
  'use strict';

  var
  $min = $('.minute').html(),

  $sec = $('.second').html(),

  $btnstart = $('.btn-start'),

  startTime = function() {
    console.log('startTime');
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
