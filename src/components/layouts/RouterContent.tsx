/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-09-23 15:00:02
 * @LastEditors: fei
 * @LastEditTime: 2021-09-24 09:57:36
 */
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import loading from '@/components/loading'
import { getStore } from '@/utils/storage';

//
const RouterContent = () => {
    const menuTree = JSON.parse(getStore('menu'));
    return (
        menuTree.map((item:any) => {
            if(item.router_url === '/index'){
                return <Route key='/index' path='/index' component={Loadable({loader: () => import("@/pages/index"),loading: loading})} />
            }else{
                return item.children.map((item2:any) => {
                    return (<Route key={item2.router_url} path={item2.router_url} component={Loadable({loader: () => import(`@/pages${item2.router_url}`),loading: loading})} />)
                })
            }
        })
    )
}

export default RouterContent;