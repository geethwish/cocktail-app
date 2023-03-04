import React from 'react'
import { Modal, Input } from 'antd'

import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { searchCocktailListResult, searchCocktails } from '../../redux/slices/cocktail/searchCocktailSlice'

import noImage from '../../assets/images/noImage.png'

import styles from './Search.module.scss'
import { CocktailStatePropsType } from '../../Pages/home/cocktail.type'
import { addToFavoriteList } from '../../redux/slices/cocktail/favoriteCocktailSlice'

interface SearchPropStyles {
    open: boolean,
    title: string,
    onCancel: () => void
}

const Search: React.FC<SearchPropStyles> = ({ open, onCancel, title }) => {

    const dispatch = useAppDispatch()

    const cocktailList = useAppSelector(searchCocktailListResult)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const inputValue = e.target.value

        dispatch(searchCocktails({ s: inputValue }))
    }

    const handleAddToFavorite = (data: CocktailStatePropsType) => {
        dispatch(addToFavoriteList([data]))
    }

    return (
        <Modal
            open={open}
            title={title}
            onCancel={onCancel}
            footer={[]}
            width={700}
        >
            <div className={styles.container}>

                <h1 className={styles.title}> Search Cocktails</h1>

                <div className={styles.searchFieldWrapper}>
                    <Input placeholder="Search Cocktails EX: margarita" onChange={onInputChange} />
                </div>

                <div className={styles.searchResult}>
                    {
                        cocktailList?.drinks?.length > 0 && cocktailList?.drinks?.map((drink: CocktailStatePropsType, index: React.Key) =>
                            <CocktailSearchCard key={index} data={drink} handleClick={handleAddToFavorite} />)
                    }

                </div>
            </div>
        </Modal>
    )
}

export default Search

