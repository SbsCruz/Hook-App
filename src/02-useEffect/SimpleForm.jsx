import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({ // estado para el fomrulario
        username: "sbscruz",
        email: "sebas.cruz@gmail.com"
    })

    const { username, email } = formState; // desestructuramos el estado


    //funcion para cambiar input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,   // usamos el spread porque es un objeto, si usaram
            // si usaramos distintos no usaramos spread

            [name]: value // el [name] es para apuntar a cosas de forma "global"
        })
    }


    // useEffect se dispara cuando el componente se redibuja debido a ciertos cambios
    // se recomienda un useEffect para cada cambio, no poner varios
    useEffect(() => {
        // console.log("se llamó al hook")
    }, [])   // siempre poner dependencias
    // si está vacío solo se renderiza una vez

    useEffect(() => {
        // console.log("username cambió")
    }, [username])

    useEffect(() => {
        // console.log("email cambió")
    }, [email])





    // ***************FORMATO****************//
    // useEffect(() => { // listener
    //   first

    //   return () => { // para limpiar o cancelar listeners
    //     second
    //   }
    // }, [third]) // dependencias

    return (
        <>
            <h1>Formulario Simple</h1>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            {
                (username === "sebasss") && <Message />

            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="sebas@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


        </>
    )
}
