import {observer} from "mobx-react";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {deviceStore} from "../../store";
import {FavouritesComponent} from "../../components";

export const FavouritesContainer = observer(() => {
    const {favouritesData} = deviceStore

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return (
        <MainLayout
            titleText={'Избранное'}
        >
            <FavouritesComponent
                data={favouritesData}
            />
        </MainLayout>
    )
})