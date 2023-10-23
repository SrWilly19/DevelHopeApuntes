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
//Las clases estan hechar para ser usadas y reutilizadas, po lo que necesitamos tener alguna funcion
class Person{
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