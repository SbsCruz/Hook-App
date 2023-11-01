import { useState } from "react"

export const useCounter = (initValue=10) => {

    const [counter, setCounter] = useState(initValue);

    // funciones para botones
    const increment = () => setCounter(counter+1)
    const decrement = () => {if(counter===0) return; setCounter(counter-1)} 
    const reset = () => setCounter(initValue)




    return{
        counter,
        increment,
        decrement,
        reset
    }
}