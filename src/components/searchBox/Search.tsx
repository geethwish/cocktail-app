import React from 'react'
import { Modal, Input } from 'antd'

import styles from './Search.module.scss'
import CocktailSearchCard from '../cocktailSearchCard/CocktailSearchCard'

interface SearchPropStyles {
    open: boolean,
    title: string,
    onCancel: () => void
}

const Search: React.FC<SearchPropStyles> = ({ open, onCancel, title }) => {
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
                    <Input placeholder="Search Cocktails EX: margarita" />
                </div>

                <div className={styles.searchResult}>
                    <CocktailSearchCard name='Lorem Ipsum' image=''/>
                </div>
            </div>
        </Modal>
    )
}

export default Search