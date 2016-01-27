var T = {
    timeElapsed: 0
};
function displayTime(){
    var hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        cSeconds = document.getElementById('cSeconds');
    /*hours.innerHTML = 00;
    minutes.innerHTML = 00;
    seconds.innerHTML = 00;
    cSeconds.innerHTML = 00;*/
    return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        cSeconds: 0
    }
}
