import {observer} from "mobx-react";
import {DeviceSectionComponent} from "../";
import {IDataOneSectionView} from "../../interfaces";
import {FC} from "react";
import {NullDataText} from "../../../base/components";


interface IMainComponent {
    data: IDataOneSectionView[] | null
}

export const MainComponent: FC<IMainComponent> = observer((
    {
        data
    }
) => {
    if (!data || data.length === 0) return (
        <NullDataText
            text={'Нет товаров'}
        />
    )

    return (
        <ul>
            {data.map(section => {
                return (
                    <DeviceSectionComponent
                        title={section.title}
                        data={section.devices}
                    />
                )
            })}
        </ul>
    )
})