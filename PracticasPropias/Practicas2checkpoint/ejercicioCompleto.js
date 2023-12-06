const people = [
    { id: 2, nombre: "Gabriela", edad: 44, ciudad: "Monterrey", pais: "México" },
    { id: 4, nombre: "Jose", edad: 18, ciudad: "Madrid", pais: "España"},
    { id: 1, nombre: "Maria", edad: 28, ciudad: "Caracas", pais: "Venezuela" },
    { id: 3, nombre: "Pablo", edad: 16, ciudad: "Barcelona", pais: "España" },
    { id: 10, nombre: "Juan", edad: 31, ciudad: "Paris", pais: "Francia" },
    { id: 20, nombre: "Paula", edad: 42, ciudad: "New York", pais: "Estados Unidos" },
    { id: 12, nombre: "Jorge", edad: 25, ciudad: "Los Angeles", pais: "Estados Unidos" },
    { id: 9, nombre: "Carolina", edad: 47, ciudad: "Roma", pais: "Italia" },
    { id: 8, nombre: "Eduardo", edad: 20, ciudad: "Munich", pais: "Alemania" },
    { id: 11, nombre: "Fabiola", edad: 48, ciudad: "Lima", pais: "Peru" },
    { id: 23, nombre: "Pedro", edad: 52, ciudad: "Buenos Aires", pais: "Argentina" },
    { id: 24, nombre: "Julio", edad: 34, ciudad: "Bogota", pais: "Colombia" },
    { id: 17, nombre: "Ana", edad: 39, ciudad: "México DF", pais: "México" },
    { id: 18, nombre: "Roberto", edad: 15, ciudad: "Burdeos", pais: "Francia" },
    { id: 35, nombre: "Paola", edad: 25, ciudad: "Cordoba", pais: "Argentina" },
  ];

/*1- Ordenar por edad con el metodo sort, se ordenara de mayor a menor si cambiamos
de lado la "a" en la posicion de la "b" lo tendremos de menor a mayor*/
const ordenPorEdad = people.sort((a, b) => a.edad - b.edad);
//console.log(ordenPorEdad);

/*2- Ordenar alfabeticamente por nombre, utilizamos el metodo sort para ordenar */
const ordenPorNombre = people.sort((a, b) => {
    /*Si el nombre de `a` es alfabeticamente mayor a 'b', devuelve 1. Indica que
    'a' debe ir despues de 'b' en la ordenacion */
    if (a.nombre > b.nombre){
        return 1;
    /*Si el nombre de 'a' es alfabeticamente menor que el nombre de 'b', devuelve -1
    Indica que 'a' debe ir antes que 'b' en la ordenacion */
    }else if(a.nombre < b. nombre){
        return -1;
    /*Si los nombres son igules, devuelve 0, su orden relativo no cambia */
    } else{
        return 0;
    }
})
//console.log(ordenPorNombre);
//HACE LO MISMO PERO MAS CORTO
function personasOrdenadasPorNombre(personas){
    return personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
//console.log(personasOrdenadasPorPais(people))
/*3- Extraer los nombres que contengan la A*/
const peopleConA = people.filter ((persona) => {
    if(persona.nombre.includes("a") || persona.nombre.includes("A")){
        return true;
    }
    return false;
})
//console.log(peopleConA)
/*Mas directo, lo sabe el filter sin hacer condicion (podemos poner .tolowercase antes de includes) */
const peopleConA2 = people.filter ((persona) => {
    return persona.nombre.toLowerCase().includes("a");
})
//console.log(peopleConA2);

//4- Mostrar persona mayor
/*Primero ordenamos por edad, y despues buscamos la persona mayor con su indice 0 ya que estara la primera
en nuestra lista */
const personaMayor = people.sort((a,b) => b.edad - a.edad);
const personaMayor2 = personaMayor.find ((person) => person === personaMayor[0])
//console.log(personaMayor2);

//5- Devolver un array con todos los nombres
const personaNombre = people.map((person) => {
    return person.nombre;
})
//console.log(personaNombre);

//6- Devolver numeros que son mayores a su posicion en el array. Id mayor que el indice (posicion en array)
//Utilizamos filter y le pasamos el indice como segundo parametro para que pueda comparar
//directamente con el indice actual.
const personaOrden = people.filter((person, index) => {
    return person.id > index
})
//console.log(personaOrden); 

//7- Devolver numeros pares
const numPares = people.filter((num) => {
    return num.edad % 2 === 0; 
})
//console.log(numPares)

//8- Devolver el objeto con las propiedades numericas (ID, edad)
function soloPropNume(arr){
    const newArr = [];
    arr.forEach(obj => {
        for(const prop in obj){
            if(typeof obj[prop] === 'number'){
                newArr.push({[prop]: obj[prop]});
            }
        }
    });
    return newArr;
}
//console.log(soloPropNume(people))
//OTRA MANERA MAS CLARA Y MEJOR DE RESULTADO:
function soloPropieNume(arr){
    //Object.fromEntries(): convierte la matriz de pares clave-valor nuevamente en un objeto
    return arr.map(obj => Object.fromEntries(
        //(Object.entries(obj): convierte el objeto en una matriz de pares clave-valor)
        //filter(([key, value]) => typeof value === 'number'): Filtra solo las entradas cuyos valores son de tipo numero
        Object.entries(obj).filter(([key, value]) => typeof value === 'number')
    ));
}
//console.log(soloPropieNume(people));

//9- Devolver nuevo array con strings que sean mayores a 5
function devolverString(arr){
    const arrFinal = arr.filter(obj => obj.nombre.length > 5)
    return arrFinal;
}
 //console.log(devolverString(people))

//10- Devolver un array con las personas que son de Argentina.
function filtrarArgentina(matriz){
    const argentinos = matriz.filter( cadena => cadena.pais === "Argentina")
    return argentinos;
}
//console.log(filtrarArgentina(people))

//11- Devolver un array con las personas con edad multiplo de 5
function personasMultiplo5(matriz){
    const multiplos = matriz.filter(cadena => cadena.edad % 5 === 0)
    return multiplos;
}
//console.log(personasMultiplo5(people))

//12- Devolver la persona menor
//Utilizamos el mismo codigo que para encontrar el mayor pero cambiamos la 'b' por la 'a'
const personaMenor = people.sort((a,b) => a.edad - b.edad);
const personaMenor2 = personaMenor.find ((person) => person === personaMenor[0])
//console.log(personaMenor2)

//13- Devolver un array con las personas que vivan en ciudades de nombre menor a 7 caracteres
function personasVivenCiudadesMA7(matriz){
    const arrFinal = matriz.filter(cadena => cadena.ciudad.length < 7 )
    return arrFinal;
}
//console.log(personasVivenCiudadesMA7(people))

//14- Devolver un array con las personas ordenadas de acuerdo asu pais alfabeticamente
const ordenPorPais = people.sort((a, b) => {
    if (a.pais > b.pais){
        return 1;
    /*Si el nombre de 'a' es alfabeticamente menor que el nombre de 'b', devuelve -1
    Indica que 'a' debe ir antes que 'b' en la ordenacion */
    }else if(a.pais < b. pais){
        return -1;
    /*Si los nombres son igules, devuelve 0, su orden relativo no cambia */
    } else{
        return 0;
    }
})
//console.log(ordenPorPais);
//MAS SENCILLO Y RAPIDO
function personasOrdenadasPorPais(personas){
    return personas.sort((a, b) => a.pais.localeCompare(b.pais));
}
//console.log(personasOrdenadasPorPais(people))
//15- Devolver un array con los id multiplos de 3
function idMultiplo3(matriz){
    const multiplos = matriz.filter(cadena => cadena.id % 3 === 0)
    return multiplos;
}
console.log(idMultiplo3(people));