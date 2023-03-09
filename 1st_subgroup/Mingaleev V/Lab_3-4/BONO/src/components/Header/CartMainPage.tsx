import React, {useState} from 'react';
import classes from './CartMainPage.module.css'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {createPortal} from "react-dom";
import CartSidebar from "./CartSidebar";
import {cartSliceActions} from "../../store/cartSlice";

const CartMainPage = () => {
    const dispatch = useAppDispatch()
    const totalItems = useAppSelector(state => state.cartSlice.totalItems)

    const onSidebarHandler = () => {
        dispatch(cartSliceActions.openSidebar())
    }

    return (
        <>
            <div>
                <button onClick={onSidebarHandler} className={classes['header-cart__link']}>
                    <span className={classes['header-cart__link-ico']}></span>
                    <sup>{totalItems}</sup>
                </button>
            </div>
            <CartSidebar />
        </>
    );
};

export default CartMainPage;