import React from 'react'
import Container from './Container.js'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
// function component
const ToDoList = ({ todos, history, onDelete }) => {
  // 宣告一個新的 state 變數，我們稱作為「count」相當於 VUE data 私有的資料
  // const [count, setCount] = useState(0)
  const onEdit = (id) => {
    history.push(`/edit/${id}`)
  }
  // const onDelete = (index) => {
  //   onTodoClick(index)
  // }
  const onCreatedTodo = () => {
    history.push('/created')
  }

  return (
    <div>
      <div><button onClick={onCreatedTodo}>Created Todo</button></div>
      <div className='to-do-list'>
        {
          todos.map((item, index) =>
            <Container
              key={item.id}
              id={item.id}
              onEdit={(id) => onEdit(id)}
              onDelete={(id) => onDelete(id)}
              title={item.title}
              content={item.content}
              creatAt={item.creatAt}
            />
          )
        }
      </div>
    </div>
  )
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    creatAt: PropTypes.string.isRequired
  }).isRequired).isRequired,
  history: PropTypes.object.isRequired
}

// class component
// class ToDoList extends React.Component {
//   static propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//       creatAt: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     history: PropTypes.object.isRequired
//   }

//   onEdit (id) {
//     const { history } = this.props
//     history.push(`/created/${id}`)
//   }

//   onDelete () {
//     console.log(123)
//   }

//   render () {
//     return (
//       <div>
//         {
//           this.props.todos.map(item =>
//             <Container
//               key={item.id}
//               id={item.id}
//               onEdit={(id) => this.onEdit(id)}
//               onDelete={(id) => this.onDelete(id)}
//               title={item.title}
//               content={item.content}
//               creatAt={item.creatAt}
//             />
//           )
//         }
//       </div>
//     )
//   }
// }
const mapStateToProps = (state, ownProps) => ({
})
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: async (id) => {
      await dispatch(deleteTodo(id))
    }

  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToDoList))
