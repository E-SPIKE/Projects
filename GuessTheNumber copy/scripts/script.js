//Guess history feature


//variables
var min = 1;
var max = 100;
var randInt;
var hp = 6;
var score = 0;
var scoreGain = 1;
var scoreLose = 2;

var response;

var guess;
var inputGuess;

var first = true;

//listener

window.onkeypress = function(event) {
    if (event.keyCode == 13) {
       guessFunction();
       var guessBox = document.getElementById("inputGuess");
       guessBox.select();
    }
 }

//functions

function quitFunction() {
    window.close();
}

function randIntGenerate() {
    min = Math.ceil(min);
    max = Math.floor(max);
    var i = 1;
    var randomInts = 0;
    while (i < 5){
        randomInts = randomInts + Math.random();
        //alert(randomInts);
        i++;
    }
    var randomNumber = randomInts / 4;
    //alert(randomNumber);
    randInt = Math.floor(randomNumber * (max - min + 1)) + min;
    //alert(randInt);
    return randInt;
}

function compare(guess) {
    if (guess < randInt) {
        response = "Higher!";
        hp = hp - 1;
    } else if (guess > randInt) {
        response = "Lower";
        hp = hp - 1;
    } else if (guess == randInt){
        response = "You guessed the correct answer!!!";
        score = score + scoreGain;
    }
    if (hp <= 0) {
        response = "Whoops, you're out of lives...";
        score = score - scoreLose;
    }
    return response;
}

function guessFunction() {
    var dead = "Whoops, you're out of lives...";
    var correct = "You guessed the correct answer!!!";
    response = "";
    inputGuess = document.getElementById("inputGuess").value;
    guess =  parseInt(inputGuess, 10);
    compare(guess);
    hp.toString();
    document.getElementById("life").innerHTML = "Lives: " + hp;
    document.getElementById("answer").innerHTML = response;
    if (response == dead) {
        document.getElementById("retry").innerHTML = "Click restart to go again";
        document.getElementById("correctAnswer").innerHTML = "The correct answer was: " + randInt;
        document.getElementById("score").innerHTML = "Score: " + score;
    } else if (response == correct) {
        document.getElementById("retry").innerHTML = "Click restart to go again";
        document.getElementById("score").innerHTML = "Score: " + score;
    } else if (response != dead) {
        document.getElementById("retry").innerHTML = "";
    }
}

function restartFunction() {
    var minStr = document.getElementById("inputMin").value;
    var maxStr = document.getElementById("inputMax").value;
    var hpStr = document.getElementById("inputLives").value;
    var scoreGainStr = document.getElementById("inputScoreUp").value;
    var scoreLoseStr = document.getElementById("inputScoreDown").value;
    min = parseInt(minStr, 10);
    max = parseInt(maxStr, 10);
    hp = parseInt(hpStr, 10);
    scoreGain = parseInt(scoreGainStr, 10);
    scoreLose = parseInt(scoreLoseStr, 10);
    randIntGenerate();
    if (first == true) {
        document.getElementById("answer").innerHTML = "Game Started";
        first = false;
    } else if (first == false){
        document.getElementById("answer").innerHTML = "Game Reset";
    }
    hp.toString();
    document.getElementById("life").innerHTML = "Lives: " + hp;
    document.getElementById("retry").innerHTML = "";
    document.getElementById("inputGuess").value = "";
    document.getElementById("correctAnswer").innerHTML = "";
    document.getElementById("restartBtn").innerHTML = "Restart";
}
