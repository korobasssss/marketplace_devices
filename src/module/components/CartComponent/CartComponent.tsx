import styles from './styles.module.scss'
import {Button, HeaderText, ScrollWrapper, WhiteWrapper} from "../../../base/components";
import {CartOneDeviceComponent} from "../";

export const CartComponent = () => {
    return (
        <ScrollWrapper
            className={styles.cart_wrapper}
        >
            <HeaderText
                title={'Корзина'}
                theme={'sectionTitle'}
                className={styles.title}
            />
            <div
                className={styles.main}
            >
                <ul
                    className={styles.devices_section}
                >
                    <CartOneDeviceComponent
                        id={0}
                        deviceImage={'../../../../../public/0.svg'}
                        name={'Apple BYZ S852I'}
                        price={2927}
                        count={1}
                    />
                    <CartOneDeviceComponent
                        id={0}
                        deviceImage={'../../../../../public/0.svg'}
                        name={'Apple BYZ S852I'}
                        price={2927}
                        count={1}
                    />
                    <CartOneDeviceComponent
                        id={0}
                        deviceImage={'../../../../../public/0.svg'}
                        name={'Apple BYZ S852I'}
                        price={2927}
                        count={1}
                    />
                    <CartOneDeviceComponent
                        id={0}
                        deviceImage={'../../../../../public/0.svg'}
                        name={'Apple BYZ S852I'}
                        price={2927}
                        count={1}
                    />
                </ul>
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
                        theme={'submit'}
                    >
                        Перейти к оформлению
                    </Button>
                </WhiteWrapper>
            </div>
        </ScrollWrapper>
    )
}