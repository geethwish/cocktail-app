import { message } from "antd";
import axios, { AxiosError } from "axios";

import React from 'react'



const AxiosInterceptor = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const errorMessage = (errorMessage: string) => {
        messageApi.open({
            type: 'error',
            content: errorMessage,
        });
    };

    axios.interceptors.response.use((response) => response, async (error: AxiosError<any>) => {

        const status = error?.response?.status

        if (error?.code === 'ERR_NETWORK') {
            void errorMessage('Please  check your internet connection')
            return await Promise.reject(error)
        }

        switch (status) {
            case 400:
                void errorMessage('Something went wrong please try agin')
                break;

            case 401:
                void errorMessage('Authorization Failed')
                break;

            case 404:
                void errorMessage('Request Data Not Found')
                break;
            default:
                break;
        }
        return await Promise.reject(error)
    })

    return (contextHolder)
}

export default AxiosInterceptor