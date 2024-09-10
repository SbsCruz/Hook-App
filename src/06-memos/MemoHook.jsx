import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (iteNumber) => {

    for (let i = 0; i < iteNumber; i++) {
        console.log("Cargando")

    }
    return `Número de iteraciones: ${iteNumber}`

}

export const MemoHook = () => {


    // useMemo(() => aquí va el valor a memorizar, [aquí la dependencia])
    // se procesará el valor solo si la dependcia cambia

    const { counter, increment } = useCounter(30)
    const [show, setShow] = useState(true)
    const memoValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small> {counter}</small> </h1>
            <hr />
            <h4>{memoValue}</h4>

            <button
                className="btn btn-primary mt-3"
                onClick={() => increment()}
            > +1
            </button>
            <button
                className="btn btn-primary mt-3"
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
