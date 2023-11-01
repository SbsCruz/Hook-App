import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <h1>Counter with HOOK: {counter}</h1>

        <button onClick={increment} >+1</button>
        <button onClick={reset} >Reset</button>
        <button onClick={decrement} >-1</button>
    </>
  )
}
