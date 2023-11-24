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