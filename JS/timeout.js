cconsole.log("script loaded!");
//El primer argumento que le pasamos a setTimeout es la funcion que ejecutara y el otro argumento seran segundos * 1000 por que son milisegundos en lo que trabaja.
setTimeout(() => console.log("Timeout called"), 2000);

//Si quisieramos iterar este codigo deberia de ser de la siguiente manera: 
for(let i = 0; i < 5; i++){
    setTimeout(() => console.log(`Called after ${i+1} secopnd(s)`), 1000 * (i+1));
}

//setInterval(() => console.log("Called setInterval"), 1000);
//Podremos hacer lo mismo pero con la funcion setInterval. Solo que esta no dejara nunca de ejecutarse para eso se propone la siguiente solucion.
let id = setInterval(() => console.log("Called setInterval"), 1000);
setTimeout(() => clearInterval(id), 5000);