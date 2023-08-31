/*# Exercise 22

Rewrite the exercise 20, by using a Switch statement.

Ejercicio 20: 

let primitive = '16';
if(typeof(primitive) == "boolean"){
    console.log("Is boolean")
} else if(typeof(primitive) == 'number'){
   console.log("Is number")
}else{
    console.log("Is string")
    */

const primitive = 1;

switch(typeof(primitive)){
    case "boolean":
        console.log("Is boolean");
        break;
    case "number":
        console.log("Is number");
        break;
    default:
        console.log("Is string");
        break;
}

