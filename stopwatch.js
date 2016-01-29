
// T object to store various variables
var T = {
        startTime   :  0,
        stopTime    :  0,                         // watch out when adding stop-go function
        running     : false,
        elapsed     :  0,
        totElapsed  :  0,
        hours       :  0,
        minutes     :  0,
        seconds     :  0,
        cSeconds    :  0
    },
    lapObj = { };

// caltime function to get current time in centiseconds
function caltime(){
    return Math.floor(Date.now()/10);
}

function start(){
    if(!T.running){
        T.running = true;
        T.startTime = caltime();
    }
}

function stop(){
    if(T.running){
        T.running = false;
        T.stopTime = caltime();
        T.totElapsed += T.elapsed;
    }
}

// updateTime function to calculate time elapsed and translate this into hours,
// minutes, seconds, cSeconds as they will be displayed on the stopwatch.
function updateTime(){
    T.elapsed = caltime() - T.startTime;
    T.hours = Math.floor((T.totElapsed + T.elapsed)/360000);
    T.minutes = Math.floor((T.totElapsed + T.elapsed - T.hours*360000)/6000);
    T.seconds = Math.floor((T.totElapsed + T.elapsed - T.minutes*6000 - T.hours*360000)/100);
    T.cSeconds = (T.totElapsed + T.elapsed - T.seconds*100 - T.minutes*6000 - T.hours*360000);
}

function reset(){
    T.startTime  = 0;
    T.stopTime   = 0;
    T.running    = false;
    T.elapsed    = 0;
    T.totElapsed = 0;
    T.hours      = 0;
    T.minutes    = 0;
    T.seconds    = 0;
    T.cSeconds   = 0;
    lapObj       = {};
}

// numLaps returns the number of laps currently in the lap object.
function numLaps (){
    return Object.keys(lapObj).length;
}

// Calculates current lap and puts it in correct format in lap object.
function lap(){
    var key  = "l" + ( numLaps()+1 ),
        subtractFrom = 0;
    for(var prop in lapObj){
        subtractFrom += lapObj[prop].lapTime || 0;
    }
    var tlap  = T.totElapsed + T.elapsed - subtractFrom,
        tlapH = Math.floor( tlap / 360000),
        tlapM = Math.floor( ( tlap - tlapH * 360000 ) / 6000),
        tlapS = Math.floor( ( tlap - tlapM * 6000 - tlapH * 360000 ) / 100 ),
        tlapC = tlap - tlapS * 100 - tlapM * 6000 - tlapH * 360000;

    lapObj[key] = {
        lapTime : tlap,
        hours   : tlapH,
        minutes : tlapM,
        seconds : tlapS,
        cSeconds: tlapC
    };
}
