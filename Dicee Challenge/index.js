let randomNumber = Math.ceil((Math.random() * 6));

let randomDiceImage = "dice" + randomNumber + ".png";

let randomImageSource = "images/" + randomDiceImage;

let img1 = document.querySelectorAll('img')[0];

img1.setAttribute('src', randomImageSource);


let randomNumber1 = Math.ceil((Math.random() * 6));

let randomDiceImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomDiceImage1;

let img2 = document.querySelectorAll('img')[1];

img2.setAttribute('src', randomImageSource1);

if (randomNumber > randomNumber1) {
    document.querySelector('h1').innerHTML = "🏆 Player 1 wins"
}
else if (randomNumber < randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 wins 🏆"
}
else {
    document.querySelector('h1').innerHTML = "Draw !"
}