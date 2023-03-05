
import React, { useCallback, useEffect, useState } from 'react'
import Container from '../../components/layout/Container'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons';

import headerImage from './../../assets/images/header.jpg'
import styles from './Home.module.scss'
import CocktailCard from '../../components/cocktailCard/CocktailCard'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { cocktailApiStatus, cocktailListResult, getCocktailList, resetCocktailListState } from '../../redux/slices/cocktail/getCocktailSlice';

const Home = () => {
    const dispatch = useAppDispatch()
    const cocktailData = useAppSelector(cocktailListResult)
    const apiStatus = useAppSelector(cocktailApiStatus)

    const [data, setData] = useState([])

    const fetchCocktailList = useCallback(() => {
        dispatch(getCocktailList())
    }, [dispatch])

    useEffect(() => {
        fetchCocktailList()
    }, [])

    useEffect(() => {
        console.log(cocktailData);
        
        if (apiStatus === "success" && data.length === 0 && cocktailData?.drinks.length > 0) {

            const firstFiveDrinks = cocktailData?.drinks.slice(0, 5)

            setData(firstFiveDrinks)

        }
    }, [apiStatus, cocktailData?.drinks, data, fetchCocktailList])


    const reShuffleList = () => {
        dispatch(resetCocktailListState())
        setData([])
        fetchCocktailList()
    }

    return (
        <Container>
            <div className={styles.headerImage}>
                <img src={headerImage} alt="headerImage" />
            </div>

            <div className={styles.welcomeText}>
                <p>It's time for a</p>
                <h1>Cocktail</h1>
            </div>

            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h3>
                        New Cocktails
                    </h3>
                    <Button icon={<ReloadOutlined />} size={'large'} onClick={reShuffleList}>
                        Refresh List
                    </Button>
                </div>

                <div className={styles.cocktailCardsWrapper}>
                    {
                        data.length > 0 && data.map((cocktail, index) => <CocktailCard key={index} data={cocktail} />)
                    }

                </div>
            </div>
        </Container>

    )
}

export default Home