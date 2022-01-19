/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-12-03 11:06:31
 * @LastEditors: fei
 * @LastEditTime: 2021-12-06 11:36:59
 */
import { useState } from "react";
const ModalHook = () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
  
    //显示modal，执行后续操作
    const showModal = (fn?:()=>void) => {
      setVisible(true);
      if(typeof fn === "function") fn();
    };
    const handleOk = (fn?:()=>void) => {
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = (fn?:()=>void) => {
      setVisible(false);
      if(typeof fn === "function") fn();
    };
  
    return {visible, confirmLoading, showModal, handleCancel, handleOk};
  };

export default ModalHook;