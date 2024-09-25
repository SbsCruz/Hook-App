
export const ToDoItem = ({ todo, onDeleteToDo, onToggleToDo }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => onToggleToDo(todo.id)}
        className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''} `}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger mt-2"
        onClick={() => onDeleteToDo(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
