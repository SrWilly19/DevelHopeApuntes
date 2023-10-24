/*function Person(name, age, nationality){
    this.name = name; //{name: name}
    if(typeof(age) === "number"){
        this.age = age; //obj["age"] = age;
    } else {
        this.age = Number(age);
    }
    this.nationality = nationality;
}*/

//Para crear una clase empezaremos con la palabra "class"
//Las clases estan hechas para ser usadas y reutilizadas, por lo que necesitamos tener alguna funcion.
//Si declaramos algunos campos en la class no nos hace falta ponerle let al principio ni darle ningun valor. Si le damos un valor es para que no se quede vacion si nuestro constructor 
//por alguna razon no lo rellenara
class Person{
    name;
    age;
    nationality;
    constructor(name, age, nationality){
        this.name = name; //{name: name}
        if(typeof(age) === "number"){
            this.age = age; //obj["age"] = age;
        } else {
            this.age = Number(age);
        }
        this.nationality = nationality;
    }
}

let greg = new Person("Greg", 28, "US");
console.log(greg); 


//Por si queremos extender la clase persona para estudiantes y asi poder poner mas opciones como por ejemplo asignaturas que estudias, o clase a la que va
//Utilizamos super para utilizar al constructor ya declarado en la clase Person y de esta manera no tener que repetir codigo, despues solo añadiremos 
//la asignatura que esta dando y ya tendriamos nuestra nueva clase con una variable mas.
class Student extends Person{
    constructor(name, age, nationality, subject){
        super(name, age, nationality);
        this.subject = subject;
    }
}

let susan = new Student("Susan", 25, "Uk", "English");
console.log(susan); 

// Prototype chain!
// Object -> Person -> Student
// Student -> Person -> Object -> null prototype (obj) -> null

console.log(susan.__proto__.__proto__.__proto__.__proto__);

// Number -> Object -> null
let number = 1;
console.log(number.__proto__);

class ExtendedNumber extends Number{

}