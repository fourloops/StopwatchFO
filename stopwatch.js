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

function caltime(){
    return Math.floor(Date.now()/10);
}

function start(){
    T.running = true;
    T.startTime = caltime();
}

function stop(){
    T.running = false;
    T.stopTime = caltime();
    T.totElapsed += T.elapsed;
}

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

function numLaps (){
    return Object.keys(lapObj).length;
}

function lapX(){
    var key  = "l" + ( numLaps()+1 ),
        subtractFrom = 0;
    for(lap in lapObj){
        subtractFrom += lapObj[lap].lapTime || 0;
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
