// let y const para declarar variables
// const es constante. No tenemos la variable char aqui.
// var tambien podemos velor pero no es muy usual ya que es mas antiguo 
// Para nombrar las variables utilizaremos el sistema de nombre camelCase 
// No es obligatorio el uso de ; al final de cada linea de codigo, si lo ponemos sera mas legible pero funcionara igual.

let objectLength;

// assignament

objectLength = 10;


const array = [5, 1, 2];

console.log(array[0]); // veremos la posicion 0 de esta array.

//const
const websiteName = "https://google.com";
const objectWidth = 10;

// var
var variableName= 4;
var variableName = 8;

//print
console.log(websiteName);

//number
let num = 9;
let floatNum = 8.5;

//boolean
let trueValue = true;
let falseValue = false;

//String
let singleQuotes = 'string';
let doubleQuotes = "string + string string!";


//menos <
//mayor >
//menor igual >==
//mayor igual <==

let nombreCompleto;
nombreCompleto = "Willy Hidalgo";
console.log(nombreCompleto);

const nombre = "Willy";
// No podemos cambiar el valor de una constante en los objetos primitivos.
// Solo se podra cambiar en los objetos
nombre = "A";

//Summamos las dos variables cambiando el number1 con parseInt a un numero.
const number1int = "1";
let number2int = 2;

console.log(number2 + Number.parseInt(number1));

//Sumamos las dos variables cambiando el number1float con un parseFloat en un numero con decimales.
const number1float = "1.1";
let number2float = 2.0;

console.log(number2 + Number.parseFloat(number1));

//Casteamos una variable para cambiarle el tipo.
//Lo hacemos de esta manera que asi podremos sumar los numeros que tenemos como strings
//ya que si no cambiamos el tipo nos dara como resultado 12 (resultado de juntar 2 strings)
let str = "1", str2 ="2";
console.log(Number(str)+ Number(str2)); // 3

//Con el mismo ejemplo si en vez de sumar utilizamos la division el programa
// intentara convertir los strings en numeros y hara la division.
let str3 = "1", str4 ="2";
console.log(str3 / str4); // 0.5

//Con el mismo ejemplo si cambiamos una de las variables por una palabra 
//este taambien intentara cambiarla a numero y realizar la division, en 
//este caso no funcionara ya que no le podra dar ningun numero y el resultado es NaN
let str5 = "1", str6 ="len";
console.log(str3 / str4); // NaN
//Si nos queremos asegurar de que el programa funciona correctamente podremos forzar los tipos y de esta manera
//poder realizar la suma correctamente.

//Conversion de tipos, booleano a int 
let trueValue1 = true, falseValue1 = false;
console.log(Number(trueValue)); //1

//Algunas palabras las podremos cambiar a numeros como los true que son booleanos, equivalen a false(0) y true(1)
let trueValue2 = true;
let trueString = "true";
let falsevalue = false; 
console.log(Boolean(0));

//truth-y and false-y
// str -> String
//console.log(str == trueValue)
//console.log(emptyString == true)
console.log(Boolean(1));
console.log(Boolean(1) == true);

//assignment
let bool = true;
//comparison (Convierte los tipos y luego los campara entre si para ver si es verdadero o falso)
//equality
bool == true;
//greater than
bool  > true;
0 > 1
Number > Number;

//Strings vs Numbers (Con los 3= lo que hara sera comparar todo, incluso el typo de variable que es, si son iguales dara true. )
let right = 1;
console.log(str === right);


// Ejercicios!!!!!

//Ejercicio edad promedio

let edad1 = 25;
let edad2 = 19;
let edad3 = 35;

let promedio = (edad1+ edad2 + edad3 )/3
//console.log(promedio)

//Convierte la temperatura de grados celsius a fahrenheit.

let temperaturaCelsius = 25;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("La temperatura en Fahrenheit es: ", temperaturaFahrenheit);

//Calcular un perimetro de un rectangulo 
let anchoRec = 8, largoRec = 12;
let perimetroRec = 2 * (anchoRec + largoRec);

console.log(perimetroRec);

//Comparaciones
const numero1 = 15, numero2 = 10;

if(numero1 > numero2){
    console.log("El primer numero es mayor.");
}else if (numero1 > numero2){
    console.log("El primer numero es menor.");
}else{
    console.log("Los numeros son iguales.")
}

//Calcular el precio final de un producto despues de aplicarle un descuento
let precioOriginal = 100;
let porcentajeDescuento = 20;

let precioFinal= precioOriginal - (precioOriginal * (porcentajeDescuento / 100))

console.log("El precio final con descuento es: ", precioFinal);

//Determina si una persona es elegible para votar en base a su edad y ciudadania.

const edad = 22;
const esCiudadano = true;

if(edad >= 18 && esCiudadano){
    console.log("Puede votar");
}else{
    console.log("No puede votar");
}

//Permite el acceso a una pelicula si la persona es mayor de 13 años o esta acompañada por un  adulto
let edadPersona = 15;
let acompaAdulto = false;

if (edadPersona > 13 || acompaAdulto){
    console.log("Puede acceder.")
}else{
    console.log("No puede acceder.")
}

//Si una contraseña cumple los requisitos de longuitud y contenido.
const password = "secreto123";

if(password.length >= 8 && (password.includes("id:") || password.includes("description:"))){
    console.log("Positivo");
}else{
    console.log("Negative");
}

//Si es fin de semana

let dia = "Sabado";
if(dia == "Sabado" || dia == "Domingo"){
    console.log("es fin de semana")
}else{
    console.log("es dia laborable")
}

//Convertir un numero en formato string a tipo numerico y realizar una operacion matematica

let numTexto = "20"
let numero = Number(numTexto);
console.log(numTexto+5); // 20

let valor1 = 5;
let valor2 = "5";

if(valor1 === valor2){
    console.log("Los valores son iguales y los tipos son iguales");
}else if (valor1 == valor2){
    console.log("Los valroes son iguales perop los tipos no");
}else{
    console.log("No son iguales");
}

//Converit una varibales de tipo booleano y la comparamos con otroa variable booleana.

let valorTexto = 'true'
let valorBooleano = Boolean(valorTexto);

let otroValorBooleano = false;

if(valorBooleano === otroValorBooleano){
    console.log("Los valores son iguales y los tipos tambien");
}else if(valorBooleano == otroValorBooleano){
    console.log("Los tipos distintos pero el valor igual");
}else{
    console.log("false")
}


/*Todos los siguientes valores se evaluan como falsos:
false
null
undefined
0
-0
NaN
An empty string ('')
*/ 
let valorTexto1 = "a";
let valorBooleano1 = Boolean(valorTexto1);

if(!valorBooleano){
    console.log("false");
}else{
    console.log("TRUE");
}

// AND (&&)

//              TRUE        FALSE

//  TRUE        TRUE        FALSE

//  FALSE       FALSE       FALSE


// OR (||)

//              TRUE        FALSE    

//  TRUE        TRUE        TRUE 

//  FALSE       TRUE        FALSE  

//Este lo veremos menos (XOR)

//Empezamos con los if!!!!

const edadCon = 20;
/*
if(edad>=19){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}*/
                            //Este es negativo        Este es positivo
const mensaje = (edad >= 18) ? "2: Es mayor de edad" : "2: es menor de edad"
console.log(mensaje);

const nume = 10;
let mensaj;

if (nume === 0){
    mensaje = "igual a 0";
}else if(nume > 0 && nume < 10){
    mensaje = "entre 1 y 9";
}else if(nume >= 10 && nume < 20){
    mensaje = "entre 10 y 19 ";
}else{
    mensaje = "el resto";
}

const mensaj2 = 
    nume === 0
    ? "igual a 0"
    : nume > 0 && nume < 10
    ? "entre 1 y 9"
    :nume >= 10 && nume < 20
    ? "entre 10 y 19"
    : "el resto";


const age  = 25;

const resultadoEdad = 
    (age<13 && age >= 0 ) 
        ? "no es un nen" 
    : (age >= 13 && age < 18) 
    ? "Es un adolescente" 
    : (age >= 18 ) 
    ? "Es mayor de edad" 
    : "es adulto";

// La diferencia entre utilizar el terniario y el if, cuando creamos el terniario tenemos que poner en consta ya que no cambia despues, se guarda cuando se crea en la variable.
// En el if si que tendremos que crear con let una variable para ir asignandole el resultado que queremos ver.

const comida = "pizza";
//Va pasando por cada caso comparando donde debe entrar y cunado entra hace lo que tendamos de codigo dentro y despues con el break hacemos que salga de la comparacion.
//Break es fundamental que lo tengamos puesto en cada caso  ya que si no el codigo pasara al siguiente caso y no parara.
switch(comida){
    case "Pizza":
        console.log("Es una comida poco saludable");
        break;
    case "Hamburguesa":
        console.log("Es una comida rapida");
        break;
    //Si no le ponemos nada dentro se evaluaran en el siguiente bloque donde tenemos el break.
    case "Ensalada":
    case "Frutas":
        console.log("Es una comida saludable");
        break;
    default: 
        console.log("No es ninguna de las opciones.")
        break;
}

if(comida === "Pizza"){
    console.log("Es una comida poco saludable")
}else if(comida === "hamburguesa"){
    console.log("Comida rapida");
}else if(comida === "Ensalada" || comida === "Frutas"){
    console.log("Es una comida saludable");
}else{
    console.log("No es ninguna de las opciones.");
}

const calificacion = 91;

//Validara si es true cuando entra en el primer caso, es decir lo vera con el primer caso.

switch (true) {
    case calificacion >= 90:
        console.log("A")
        break;
    case calificacion >= 80:
        console.log("B")
        break;
    case calificacion >= 70:
        console.log("C")
        break;
    case calificacion >= 60:
        console.log("D")
        break;
    default:
         console.log("F")
        break;
}

//Se puede hacer con el ternario asignandolo dentro del console.log, no es necesario crear variables. Ya que las variables ocupan un espacio en la memoria
//y de esta manera no lo almacenamos en ninguna variable

console.log(calificacion === true ? "A" : "F");

//Bucles for y while (loops)

//Sintaxis del for:  for(initialize our iterator; set our stopping condition; update our iterator)
//for loop

for(let i = 0; i < 3; i++){ // Queremos que la variable muera en el bucle
    console.log(i);
}
console.log("End of loop!" + i); // Queremos que la variable muera en el bucle
//0
//1
//2

let suma = 0;

for (let i = 1; i <= 10; i++){
    suma += i;  //Esta linea y la de abajo tienen el mismo significado.
    //suma = suma +i;
}

 let text = "hola";

 for(let i = 0; i < text.length; i++){
    console.log(text[i]);
 }


 const numer = 5;

 for (let i = 0; i <= 10; i++){
    console.log(numero + "x" + i + " = " + (numer * i));
 }

 //Los ciclos pueden ir para delante y para atras

 for(let i = 10; i > 10; i--){
    console.log(i);
 }

//while loop
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}

//Do while

do{
    console.log("Se ejecuta aunque no se cumpla")
    i++;
}
while(i != 22)

let numerico = 2;

while(numerico <= 10){
    console.log(numerico);
    numerico += 2;
}

while(numerico <= 10){
    if(numerico%2 == 0){
        console.log(numerico);
    }
    numero += 1;
}

for (let i = 0; i <= 10; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        console.log("i:" , i + " " + "j: " + j)
    }
}
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        for(let k = 0; k < 4; k++){
            console.log("i:" , i + " " + "j: " + j + "k: " + k) 
        }
    }
}

//Funciones (functions)
//method anbd function
console.log("print");

//types of functions                    (tipos de funciones)
//Returns output                        (devuelven la salida)
//performs operations without output.   (realiza operaciones sin salida)
//declaracion
//function func(arg1, arg2, arg3, arg4){};

function nameOfMyFunction(arg1, arg2){
    //bloque de codigo
    let sum = arg1 + arg2;
    return sum;
}

let output = nameOfMyFunction(2, 3);
console.log(output);

//No tiene resultado de salida, solo imprime una palabra
function sayHello(){
    //bloque de codigo
    console.log("Hello!");
} 
sayHello();

//console.log(typeof(sayHello));  Devolvera el tipo que es "function", 
//sin poner los parentesis con los argumentos
//Una de las caracteristicas mas particulares de las funciones es que
//podemos declararlas mas tarde (linea 492) y utilizarlas antes (linea 400)
//lo llamamos elevacion

//Puedo llamar a la función usando una referencia a esa funcion
let func = sayHello;
func();


newFunc("some string")
//function expression, es cuando creamos una funcion dentro de algun 
//tipo de expresioon matematica.
//cuando utilizamos una function expression, solo podemos llamarla
//despues de declarar la funcion.
let newFunc = function(arg1){
    console.log("added" + arg1);
}
newFunc("some string");

const miFunction = (arg1, arg2) =>{
    return arg1 + arg2;
}

//Para hacer la funcion flecha sin necesidad del return, solo se
//puede hacer una operacion.

const funcionFlecha = (arg1, arg2) => arg1 + arg2;

console.log(funcionFlecha(1,3));
 

//Si queremos que una funcion se ejecute al iniciar el codigo
//debemos hacerlo asi, incluso llamar a otra funcion
(()=>{
    const mensaje = "Hola desde una IIFE";
})();


function pares(limSup, limInf ){
    suma = 0;
    for (let i = limInf; i <= limSup; i++){
        if(i % 2 == 0){
            suma += i;
        }
    }
    return suma;     
}

console.log(pares(1, 10));

//Si hacemos sin flech la podemos utilizar cuando queramos, si la hacemos con flecha 
//solo podremos utilizarla despues de que se cree.
const funcionFlechaImpar = (arg1, arg2) => {
    suma = 0;
    for (let i = limInf; i <= limSup; i++){
        //Tendremos que poner el simbolo exclamacion para elegir cualquier numero
        //que no sea 0 ya que no sera par.
        if(i % 2 != 0){
            suma += i;
        }
    }
    return suma;
}

//Variables Scope
//global scope
//Esta variable sera accesible en cualquier lugar de nuestro alcance.
let something = 5;
console.log(something);
//Incluso haciendo un If, tengo acceso a esta varibale.
if(true){
    //block scope
    console.log(something);
}
//Incluso en una funcion ya que hemos declarado la variable desde el alcance global
//Podre acceder a ella desde cualquier lado
function func(){
    //function scope
    //var something = 10; Con var tendremos acceso a la variable desde fuera tambien, se 
    //coloca en nuestro global asi que nos cambiara el valor de la varibale en todas partes
    //del archivo.
    //Let something = 10; Esta variable solo existe en el alcance del bloque y luego
    //desaparece
    //Con esto de abajo solo estara disponibole dentro del alcance de mi funcion.
    //this.something = 10; Estoy cambiando esta variable pero solo en el contexto
    //de mi funcion
    console.log(something);
}
//Esto lo utilizamos para hacer referencia a la variable que tendremos dentro de nuestro 
//bloque de codigo.
//Apuntara a donde sea que este ubicado en ese momento.
this;

//Callbacks
function callBacks(num1, num2, callback){
    const resultado = num1 + num2;
    callback(resultado); 
}

function mostrarResultado(resultado){
    console.log("El resultado es: " + resultado);
}

function mostrarResultadoDividoDos(resultado){
    console.log("El resultado es: " + resultado);
}

callBacks(5, 3, mostrarResultadoDividoDos);    // 4
callBacks(5, 3, mostrarResultado);   //  8


//Esta la podriamos hacer con la funcion flecha que solo tenemos una linea.
function sumaParImpar(arg2, arg1, callback){
    return callback(arg1, arg2);
}

const sumaParImpar2(arg1, arg2, callback) => callback(arg1, arg2);

const par = sumaParImpar(1, 10, pares);
console.log(par);



//Objetos 
let obj = {
    "key":"value",
    "numbr":2
}
//Puedo acceder a los datos de estas dos maneras, con [] y la clave
console.log(obj["key"]);
//o utilizando el . seguido de la clave.
console.log(obj.numbr);

//Podemos cambiar el valor de algun dato que tengamos dentro del objeto,
//vamos hacerlo con el 2 solo debemos declararlo y cambiar el dato que tendra
obj["numbr"] = 7;
//Ahora el dato de numbr ya no sera 2 si no 7.

let persona = {
    nombre: "juan",
    edad: 30,
    ciudad:"ciudad 1"
}

for (const key in persona) {
    console.log(key + " " + persona[key]);
}

//Iterar sobre las claves del objeto.
const keys = Object.keys(persona);
console.log(keys);


//Iterar con el valor.
const values = Object.values(persona);
for(const value of values){
    console.log(value);
}

//Funcion assing la utilizamos para combinar varios objetos o para crear uno nuevo con los valores de los anteriores
const target = { 
    a: 1, 
    b: 2 
};
const source = { 
    b: 4, 
    c: 5 
};
 //Se cogen los dos objetos y se combinan en uno nuevo.
 //Si quisieramos crear uno nuevo con los valores debemos ponerlo asi "let newUser = Object.assign({},user);"
const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//Si queremos que nuestro objeto conserve todos estos valores no podemos utilizar solo la palabra const porque no hara lo que queremos
//si podremos modificarlo. Debemos utilizar .freeze(objeto que queremos congelar) para congelar el objeto y que no podamos modificar nada.
const obj = {
    "key": "value",
    "number": 10,
    "func": (arg) => arg + 2,
    "obj": {
        "key": 2
    }  
}


//iterar sobre pares clave-valor.
const entries = Object.entries(persona);
console.log(entries);

for(lety[key, value] of entries){
    console.log(keys + " : " + value);
}

const propertyNames = Object.getOwnPropertyNames(persona);
console.log(propertyNames);
 
//Lo  utilizamos para ver los valores que tenemos en el objeto persona.
for(const propertyName of propertyNames){
    console.log(propertyName + " : " + persona[propertyName]);
}
//For in iterar en objetos. Entra en todo el objeto
//For of cuando lo utilizamos sacando los datos como array,
//puedes elegir que datos quieres sacar.


const propiedadesDeseadas = ["nombre", "edad"];
//For of cuando es un array
for (const propiedad of propiedadesDeseadas) {
    console.log(propiedad + " : " + persona[propiedad]);
}

persona.ciudad = "Madrid";
persona.edad  += 5;

//Asi podemos eliminar un dato del objeto.
delete persona.edad;
//Asi añadimos un dato, no necesitamos eliminar nada
persona.apellido = "Perez"

persona.apellido = {}; //Hemos creado un dato vacio.
//Los datos añadidos se pondran al final si quisieramos 
//que aparezca en otro lado, tendremos que ordenarla.

function funcionOne(params){
    params = 88;
    console.log(params + " Dentro de la funcion")
}

let params = 10;
funcionOne(params);
console.log(params + " Fuera de la funcion")


function funcionTwo(persona){
    persona.edad = 88;
    console.log(persona.edad + " Dentro de la funcion")
}

funcionTwo(persona);
console.log(persona.edad + " Fuera de la funcion");

funcionthree(persona){
    persona2 = {... persona}; //split operator 
    persona2.edad = 88;
    console.log(persona.edad + " dentro de la fuincion");
}

funcionthree(persona)

//Si queremos declarar algo pero estara vacio desde el principio pondremos un null para tener un dato vacio
let  producto = {
    nombre: "camisa",
    edad: 25,
    cantidad: 10,
    detalle: null
}

for(const key in product){
    console.log(key + " : " + producto[key]);
}

producto.precio = producto.precio * 2;

function duplicarPrecio(x){
    x.precio *= 2;
}
duplicarPrecio(producto);

/* de esta manera se puede crear pero no esta bien visto
se utiliza mas para cambiar los datos desde fuera.
producto.nomrbe = "camisa";
producto.precio = 2;
producto.cantidad = 10;*/


//Values and reference
//Nuestro objeto no apunta a valores especificos.

let obj = {
    "key": "value",
    "number": 10,
    "func":(arg) => arg + 2,
    "obj": {
        "key": 2
    }
}

//Funcion para cambiar el valor de un objeto, les damos los parametros obj (objeto), key(palabra clave, el que queramos cambiar)
//val (valor que queremos que aparezca)
function changeValue(obj, key, val){
    //Cambiamos un valor del objeto en este caso es el valor del parametro key.
    obj[key] = val;
}

//Para poder utilizar esto tenemos que llamar a la funcion, 
changeValue(obj, "number", 15);

//Si queremos hacerlo igual pero para un numero
function changeNumber (num){
    num += 5;
}

//Mas objetos
//Funciones objetos

const persona = {
    nombre : "Michel",
    edad: 34,
    ciudad: "Torino",
    presentarse: function(){
        //Ponemos this por que el dato esta fuera de la funcion pero dentro de nuestro objeto
        console.log(`Hola, soy ${this.nombre}, tengo: ${this.edad} y vivo en ${this.ciudad}`);
        //Tambien podmeos hacerlo asi  console.log(`Hola, soy` + this.nombre + `tengo:`  + this.edad +  `y vivo en` this.ciudad);
        //Estas comillas `` se utilizan para poner variables dentro
    }
}

persona.presentarse();

const calculadora = {
    sumar : function(a,b){
        return a + b;
    },
    restar: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        return a/b;
    }
} 

console.log(calculador.restar(1,8));


//Funciones de constructor, utilizamos una palabra cable
//Se llama funcion constructor ya que se utiliza para crear objetos con los parametros que hemos utilizado.ç
//tenemos que pasarle los datos cuando creamos una nueva persona en nuestro caso.
function persona(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad

    this.presentarse= function(){
        console.log(`Hola, soy ${this.nombre}, tengo: ${this.edad} y vivo en ${this.ciudad}`);
    }
}
//De esta manera creamos a los objetos con los datos que nosotros queremos.
//Todos los que creemos y guardemos seran objetos
const persona1 = new persona("Andres", 20, "Milano")

//Practica
function  Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.calcularPrecioTotal = function(cantidad){
        return this.precio * cantidad;
    }
}
//creamos nuestro producto con los valores que quermos darle, de nombre y precio
const producto1 = new Producto("camiseta", 20);

//para realizar la funcion dentro del objeto tendremos que poner el producto1 seguido de la funcion mas la cantidad de camisetas que queremis calcular
console.log(producto1.calcularPrecioTotal(3));

const coche = {
    marca: "toyota",
    modelo:"Corolla",
    //Objeto dentro de un objeto, podemos meter mas de uno,
    motor:{
        cilindros: 4,
        potencia: "99hp"
    }
}
//Para acceder a cada objeto solo tendremos que por un . para cada vez que entremos mas en un objeto.
console.log(coche.motor.potencia);

const casa = {
    direccion: "Siempre viva",
    habitaciones: {
        dormitorio:{
            camas:2,
            armario: 1
        },
        cocina:{
            electrodomesticos: ["nevera", "horno", "microondas"]
        },
        sala:{
          sofas: 2,
          tv: true  
        }
    }
}

//De esta manera entramos a todas las partes de la casa
console.log(casa);
console.log(casa.habitaciones);
console.log(casa.habitaciones.dormitorio);
console.log(casa.habitaciones.cocina);
console.log(casa.habitaciones.sala);

const persona = {
    nombre: "juan",
    edad: 40,
    ciudad: "Caracas"
}

//Primero las convertimos en un objeto para que sea iterable
//si vamos a coger algun dato en especial. 
//Hacer cosas con los datos que tenemos dentro del objeto con sus propiedades.
const keyse = Object.keys(persona)
console.log(keyse);
for(const key of keyse){
    console.log(persona[key])
}

//iterar un objeto de forma automatica con for in
//sin necesidad de hacer nada mas
for(let key in persona){
    console.log(persona[key])
}


const ciculoObjeto = {
    radio: 5,
    calcularArea: function(){
        return Math.PI * this.radio * this.radio;
    }    
}

console.log("EL area del circulo es", circulo.calcularArea());

function circuloFuncion(radio){
    this.radio = radio;
    this.calcularArea =  function(){
        return Math.PI * this.radio * this.radio;
    }   
}

const circulo1 = new circuloFuncion(5);
console.log(circulo1.calcularArea);


//Arrays (siempre se empieza en la posicion 0)
let miArray = [1, 2, 3, 4, 5];
let palabras = ["manzana", "banana", "cereza"]

console.log(miArray[2])

for (let i = 0; i < miArray.length; i++) {
    console.log("Numero: " + miArry[i] + " posicion: " + i) 
}


//Agregar elementos al final de un array
let miArrayAgregar =[5, 2, 3];
miArrayAgregar.push(4, 5);
console.log(miArray)

//Eliminar el uiltimo elemento del array
miArrayAgregar.pop();

//Agregar elementos al principio del array
miArrayAgregar.unshift(0);

//Eliminar el primer elemento del array
miArrayAgregar.shift();

//Combinar dos arrays
let miArrayCombi = [1, 2];
let miArrayCombi2 = [3, 4];
let combinado = miArrayCombi.concat(miArrayCombi2);
console.log(combinado);

//Copiar una porcion del array
let miArrayCopia = [1, 2, 3, 4, 5];
//Empieza en la posicion 1 pero no llega a la poscion 4. 
let copia = miArrayCopia.slice(1, 4); 

//Eliminar elementos de un array
let miArrayEliminar = [1, 2, 3, 4, 5];
//Primer elemento donde inicia a eliminar, el segundo es la cantidad de elementos que queremos eliminar de la lista
miArrayEliminar.splice(2, 2);

//Convertir un array en una cadena de texto.
let miArrayaTexto = ["Hola", "Mundo"];
let cadena = miArrayaTexto.join(" ");
console.log(cadena);

//Iterar un array no tienes acceso a la poscion de los elementos.
let miArrayIterar = [1, 2, 3];
miArrayIterar.forEach(function(elemento){
    console.log(elemento)
})


//Duplicar todos los elementos de un array
let miArrayDuplicar = [1, 2, 3, 4];
//Va mirando las posiciones de cada uno y las va copiando y multiplicando.
let duplicados = miArrayDuplicar.map(function(elemento){
    return elemento * 2;
}) 
console.log(duplicados);

//Filtrar elementos (mayores que 3 en este caso)
let miArrayFiltro = [1, 2, 3, 4, 5];
let filtrados = miArrayFiltro.filter(function(elemento){
    return elemento > 3;
})
console.log(filtrados);

//Sumar todos los elementos de un array, tipica pregunta de entrevista. EL reduce solo devuelve un elemento.
let miArraySumar = [1, 2, 3, 4, 5];
let sumaArray = miArraySumar.reduce(function(acumulador, elemento){
    return acumulador + elemento;
}) 

//Ordenar un array alfabeticament
let miArrayOrdenar = ["m", "b", "c", "d"];
miArrayOrdenar.sort();
console.log(miArrayOrdenar);

//Invertir el orden 
let miArrayInveritida = [1, 2, 3, 4, 5];
miArrayInveritida.reverse();
console.log(miArrayInveritida)

//Verificar si se cumple una condicion
let miArrayCondicion = [2, 4, 6, 7, 10];
let sonTodosPares = miArrayCondicion.every(function(elemento){
    return elemento % 2 == 0;
})
console.log(sonTodosPares);

//Mirar si en algun lugar del array se cumple la condicion
let miArrayAlgunLugar = [1, 2, 4, 5]
miArrayAlgunLugar.some

//Obtener elementos n de un array
let miArrayObtener = [1, 2, 3, 4, 5];
let primerosTres = miArrayObtener.slice(0, 3);
console.log(primerosTres);

//Devuelve el primer elemento que cumple esa condicion
let miArrayUnoSolo = [1, 2, 3, 4, 5];
let multiploDeTres = miArray.find(function(elemento){
    return elemento % 3 == 0;
})
console.log(multiploDeTres)

//Comparar la altura de las personas y seleccionar la altura mas alta.
let personas =[
    {nombre : "a", altura: 160},
    {nombre: "b", altura: 175},
    {nombre: "c", altura: 170}
]
let masAlto = personas.reduce(function(max, persona){
    return (persona.altura > max.altura)? persona : max;
})
console.log(masAlto);

//Una dimension
[0, 1, 2]
//Dos dimensiones (filas y columnas)
[[0, 1, 2] [0, 1, 2]]

let miArrayRecorrer = [1,2,3,4]
for(let i = 0; i < miArrayRecorrer.length; i++){
    console.log(miArrayRecorrer[i]);
}

//Recorrer un array con forEach
miArrayRecorrer.forEach(function(element){
    console.log(element);
})
//Recorrer un array con forEach pero en funcion flecha
//Funcion flecha mas simple
miArrayRecorrer.forEach((element) => console.log(element))
//Funcion flecha mas compleja
miArrayRecorrer.forEach((element) =>{
    //Aqui podemos hacer lo que queramos
    const a = 1;
    console.log(element + a);
})

//
export function counterZero(numbersArray){
    let contador = 0;
    for (let i = 0; i <= numbersArray.length; i++){
        if(numbersArray[i] == 0){
            contador++;
        }
    }
    return contador;
}