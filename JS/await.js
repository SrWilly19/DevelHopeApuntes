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


//Para crear nuestra funcion asyncrona empezamos con la palabra clave async
async function printUserName(id){
    let userName;
    try{
        let  userId = await isLoggedIn(id);
        let userDetails = await getUserDetails(userId);
        userName = await getUserName(userDetails);
    }catch(err){
        console.error(err);
    }
    //await llamara esto, esto regresara una promesa. Cuando se resuelva la promesa, ese valor se asignara a la variable userId
    console.log(userName);
    return userName; 
}


//Esta haciendo lo mismo arriba y abajo

printUserName(3)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))


isLoggedIn(3)
    .then(getUserDetails)
    .then(getUserName)
    .then((val) => console.log(val))
    .catch((err) => console.error(err))