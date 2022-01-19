/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-09-23 14:57:25
 * @LastEditors: fei
 * @LastEditTime: 2021-12-03 14:40:33
 */
import React, { FC } from 'react';
import { Table, Space } from 'antd';
import { menuUrl } from '@/api'
import useRequestH from '@/hooks/useRequestH'

const Menu:FC = () => {
    const {data, isLoading, isError, setUrl} = useRequestH('post',menuUrl.list,{});
    const columns = [
        {
            title: '菜单名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '菜单路由',
            dataIndex: 'router_url',
            key: 'router_url',
        },
        {
            title: '菜单类型',
            dataIndex: 'router_type',
            key: 'router_type',
            render: (text:Number) => {
                return text === 1 ? "菜单" : text === 2 ? "内页" :text === 3 ? "按钮" : "";
            }
        },
        {
            title: '操作',
            key: 'action',
            width: '18%',
            render: (text:any, record:any) => (
              <Space size="middle">
                <a>添加下级</a>
                <a>编辑</a>
                <a>删除</a>
              </Space>
            ),
          },
    ]
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading</div>
    return (
        <Table
        columns={columns}
        rowKey="id"
        dataSource={data}
        />
    )
}
export default Menu;