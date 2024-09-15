import {FC} from "react";
import {HeaderText} from "../../../base/components";
import {IWithClassName} from "../../../base/interfaces";
import {OneDeviceComponent} from "../";
import styles from './styles.module.scss'
import {IDataOneDeviceView} from "../../interfaces";

interface IDeviceSectionComponent
    extends IWithClassName {
    title: string
    data: IDataOneDeviceView[]
}

export const DeviceSectionComponent: FC<IDeviceSectionComponent> = (
    {
        title,
        data
    }
) => {
    return (
        <section
            className={styles.device_main}
        >
            <HeaderText
                title={title}
                theme={'sectionTitle'}
            />
            <ul
                className={styles.ul_devices}
            >
                {data.map(oneDevice => {
                    return (
                        <OneDeviceComponent
                            id={oneDevice.id}
                            deviceImage={oneDevice.deviceImage}
                            name={oneDevice.name}
                            range={oneDevice.range}
                            price={oneDevice.price}
                            salePrice={oneDevice.salePrice}
                            isLiked
                            isCart
                        />
                    )
                })}
            </ul>
        </section>
    )
}