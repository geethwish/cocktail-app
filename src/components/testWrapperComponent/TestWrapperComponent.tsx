import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../../redux/store'

interface TestWrapperComponentPropsType {
    children: JSX.Element[] | JSX.Element
}

const TestWrapperComponent: React.FC<TestWrapperComponentPropsType> = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>

        </Provider>
    )
}

export default TestWrapperComponent