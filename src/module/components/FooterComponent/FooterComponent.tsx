import {FC} from "react";
import styles from './styles.module.scss'
import {HeaderText, WhiteWrapper, LinkIcon, Button, LinkTo} from "../../../base/components";
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
                <HeaderText title={'QPICK'} theme={'pageTitle'}/>
                <nav
                    className={styles.navigation}
                >
                    <div
                        className={styles.links_section}
                    >
                        <LinkTo
                            href={'/fav'}
                        >
                            Избранное
                        </LinkTo>
                        <LinkTo
                            href={'/fav'}
                        >
                            Корзина
                        </LinkTo>
                        <LinkTo
                            href={'/fav'}
                        >
                            Контакты
                        </LinkTo>
                        <LinkTo
                            href={'/fav'}
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
                    <LinkIcon href={'https://vk.com/neoflex_ru'}>
                        <VkIcon/>
                    </LinkIcon>
                    <LinkIcon href={"https://t.me/neoflexcareers"}>
                        <TelegramIcon/>
                    </LinkIcon>
                    <LinkIcon href={'https://wa.me/89601308479'}>
                        <WhatsappIcon/>
                    </LinkIcon>
                </nav>
            </footer>
        </WhiteWrapper>
    )
}