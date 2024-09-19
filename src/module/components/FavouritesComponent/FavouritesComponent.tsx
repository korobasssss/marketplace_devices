import {observer} from "mobx-react";
import {IDataOneDeviceView} from "../../interfaces";
import {FC} from "react";
import {DeviceSectionComponent} from "../DeviceSectionComponent";
import {NullDataText} from "../../../base/components";
import styles from './styles.module.scss'
import {useTranslation} from "react-i18next";

interface IFavouritesComponent {
    data: IDataOneDeviceView[] | null
}

export const FavouritesComponent: FC<IFavouritesComponent> = observer((
    {
        data
    }
) => {
    const {t} = useTranslation()

    if (!data || data.length === 0) return (
        <NullDataText
            text={`${t('fav_no_data')}...`}
            className={styles.no_data}
        />
    )

    return (
        <DeviceSectionComponent
            data={data}
        />
    )
})