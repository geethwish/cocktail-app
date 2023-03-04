import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';

import styles from './CocktailSearchCard.module.scss'

import noImage from '../../assets/images/noImage.png'
import { CocktailStatePropsType } from '../../Pages/home/cocktail.type';
interface CocktailSearchCardPropsType {
    data: CocktailStatePropsType
    handleClick: (data: CocktailStatePropsType) => void
}

const CocktailSearchCard: React.FC<CocktailSearchCardPropsType> = ({ data, handleClick }) => {
    return (
        <div className={styles.container}>

            <div className={styles.logoWrapper}>
                <img src={data.strDrinkThumb !== '' ? data.strDrinkThumb : noImage} alt="avatar" className={styles.logoImage} />
            </div>
            <div>
                {data.strDrink}
            </div>
            <div>
                <Button type="primary" icon={<DownloadOutlined />} size={'middle'} onClick={() => handleClick(data)} />
            </div>
        </div>
    )
}

export default CocktailSearchCard