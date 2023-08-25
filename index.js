//🚩

//Create random number for player 1 & 2
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var listOfDiceImage = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

//Selector
var title = document.querySelector("h1");
var dices = document.querySelectorAll(".dice img");

//Change number in dice based on random number
dices[0].setAttribute("src", listOfDiceImage[randomNumber1]);
dices[1].setAttribute("src", listOfDiceImage[randomNumber2]);

//Show player who is win/lose/draw
if (randomNumber1 < randomNumber2) {
  title.innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 2 wins! 🚩";
} else {
  title.innerHTML = "Draw!";
}
