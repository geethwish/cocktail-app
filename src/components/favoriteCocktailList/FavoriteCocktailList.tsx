import React from 'react'
import { Drawer } from 'antd'

import styles from './FavoriteCocktailList.module.scss'
import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { favoriteDrinksList } from '../../redux/slices/cocktail/favoriteCocktailSlice'

interface FavoriteCocktailListPropsType {
    width?: number
    title: string
    open: boolean
    onClose: () => void
}

const FavoriteCocktailList: React.FC<FavoriteCocktailListPropsType> = ({ title, width, open, onClose }) => {

    const favoriteCocktailList = useAppSelector(favoriteDrinksList)

    return (

        <Drawer
            title={title}
            width={width ?? 720}
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
        >

            <div className={styles.drawerContainer}>

                {
                    favoriteCocktailList?.length > 0 && favoriteCocktailList.map((cocktail, index) => <CocktailSearchCard key={index} data={cocktail} handleClick={function (data: any): void {
                        throw new Error('Function not implemented.')
                    }} />)
                }


            </div>

        </Drawer>

    )
}

export default FavoriteCocktailList