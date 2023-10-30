//Desestructuracion.
// Es mas facil hacerlo con una matriz, poero solo las usamos cuando una matriz es relativamente pequeña. Porque se vuelve muy dificil seguir escribiendo esto [i, j, k, l, etc] para una
//matriz de muchos numeros puede ser muy tedioso.

let arr = [1, 2, 3, 4];
//Esto asigna i a 1, j a 2, etc y podremos entrar en cualquiera de los valores con un console.log(i). 
let [i, j, k, l] = arr;
//Si solo queremos obtener el segundo valor de la matriz, podemos usar el guion bajo para la primera opcion ya que solo actuara como un marcador de posicion.
//let [_, j] = arr;

let obj = {
    "key" : 1,
    "key2" : 2,
    "nested" : {
        "mult" : 4,
        "str" : "5"
    }
}

console.log(Object.entries(obj));
//itera sobre las claves para poder modificar su valor. Utilizamos el of que nos permite iterar sobre los valores reales. Pero sigue siendo una desestructuracion de matrices
for (let entry of Object.entries(obj)){
    let [key, val] = entry;
    obj[key] = val / 2;
}

//Desestructuracion de objetos.
//Queremos coger cada una de las claves "key" y "key2" y luego manipular esos valores por separado. Para hacer las desestructuracion tendremos que cambiar las [] por {} ya 
//que es un objeto y despues darle "= nombreDelObjeto". En la matriz nos daba igual como llamar a los valores (i, j, k, l) pero en el objeto al tener claves unicas, necesitamos 
//usar esas claves unicas en nuestra desestructuracion.
//La desestructuracion de objetos sirve mucho porque si tienes un JSON muy grande u objeto con varias claves, puede reducir la cantidad de informaciuon que realmente esta usando 
//simplemente usando la desestructuración, solo tenemos que utilizar las keys de lo que realmente estemos interesados.
//Otro uso para la desestructuracion para hace una funcion de suma por ejemplo, lo desestructura en la parte superior al lado de la suma, poniendo el nombre de nuestras keys
let {key, key2} = obj;

function sum({key, key2}){
    return key + key2;
}