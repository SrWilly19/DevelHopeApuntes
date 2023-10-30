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
class Person {
  name = "";
  //Para crear una variable privada ponemos un hastag delante del nombre de la variable. No podremos acceder a ella fuera de esta clase Person, como convencion entre desarrolladores
  //todas las variables deben empezar por "_"
  _age = 0;
  nationality = "";
  //Variable statica que no cambiara y es como la hemos definido
  static nationalityArr = ["US", "UK", "AUS", "CAN"];
  constructor(name, age, nationality) {
    this.name = name; //{name: name}
    if (typeof age === "number") {
      this._age = age; //obj["age"] = age;
    } else {
      this._age = Number(age);
    }
    if (Person.#validNationality(nationality)) {
      this.nationality = nationality;
    } else {
      this.nationality = "";
    }
  }

  //Si al nombre del metodo le ponemos un hastag # tambien lo volveremos privado y no podremos acceder fuera de esta clase
  static #validNationality(nat = "") {
    //tomara el valor anterior, que sera eñ resultado de esta comparacion. Luego si alguna vez se vuelve realidad el resultado final acabara siendo cierto.
    // Y para reducir, tambien puedo dar un valor inic ial y en este caso le damos el valor inicial de falso, porque quiero asegurarme de que empezamos
    //pensando que todo es falso, de modo que cuando en realidad se vuelve cierto, potencialmente, podemos obtener eso como nuestro resultado
    return Person.nationalityArr.reduce(
      (prev, curr) => prev || curr === nat,
      false
    );
  }

  sayAge() {
    return "I am " + this._age + "years old";
  }

  //Esto se puede utilizar para cambiar valores privados los cuales de una manera normal no podriamos cambiarlos, utilizando el set y el get tenemos una variable protegida
  set age(newVal) {
    if (newVal < 1) {
      this._age = 1;
    } else if (newVal > 110) {
      this._age = 110;
    } else {
      this._age = newVal;
    }
  }

  get age() {
    return this._age;
  }
}

let greg = new Person("Greg", 28, "US");
console.log(greg);
console.log(Person.nationalityArr);
console.log(Person.validNationality("US"));

//Por si queremos extender la clase persona para estudiantes y asi poder poner mas opciones como por ejemplo asignaturas que estudias, o clase a la que va
//Utilizamos super para utilizar al constructor ya declarado en la clase Person y de esta manera no tener que repetir codigo, despues solo añadiremos
//la asignatura que esta dando y ya tendriamos nuestra nueva clase con una variable mas.
class Student extends Person {
  constructor(name, age, nationality, subject) {
    super(name, age, nationality);
    this.subject = subject;
  }
}

/*class School{
    country;
    constructor (country){
        if(Person.validNationality(country)){
            this.country = country;
        }else{
            //console.log("Invalida country")
        }
    }
}*/

let susan = new Student("Susan", 25, "Uk", "English");
console.log(susan);
console.log(susan.sayAge());

// Prototype chain!
// Object -> Person -> Student
// Student -> Person -> Object -> null prototype (obj) -> null

console.log(susan.__proto__.__proto__.__proto__.__proto__);

// Number -> Object -> null
let number = 1;
console.log(number.__proto__);

/*lass ExtendedNumber extends Number{
}*/

//De normal es mejor utilizar esto (extension de clases) en proyectos solo ya que otras personas podrian estar sobrescribiendo el tipo o la clase intetgrados a su manera
class MyArray extends Array {
  sum() {
    return this.reduce((a, b) => a + b);
  }
}

class NestedClass extends MyArray {
  max() {
    let output = -1000000;
    this.forEach((el) => {
      if (el > output) {
        output = el;
      }
    });
    return output;
  }
}

let arr = new MyArray(2, 3, 4, 5, 2);
console.log(arr.sum());
let origArr = new MyArray(3, 4, 5, 2, 4);
if (origArr instanceof MyArray) {
  console.log(origArr.sum());
}

//NestedClass -> MyArray -> Array
let nested = new NestedClass(4, 3, 3, 4, 2);
console.log(nested instanceof Array);
console.log(arr instanceof Array);
