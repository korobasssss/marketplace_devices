import {FC} from "react";
import styles from './styles.module.scss'
import {HeaderText, WhiteWrapper, LinkTo, Button} from "../../../base/components";
import {ReactComponent as LangIcon} from "../../../assets/icons/lang.svg";
import {ILinks} from "../../interfaces/ILinks.ts";

interface IFooterComponent {
    footerLinks: ILinks[]
    contacts: ILinks[]
}

export const FooterComponent : FC<IFooterComponent> = (
    {
        footerLinks,
        contacts
    }
) => {
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
                        {footerLinks.map(oneLink => {
                            return (
                                <LinkTo
                                    href={oneLink.link}
                                    isNewPage
                                >
                                    {oneLink.title}
                                </LinkTo>
                            )
                        })}
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
                    {contacts.map(oneContact => {
                        return (
                            <LinkTo
                                href={oneContact.link}
                                isNewPage
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