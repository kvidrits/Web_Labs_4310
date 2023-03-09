import React from 'react';
import classes from './Footer.module.css'
import logo from '../../assets/icons/logo-4.png'
import {Link} from "react-router-dom";
import facebookIcon from "../../assets/icons/facebook.svg";
import vkIcon from "../../assets/icons/vkIcon.svg";
import telegramIcon from "../../assets/icons/telegramIcon.svg";
import instaIcon from "../../assets/icons/instaIcon.svg";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes['logo-wrapper']}>
                <img src={logo} alt=""/>
                <p>
                    Демо-сайт премиум шаблона Bono.
                    <br/>
                    Информация на сайте исключительно для ознакомления.
                </p>
                <p>
                    <small>Материалы сайта приведены для примера и не являются офертой.</small>
                </p>
            </div>
            <div className={classes['footer-nav']}>
                <h4 className={classes['nav-title']}>Помощь</h4>
                <Link className={classes['nav-link']} to='/payments'>Оплата заказа</Link>
                <Link className={classes['nav-link']} to='/payments'>Публичная оферта</Link>
                <Link className={classes['nav-link']} to='/payments'>Вопросы и ответы</Link>
                <Link className={classes['nav-link']} to='/payments'>Профиль</Link>
                <Link className={classes['nav-link']} to='/payments'>Мои заказы</Link>
            </div>
            <div className={classes['footer-nav']}>
                <h4 className={classes['nav-title']}>Разделы</h4>
                <Link className={classes['nav-link']} to='/payments'>Диваны</Link>
                <Link className={classes['nav-link']} to='/payments'>Стулья</Link>
                <Link className={classes['nav-link']} to='/payments'>Свет</Link>
                <Link className={classes['nav-link']} to='/payments'>Для офиса</Link>
                <Link className={classes['nav-link']} to='/payments'>На потолок</Link>
                <Link className={classes['nav-link']} to='/payments'>Настольные</Link>
            </div>
            <div className={classes['footer-links']}>
                <a href=""> <img src={facebookIcon} alt=""/></a>
                <a href=""> <img src={vkIcon} alt=""/> </a>
                <a href=""> <img src={telegramIcon} alt=""/> </a>
                <a href=""> <img src={instaIcon} alt=""/> </a>
            </div>
            <p>
                Сайт работает на WordPress
                <br/>
                шаблон Bono.
            </p>
        </footer>
    );
};

export default Footer;