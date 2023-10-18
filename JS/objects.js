let nested = {
    "subObject": {
        "value" : 1,
        "value2" : 4,
        "nested" : {
            "value": 3
        }
    }
}
/* De esta manera imprimira todas las claves, pero en el caso de este objeto, solo tengo una clave al principio y luego tengo un objeto anidado debajo. Itera a traves de todas las 
claves, pero en realidad no tengo una lista de cuales son esas claves.
for (const key in nested){
    console.log(key)
}*/


//Si quiero obtener una lista de mis claves, debo utilizar la funcion object.keys y luego dar el nombre de mi objeto alli. Obtengo mi primera clave con Object.keys(nested), si quiero 
//obtener los siguientes puedo poner Object.keys(nested.subObject) de esta menera nos dara las siguientes claves.
//Solo para claves
let keys = Object.keys(nested.subObject);
console.log(keys);

//De esta manera utilizando Object.values nos dara todos los valores a la derecha, es decir de nuestro objeto recibiremos el 1, 4 y 3 en ese orden.
//Solo pra valores
let values = Object.values(nested.subObject);
console.log(values);

//Utilizando Object.entries noes devolvera por pantalla las claves y su valor, hasta de la ultima clave anidada en nested : {value : 3}.
//Nos devolvera las dos cosas, claves y valores.
let entries = Object.entries(nested.subObject);
console.log(entries);


//Otro tipo de bucle en el que podemos utilizar esto, nos sirve porque nos permite recorrer tanto la clave como el valor en la misma iteracion de nuestro ciclo
//Creamos una entrada que se asignara a cada uno de los diferentes valores de nuestra matriz de entradas.
for(let entry of entries){
    /*Utilizamos algo llamado desestructuracion de matrices para obtener la clave y el valor de esa entrada */
    let [key, val] = entry;
    console.log(key);
    console.log(val);
    //Si el tipo de mi valor es un numero se le sumara 3
    if(typeof(val) === "number"){
        nested.subObject[key] = val + 3;        
    }
}

console.log(nested.subObject);