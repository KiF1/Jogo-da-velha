
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
    square.addEventListener('click', handleClick);
})  
let winPlayer1 = document.querySelector("#winPlayer1");
  let winPlayer2 = document.querySelector("#winPlayer2");
  winPlayer1.innerHTML = 0;
  winPlayer2.innerHTML = 0;
});

let counterP1 = 0;
let counterP2 = 0;

function handleClick(event) {

let player1 = document.querySelector("#namePlayer1");
  let player2 = document.querySelector("#namePlayer2");
  let player1Name = player1.value;
  let player2Name = player2.value;
  let square = event.target;
  let position = square.id;

  let playerName = "";

  if (handleMove(position)) {

    if (playerTime == 0) {
      counterP1++;
      winPlayer1.innerHTML = counterP1;
    } else {
      counterP2++;
      winPlayer2.innerHTML = counterP2;
    }

    
    if (player1Name != "" || player2Name != "") {
      if (playerTime == 0) {
        playerName = player1Name;
      } else {
        playerName = player2Name;
      }

      setTimeout(() => {
        alert("A batalha acabou! " +  playerName + " venceu.");
      }, 20);
    } else if (player1Name == "" || player2Name == "") {
      if (playerTime == 0) {
        playerName = "Caveira";
      } else {
        playerName = "Biozard";
      }
      setTimeout(() => {
        alert("A batalha acabou! " +  playerName + " venceu.");
      }, 20);
    }
  }

  if ((countTurn0 >= 5 || countTurn1 >= 5) && !gameOver) {
    setTimeout(() => {
      alert("A batalha acabou!Não houve vencedor.");
    }, 20);
  }
  updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
  }
  function updateSquares() {

    let player1 = document.querySelector("#namePlayer1");
  let player2 = document.querySelector("#namePlayer2");
  let player1Name = player1.value;
  let player2Name = player2.value;
    if(player1.value == ""){player1Name = "Caveira";}
  if(player2.value == ""){player2Name = "Biozard";}
  
  let playerName = "";

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol == "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });

  if (playerTime == 0) {
    playerName = player1Name;
  } else {
    playerName = player2Name;
  }

  setTimeout(() => {
    alert("A Batalha  foi reiniciada! Agora é a vez de " + playerName + "começar");
  }, 20);

}

  function restartWins() {
    counterP1 = 0;
    counterP2 = 0;
    winPlayer1.innerHTML = counterP1;
    winPlayer2.innerHTML = counterP2;
  }




































//     let square = event.target;
//     let position = square.id;

//    if (handleMove(position)) {

//     setTimeout(() => {
//        alert(" O Jogo Acabou");
//    }, 10);
  

//    };
//    updateSquare(position);
// }

// function updateSquare(position){
//     let square = document.getElementById(position.toString());
//     let symbol = board[position];
//     square.innerHTML = `<div class='${symbol}'></div>`
// 