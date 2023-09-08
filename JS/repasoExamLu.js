//Los parametros que pasamos por los parentesis de la funcion se pueden utilizar dentro de la funcion.
function saludar(nombre, apellido, telefono){
    const saludo = "Buen dia " + nombre + apellido +  telefono;
    //Tendremos que poner el return para que nos lo devuelva
    //un resultado
    return saludo;
    //Este de aqui abajo no se ejecuta porque ya le hemos dado el return y eso hace que devuelva todo lo que ha hecho hasta ahora
    console.log(saludo);
} 
const saludo = saludar("Michel", "Chamarez", "+39");
console.log(saludo);

/*Tipos de declaracion de variables.
var let const 

//Operadores logicos
> >= < <=
|| //or
&& //and 
!  //negacion*/

let a = 10;
let b = 5; 

if(a > b){
    console.log("A >= B")
}else if(a < b){
    console.log("A < B")
}else{
    console.log("A == B")
}


let diaDeLaSemana = "viernes";

//Recordar en cada caso poner break para que salga del caso.
//La variable y los casos tienen que seguir la misma sintaxis o convertirlo en minusculas (.tolowercase) o mayuscula (.toUppercase)
switch(diaDeLaSemana){
    case "lunes":
        break;
    
    case "viernes":
        console.log("Hoy es viernes");
        break;
    default:
        break;
}

const miObjeto = {
    nombre: "Michel",
    edad: 34,
    lenguajes:["Javascript", "java", "go"],
    auto:{
        marca: "ford",
        modelo: "Mustang"
    }
}

for(const key in miObjeto){
    if(typeof miObjeto[key] === "objeto"){
        console.log(miObjeto[key]);
    }
}

const miObjetoCoche = {
    auto: {
        marca: "ford",
        modelo: "Mustang"
    },
    moto: {
        marca: "Suzuki",
        modelo: "Hayabusa"
    }
}

for (const categoria in miObjetoCoche){
    //miObjeto
    for(const categoria in miObjetoCoche[categoria]){
        console.log("Propiedad " + ":" + miObjetoCoche[categoria])
    }
}

const objetoLetras =  {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
let contador = 0;

for(const llave in objetoLetras){
    contador++;
}

console.log("el objeto tiene " + contador + "propiedades")

const miArray = [5, 10, 15, 20]
miArray.shitf();
console.log(miArray);
miArray.unshift(9);
console.log(miArray);
miArray.push(18);
console.log(miArray);


//Recorremos un array
for (let i = 0; i < miArray.length; index++) {
    console.log(miArray[i]);
    
}

for (const numero of miArray){
    console.log(numero);
}

//Funcion normal
function sumar(a, b){
    return a+b;
}
let suma = function(a, b){
    return a + b;
}

const sumaArrow = (a,b) => a+b;

const sumaArray2 = (a,b) => {
    return a + b;
};
function sumar3(a,b){
    this.a = a;
    this.b = b;
    return a+b;
}

let suma1 = new suma1 (3,6)


let propiedades = Object.keys(persona)
console.log(propiedades)
console.log(Array.isArray(propiedades));

propiedades.forEach(function(propiedad){
    console.log(perssona[propiedad])
})

for(let i = 0; i < propiedades.length; i++){
    console.log(persona[propiedaes[i]]);
}