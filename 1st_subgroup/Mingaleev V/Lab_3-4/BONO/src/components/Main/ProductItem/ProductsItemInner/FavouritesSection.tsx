import React from 'react';
import classes from "./FavouritesSection.module.css";

const FavouritesSection = () => {
    return (
        <div className={classes['favourites-wrapper']}>
            <button className={classes.favourites}></button>
            <button className={classes.compare}></button>
        </div>
    );
};

export default FavouritesSection;