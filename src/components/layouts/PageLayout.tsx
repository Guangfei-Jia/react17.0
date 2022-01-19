/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-18 09:21:44
 * @LastEditors: fei
 * @LastEditTime: 2021-12-06 11:15:45
 */
import { Layout, Breadcrumb } from 'antd';
import React, { FC, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import MenuSlider from './MenuSlider';
import RouterContent from "./RouterContent"
import logo from '../../../public/logo192.png';
const { Header, Content, Sider,Footer } = Layout;

const PageLayout: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    return <Layout>
        <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo">
                {/* <img src={logo} alt='logo'/> */}
                管理系统
            </div>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to="/inbox/a">about</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about/b">about</Link></Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
        </Header>
        <Layout style={{marginTop: 64 }}>
            <Sider width={200} collapsible collapsed={collapsed} onCollapse={setCollapsed} className="site-layout-background" style={{
                overflow: 'auto',
                height: 'calc(100vh - 112px)',
                position: 'fixed',
                left: 0,
                backgroundColor:'#fff'
            }}>
                <MenuSlider />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: '200px',paddingLeft:'24px'}}>
                <Breadcrumbs />
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        backgroundColor:'#fff'
                    }}
                    >
                        <RouterContent />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    </Layout>;
};
export default PageLayout;
