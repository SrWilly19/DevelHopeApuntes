//Le pasamos una etiqueta para que pueda mostrar una etiqueta dentro del boton, tambien le pasamos un accesorio llamado onClick que sera el evento que quiero representar.
//Pero este tambien se puede llamar como yo quiera
export function Button({ label, onClick}){
    return <button onClick={onClick}>{label}</button>
}