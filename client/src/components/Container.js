import React from 'react'
import PropTypes from 'prop-types'
import editImg from '../assets/images/edit.svg'
import deleteImg from '../assets/images/delete.svg'
import '../assets/style/components/container.scss'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

const Container = ({ id, onEdit, onDelete, title, content, creatAt }) => {
  return (
    <div className='container'>
      <div className='container-title'>
        {title}
      </div>
      <div className='container-content'>
        {/* <span>Content:</span> */}
        <FormattedMessage id='content' />
        <div>{content}</div>
      </div>
      <div className='container-created'>
        CreateAt: {creatAt}
      </div>
      <div className='mask'>
        <img
          src={editImg}
          alt='edit button'
          onClick={() => onEdit(id)}
        />
        <img
          src={deleteImg}
          alt='delete button'
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  )
}

Container.propTypes = {
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  creatAt: PropTypes.string
}

export default withRouter(Container)
