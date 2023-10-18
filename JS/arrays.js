let words = ["This", "is", "my", "friend", "Arnau"];
//Esto es mas o menos un bucle for condensado, pero es mas facil de analizar y mas facil de escribir ya que solo es una linea de codigo
//words.forEach((el) => console.log(el));
/*Son dos funciones que en realidad son iguales.
for(let el of words){
    console.log(el);
}*/
//FUNCION FOREEACH
/*Podemos usar esta funcion para realizar algunas operaciones */
let sentence = "";
let arrow = (el) => {
    console.log(el);
    sentence += el;
};
words.forEach(arrow);

/* Nos dara las palabras pero todas juntas
words.forEach((el) => {
    console.log(el);
    sentence += el;
});*/
//console.log(sentence);

//FUNCION MAP
//Muy bueno para modificar los datos de alguna manera y luego obtener un todo
/*Es bastante similar pero cuando decimos mapa, la diferencia es que en realidad obtenemos una matriz completamente nueva 
Imprimeros la matriz nueva con cada palabra y al final de la palabra el signo de !
Lo que hara es realizar esta operacion que le doy en cada elemento de mi matriz, creara una matriz nueva en base a ese calculo*/
//let mapped = words.map((el) => el + "!");
/* Esto nos devolvera el tamañno de cada palabra
let mapped = words.map((el) => el.length);*/
//Hara lo mismo que en la que en la linea de arriba.
function getLength(el){
    return el.length;
};
let mapped = words.map(getLength);
//for each element [el] of the array, call the given function on that element
//return output of the function
console.log(mapped);


//FUNCION REDUCE
//Tomara toda nuestra matriz y luego lo reduce a un solo valor.
//Lo que hace es tomar el valor anterior en la matriz y siempre comienza con el primer valor, luego toma el siguiente valor en la matriz y simplemente itera sobre eso.
//let totalLength = words.reduce((a, b) =>  a.length + b.length);
/*First step of loop  (a.length + b.length) = a of second step
Second step  of the loop (a.length + b.length)*/
// Esta seria una manera de solucionarlo y asi nos dara la suma del tamaño de todas las palabras. Tiene que tener su indice en 1 porque necesita poder usar el elemento y su elemento 
//anterior
/*let totalLength = words.reduce((a, b, i) => {
    if(i == 1) {
        return a.length + b.length;
    }else{
        return a + b.length;
    }
});*/
//Esta tambien funcionara mapeando primero ya que nos convertira todo en un numeros y asi podremos utilizar reduce en una sola linea.

let totalLength = words.map(getLength).reduce((a, b) => a + b );
console.log(totalLength);

//FUNCION SORT
//Funcion de ordenacion, ordenara todos los elementos de una matriz
//Si elk numero es negativo o positivo ordenarlo en consecuencia, debemnos asegurarnos de tener un numero negativo o positivo en el lado derecho de nuestra ecuacion.
//De esta manera nos devolvera las palabras mas pequeñas primero.
//let sorted = words.sort((a, b) => a.length - b.length);
//Si quiero que sea a la inversa tendre que hacer esto, cambiar de orden la operacion. Esto nos la ordena de mayor a menor
console.log(words);
let sorted = words.sort((a, b) => b.length - a.length);
console.log(sorted);

//FUNCION FILTER
//Funciona de manera similar a la anterior, utiliza algunos criterios para filtrar realmente elimina elementos de una matriz y luego devuelve una nueva matriz con esos elementos
//eliminados.
let longWords = words.filter((el) => el.length > 2);
console.log(longWords);