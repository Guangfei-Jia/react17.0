/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-18 15:33:18
 * @LastEditors: fei
 * @LastEditTime: 2021-12-03 09:28:31
 */
import React from 'react';
import {postAction, getAction} from '../../api/axios';
import {publicUrl} from '../../api'
import {setStore} from '../../utils/storage'

import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";

const Login= () => {
  const history = useHistory();
  const onFinish = async (values: any) => {
        const result:any = await postAction(publicUrl.login,values);
        setStore('tokens', result.data.tokens);
        setStore('userInfo', result.data.userInfo);
        const menu:any = await getAction(publicUrl.userMenuList,{});
        setStore('menu', menu.data);
        history.push({pathname: '/system/menu'});
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('onFinishFailed:');
  };

  return (
    <div className='loginWrap'>
      <div className='loginForm'>
        <h2>管理系统</h2>
      <Form 
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </div>
     
    </div>
    
  );
};
export default Login;