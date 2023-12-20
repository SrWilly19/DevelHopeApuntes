import { useState } from "react"
import classes from "./MyList.module.scss" 
 /*Esto lo hacemos cuando son objetos tiene su id y el nombre que quermos que salga en nuestra lista. Y como no podemos representar un objeto, necesitamos extraer de este objeto las
    propiedades que queremos usar dentro de nuestra funcion de devolucion de llamada.
    Vamos a usar la propiedad de ID para dar un valor a la propiedad clave del elemento de la lista y la propiedad de nombre para mostrar algo en la pantalla y no necesitamos el indice
    Aqui representamos una matriz de objetos, que es lo que haremos con mas frecuencia
    Entonces, cuando tiene una matriz de objetos, simplemente puede iterar sobre la matriz de objetos utilizando el metodo de mapa y sacar del objeto las propiedades que desea 
    representar dentro de su componente
    
    Debemos recordar que la clave nunca debe colocarse dentro de componentes personalizados, sino que siempre debe colocarse dentro del primer componente que renderiza, que regresa del 
    metodo map*/

function MyListItem({ item }){
    const [counter, setCounter] = useState(0)

    function handleIncremenetCounter(){
        setCounter(c => c + 1)
    }

    return(
        <li>
            <h4>{item.name}</h4>
            <p>{item.age} years old</p>
            <button className={classes.button} onClick={handleIncremenetCounter}>{counter}</button>
        </li>
    )
}

export function MyList({ items }){
    //Esto seria con una lista que tenemos ya en nuestro elemento, pero lo mas seguro es que lo recibamos desde el exterior
    //const names = ['Kate', 'Jane', 'John', 'Billy']
    //Si tenemos otro nombre igual que alguno de nuestra lista utilizamos el segundo parametro como explica abajo y como en el ejemplo ya que no puede tener repetidos, se guia por el indice
    //El segundo parametro de la devolucion de llamada que pasamos al metodo del mapa es el indice del elemento sobre el que estamos iterando
    /*  Esto lo hacemos con elementos que son cadenas.
     {items.map((name, index) => (
            <li key={index}>{name}</li>
            ))} */

   
    
    /*En este caso, MyListenItem recibira tanto la propiedad del elemento como la propiedad clave, como puede ver la propiedad lcave no esta dentro de la lista de propiedades que utiliza
    el componente MyListItem, esto se debe a que el accesorio clave es un aaccesorio especial que React maneja solo. Las claves son algo que React usa para optimizar la representacion de
    los componentes. Y, por lo tanto, siempre puede colocar el accesorio clave siempre que este renderizando listas u otros casos extremos en los que desee forzar a React a volver a 
    renderizar componentes. Nunca puede usar el apoyo clave como apoyo para sus componentes porque clave es una palabra clave especial*/
    return (
        <ul>
            {items.map((item) => (
                <MyListItem  key={item.id} item={item} />
            ))}
        </ul>
    )
}