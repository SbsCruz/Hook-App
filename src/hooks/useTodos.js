import { useEffect, useReducer } from "react";
import { ToDoReducer } from "../08-useReducer/ToDoReducer";

export const useTodos = () => {

  const initialState = [];

  // con esta función inicializacmos el useReducer
  const init = () => {
    return JSON.parse(localStorage.getItem("toDos")) || []
  }

  // const [state, dispatch] = useReducer(state, initialState, initializerFunction)

  const [toDos, dispatch] = useReducer(ToDoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))

  }, [toDos]) // cuando los toDos cambian


  /* HANDLES */
  // Add
  const handleNewToDo = (toDo) => {
    const action = {
      type: "toDo-Add",
      payload: toDo
    }

    dispatch(action);
  }

  // Remove
  const handleRemoveToDo = (id) => {
    const action = {
      type: "toDo-Remove",
      payload: id
    }

    dispatch(action);
  }

  //Toggle
  const handleToggleToDo = (id) => {
    const action = {
      type: "toDo-Toggle",
      payload: id
    }

    dispatch(action)
  }


  // Counters
  const toDoCounter = toDos.length

  const pendingToDoCounter = toDos.filter((todo) => !todo.done).length


  // exportamos funciones y propiedades
  return {
    toDos,
    toDoCounter,
    pendingToDoCounter,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo
  }
}