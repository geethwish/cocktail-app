import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

import { CocktailStatePropsType } from '../../Pages/home/cocktail.type';

import styles from './CocktailSearchCard.module.scss'

import noImage from '../../assets/images/noImage.png'

interface CocktailSearchCardPropsType {
    data: CocktailStatePropsType,
    className?: string,
    deleteCocktail?: boolean
    handleClick: (data: CocktailStatePropsType) => void
}

const CocktailSearchCard: React.FC<CocktailSearchCardPropsType> = ({ data, handleClick, className, deleteCocktail }) => {
    return (
        <div className={`${className !== '' ? className : ''} ${styles.container}`}>

            <div className={styles.logoWrapper}>
                <img src={data.strDrinkThumb !== '' ? data.strDrinkThumb : noImage} alt="avatar" className={styles.logoImage} />
            </div>

            <div className={styles.nameSection}>
                {data.strDrink}
            </div>

            <div>

                {
                    deleteCocktail !== undefined && deleteCocktail === true ?
                        <Button type="primary" name='delete' danger icon={<DeleteOutlined />} size={'middle'} onClick={() => handleClick(data)} /> :
                        <Button type="primary" name='add' icon={<PlusOutlined />} size={'middle'} onClick={() => handleClick(data)} />
                }

            </div>

        </div>
    )
}

export default CocktailSearchCard