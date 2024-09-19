import {createBrowserRouter} from "react-router-dom";
import {MainPage, FavouritesPage, CartPage, SuccessfulCreateOrderPage} from "../../../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/favourites',
        element: <FavouritesPage/>
    },
    {
        path: '/cart',
        element: <CartPage/>
    },
    {
        path: '/success_order',
        element: <SuccessfulCreateOrderPage/>
    }
])