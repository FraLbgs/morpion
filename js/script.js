let player = 1;

// document.getElementById("container").addEventListener("click", addSign);

function addSign(div){
        if(player === 1){
            document.getElementById("player_nb").textContent = 2;
            div.target.textContent = "X";
            player = 2;
        }
        else{
            document.getElementById("player_nb").textContent = 1;
            div.target.textContent = "O";
            player = 1;
        }
        console.log(div.target);
    div.target.removeEventListener("click", addSign);
}

const divList = document.querySelectorAll(".inside");

for(const div of divList){
    div.addEventListener("click", addSign);
}