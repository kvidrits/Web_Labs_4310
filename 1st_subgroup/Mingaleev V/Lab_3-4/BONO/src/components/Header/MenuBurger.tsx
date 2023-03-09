import React from 'react';
import classes from './MenuBurger.module.css'

const MenuBurger = () => {
    return (
        <div className={classes['burger-btn']}>
            <span className={classes.top}></span>
            <span className={classes.mid}></span>
            <span className={classes.bottom}></span>
        </div>
    );
};

export default MenuBurger;