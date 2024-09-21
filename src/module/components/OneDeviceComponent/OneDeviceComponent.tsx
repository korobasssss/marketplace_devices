import {FC, useCallback, useState} from "react";
import {IWithClassName} from "../../../base/interfaces";
import styles from './styles.module.scss'
import {Button, ButtonIcon, Popup, WhiteWrapper} from "../../../base/components";
import {ReactComponent as StarIcon} from "../../../assets/icons/star.svg";
import {ReactComponent as LikeIcon} from "../../../assets/icons/like.svg";
import {ReactComponent as NoLikeIcon} from "../../../assets/icons/no_like.svg";
import {ReactComponent as InfoIcon} from "../../../assets/icons/info.svg";
import cx from "classnames";
import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {removeFavouritesAction, setCartAction, setFavouritesAction} from "../../actions";
import {useTranslation} from "react-i18next";
import {OneDeviceFullInformation} from "../";
import {IDataDescriptionOneView} from "../../interfaces";
import { paths } from "../../../base/routing/elements";

interface IOneDeviceComponent
    extends IWithClassName {
    id: number,
    deviceImage: string,
    name: string,
    range: number,
    price: number,
    salePrice: number | null,
    description: IDataDescriptionOneView[],
    isLiked: boolean
    isCart: boolean
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
        description,
        isLiked,
        isCart

    }
) => {
    const {t} = useTranslation();
    const navigate = useNavigate()
    const [isPopupOpen, setIsPopupOpen] = useState(false)

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
            navigate(paths.CART)
        }
    }, [id, isCart, navigate]);

    const handlerChangePopup = useCallback(() => {
        setIsPopupOpen(!isPopupOpen)
    }, [isPopupOpen]);

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
                    {isLiked ?
                        <LikeIcon
                            className={styles.icon}
                        /> :
                        <NoLikeIcon
                            className={styles.icon}
                        />}
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
                        <div
                            className={styles.name_section}
                        >
                            <header
                                className={styles.device_name}
                            >
                                {name}
                            </header>
                            <Button
                                theme={'base'}
                                onClick={handlerChangePopup}
                            >
                                <InfoIcon/>
                            </Button>
                        </div>
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
                            {!isCart ? t('buy') : t('to_cart')}
                        </Button>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <Popup
                    title={name}
                    handleCancelButtonClick={handlerChangePopup}
                    isPopupOpen={isPopupOpen}
                >
                    <OneDeviceFullInformation
                        id={id}
                        deviceImage={deviceImage}
                        description={description}
                    />
                </Popup>
            )}
        </WhiteWrapper>
    )
})