function poppic(){
    var woodbord2=document.getElementById("picture")
    woodbord2.style.width="500px";
    woodbord2.style.height="500px";
    var board_container=document.getElementById("board-container")
    board_container.style.display="block";
}
function homepage(){
    window.location.href = "../homepage/homepage.html";
}
function right(){
    alert("You are right, She was the thief!you are a good inspector!")
}
function wrong(){
    alert("Nope!you are a bad inspector!");
}