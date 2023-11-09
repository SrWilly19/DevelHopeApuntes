//Creamos una variable y le daremos el valor de 0
let doOnce = 0
function showSelected(selectedVar){
    //
    let selected = document.getElementById(selectedVar)
    if (doOnce === 0){selected.style.display = "block"; doOnce = 1}
    else if (doOnce === 1){selected.style.display = "none"; doOnce = 0}
}