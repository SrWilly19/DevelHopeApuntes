/*# Exercise 42

Create a constructor function called `Smartphone` that takes in 3 parameters: 
`brand`,`name`, `price`. To create an object from a constructor function, 
we use the `new` keyword. Create two different objects.
 */
//Creamos una funcion con los parametros que tendran los objetos que crearemos a partir
//de la funcion.
function smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}
//Creamos los objetos pasando los datos que quieran los parametros.
const android = new smartphone("Samsung", "Galaxy One", 1000);
const apple = new smartphone("Apple", "Iphone 12", 1500);
 
console.log(apple);
console.log(android);