/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var score1 = 0;//this can be done but it not clean
// var score2 = 0;

// var scores, roundScore, activePlayer, gamePlaying;
// init();

// //document is used to acces to the dom
// //querySelector to select elament from html

// // document.querySelector("#current-" + activePlayer).textContent = dice; //textcontent change the element
// // //textcontent only change the simple text.
// // //innerhtml can provide html to the element
// // // document.querySelector("#current-" + activePlayer).innerHTML =
// // //   "<em>" + dice + "<em>";

// // var x = document.querySelector("#score-0").textContent; //for reading element
// // console.log(x);

// // function btn() {
// //   //do something here
// // }

// // document.querySelector(".btn-roll").addEventListener("click", btn); //call by function here function is call by another function and here () argument is not applied.

// document.querySelector(".btn-roll").addEventListener("click", function () {
//   if (gamePlaying) {
//     // 1. Random number
//     dice = Math.floor(Math.random() * 6) + 1;

//     // 2. Display the result
//     var diceDOM = document.querySelector(".dice");
//     diceDOM.style.display = "block";
//     diceDOM.src = "dice-" + dice + ".png";

//     // 3. Update the round score If the rolled number was NOT a 1
//     if (dice !== 1) {
//       //to avoiod type cortion
//       roundScore += dice;
//       document.querySelector(
//         "#current-" + activePlayer
//       ).textContent = roundScore;
//     } else {
//       //next player
//       nextPlayer();
//     }
//   }
// });

// document.querySelector(".btn-hold").addEventListener("click", function () {
//   if (gamePlaying) {
//     scores[activePlayer] += roundScore;
//     document.getElementById("score-" + activePlayer).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 20) {
//       document.getElementById("name-" + activePlayer).textContent = "WINNER!";
//       document.querySelector(".dice").style.display = "none";
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.add("winner");
//       document
//         .querySelector(".player-" + activePlayer + "-panel")
//         .classList.toggle("active");
//       gamePlaying = false;
//     } else {
//       nextPlayer();
//     }
//   }
// });

// function nextPlayer() {
//   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //ternary operator
//   roundScore = 0;

//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";

//   document.querySelector(".player-0-panel").classList.toggle("active");
//   document.querySelector(".player-1-panel").classList.toggle("active");

//   // document.querySelector('.player-0-panel').classList.remove('active');
//   // document.querySelector('.player-1-panel').classList.add('active');

//   document.querySelector(".dice").style.display = "none";
// }

// document.querySelector(".btn-new").addEventListener("click", init);

// function init() {
//   scores = [0, 0];
//   roundScore = 0;
//   activePlayer = 0;

//   gamePlaying = true; //this is not coorrect because the variable is not in global scope and all the other function has only access global scope or scope of parents.

//   document.querySelector(".dice").style.display = "none"; //changing css thorugh javascript

//   document.getElementById("score-0").textContent = "0";
//   document.getElementById("score-1").textContent = "0";
//   document.getElementById("current-0").textContent = "0";
//   document.getElementById("current-1").textContent = "0";
//   document.getElementById("name-0").textContent = "Player 1";
//   document.getElementById("name-1").textContent = "Player 2";
//   document.querySelector(".player-0-panel").classList.remove("winner");
//   document.querySelector(".player-1-panel").classList.remove("winner");
//   document.querySelector(".player-0-panel").classList.remove("active");
//   document.querySelector(".player-1-panel").classList.remove("active");
//   document.querySelector(".player-0-panel").classList.add("active");
// }

//challenge

var scores, roundScore, activePlayer, gamePlaying, storeSix;
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // 3. Update the round score If the rolled number was NOT a 1
    if (dice === 6) {
      storeSix = dice;
      console.log(storeSix);
    } else if (storeSix !== dice && dice !== 6) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.toggle("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); //ternary operator
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true; //this is not coorrect because the variable is not in global scope and all the other function has only access global scope or scope of parents.

  document.querySelector(".dice").style.display = "none"; //changing css thorugh javascript

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
