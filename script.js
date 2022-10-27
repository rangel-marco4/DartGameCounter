var gameMaxPoints;
var firstSet = false;
var secondSet = false;

function setGamePoints(points) {
    gameMaxPoints = points;
    const newElement = document.createElement("h2");
    const node = document.createTextNode(`Playing to ${gameMaxPoints} points!`);
    newElement.appendChild(node);

    const element = document.getElementById("GameCount");
    element.appendChild(newElement);
}

function setFirstName() {
    let name = document.getElementById("playerOne").value;
    const newElement = document.createElement("h2");
    const node = document.createTextNode(name);
    newElement.appendChild(node);

    const element = document.getElementById("setFirst");
    element.appendChild(newElement);
    document.getElementById("showDiv1").style.display = "flex";
}

function setSecondName() {
    let name = document.getElementById("playerTwo").value;
    const newElement = document.createElement("h2");
    const node = document.createTextNode(name);
    newElement.appendChild(node);

    const element = document.getElementById("setSecond");
    element.appendChild(newElement);
    document.getElementById("showDiv2").style.display = "flex";
}
