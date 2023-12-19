import { useEffect, useRef, useState } from "react"

//Podemos crear una funcion que cree el estado incial y asi podremos llamarla tantas veces como queramos
function createData(){
    return {
        username: '',
        password: '',
        session: false
    }
}


export function MyForm(){
    //Inicializamos la varible destado con una cadena vacia y tomaremos la tupla que esta devolviendo useState y guardaremos tanto el nombre de usuario como la funcion setUsername dentro
    // de algunas variables.
    const [data,setData] = useState(createData())
   
    const mountedRef = useRef(false)
    /*De alguna manera estoy vinculando el valor contenido en la entrada con el valor del nombre de usuario, pero, por supuesto, este es un enlace de datos unidireccional porque la entrada
    no puede cambiar directamente  el contenido de la variable del nombre de usuario, solo puede leer su valor, y mostrarselo al usuario.
    Para cambiar el valor de la variable de nombre de usuario, necesitamos usar la funcion setUsername, que es la funcion devuelta por el enlace useState que nos permite actualizar el valor
    de una variable de estado y como sabemos cuando cambiar el valor contenido dentro del variable de nombre de usuario?
    Ahora, el evento onChange  se compaorta de manera diferente a como lo hace en HTML porque en HTML el evento onChange se activa cuando el valor de una entrada cambia y la entrada
    pierde su foco.
    En React se activa tan pronto como cambia el valor dentro de una entrada, tan pronto como un usuario escribe algo dentro de la entrada sin necesidad de que la entrada pierda su 
    enfoque. onChange se comporta exactamente como el evento onInput en HTML.
    El evento onInput y onChange se comportan exactamente igual y probablemente veras que el evento onChange se usa con mas frecuencia, asi que por ahora te sugiero que uses el evento onChange
    aunque puedes usar el evento onInput si lo prefieres.
    */
    /*Puede dejarlo vacio, por lo que no estara definido, pero le resultara util establecerlo en nulo, especialemnte mas adelante cuando intente trabajar con TypeScript 
    1-Simplemente use nulo como el valor inicial de la referencia
    2-Ahora necesitamos adjuntar ala referencia al elemento del que queremos obtener una referencia directa
    Ahora sabemos que podemos usar el gancho useEffect para desencadenar un efecto en ciertos momentos especificos*/
    const inputRef = useRef(null)

    /*Este gancho useEffect disparara un efecto secundario solo cuando el compoente se monte por primera vez. Y este efecto secundario simplemenete accedera a la referencia accediendo al 
    valor actual dentro de la referencia. Podemos usar un operador de encadenamiento opcional aqui, que solo ejecuta el codigo despues del signo de interrrogacion si la propiedad actual
    es diferente de nula o indefinida. Simplemente podemos llamar al metodo de enfoque en la referencia al nodo DOM, porque el metodo de enfoque es algo que tiene un puntero a un elemento de
    entrada*/

    useEffect(() => {
        if(!mountedRef.current){
            mountedRef.current = true;
            console.log('Mounting for the first time')
        }else{
            console.log('Mosunting again for debug puroposes')
        }

        inputRef.current?.focus()
    }, [])

    /*Recuerda que cuando llamas a la funcion para actualizar una variable de estado siempre necesitas decidir si le vas a pasar un valor inmediato o una devolucion de llamada
    y la forma en que decides esto es: Para preguntarse, ¿El siguiente valor de la varibale de estado depende del valor actual de la varibale de estado?*/
    function handleInputChange(event){
        //Puedo acceder a un componente como el nombre
        /* Si la entrada es una casilla de verificacion, su tipo sera una casilla de verificacion, de lo contrario no es asi si el tipo de entrada es una casilla de verificacion, vamos a usar el
        atributo marcado, si el tipo de entrada no es una casilla de verificacion usaremos el atributo de valor para que tambien podamos extraer el atributo de tipo. */
        const name = event.target.name 
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
       
        /*Devolucion de llamada que va a recibir el valor actual del objeto de datos. Lo estoy llamando D dentro del alcance del codigo de la devolucion de llamada y quiero actualizar el
        campo que tiene el mismo nombre que el contenido en la variable de nombre. Debes recordar que cuandoe estas trabajando dentro de la devolucion de llamada, pasas a un conjunto de 
        funciones de estado, por ejemplo a los datos establecidos, en este caso siempre debes tratar la entrada como inmutable, es decir, de solo lectura, para que no puedas cambiar el
        contenido de D. objeto que es el contenido actual del objeto de datos, entonces, ¿Que puedes hacer bien? Puedes clonar el contenido de objeto de datos dentro de otro objeto para que
        pueda usarlo*/
        //...d utilizamos el operador de extension. Creo un nuevo objeto y utilizao el operador de extension para copiar todo el contenido del objeto de datos original dentro de un nuevo
        //objeto
        setData((data) => {
            return { 
                ...data,
                [name] : type === 'checkbox' ? checked : value,
            }
            
        })
    }
    

    function handleResetForm(){
        setData(createData())
    }

    function handleLoginFormSubmit(event){
        //El metodo predeterminado de prevencion es un metodo que esta presente en cada objeto de evento que evita elcomportamiento predeteminado para ese evento especifico
        event.preventDefault()
        console.log('Login button pressed', data)
    }

    /*console.log(username) esto nos hara ver en la consola lo que estamos escribiendo en el recuadro, tenemos acceso completo y total a los datos en cualquier punto dentro de nuestros
    componentes, por lo que incluso si agregamos algunos efectos, incluso si agregamos alguna otra funcion, siempre podemos acceder al valor de nuestro formulario sin acceder a las 
    entradas que se utilizan para recopilar esta informacion por el usuario, sino accediendo a variables de estado que contienen los datos reales del formulario y en cualquier momento 
    podemos cambiar el valor contenido dentro de estas variables y las entradas se actualizaran en consecuencia*/
    //Tan pronto como escribirmos algo en la entrada, el evento de cambio se activa para que se llame al controlador de eventos de cambio de entrada de nombre de usuario
    /*stringify: toma un objeto y lo convierte en una cadena JSON // el primer parametro es el objeto que queremos stringify, el segundo parametro es una funcion de Transformer
    que puede establecer en nulo y el tercer parametro simplemente nos dice como queremos sangrar los datos para que se nos muestren de una manera mas bonita.
    parse: toma una cadea JSON y la convierte en un objeto JavaScript 
    Cuando utilizamos casillas de verificacion siempre debemos recordar que una casilla de verificacion se comporta un poco diferente a otra entradas porque necesitaria marcar no el
    atributo de valor sino el  atributo marcado y esto solo sucede cuando el tipo es casilla de verificacion, no cuando el tipo es otra cosa. Para todos los demas tipos que va, use
    el valor, pero para las casillas de verificacion usara check it prop
    No se suele utilizar un  div para juntar todo lo del formulario ya que tenemos un elemento dedicado a eso que seria el <form></form> y dentro de este pondremos todos los inputs y 
    botones que iran en nuestro formulario
    */

    return (
        <form onSubmit={handleLoginFormSubmit}>
            <h1>My Form</h1>
            <input ref={inputRef} name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <button type="submit" disabled={!data.username || !data.password} >Login</button>
            <button type="button" onClick={handleResetForm}>Reset</button>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </form>
    )
}