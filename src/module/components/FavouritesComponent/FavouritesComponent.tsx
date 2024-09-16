import {observer} from "mobx-react";
import {IDataOneDeviceView} from "../../interfaces";
import {FC} from "react";
import {DeviceSectionComponent} from "../DeviceSectionComponent";
import {NullDataText} from "../../../base/components";
import styles from './styles.module.scss'

interface IFavouritesComponent {
    data: IDataOneDeviceView[] | null
}

export const FavouritesComponent: FC<IFavouritesComponent> = observer((
    {
        data
    }
) => {
    if (!data) return (
        <NullDataText
            text={'В избранном пусто...'}
            className={styles.no_data}
        />
    )

    return (
        <DeviceSectionComponent
            data={data}
        />
    )
})