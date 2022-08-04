let player = 1;
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const divList = document.querySelectorAll(".inside");
const playerTxt = document.getElementById("player").innerHTML;

function addSign(div){
    if(player === 1){
        div.target.textContent = "X";
        console.log(div.target);
        document.getElementById("player_nb").textContent = 2;
        isWin();
        player = 2;
    }
    else{
        div.target.textContent = "O";
        console.log(div.target);
        document.getElementById("player_nb").textContent = 1;
        isWin();
        player = 1;
    }
    div.target.removeEventListener("click", addSign);
}


function startGame(){
    for(const div of divList){
        div.addEventListener("click", addSign);
    }
}

function isWin(){
    console.log(one.textContent===two.textContent && two.textContent===three.textContent);
    if(one.textContent === two.textContent && two.textContent === three.textContent && one.textContent !== "" ||
        four.textContent === five.textContent && five.textContent === six.textContent && four.textContent !== "" ||
        seven.textContent === eight.textContent && eight.textContent === nine.textContent && seven.textContent !== "" ||
        one.textContent === four.textContent && four.textContent === seven.textContent && one.textContent !== "" ||
        two.textContent === five.textContent && five.textContent === eight.textContent && two.textContent !== "" ||
        three.textContent === six.textContent && six.textContent === nine.textContent && three.textContent !== "" ||
        one.textContent === five.textContent && five.textContent === nine.textContent && one.textContent !== "" ||
        three.textContent === five.textContent  && five.textContent === seven.textContent && three.textContent !== ""){
            document.getElementById("player").textContent = `Le joueur ${player} a gagné !`;
            for(const div of divList){
                div.removeEventListener("click", addSign);
            }
            document.getElementById("btn").classList.add("display");
        }
}

function playAgain(){
    document.getElementById("btn").addEventListener("click", function(e){
        for(const div of divList){
            div.textContent = "";
        }
        startGame();
        document.getElementById("player").innerHTML = playerTxt;
        document.getElementById("btn").classList.remove("display");
        player = 1;
    });
}

startGame();
playAgain();