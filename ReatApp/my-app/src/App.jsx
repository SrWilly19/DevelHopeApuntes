import { AlertClock } from "./AlertClock"
import { Clock } from "./Clock"
import { Counter } from "./Counter"
import { HelloWorld } from "./HelloWorld"
import { MouseClicker } from "./MouseClicker"
import { MyForm } from "./MyForm"
import { MyUncontrolledForm } from "./MyUncontrolledForm"
import { Welcome } from "./Welcome"

//Un componente debe devolver una expresion JSX, algo que permita que el componente se represente dentro de la aplicacion
//Nuestro componente Welcome tiene dos parametros que le pasamos, un nombre entre comillas "" y una edad que se la pasamos entre {}
export function App(){
    return (
        <div>
            <h1>My Awesome Application</h1>
            <hr />
            <Welcome name="Arnau" />
            <AlertClock />
            <Counter />
            <MouseClicker />
            <MyUncontrolledForm />
            <Clock />
        </div>
    )
}