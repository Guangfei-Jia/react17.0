/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:14:50
 * @LastEditors: fei
 * @LastEditTime: 2021-12-02 15:49:13
 */
import { combineReducers, createStore } from 'redux'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
// import users from './reducers/users'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    // users
})

// 注册
const store = createStore(todoApp)
// 导出
export default store;