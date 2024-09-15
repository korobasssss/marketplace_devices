import {DeviceSectionComponent} from "../";
import {IDataOneSectionView} from "../../interfaces";
import {FC} from "react";
import {observer} from "mobx-react";

interface IMainComponent {
    data: IDataOneSectionView[]
}

export const MainComponent: FC<IMainComponent> =observer((
    {
        data
    }
) => {
    return (
        <ul>
            {data.map(section => {
                return (
                    <DeviceSectionComponent
                        title={section.title}
                        data={section.devices}
                        key={section.title}
                    />
                )
            })}
        </ul>
    )
})