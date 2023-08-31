/*# Exercise 19

Given the variables `name` and `surname`, create an `if else` statement to print the full name. The full name must be printed only if `name` and `surname` are `truthy`, 
otherwise print the message: `Full name is invalid`.

let name;
let surname = 'Rossi';*/


let name;
let surname = 'Rossi';

//Mirar despues
//if(name == true && surname == true)

if(name && surname){
    console.log(name + " "  + surname);
}else{
    console.log("full name is invalid");
}