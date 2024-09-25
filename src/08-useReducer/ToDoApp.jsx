
import { ToDoList } from "./ToDoList"
import { ToDoAdd } from "./ToDoAdd"
import { useTodos } from "../hooks"

export const ToDoApp = () => {

  // useTodo - custom Hook

  const { toDoCounter, pendingToDoCounter, handleNewToDo, handleRemoveToDo, handleToggleToDo, toDos } = useTodos([])

  return (
    <>
      <h1>ToDoApp {toDoCounter} <small>pendientes: {pendingToDoCounter}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <h4>ToDo's</h4>
          <hr />

          <ToDoList
            toDos={toDos}
            handleRemoveToDo={handleRemoveToDo}
            onToggleToDo={handleToggleToDo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <ToDoAdd handleNewToDo={handleNewToDo} />
        </div>
      </div>
    </>
  )
}
