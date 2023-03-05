import React, { useState } from 'react'
import { Modal, Input, message } from 'antd'

import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { resetSearchCocktailListState, searchCocktailListResult, searchCocktails } from '../../redux/slices/cocktail/searchCocktailSlice'
import { CocktailStatePropsType } from '../../Pages/home/cocktail.type'
import { addToFavoriteList } from '../../redux/slices/cocktail/favoriteCocktailSlice'

import styles from './Search.module.scss'

interface SearchPropStyles {
    open: boolean,
    title: string,
    onCancel: () => void
}

const Search: React.FC<SearchPropStyles> = ({ open, onCancel, title }) => {

    const dispatch = useAppDispatch()

    const [messageApi, contextHolder] = message.useMessage();
    const cocktailList = useAppSelector(searchCocktailListResult)
    const [searchValue, setSearchValue] = useState('')

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const inputValue = e.target.value

        setSearchValue(inputValue)

        dispatch(searchCocktails({ s: inputValue }))
    }

    const handleAddToFavorite = (data: CocktailStatePropsType) => {

        setSearchValue('')
        success()
        dispatch(resetSearchCocktailListState())
        dispatch(addToFavoriteList([data]))
    }

    // successful message notification
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Cocktail Added to Favorite list',
        });
    };

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
                    <Input placeholder="Search Cocktails EX: margarita" onChange={onInputChange} value={searchValue} name='searchField' />
                </div>

                <div className={styles.searchResult}>
                    {
                        cocktailList?.drinks?.length > 0 && cocktailList?.drinks?.map((drink: CocktailStatePropsType, index: React.Key) =>
                            <CocktailSearchCard key={index} data={drink} handleClick={handleAddToFavorite} />)
                    }

                </div>

            </div>

            {contextHolder}

        </Modal>
    )
}

export default Search

