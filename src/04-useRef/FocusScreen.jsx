import { useRef } from "react"


export const FocusScreen = () => {

    const inputName = useRef();

    const click = () => {
        inputName.current.select()

    }
    return (
        <>
            <h1>
                Focus Screen
            </h1> <hr />
            <input
                ref={inputName}
                type="text"
                className="form-control"
                placeholder="name" />

            <button
                className="btn mt-2"
                onClick={click}>
                Foco
            </button>

        </>
    )
}
