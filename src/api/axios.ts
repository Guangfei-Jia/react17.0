/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-07-28 13:59:05
 * @LastEditors: fei
 * @LastEditTime: 2021-12-03 10:17:29
 */
import axios from '@/utils/request';

type methods = 'post' | 'get' | 'put' | 'delete';

const httpAction = (method: methods, url: string, params: object) => {
    if (method === 'delete' || method === 'get') {
        return axios({
            url,
            method,
            params: params
        })
    }
    return axios({
        url,
        method,
        data: params,
    })
}
const getAction = (url: string, params: object) => {
    return httpAction('get', url, params);
}
const postAction = (url: string, params: object) => {
    return httpAction('post', url, params);
}
const putAction = (url: string, params: object) => {
    return httpAction('put', url, params);
}
const deleteAction = (url: string, params: object) => {
    return httpAction('delete', url, params);
}

export {
    getAction,
    postAction,
    putAction,
    deleteAction
}
