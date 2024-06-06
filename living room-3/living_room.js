function homepage(){
    window.location.href = "../homepage/homepage.html";
}

function solve(){
    var answer = prompt("What is your answer?");
    if (answer) {
        var normalizedAnswer = answer.trim().toLowerCase();
        if (normalizedAnswer === "ladder") {
            alert("You are right! The thief didn't use a ladder! click on go to homepage!");
        } else {
            alert("Nope!Try again");
        }
    } else {
        alert("You didn't enter anything!");
    }
}
