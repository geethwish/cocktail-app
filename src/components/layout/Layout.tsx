import React from 'react'
import NavigationBar from './NavigationBar'

interface LayoutPropsType {
    children: React.ReactNode
}
const Layout: React.FC<LayoutPropsType> = ({ children }) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    )
}

export default Layout