import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,

    });

    const {counter1, counter2, counter3} = counter;

return (
<>
    <h1>COUNTER: {counter1}</h1>
    <h1>COUNTER: {counter2}</h1>
    <h1>COUNTER: {counter3}</h1>
    <button className="btn" onClick={()=>setCounter({
        ...counter, // spread para que los otros counters no se vean afectados
        counter1: counter1+1,


    })}>+1</button>
    {console.log(counter2)}
</>
)
}
