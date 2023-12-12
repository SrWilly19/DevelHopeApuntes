const people = [
    { id: 2, nombre: "Gabriela", edad: 44, ciudad: "Monterrey", pais: "México" },
    { id: 4, nombre: "Jose", edad: 18, ciudad: "Madrid", pais: "España"},
    { id: 1, nombre: "Maria", edad: 28, ciudad: "Caracas", pais: "Venezuela" },
    { id: 3, nombre: "Pablo", edad: 16, ciudad: "Barcelona", pais: "España" },
    { id: 10, nombre: "Juan", edad: 31, ciudad: "Paris", pais: "Francia" },
];

//1- Funciones Loops devolver números pares si quisieramos que fuera impar solo tendriamos que cambiar el 
//0 por un 1
const numPares = people.filter((num) => {
    return num.edad % 2 === 0;
})
//console.log(numPares)

//2- Array, devolver la persona de mayor edad del array
const personaMayor = people.sort((a,b) => b.edad - a.edad);
const personaMayor2 = personaMayor.find ((person) => person === personaMayor[0])
//console.log(personaMayor2);
//LO MISMO PERO SIMPLIFICADO
const personaMayorS = people.reduce((personaMayorS, personaActual) =>{
    //Compara laas edades de acutal y mayor, si es actual es mayor sera true y devuelve actual
    //Si es false la persona mayor seguira siendo la personaMayor y lo devolvera
    //si es true se ejecuta ? si es false  lo que va detras de :
    return (personaActual.edad > personaMayorS.edad) ? personaActual : personaMayor;
});
//Console.log(personasMayorS);

//3- Fecth API de GitHub : según el usuario que se le pasa a la función para los repositorios que trae (https://api.github.com/users/)
function obtenerRepositoriosDeUsuario(usuario){
    //Construir la URL de la API de GitHub para obtener los repositorios del usuario
    const url =  `https://api.github.com/users/${usuario}/repos`;
    //Utilizar fetch para realizar la solicitud HTTP
    return fetch (url)
    //Manejar la respuesta
        .then(response => {
            //Verificamos si la respuesta es existosa (codigo de estado 200-299)
            if(!response.ok){
                //Si la respuesta no es exitosa, lanzar un error
                throw new Error('Error en la solicitud: ${response.status}')
            }
            //Si la respuesta es exitosa, convertir la respuesta a JSON
            return response.json();
        })
        //Manejar los datos obtenidos (en este caso, imprimir en la consola)
        .then(repositorios => {
            //Hacer algo con la informacion de los repositorios (en este caso, imprimir en la consola)
            console.log(repositorios);
            return repositorios;
        })
        //Manejar cualquier error que pueda ocurrrir durante el proceso
        .catch(error => {
            //Imprimir el mensaje de error en la consola
            console.error('Error: ${error.message}');
        })
}
//const nombreDeUsuario = `octocat`;
//obtenerRepositoriosDeUsuario(nombreDeUsuario)

//4- Loop: array de string y devolver un nuevo array con todos los strings que tenga la letra A (métodos incluye y predefinidos de array)
const peopleConA2 = people.filter ((persona) => {
    return persona.nombre.toLowerCase().includes("a");
})
//console.log(peopleConA2)

const miObjeto = {
    zorro: 'animal',
    manzana: 'fruta',
    coche: 'vehículo',
    banana: 'fruta'
};
//5- Objeto como parámetro y trae un nuevo objeto con las mismas propiedades pero en orden alfabético
function ordenarPropiedadesAlfabeticamente(objeto){
    //Obtener las propiedades del objeto
    const propiedades = Object.keys(objeto);

    //Ordenar las propiedades alfabeticamente
    propiedades.sort();

    //Crear un nuevo objeto con las propiedades ordenadas
    const objetoOrdenado = {};
    propiedades.forEach(propiedad => {
        objetoOrdenado[propiedad] = objeto[propiedad];
    });

    return objetoOrdenado;
}
const objetoOrdenado = ordenarPropiedadesAlfabeticamente(miObjeto);
//console.log(objetoOrdenado);

//6- Loops y objetos: una función que pasa un objeto como parámetro y devuelve un array conteniendo un array con las propiedades numéricas
function soloPropieNume(matriz){
    return matriz.map(obj => Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => typeof value === 'number')
    ))
}
//console.log(soloPropieNume(people))

//7- Fetch: number api, agarrar un numero random y traer info de este numero random (http://numbersapi.com/$%7BrandomNumber%7D%60)

function obtenerNumeroAleatrio(min, max){
    //Math.floor redondea al numero entero hacia abajo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obtenerInformacionNumeroAleatorio(){
    //Generar un nuemro aleatorio entre 1 y 100(o el rango que desees)
    const randomNumber = obtenerNumeroAleatrio(1,100);

    //Construir la URL de la API con el numero aleatorio
    const apiUrl = `http://numbersapi.com/${randomNumber}`;

    //Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('Error en la solictud: ${response.status}');
            }
            return response.text();
        })
        .then(data => {
            //Manejar la informacion obtenida
            console.log(data);
        })
        .catch(error => {
            console.error('Error: ${error,nessage}');
        })
}

//obtenerInformacionNumeroAleatorio();

//8- Loops y array: array numeros que devuelve números que son mayores a su posición en el array
let array = [8,3,9,4,2,5,7,1,6];
function filtrarNumerosMayoresQuePosicion(matriz){
    const resultado = matriz.filter((numero, indice) => numero > indice);
    return resultado;
}
const resultadoNumFil = filtrarNumerosMayoresQuePosicion(array);
//console.log(resultadoNumFil);

//9- Array y loops: agarra un array de strings y devuelve un nuevo array con los strings que sean mayores a 5
const cadenas = ["apple", "banana", "orange", "grape", "kiwi"];
function filtrarStringMayores5(matriz){
    const resultado = matriz.filter(frutas => frutas.length > 5);
    return resultado;
}
const resultadoFiltrado = filtrarStringMayores5(cadenas);
//console.log(resultadoFiltrado);

//10- Fecth: APi para gatos, que trae imágenes de gatos, hacer algo con la imagen (https://api.thecatapi.com/v1/images/search?limit=5)
function obtenerImagenesDeGatos(){
    //Construir la URL de la API para obtener imagenes de gatos
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=5';

    //Realizar la solicitud a la API
    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('Error en la solicitud: ${response.status}');
            }
            return response.json();
        })
        .then(data => {
            //Manejar la informacion obtenida (en este caso, trabajar con las imagenes)
            console.log(data);

            //Ejemplo: mostrar las imagenees en una pagina web
            data.forEach(gato => {
                const imagen = document.createElement('img');
                imagen.src = gato.url;
                document.body.appendChild(imagen);
            });
        })
        .catch(error => {
            console.error('Error: ${error.message}');
        })
}

//Ejemplo de uso
obtenerImagenesDeGatos();