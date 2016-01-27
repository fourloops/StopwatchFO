test( "elapsedTime should be Zero before we start the Timer", function() {
  equal( elapsedTime(T.stopTime, T.startTime), 0, 'Message: timer is zero at start' );
});
//
// test('displayTime function should return contents of all stopwatch spans', function() {
//     deepEqual(displayTime(), {hours: 0, minutes: 0, seconds: 0, cSeconds: 0}, 'Message: displayTime returns correct values');
// });
test("caltime should return the current calendar time in centiseconds",function(){
    equal(caltime(), Math.floor( Date.now() / 100 ),"Calendar time in cs should be returned");
});

test("T.running should be false at start", function(){
    equal(T.running, false, "T.running is false");
});

test("T.elapsedTime should be greater than 0 when the start function is called", function(){
    start();
    var actual = elapsedTime(1, 14539107090);
    ok(actual>0, true, "elapsedTime returns value > 0");
});


//reset function

test("elapsedTime should return the amount of time passed since T.startTime in centiseconds", function(){
    start();
    var actual = elapsedTime(1, 14539107090);
    equal(actual, Math.floor( Date.now() / 100 ) - 14539107090, "elapsedTime returns correct value");
});

test("reset should change T.running to false, and T.startTime and T.stopTime to 0", function(){
    T2 = {running: true, stopTime: 100, startTime: 2902};
    reset(T2);
    T3 = {running: false, stopTime: 0, startTime: 0};
    deepEqual(T2, T3, "Reset sets all variables to original state");
});
