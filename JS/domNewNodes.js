let h1 = document.querySelector("h1")
h1.style.display = "inline-block"
let width = h1.clientWidth

let redBox = document.getElementById("red-box");
redBox.style.width = width + "px";
redBox.style.height = width + "px";
redBox.style.backgroundColor = "red";

async function loadDogImage(){
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let json = await res.json()
    let url = json.message;
    let container = document.getElementById("dog-container")
    let img = document.createElement("img")
    img.height = "400";
    img.width = "400";
    img.src = url;
    container.appendChild(img);
}

/*Agregar clases desde el dom se tendra que hacer de la siguiente manera. classList: nos enseña todas las clases que estan en nuestro elemento.
creamos una variable donde metemos las clases antiguas
let oldClasses = h1.classList
En nuestro elemento h1 metemos dentro de la lista de classes nuestras clases antiguas mas la clase que queremos añadir. 
h1.classList = oldClasses + " blue"

Si queremos agregar una nueva clase de otra manera, podemos utilizar el .add("nombreDeLaClasseQueAgrego")
h1.classList.add("green")


Si quiero eliminar uno en especifico utilizare el .remove("nombreDeLaClasseQueElimino")
h1.classList.remove("green")

Para comprobar si una clase existe para no utilizar duplicados utilizaremos .toggle("nombreDeLaClasse"), si la classe existe la eliminara.
h1.classList.toggle("red")
retorna: false
Si volvemos hacerlo nos dara true entonces como no existe lo agregara
*/
