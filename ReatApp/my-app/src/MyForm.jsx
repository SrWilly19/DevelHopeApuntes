import { useState } from "react"

export function MyForm(){
    //Inicializamos la varible destado con uan cadena vacia y tomaremos la tupla que esta devolviendo useState y guardaremos tanto el nombre de usuario como la funcion setUsername dentro
    // de algunas variables.
    const[username,setUsername] = useState('')
    /*De alguna manera estoy vinculando el valor contenido en la entrada con el valor del nombre de usuario, pero, por supuesto, este es un enlace de datos unidireccional porque la entrada
    no puede cambiar directamente  el contenido de la variable del nombre de usuario, solo puede leer su valor, y mostrarselo al usuario.
    Para cambiar el valor de la variable de nombre de usuario, necesitamos usar la funcion setUsername, que es la funcion devuelta por el enlace useState que nos permite actualizar el valor
    de una variable de estado y como sabemos cuando cambiar el valor contenido dentro del variable de nombre de usuario?
    Ahora, el evento onChange  se compaorta de manera diferente a como lo hace en HTML porque en HTML el evento onChange se activa cuando el valor de una entrada cambia y la entrada
    pierde su foco.
    En React se activa tan pronto como cambia el valor dentro de una entrada, tan pronto como un usuario escribe algo dentro de la entrada sin necesidad de que la entrada pierda su 
    enfoque. onChange se comporta exactamente como el evento onInput en HTML.
    El evento onInput y onChange se comportan exactamente igual y probablemente veras que el evento onChange se usa con mas frecuencia, asi que por ahora te sugiero que uses el evento onChange
    aunque puedes usar el evento onInput si lo prefieres.*/

    function handleUsernameInputChange(event){
        const value = event.target.value
        setUsername(value)
    }

    return (
        <div>
            <input value={username} onChange={handleUsernameInputChange} />
        </div>
    )
}