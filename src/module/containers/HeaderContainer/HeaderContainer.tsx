import {FC} from "react";
import {HeaderComponent} from "../../base";
import {deviceStore} from "../../store";
import {observer} from "mobx-react";
import {LoadingWrapper} from "../../../base/components";

export const HeaderContainer: FC = observer(() => {
    const {favouritesData, cartData} = deviceStore

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return <HeaderComponent
        isFavoritesIcon
        isCartIcon
        cartData={cartData}
        favDava={favouritesData}
    />
})