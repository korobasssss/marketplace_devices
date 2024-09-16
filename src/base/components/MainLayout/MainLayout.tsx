import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'
import {FooterComponent, HeaderComponent} from "../../../module/base";
import {HeaderText, ScrollWrapper} from "../";

interface IMainLayout
    extends IWithClassName {
    children: ReactNode | ReactElement;
    titleText?: string | null
}

export const MainLayout: FC<IMainLayout> = (
    {
        children,
        titleText
    }
) => {
    return (
        <ScrollWrapper>
            <div
                className={styles.main_section}
            >
                <div
                    className={styles.main}
                >
                    <HeaderComponent
                        isCartIcon
                        isFavoritesIcon
                        className={styles.container}
                    />
                    <div
                        className={styles.container}
                    >
                        {titleText && (
                            <HeaderText
                                title={titleText}
                                theme={'pageTitle'}
                                className={styles.pageTitle}
                            />
                        )}
                        {children}
                    </div>
                    <FooterComponent/>
                </div>
            </div>
        </ScrollWrapper>
    )
}