import React, {FC, PropsWithChildren} from 'react';
import classes from './ProductItem.module.css'
import ProductItemBtn from "./ProductsItemInner/ProductItemBtn";
import FavouritesSection from "./ProductsItemInner/FavouritesSection";
import Badge from "./ProductsItemInner/Badge";

interface ProductItemProps extends PropsWithChildren {
    id: number,
    type: string,
    variants: number;
    title: string,
    color?: string,
    price: number,
    salePrice?: any,
    imgSrc: string,
    badgeText?: string,
    secondBadge?: string
}

const ProductItem: FC<ProductItemProps> = (props) => {
    return (
        <article className={`${classes.item} ${props.type === 'chair' ? classes['chair-mb'] : ''}`}>
            <div className={classes['img-wrapper']}>
                <FavouritesSection/>
                {
                    props.badgeText  &&
                  <Badge badgeText={props.badgeText} price={props.price} salePrice={props.salePrice} secondBadge={props.secondBadge}/>
                }
                <img src={props.imgSrc} alt=""/>
            </div>
            <ProductItemBtn item={props} text={props.variants > 1 ?'Выберите параметры' : 'В корзину'}/>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className='d-flex'>
                <div className={classes['sale-price']}>
                    {props.salePrice && `${props.salePrice}₽`}
                </div>
                <div className={props.salePrice ? classes['old-price'] : classes.price}>
                    {props.price}₽
                </div>
            </div>

        </article>
    );
};

export default ProductItem;