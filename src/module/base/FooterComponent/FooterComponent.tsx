import {FC, useCallback} from "react";
import styles from './styles.module.scss'
import {HeaderText, WhiteWrapper, LinkTo, Button} from "../../../base/components";
import {ReactComponent as LangIcon} from "../../../assets/icons/lang.svg";
import {ILinks, ILinksWithValue} from "../../interfaces/ILinks.ts";
import {useTranslation} from "react-i18next";
import i18n from "../../../i18n.ts";
import {informationStore} from "../../store";

interface IFooterComponent {
    footerLinks: ILinksWithValue[]
    contacts: ILinks[]
}

export const FooterComponent : FC<IFooterComponent> = (
    {
        footerLinks,
        contacts
    }
) => {
    const { t } = useTranslation();

    const {languages} = informationStore

    const changeLanguage = useCallback((lang: string) => {
        i18n.changeLanguage(lang);
    }, []);

    const handleChangeLanguage = useCallback((lang: string) => {
        changeLanguage(lang);
    }, [changeLanguage]);


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
                    className={styles.header}
                />
                <nav
                    className={styles.navigation}
                >
                    <div
                        className={styles.links_section}
                    >
                        {footerLinks.map((oneLink, index) => {
                            return (
                                <LinkTo
                                    key={index}
                                    href={oneLink.link}
                                >
                                    {t(oneLink.value)}
                                </LinkTo>
                            )
                        })}
                        <div
                            className={styles.lang_section}
                        >
                            <LangIcon/>
                            {languages.map((oneLang, index) => {
                                return (
                                    <Button
                                        key={index}
                                        theme={'blackOrOrange'}
                                        onClick={() => handleChangeLanguage(oneLang.shortName)}
                                        active={i18n.language === oneLang.shortName}
                                    >
                                        {oneLang.title}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                <nav
                    className={styles.resources}
                >
                    {contacts.map((oneContact, index) => {
                        return (
                            <LinkTo
                                href={oneContact.link}
                                key={index}
                            >
                                <img
                                    src={oneContact.title}
                                    alt={'link'}
                                />
                            </LinkTo>
                        )
                    })}
                </nav>
            </footer>
        </WhiteWrapper>

    )
}