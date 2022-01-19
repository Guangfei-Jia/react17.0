/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-25 10:18:58
 * @LastEditors: fei
 * @LastEditTime: 2021-12-01 15:35:56
 */
interface configs {
  production: object,
  development: object,
  test: object
}
// 一些全局的config配置
const modeUrlObj: configs = {
  // 生产环境
  'production': {
    baseURL: 'http://114.132.235.185/pro',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://localhost:3000/',
    // baseURL: 'http://192.168.1.101:8080/dev',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://192.168.1.136:8080/test/',
    authBaseURL: ''
  }
};
export default modeUrlObj[process.env.NODE_ENV];
