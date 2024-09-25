
// se necesita de un estado inicial, este se enviará y se realizará la "action"
// necesaria

// se retorna el state, por lo general tiene la misma forma del initial state

// agregar algo a los estados con push no renderiza el componente, no se debe hacer
// se está mutando y eso es mala práctica

// lista inicial
const initialState = [{
  id: 1,
  toDo: "manifestar",
  done: false,
}];

// nuevo elemento en la lista
const newToDo = {
  id: 2,
  toDo: "manifestar más fuerte",
  done: false,
}

// action del toDo
const addToDoAction = {
  type: "[ToDo] add ToDo",  // para especificar la función del action
  payload: newToDo,         // la carga de la acción, no es obligatoria ni necesaria
}

// función reducer
const toDoReducer = (state = initialState, action) => {

  if (action.type === '[ToDo] add ToDo') {
    return [ ...state, action.payload ]
  }

  return state;
}

let toDos = toDoReducer(initialState, addToDoAction);

console.log(toDos)