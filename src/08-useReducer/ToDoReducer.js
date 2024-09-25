
export const ToDoReducer = (initialState, action) => {
  switch (action.type) {
    case "toDo-Add":
      return [...initialState, action.payload]

    case "toDo-Remove":
      return initialState.filter((todo) => todo.id !== action.payload)

    case "toDo-Toggle":
      return initialState.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })

    default:
      return initialState;
  }
}