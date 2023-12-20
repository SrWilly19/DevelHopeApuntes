import { useEffect, useState } from "react"
import classes from "./Counter.module.scss"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(0)

    
    useEffect(() => {
        console.log(`The value of the counter is ${counter}`)

        return () => {
            console.log(`The value of the counter was ${counter}`)
        }
    }, [counter])
    

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }
    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }
    function handleCounterReset(){
        setCounter(initialValue)
    }

    return(
        <div>
            <p className={counter % 2 === 0 ? classes.evenBg : classes.oddBg }>I have counted to {counter}</p>
            <button className={classes.button} onClick={handleCounterIncrement}>Increment</button>
            <button className={classes.button} onClick={handleCounterDecrement}>Decrement</button>
            <button className={classes.button} onClick={handleCounterReset}>Reset</button>
        </div>
    )
} 