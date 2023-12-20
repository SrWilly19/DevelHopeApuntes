import { HelloWorld } from "./HelloWorld";

export function Welcome({name, age}){
    //estilo en linea
    const WelcomeStyle = {
        backgroundColor: name ? 'greenyellow' : 'darkgrey',
        color: name ? '#333' : '#FFF',
    }
    /*Podriamos crear una variable de nombre "name" y podriamos establecer su valor en el valor del atributo props.name
    const name = props.name*/
   
    /*Tambien podriamos decidir usar la funcuionalidad de desestructuracion de JavaScript para exctraer el valor del atributo de nombre dentro de la variable de nombre.
    Podemos hacerlo eliminando la notacion de puntos(.) que accede al atributo de nombre y encerrando la variable de nombre entre un para de corchetes, lo cual es una 
    sintaxis extraña, pero significa que estamos accediendo a un objeto que esta en el lado derecho de la ecuacion y JavaScript sabe que accesorios es un objeto porque
    estamos usando corchetes aqui. Y estamos extrayendo el valor del atributo de nombre dentro de la variable con el mismo nombres*/
    
    //const { name } = props

    /*Estamos explotando el objeto props y para cada uno de los atributos que mencionamos dentro de este par de corchetes estamos creando una nueva varibale y esta
    variable contendra el valor del atributo con el mismo nombre dentro del objeto props. Esto nos permite simplificar la forma en que escribimos nuestra expresion JSX
    porque en lugar de tener que acceder a props.name o props.algo mas cada vez que queramos acceder al valor de una propiedad simplemente podemos usar el nombre de
    la variable, ya que hemos desestructurado el objeto props de antemano */
    /*Modificaremos la expresion para poder pasarle tambien un componente de numeros como es la edad */
    return <div style={WelcomeStyle}> 
        {name ? <h2>Welcome, {name}!</h2> : <HelloWorld />}
        {Boolean(age) && <p>You are {age} years old.</p>}
        {age === 0 && <p>You are very young!</p>}
    </div>
    /*Si ponemos los corchetes fuera "{}" rodeando nuestra expresion se denomina interpolar.  Estamos interpolando esta expresion para poder representarla condicionalmente
    Si no tiene ninguna edad definida en App no saldra esa frase, sin embargo si tiene 0 años saldra un 0 en la pantalla ya que es valor falso pero tambien es un valor 
    que react puede renderizar, ya que si creamos alguna app pueden ser muy utiles los 0, para solucionar esto debermos convertir el valor explicitamente a un valor booleano 
    para poder tomar el valor de edad. La primera manera seria envolver nuestro age con el constructor Boolean(), convierte el valor a un booleano, la segunda manera seria 
    utilizar la doble negacion para negar el valor dos veces, si niego dos veces un valor como este, la expresion se resuelve asi, primero JavaScript niega el valor cero, ahora el 
    valor 0 negado es verdadero porque un valor negado falsamente se vuelve verdadero y define una puerta verdadera, que es la segunda cosa que hace JavaScript. Obtengo falso asi 
    que nuevamente estoy negado el valor de la variable dos veces para que la primera vez se convierta en booleano y la segunda vez vuelva a su valor booleano original. Por
    lo que 0 se vuelve verdadero y luego se vuelve falso porque el cero negado es falso es verdadero y verdadero negado es falso es mas facil de escribir pero mas DIFICIL DE LEER (!!age) */
    /*Accedemos al objeto props y con el .name accedemos al atributo de nombre del objeto props
    return <h2>Welcome, {props.name}!</h2>*/
    //return <h2>Welcome, {name}!</h2>

    /*Lo bueno de JavaScript es que puede hacer esto no solo dentro del bloque de codigo que represneta el componente o la funcion en si, sino que puede hacerlo
    directamente dentro de la declaracion de la funcion. Podemos poner en el parametro el {name} que es lo que queremos y asi evitamos hacer la linea de codigo 10.
    Puedo expandir el objeto props desde dentro de la declaracion de la funcion y puedo extraer el atributo de nombre del objeto props dentro de una varibale que 
    tiene lemismo nombre del atributo que, en este caso el nombre*/
}

/*El operador ternario: esta seria la manera de representarlo
expr ? doThis(Si la expr se resulve de manera verdadera se hara esto) : doThat(Si la expr se resuelve de manera falsa se hara esto) */