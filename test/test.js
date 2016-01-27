test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
});

test('displayTime function should return contents of all stopwatch spans', function() {
    equal(displayTime(), {hours: 0, minutes: 0, seconds: 0, cSeconds: 0}, 'Message: displayTime returns correct values');
});
