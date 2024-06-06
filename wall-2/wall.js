alert("Click on the suspects to get to know them. Pay attention to everything; it may help you!")
function show(){
    var info = document.getElementById("info").style.visibility="visible";
    var info_p = document.getElementById("info_p");
}
function homepage() {
    window.location.href = "../homepage/homepage.html";
}
function bell() {
    show();
    info_p.innerHTML="Bell Montgomery, a 32-year-old resident of New Orleans, is under suspicion for the recent theft at Oakhaven Manor. Known for her quick wit and dexterous hands, Bell works as a professional magician, often captivating audiences with her sleight of hand and illusion tricks. However, her talents have also earned her a reputation for being able to acquire objects without detection, leading investigators to believe she could be the mastermind behind the heist.";
}
function closeInfo() {
    var info = document.getElementById("info");
    info.style.visibility="hidden";
}
function Scarlett() {
    show();
    info_p.innerHTML="Scarlett Ravenwood, a 28-year-old resident of Los Angeles, is one of the primary suspects in the Oakhaven Manor theft. As a former actress turned socialite, Scarlett is known for her glamorous lifestyle and vast collection of expensive jewelry. Her sudden wealth and connections to underground circles have raised suspicions, leading investigators to believe she might have orchestrated the heist to maintain her luxurious image.";
}
function Miguel(){
    show();
    info_p.innerHTML="Miguel Santos, a 35-year-old resident of Miami, is a key suspect in the Oakhaven Manor theft. Miguel is a skilled locksmith who has previously been linked to several high-profile burglaries. His extensive knowledge of security systems and recent financial troubles have made him a prime suspect in the heist, as authorities believe he may have used his expertise to gain access to the manor's valuable artifacts.";
}
function Bruce(){
    show();
    info_p.innerHTML="Bruce Hawthorne, a 32-year-old billionaire residing in New York City, is under suspicion for the Oakhaven Manor theft. Despite his immense wealth, Bruce has been known to collect rare artifacts, often through dubious means. His presence at the manor on the night of the theft and his previous attempts to acquire the stolen artifact have made him a prime suspect in the investigation.";
}

