test( "T.elapsed should be Zero before we start the Timer", function() {
    reset();
    equal( T.elapsed, 0, 'Message: timer is zero at start' );
});

test("caltime should return the current calendar time in centiseconds",function(){
    equal(caltime(), Math.floor( Date.now() / 10 ),"Calendar time in cs should be returned");
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
      done1();
  }, 100 );
});

test("reset should change T.running to false, and T.startTime and T.stopTime to 0", function(){
    reset();
    T3 = {
            startTime   :  0,
            stopTime    :  0,                         // watch out when adding stop-go function
            running     : false,
            elapsed     :  0,
            hours       :  0,
            minutes     :  0,
            seconds     :  0,
            cSeconds    :  0
    };
    deepEqual(T, T3, "Reset sets all variables to original state");
});

test("elapsed time should be accessed in terms of hours, minutes, seconds, centiseconds",function(){
    ok(T.hours      !== undefined,"T object should have hours");
    ok(T.minutes    !== undefined,"T object should have minutes");
    ok(T.seconds    !== undefined,"T object should have seconds");
    ok(T.cSeconds   !== undefined,"T object should have centiseconds");
});


test( "T.elapsed should equal the timeOut", function( assert ) {
    reset();
    var done2 = assert.async();
    start();
    setTimeout(function() {
        updateTime();
        assert.equal( Math.floor(T.elapsed/10), 11, "T.elapsed is equal to the timeOut within 10cSecs" );
        done2();
    }, 1100 );
});

test( "Hours,  minutes, seconds, cSeconds should change with updateTime()", function( assert ) {
    reset();
    start();
    T.startTime = caltime() - 366107;
    updateTime();
    assert.equal( T.hours, 1, "T.hours is correct" );
    assert.equal( T.minutes, 1, "T.minutes is correct" );
    assert.equal( T.seconds, 1, "T.seconds is correct" );
    assert.equal( T.cSeconds, 7, "T.cSeconds is correct" );
    reset();
});

test("T.object should have a totElapsed value of 0 at the start",function(){
    reset();
    equal(T.totElapsed,0,"T.totElapsed is 0 at the start");
});
test("T.totElapsed should be greater than 0 after starting and stopping",function(){
    reset();
    var done3 = assert.async();
    start();
    setTimeout(function(){
        stop();
        updateTime();
        assert.ok( T.totElapsed > 0, "T.totElapsed is greater than 0" );
        var elapsedTest1 = T.totElapsed;
        done3();
    },100);
});
test("T.totElapsed should increase after pressing start and stop again (without restarting)",function(){
    var done4 = assert.async();
    start();
    setTimeout(function(){
        stop();
        updateTime();
        var elapsedTest2 = T.totElapsed;
        assert.ok( elapsedTest2 > elapsedTest1, "totElapsed has increased" );
        done4();
    },100);
});
