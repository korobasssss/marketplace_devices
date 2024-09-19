import {FC} from "react";
import {HeaderText} from "../../../base/components";
import {IWithClassName} from "../../../base/interfaces";
import {OneDeviceComponent} from "../";
import styles from './styles.module.scss'
import {IDataOneDeviceView} from "../../interfaces";
import {observer} from "mobx-react";

interface IDeviceSectionComponent
    extends IWithClassName {
    title?: string
    data: IDataOneDeviceView[]
}

export const DeviceSectionComponent: FC<IDeviceSectionComponent> = observer((
    {
        title,
        data
    }
) => {
    return (
        <div
            className={styles.device_main}
        >
            {title && (
                <HeaderText
                    title={title}
                    theme={'sectionTitle'}
                />
            )}
            <ul
                className={styles.ul_devices}
            >
                {data.map(oneDevice => {
                    return (
                        <OneDeviceComponent
                            key={oneDevice.id}
                            id={oneDevice.id}
                            deviceImage={oneDevice.deviceImage}
                            name={oneDevice.name}
                            range={oneDevice.range}
                            price={oneDevice.price}
                            salePrice={oneDevice.salePrice}
                            description={oneDevice.description}
                        />
                    )
                })}
            </ul>
        </div>
    )
})