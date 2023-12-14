import { HelloWorld } from "./HelloWorld"
import { Welcome } from "./Welcome"

//Un componente debe devolver una expresion JSX, algo que permita que el componente se represente dentro de la aplicacion
//Nuestro componente Welcome tiene dos parametros que le pasamos, un nombre entre comillas "" y una edad que se la pasamos entre {}
export function App(){
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr />
            <Welcome name="Arnau" age={24}/>
        </div>
    )
}