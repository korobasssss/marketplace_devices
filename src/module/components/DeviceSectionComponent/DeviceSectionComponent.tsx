import {FC} from "react";
import {HeaderText} from "../../../base/components";
import {IWithClassName} from "../../../base/interfaces";
import {OneDeviceComponent} from "../";
import styles from './styles.module.scss'
import {IDataOneDeviceCartView, IDataOneDeviceView} from "../../interfaces";
import {observer} from "mobx-react";

interface IDeviceSectionComponent
    extends IWithClassName {
    title?: string
    data: IDataOneDeviceView[],
    cartData: IDataOneDeviceCartView[] | null
    favouritesData: IDataOneDeviceView[] | null
}

export const DeviceSectionComponent: FC<IDeviceSectionComponent> = observer((
    {
        title,
        data,
        cartData,
        favouritesData
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
                            isLiked={favouritesData ? favouritesData.some(device => device.id === oneDevice.id): false}
                            isCart={cartData ? cartData.some(device => device.id === oneDevice.id) : false}
                        />
                    )
                })}
            </ul>
        </div>
    )
})