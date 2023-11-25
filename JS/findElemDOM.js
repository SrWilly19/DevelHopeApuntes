//Finding elements in the DOM

//querySelector
//find the first li tag. Solo generara el primer elemento que coincida con su consulta, querySelectorAll por otro lado devolvera una matriz de todos los elementos que coincidan
//Encontrara cualquier cosa que pueda usar en sus selectores de CSS,por ejemplo, el nombre de una etiqueta o una clase, nombre o incluso una identificacion, tambien puede usar la funcion 
//querySelector
let firstLi = document.querySelector("li");
console.log(firstLi);

//querySelectorAll


//getElementById



//La API DOM solo existe cuando el codigo esta ejecutando el navegador, porque es el unico lugar donde se esta utilizando un documento.

//DOM TRAVERSAL
//Para llevar el cuerpo alli, usamos los niños y el cuepro es nuestro segunod nodo alli porque primero esta la cabeza y luego el cuerpo
let document = document.documentElement.children[1]
//Moviendonos hacia abajo en el DOM
let children = body.children
//Si quisieramos bajar a ul, por ejemplo, seria el segundo hijo de nuestro elemento body y por lo tanto usariamos elindice aqui
let ul = body.children[1]

//Si queremos movenros hacia arriba en el DOM, podriamos regresar desde nuestro elemento delcuerpo y seleccionar el elemneto principal y luego usariamos el elemento principal para 
//volver a nuestro HTML
let html = body.parentElement

//Si quisiereamos movernos lateralmente en el mismo nivel de anidamiento, podrimaos obtener nuestro elemento principal diciendo cuerpo. Elemento anterior hermano y ese seria otro elemento
// que esta en el mismo nivel de anidamiento que el que estamos seleccionando actualmente.
let head = body.previousElementSibling

let  ul = //findmyUL

//Por lo general es necesario realizar algun recorrido para obtener todo lo que esta buscando

ul.children

//Tenemos que guardar lo que vayamos hacer en una nueva variable para poder utilizarla mejor
let ul = document.querySelector("ul")

//Este comando div.innerHTML nos enseñara que esta dentro de ese div
//Para reemplazarlo tendremos que utilizar esta linea, es como darle un valor a una varible
div.innerHTML = "<h2> New header </h2>"

//En una lista ya sea numerada o no numerada por ejemplo tendremos unos hijos que tambien podemos reemplazar.
let ul = document.querySelector("ul")
//Reemplazamos los hijos por el div de antes. Se reemplazara con lo que le pongamos dentro
ul.replaceChildren(div)