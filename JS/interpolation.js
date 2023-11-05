class Person {
    name = "";
    age = 0;

    constructor(name, age){
        this.name = name;
        if(typeof(age) === "number"){
            this.age = age;
        } else {
            this.age = Number(age);
        }
    }

    sayAge(){
        //Utilizamos comillas simples para que ` elimine todas las "ventajas" pero si queremos que coja alguna variable podemos ponerla con ${variable}
        //dentro de esta frase tambien podemos realizar operaciones como la siguiente de age === 1, aqui lo que estamos haciendo es comparar la edad de la persona dada
        //para poder seleccionar si tiene 1 año o mas y ponerlo en singular o plural, añadiendo al final de la palabra una s.
        return `I am ${this.age} year${this.age === 1 ? "" : "s"} old`;
    }
}

let susan = new Person ("Susan", 35);
let baby = new Person ("Susan Jr", 1);

//Tambien con nuestra nueva plantilla podemos tener varias lineas de cadenas de texto y con las comillas no podriamos imprimirlo, pero con la tilde si, ademas mantendra el formato que 
//le hemos dado
let bigString = `
    This is a multi-line string
    Hello
    Hello
`;

let condA = true;
let condB = false;

let cssClass = `red ${condA ? "dotted" : condB ? "big" : ""}`
let mathClass = `red ${4 + 5}`; //Imprimira "red 9", ya que realiza las operaciones matematicas
let objClass = `red ${susan.name}`; //Imprimira "red Susan", ya que tambien permite coger datos de un objeto.