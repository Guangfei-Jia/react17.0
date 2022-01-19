/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-10 11:20:13
 * @LastEditors: fei
 * @LastEditTime: 2021-11-23 14:25:32
 */
import React, { FC } from 'react';
import './App.css';
import AppRouter from './router/AppRouter'

const App: FC = () => {
  return (<div className="App">
    <AppRouter />
  </div>);
};

export default App;
