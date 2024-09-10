import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    //funcion para cambiar input
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () =>
    {
        setFormState(initialForm)
    }

    return { // aquí mandamos lo que se puede desestructurar
        ...formState, // con esto podemos desestrucuturar lo que hayamos mandado
        formState,
        onInputChange,
        onResetForm,
    }
}
