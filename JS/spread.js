let arr = [1,2,3,4];

let obj = {
    "key": 1,
    "key2": 2,
    "nested": {
        "mult": 4,
        "str": "5"
    }
}

//Queremos  crear una nueva matriz que incluya la anterior, pero con algunos nuevos elementos.

//Si creamos una nueva matriz, la configuramos en esa matriz anterior pero no creamos una matriz con valores nuevos, si no que modificamos la matriz de referencia.
let newArr = arr;
//Le metemos un nuevo valor, que vaya al final. Y aun asi modificamos la misma matriz que tenemos arriba es decir estamos modificando "arr".
newArr.push(3);
console.log(newArr);

//Si no queremos que esto pase tendremos que utilizar el operador de dispersion (...) seguido de la matriz que queremos "difundir". Esto lo que hace es tomar la matriz, la 
//dividiremos en todos sus diferentes elementos y despues asignaremos esos elementos a esta nueva matriz que hemos creado. Le metemos un nuevo valor como antes con ".push"
//y asi tendremos la nueva matriz con los mismos valores que la anterior sin necesidad de modificar la matriz original.
let newArrOD = [...arr];
//Con nuestro operador de dispersion podriamos añadir un numero a la matriz sin necesidad de utilizar el ".push()", simplemente hariamos esto:
//let newArrOD = [...arr, 3] Despues de nuestra matriz original una "," seguido de lo que queramor añadir. Podemos añadir tantos valores como queramos a cada lado de la extension.
//Cuando usamosel operador de dispersion, siempre creamos una nueva matriz
newArrOD.push(3);
console.log(newArrOD);
console.log(arr);
//Se lo podemos pasar a una funcion que nos creara una nueva array en base a nuestra array original pero sin estar ligada a ella.
function makeNewArray(arr){
    return [...arr];
}
//Tambien podemos hacerlo con los objetos. Y tendremos que poner la sintaxis correcta {..."nombre del objeto que quiero copiar"}, aqui en los objetos antes de los "..." podemos poner
//claves y asignarle un valor para tambien añadirlos {"newKey": 45, ...obj}; Incluso podriamos meter un objeto dentro de una clave haciendo referencina
//a nuestro objeto original, y esto crearia un nuevo objeto, con nuestro objeto creado a partir del original y con el original propio {...newObj, "nested":{...obj}};
let newObj = {...obj};

class MyArray extends Array{
    customName;
    //En el constructor hemos añadido nuestro primer argumento a customName y despues cualquier otro argumento dado se agregara a este resto.
    constructor (customName, ...rest){
        //Si queremos obtener todos los de nuestra matriz y luego distribuirlos de nuevo,y darles argumentos separados para nuestra super funcion.
        super(...rest);
        this.custamName = customName;
    }

    sum(){
        return this.reduce((a,b) => a + b);
    }
}

let arr2 = new MyArray("something", 1, 2, 3, 4, 5);
console.log(arr2.sum());
//Estamos haceindo desestructuracion y utilizando nuestro operador de dispersion para almacenar las variables.
function doSomething({sum = true, divide = false}, ...rest){
    if(sum){
        return rest.reduce((a,b) => a + b);
    } else if (divide){
        return rest.reduce((a,b) => a / b) ;
    }
    return 0;
}

console.log(doSomething({"sum": false, "divide": true}, 2, 3, 4, 5));