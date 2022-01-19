/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-23 14:14:25
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:14:27
 */
const visibilityFilter = (state = 'SHOW_ALL', action: any) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter