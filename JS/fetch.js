//Siempre que utilicemos alguna API es bueno que tengamos algun tipo de documentacion parasaber como llamarla.
//Creamos una funcion que cogera el enlace de la foto de la API y lo pondra en nuestro src de nuestra imagen en nuestra pagina web. Le damos como parametro un URL que es lo que le 
//pasaremos. Creamos un elemento img que sera la imagen, esta imagen en nuestro html debe tener un ID, con este ID lo relacionaremos. Despues le pondremos en src la url
function setImageSrc(url){
    let img = document.getElementById("image")
    img.src = url;
}
//Mediante fetch obtendremos algunos datos a traves de solicitudes HTTP en nuestro JavaScript
//Lo que hace fetch, tomara dos parametros,la URL que realmente estamos solicitando, y luego algunos metadatos que podemos agregar para cambiar el comportamiento de la API.
//Por ejemplo, podemos agregar algunos parametros de consulta aqui, otros encabezados para ayudar a la API a comprender de donde proviene la solicitud y solo un monton de otros
//metadatos que pueden ser utiles para la API.
fetch("https://dog.ceo/api/breeds/image/random")
    //Esto tomara el cuerpo de la respuesta y luego, lo convertira en un JSON para usar en nuestro codigo JavaScript
    .then((res) => res.json())
    .then((json) => json.message)
    .then(setImageSrc)
    .catch((err) => console.error(err))

//Explicacion de lo que estamos haciendo aqui: 
/* Primero con fetch buscara la API que vamos a utilizar.
   Una vez cumplida la promesa, se pasara al paso de evento o si se rechaza a la parte de captura, luego convertimos la respuesta en un JSON que en realidad podemos utilizar 
   nuestro codigo. (Linea 14) Tomamos la clave del mensaje de nuestro JSON. (Linea 15) Finalmente colocamos la URL en nuestra funcion de fuente de imagen establecida, que en realidad 
   realiza la logica necesaria para establecer la imagen en nuestra etiqueta de imagen en nuestra pagina HTML*/
/*request
    -origin mysite.com
    -method: get, post
    -parameters

fetch(url, data)
fetch(google.com, {
    token: "fhjfnfkjnkcc"
})
Google analizaria el token y veria que es compatible, esto solo si google se pusiera exquisito y quiera filtrar todo el contenido
server
    -rules
    -origin(google.com)

Same origin: Si la request y el server tienen el mismo origen sera mejor ya que esta todo almacenado en google.
Cross-Origin Resource Sharing (CORS): Cuand nuestro origen es distinto al del server    */