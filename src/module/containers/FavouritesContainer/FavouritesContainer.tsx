import {observer} from "mobx-react";
import {LoadingWrapper, MainLayout} from "../../../base/components";
import {deviceStore} from "../../store";
import {FavouritesComponent} from "../../components";
import {FC, useCallback, useEffect} from "react";
import {getFavouritesAction} from "../../actions";
import {useTranslation} from "react-i18next";

export const FavouritesContainer: FC = observer(() => {
    const {t} = useTranslation()
    const {favouritesData} = deviceStore

    const handlerGetFavData = useCallback(() => {
        getFavouritesAction()
    }, []);

    useEffect(() => {
        handlerGetFavData()
    }, [handlerGetFavData]);

    if (deviceStore.isLoading) return <LoadingWrapper/>

    return (
        <MainLayout
            titleText={t('favourites')}
        >
            <FavouritesComponent
                data={favouritesData}
            />
        </MainLayout>
    )
})