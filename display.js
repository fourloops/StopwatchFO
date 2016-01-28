document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);



setInterval(function(){
        updateTime();
        document.getElementById('hours').innerHTML = T.hours ? T.hours : '';
        document.getElementById('minutes').innerHTML = T.minutes ? T.minutes : '';
        document.getElementById('seconds').innerHTML = T.seconds ? T.seconds : '';
        document.getElementById('cSeconds').innerHTML = T.cSeconds ? T.cSeconds : '';
}, 10 );
