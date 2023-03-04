import React from 'react'
import { Drawer } from 'antd'

import styles from './FavoriteCocktailList.module.scss'
import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'

interface FavoriteCocktailListPropsType {
    width?: number
    title: string
    open: boolean
    onClose: () => void
}

const FavoriteCocktailList: React.FC<FavoriteCocktailListPropsType> = ({ title, width, open, onClose }) => {
    return (

        <Drawer
            title={title}
            width={width ?? 720}
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
        >

            <div className={styles.drawerContainer}>

                <CocktailSearchCard name='Lorem Ipsum' image='' />

            </div>

        </Drawer>

    )
}

export default FavoriteCocktailList