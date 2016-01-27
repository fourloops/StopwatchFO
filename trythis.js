


var T = function(){
    var startTime   =  0,
        stopTime    =  0,                         // watch out when adding stop-go function
        running     = false,
        caltime     = (function(){
            return Math.floor(Date.now()/100);
            console.log("testing");
        })();

        var start = function(){
                running     = true;
                startTime   = caltime;
            }
            stop = function(){
                running = false;
                stopTime = caltime;
            },
            timeElapsed = function(){
                if(running === false) { return stopTime - startTime;} //modify when adding stop-go function
                else                  { return startTime - caltime;}
            };

    return {
        startTime:      startTime,
        stopTime:       stopTime,
        running:        running,
        caltime:        caltime,
        start:          start,
        stop:           stop,
        timeElapsed:    timeElapsed
    };

} ;

T.start();

console.log(T.running);
console.log(T.startTime);
console.log(T.stopTime);

T.stop();
console.log(T.running);
console.log(T.stopTime);
console.log("elapsed times");
console.log(T.timeElapsed);
T.running = true;
console.log(T.timeElapsed);
console.log(T.timeElapsed);
