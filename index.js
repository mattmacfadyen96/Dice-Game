var randomNumber1;
var randomNumber2;

function rollDice1() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber1Path = "images/dice" + randomNumber1 + ".png";
  var image = document.getElementById('first-die-img');
  image.setAttribute("src", randomNumber1Path);
  decideWinner();
}

function rollDice2() {
  randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2Path = "images/dice" + randomNumber2 + ".png";
  var image = document.getElementById('second-die-img');
  image.setAttribute("src", randomNumber2Path);
  decideWinner();
}

function decideWinner() {
  console.log(randomNumber1);
  console.log(randomNumber2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
  }
  else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
  }
  else if(randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = "Draw!";
  }
}
