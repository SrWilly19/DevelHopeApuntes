/* Funcion que coge una array de strings y se quedara solo con las strings que contuvieran la letra i*/
const cadenas = ["apple", "banana", "orange", "grape", "kiwi"];
function filtrarSegunLaLetraQueContenga(matriz){
    //Utilizamos el metodo filter para que podamos filtrar entre todos los elementos de nuestro array
    //y utilizamos .includes("i") para que solo salgan las palabras que tengan la letra i
    const palabrasFiltradas = matriz.filter(function(cadena){
        return cadena.includes("i");
    })
    return palabrasFiltradas;
}

const filtroUsado = filtrarSegunLaLetraQueContenga(cadenas);
console.log(filtroUsado);

//Otra menera de hacerlo con una funcion flecha

function filtrarSegunLetraFuncFlecha(matriz){
    //Hace lo mismo que el anterior pero con la funcion flecha para que sea en una linea
    const palabrasFiltradas = matriz.filter(cadena => cadena.includes("e"));
    return palabrasFiltradas;
};

const funcFlecha = filtrarSegunLetraFuncFlecha(cadenas);
console.log(funcFlecha);