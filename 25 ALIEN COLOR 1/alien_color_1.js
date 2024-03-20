"use strict";
// Create a variable called alien_color.
let alien_color = 'green';
// Write an if statement to test whether the aliens color is green. If it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player Just earned 5 points !");
}
// Write our version of this program date passes the if test and another date fails.
alien_color = 'yellow';
//The Virgin that fails will have no output.
if (alien_color === 'green') {
    console.log("Player Just earned 5 pointd");
}
