import React from 'react'

import styles from './Layout.module.scss'

interface ContainerPropsTypes {
    children: React.ReactNode
    className?: string
}
const Container: React.FC<ContainerPropsTypes> = ({ children, className, ...rest }) => {

    return (
        <div {...rest} className={className ?? styles.container}>
            {children}
        </div>
    )
}

export default Container