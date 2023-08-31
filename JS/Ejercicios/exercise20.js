/*# Exercise 20

Create a variable called `primitive` and assign it a value. 
Check if the value is number, string or boolean type and print it in the console.
*/

let primitive = '16';

//Averiguar porque se utilizan las comillas simples con las palabras que vamos a comparar que realmente deberian de ser tipos.
//
if(typeof(primitive) == "boolean"){
    console.log("Is boolean")
} else if(typeof(primitive) == 'number'){
   console.log("Is number")
}else{
    console.log("Is string")
}
