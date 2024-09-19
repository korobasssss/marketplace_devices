import {IWithClassName} from "../../../base/interfaces";
import {FC, useCallback} from "react";
import {ButtonIcon, WhiteWrapper} from "../../../base/components";
import styles from './styles.module.scss'
import {ReactComponent as GarbageIcon} from "../../../assets/icons/garbage.svg";
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg";
import {ReactComponent as MinusIcon} from "../../../assets/icons/minus.svg";
import cx from "classnames";
import {removeCartAction, updateCountCartAction} from "../../actions";
import {observer} from "mobx-react";

interface ICartOneDeviceComponent
    extends IWithClassName {
    id: number,
    deviceImage: string,
    name: string,
    price: number,
    count: number
}

export const CartOneDeviceComponent: FC<ICartOneDeviceComponent> = observer((
    {
        className,
        id,
        deviceImage,
        name,
        price,
        count
    }
) => {

    const handlerRemoveDevice = useCallback(() => {
        removeCartAction(id)
    }, [id]);

    const handlerAddCount = useCallback(() => {
        updateCountCartAction(true, id)
    }, [id]);

    const handlerRemoveCount = useCallback(() => {
        if (count > 1) {
            updateCountCartAction(false, id)
        }

    }, [count, id]);

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
                    <ButtonIcon
                        onClick={handlerRemoveDevice}
                    >
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
                    <ButtonIcon
                        onClick={handlerRemoveCount}
                    >
                        <MinusIcon/>
                    </ButtonIcon>
                    <div
                        className={styles.count}
                    >
                        {count}
                    </div>
                    <ButtonIcon
                        onClick={handlerAddCount}
                    >
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
})