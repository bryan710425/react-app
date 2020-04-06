import React, { useState } from 'react'
// import React, { Component } from 'react'
import PropTypes from 'prop-types'
import chevronLeftBlue from '../assets/images/chevron-left-blue.svg'
import '../assets/style/components/created.scss'
import { withRouter, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleTodo, addTodo } from '../actions'

const Created = ({ todo, history, onTodoClick, onAddToDo }) => {
  const [title, setTitle] = useState(todo.title || '')
  const [content, setContent] = useState(todo.content || '')
  const [titleError, SeTitleError] = useState(false)
  const [contentError, SetContentError] = useState(false)
  const { id } = useParams()

  const titleErrorText = titleError && title === '' ? <div className='error-message'>Please fill out title</div> : ''
  const contentErrorText = contentError && content === '' ? <div className='error-message'>Please fill out content</div> : ''
  const verifyValue = ({ title, content }) => {
    title === '' ? SeTitleError(true) : SeTitleError(false)
    content === '' ? SetContentError(true) : SetContentError(false)
    return (title !== '' && content !== '')
  }
  return (
    <section>
      <div className='create-page'>
        <button
          className='back-button'
          onClick={() => history.goBack()}
        >
          <img
            className='chevron-back'
            src={chevronLeftBlue}
            alt='Arrow pointing left. Click to go back'
          />
          <span>&nbsp;</span>
          <b> Back </b>
        </button>
        <div className='create-page-containers'>
          <div className='create-page-title'>
            <div className='create-page-text'>
              Title *
            </div>
            <div className='input-container'>
              <input
                value={title}
                type='text'
                onChange={(event) => { setTitle(event.target.value) }}
              />
            </div>
            {titleErrorText}
          </div>
          <div className='create-page-title'>
            <div className='create-page-text'>
              Content *
            </div>
            <div className='input-container'>
              <input
                value={content}
                type='text'
                onChange={(event) => { setContent(event.target.value) }}
              />
            </div>
            {contentErrorText}
          </div>
          <div className='create-page-containers-button'>
            <button
              className='gray'
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
            {/* {button} */}
            <button
              className='secondary-1'
              onClick={() => {
                if (!verifyValue({ title, content })) {
                  return false
                }
                if (id) {
                  onTodoClick(id, title, content, history)
                } else {
                  onAddToDo(title, content, history)
                }
              }}
            >
              submitButton
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

Created.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }),
  history: PropTypes.shape({
    goBack: PropTypes.func
  }),
  onTodoClick: PropTypes.func,
  onAddToDo: PropTypes.func
}

const getVisibleTodos = (todos, ownProps) => {
  return todos.filter(t => t.id === ownProps.match.params.id)[0] || {}
}

const mapStateToProps = (state, ownProps) => ({
  todo: getVisibleTodos(state.todos, ownProps)
})
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: async (id, title, content, history) => {
      await dispatch(toggleTodo(id, title, content))
      history.goBack()
    },
    onAddToDo: async (title, content, history) => {
      await dispatch(addTodo(title, content))
      history.goBack()
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Created))
