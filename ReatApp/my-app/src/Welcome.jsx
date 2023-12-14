export function Welcome({name, age}){
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
    return <div>
        <h2>Welcome, {name}!</h2>
        <p>You are {age + 1} years old.</p>
    </div>
    /*Accedemos al objeto props y con el .name accedemos al atributo de nombre del objeto props
    return <h2>Welcome, {props.name}!</h2>*/
    //return <h2>Welcome, {name}!</h2>

    /*Lo bueno de JavaScript es que puede hacer esto no solo dentro del bloque de codigo que represneta el componente o la funcion en si, sino que puede hacerlo
    directamente dentro de la declaracion de la funcion. Podemos poner en el parametro el {name} que es lo que queremos y asi evitamos hacer la linea de codigo 10.
    Puedo expandir el objeto props desde dentro de la declaracion de la funcion y puedo extraer el atributo de nombre del objeto props dentro de una varibale que 
    tiene lemismo nombre del atributo que, en este caso el nombre*/
}