import React from 'react'
import { message } from "antd";
import axios, { AxiosError } from "axios";

const AxiosInterceptor = () => {
    const [messageApi, contextHolder] = message.useMessage();

    // Set default Header
    axios.interceptors.request.use(function (config) {

        config.headers.set({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        })

        return config;
    });

    const errorMessage = (errorMessage: string) => {
        messageApi.open({
            type: 'error',
            content: errorMessage,
        });
    };

    // Handle Api Response Errors
    axios.interceptors.response.use((response) => response, async (error: AxiosError<any>) => {

        const status = error?.response?.status

        if (error?.code === 'ERR_NETWORK') {

            void errorMessage('API connection issue occurred. Please try again')

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