
import { useForm } from "../hooks/useForm"

export const ToDoAdd = ({ handleNewToDo }) => {

  const { onInputChange, onResetForm, description } = useForm({
    description: '',
  })

  const onFormSubmit = (event) => {
    event.preventDefault()

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    handleNewToDo(newTodo);
    onResetForm();

  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        // ref={toDoRef}
        className="form-control"
        type="text"
        placeholder="¿Qué tienes que hacer?"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button
        className="btn btn-primary mt-2"
        type="submit"
      >
        Agregar
      </button>
    </form>
  )
}
