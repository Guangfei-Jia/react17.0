/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-06-29 15:42:45
 * @LastEditors: fei
 * @LastEditTime: 2021-12-03 09:22:36
 */
/* eslint-disable */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '@/config/index' // 路径配置
import { getStore } from '@/utils/storage';

// const HOME_PAGE = configs.HOME_PAGE;
const service = axios.create({
  baseURL: (<any>config).baseURL,
  timeout: 10000  //请求超时时间
})

//配置发送请求前的拦截器 可以设置token信息 
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //loading+1
    // store.dispatch('SET_LOADING', true);  //开启loading
    //正在请求更新token时，其他接口等待
    config.headers = { "Accept": "application/json", "Content-Type": "application/json;charset=utf-8" }
    let tokenString = getStore('tokens');

    if (tokenString) {
      const tokenArray = tokenString.substring(1, tokenString.length - 1).replace(/\"/g, "").split(",");
      let tokens: any = {}
      for (let item of tokenArray) {
        let items = item.split(":");
        tokens[items[0]] = items[1];
      }
      //设置请求头token
      let accessToken = tokens.accessToken,
        tokenType = tokens.tokenType;
      config.headers.Authorization = `${tokenType} ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 配置响应拦截器 
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // loading - 1
    // 这里处理一些response 正常放回时的逻辑
    switch (res.code) {
      //自由约定不同状态码下前端的处理逻辑
      // case 200:
      //     response.msg !== '' && notice(response.msg, 'message', 'success');
      //     return Promise.resolve(response);
      // case 401:
      //     $router.replace('/logins/login');
      //     // $router.replace('/login?redirect=' + $router.currentRoute.fullPath);
      //     store.dispatch('SET_LOGOUT');
      //     return Promise.resolve(response);
      case 4010:
        // $router.replace('/login?redirect=' + $router.currentRoute.fullPath);   //登录后跳转到上次退出的页面
        // history.push({ pathname: '/logins/login' });
        window.location.href = '/login'
        return Promise.resolve(response);
    }
    return Promise.resolve(res) // 这里直接返回data, 即接口返回的所有数据
  },
  error => {
    console.log(error)
    //loading-1
    if (!error.response) {
      console.log("请求服务超时！")
      return Promise.reject(error);
    }
    const status = Number(error.response.status);
    switch (status) {
      case 500:
        console.log("服务器连接失败，请稍后再试")
        return Promise.reject(error);
      default:
        console.log("封装弹窗")
        return Promise.reject(error);
    }

    //   // 判断是否登录失效，按照实际项目的接口返回状态来判断
    //   if (error.toString().includes('776')) {
    //       window.location.href = window.location.origin + '/#/login'
    //   }
  }
)

export default service
