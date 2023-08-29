/*# Exercise 8

* Create a variable and set it to `true`.
* Print the value in the console and the data type.
* Convert it to a numeric data type, print the value and the data type.
* Convert it to string data type, print the value and the data type.
* Finally, convert it to a boolean data type, print the value and the data 
type.*/
let buleano = true; 
console.log(buleano);
console.log(typeof(buleano));

let changeBule = Number(buleano);
console.log(changeBule + " " + typeof(changeBule) );

let changeNum = String(changeBule);
console.log(changeNum + " " + typeof(changeNum));

let changeBool = Boolean(changeNum);
console.log(changeBool + " " + typeof(changeBool));
