import { Button } from "./Button"

export function AlertClock(){
    //Podemos crear la funcion del boton dentro del mismo componente pero no dentro del boton
    function handleShowTime(){
        const now = new Date()

        //Esta funcion recibe una cadena que podemos mostrar dentro de una alerta que aparece dentro de nuestro navegador.
        //``ponemos estas comillas que son un literal de plantilla, una cadena de JavaScript dentro de la cual puedo interpolar expresiones
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    return (
        <div>
            <p>Click the button below to show the current time</p>
            <Button onClick={handleShowTime} label="Click me! " />
        </div>
    )
}