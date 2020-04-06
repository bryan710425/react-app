import React from 'react'
import './App.scss'
import './index.scss'
import ToDoList from './components/ToDoList'
import { connect } from 'react-redux'
import { toggleTodo } from './actions/index.js'
import { FormattedMessage } from 'react-intl'

function App ({ todos }) {
  return (
    <div className='App'>
      <ToDoList
        todos={todos}
      />
      <FormattedMessage id='app.learn' values={{ name: 'React' }} />
    </div>
  )
}

const getVisibleTodos = (todos, filter) => {
  return todos
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
