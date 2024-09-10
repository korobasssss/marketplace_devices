import {createBrowserRouter} from "react-router-dom";
import {MainPage, FavouritesPage, CartPage} from "../../../pages";

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
    }
])