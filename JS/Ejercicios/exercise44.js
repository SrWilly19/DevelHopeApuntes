/*# Exercise 44

Given the following array:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

* Print the first element of the array.
* Print the last element of the array.
* Print the array length.
* Print the twentieth element of the array and explain the output.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Los arrays empiezan desde el 0 y acaban en un numero menos al que deberia de ser 
console.log(numbers[0]);
console.log(numbers[9]);
console.log(numbers.length);//Nos dara el tamaño del array
console.log(numbers[19])//Undefined ya que no hay tantos numeros en el array