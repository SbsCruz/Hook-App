import { memo } from "react"

export const Small = memo(({ value }) => {  // para memorizar un componente y que no se renderice   
                                            // a menos de que cambien sus props
                                            // para este caso solo se renderiza si cambia "value"

    console.log("renderizado")
    return (
        <>
            <small>
                {value}
            </small>
        </>
    )
})
