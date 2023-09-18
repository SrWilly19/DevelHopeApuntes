/*# Exercise 47

Given the following array:

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

* Remove the element `Giovanni`.
* Add a new element called `Pippo` at the end of the array.
* Add the element `Giovanni` to the beginning of the array.

**Suggestion**

Look at the official [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) to find the right methods
 */

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
//Utilizamos tantos console.log para poder ver que todo se realiza corretamente.
console.log(names);
//Elimina el ultimo elemento de la lista
names.pop();
console.log(names);
//Agregar elementos al final de un array
names.push("Pippo");
console.log(names);
//Agrega elementos al prinicio del array
names.unshift("Giovanni");
console.log(names);
