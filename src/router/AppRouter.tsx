/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-08-18 16:06:51
 * @LastEditors: fei
 * @LastEditTime: 2021-12-03 09:27:34
 */
import Login from "../pages/login";
import { BrowserRouter as  Router, Route,Redirect } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';

const config = [
    {path:"/login",component:Login},
    {path:"/index",component:PageLayout},
    {path:"/system",component:PageLayout},
    {path:"/shopping",component:PageLayout},
    {path:"/plugins",component:PageLayout},
]
//需要改为动态加载
const Routes = () => {
    return (
            <Router>
                <Redirect path="/" to="/login" />
                {config.map(item => {
                    return <Route key={item.path} path={item.path} component={item.component} />
                })}
            </Router>
    )
}
export default Routes