export function MouseClicker(){
    //Por lo atanto, puede usar esta sintaxis para tener el mismo controlador de eventos y ejecutar un codigo diferente dentro del mismo controlador de eventos, segun el elemento que 
    //activo el controlador de eventos
    function handleButtonClick(event ){
        console.log(event.currentTarget.name)
    }

    return (
        <div>
            <button name="one" onClick={handleButtonClick}>Click me!</button>
            <button name="two" onClick={handleButtonClick}>Click me!</button>
        </div>
        

    )
}