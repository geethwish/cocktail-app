
import React from 'react'
import Container from '../../components/layout/Container'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons';

import headerImage from './../../assets/images/header.jpg'
import styles from './Home.module.scss'
import CocktailCard from '../../components/cocktailCard/CocktailCard'

const Home = () => {
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
                    <Button  icon={<ReloadOutlined />} size={'middle'}>
                        Refresh List
                    </Button>
                </div>

                <div className={styles.cocktailCardsWrapper}>
                    <CocktailCard />
                </div>
            </div>
        </Container>

    )
}

export default Home