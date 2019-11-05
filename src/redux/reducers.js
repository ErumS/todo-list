const addReducer = (state = {
  data: {},
  type: ''
}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        data: action.todo,
        type: action.type
      }
    default:
      return {
      }
  }
};

const editReducer = (state = {
  data: {},
  type: ''
}, action) => {
  switch(action.type) {
    case 'EDIT_TODO':
      return {
        data: action.todo,
        type: action.type
      }
    default:
      return {
      }
  }
};

const deleteReducer = (state = {
  data: {},
  type: ''
}, action) => {
  switch(action.type) {
    case 'DELETE_TODO':
      return {
        data: action.todoId,
        type: action.type
      }
    default:
      return {
      }
  }
};

export {
  addReducer,
  editReducer,
  deleteReducer
};