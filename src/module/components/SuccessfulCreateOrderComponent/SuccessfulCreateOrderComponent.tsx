import {CenterMessage, LinkTo, MainLayout} from "../../../base/components";
import {ReactComponent as SuccessIcon} from "../../../assets/icons/success.svg";
import styles from './styles.module.scss'

export const SuccessfulCreateOrderComponent = () => {
    return (
        <MainLayout>
            <CenterMessage>
                <div
                    className={styles.main_section}
                >
                    <SuccessIcon/>
                    <div
                        className={styles.message_section}
                    >
                        <p
                            className={styles.message}
                        >
                            Ваш заказ успешно оформлен
                        </p>
                        <p
                            className={styles.add_message_section}
                        >
                            <div
                                className={styles.add_message}
                            >
                                Вернуться на
                            </div>
                            <LinkTo
                                href={'/'}
                                isNewPage={false}
                                className={styles.link}
                            >
                                главную страницу
                            </LinkTo>
                        </p>
                    </div>

                </div>
            </CenterMessage>
        </MainLayout>

    )
}