/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:19:38
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:19:38
 */
import { connect } from 'react-redux'
import { toggleTodo } from '@/redux/actions'
import TodoList from '@/components/TodoList'

const getVisibleTodos = (todos:any, filter:any) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((t:any) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t:any) => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state:any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onTodoClick: (id:number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList as any)

export default VisibleTodoList