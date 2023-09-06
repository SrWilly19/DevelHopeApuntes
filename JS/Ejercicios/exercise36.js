/*# Exercise 36

If you try to run this function, you'll get an error. Fix the function and assign to the variable `sport` a global scope. How can we do this?

function canPlay() {
let sport = " Football";

if (true) {
let personName = "Cosimo";
}

console.log(personName + sport);
}

canPlay();
 */

function canPlay() {
  var sport = " Football";
  
  if (true) {
    var personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
