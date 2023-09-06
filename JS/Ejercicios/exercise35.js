/*# Exercise 35

If you run this function, you'll get an error. Fix the function and explain briefly what's wrong.

function canPlay() {
let sport = " Football";

if (true) {
let personName = "Cosimo";
}

console.log(personName + sport);
}

canPlay();

**Suggestion**
Be careful with the variables scope. */

//Estamos intentando acceder a una varibale desde fuera, cuando la hemos declarado dentro del if,
//Nos da error diciendo que personName no esta declarada ya que no la encuentra.

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }

  
}

canPlay();
