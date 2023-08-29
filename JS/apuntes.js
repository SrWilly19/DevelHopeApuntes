// let y const para declarar variables
// const es constante. No tenemos la variable char aqui.
// var tambien podemos velor pero no es muy usual ya que es mas antiguo 
// Para nombrar las variables utilizaremos el sistema de nombre camelCase 
// No es obligatorio el uso de ; al final de cada linea de codigo, si lo ponemos sera mas legible pero funcionara igual.

let a = "hello world"
a = 11
const array = [5, 1, 2]

console.log(array[0]) // veremos la posicion 0 de esta array.

//menos <
//mayor >
//menor igual >==
//mayor igual <==

let nombreCompleto
nombreCompleto = "Willy Hidalgo"
console.log(nombreCompleto) 

const nombre = "Willy"
// No podemos cambiar el valor de una constante en los objetos primitivos.
// Solo se podra cambiar en los objetos
nombre = "A"

//Summamos las dos variables cambiando el number1 con parseInt a un numero.
const number1int = "1"
let number2int = 2

console.log(number2 + Number.parseInt(number1))

//Sumamos las dos variables cambiando el number1float con un parseFloat en un numero con decimales.
const number1float = "1.1"
let number2float = 2.0

console.log(number2 + Number.parseFloat(number1))

