test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
});

test('displayTime function should return contents of all stopwatch spans', function() {
    deepEqual(displayTime(), {hours: 0, minutes: 0, seconds: 0, cSeconds: 0}, 'Message: displayTime returns correct values');
});
test("T.caltime should return the current calendare time in centiseconds",function(){
    equal(T.caltime,Math.floor( Date.now() / 100 ),"Calendar time in cs should be returned");
});
