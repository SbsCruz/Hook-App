import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingState, PokemonCard } from '../03-examples'



export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr />
            <pre> Pokemon Info: </pre>
            {
                isLoading
                    ? <LoadingState />
                    : (
                        <PokemonCard
                            id={counter}
                            name={data?.name}
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny,
                            ]}
                        />
                    )

            }
            <button onClick={() => decrement()} className='btn btn-primary mt-2'>Anterior</button>
            <button onClick={() => increment()} className='btn btn-primary mt-2'>Siguiente</button>
        </>
    )
}
