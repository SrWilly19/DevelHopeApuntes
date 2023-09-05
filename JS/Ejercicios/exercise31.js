/*# Exercise 31

* Create two functions: the first one is called `sayHelloName` 
and takes is as parameter another function (the second one) called `printName`.
* The `printName` function should just execute the console.log() method and print the name.
The `sayHelloName` that takes in the callback as parameter, 
must execute the console.log() of the "Hello" string and after that invoke the function taken in as parameter.
 */

//Creamos la funcion con un callback para para llamar a la funcion
//que tenemos en la parte de abajo con el nombre en este caso (Willy)
function sayHelloName(callback){
    console.log("Hello");
    //Llamamos a la funcion que creamos abajo para que cuando se imprima por pantalla salga
    //Hello y Willy justo abajo.
    printName();
}
//Creamos la funcion que imprime nuestro nombre, no le pasamos ningun parametro.
function printName() {
    console.log("Willy")
}
//Hacemos la llamada a la funcion con el parametro que nos pide que es otra funcion. 
sayHelloName(printName);

