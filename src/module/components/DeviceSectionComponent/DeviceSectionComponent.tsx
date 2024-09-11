import {FC} from "react";
import {HeaderText} from "../../../base/components";
import {IWithClassName} from "../../../base/interfaces";
import {OneDeviceComponent} from "../";
import styles from './styles.module.scss'

interface IDeviceSectionComponent
    extends IWithClassName {
    title: string
}

export const DeviceSectionComponent: FC<IDeviceSectionComponent> = (
    {
        title
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
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={2927}
                    isLiked
                    isCart
                />
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={null}
                    isLiked={false}
                    isCart
                />
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={2927}
                    isLiked={false}
                    isCart
                />
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={2927}
                    isLiked
                    isCart
                />
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={null}
                    isLiked
                    isCart
                />
                <OneDeviceComponent
                    id={0}
                    deviceImage={'../../../../public/0.svg'}
                    name={'Apple BYZ S852I'}
                    range={4.7}
                    price={3527}
                    salePrice={2927}
                    isLiked={false}
                    isCart
                />
            </ul>
        </section>
    )
}