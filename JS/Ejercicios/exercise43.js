/*# Exercise 43

We want to add to the `student` object a nested object called `personalData`,
 that has 3 properties: `name`, `surname`, `age`. 
 Print in the console the `personalData` object.

const student = {
id: 1,
school: "Liceo",
year: 3,
};
 */

const student = {
  id: 1,
  school: "Liceo",
  year: 3,
  //Podemos meter un objeto dentro de un objeto, con los nuevos datos
  personalData: {
    name: "Willy",
    surname: "Coral",
    age: 25
  }
};
//Para acceder a ellos tendremos que poner el . justo despues del objeto raiz,
//despues pondremos el objeto que queremos coger e imprimirlo por pantalla

console.log(student.personalData);