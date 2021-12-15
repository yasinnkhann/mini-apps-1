const tableCells = document.querySelectorAll('td');
const winnerMsg = document.createElement('h1');
const body = document.querySelector('body');
const resetBtn = document.getElementById('resetBtn');

let count = 0;
let player1Wins = false;
let player2Wins = false;
let isTie = false;

const playGame = () => {
  for (let i = 0; i < tableCells.length; i++) {
    tableCells[i].addEventListener('click', () => {
      if (!player1Wins && !player2Wins) {
        if (count % 2 === 0 && !tableCells[i].innerText) {
          tableCells[i].innerText = 'X';
          count += 1;
        } else if (count % 2 !== 0 && !tableCells[i].innerText) {
          tableCells[i].innerText = 'O';
          count += 1;
        }

        for (let j = 0; j < tableCells.length; j += 3) {
          // ROW CHECK
          if (tableCells[j].innerText === 'X' && tableCells[j + 1].innerText === 'X' && tableCells[j + 2].innerText === 'X') {
            winnerMsg.textContent = 'Player 1 Wins!';
            body.appendChild(winnerMsg);
            player1Wins = true;
            break;
          }
          if (tableCells[j].innerText === 'O' && tableCells[j + 1].innerText === 'O' && tableCells[j + 2].innerText === 'O') {
            winnerMsg.textContent = 'Player 2 Wins!';
            body.appendChild(winnerMsg);
            player2Wins = true;
            break;
          }
          // COLUMN CHECK
          if ((tableCells[j].innerText === 'X' && tableCells[j + 3].innerText === 'X' && tableCells[j + 6].innerText === 'X') ||
          (tableCells[j + 1].innerText === 'X' && tableCells[j + 4].innerText === 'X' && tableCells[j + 7].innerText === 'X') ||
          (tableCells[j + 2].innerText === 'X' && tableCells[j + 5].innerText === 'X' && tableCells[j + 8].innerText === 'X')) {
            winnerMsg.textContent = 'Player 1 Wins!';
            body.appendChild(winnerMsg);
            player1Wins = true;
            break;
          }
          if ((tableCells[j].innerText === 'O' && tableCells[j + 3].innerText === 'O' && tableCells[j + 6].innerText === 'O') ||
          (tableCells[j + 1].innerText === 'O' && tableCells[j + 4].innerText === 'O' && tableCells[j + 7].innerText === 'O') ||
          (tableCells[j + 2].innerText === 'O' && tableCells[j + 5].innerText === 'O' && tableCells[j + 8].innerText === 'O')) {
            winnerMsg.textContent = 'Player 2 Wins!';
            body.appendChild(winnerMsg);
            player2Wins = true;
            break;
          }
          // DIAGONAL CHECK
          if ((tableCells[j].innerText === 'X' && tableCells[j + 4].innerText === 'X' && tableCells[j + 8].innerText === 'X') ||
          (tableCells[j + 2].innerText === 'X' && tableCells[j + 4].innerText === 'X' && tableCells[j + 6].innerText === 'X')) {
            winnerMsg.textContent = 'Player 1 Wins!';
            body.appendChild(winnerMsg);
            player1Wins = true;
            break;
          }
          if ((tableCells[j].innerText === 'O' && tableCells[j + 4].innerText === 'O' && tableCells[j + 8].innerText === 'O') ||
          (tableCells[j + 2].innerText === 'O' && tableCells[j + 4].innerText === 'O' && tableCells[j + 6].innerText === 'O')) {
            winnerMsg.textContent = 'Player 2 Wins!';
            body.appendChild(winnerMsg);
            player2Wins = true;
            break;
          }
          if (count === 9) {
            winnerMsg.textContent = 'Tie Game!';
            body.appendChild(winnerMsg);
            isTie = true;
            break;
          }
        }
      }
    });
  }
};

playGame();

resetBtn.addEventListener('click', () => {
  count = 0;
  player1Wins = false;
  player2Wins = false;
  isTie = false;
  winnerMsg.innerText = '';

  for (cell of tableCells) {
    cell.innerText = ''
  }

  playGame();
});


