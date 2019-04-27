var active = 0;
var gauntlet = document.getElementById('gauntlet');
var box = document.getElementsByClassName('box');

function trick() {

    if(active == 0) {
        console.log('thanos');
        let audio = new Audio('audio/trick.mov');
        audio.loop = false;
        audio.play();
        gauntlet.src = 'img/2.png';
        setTimeout(function() {
            gauntlet.src = 'img/3.png';
        },400)
        setTimeout(function() {
            gauntlet.src = 'img/4.png';
        },1000)
        setTimeout(function() {
            gauntlet.src = 'img/5.png';
            kill();
        },1200)
        active = 1;
    } else {
        gauntlet.src = 'img/6.png';
        setTimeout(function () {
            gauntlet.src = 'img/5.png';
        }, 1000);
        revive();
        active = 0;
    }
}

function kill() {
    for (i = 2; i < box.length; i += 2) {
        let audio = new Audio('audio/kill1.mp4');
        audio.loop = false;
        audio.play();
        $('#b'+i).fadeTo(3000,0);
    }
}

function revive() { 
    for (i = 2; i < box.length; i += 2) {
        let audio = new Audio('audio/revive.mp4');
        audio.loop = false;
        audio.play();
        $('#b' + i).fadeTo(2000,1);
    }
}