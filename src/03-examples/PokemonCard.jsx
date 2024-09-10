import { useLayoutEffect, useRef, useState } from "react"



export const PokemonCard = ({ id, name, sprites = [] }) => {


    const pokeRef = useRef()
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0,
    })

    useLayoutEffect(() => {
        const {height, width} = pokeRef.current.getBoundingClientRect()

        setBoxSize({
            width: width,
            height: height,
        })

    }, [id])

    return (
        <>
            <h2 className="h2" ref={pokeRef}>#{id} - {name}</h2>
            <div >
                {
                    sprites.map(sprite => (
                        <img
                            key={sprite}
                            src={sprite}
                            alt={`Sprites de Pokemon ${name}`}
                        />
                    ))
                }
            </div>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
