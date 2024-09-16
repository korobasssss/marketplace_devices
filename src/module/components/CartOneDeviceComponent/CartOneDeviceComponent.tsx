import {IWithClassName} from "../../../base/interfaces";
import {FC} from "react";
import {ButtonIcon, WhiteWrapper} from "../../../base/components";
import styles from './styles.module.scss'
import {ReactComponent as GarbageIcon} from "../../../assets/icons/garbage.svg";
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../../assets/icons/minus.svg";
import cx from "classnames";

interface ICartOneDeviceComponent
    extends IWithClassName {
    id: number,
    deviceImage: string,
    name: string,
    price: number,
    count: number
}

export const CartOneDeviceComponent: FC<ICartOneDeviceComponent> = (
    {
        className,
        id,
        deviceImage,
        name,
        price,
        count
    }
) => {
    return (
        <WhiteWrapper
            rounding={'allRound'}
            key={id}
            className={cx(
                className,
                styles.one_device_wrapper
            )}
        >
            <div
                className={styles.main_section}
            >
                <div
                    className={styles.data_section}
                >
                    <div
                        className={styles.img_section}>
                        <img
                            src={deviceImage}
                            alt={'device image'}
                            className={styles.img}
                        />
                    </div>
                    <div
                        className={styles.name_section}
                    >
                        <header
                            className={styles.name}
                        >
                            {name}
                        </header>
                        <div
                            className={styles.price}
                        >
                            {price} ₽
                        </div>
                    </div>
                </div>
                <div
                    className={styles.delete_section}
                >
                    <ButtonIcon>
                        <GarbageIcon/>
                    </ButtonIcon>
                </div>
            </div>
            <div
                className={styles.footer_section}
            >
                <div
                    className={styles.count_section}
                >
                    <ButtonIcon>
                        <MinusIcon/>
                    </ButtonIcon>
                    <div
                        className={styles.count}
                    >
                        {count}
                    </div>
                    <ButtonIcon>
                        <PlusIcon/>
                    </ButtonIcon>
                </div>
                <div
                    className={styles.total_price}
                >
                    {count * price} ₽
                </div>
            </div>
        </WhiteWrapper>
    )
}