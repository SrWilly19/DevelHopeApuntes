/*# Exercise 41

We have an object literal called `smartphone`. By using a specific method, we can "freeze" the object, so it can't be modified. Do you know what kind of method we need?

const smartphone = {
brand: "Apple",
name: "Iphone 13",
price: 1300,
};

smartphone.price = 100;

console.log(smartphone);
*/

const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};
//Debemos poner Object ya que es un objeto donde vamos hacerlo, .freeze para que lo congele y no nos deje modificarlo 
//y dentro de (objeto que queremos que mantenga todos sus valores y no se modifique)
Object.freeze(smartphone);
smartphone.price = 100;

console.log(smartphone);
