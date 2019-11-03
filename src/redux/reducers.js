const addATodo = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: action.todo,
      }
    default:
      return {
        ...state,
      }
  }
};

export default addATodo;