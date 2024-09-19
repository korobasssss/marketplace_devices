import styles from './styles.module.scss'
import {Button, NullDataText, Popup, WhiteWrapper} from "../../../base/components";
import {CartOneDeviceComponent} from "../";
import {IDataOneDeviceCartView} from "../../interfaces";
import {FC, useCallback, useState} from "react";
import {observer} from "mobx-react";
import {useTranslation} from "react-i18next";
import {CreateOrderComponent} from "../";

interface ICartComponent {
    data: IDataOneDeviceCartView[] | null;
}

export const CartComponent: FC<ICartComponent> = observer((
    {
        data
    }
) => {
    const {t} = useTranslation()
    const [isStartMakeOrder, setIsStartMakeOrder] = useState(false)

    const handlerMakeOrder = useCallback(() => {
        setIsStartMakeOrder(!isStartMakeOrder)
    }, [isStartMakeOrder]);

    return (
        <div
            className={styles.cart_wrapper}
        >
            <div
                className={styles.main}
            >
                {!data || data.length === 0 ?
                    <NullDataText
                        text={t('cart_no_data')}
                    />
                    :
                    <ul
                        className={styles.devices_section}
                    >
                        {data.map(oneDevice => {
                            return (
                                <CartOneDeviceComponent
                                    key={oneDevice.id}
                                    id={oneDevice.id}
                                    deviceImage={oneDevice.deviceImage}
                                    name={oneDevice.name}
                                    price={oneDevice.price}
                                    count={oneDevice.count}
                                />
                            )
                        })}
                    </ul>
                }
                <WhiteWrapper
                    rounding={'allRound'}
                    className={styles.total_section}
                >
                    <div
                        className={styles.price_section}
                    >
                        <header>
                            {t('total')}
                        </header>
                        <div>
                            ₽ {' '}
                            {data ?
                                data.reduce((sum, item) => sum + item.price * item.count, 0)
                                :
                                0
                            }
                        </div>
                    </div>
                    <Button
                        disabled={!data || data.length === 0}
                        theme={'submit'}
                        onClick={handlerMakeOrder}
                    >
                        {t('order')}
                    </Button>
                </WhiteWrapper>
            </div>
            {isStartMakeOrder && data && data.length > 0 && (
                <Popup
                    title={'Оформление заказа'}
                    handleCancelButtonClick={handlerMakeOrder}
                    isPopupOpen={isStartMakeOrder}
                >
                    <CreateOrderComponent
                        totalPrice={data.reduce((sum, item) => sum + item.price * item.count, 0)}
                    />
                </Popup>
            )}
        </div>
    )
})