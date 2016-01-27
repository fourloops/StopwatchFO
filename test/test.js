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
    reset(T);
    T3 = {
        startTime   :  0,
        stopTime    :  0,                         // watch out when adding stop-go function
        running     : false,
        elapsed     :  0
    };
    deepEqual(T, T3, "Reset sets all variables to original state");
});

test("elapsed time should be accessed in terms of hours, minutes, seconds, centiseconds",function(){
    ok(T.hours      !== undefined,"T object should have hours");
    ok(T.minutes    !== undefined,"T object should have minutes");
    ok(T.seconds    !== undefined,"T object should have seconds");
    ok(T.cSeconds   !== undefined,"T object should have centiseconds");
});
