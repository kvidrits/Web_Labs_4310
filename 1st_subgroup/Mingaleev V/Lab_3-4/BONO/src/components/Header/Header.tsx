import React from 'react';
import logoImg from '../../assets/icons/logo-4.png'
import classes from './Header.module.css'
import facebookIcon from '../../assets/icons/facebook.svg'
import vkIcon from '../../assets/icons/vkIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import instaIcon from '../../assets/icons/instaIcon.svg'
import MenuBurger from "./MenuBurger";
import {Link, Outlet} from "react-router-dom";
import CartMainPage from "./CartMainPage";

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes['header-top']}>
                <MenuBurger/>
                <div className={classes['img-wrapper']}>
                    <img src={logoImg}/>
                </div>
                <CartMainPage/>
            </div>
            <div className={classes['header-mid']}>
                <a href=""> <img src={facebookIcon} alt=""/></a>
                <a href=""> <img src={vkIcon} alt=""/> </a>
                <a href=""> <img src={telegramIcon} alt=""/> </a>
                <a href=""> <img src={instaIcon} alt=""/> </a>
            </div>
            <div className={classes['header-bottom']}>
                <div className={classes.phone}>
                    <a href="tel:%2B74952002020">
                        +7 495 200 20 20 <br/>
                        <small>с 10:00 до 15:00</small>
                    </a>
                </div>
                <div className={classes['favourites-wrapper']}>
                    <Link to='./favourites' className={classes['favourites']}>
                        <sup>0</sup>
                    </Link>
                    <Link to='./compare' className={classes['compare']}>
                        <sup>0</sup>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;