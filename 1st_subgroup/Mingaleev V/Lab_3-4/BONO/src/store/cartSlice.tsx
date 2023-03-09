import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import divanForest from "../assets/images/divan-green-n-500x301.jpg";

export type Item = {
    id: number,
    type: string,
    title: string,
    variants: number,
    color?: string,
    price: number,
    salePrice?: any,
    imgSrc: string,
    badgeText?: string,
    secondBadge?: string,
    itemAmount: number,
    sum: any
}
type TypeState = {
    items: Item[],
    totalSum: number,
    totalItems: number,
    sideBarIsOpen: boolean
}
const initialState: TypeState = {
    items: [],
    totalSum: 0,
    totalItems: 0,
    sideBarIsOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalSum += newItem.price
            state.totalItems++
            state.sideBarIsOpen = true
            if(!existingItem){
                state.items.push({...newItem, itemAmount:1, sum: newItem.salePrice || newItem.price})
            } else {
                existingItem.itemAmount++
                existingItem.sum += existingItem.price
            }
        },
        removeItemFromCart(state, action: PayloadAction<Item>) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalSum -= newItem.price
            state.totalItems--
            if (existingItem && existingItem.itemAmount === 1) {
                state.items = state.items.filter(item => item.id !== existingItem.id)
            } else if(existingItem && existingItem.itemAmount > 1) {
                existingItem.itemAmount--
                existingItem.sum -= existingItem.price
            }
        },
        openSidebar(state){
            state.sideBarIsOpen = true
        },
        closeSidebar(state){
            state.sideBarIsOpen = false
        },
    }
})

export const cartSliceActions = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer

export default cartSlice