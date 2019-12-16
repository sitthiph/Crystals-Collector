let wins = 0;
let losses = 0;
let gameState = false;

$(document).ready(function() {
    /* initializing the game's value */
    // Random number between 19 - 120
    let gameScore = Math.floor(Math.random() * 102) + 19;
    // Each crystal should have value between 1 - 12
    let diamond = Math.floor(Math.random() * 12) + 1;
    let emerald = Math.floor(Math.random() * 12) + 1;
    let gold = Math.floor(Math.random() * 12) + 1;
    let redstone = Math.floor(Math.random() * 12) + 1;
    let currentScore = 0;

    $("#diamond").click(function () {
        if(!gameState)
            gameStart();
        else {
            currentScore += diamond;
            gameUpdate();
        }
    });
    $("#emerald").click(function () {
        if(!gameState)
            gameStart();
        else {
            currentScore += emerald;
            gameUpdate();
        }
    });
    $("#gold").click(function () {
        if (!gameState)
            gameStart();
        else {
            currentScore += gold;
            gameUpdate();
        }
    });
    $("#redstone").click(function () {
        if (!gameState)
            gameStart();
        else {
            currentScore += redstone;
            gameUpdate();
        }
    });

    //Function to regenerate a new game.
    function gameStart() {
        gameState = true;
        // Random number between 19 - 120
        currentScore = 0;
        gameScore = Math.floor(Math.random() * 102) + 19;
        // Each crystal should have value between 1 - 12
        diamond = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        gold = Math.floor(Math.random() * 12) + 1;
        redstone = Math.floor(Math.random() * 12) + 1;
        $("#game-score").text("Game Score: " + gameScore);
        messageUpdate();
    }
    function gameUpdate() {
        // Lose condition
        if(gameScore < currentScore) {
            $("#message").html("<span style='color: red'>Oh no! you went over by " + (currentScore - gameScore) + " points.<br>" +
                "Let's not end on a lost!<br>" +
                "Play again by pressing on any of the crystals</span>");
            losses++;
            $("#win-lose").text("Wins: "+ wins + " Losses: " + losses);
            gameState = false;
        }
        // Win condition
        else if(gameScore === currentScore) {
            $("#message").html("<span style='color: green'>You did it! That was amazing!<br>" +
                "but I bet you can't do it again.<br>" +
                "Simply press any of the crystals to play another round :)</span>");
            wins++;
            $("#win-lose").text("Wins: "+ wins + " Losses: " + losses);
            gameState = false;
        }
        // Game continues
        else
            messageUpdate()
    }
    
    function messageUpdate() {
        $("#message").text("You\'re " + (gameScore - currentScore) + " points away");
    }
});