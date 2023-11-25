//Para obtener nuestro elemento h1, podemos usar el selector de consulta de documentos h1 
let h1 = document.querySelector("h1")
h1.style.display = "inline-block"

//para averiguar que ancho tiene nuestro h1 utilizaremos una propiedad especifica llamada "clientWidth"
let width = h1.clientWidth

let redBox = document.getElementById("red-box");
//Vamos a darle el ancho a nuestro recuadro rojo, con el ancho de nuestro h1. La propiedad "width" en CSS generalmente requeire una unidad de medida, como pixeles ('px') o porcentaje
//('%')
redBox.style.width = width + "px";
redBox.style.height = width + "px";
redBox.style.backgroundColor = "red";