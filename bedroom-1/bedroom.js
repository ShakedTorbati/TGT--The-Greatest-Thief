function note() {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    p1.classList.toggle("visible");
    p2.classList.toggle("visible");
}

function closeNote() {
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    p1.classList.remove("visible");
    p2.classList.remove("visible");
}

function homepage() {
    window.location.href = "../homepage/homepage.html"
}
