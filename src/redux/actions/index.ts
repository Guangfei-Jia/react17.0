/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:14:06
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:14:07
 */
let nextTodoId = 0
export const addTodo = (text: any) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter: any) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id: number) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const addUser = (username: string) => {
    return {
        type: 'ADD_USER',
        username
    }
}