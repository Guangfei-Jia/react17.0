/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:20:50
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:20:51
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '@/redux/actions'

let AddTodo:any = ({ dispatch=(param:any)=>{} }) => {
  let input:any;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo