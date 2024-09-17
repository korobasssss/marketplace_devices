import {IWithClassName} from "../../interfaces";
import {FC, ReactElement, ReactNode} from "react";
import styles from './styles.module.scss'
import {FooterComponent} from "../../../module/base";
import {HeaderText, ScrollWrapper} from "../";
import {HeaderContainer} from "../../../module/containers/HeaderContainer/HeaderContainer.tsx";

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
                    <HeaderContainer/>
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