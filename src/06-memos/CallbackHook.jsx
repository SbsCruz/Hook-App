import { useCallback } from "react"
import { useCounter } from "../hooks"
import { ShowIncrement } from "./ShowIncrement"



export const CallbackHook = () => {

    const { counter, increment } = useCounter(30)
    

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment}/>

        </>
    )
}
