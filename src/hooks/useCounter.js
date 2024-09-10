import { useCallback, useState } from "react"

export const useCounter = (initValue = 10) => {

    //para reutiliar código
    const [counter, setCounter] = useState(initValue);

    // adición de useCallback para memoria
    const increment = useCallback(
      () => {
        setCounter(value => value+1)
      },
      [setCounter],
    )
    

    // funciones para botones
    
    // const increment = () => 
    //     setCounter(counter + 1)

    const decrement = () => {
        if (counter === 1) return;
        
        setCounter(counter - 1)
    }

    const reset = () => setCounter(initValue)

    return { // lo que usaremos para desetructurar
        counter,
        increment,
        decrement,
        reset
    }
}