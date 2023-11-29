/*Escriba una función que tome una matriz de números enteros como parámetro y devuelva una nueva matriz
 que contenga solo los números que son mayores que su posición en la matriz.
 */
let array = [8,3,9,4,2,5,7,1,6];

function numerosMayoresQueSuIndice(array){
    let nuevaMatriz = [];
    for(i = 0; i < array.length; i++){
        if(array[i] > i){
            nuevaMatriz.push(array[i]);
        }
    }
    return nuevaMatriz;
}

numerosMayoresQueSuIndice(array);