import {FC} from "react";
import {observer} from "mobx-react";
import {HeaderComponent} from "../../base";
import {deviceStore} from "../../store";

export const HeaderContainer: FC = observer(() => {
    const {favouritesData, cartData} = deviceStore

    return <HeaderComponent
        isFavoritesIcon
        isCartIcon
        cartData={cartData}
        favDava={favouritesData}
    />
})