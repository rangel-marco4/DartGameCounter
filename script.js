var gameMaxPoints, playerOneSum, playerTwoSum;
var firstCount = true;
let firstName, secondName;
var temp1 = 0, temp2 = 0;


function setGamePoints(points) {
    gameMaxPoints = points;
    const newElement = document.createElement("h2");
    const node = document.createTextNode(`Playing to ${gameMaxPoints} points!`);
    newElement.appendChild(node);

    const element = document.getElementById("GameCount");
    element.appendChild(newElement);

    document.getElementById("setPlayerNames").style.display = "flex";
}


function setNames(){
    firstName = document.getElementById("playerOne").value;
    secondName = document.getElementById("playerTwo").value;
    const firstElement = document.createElement("h2");
    const secondElement = document.createElement("h2");
    const firstNode = document.createTextNode(firstName);
    const secondNode = document.createTextNode(secondName);
    firstElement.appendChild(firstNode);
    secondElement.appendChild(secondNode);
    const firstEl = document.getElementById("setFirst");
    const secondEl = document.getElementById("setSecond");
    firstEl.appendChild(firstElement);
    secondEl.appendChild(secondElement);
    

    if(gameMaxPoints!=null){
        document.getElementById("showDiv1").style.display = "flex";
        document.getElementById("showDiv2").style.display = "flex";
        document.getElementById("playersDiv").style.display = "flex";
    }
    
}

function calculatePoints(){
    let d1 = Number(document.getElementById("dart1").value);
    let d2 = Number(document.getElementById("dart2").value);
    let d3 = Number(document.getElementById("dart3").value);
    let d4 = Number(document.getElementById("dart4").value);
    let d5 = Number(document.getElementById("dart5").value);
    let d6 = Number(document.getElementById("dart6").value);

    playerOneSum =  addSumOne(d1, d2, d3);
    playerTwoSum =  addSumTwo(d4, d5, d6);
    if(firstCount){
        let firstElement = document.createElement('h2');
        let secondElement = document.createElement('h2');
        let nodeFirst = document.createTextNode(`${firstName}: ${playerOneSum.toString()}`);
        let nodeSecond = document.createTextNode(`${secondName}: ${playerTwoSum.toString()}`)
        firstElement.appendChild(nodeFirst);
        secondElement.appendChild(nodeSecond);
        firstElement.setAttribute("id", "firstScore");
        secondElement.setAttribute("id", "secondScore");
        const element = document.getElementById("scores");
        element.appendChild(firstElement);
        element.appendChild(secondElement);
        firstCount = false;
    }
    else{
        document.getElementById("firstScore").innerHTML = `${firstName}: ${playerOneSum.toString()}`;
        document.getElementById("secondScore").innerHTML = `${secondName}: ${playerTwoSum.toString()}`;
    
    }
    
    
    document.getElementById('scores').style.display = "flex";
    document.getElementById('resetDartValues').style.display = "flex";
}

function clearDarts() {
    document.getElementById("dart1").value = '';
    document.getElementById("dart2").value = '';
    document.getElementById("dart3").value = '';
    document.getElementById("dart4").value = '';
    document.getElementById("dart5").value = '';
    document.getElementById("dart6").value = '';
}

function addSumOne(a, b, c){
    var sum1 = a + b + c;
    temp1 += sum1;

    return temp1;
}

function addSumTwo(a, b, c){
    var sum2 = a + b + c;
    temp2 += sum2;

    return temp2;
}