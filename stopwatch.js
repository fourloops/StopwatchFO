var T = {
        startTime   :  0,
        stopTime    :  0,                         // watch out when adding stop-go function
        running     : false
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

function elapsedTime(stop, start){
    if(T.running === false){ return stop - start; }
    else { return caltime() - start; }
}
