const { timeout } = require("async");

//Veremos si esta conectado
function isLoggedIn(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rand = Math.random();
            if(rand > 0.3){
                resolve(userID);
            } else {
                reject(new Error("Not logged in!"))
            }
        }, 500);
    })
}

function getUserDetails(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userID < 5){
                resolve({"name": "Arnau", "otherData": "hello"});
            } else {
                reject(new Error("User does not exist"))
            }
        }, 500);
    })
}

function getUserName({ name, doesNotExist }){
    throw new Error ("some new error")
    console.log(doesNotExist.nested);
    return name;
}

isLoggedIn(3)
    .then(getUserDetails)
    .then(getUserName)  
    .then((name) => console.log(name))
    .catch((err) => console.error(err))
    .finally(() => console.log("finally!"))
    //Esto solo se ejecutara cada vez que se complete la promesa, sin importar si arrojo un error o si fue un completo exito.