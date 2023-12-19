export function MyUncontrolledForm(){
    function handleFormSubmit(event){
        event.preventDefault()
    
    
        //accederemos a los elementos con el event.target que señala los elementos y con namedItem() accedemos a un elemento con un nombre especifico, pero para acceder a los valores de 
        //los elementos contenidos dentro de mi propio formulario usamos la Api DOM. Puedo guardar el valor creando una variable y asignandosela
        // otra manera pero no es estandar entonces no sabes si funcionara en todos los navegadores:
        //const username = event.target.elements.username.value
        /*
        const username = event.target.elements.namedItem('username').value
        const password = event.target.elements.namedItem('password').value
        const session = event.targe.elements.namedItem('session').checked
        */
        /*Vamos a tener un objeto llamado datos de formulario del cual podemos extraer los valores del formulario de una manera mas directa. */
        const formData = new FormData(event.target)

        const data = {
            username: formData.get('username'), 
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false,
        }
        console.log(data)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1>My Uncontrolled Form </h1>
            <input name="username" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button>Login</button>
            <button type="reset" >Reset</button>
        </form>
    )
}