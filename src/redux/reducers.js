const todoReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
    case 'EDIT_TODO':
      return {
        ...state,
        data: action.todo,
        type: action.type
      }
    case 'DELETE_TODO':
      return {
        ...state,
        data: action.todoId,
        type: action.type
      }
    default:
      return {
        ...state,
      }
  }
};

export default todoReducer;