test( "T.elapsed should be Zero before we start the Timer", function() {
  equal( T.elapsed, 0, 'Message: timer is zero at start' );
});

test("caltime should return the current calendar time in centiseconds",function(){
    equal(caltime(), Math.floor( Date.now() / 100 ),"Calendar time in cs should be returned");
});

test("T.running should be false at start", function(){
    equal(T.running, false, "T.running is false");
});

test( "T.elapsed should increase after start() and updateTime()", function( assert ) {
  var done1 = assert.async();
  start();
  setTimeout(function() {
      updateTime();
      assert.ok( T.elapsed > 0, "T.elapsed is greater than 0" );
      console.log(T.elapsed);
      done1();
  }, 2000 );

});

test("reset should change T.running to false, and T.startTime and T.stopTime to 0", function(){
    T2 = {running: true, stopTime: 100, startTime: 2902};
    reset(T2);
    T3 = {running: false, stopTime: 0, startTime: 0};
    deepEqual(T2, T3, "Reset sets all variables to original state");
});
