window.gameLevel = 1;
window.gameText = '';
window.gameTime = 0;
window.gameFails = 0;
window.gameMaxFails = 0;
window.enemyHealth = 0;
window.punch = false;
window.playGameMusic = false;
window.gameEndLevel = false;
window.gameTimer = 0;
window.playFailMusic = false;
window.playVictoryMusic = false;

let gameSound = new Audio('./assets/music/game.mp3');
let finishSound = new Audio('./assets/music/fail.mp3');
let victorySound = new Audio('./assets/music/victory.mp3');
let endSound = new Audio('./assets/music/end.mp3');

function startGame(playStartMusic) {
    $('#start').css({"display": "none", "visibility": "hidden"});
    // $('#game').css({"display": "flex", "visibility": "visible"});

    window.playGameMusic = playStartMusic;

    if (playGameMusic === true) {
        gameSound.play();
    }

    gameProcess();
}

function gameProcess () {
    $('#finishGame').css({"display": "none", "visibility": "hidden"});
    $('#game').css({"display": "flex", "visibility": "visible"});

    console.log(window.gameLevel, );

    if (gameLevel === 1) {
        window.gameLevel = 1;
        window.gameMaxFails = 5;
        window.gameFails = 0;
        window.gameEndLevel = false;
        window.gameTimer = 0;

        if (playFailMusic === true) {
            finishSound.pause();
            finishSound.currentTime = 0;

            gameSound.loop = true;
            gameSound.play();
        } else if (window.playGameMusic === true) {
            gameSound.loop = true;
            gameSound.play();
        }

        $('#gameLevel').text('Уровень ' + gameLevel + ' (5 ошибок)');
        
        $('#gameScene').css({"background": "url('assets/img/backgrounds/first/bg.gif') no-repeat center", "background-size": "cover"});
        $('#gameDisplayEnemy').attr({"src": "./assets/img/enemies/boss2-500x500.png"});

        let startGenText = genTypingText(gameLevel).toString().replace(/,/g, ' ');

        window.enemyHealth = startGenText.replace(/ /g, '').length;

        $('#gameEnemyHealth').text('❤️ ' + enemyHealth);
        $('#gameText').text(startGenText);

        window.gameText = startGenText;

        $('#gameMistakes').text('💩 0');

        window.gameTime = (startGenText.replace(/ /g, '').length - 5);
        $('#gameTimer').text('⌛️ ' + gameTime);

        window.gameTimer = setInterval(function () {
            let calcTime = gameTime - 1;
            
            if (calcTime === 0 || gameEndLevel === true) {
                endLevel();
            }
            
            window.gameTime = gameTime - 1;
        
            $('#gameTimer').text('⌛️ ' + gameTime);
        }, 1000);
    } else if (gameLevel === 2) {
        window.gameLevel = 2;
        window.gameMaxFails = 3;
        window.gameFails = 0;
        window.gameEndLevel = false;
        window.gameTimer = 0;

        if (playFailMusic === true) {
            finishSound.pause();
            finishSound.currentTime = 0;

            gameSound.loop = true;
            gameSound.play();
        } else if (window.playGameMusic === true) {
            gameSound.loop = true;
            gameSound.play();
        }

        $('#gameLevel').text('Уровень ' + gameLevel + ' (3 ошибки)');

        $('#gameScene').css({"background": "url('assets/img/backgrounds/second/bg.gif') no-repeat center", "background-size": "cover"});
        $('#gameDisplayEnemy').attr({"src": "./assets/img/enemies/boss1-500x500.png"});

        let secondGenText = genTypingText(gameLevel).toString().replace(/,/g, ' ');

        window.enemyHealth = secondGenText.replace(/ /g, '').length;

        $('#gameEnemyHealth').text('❤️ ' + enemyHealth);
        $('#gameText').text(secondGenText);

        
        window.gameText = secondGenText;

        $('#gameMistakes').text('💩 0');

        window.gameTime = (secondGenText.replace(/ /g, '').length - 5);
        $('#gameTimer').text('⌛️ ' + gameTime);

        window.gameTimer = setInterval(function () {
            let calcTime = gameTime - 1;
            
            if (calcTime === 0 || gameEndLevel === true) {
                endLevel();
            }
            
            window.gameTime = gameTime - 1;
        
            $('#gameTimer').text('⌛️ ' + gameTime);
        }, 1000);
    } else if (gameLevel === 3) {
        window.gameLevel = 3;
        window.gameMaxFails = 1;
        window.gameFails = 0;
        window.gameEndLevel = false;
        window.gameTimer = 0;

        if (playFailMusic === true) {
            finishSound.pause();
            finishSound.currentTime = 0;

            gameSound.loop = true;
            gameSound.play();
        } else if (window.playGameMusic === true) {
            gameSound.loop = true;
            gameSound.play();
        }

        $('#gameLevel').text('Уровень ' + gameLevel + ' (1 ошибка)');

        $('#gameScene').css({"background": "url('assets/img/backgrounds/third/bg.gif') no-repeat center", "background-size": "cover"});
        $('#gameDisplayEnemy').attr({"src": "./assets/img/enemies/boss3-500x500.png"});

        let thirdGenText = genTypingText(gameLevel).toString().replace(/,/g, ' ');

        window.enemyHealth = thirdGenText.replace(/ /g, '').length;

        $('#gameEnemyHealth').text('❤️ ' + enemyHealth);
        $('#gameText').text(thirdGenText);

        
        window.gameText = thirdGenText;

        $('#gameMistakes').text('💩 0');

        window.gameTime = (thirdGenText.replace(/ /g, '').length - 5);
        $('#gameTimer').text('⌛️ ' + gameTime);

        window.gameTimer = setInterval(function () {
            let calcTime = gameTime - 1;
            
            if (calcTime === 0 || gameEndLevel === true) {
                endLevel();
            }
            
            window.gameTime = gameTime - 1;
        
            $('#gameTimer').text('⌛️ ' + gameTime);
        }, 1000);
    }
}

function shake(elem) {
    let div = $(elem);
    let interval = 50;
    let distance = 10;
    let times = 2;

    $(div).css('position', 'relative');

    for (var iter = 0; iter < (times + 1) ; iter++) {
        $(div).animate({
            left: ((iter % 2 == 0 ? distance : distance * -1))
        }, interval);
    }                                                                                                          
    $(div).animate({ left: 0 }, interval);
}

function makeid(length) {
    let result = '';
    const characters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)) + " ";
        counter += 1;
    }
    return result.trim();
}

function genTypingText(level) {
    switch (level) {
        case 1:
            return makeid(30).split(' ');
        case 2:
            return makeid(35).split(' ');
        case 3:
            return makeid(45).split(' ');
        default:
            return makeid(50).split(' ');
    }
}

$(document).keyup(function(e) {
    if ($('#game').css('display') == 'flex' && gameTime !== 0 && gameEndLevel === false)
    {
        let gameTextArr = gameText.split(' ');

        if(e.key === gameTextArr[0]) {
            if (punch === false) {
                gameTextArr.shift();
                window.enemyHealth = gameTextArr.length;
                window.gameText = gameTextArr.toString().toString().replace(/,/g, ' ');
                $('#gameText').text(gameText);
                $('#gameEnemyHealth').text('❤️ ' + enemyHealth);
                shake($('#gameDisplayEnemy'));

                if (enemyHealth === 0) {
                    endLevel();
                }
            }
        } else {
            if (punch === false) {
                if (gameFails < gameMaxFails) {
                    window.punch = true;
                    
                    $("#failKey").css({"display": "block", "visibility": "visible"});
                    let punchAudio = new Audio('./assets/music/punch.mp3');
                    punchAudio.play();
    
                    window.gameFails += 1;
                    $('#gameMistakes').text('💩 ' + gameFails);
        
                    setTimeout(function () {
                        punchAudio.pause();
                        $("#failKey").css({"display": "none", "visibility": "hidden"});
                        window.punch = false;
                    }, 500);
                } else{
                    endLevel();
                }
            }
        }
    }
});

$('#playMusic').on('click', function (e) {
    if ($('#game').css('display') == 'flex' && gameEndLevel === false) {
        if ($('#playMusic').text() === '🔈') {
            window.playGameMusic = true;
            gameSound.loop = true;
            gameSound.play();
            $('#playMusic').text('🔊');
        } else {
            gameSound.pause();
            gameSound.currentTime = 0;
            window.playGameMusic = false;
            $('#playMusic').text('🔈');
        }
    } else if ($('#finishGame').css('display') == 'flex') {
        if ($('#playMusic').text() === '🔈') {
            window.playFailMusic = true;
            window.playGameMusic = true;
            finishSound.loop = true;
            finishSound.play();
            $('#playMusic').text('🔊');
        } else {
            finishSound.pause();
            finishSound.currentTime = 0;
            window.playFailMusic = false;
            window.playGameMusic = false;
            $('#playMusic').text('🔈');
        }
    } else if ($('#victoryGame').css('display') == 'flex') {
        if ($('#playMusic').text() === '🔈') {
            // finishSound.loop = true;
            // finishSound.play();
            window.playGameMusic = true;
            $('#playMusic').text('🔊');
        } else {
            victorySound.pause();
            victorySound.currentTime = 0;
            window.playGameMusic = false;
            $('#playMusic').text('🔈');
        }
    }
});

function endLevel() {
    clearInterval(gameTimer);

    // console.log(enemyHealth, gameFails, gameMaxFails, gameTime-1, gameLevel);

    // window.gameEndLevel = true;

    if (window.playGameMusic === true) {
        gameSound.pause();
        gameSound.currentTime = 0;
        // window.playFailMusic = true;
    }


    if (enemyHealth > 0) {
        // if (playGameMusic === true) {
        //     gameSound.pause();
        //     gameSound.currentTime = 0;
        //     window.playFailMusic = true;
        // }

        finishGame(false, gameLevel);
    } 
    else {
        finishGame(true, gameLevel);
    }
}

function finishNewTry(gameLevel) {
    // window.gameEndLevel = false;
    $('#finishGame').empty();

    finishSound.pause();
    finishSound.currentTime = 0;
    window.playFailMusic = false;

    if (window.playGameMusic === true) {
        $('#playMusic').text('🔊');
    }


    gameProcess(gameLevel);
}

function finishGame(goToNext, gameLevel) {
    $('#game').css({"display": "none", "visibility": "hidden"});

    if (goToNext === false) {
        $('#finishGame').css({"display": "flex", "visibility": "visible"});
        
        $('#finishGame').append('<span class="fs-4">В следующий раз повезёт, Салага!</span><br><button onclick="finishNewTry('+ gameLevel + ', ' + playGameMusic + ')" class="btn btn-success border border-success">Попробовать ещё раз</button>');
        
        if (window.playGameMusic === true) {
            
            gameSound.pause();
            gameSound.currentTime = 0;

            finishSound.loop = true;
            finishSound.play();
            $('#playMusic').text('🔊');
        }
    } else {
        $('#victoryGame').css({"display": "flex", "visibility": "visible"});

        window.gameEndLevel = false;

        if (window.playGameMusic === true) {
            gameSound.pause();
            gameSound.currentTime = 0;

            victorySound.play();
            $('#playMusic').text('🔊');
        }

        setTimeout(function(){
            $('#victoryGame').css({"display": "none", "visibility": "hidden"});
            victorySound.pause();
            victorySound.currentTime = 0;
            window.gameLevel = gameLevel + 1;

            if (window.gameLevel < 4) {
                gameProcess();
            } else {
                $('#endGame').css({"display": "flex", "visibility": "visible"});
                $('#playMusic').css({"display": "none", "visibility": "hidden"})
                if (window.playGameMusic === true) {
                    endSound.loop = true;
                    endSound.play();
                }
            }
        }, 2000);
    }
}


$('#startNewGame').on('click', function () {
    window.location.reload();
});