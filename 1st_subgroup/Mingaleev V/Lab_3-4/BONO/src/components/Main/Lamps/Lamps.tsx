import React from 'react';
import classes from '../Divans/Divan.module.css'
import ProductItem from "../ProductItem/ProductItem";
import lampVenice from '../../../assets/images/lamp-venice-500x500.jpg'
import lampVulcano from '../../../assets/images/lamp-vulcano-500x500.jpg'
import lampSteel from '../../../assets/images/lamp-steel-500x500.jpg'
import lampOffice from '../../../assets/images/lamp-office-500x500.jpg'
import lampMantra from '../../../assets/images/lamp-mantra-500x500.jpg'
import lampInspire from '../../../assets/images/lamp-inspire-gold-500x500.jpg'
import lampBlueSea from '../../../assets/images/lamp-blue-sea-500x500.jpg'
import lampModern from '../../../assets/images/lamp-modern-500x500.jpg'

const DUMMY_LAMPS = [
    {
        id: 1,
        type: 'lamp',
        title: 'Настольная лампа Venice',
        variants: 1,
        color: '',
        price: 8400,
        salePrice: '',
        imgSrc: lampVenice,
        badgeText: ''
    },
    {
        id: 2,
        type: 'lamp',
        title: 'Настольная лампа Volcano',
        variants: 1,
        color: 'Серый',
        price: 5200,
        salePrice: 4800,
        imgSrc: lampVulcano,
        badgeText: 'Скидка'
    },
    {
        id: 3,
        type: 'lamp',
        title: 'Настольная лампа Steel',
        variants: 1,
        color: 'Чёрный',
        price: 4300,
        salePrice: 3700,
        imgSrc: lampSteel,
        badgeText: 'Скидка'
    },
    {
        id: 4,
        type: 'lamp',
        title: 'Настольная лампа Wood Office',
        variants: 1,
        color: 'Желтый',
        price: 4200,
        salePrice: '',
        imgSrc: lampOffice,
        badgeText: ''
    },
    {
        id: 5,
        type: 'lamp',
        title: 'Подвесной светильник Mantra',
        variants: 1,
        color: 'Коричневый',
        price: 5900,
        salePrice: '',
        imgSrc: lampMantra,
        badgeText: ''
    },
    {
        id: 6,
        type: 'lamp',
        title: 'Подвесной светильник Inspire',
        variants: 1,
        color: 'Бежевый',
        price: 8900,
        salePrice: 7900,
        imgSrc: lampInspire,
        badgeText: 'Скидка'
    },
    {
        id: 7,
        type: 'lamp',
        title: 'Подвесной светильник Blue Sea',
        variants: 1,
        color: 'Красный',
        price: 4900,
        salePrice: '',
        imgSrc: lampBlueSea,
        badgeText: ''
    },
    {
        id: 8,
        type: 'lamp',
        title: 'Подвесной светильник Modern',
        variants: 1,
        color: 'Зелёный',
        price: 4700,
        salePrice: '',
        imgSrc: lampModern,
        badgeText: ''
    },
]
const Lamps = () => {
    return (
        <section className={classes.divan}>
            <h2 className={classes['divan-title']}>Свет</h2>
            {DUMMY_LAMPS.map(lamp =>
                <ProductItem key={lamp.id}
                             id={lamp.id}
                             title={lamp.title}
                             price={lamp.price}
                             salePrice={lamp.salePrice}
                             type={lamp.type}
                             imgSrc={lamp.imgSrc}
                             variants={lamp.variants}
                             badgeText={lamp.badgeText}
                />)}
        </section>
    );
};

export default Lamps;