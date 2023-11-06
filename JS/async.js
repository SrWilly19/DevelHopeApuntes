let count = 0;

function repeat(callback, n){
    let id = setInterval(callback, 500);
    //Creamos un tiempo de espera establecido, que borrara el intervalo despues de N cantidad de veces.
    setTimeout(() =>  clearInterval(id), 500 * n);
}

repeat(() => console.log("hi"), 3);
repeat(() => console.log("hello"), 5)
repeat(() => count += 1, 5);
//Esta linea de codigo se ejecutara antes porque el otro tiene un delay de 500ms
console.log("I ran!")
console.log(count);
setTimeout(() => console.log(count), 5000);