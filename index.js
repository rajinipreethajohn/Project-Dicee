var randomNumber1 = Math.floor(Math.random() * 6) +
  1;

console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// NEVER DO THE BELOW: DONT COPY, as it will lead to same number ON both dicee!!!!!!

// var image2 = document.querySelectorAll("img")[1];
//
// image2.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) +
  1;

console.log(randomNumber2);

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);

// Annoucing Winner and Draw (NOTE: The below can ALSO BE written with if/ else if and else)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩"
}



if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}



if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}
