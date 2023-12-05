//funcion flecha de dos numeros dentro del return, si tenemos una sola operacion podemos no poner el return y quitamos los {}
const suma = () =>  { return 5 + 5};


//console.log(suma());

//funcion flecha dandole nosotros dos parametros
const suma2 = (a, b) => {return a + b};
//console.log(suma2(10,10))


//Crear un objeto e imprime por consola los valores de las propiedades, para entrar en los valores de las propiedades tenemos que poner el nombreDelObjeto.nombreDeLaPropiedadAImprimir

let car = {
    name: "Ford",
    color: "White"
};

//console.log(car.name);
//console.log(car.color);


//For in: para iterar los objetos, primero guardamos las propiedas del objeto car en claves. Con el car[claves] cogemos las propiedades de cada clave para imprimirlas, si pusiera car[name]
//solo imprimiria "Ford"
for(const claves in car){
//    console.log(claves + ": " + car[claves]);
}


let user = {
    name: "Cosimo",
    age: 30
};
//Primero debemos crear un objeto vacio para poder rellenarlo con todas las claves y valores del objeto original
let newUser = {}

//recorremos nuestro objeto user por sus claves, y las copiamos unas dentro del nuevo objeto
for (const claves in user){
    newUser[claves] = user[claves]
}
newUser.name = "Paolo"
//Si podemos imprimir dos objetos en el mismo console log
console.log(newUser, user)


function sumUpToN(number) {
    if (number < 1) {
        return "Please provide a positive integer greater than or equal to 1.";
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

// Example
var result = sumUpToN(600);
console.log(result); // Output: 10
