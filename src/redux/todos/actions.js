export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const editTodo = (todo) => ({
  type: 'EDIT_TODO',
  todo
});

export const deleteTodo = (todoId) => ({
  type: 'DELETE_TODO',
  todoId
});