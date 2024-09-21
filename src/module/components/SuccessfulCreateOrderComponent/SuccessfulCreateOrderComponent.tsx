import {CenterMessage, LinkTo, MainLayout} from "../../../base/components";
import {ReactComponent as SuccessIcon} from "../../../assets/icons/success.svg";
import styles from './styles.module.scss'
import {useTranslation} from "react-i18next";

export const SuccessfulCreateOrderComponent = () => {
    const {t} = useTranslation()

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
                            {t('success_order')}
                        </p>
                        <div
                            className={styles.add_message_section}
                        >
                            <div
                                className={styles.add_message}
                            >
                                {t('back_to')}
                            </div>
                            <LinkTo
                                href={'/'}
                                className={styles.link}
                            >
                                {t('main_page')}
                            </LinkTo>
                        </div>
                    </div>

                </div>
            </CenterMessage>
        </MainLayout>

    )
}