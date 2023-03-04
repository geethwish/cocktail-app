import React from 'react'
import { Avatar, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';

import styles from './CocktailSearchCard.module.scss'

import noImage from '../../assets/images/noImage.png'
interface CocktailSearchCardPropsType {
    image: string
    name: string
}

const CocktailSearchCard: React.FC<CocktailSearchCardPropsType> = ({ image, name }) => {
    return (
        <div className={styles.container}>

            <div className={styles.logoWrapper}>
                <img src={image !== '' ? image : noImage} alt="avatar" className={styles.logoImage} />
            </div>
            <div>
                {name}
            </div>
            <div>
                <Button type="primary" icon={<DownloadOutlined />} size={'middle'} />
            </div>
        </div>
    )
}

export default CocktailSearchCard