import React, { useEffect, useState } from 'react'
import { HomeOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Button, Space, Tooltip } from 'antd';

import styles from './Layout.module.scss'
import Search from '../searchBox/Search';
import FavoriteCocktailList from '../favoriteCocktailList/FavoriteCocktailList';
import { useAppSelector } from '../../redux/hooks';
import { favoriteDrinksList } from '../../redux/slices/cocktail/favoriteCocktailSlice';

const NavigationBar = () => {

    const favoriteList = useAppSelector(favoriteDrinksList)

    const [show, setShow] = useState(false)
    const [showFavorite, setShowFavorite] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = () => {
        const navbarStyles = document.getElementById("navbar")!
        const logoStyles = document.getElementById("logo")!
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navbarStyles.style.padding = "30px 10px";
            logoStyles.style.fontSize = "25px";
        } else {
            navbarStyles.style.padding = "20px 40px";
            logoStyles.style.fontSize = "35px";
        }
    }

    const showSearchBox = () => {
        setShow(!show)
    }

    const showFavoriteCocktailList = () => {
        setShowFavorite(!showFavorite)
    }

    return (
        <div id="navbar" className={styles.navbar}>
            <a href="/" id="logo" className={styles.noneLink}>
                <div className={`logo-holder ${styles.logoText}`}>

                    <h6>Cocktail <span>Secret</span></h6>

                </div>
            </a>

            <div className={styles.navbarRight}>

                <Button type='primary' onClick={showSearchBox} icon={<HomeOutlined />} size='large' className={styles.customButton}> Home </Button>

                <Badge count={favoriteList.length} >
                    <Button type='text' onClick={showFavoriteCocktailList} icon={<HeartOutlined />} size='large' className={styles.customButton}> Favorite </Button>
                </Badge>

                <Button type='text' onClick={showSearchBox} icon={<SearchOutlined />} size='large' className={styles.customButton}> Search </Button>
            </div>

            <Search open={show} onCancel={showSearchBox} title='' />

            <FavoriteCocktailList title='Favorite Cocktails List' onClose={showFavoriteCocktailList} open={showFavorite} />

        </div>
    )
}

export default NavigationBar