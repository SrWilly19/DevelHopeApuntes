/*# Exercise 46

Given the following array:

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

Print all the elements of the array.

**Suggestion**
Use a for loop.
 */
const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
//Recorremos el array marcando i como la posicion del primer objeto,
//por eso empieza por 0 y tiene que llegar hasta que sea igual al tamaño
//del array, por eso ponemos el simbolo < en el momento que i es igual 
//que el tamaño, deja de iterear 
for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

