/*Realiza un filtrado de esta lista de nombres para que solo aparezcan las personas mayores de edad.
Al realizar esto ya podriamos filtrar por cualquier edad. Ya sea encontrar los mayores o menores */
const personas = [
    {nombre: 'Juan', edad: 25},
    {nombre: 'Maria', edad: 30},
    {nombre: 'Carlos', edad: 22},
    {nombre: 'Ana', edad: 35},
    {nombre: 'Pedro', edad: 28},
    {nombre: 'Laura', edad: 16}
]

function filtradoMayores(matriz){
    /*Utilizamos de nuevo el metodo filter (la palabra age podria ser lo que sea pero la utilizamos asi 
    para mas claridad a la hora de leerlo) comparamos la edad comprobando que son mayores de 18 y 
    devolvemos esa variable. */
    const filtraMayor = matriz.filter((age) => age.edad > 18)
    return filtraMayor;
}
const filtroUsado = filtradoMayores(personas);
console.log(filtroUsado);
