import { HelloWorld } from "./HelloWorld"

//Un componente debe devolver una expresion JSX, algo que permita que el componente se represente dentro de la aplicacion
export function App(){
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr />
            <HelloWorld />
        </div>
    )
}