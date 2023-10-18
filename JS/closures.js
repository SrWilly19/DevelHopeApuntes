//let something = 5;
this.something = 5;

function func(){
    return something;
}

/*Funciones anidadas // closure (cierre)*/
/*function outer(){
    let something = 10;
    function inner(){
        return something;
    }
    return inner;
}*/
/*Con un outer() nos devolvera function: inner pero ningun resultado, si ponemos outer()() nos devolvera el 10 que es la salida de mi funcion externa*/
//console.log(outer()());

/*Esto nos devolvera undefined porque el valor this que quiere imprimir no esta aqui
function outer(){
    this.something = 10;
    function inner(){
        setTimeout(function(){
            console.log(this.something);
        }, 500)
    }
    return inner;
}*/

/* En la primera devuelve indefinido porque no hay declaracion de retorno en mi interior, cuando quitamos el consol log y solo llamamos a la funcion outer, nos dara el 10 sin ningun
valor indefinido, */
function outer(){
    this.something = 10;
    function inner(){
        setTimeout(() => {
            /*Este this sigue relaciona con nuestra funcion y esto se debe a que cuando usamos una funcion de flecha en realidad estmaos tomando el valor this de nuestro alcance adjunto y 
            luego asignandolo a nuestro error*/
            console.log(this.something);
        }, 500)
    }
    return inner;
}

outer()();