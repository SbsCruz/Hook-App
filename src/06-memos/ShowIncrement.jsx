// para memorizar no podemos usar memo porque una función siempre va a estar en una locación
// de memoria distinta, no es lo mismo que un valor, el cual no cambia su locación de memoria

import React from "react"

export const ShowIncrement = React.memo(({ increment }) => {

    console.log("me rendericé")

    return (
        <>
            <button
                className=" btn btn-primary"
                onClick={() => increment()}
            >
                Incrementar
            </button>
        </>
    )
})
