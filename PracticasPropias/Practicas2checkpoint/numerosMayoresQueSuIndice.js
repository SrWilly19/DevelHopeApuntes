/*Escriba una función que tome una matriz de números enteros como parámetro y devuelva una nueva matriz
 que contenga solo los números que son mayores que su posición en la matriz.
 */
//Creamos nuestro array con numeros desordenados
 let array = [8,3,9,4,2,5,7,1,6];

function numerosMayoresQueSuIndice(array){
    //Creamos una nueva array que sera donde guardemos los numeros que son mayores
    //que su posicion.
    let nuevaMatriz = []
    /*Creamos un bucle para que recorra nuestro array y pueda ver que numero es 
    mayor que su indice que sera la variable i que incializamos en 0 */
    for(i= 0; i < array.length; i++){
        /*Se debe de cumplir la condicion, si el numero que tenemos en el array es
        mayor a su indice entoces utilizamos el .push para meterlo dentro de nuestro
        nuevo array */
        if(array[i] > i){
            nuevaMatriz.push(array[i]);
        }
    }
    return nuevaMatriz;
}
console.log(numerosMayoresQueSuIndice(array));

//Mismo ejercicio pero de distinta manera de hacerlo.
function filtrarNumerosMayoresQuePosicion(matriz){
    //Utilizamos le .filter y le pasaremos como parametros numero e indice del numero para que compare el numero y su posicion
    //en el array.
    const resultado = matriz.filter((numero, indice) => numero > indice);
    return resultado;
}
const resultadoNumeroFiltrado = filtrarNumerosMayoresQuePosicion(array);
console.log(resultadoNumeroFiltrado);

//Mismo ejercicio pero cambiando los numeros por strings
const cadenas = ["apple", "banana", "orange", "grape", "kiwi"];
function filtrarStringsPorPosicion(matriz){
    /*Creamos una nueva variable llamada resultado que sera la que almacenara las cadenas que sean mayores a su indice.
    Con .filter podremos filtrar comparando el tamaño de las cadenas y su indice*/
    const resultado = matriz.filter((cadena, indice) => cadena.length > indice)
    return resultado;
}

//Ejemplo de uso
const resultadoFiltrado = filtrarStringsPorPosicion(cadenas);
console.log(resultadoFiltrado);
