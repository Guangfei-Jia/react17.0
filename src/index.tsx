/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-10 11:20:13
 * @LastEditors: fei
 * @LastEditTime: 2021-12-02 16:47:26
 */
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
// import App1 from './components/App1';
import reportWebVitals from './reportWebVitals';
import store from "./redux";

render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App1 /> */}
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
