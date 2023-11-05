let obj = {
    "key" : 5
}

function printNestedKey(obj){
    try{
        if(obj.doesNotExist === undefined){
            //Utilizando throw podemos agarrar un error mas especifico y dejar que nos lo enseñe por pantalla
            throw new Error("Key does not exist");
        }
    }catch(e){
        console.log(e);
    }finally{

    }
}

//Con esto el codigo continuara ejecutandose, si cometemos un error sin esta parte el codigo parara de ejecutarse en el fallo
try{
    obj.doesNotExist.nested = 5;
} catch(e){
    console.error("The key `doesNotExist` does not exist");
}finally{
    console.log("I always run!");
}