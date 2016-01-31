// blackboard variable should be accessible globally.
var blackboard = document.getElementById('blackboard');

// <------------ Connects buttons to their correct functions ---------->

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', function(){
    stop();
    if(T.totElapsed>0){
        document.getElementById('start').innerHTML = 'RESUME';
    }
});
document.getElementById('reset').addEventListener('click', function(){
    reset();
    document.getElementById('start').innerHTML = 'START';
    blackboard.innerHTML = "<p class='lap' id='lapsText'>LAPS:</p>";
    document.getElementById('hours').classList.remove('blackText');
    document.getElementById('minutes').classList.remove('blackText');
    document.getElementById('seconds').classList.remove('blackText');
    document.getElementById('cSeconds').classList.remove('blackText');

});
document.getElementById('lap').addEventListener('click', function(){
    if(T.running){
        lap();
        var latestLap = lapObj[ "l" + numLaps() ],
            lapNode     = document.createElement("p"),
            hours       = ( latestLap.hours <10  ? "0":"" ) + latestLap.hours,
            minutes     = ( latestLap.minutes <10  ? "0":"" ) + latestLap.minutes,
            seconds     = ( latestLap.seconds <10  ? "0":"" ) + latestLap.seconds,
            cSeconds    = ( latestLap.cSeconds <10  ? "0":"" ) + latestLap.cSeconds,
            lapString   = ""+hours+":"+minutes+":"+seconds+":"+cSeconds+" (#"+numLaps()+")";
        lapNode.innerHTML = lapString;
        lapNode.className = "lap";
        blackboard.appendChild(lapNode);
        blackboard.scrollTop = blackboard.scrollHeight;
    }
});

// setInterval function runs the updateTime function ever 10ms, updates the
// time values in the HTML and also makes the numbers visible if <1

setInterval(function(){
        if(T.running){ updateTime(); }
        var     hours   = document.getElementById('hours'),
                minutes = document.getElementById('minutes'),
                seconds = document.getElementById('seconds'),
                cSeconds= document.getElementById('cSeconds');

        hours.innerHTML = (T.hours < 10 ? '0' : '') + T.hours;
        minutes.innerHTML = (T.minutes < 10 ? '0' : '') + T.minutes;
        seconds.innerHTML = (T.seconds < 10 ? '0' : '') + T.seconds;
        cSeconds.innerHTML = (T.cSeconds < 10 ? '0' : '') + T.cSeconds;

        function addClass(Tobj, elem){
            if (Tobj > 0){
                elem.classList.add("blackText");
            } else if (elem.previousSibling.innerHTML == '00') {
                elem.classList.remove("blackText");
            }
        }

        addClass(T.hours, hours);
        addClass(T.minutes, minutes);
        addClass(T.seconds, seconds);
        addClass(T.cSeconds, cSeconds);
        console.log('running');

}, 10 );
