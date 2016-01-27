test( "timeElapsed should be Zero before we start the Timer", function() {
  equal( T.timeElapsed, 0, 'Message: timer is zero at start' );
});
//
// test('displayTime function should return contents of all stopwatch spans', function() {
//     deepEqual(displayTime(), {hours: 0, minutes: 0, seconds: 0, cSeconds: 0}, 'Message: displayTime returns correct values');
// });
test("T.caltime should return the current calendare time in centiseconds",function(){
    equal(T.caltime(),Math.floor( Date.now() / 100 ),"Calendar time in cs should be returned");
});

test("T.running should be false at start", function(){
    equal(T.running, false, "T.running is false");
});

test("T.elapsedTime should be greater than 0 when T.running = true", function(){
    T.running = true;
    equal(T.elapsedTime>0, true, "elapsedTime greater than 0");
});

// test("T.elapsedTime should return the amount of time passed since T.startTime in centiseconds", function(){
//     var start = T.caltime();
//     var end = setTimeout(function(){return T.elapsedTime();}, 3000);
//     equal(end, 300, "retuns centiseconds since startTime");
// });
