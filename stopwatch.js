var T = {
        startTime   :  0,
        stopTime    :  0,                         // watch out when adding stop-go function
        running     : false,
        elapsed     :  0,
        hours       :  0,
        minutes     :  0,
        seconds     :  0,
        cSeconds    :  0
};

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
}

function updateTime(){
    if(T.running === false){ T.elapsed = T.stopTime - T.startTime; }
    else { T.elapsed = caltime() - T.startTime; }
    T.hours = Math.floor(T.elapsed/360000);
    T.minutes = Math.floor((T.elapsed - T.hours*360000)/6000);
    T.seconds = Math.floor((T.elapsed - T.minutes*6000 - T.hours*360000)/100);
    T.cSeconds = (T.elapsed - T.seconds*100 - T.minutes*6000 - T.hours*360000);
}
function reset(){
    T.startTime  = 0;
    T.stopTime   = 0;
    T.running    = false;
    T.elapsed    = 0;
    T.hours      = 0;
    T.minutes    = 0;
    T.seconds    = 0;
    T.cSeconds   = 0;
}
/*document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);



setInterval(function(){
        updateTime();
        document.getElementById('hours').innerHTML = T.hours ? T.hours : '';
        document.getElementById('minutes').innerHTML = T.minutes ? T.minutes : '';
        document.getElementById('seconds').innerHTML = T.seconds ? T.seconds : '';
        document.getElementById('cSeconds').innerHTML = T.cSeconds ? T.cSeconds : '';
}, 10 );
*/
