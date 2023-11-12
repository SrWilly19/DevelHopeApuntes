

function getUserName({name}){
    if(name === undefined){
        return Promise.reject(new Error("name was undefined"))
    }
    //Devolvera una promesa resuelta, es util porque podemos conectar facilmente esta funcionen una promesa cadena
    return Promise.resolve(name)
}


//[true && true && true] //true, fullfilled
//[true && false && true] //false, reject
// Promise.all, toma una lista o una serie de promesas
Promise.all([
//en este caso queremos asegurarnos de que todo ha funcionado correctamente
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({"name": "Arnau"})
])
//Devolvera el estado cumplido de cada una de esas promesas que podemos registrar aqui
    //Si todo se cumple lo devolvera todo, si una sola cosa falla saltara directamente al error
    .then((val) => console.log(val)) 
    .catch((err) => console.log(err))


// Promise.allSettled, esperara a que se liquiden todas las promesas antes de devolver cualquier valor
Promise.allSettled([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({"name": "Arnau"})
])
//Devolvera todas las pormesas, incluso si hay un error. Enseñara todas las promesas con sus resultados.
    .then((val) => console.log(val))
    .catch((err) => console.error(err))

// Promise.race, genera la primera promesa que finaliza ya sea cumplida o error
Promise.race([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({"name": "Arnau"})
])
    .then((val) => console.log(val))
    .catch((err) => console.error(err))


//[true || true || true] //true, fullfilled
//[true || false || true] //true, fullfilled
//[false || false || false] //false. reject
// Promise.any, el primero que resuelva, si se cumple, devolvera el valorde esa promesa. Si sa rechaza pasara a la siguiente hasta que alguna se resuelva, si no se resuelve ninguno,
// pasara al error
Promise.any([
    isLoggedIn(3),
    getUserDetails(3),
    getUserName({"name": "Arnau"})
])

    .then((val) => console.log(val))
    .catch((err) => console.error(err))