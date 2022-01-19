/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:15:31
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:15:31
 */
import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick=()=>{}, completed=true, text="" }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo