import {FC} from "react";
import {IWithClassName} from "../../../base/interfaces";
import styles from './styles.module.scss'
import {Button, ButtonIcon, WhiteWrapper} from "../../../base/components";
import {ReactComponent as StarIcon} from "../../../assets/icons/star.svg";
import {ReactComponent as LikeIcon} from "../../../assets/icons/like.svg";
import {ReactComponent as NoLikeIcon} from "../../../assets/icons/no_like.svg";
import cx from "classnames";

interface IOneDeviceComponent
    extends IWithClassName {
    id: number,
    deviceImage: string,
    name: string,
    range: number,
    price: number,
    salePrice: number | null
    isLiked: boolean
    isCart: boolean

}

export const OneDeviceComponent: FC<IOneDeviceComponent> = (
    {
        className,
        id,
        deviceImage,
        name,
        range,
        price,
        salePrice,
        isCart,
        isLiked

    }
) => {

    return (
        <WhiteWrapper
            key={id}
            rounding={'allRound'}
            className={cx(
                className,
                styles.one_device_wrapper
            )}
        >
            <div
                className={styles.one_device_main}
            >
                <ButtonIcon
                    className={styles.button_icon}
                >
                    { isLiked ?
                        <LikeIcon
                            className={styles.icon}
                        /> :
                        <NoLikeIcon
                            className={styles.icon}
                        /> }
                </ButtonIcon>
                <img
                    src={deviceImage}
                    alt={'device image'}
                    className={styles.device_image}
                />
                <div
                    className={styles.data_wrapper}
                >
                    <div
                        className={styles.name_range_wrapper}
                    >
                        <header
                            className={styles.device_name}
                        >
                            {name}
                        </header>
                        <div
                            className={styles.price_wrapper}
                        >
                            <div
                                className={styles.actual_price}
                            >
                                {salePrice ? salePrice : price} ₽
                            </div>
                            {salePrice && (
                                <div
                                    className={styles.base_price}
                                >
                                    {price} ₽
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={styles.name_range_wrapper}
                    >
                        <div
                            className={styles.range_wrapper}
                        >
                            <StarIcon/>
                            <div
                                className={styles.range}
                            >
                                {range}
                            </div>
                        </div>
                            <Button
                                theme={'base'}
                            >
                                {!isCart ? 'Купить ': 'В корзине'}
                            </Button>
                    </div>
                </div>
            </div>
        </WhiteWrapper>
    )
}