/*# Exercise 27

Print in the console all the even numbers from 0 to 20

**Suggestion**
In order to check if a number is even or odd, try to use the reminder operator [https://it.javascript.info/operators](https://it.javascript.info/operators)*/

let number = 0;

while(number <= 20){
    if(number % 2 == 0){
        console.log(number); 
    }
    number += 1;
}