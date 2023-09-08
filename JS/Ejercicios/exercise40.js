/*# Exercise 40

Starting from the exercise 39, do you know any other way to copy the `user` object without changing its properties?

**Suggestion**
This time you wouldn't need a `for in` loop.
You would need a new copy of the `user` object
You can find some useful [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
 */

let user = {
  name: "Cosimo",
  age: 30,
};
//Con object.assign copiamos la propiedad de un objeto y luego podremos modificarlo modificando el objeto original
//como parametros tenemos el destino y la fuente.
//El destino es donde queremos ir y copiar nuestra propiedad
//La fuente es de donde queremos tomar la propiedad
//Para el objeto simplemente insertamos un objeto vacio y le preguntamos a la fuente que especifiquemos nuestro usuario.
//El nuevo usuario tendra los mismos valores que el usuario.
let newUser = Object.assign({},user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
