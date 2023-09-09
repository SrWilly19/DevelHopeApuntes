/*Write a function that takes an array of numbers as a parameter and returns a new array of only the prime numbers in the original array. 
Print the new array.

## Suggestion ##
Use a for loop to iterate through the array and a nested for loop to check if each number is divisible by any number other than 1 and itself.
 */

let numbers = [1, 3, 5, 6, 24, 32, 65];
function primeNumbers(arr) {
    let primesArr = [];
    for (let i = 0; i < arr.length; i++) {
        //declaramos el booleano
      let isPrime = true;
      //Compara los numeros del array si son iguales a 1, convierte isprime en falso.
      if (arr[i] === 1) {
        isPrime = false;
      } else {
        
        for (let j = 2; j < arr[i]; j++) {
          if (arr[i] % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primesArr.push(arr[i]);
      }
    }
    return primesArr;
  }
  
    
  console.log(primeNumbers(numbers));