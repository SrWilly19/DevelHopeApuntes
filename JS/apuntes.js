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