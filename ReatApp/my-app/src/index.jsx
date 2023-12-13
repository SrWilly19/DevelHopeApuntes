import { App } from "./App"
//Debemos importar desde la biblioteca React DOM es una funcion llamada createRoot
import { createRoot} from 'react-dom/client'

//Para poder usar el componente hello world definido en HelloWorld.jsx  debemos importarlo dentro de este archivo
//Metemos nuestro componente Hello World dentro de esta const helloWorldElement
//const helloWorldElement = <HelloWorld />

//El resultado de esta llamada de funcion es un puntero, una referencia al propio elemento root que esta en index.html
//Esto es en realidad una referencia a la etiqueta HTML que representa el navegador cuando representa esta pagina HTML 
//const rootElement = document.getElementById('root')

//La funcion createRoot es una funcion que recibe una refenrecia a un elemento HTML que se usara para instanciar la raiz
createRoot(document.getElementById('root'))
    .render(<App/>)

//Podemos usar este root para representar algo dentro de nuestra pagina llamando al metodo de representacion en el objeto raiz.
root.render(helloWorldElement)