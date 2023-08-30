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

let valorTexto1 = "a";
let valorBooleano1 = Boolean(valorTexto1);

if(!valorBooleano){
    console.log("false");
}else{
    console.log("TRUE");
}