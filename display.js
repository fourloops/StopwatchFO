var blackboard = document.getElementById('blackboard');

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', function(){
    stop();
    document.getElementById('start').innerHTML = 'RESUME';
});
document.getElementById('reset').addEventListener('click', function(){
    reset();
    document.getElementById('start').innerHTML = 'START';
    blackboard.innerHTML = "";
});
document.getElementById('lap').addEventListener('click', function(){
    if(T.running){
        lapX();
        var latestLap = lapObj[ "l" + numLaps() ],
            lapNode     = document.createElement("div"),
            hours       = ( latestLap.hours <10  ? "0":"" ) + latestLap.hours,
            minutes     = ( latestLap.minutes <10  ? "0":"" ) + latestLap.minutes,
            seconds     = ( latestLap.seconds <10  ? "0":"" ) + latestLap.seconds,
            cSeconds    = ( latestLap.cSeconds <10  ? "0":"" ) + latestLap.cSeconds,
            lapString   = ""+hours+":"+minutes+":"+seconds+":"+cSeconds;
        lapNode.innerHTML = "<p>"+lapString+"</p>";
        lapNode.className = "lap";
        blackboard.appendChild(lapNode);
        blackboard.scrollTop = blackboard.scrollHeight;
    }
});


setInterval(function(){
        if(T.running){ updateTime(); }
        document.getElementById('hours').innerHTML = T.hours ? T.hours : '';
        document.getElementById('minutes').innerHTML = T.minutes ? T.minutes : '';
        document.getElementById('seconds').innerHTML = T.seconds ? T.seconds : '';
        document.getElementById('cSeconds').innerHTML = T.cSeconds ? T.cSeconds : '';
}, 10 );
