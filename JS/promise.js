//Una promesa es un tipo especial de objeto de JavaScript que tiene un estado pendiente o liquidado, lo que esto significa es que encapsula un codigo que se ejecuta de forma asincrona. y
//finalmente, se le da un nuevo estado, que nos dice si ese codigo tiene o no se ejecuto correctamente o ha llegado a alguin tipo de error o algo por el estilo.


//getUsername -> getUserDetails -> isUserLoggedIn

//Flujo basico de como podria funcionar una cadena de promesas. Primero estamos llamado a una funcion, y en funcion de su salida, llamamos a la siguiente funcion en la linea y en funcion
//de su salida, luego llamamos a la siguiente funcion en linea, y asi sucesivamente hasta llegar al final de nuestra cadena. Y al final de la cadena solo queremos imprimir el nombre.
isUserLoggedIn(userID)
    .then((userID) => getUserDetails(userID))
    .then((details) => getUsername(details))
    .then((name) => console.log(name))
    //Nuestra instruccion catch se activara si se produce un error en cualquiera de estas otras funciones.
    .catch((err) => console.log(err))

//Las dos devoluciones de llamada se llamaran dependiendo de si la promesa se ha resuelto o no. o rechazado, y la promesa generalmente se rechaza si hay algun tipo de error u otra cosa
//que va mal durante la ejecucion de la promesa. Normalmente, cuando hacemos una promesa, podemos dar una resolucion y rechazar la devolucion de llamada. 
//Estas devoluciones de llamada en realidad se producen automaticamente. No necesitamos necesariamente escribir una funcion diferente para cada uno de estos casos.
let ourPromise = new Promise((resolvem, reject) => {
    //Generamos un numero aleatorio, segun el estado de ese numero aleatorio, resolvemos o rechazamos nuestra promesa.
    let rand = Math.random();
    //Si el numero es mayor que 0.5 la promesa se cumplira sino saldra en el reject
    if(rand > 0.5) {
        resolve(rand);
    }else{
        reject(rand)
    }
});

//Ahora vamos a tomar la misma logica, excepto que en lugar de ejecutarla sincronicamente, agregaremos algun tipo de retraso.
let ourPromiseDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random();
        if(rand > 0.5){
            resolve(rand);
        }else{
            reject(rand);
        }
    }, 1000);
})
//Si sale el valor mayor que 0.5 saldra por pantalla, si sale uno menor cogera el error y nos mostrara el error. Nuestra promesa tambien nos permite encadenar algunas funciones diferentes.
//Si se cumple la promesa la primera la multiplica por 4 y la segunda imprime nuestro valor por pantalla. Esto es un encadenamiento de promesas.
ourPromise
    .then((val) => val * 4)
    .then((val) => console.log(val))
    .catch((err) => console.log(err))