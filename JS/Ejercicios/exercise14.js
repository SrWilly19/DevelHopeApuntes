/*# Exercise 14

Complete the expressions inside the console.log(), by using the correct logical operator. 

const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

console.log(question1 ... question2) //the result must be true
console.log(question1 ... question2) //the result must be false
console.log(question3 ... question2) //the result must be true
console.log(question4 ... question4) //the result must be false
console.log(question2 ... question4) //the result must be false
*/

const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

//Utilizamos el simbolo "!" para cambiar el resultado, lo cambiara en sentido contrario, es decir si es true sera false y viceversa
console.log(question1 || question2) //the result must be true
console.log(question1 && question2) //the result must be false
console.log(question3 || question2) //the result must be true
console.log(question4 && !question4) //the result must be false
console.log(question2 && !question4) //the result must be false
