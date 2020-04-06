const todosData = [
  {
    id: '1',
    title: '掃地',
    content: '打掃',
    creatAt: '2020/03/17'
  },
  {
    id: '2',
    title: '掃地2',
    content: '打掃2',
    creatAt: '2020/03/17'
  }
]

const todos = (state = todosData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: (state.length + 1).toString(),
          title: action.title,
          content: action.content,
          creatAt: '2020/04/07'
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.title = action.title
          todo.content = action.content
        }
        return todo
      })
    case 'GET_TODO':
      return state.find(id => id === state.id)
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default todos
