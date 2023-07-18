let timerdisplay = document.querySelector('.timerdisplay');
let startbt = document.getElementById('startbt');
let stopbt = document.getElementById('stopbt');
let resetbt = document.getElementById('resetbt');

let mins = 0;
let secs = 0;
let msecs = 0;

let timerid = null;

startbt.addEventListener('click', function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(Start, 10);
});

stopbt.addEventListener('click', function(){
    clearInterval(timerid);
});

resetbt.addEventListener('click', function(){
   clearInterval(timerid);
   timerdisplay.innerHTML = `00 : 00 : 00`;
   msecs = secs = mins = 0;
});

function Start() {
    msecs++;
    if(msecs == 100){
        msecs = 0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;

        }
    }

    //let msecstring = msecs < 10 ? `0${msecs}` : msecs;
    // for milliseconds
    let msecstring;
    if(msecs < 10){
        msecstring = `${msecs}`;
    }
    else{
        msecstring = msecs;
    }

    //for seconds
    let secstring;
    if(secs < 10){
        secstring = `0${secs}`;
    }
    else{
        secstring = secs;
    }

    //for minutes
    let minsstring;
    if(mins < 10){
        minsstring = `0${mins}`;
    }
    else{
        minsstring = mins;
    }

    timerdisplay.innerHTML = `${minsstring} : ${secstring} : ${msecstring}`;
}
