/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-09 16:45:34
 * @LastEditors: fei
 * @LastEditTime: 2021-11-17 11:12:27
 */
import { getStore } from '@/utils/storage';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

//面包屑导航
const Breadcrumbs = () => {
    const menuTree = JSON.parse(getStore('menu'));
    const menuSet = new Map();
    const thisPath = useLocation().pathname;
    let menuBreadList:Array<object> = [];
    if(thisPath){
        let oldPath = ''
        thisPath.split('/').forEach( (item:string) => {
            if(item){
                oldPath += '/' + item;
                menuSet.set(oldPath, oldPath);  
            }
        })
    }
    const routeAndParent = (tree: Array<any>) => {
        for(let i = 0; i < tree.length; i ++){
            if(menuSet.get(tree[i].router_url) === tree[i].router_url){
                menuBreadList.push({
                    id:tree[i].router_url,
                    name:tree[i].name,
                })
                routeAndParent(tree[i].children);
                break;
            }
        }
    }
    routeAndParent(menuTree);
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                menuBreadList.map((item:any) => {
                    //根菜单不显示
                    if(menuBreadList.length <= 1){
                        return ""
                    }
                    return (
                        <Breadcrumb.Item key={item.id}>   
                        {item.name}    
                            {/* <Link to={item.id}>{item.name}</Link> */}
                        </Breadcrumb.Item>
                    )
                })
            }
        </Breadcrumb>
    )
}
export default Breadcrumbs;