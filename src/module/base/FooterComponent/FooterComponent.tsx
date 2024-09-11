import {FC} from "react";
import styles from './styles.module.scss'
import {HeaderText, WhiteWrapper, LinkTo, Button} from "../../../base/components";
import {ReactComponent as TelegramIcon} from "../../../assets/icons/telegram.svg";
import {ReactComponent as WhatsappIcon} from "../../../assets/icons/whatsapp.svg";
import {ReactComponent as VkIcon} from "../../../assets/icons/vk.svg";
import {ReactComponent as LangIcon} from "../../../assets/icons/lang.svg";

export const FooterComponent : FC = () => {
    return (
        <WhiteWrapper
            rounding={'upRound'}
            className={styles.footer_section}
        >
            <footer
                className={styles.Footer}
            >
                <HeaderText
                    title={'QPICK'}
                    theme={'pageTitle'}
                />
                <nav
                    className={styles.navigation}
                >
                    <div
                        className={styles.links_section}
                    >
                        <LinkTo
                            href={'/favourites'}
                            isNewPage
                        >
                            Избранное
                        </LinkTo>
                        <LinkTo
                            href={'/favourites'}
                            isNewPage
                        >
                            Корзина
                        </LinkTo>
                        <LinkTo
                            isNewPage
                            href={'/favourites'}
                        >
                            Контакты
                        </LinkTo>
                        <LinkTo
                            isNewPage
                            href={'/favourites'}
                        >
                            Условия сервиса
                        </LinkTo>

                        <div
                            className={styles.lang_section}
                        >
                            <LangIcon/>
                            <Button
                                theme={'blackOrOrange'}
                            >
                                Рус
                            </Button>
                            <Button
                                theme={'blackOrOrange'}
                            >
                                Eng
                            </Button>
                        </div>
                    </div>
                </nav>
                <nav
                    className={styles.resources}
                >
                    <LinkTo
                        href={'https://vk.com/neoflex_ru'}
                        isNewPage
                    >
                        <VkIcon/>
                    </LinkTo>
                    <LinkTo
                        href={"https://t.me/neoflexcareers"}
                        isNewPage
                    >
                        <TelegramIcon/>
                    </LinkTo>
                    <LinkTo
                        href={'https://wa.me/89601308479'}
                        isNewPage
                    >
                        <WhatsappIcon/>
                    </LinkTo>
                </nav>
            </footer>
        </WhiteWrapper>

    )
}