let startAudio = new Audio('./assets/music/menu.mp3');
window.playStartMusic = false;

$( document ).ready(function() {
    setTimeout(function(){
        $('.start-0').css({"display": "none", "visibility": "hidden"});
        $('.start-1').css({"display": "flex", "visibility": "visible"});
        
        setTimeout(function(){
            $('.start-1').css({"display": "none", "visibility": "hidden"});
            $('.start-2').css({"display": "flex", "visibility": "visible"});

            setTimeout(function(){
                $('.start-2').css({"display": "none", "visibility": "hidden"});
                $('.start-3').css({"display": "flex", "visibility": "visible"});
            }, 2000);

        }, 2000);

    }, 2000);
});

$('#playMusic').on('click', function (e) {
    if ($('#start').css('display') == 'flex') {
        if ($('#playMusic').text() === '🔈') {
            window.playStartMusic = true;
            startAudio.loop = true;
            startAudio.play();
            $('#playMusic').text('🔊');
        } else {
            startAudio.pause();
            startAudio.currentTime = 0;
            window.playStartMusic = false;
            $('#playMusic').text('🔈');
        }
    }
});

$('#readyToPlayBtn').on('click', function () {
    startAudio.pause();
    startAudio.currentTime = 0;
    // $('#playMusic').text('🔈');
    startGame(playStartMusic);
});

$('#pooNotPlayBtn').on('click', function () {
   window.open('','_self').close();
});