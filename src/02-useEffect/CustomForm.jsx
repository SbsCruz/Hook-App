import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const CustomForm = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: "",
        email: "",
        password: "",
    })

    const {username, email, password} = formState;

    useEffect(() => {
    }, [])

    return (
        <>
            <h1>Formulario con Hook</h1>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="sebas@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn mt-2"> RESET</button>


        </>
    )
}
