const initialState = {
  todos: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.todo]
      }
    case 'EDIT_TODO':
      return {
        todos: state.todos.map(item => (
          item.id === action.todo.id ? { ...item, task: action.todo.task, description: action.todo.description } : item
        ))
      }
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(item => (
          item.id !== action.todoId.id
        ))
      }
    default:
      return {
        ...state
      }
  }
};

export default reducer;