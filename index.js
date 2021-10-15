var randomNumber1 = Math.floor(Math.random() * 6)+1;

// console.log(randomNumber1);

var diceImage = "dice"+randomNumber1+".png";
var imagePath = "images/" + diceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , imagePath);

//-----

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var imagePath2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src" , imagePath2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!!!"
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins";
}
