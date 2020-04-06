// let nextTodoId = 0
// export const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = filter => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

export const toggleTodo = (id, title, content) => ({
  type: 'TOGGLE_TODO',
  id,
  title,
  content
})

export const addTodo = (title, content) => ({
  type: 'ADD_TODO',
  title,
  content
})

export const getTodo = id => ({
  type: 'GET_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE',
  id
})

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
