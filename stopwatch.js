var T = (function(){
    var startTime =  0,
        stopTime  =  0,                         // watch out when adding stop-go function
        running = false,
        caltime = (function(){
            return Math.floor(Date.now()/100);
        }() ),
        start     =  function(){
            running = true;
            startTime = caltime;
        },
        stop      = function(){
            running = false;
            stopTime = caltime;
        },
        timeElapsed = (function(){
            if(running === false) return stopTime - startTime; //modify when adding stop-go function
            else {
                return startTime - caltime;
            }
        }() );

    return {
        startTime:      startTime,
        stopTime:       stopTime,
        running:        running,
        caltime:        caltime,
        start:          start,
        stop:           stop,
        timeElapsed:    timeElapsed,
    }

}() );
//
// function displayTime(){
//     var hours = document.getElementById('hours'),
//         minutes = document.getElementById('minutes'),
//         seconds = document.getElementById('seconds'),
//         cSeconds = document.getElementById('cSeconds');
//     /*hours.innerHTML = 00;
//     minutes.innerHTML = 00;
//     seconds.innerHTML = 00;
//     cSeconds.innerHTML = 00;*/
//     return {
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//         cSeconds: 0
//     };
// }
