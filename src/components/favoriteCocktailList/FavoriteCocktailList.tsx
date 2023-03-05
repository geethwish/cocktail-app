import React from 'react'
import { Drawer, message } from 'antd'

import styles from './FavoriteCocktailList.module.scss'
import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { favoriteDrinksList, removeCocktailFromFavoriteList } from '../../redux/slices/cocktail/favoriteCocktailSlice'
import { CocktailStatePropsType } from '../../Pages/home/cocktail.type'

interface FavoriteCocktailListPropsType {
    width?: number
    title: string
    open: boolean
    onClose: () => void
}

const FavoriteCocktailList: React.FC<FavoriteCocktailListPropsType> = ({ title, width, open, onClose }) => {

    const dispatch = useAppDispatch()

    const favoriteCocktailList = useAppSelector(favoriteDrinksList)
    const [messageApi, contextHolder] = message.useMessage();

    const handleDelete = (data: CocktailStatePropsType) => {

        dispatch(removeCocktailFromFavoriteList(data))

        success()

    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Cocktail Removed Favorite list',
        });
    };


    return (

        <Drawer
            title={title}
            className={styles.drawerWidth}
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
        >

            <div className={styles.drawerContainer}>

                {
                    favoriteCocktailList?.length > 0 && favoriteCocktailList.map((cocktail, index) =>
                        <CocktailSearchCard key={index} deleteCocktail className={styles.customWrapper} data={cocktail} handleClick={handleDelete} />)
                }

            </div>

            {contextHolder}
        </Drawer>

    )
}

export default FavoriteCocktailList