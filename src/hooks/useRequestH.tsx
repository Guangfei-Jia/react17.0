/*
 * @Descripttion: 
 * @version: 
 * @Author: fei
 * @Date: 2021-11-22 14:46:24
 * @LastEditors: fei
 * @LastEditTime: 2021-12-07 14:10:40
 */

import { getAction,postAction,putAction,deleteAction } from "@/api/axios";
import { useEffect, useState } from "react";

const RequestHook = (method:string,reqUrl:string,initQuery:object) => {
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(reqUrl);
    const [query, setQuery] = useState(initQuery);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const getData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                let res:any;
                switch (method) {
                    case 'get':
                        res = await getAction(url, query);
                        break;
                    case 'post':
                        res = await postAction(url, query);
                        break;
                    case 'put':
                        res = await putAction(url, query);
                        break;
                    case 'delete':
                        res = await deleteAction(url, query);
                        break;
                    default:
                        res = await postAction(url, query);
                        break;
                }
                setData(res.data.rows);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        getData();
    },[url, query])
    return {data, isLoading, isError, setUrl, setQuery};
}

export default RequestHook;