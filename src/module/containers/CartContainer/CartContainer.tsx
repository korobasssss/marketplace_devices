import {observer} from "mobx-react";
import {deviceStore} from "../../store";
import {CartComponent} from "../../components";
import {LoadingWrapper, MainLayout} from "../../../base/components";

export const CartContainer = observer(() => {
    const {cartData} = deviceStore

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