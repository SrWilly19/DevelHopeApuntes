//Creamos una variable y le daremos el valor de 0
let doOnce = 0
function showSelected(selectedVar){
    //Cogemos el elemento que vamos a utilizar a traves del id que le hemos dado
    let selected = document.getElementById(selectedVar)
    //Creamos una condicion, si doOnce es 0  la pestañá se abrira y pondra un en 1 a doOnce
    if (doOnce === 0){selected.style.display = "block"; doOnce = 1}
    //Mientras que si doOnce es igual a 1, la pesataña se cerrara y pondra en 0 a doOnce, siendo asi 0 cerrado y 1 abierto.
    else if (doOnce === 1){selected.style.display = "none"; doOnce = 0}
}