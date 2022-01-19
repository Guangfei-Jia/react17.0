/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:19:01
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:19:02
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App