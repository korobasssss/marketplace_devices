import styles from './styles.module.scss'
import {Button, NullDataText, WhiteWrapper} from "../../../base/components";
import {CartOneDeviceComponent} from "../";
import {IDataOneDeviceCartView} from "../../interfaces";
import {FC} from "react";

interface ICartComponent {
    data: IDataOneDeviceCartView[] | null;
}

export const CartComponent: FC<ICartComponent> = (
    {
        data
    }
) => {
    return (
        <div
            className={styles.cart_wrapper}
        >
            <div
                className={styles.main}
            >
                {!data ?
                    <NullDataText
                        text={'Корзина пуста...'}
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
                            ИТОГО
                        </header>
                        <div>
                            ₽ 2927
                        </div>
                    </div>
                    <Button
                        disabled={!data}
                        theme={'submit'}
                    >
                        Перейти к оформлению
                    </Button>
                </WhiteWrapper>
            </div>
        </div>
    )
}