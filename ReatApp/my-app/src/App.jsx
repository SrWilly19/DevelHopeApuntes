import { AlertClock } from "./AlertClock"
import { Clock } from "./Clock"
import { Counter } from "./Counter"
import { HelloWorld } from "./HelloWorld"
import { MouseClicker } from "./MouseClicker"
import { MyForm } from "./MyForm"
import { MyList } from "./MyList"
import { MyUncontrolledForm } from "./MyUncontrolledForm"
import { Welcome } from "./Welcome"



//Un componente debe devolver una expresion JSX, algo que permita que el componente se represente dentro de la aplicacion
//Nuestro componente Welcome tiene dos parametros que le pasamos, un nombre entre comillas "" y una edad que se la pasamos entre {}
export function App(){
    return (
        <div className="app">
            <h1>My Awesome Application</h1>
            <hr />
            <Welcome name="Arnau" />
            <AlertClock />
            <Counter />
            <MouseClicker />
            <MyForm />
            <MyUncontrolledForm />
            <Clock />
            <MyList items={[
                {id: 1, name: 'Jane', age: 33},
                {id: 2, name: 'Kate', age: 20},
                {id: 3, name: 'John', age: 24},
                {id: 4, name: 'Billy', age: 25},
                {id: 5, name: 'Jane', age: 34},
            ]}/>
        </div>
    )
}