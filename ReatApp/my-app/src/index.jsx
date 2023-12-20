import { StrictMode } from "react"
import { App } from "./App"
//Debemos importar desde la biblioteca React DOM es una funcion llamada createRoot
import { createRoot} from 'react-dom/client'

import './index.scss'
//Para poder usar el componente hello world definido en HelloWorld.jsx  debemos importarlo dentro de este archivo
//Metemos nuestro componente Hello World dentro de esta const helloWorldElement
//const helloWorldElement = <HelloWorld />

//El resultado de esta llamada de funcion es un puntero, una referencia al propio elemento root que esta en index.html
//Esto es en realidad una referencia a la etiqueta HTML que representa el navegador cuando representa esta pagina HTML 
//const rootElement = document.getElementById('root')

//Envolviendo nuestra APP con StricMode hara que ejecutemos react en modod desarrollo, lo que hara sera montar, desmontar,
//y volver a montrar nuestros componenetes para asegurarnos de uqe veamos errores si nuestros egectos no son potenetes ocultos
//La funcion createRoot es una funcion que recibe una refenrecia a un elemento HTML que se usara para instanciar la raiz
createRoot(document.getElementById('root'))
    .render(<StrictMode>
        <App />
    </StrictMode>,)

//Podemos usar este root para representar algo dentro de nuestra pagina llamando al metodo de representacion en el objeto raiz.
//root.render(helloWorldElement)