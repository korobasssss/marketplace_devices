import {observer} from "mobx-react";
import {deviceStore} from "../../store";
import {CartComponent} from "../../components";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {useCallback, useEffect} from "react";
import {getCartAction} from "../../actions";

export const CartContainer = observer(() => {
    const {cartData} = deviceStore

    const handlerGetCartData = useCallback(() => {
        getCartAction()
    }, []);

    useEffect(() => {
        handlerGetCartData()
    }, []);

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return (
        <MainLayout
            titleText={'Корзина'}>
            <CartComponent
                data={cartData}
            />
        </MainLayout>
    )
})