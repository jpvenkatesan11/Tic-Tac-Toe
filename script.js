const turnEl=document.querySelector(".turn")
const boxEl=document.querySelectorAll(".box");
const msgEl=document.getElementById("msg");


const players=['X','O'];
let currplayer=players[0];
var someoneWon = false;

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxEl.forEach((box, i) => {
    box.addEventListener("click", () => {
        if (box.textContent !== '' || someoneWon) return;

        box.innerText = currplayer; // Set box value


        if(checkWin(currplayer)) {
            someoneWon = true;
            msgEl.textContent=`Congratulations! ${currplayer} wins!`;
            return;
            }

        if(checkTie()) {
            someoneWon = true;
            msgEl.textContent= `Game is tied!`;
            return;
                }


        currplayer = (currplayer === players[0]) ? players[1] : players[0]; // Switch player
        turnEl.innerText = `Turn: Player ${currplayer}`; // Update turn text
    
    });
});
    
    function checkWin(currplayer) {
        for(let i = 0; i < winning_combinations.length; i++){
            const [a, b, c] = winning_combinations[i]
            if(boxEl[a].textContent === currplayer && boxEl[b].textContent === currplayer && boxEl[c].textContent === currplayer){
                return true
            }
        }
        return false
    }
    function checkTie(){
        for(let i = 0; i < boxEl.length; i++) {
            if(boxEl[i].textContent === '') {
                return false;
            }
        }
        return true
    }
    function restartButton() {
        
        boxEl.forEach(box => {
            box.textContent = "";  
        });
        currplayer = players[0];
        turnEl.innerText = `Turn: Player ${currplayer}`;
        msgEl.textContent = ""; 
        someoneWon = false;
           
        }
           
      
    
