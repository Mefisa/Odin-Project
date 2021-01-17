const BOARD = document.querySelector("#gameboard");
const FORMSUBMIT = document.querySelector("#inputs");
const NAME1 = document.querySelector("#name1");
const NAME2 = document.querySelector("#name2");
const TITLE = document.querySelector("#title");

let player1 = "Player1";
let player2 = "Player2";

let gameBoard = (function(){
    let _cells = [];
    let _placed = Array(9).fill(-1);
    let _winningPositions = [[0,1,2], [3,4,5], [6,7,8],
                              [0,3,6], [1,4,7], [2,5,8],
                              [0,4,8], [2,4,6]];
    let _init = false;
    let _curPlayer = 1;

    function _play(cell){
        if (_placed[cell] > 0) return;
        _cells[cell].style['color'] = "black";
        _cells[cell].style['background-color'] = "white";
        _cells[cell].textContent = _curPlayer == 1? "X" : "O"
        _placed[cell] = _curPlayer;
        _curPlayer = (_curPlayer % 2) + 1;
    }

    function _clear(){
        for (const cell of _cells){
            cell.textContent = "";
        }
        _placed.fill(-1);
    }

    function _cellClick(e){
        let cell = parseInt(e.target.id.slice(-1));
        if (_placed[cell] > 0) return;
        _play(cell);
        let winner = playerWon();
        if (winner == 1){
            alert(`${player1} won!`);
            _clear();
        } else if (winner == 2){
            alert(`${player2} won!`);
            _clear();
        }
        
    }

    function _cellHover(e){
        let cell = parseInt(e.target.id.slice(-1));
        if (_placed[cell] > 0) return;
        if (e.type == "mouseenter"){
            _cells[cell].textContent = _curPlayer == 1? "X" : "O";
            _cells[cell].style['background-color'] = '#e6e6e6';
        } else {
            _cells[cell].textContent = "";
            _cells[cell].style['background-color'] = 'white';
        }
    }

    function initBoard(){
        if(_init) return;
        for(let i=0; i < 9; i++){
            let cell = document.createElement("div");
            cell.id = "cell" + i;
            cell.classList.add("cell");
            cell.textContent = "";
            cell.addEventListener('click', _cellClick);
            cell.addEventListener('mouseenter', _cellHover);
            cell.addEventListener('mouseleave', _cellHover);
            BOARD.appendChild(cell);
            _cells.push(cell);
        }
        FORMSUBMIT.addEventListener('submit', formSubmit, false);
        _init = true;
    }

    // Returns winning player, if none, returns 0
    function playerWon(){   
        for (const positions of _winningPositions){
            if (_placed[positions[0]] != -1 
            && _placed[positions[0]] == _placed[positions[1]] 
            && _placed[positions[1]] == _placed[positions[2]]){
                return _placed[positions[0]];
            }
        }
        return 0;
    }

    return {
        initBoard,
    }
})();

gameBoard.initBoard();

function formSubmit(e){
    e.preventDefault();
    player1 = NAME1.value;
    player2 = NAME2.value;
    TITLE.textContent = `${player1} vs ${player2}`;
}