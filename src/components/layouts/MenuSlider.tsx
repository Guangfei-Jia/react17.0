/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-09-18 16:57:46
 * @LastEditors: fei
 * @LastEditTime: 2021-09-18 17:24:22
 */
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation, useRouteMatch  } from 'react-router-dom';
import { getStore } from '@/utils/storage';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu, Item } = Menu;
const MenuSlider:any = () => {
    const menuTree = JSON.parse(getStore('menu'));

    const { pathname } = useLocation();
    const { path } = useRouteMatch();
    const [openKeys, setOpenKeys] = useState([path]);
    const rootSubmenuKeys = ['/system', '/shopping', '/plugins'];

    const onOpenChange = (keys:any) => {
        const latestOpenKey = keys.find((key:any) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <Menu
            mode="inline"
            selectedKeys={[pathname]}
            openKeys={ openKeys }
            onOpenChange={ onOpenChange }
            style={{ borderRight: 0 }}
        >
            {
                menuTree.map((item:any) => {
                    if(item.children.length > 0){
                        return (
                            <SubMenu key={item.router_url} icon={<UserOutlined />} title={item.name}>
                            {
                                item.children.map((data:any) => {
                                    return <Item key={data.router_url} icon={<NotificationOutlined />}><Link to={data.router_url}>{data.name}</Link></Item>
                                })
                            }
                            </SubMenu>
                        )
                    } else{
                        return <Item icon={<LaptopOutlined />} key={item.router_url}><Link to={item.router_url}>{item.name}</Link></Item>
                    }
                })
            }
        </Menu>
    )
}
export default MenuSlider;