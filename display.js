document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', function(){
    stop();
    document.getElementById('start').innerHTML = 'RESUME';
});
document.getElementById('reset').addEventListener('click', function(){
    reset();
    document.getElementById('start').innerHTML = 'START';
});

setInterval(function(){
        if(T.running){ updateTime(); }
        document.getElementById('hours').innerHTML = T.hours ? T.hours : '';
        document.getElementById('minutes').innerHTML = T.minutes ? T.minutes : '';
        document.getElementById('seconds').innerHTML = T.seconds ? T.seconds : '';
        document.getElementById('cSeconds').innerHTML = T.cSeconds ? T.cSeconds : '';
}, 10 );
