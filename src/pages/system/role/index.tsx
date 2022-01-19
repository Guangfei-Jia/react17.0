/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-09-23 14:58:21
 * @LastEditors: fei
 * @LastEditTime: 2021-12-07 16:21:21
 */
import React, { FC } from 'react';
import { Table, Space, Modal, Button, Form, Input, Row, Col, Popconfirm, Spin } from 'antd';
import { roleUrl } from '@/api'
import useRequestH from '@/hooks/useRequestH'
import useModalH from '@/hooks/useModalH'
import { postAction,deleteAction } from '@/api/axios';
const Role:FC = () => {
    const {data, isLoading, isError, setUrl, setQuery} = useRequestH('post',roleUrl.list,{});
    const {visible, confirmLoading, showModal, handleCancel, handleOk } = useModalH();
    const [form] = Form.useForm();
    const [form1] = Form.useForm();

    const editModal = (record:any) => {
        const setData = ():void => {
            form.setFieldsValue({
                name:record.name
            })
        }
        showModal(setData)
    }
    const delModal = async (record:any) => {
        await deleteAction(roleUrl.delete,{id:record.id});
        setQuery({})
    }
    //表头
    const columns = [
        {
            title: '创建时间',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            width: '20%',
        },
        {
            title: '角色名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '操作',
            key: 'action',
            width: '18%',
            render: (text:any, record:any) => (
              <Space size="middle">
                <a>授权</a>
                <a onClick={() => editModal(record)}>编辑</a>
                <Popconfirm
                    title="确定删除？"
                    onConfirm={() => delModal(record)}
                    okText="确定"
                    cancelText="取消"
                >
                    <a href="#">删除</a>
                </Popconfirm>
              </Space>
            ),
          },
    ]
    //
    const onFinish = async () => {
        const values = await form1.validateFields();
        setQuery(values)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('onFinishFailed:');
    };
    const resetForm = () => {
        form1.resetFields();
        setQuery({})
    }
    if(isError) return <div>error</div>
    return (
        <>
            <Row style={{marginBottom:"10px"}}>
            <Form 
                name="basic"
                form={form1}
                layout="inline"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                        label="角色名称"
                        name="name"
                    >
                        <Input placeholder='请输入角色名称' />
                    </Form.Item>
                
                    <Button type="primary" htmlType="submit" style={{margin:"0 8px"}}>
                    查询
                    </Button>
                    <Button type="primary" onClick={resetForm}>
                    重置
                    </Button>
            </Form>
            </Row>
            <Button type="primary" style={{marginBottom:'10px'}} onClick={() => showModal()}>
                新增
            </Button>
            <Spin spinning={isLoading} tip="加载中..." delay={500}>
                <Table
                columns={columns}
                rowKey="id"
                dataSource={data}
                >
                </Table>
            </Spin>
            <Modal
                title="Title"
                visible={visible}
                onOk={onFinish}
                confirmLoading={confirmLoading}
                onCancel={() => handleCancel()}
                >
                <Form 
                    preserve={false}
                    form={form}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[{ required: true, message: '请输入角色名称!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default Role;