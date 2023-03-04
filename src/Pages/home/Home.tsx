
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

    const [requestRound, setRequestRound] = useState(1)
    const [data, setData] = useState([])

    const fetchCocktailList = useCallback(() => {
        dispatch(getCocktailList(1))
    }, [dispatch])

    useEffect(() => {
        fetchCocktailList()
    }, [])

    useEffect(() => {
        if (apiStatus === "success" && requestRound <= 5) {

            const drinks = cocktailData?.drinks.length > 0 ? cocktailData?.drinks : []
            const temp = [...data, ...drinks]
            console.log(drinks, temp);

            setData(temp as any)

            setRequestRound(requestRound + 1)

            fetchCocktailList()
        }
    }, [apiStatus, cocktailData?.drinks, data, fetchCocktailList, requestRound])


    const reShuffleList = () => {
        dispatch(resetCocktailListState())
        setData([])
        setRequestRound(1)
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