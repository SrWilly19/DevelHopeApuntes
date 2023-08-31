/*# Exercise 16

Create two boolean variables called `isSunnyDay` and `isHomeworkCompleted`. 
Assign them a value. Use the Ternary Operator in order to print `Jesse can go out to play`, if both variables are true. 
If one of them or both are false print `Jesse stays home`.*/

let isSunnyDay = true, isHomeworkCompleted = false;

const mensaje = isSunnyDay === true && isHomeworkCompleted === true ? "Jesse can go out to play" : "Jessy stays home";

console.log(mensaje);