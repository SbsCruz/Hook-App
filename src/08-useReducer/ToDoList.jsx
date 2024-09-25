import { ToDoItem } from "./ToDoItem"

export const ToDoList = ({ toDos, handleRemoveToDo, onToggleToDo }) => {
  return (
    <ul className="list-group" >
      {
        toDos.map(todo => (
          /* ToDoItem */
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDeleteToDo={handleRemoveToDo}
            onToggleToDo={onToggleToDo}
          />

        ))
      }
    </ul>
  )
}
