import {FC, useCallback, useEffect, useState} from "react";
import {IWithClassName} from "../../../base/interfaces";
import styles from './styles.module.scss'
import {Button, ButtonIcon, WhiteWrapper} from "../../../base/components";
import {ReactComponent as StarIcon} from "../../../assets/icons/star.svg";
import {ReactComponent as LikeIcon} from "../../../assets/icons/like.svg";
import {ReactComponent as NoLikeIcon} from "../../../assets/icons/no_like.svg";
import cx from "classnames";
import {observer} from "mobx-react";
import {deviceStore} from "../../store";
import {useNavigate} from "react-router-dom";
import {removeFavouritesAction, setCartAction, setFavouritesAction} from "../../actions";
import {useTranslation} from "react-i18next";

interface IOneDeviceComponent
    extends IWithClassName {
    id: number,
    deviceImage: string,
    name: string,
    range: number,
    price: number,
    salePrice: number | null

}

export const OneDeviceComponent: FC<IOneDeviceComponent> = observer((
    {
        className,
        id,
        deviceImage,
        name,
        range,
        price,
        salePrice,

    }
) => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState(false)
    const [isCart, setIsCart] = useState(false)

    const {favouritesData, cartData} = deviceStore

    useEffect(() => {
        if (favouritesData) {
            setIsLiked(favouritesData.some(device => device.id === id))
        }
        if (cartData) {
            setIsCart(cartData.some(device => device.id === id))
        }
    }, [cartData, favouritesData, id]);


    const handlerClickFav = useCallback(() => {
        if (!isLiked) {
            setFavouritesAction(id)
        } else {
            removeFavouritesAction(id)
        }

    }, [id, isLiked]);

    const handlerClickCart = useCallback(() => {
        if (!isCart) {
            setCartAction(id)
        } else {
            navigate('/cart')
        }
    }, [id, isCart, navigate]);

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
                    onClick={handlerClickFav}
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
                <div
                    className={styles.img_section}>
                    <img
                        src={deviceImage}
                        alt={'device image'}
                        className={styles.device_image}
                    />
                </div>

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
                                onClick={handlerClickCart}
                            >
                                {!isCart ? t('buy'): t('to_cart')}
                            </Button>
                    </div>
                </div>
            </div>
        </WhiteWrapper>
    )
})