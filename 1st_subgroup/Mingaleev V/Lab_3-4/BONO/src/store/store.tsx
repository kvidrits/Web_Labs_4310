import {configureStore} from "@reduxjs/toolkit";
import {cartSliceReducer} from "./cartSlice";


const store = configureStore({
    reducer: {
        cartSlice: cartSliceReducer
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch