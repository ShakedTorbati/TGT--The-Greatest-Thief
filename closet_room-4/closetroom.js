var Xscore = 0;
var Oscore = 0;
var gameEnded = false; // Flag to check if the game has ended
var currentPlayer = 'x'; // Track the current player

function generateGame(){
    var tryagain = document.getElementById("tryagain").style.visibility = "hidden";
    alert("To know the next clue, you'll have to beat me!");
    x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    o = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counter = 0;
    gameEnded = false; // Reset the game end flag
    document.getElementById("game-board").innerHTML = "";
    var buttonId = 0;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.setAttribute("class", "grid-cell");
            button.setAttribute("onclick", "markCheck(this)");
            button.setAttribute("value", " ");
            document.getElementById("game-board").appendChild(button);
            button.setAttribute("id", buttonId);
            buttonId++;
        }
        var breakline = document.createElement("br");
        document.getElementById("game-board").appendChild(breakline);
    }
    currentPlayer = 'x'; // Set the user as the first player
}

const patterns = [
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0]
];

var x = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var o = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var counter = 0;
function markCheck(obj){
    if (gameEnded || obj.value !== " ") return; // Prevent further moves if the game has ended or cell is not empty

    counter++;

    if (currentPlayer == "x"){
        obj.setAttribute("value", "x");
        obj.setAttribute("class", "red-player");
        console.log("player X marked", obj.id);
        x[obj.id] = 1;
        currentPlayer = "o"; // Switch to computer's turn
        obj.setAttribute("disabled", "disabled");
    }

    var xwin = checkPlayerHasAnyWinningPattern(x);
    var owin = checkPlayerHasAnyWinningPattern(o);

    if (xwin == true){
        gameEnded = true; // Set the flag to indicate the game has ended
        EndGame();
        window.alert("Oh, you won, but it's not the end! The clue is that the thief didn't have red hair! Click on go back to homepage!");
        var homepage = document.getElementById("homepage").style.visibility = "visible";
        return; // Exit to prevent further moves
    } else if (counter == 9) {
        alert("Draw! Try again");
        var tryagain = document.getElementById("tryagain").style.visibility = "visible";
        return; // Exit to prevent further moves
    }

    if (currentPlayer == "o" && !gameEnded) {
        setTimeout(computer, 500); // Computer makes a move after a short delay
    }
}

function iswinningpattern(winpattern, moves){
    check_pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 9; i++){
        check_pattern[i] = winpattern[i] * moves[i];
    }
    for (let j = 0; j < 9; j++){
        if (check_pattern[j] != winpattern[j]){
            return false;
        }
    }
    return true;
}

function checkPlayerHasAnyWinningPattern(moves){
    for (let i = 0; i < 8; i++){
        var answeri = iswinningpattern(patterns[i], moves);
        if (answeri == true){
            return true;
        }
    }
    return false;
}

function EndGame(){
    for(let buttonId = 0; buttonId < 9; buttonId++){
        document.getElementById(buttonId).setAttribute("disabled", "disabled");
    }
}

function computer(){
    var avail = [];
    for (let i = 0; i < 9; i++){
        if (x[i] == 0 && o[i] == 0){
            avail.push(i);
        }
    }
    var RandomNum = Math.floor(Math.random() * avail.length);
    var compbutton = document.getElementById(avail[RandomNum]);
    compbutton.setAttribute("value", "o");
    compbutton.setAttribute("class", "green-player");
    console.log("computer O marked", compbutton.id);
    o[compbutton.id] = 1;
    compbutton.setAttribute("disabled", "disabled");
    counter++;

    var owin = checkPlayerHasAnyWinningPattern(o);
    if (owin == true){
        gameEnded = true; // Set the flag to indicate the game has ended
        EndGame();
        window.alert("I won HaHaHa, You can try again but I will beat you! You can try again");
        var tryagain = document.getElementById("tryagain").style.visibility = "visible";
    } else if (counter == 9) {
        alert("Draw! Try again (click on the safe again)");
        var tryagain = document.getElementById("tryagain").style.visibility = "visible";
    }

    currentPlayer = "x"; 
}

function homepage(){
    window.location.href = "../homepage/homepage.html";
}
