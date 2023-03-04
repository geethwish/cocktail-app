import React from 'react'

import styles from './CocktailCard.module.scss'
interface CocktailCardPropsType {
    data: any
}
const CocktailCard: React.FC<CocktailCardPropsType> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div  className={styles.imageContainer}>
                <img className={styles.image} src={data.strDrinkThumb} alt={data.strDrink} />
            </div>
            <div className={styles.cardContent}>
                <h3>
                    {data.strDrink}
                </h3>
                <div className={styles.categoryWrapper}>
                    <span className={`${styles.pill} ${styles.pillSuccess}`}>{data.strCategory}</span>
                </div>
            </div>

        </div>
    )
}

export default CocktailCard