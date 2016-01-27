var T = {
        startTime   :  0,
        stopTime    :  0,                         // watch out when adding stop-go function
        running     : false,
        elapsed     :  0
};

function caltime(){
    return Math.floor(Date.now()/100);
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
}
