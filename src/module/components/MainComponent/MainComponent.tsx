import {observer} from "mobx-react";
import {DeviceSectionComponent} from "../";
import {IDataOneSectionView} from "../../interfaces";
import {FC} from "react";
import {NullDataText} from "../../../base/components";
import {useTranslation} from "react-i18next";


interface IMainComponent {
    data: IDataOneSectionView[] | null
}

export const MainComponent: FC<IMainComponent> = observer((
    {
        data
    }
) => {
    const {t} = useTranslation()

    if (!data || data.length === 0) return (
        <NullDataText
            text={t('no_data')}
        />
    )

    return (
        <ul>
            {data.map(section => {
                return (
                    <DeviceSectionComponent
                        title={t(section.value)}
                        data={section.devices}
                    />
                )
            })}
        </ul>
    )
})