import {observer} from "mobx-react";
import {deviceStore} from "../../store";
import {CartComponent} from "../../components";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {useCallback, useEffect} from "react";
import {getCartAction} from "../../actions";
import {useTranslation} from "react-i18next";

export const CartContainer = observer(() => {
    const {t} = useTranslation()
    const {cartData} = deviceStore

    const handlerGetCartData = useCallback(() => {
        getCartAction()
    }, []);

    useEffect(() => {
        handlerGetCartData()
    }, [handlerGetCartData]);

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return (
        <MainLayout
            titleText={t('cart')}>
            <CartComponent
                data={cartData}
            />
        </MainLayout>
    )
})