import {createBrowserRouter} from "react-router-dom";
import {MainPage, FavouritesPage, CartPage, SuccessfulCreateOrderPage} from "../../../pages";
import {paths} from "./paths.ts";

export const router = createBrowserRouter([
    {
        path: paths.MAIN,
        element: <MainPage/>
    },
    {
        path: paths.FAVOURITES,
        element: <FavouritesPage/>
    },
    {
        path: paths.CART,
        element: <CartPage/>
    },
    {
        path: '/success_order',
        element: <SuccessfulCreateOrderPage/>
    }
])