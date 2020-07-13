/* This first part is used to calculate random number from 1-6 for dice roll*/
var randomNumber1 = Math.random(); // Assign a random number from 0-0.99999999999 to a variable
randomNumber1 = randomNumber1 * 6; // multiply that value with the amount of numbers you want to randomly generate. In this instance 6
randomNumber1 = Math.floor(randomNumber1);// use the math.floor function to round the value you get down; Ex 5.5555 = 5
randomNumber1 = randomNumber1 + 1;// Doing this changes the value range assigned from doing this from 0-5 to 1-6
/* This is how you generate a random number from 1-6*/
/*Now we need to have the random number correlate with the dice source so that we can change the image*/
var randomDiceImage = "dice"+randomNumber1+".png";// use concatenation to create a string value for the file name using our random number; assign that concatted value to a variable
var randomImageSource= "images/"+randomDiceImage;// concat that string value found above with the file string "image\"
var image1 = document.querySelectorAll("img")[0];// use dom command querySelector to find the image you want to change and assign that value to a variable
image1.setAttribute("src", randomImageSource);// using all the variables you created use the setAttribute() method to change the img to a new random source from our images file

/*Repeat the same process for player 2's dice*/
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2 + 1;

var randomDiceImage2 =  "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2 );

/*Conditionals used to determine the winner*/
if (randomNumber1 > randomNumber2){ // if player 1's dice roll is bigger
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; // replace h1 heading to player 1 wins
}
else if (randomNumber1 < randomNumber2){ // else if player 2's dice roll is bigger
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; // replace h1 heading to player 2 wins
}
else{ // else
  document.querySelector("h1").innerHTML = "Draw!"; // replace h1 heading to draw
}
