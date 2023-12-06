/*Para extraer los valores numericos de un objeto, y colocarlos en un nuevo array.
Puedes utilizar el metodo Objet.values() para obtener todos los valores del objeto
y luego flitrar solo aquellos que son numericos*/
function obtenerValoresNumericos(objeto){
    //Obtener todos los valores del objeto
    //Metemos todas las parejas de clave valor dentro de nuestra nueva varibale "valores"
    const valores = Object.values(objeto);
    
    //Filtrar solo los valores que son numericos.
    //Creamos una nueva variale y le pasamos nuestra variable con las parejas de clave/valor y
    //añadimos el ".filter" para filtrar por el tipo number que es lo que queremos encontrar
    const valoresNumericos = valores.filter(valor => typeof valor === "number");
    //Devolvemos la variable que ya tiene nuestros valores de tipo number
    return valoresNumericos;
}
//Ejemplo de uso
const miObjeto = {
    nombre: "TuNumbre",
    edad: 25,
    altura: 1.75
}
const arrayDeValoresNumericos = obtenerValoresNumericos(miObjeto);
console.log(arrayDeValoresNumericos);
//Output esperado : [25, 1.75]





