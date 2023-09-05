/*# Exercise 32

Starting from the exercise 31, we want to print the "Hello" "Name" strings after one second. In order to achieve this, we can use the setTimeout() JavaScript function. This function takes in two parameters: the first one is a function, the second one is the delay time.

**Suggestion**
Look at this [link](https://javascript.info/settimeout-setinterval) to understand better how setTimeout() works. */

function sayHelloName(callback){
    console.log("Hello");
    //Lo utilizamos aqui porque "setTimeout" llamara a la funcion (funcion, timepo que queremos tardar en que salga por pantalla.)
    //(1000 ms = 1s), por defecto tiene 0.
    setTimeout(printName, 1000)
}

function printName() {
    console.log("Willy")
}

sayHelloName(printName);
