const cells = document.querySelectorAll('div');
var message = document.querySelector('p');
const restartButton = document.getElementById('restart')
var xoText = ["X", "O"];
var currentPlayer;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


cells.forEach(element => {
    element.addEventListener("click", clickForXandO);

});


restartButton.addEventListener("click", restartGame)

function clickForXandO(){  
    if(this.textContent === ""){
        currentPlayer = (currentPlayer ===  xoText[0]) ? xoText[1] : xoText[0];  
        message.textContent = (currentPlayer === xoText[0]) ? `${xoText[1]}'s turn` : `${xoText[0]}'s turn`;
        this.innerHTML = currentPlayer;

        for(let i = 0; i < winningConditions.length; i++){
            const [a, b, c] = winningConditions[i]
            if(cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer){
                checkWin(currentPlayer)
                return;
            }
        }

        var tie = true;
        cells.forEach(element => {
            if (element.textContent == "") {
                tie = false;
            }
        });

        if(tie){
            message.textContent = 'It\'s a tie!';
        }
        

    }

}


function checkWin(player){
    message.textContent = `Game Over! ${player}, you Won!`;
    cells.forEach(element => {
        element.removeEventListener("click", clickForXandO)
    })
}


function restartGame(){
    message.textContent = "";
    cells.forEach(element => {
        element.textContent = ""
        currentPlayer = xoText[1];
        element.addEventListener("click", clickForXandO)
        message.textContent = "X's turn"
    })
}



