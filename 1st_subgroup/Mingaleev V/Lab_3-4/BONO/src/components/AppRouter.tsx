import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./Home";
import Main from "./Main/Main";
import Converter from "./Converter";
import App from "../App";
import Cart from "./Main/Cart/Cart";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<App />} />
            {/*<Route path='/main/m' element={<Main />}/>*/}
            <Route path='/home' element={<Home />} />
            <Route path='/converter' element={<Converter />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourites' element={<Converter />} />
            <Route path='/favourites' element={<Converter />} />
        </Route>
    )
)
