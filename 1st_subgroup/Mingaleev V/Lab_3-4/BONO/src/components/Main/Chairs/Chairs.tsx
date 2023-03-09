import React from 'react';
import classes from './Chairs.module.css'
import ProductItem from "../ProductItem/ProductItem";
import chairKidGreen from '../../../assets/images/chair-kid-1-500x502.jpg'
import chairOrange from '../../../assets/images/chair-orange-500x502.jpg'
import chairSimple from '../../../assets/images/chair-simple-500x502.jpg'
import chairFinal from '../../../assets/images/chair-final-500x502.jpg'
import chairLora from '../../../assets/images/chair-white-500x502.jpg'
import chairComfort from '../../../assets/images/chair-office-1-500x502.jpg'
import chairVeranda from '../../../assets/images/chair-veranda-red-500x502.jpg'
import chairFlux from '../../../assets/images/chair-flux-500x502.jpg'

const DUMMY_CHAIRS = [
    {
        id: 1,
        type: 'chair',
        title: 'Детское кресло Green',
        variants: 1,
        color: '',
        price: 6400,
        salePrice: '',
        imgSrc: chairKidGreen,
        badgeText: ''
    },
    {
        id: 2,
        type: 'chair',
        title: 'Офисное кресло Orange',
        variants: 1,
        color: '',
        price: 4900,
        salePrice: '',
        imgSrc: chairOrange,
        badgeText: ''
    },
    {
        id: 3,
        type: 'chair',
        title: 'Стул Simple',
        variants: 1,
        color: '',
        price: 3700,
        salePrice: '',
        imgSrc: chairSimple,
        badgeText: ''
    },
    {
        id: 4,
        type: 'chair',
        title: 'Стул Final Blue',
        variants: 1,
        color: '',
        price: 5800,
        salePrice: 5200,
        imgSrc: chairFinal,
        badgeText: 'Скидка'
    },
    {
        id: 5,
        type: 'chair',
        title: 'Стул Lora',
        variants: 1,
        color: '',
        price: 5900,
        salePrice: 4800,
        imgSrc: chairLora,
        badgeText: 'Скидка',
        secondBadge: 'Хит продаж'
    },
    {
        id: 6,
        type: 'chair',
        title: 'Офисное кресло Comfort',
        variants: 1,
        color: '',
        price: 11900,
        salePrice: '',
        imgSrc: chairComfort,
        badgeText: ''
    },
    {
        id: 7,
        type: 'chair',
        title: 'Стул Veranda',
        variants: 3,
        color: 'Красный',
        price: 7800,
        salePrice: '',
        imgSrc: chairVeranda,
        badgeText: ''
    },
    {
        id: 8,
        type: 'chair',
        title: 'Стул Flux',
        variants: 1,
        color: 'Зелёный',
        price: 8900,
        salePrice: 5600,
        imgSrc: chairFlux,
        badgeText: 'Скидка'
    },
]
const Chairs = () => {
    return (
        <div className={classes.chairs}>
            <h2 className={classes['chairs-title']}>Стулья</h2>
            {DUMMY_CHAIRS.map(chair =>
                <ProductItem key={chair.id}
                             id={chair.id}
                             title={chair.title}
                             price={chair.price}
                             salePrice={chair.salePrice}
                             type={chair.type}
                             imgSrc={chair.imgSrc}
                             variants={chair.variants}
                             badgeText={chair.badgeText}
                             secondBadge={chair.secondBadge}
                />)}
        </div>
    );
};

export default Chairs;